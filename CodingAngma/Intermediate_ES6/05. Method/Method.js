// toString()
// 10진수 -> 2진수/16진수
let num = 10;
// num.toString(); // "10"
num.toString(2); // "1010"
console.log(num.toString(2));

let num2 = 255;
num2.toString(16); // "ff"
console.log(num2.toString(16));

// Math
Math.PI; // 3.161592653589793
console.log(Math.PI);

// Math.ceil() : 올림
let num3 = 5.1;
let num4 = 5.7;

Math.ceil(num3); // 6
Math.ceil(num4); // 6
console.log(Math.ceil(num3)); 
console.log(Math.ceil(num4));

// Math.ceil() : 내림
let num5 = 5.1;
let num6 = 5.7;

Math.floor(num5); // 5
Math.floor(num6); // 5
console.log(Math.floor(num5));
console.log(Math.floor(num6));

// Math.round() : 반올림
let num7 = 5.1;
let num8 = 5.7;

Math.round(num7); // 5
Math.round(num8); // 6
console.log(Math.round(num7));
console.log(Math.round(num8));

// 소수점 자릿수
let userRate = 30.1234;

// 요구사항 : 소수점 둘째자리 까지 표현(셋째 자리에서 반올림)
// 100을 곱하고 // userRate * 100 // 3012.34
// 반올림을 해준 뒤 // Math.round(userRate * 100) // 3012 
// 다시 100을 나눈다. // Math.round(userRate * 100)/100 // 30.12

Math.round(userRate * 100)/100 // 30.12

console.log(Math.round(userRate * 100)/100);

// 소수점 자릿수 : toFixed()
let userRate1 = 30.1234;

// 요구사항 : 소수점 둘째자리 까지 표현(셋째 자리에서 반올림)
userRate1.toFixed(2); // "30.12"
userRate1.toFixed(0); // "30"
userRate1.toFixed(6); // "30.123400"
console.log(userRate1.toFixed(2));
console.log(userRate1.toFixed(0)); 
console.log(userRate1.toFixed(6)); 

// 주의할점 : toFixed는 문자열을 반환
userRate1.toFixed(2); // "30.12"

// 반환받은 이후 Number을 이용해 숫자로 변환 후 작업하는 경우가 많다.
Number(userRate1.toFixed(2)); // 30.12
console.log(Number(userRate1.toFixed(2)));

// isNaN : NaN은 자기 자신과도 같다고 하지않는다. isNaN만이 NaN인지 아닌지 판단할 수 있다.
let x = Number('x') // NaN

console.log(x);

x == NaN // false
x === NaN // false
NaN == NaN // flase

console.log(x == NaN);
console.log(x === NaN);
console.log(NaN == NaN);

isNaN(x) // true
isNaN(3) // false

console.log(isNaN(x));
console.log(isNaN(3));

// parseInt() : 문자열을 숫자로 바꿔준다.
// Number와 다른점 : 문자가 혼용되어 있어도 동작을 한다.
let margin = '10px';

parseInt(margin); // 10
Number(margin); // NaN

console.log(parseInt(margin));
console.log(Number(margin));

// 숫자로 시작하지 않으면 parseInt는 NaN을 반환한다.
let redColor = 'f3';
parseInt(redColor); // NaN

console.log(parseInt(redColor));

// psrserInt는 두번째 인수를 받아서 진수를 지정할 수 있다.
let redColor1 = 'f3';
parseInt(redColor1); // NaN
parseInt(redColor1, 16); // 243
parseInt('11', 2); // 3

console.log(parseInt(redColor1));
console.log(parseInt(redColor1, 16));
console.log(parseInt('11', 2));

// parseFloat() : parseInt()와 동일하게 동작하지만 부동소수점을 반환한다.
let padding = '18.5%';

// parseInt()는 소수점 이하는 무시하고 정수만 반환한다.
parseInt(padding); // 18
parseFloat(padding); // 18.5

console.log(parseInt(padding));
console.log(parseFloat(padding));

// Math.random() : 0 ~ 1 사이 무작위 숫자 생성
Math.random(); // 0.????????....

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// 1 ~ 100 사이의 임의의 숫자를 뽑고 싶다면?
// 숫자 생성 // Math.random() // 0.6789
// 100을 곱한다. // Math.random()*100 // 67.89
// 소수점 이하 거르기 // Math.floor(Math.random()*100) // 67
// 최소값 1 더하기 // Math.floor(Math.random()*100) // 68
Math.floor(Math.random()*100)+1;

// Math.max() / Math.min()
// 괄호 안의 인수 중 최대값 / 최소값 구하기
Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
Math.min(1, 4, -1, 5, 10, 9, 5.54); // -1

console.log(Math.max(1, 4, -1, 5, 10, 9, 5.54));
console.log(Math.min(1, 4, -1, 5, 10, 9, 5.54));

// Math.abs() : 절대값
// abs : absolute의 약자
Math.abs(-1); // 1

console.log(Math.abs(-1));

// Math.pow(n, m) : 제곱
// n의 m승 값, 거듭제곱 값을 구해준다.
Math.pow(2, 10); // 1024

console.log(Math.pow(2, 10));

// Math.sqrt() : 제곱근
// sqrt : Square Root의 약자
Math.sqrt(16); // 4

console.log(Math.sqrt(16));