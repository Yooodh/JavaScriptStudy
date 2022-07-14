const express = require('express'); // require을 사용하게 되면 자동적으로 node_modules를 보기 때문에 express 이름만 적어줘도 경로 없이 가져올 수 있게 된다.
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);
const socketIO = require('socket.io');
const moment = require('moment');

const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));

// 포트 설정
const PORT = process.env.PORT || 5000; // process 환경에 PORT가 지정이 됐으면 그것을 사용하고 아니라면 5000번 사용

io.on('connection', (socket) => {
  // console.log('연결이 이루어 졌습니다.');

  // 서버에서 받아주기
  // socket.on('채팅아이디', 실행할 함수)
  socket.on('chatting', (data) => {
    const { name, msg } = data;
    // 메세지 되돌려주기
    io.emit('chatting', {
      // name: name,
      name,
      // msg: msg,
      msg,
      // time: time,
      time: moment(new Date()).format('h:ss A'),
    });
  });
});

// 서버 실행 명령어
// listen(포트, 실행할 명령)
server.listen(PORT, () => console.log(`sever is running ${PORT}`));

/**
 * 1. emit을 통해 보내고
 * 2. 서버에서 다시 emit을 통해서 fornt end쪽으로 보내고
 * 3. front end가 메시지를 받은 것을 확인할 수 있다.
 */
