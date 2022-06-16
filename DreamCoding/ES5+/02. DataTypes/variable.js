// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict';

console.log(age);

// 2. Variable, rw(read/wrtie) 메모리에 값을 읽고 쓰는 것이 가능하다.
// let (added in ES6)
let globalName = 'global name';

{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from botton to top)
// has no block scope
{
  age = 4;
  var age;
}

console.log(age);

// 3. Constant, r(read only) 읽기만 가능하고 다시 다른 값으로 쓰는 것이 불가능하다.
// use const whenever possible.
// only use let if variable needs to change.

// Mutavle let
// Immutable const
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) // 데이터 타입을 절대 변경하지 못한다.
// Mutable data types: all objects by default are mutable in JS // 변경이 가능한 데이터 타입
// faver immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolin, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undifined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false

console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undifined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// symbol 바로 출력하게 되면 에러 발생
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);

// .desciption을 붙여서 string으로 변환해서 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.gae = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';

console.log(text.charAt(0)); // h

console.log(`value: ${text}, type: ${typeof text} $`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// console.log(text.charAt(0)); // error
