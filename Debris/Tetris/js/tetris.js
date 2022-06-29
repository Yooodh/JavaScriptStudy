const playground = document.querySelector('.playground > ul');

console.log(playground);

// ul 안에 li 20개 넣기
for (let i = 0; i < 20; i++) {
  const li = document.createElement('li');
  const ul = document.createElement('ul');

  // ul에 li 각각 10개씩 만들기
  for (let j = 0; j < 10; j++) {
    const matrix = document.createElement('li');
    // prepend() : 콘텐츠를 선택한 요소 내부의 시작 부분에서 삽입
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li);
}
