const express = require('express'); // require을 사용하게 되면 자동적으로 node_modules를 보기 때문에 express 이름만 적어줘도 경로 없이 가져올 수 있게 된다.
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);
const socketIO = require('socket.io');

const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));

// 포트 설정
const PORT = process.env.PORT || 5000; // process 환경에 PORT가 지정이 됐으면 그것을 사용하고 아니라면 5000번 사용

io.on('connection', (socket) => {
  console.log('연결이 이루어 졌습니다');
});

// 서버 실행 명령어
// listen(포트, 실행할 명령)
server.listen(PORT, () => console.log(`sever is running ${PORT}`));
