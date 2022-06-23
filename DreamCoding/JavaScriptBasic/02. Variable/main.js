// number, string, boolean, null, undefined // symbol
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

// let : 선언하고 나서 나중에 값 변경 가능
let a = 2;
a = 5;
a = 9;

// cosnt(상수변수) : 한번 선언하고 나면 값 변경 불가능
const num = 2;
// num = 4; // error

// object
let obj = {
  name: 'ellie',
  age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('------');
console.log(obj.name);
console.log(obj2.name);

const obj3 = {
  name: 'ellie',
  age: 5,
};

obj3.name = 'James';
