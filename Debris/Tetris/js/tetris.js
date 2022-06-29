/* DOM */
const playground = document.querySelector('.playground > ul');

/* Setting */
const GAME_ROWS = 20;
const GAME_COLS = 10;

/* variables */
let score = 0; // 점수
let duration = 500; // 블럭이 떨어지는 시간
let downInterval;
let tempMovingItem; // 실행하기 전에 담아두기

const BLOCKS = {
  tree: [
    // 방향키를 돌렸을 때 변하는 모양별로 배열 생성
    [
      [2, 1],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [],
    [],
    [],
  ],
};

// 다음 블럭의 타입과 좌표 등 정보들을 가지고 있는 변수
const movingItem = {
  type: 'tree',
  direction: 0, // 화살표 위 방향키를 눌렀을 때 돌아가게 하는 역할을 하는 지표
  top: 0, // 좌표 기준 어디까지 내려와있는지, 내려가야 하는지 표현해주는 역할
  left: 0, // 좌우 값을 알려주는 역할
};

// 처음에 랜더링이 되면 init 호출
init();

/* functions */
// 스크립트가 처음 시작될때 실행되는 함수
function init() {
  // Spread Operator는 movingItem 자체를 부르는 게 아니라 껍데기를 벗긴 안의 내용만 가져오는 것이기 때문에 값을 복사한다는 느낌으로 사용하면 좋다.
  // Spread Operator를 사용해서 movingItem 안에 있는 값만 가져오기 때문에 movingItem의 값이 변경이 되더라도 tempMovingItem은 값이 변경되지 않는다.
  tempMovingItem = { ...movingItem };

  // ul 안에 li 20개 넣기
  for (let i = 0; i < GAME_ROWS; i++) {
    prependNewLine();
  }
  renderBlocks();
}

function prependNewLine() {
  const li = document.createElement('li');
  const ul = document.createElement('ul');

  // ul에 li 각각 10개씩 만들기
  for (let j = 0; j < GAME_COLS; j++) {
    const matrix = document.createElement('li');
    // prepend() : 콘텐츠를 선택한 요소 내부의 시작 부분에서 삽입
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li);
}

function renderBlocks() {
  const { type, direction, top, left } = tempMovingItem;
  // tempMovingItem.type;
  // tempMovingItem.direction;
  // tempMovingItem.top;
  // tempMovingItem.left;

  // forEach() : 배열에 활용 가능한 메서드로, 파라미터로 주어진 함수를 배역 요소 각각에 대해 실행하는 메서드이다.
  // map() 메서드와 차이점은 따로 return 하는 값이 없다는 점이다.
  BLOCKS[type][direction].forEach((block) => {
    // ul안에 들어있는 li의 값
    const x = block[0];

    // li의 low값
    const y = block[1];

    const target = playground.childNodes[y].childNodes[0].childNodes[x];
    target.classList.add(type);
    console.log(target);
  });
}
