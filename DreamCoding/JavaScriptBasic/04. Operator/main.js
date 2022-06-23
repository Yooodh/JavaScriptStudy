// false: 0, -0, '', null, undefined
// true: -1, 'hello', []

// let num; // undefined
let num = 9;

if(num) {
  console.log('true!');
} else {
  console.log('false!');
}

// && 연산자는 앞이 true일 때 실행이 된다.
num && console.log(num);

let obj = {
  name: 'ellie',
};

if(obj) {
  console.log(obj.name);
}

obj && console.log(obj.name);

