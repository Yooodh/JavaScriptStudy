const name = "Mike"; //문자형 String
//const age = 30;

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = "I\'m a boy."; // 특수문자 앞에 \넣으면 특수문자로 인식한다.

const message3 = `My name is ${name}`; // ``가 아닌 일반 따옴표를 쓰면 "My name is ${name}" 그대로 노출되니 주의
console.log(message3);

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4);

const age = 30; // 숫자형 Number
const PI = 3.14;

console.log(1 + 2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 4); // % 나머지

// Infinity
const x = 1/0; // ???
console.log(x);

// NaN
const y = name/2;
console.log(y);

// Boolean
const a = true; // 참
const b = false; // 거짓

console.log(name == 'Mike');
console.log(age > 40);

// null 과 undefined

// undefined
let age1;
console.log(age1);

let user = null;

// typeof 연산자
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null); // null은 객체가 아님
console.log(typeof undefined);

// 문자형 더하기
const c = "나는 ";
const d = " 입니다.";

console.log(c + name + d);

// 숫자 + 문자
console.log(c + age + "살" + d);