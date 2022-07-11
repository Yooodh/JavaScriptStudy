'use strict';

// socket에 클라이언트 socket io 담기
const socket = io();

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click', () => {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  // socket 객체를 이용해서 메시지 보내기
  // socket.emit(채널아이디, 내용);
  socket.emit('chatting', param);
});

// 받아주기
// socket.on('채팅아이디', 실행할 함수)
socket.on('chatting', (data) => {
  const li = document.createElement('li');
  li.innerText = `${data.name}님이 - ${data.msg}`;
  // chatList에 방금 생성한 li 집어넣어주기
  chatList.appendChild(li);
});

// 정상적으로 불러와졌는지 확인
console.log(socket);

/**
 * 1. emit을 통해 보내고
 * 2. 서버에서 다시 emit을 통해서 fornt end쪽으로 보내고
 * 3. front end가 메시지를 받은 것을 확인할 수 있다.
 */
