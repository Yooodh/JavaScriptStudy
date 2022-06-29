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
    [
      [1, 2],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [1, 2],
      [0, 1],
      [2, 1],
      [1, 1],
    ],
    [
      [2, 1],
      [1, 2],
      [1, 0],
      [1, 1],
    ],
  ],
};

// 다음 블럭의 타입과 좌표 등 정보들을 가지고 있는 변수
const movingItem = {
  type: 'tree',
  direction: 3, // 화살표 위 방향키를 눌렀을 때 돌아가게 하는 역할을 하는 지표
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

// moveType을 보내지 않는 경우에는 빈 값(초기화)를 넣어준다.
function renderBlocks(moveType = '') {
  const { type, direction, top, left } = tempMovingItem;
  // tempMovingItem.type;
  // tempMovingItem.direction;
  // tempMovingItem.top;
  // tempMovingItem.left;

  const movingBlocks = document.querySelectorAll('.moving');
  movingBlocks.forEach((moving) => {
    // 타입(tree)과 moving을 빼준다.
    moving.classList.remove(type, 'moving');
  });

  // forEach() : 배열에 활용 가능한 메서드로, 파라미터로 주어진 함수를 배역 요소 각각에 대해 실행하는 메서드이다.
  // map() 메서드와 차이점은 따로 return 하는 값이 없다는 점이다.
  // BLOCKS[type][direction].forEach((block) => {

  // forEach()는 반복문 중간에 break시킬 수 없기 때문에 some()을 사용해서 원하는 시점에 반복문을 중지를 시키고 다시 실행하는 것이 효율적이다.
  // some() : 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.
  BLOCKS[type][direction].some((block) => {
    // ul안에 들어있는 li의 값
    const x = block[0] + left;

    // li의 low값
    const y = block[1] + top;

    // 3항 연산자
    // 조건 ? 참일경우 : 거짓일경우
    // const xxx = 조건 ? 참일경우 : 거짓일경우
    const target = playground.childNodes[y]
      ? playground.childNodes[y].childNodes[0].childNodes[x]
      : null;

    const isAvailable = checkEmpty(target);

    if (isAvailable) {
      target.classList.add(type, 'moving');
    } else {
      // tempMovingItem값을 원래대로 돌리기
      tempMovingItem = { ...movingItem };

      // renderBlocks()를 다시 한번 실행 시키는 재귀함수 호출
      // 콜스택 에러를 방지하기 위해 이벤트 루프 안에 넣지 말고 외부로 빼놓았다가
      // 태스크 큐에 넣어놓았다가 이벤트 루프가 모두 실행 된 후에
      // 다시 실행할 수 있도록 setTimeout으로 잠시 빼놓는다.
      setTimeout(() => {
        renderBlocks();

        // 밑으로 떨어지는 중에 없는 것이 발생하게되면
        if (moveType === 'top') {
          // 블럭을 고정시키는 함수 호출
          seizeBlock();
        }
      }, 0);
      // renderBlocks();

      // 빈 값이 있을 때 return true가 걸리면 굳이 돌리지 않고
      // 새롭게 renderBlocks를 시작할 수 있도록 한다.
      return true;
    }
  });
  // render가 성공할 때마다 값 변경
  // 한 바퀴를 돌고나서 정상적으로 작동되면 movingItem을 업데이트 시켜준다.
  // 돌다가 실행이 되지 않으면 tempMovingItem을 movingItem으로 다시 집어넣고
  // 다시 한번 renderBlocks()를 호출 해서 다시 한번 모양이 나오게 된다.
  movingItem.left = left;
  movingItem.top = top;
  movingItem.direction = direction;
}

// 끝에서 더이상 내려갈 곳이 없으면 색깔은 그대로 놔두고
// moving이라는 클래스를 다 뗀 후에
// 새로운 블럭 만들기
function seizeBlock() {
  // moving 클래스를 가진 요소들의
  const movingBlocks = document.querySelectorAll('.moving');
  movingBlocks.forEach((moving) => {
    // remove를 moving해준다.
    moving.classList.remove('moving');
    moving.classList.add('seized');
  });
  // seizeBlock이 완성되면 generateNewBlock 실행
  generateNewBlock();
}

function generateNewBlock() {
  movingItem.top = 0;
  movingItem.left = 3;
  movingItem.direction = 0;
  tempMovingItem = { ...movingItem };
  renderBlocks();
}

// target을 한 번 더 체크하는 함수 생성
// 빈 여백을 체크해서 밖으로 벗어나지 않도록 체크
// 블럭이 맨 하단으로 떨어졌을 때 또 다른 블럭이 생성되고
// 그 블럭이 블럭위에 떨어졌을 때 그 밑에 블럭이 있는지 없는지 체크
function checkEmpty(target) {
  // contains : class를 가지고 있는지, 포함하고 있는지를 확인
  if (!target || target.classList.contains('seized')) {
    return false;
  }
  return true;
}

function moveBlock(moveType, amount) {
  // movingItem 안에 들어있는 left를 변경
  tempMovingItem[moveType] += amount;

  // moveBlock이 됐을 때만 moveType을 renderBlocks에 보내준다.
  renderBlocks(moveType);
}
// renderBlocks();

function changeDirection() {
  const direction = tempMovingItem.direction;
  direction === 3
    ? (tempMovingItem.direction = 0)
    : (tempMovingItem.direction += 1);

  // tempMovingItem.direction += 1;
  // if (tempMovingItem.direction === 4) {
  //   tempMovingItem.direction = 0;
  // }
  renderBlocks();
}

/* event handling */
document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 39:
      moveBlock('left', 1);
      break;

    case 37:
      moveBlock('left', -1);
      break;

    case 40:
      moveBlock('top', 1);
      break;

    case 38:
      changeDirection();
      break;

    default:
      break;
  }
});
