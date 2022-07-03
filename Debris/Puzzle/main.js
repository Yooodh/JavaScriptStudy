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

  // 순서 섞기
  function shuffle(array) { // 배열 넘겨받기
    // 배열의 index를 구해서 -1 해준다. (가장 마지막 인덱스 선택)
    let index = array.length -1;
    // 가장 마지막 index가 1씩 감소하면서 0보다 크면 반복 (뒤에서부터 앞으로 진행)
    while(index > 0) {
      // Math.floor() : 소수점 이하를 버림
      // Math.cell() : 소수점 이하를 올림
      // Math.round() : 소수점 이하를 반올림
      // Math.random() : 난수(무작위 숫자) 생성
      const randomIndex = Math.floor( Math.random() * (index+1) );
      [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
      index --;
    }
    return array;
  }