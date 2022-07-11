'use strict';

// socket에 클라이언트 socket io 담기
const socket = io();

// socket 객체를 이용해서 메시지 보내기
// socket.emit(채널아이디, 내용);
socket.emit('chatting', 'from front');

// 받아주기
// socket.on('채팅아이디', 실행할 함수)
socket.on('chatting', (data) => {
  console.log(data);
});

// 정상적으로 불러와졌는지 확인
console.log(socket);

/**
 * 1. emit을 통해 보내고
 * 2. 서버에서 다시 emit을 통해서 fornt end쪽으로 보내고
 * 3. front end가 메시지를 받은 것을 확인할 수 있다.
 */
