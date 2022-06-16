// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
// 앞에 쓰면 바로 업데이트 돼서 할당이 되고
// 뒤에 쓰면 할당을 해 놓고 업데이트는 그 뒤에 일어난다.
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1;
// perIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // 4
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; // false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // 세 개 중에 하나라도 true가 되면 true로 계산이 되는 연산자
// or 연산자는 처음으로 true가 나오면 멈춘다.
// 함수를 호출하는 operation을 제일 뒤에다가 배치하는 것이 효율적이다.

// $$ (and), finds the first falsy value
console.log(`and: ${value1 || value2 || check()}`); // 세 개가 모두 true가 되면 true로 계산이 되는 연산자
// and 연산자는 처음으로 false가 나오면 멈춘다.
// 함수를 호출하는 operation을 제일 뒤에다가 배치하는 것이 효율적이다.

// often used to compress long if-statement
// nullableObject && nullableObject.something

// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('x');
  }
  return true;
}

// ! (not)
// 값을 반대로 바꿔준다.
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// == strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = '??';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 간단하게 사용할 때 좋다.
console.log(name === 'ellie' ? 'yes' : 'no'); // name이 true면 yes 출력, 아니면 no 출력

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
// else if 여러개를 반복하게 될 때 switch를 사용하면 좋다.
// typescript에서 정해져 있는 타입을 검사하거나 enum 등을 검사할 때 사용하면 좋다.
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  // case 'Chrome':
  //   console.log('love you!');
  //   break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is excuted.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is excuted first,
// then check the codition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 블럭을 먼적 실행하고 싶다면 do while을 써야되고
// 조건문이 맞을 때만 블럭을 실행하고 싶다면 while을 써야한다.

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)

// 숫자를 0부터 10까지 짝수인 것들만 print 하는 것을 continue로 만들기
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// for (let i = 0; i < 11; i++) {
//   if (i % 2 !== 0) {
//     console.log(`q1. ${i}`);
//   }
// }

// Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)

// 0부터 10까지 looping 하는 것을 작성하되 숫자 8을 만나면 그만 하는 것 작성하기
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
