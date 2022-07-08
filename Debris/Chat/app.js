const express = require('express'); // require을 사용하게 되면 자동적으로 node_modules를 보기 때문에 express 이름만 적어줘도 경로 없이 가져올 수 있게 된다.
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
