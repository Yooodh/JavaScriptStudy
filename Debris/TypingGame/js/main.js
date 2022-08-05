// 사용변수
let score = 0;
let time = 9;
let isPlaying = false;

const wordInput = document.querySelector('.word-input');
// console.log(wordInput);

const wordDisplay = document.querySelector('.word-display');

const scoreDisplay = document.querySelector('.score');

const timeDisplay = document.querySelector('.time');

// wordInput.addEventListener('이벤트','기능')
wordInput.addEventListener('input', () => {
  // console.log(
  //   wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()
  // );
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    score++;
    scoreDisplay.innerText = score;

    // input 창 초기화 시켜주기
    wordInput.value = '';
  }
});

setInterval(countDown, 1000);

function countDown() {
  // 3항 연산자
  // (조건) ? 참일결우 : 거짓일경우
  time > 0 ? time-- : (isPlaying = false);
  timeDisplay.innerText = time;
}
