// 사용변수
const GAME_TIME = 3;

let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

const wordInput = document.querySelector('.word-input');
// console.log(wordInput);

const wordDisplay = document.querySelector('.word-display');

const scoreDisplay = document.querySelector('.score');

const timeDisplay = document.querySelector('.time');

const button = document.querySelector('.button');

init();

function init() {
  getWords();

  // wordInput.addEventListener('이벤트','기능')
  wordInput.addEventListener('Input', checkMatch);
}

// 게임 실행
function run() {
  isPlaying = true;
  time = GAME_TIME;
  wordInput.focus();
  scoreDisplay.innerText = 0;
  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
  buttonChange('게임중');
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    buttonChange('게임시작');
    clearInterval(checkInterval);
  }
}

// 단어 불러오기
function getWords() {
  words = ['Hello', 'Banana', 'Apple', 'Cherry'];
  buttonChange('게임시작');
}

// 단어 일치 체크
function checkMatch() {
  // console.log(
  //   wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()
  // );
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    // input 창 초기화 시켜주기
    wordInput.value = '';
    if (!isPlaying) {
      return;
    }
    score++;
    scoreDisplay.innerText = score;
    time = GAME_TIME;
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
  }
}

function countDown() {
  // 3항 연산자
  // (조건) ? 참일결우 : 거짓일경우
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}

function buttonChange(text) {
  button.innerText = text;
  text === '게임시작'
    ? button.classList.remove('loading')
    : button.classList.add('loading');
}