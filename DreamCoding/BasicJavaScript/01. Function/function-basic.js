// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
// doSomething(add);
// doSomething(add()); // NaN
// doSomething(add(1, 2));

// const result = add(1, 2);
// console.log(result);

const addFun = add;
console.log(add);
addFun(1, 2);

// 1. 호출 할 때는 항상 ()를 사용해야한다.
// 2. () 쓰지 않고 함수 이름만 할당하거나 전달하면 함수 자체를 전달한다.
// 3. 함수를 호출할 때는 함수마다 정의된 인자 값들을 정확하게 전달해주어야 한다.
// 4. 함수의 이름만 변수에 할당하고 함수에 전달하면 함수 자체를 전달한다.
