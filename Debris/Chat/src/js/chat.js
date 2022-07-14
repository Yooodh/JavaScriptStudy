'use strict';

// socket에 클라이언트 socket io 담기
const socket = io();

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container');

chatInput.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    send();
    chatInput.value = '';
  }
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  // socket 객체를 이용해서 메시지 보내기
  // socket.emit(채널아이디, 내용);
  socket.emit('chatting', param);
}
sendButton.addEventListener('click', send);

// 받아주기
// socket.on('채팅아이디', 실행할 함수)
socket.on('chatting', (data) => {
  // Destructuring 사용
  // 넘어온 데이터를 쪼개서 필요한 프로퍼티만 변수로 선언
  const { name, msg, time } = data;

  // const item = new LiModel(data.name, data.msg, data.time);
  const item = new LiModel(name, msg, time);
  item.makeLi();

  // 스크롤 처리
  // 스크롤 위치를 읽어서 그 높이로 이동시키기
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

// 정상적으로 불러와졌는지 확인
console.log(socket);

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement('li');
    // nickname의 value가 서버에서 넘겨받은 이름과 같으면 class를 sent로 주고 그게 아니면 recevied로 준다.
    li.classList.add(nickname.value === this.name ? 'sent' : 'received');
    const dom = `<span class="profile">
    <span class="user">${this.name}</span>
    <img
      class="image"
      src="https://placeimg.com/50/50/any"
      alt="any"
    />
    </span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}

/**
 * 1. emit을 통해 보내고
 * 2. 서버에서 다시 emit을 통해서 fornt end쪽으로 보내고
 * 3. front end가 메시지를 받은 것을 확인할 수 있다.
 */
