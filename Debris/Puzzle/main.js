const container = document.querySelector('.image-container');
const startButton = document.querySelector('start-button');
const gameText = document.querySelector('.game-text');
const playTime = document.querySelector('.play-time');

const tileCount = 16;

// 배열 생성
// Array(16).fill();
// fill() : 배열의 start index부터 end index 전까지(end index는 미포함) value값으로 채워주는 함수
// forEach() : 배열에 활용이 가능한 매서드, 파라미터로 주어진 함수를 배열 요소 각각에 대해 실행하는 메서드
Array(tileCount)
  .fill()
  .forEach((_, i) => {
    // li 노드 생성
    const li = document.createElement('li');

    // li에 data type 넣기
    li.setAttribute('data-index', i);

    // li에 class 넣기
    // li.classList.add('list' + i);
    li.classList.add(`list${i}`);

    // DOM에 넣어주기
    container.appendChild(li);
  });
