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
  square: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  ],
  bar: [
    [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
    [
      [2, -1],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ],
    [
      [2, -1],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
  ],
  zee: [
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 1],
      [1, 0],
      [1, 1],
      [0, 2],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 2],
      [2, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [1, 1],
      [1, 2],
    ],
  ],
  elLeft: [
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
      [0, 2],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [2, 2],
    ],
    [
      [1, 0],
      [2, 0],
      [1, 1],
      [1, 2],
    ],
  ],
  elRight: [
    [
      [1, 0],
      [2, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [2, 2],
    ],
  ],
};

export default BLOCKS;
