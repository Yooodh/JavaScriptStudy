// 사용변수
let score = 0;

const wordInput = document.querySelector('.word-input');
// console.log(wordInput);

const wordDisplay = document.querySelector('.word-display');

const scoreDisplay = document.querySelector('.score');

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
