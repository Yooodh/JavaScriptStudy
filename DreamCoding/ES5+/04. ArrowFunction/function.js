// Function
// - fundamental building block in the program // 프로그램을 구성하는 굉장히 기본적인 building block
// - subprogram can be used mulitiple times // subprogram이라고도 불리며 여러번 재사용이 가능하다는 장점이 있다.
// - performs a task calculates a value // 대체적으로 function은 한가지의 task나 어떤 값을 계산하기 위해 쓰여진다.

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing // 하나의 함수는 한가지의 일만 하도록 만들어야 한다.
// naming: sosomething, command, verb // 함수의 이름을 작성할 때에는 command, 동사형태로 지정해야 한다.
// e.g. createCardAndPoing -> createCard, createPoint
// function is object in JS // function은 object로 간주되어 지기 때문에 변수에다가 할당할 수도 있고, 파라미터로 전달이 되고, 함수를 return할 수도 있다.
function printHello() {
  console.log('Hello');
}
printHello();

// 파라미터로 메세지를 전달하면 전달 된 메세지를 화면에 출력하도록 만드는 것이 좋다.
// javascript에서는 타입이 없기 때문에 함수 자체의 인터페이스만 보았을 때 메세지가 string을 전달해야하는지, 숫자를 전달해야 하는지 명확하지 않다.
function log(message) {
  console.log(message);
}

log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value // premitive 타입은 메모리에 value가 그대로 저장되어 있기 때문에 value가 전달이 된다.
// object parameters: passed by refrence // object는 메모리에 refrence가 저장이 되어 전달된다.
function changeName(obj) {
  obj.name = 'coder';
}

const ellie = { name: 'ellie' }; // refrence가 메모리에 들어가게 된다.
changeName(ellie);
console.log(ellie);

// 3.Default parameters (added in ES6)
// 파라미터 옆에다가 원하는 default값을 지정해놓으면 사용자가 파라미터를 전달하지 않을 때 값이 대체되어서 사용되어진다.
function showMessage(message, from = 'unknown') {
  //  if (from === undefined) {
  //   from = 'unknown';
  //  }
  console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (added in ES6)
// ...을 작성하게 되면 이것을 Rest parameters라고 불리는데 이것은 배열형태로 전달되게 된다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. (유리창에 틴트가 처리된 것과 같다.)
// block 안에서 변수를 선언하게 되면 이것은 지역 변수이다.
// 지역 변수는 지역적은 것이기 때문에 안에서만 접근이 가능하다.
let globalMessage = 'global'; // global bariabel
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);

  // 자식은 부모에게서 정의된 메세지들을 확인할 수 있다.

  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // 하지만 자식 안에 정의된 메세지를 부모 상위 위에서 보려고 한다면 에러가 발생한다.
  // console.log(childMessage); // error

  // return 타입이 없는 함수들은 return undefined가 들어가 있는 것과 같다.
  return undefined;
}
printMessage();
// 지역 변수를 밖에서 출력하게 되면 에러가 발생한다.
// console.log(message); // error

// 6. Return a value
// 함수에서는 parameters로 값을 전달받아서 계산된 값을 return할 수 있다.
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
// upgradeUser라는 함수 안에서 user의 point가 10이상일 때만 뭔가 업그레이드를 진행하는 로직
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
// if와 else를 번갈아 가면서 쓰는 것 보다는 조건이 맞지 않을때는 빨리 return을 해서 함수를 종료하고
// 조건이 맞을 때만 필요한 로직들을 실행하는 것이 더 좋다.
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable // 변수에 할당 가능
// can be passed as an argument to other functions. // 파라미터로 전달 가능
// can be returned by another function // return 값으로 return이 된다.

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the excution reaches it.
// 이름이 없는 함수를 anonymous function이라고 부른다.
// 이름이 있는 함수를 named function이라고 부른다.
const print = function () {
  console.log('print');
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
// printYes라는 변수에 yes를 출력하는 함수를 할당
const printYes = function () {
  console.log('yes!');
};

// named funtion
// better debuggin in debugger's stack traces
// recursions
// printNo 변수에 no를 출력하는 함수를 할당
const printNo = function print() {
  console.log('no!');
  // print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');

// const add = function (a, b) {
//   retunr a + b;
// };
const add = (a, b) => a + b;

// 함수 안에서 조금 더 다양한 일들을 해야해서 block이 필요할 때
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 바로바로 실행하고 싶을 때 유용하게 사용된다.
(function hello() {
  console.log('IIFE');
})();

// fucntion calculate(command a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch(command){
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}

console.log(calculate('add', 2, 3));