// 함수 선언문 : 어디서든 호출 가능(호이스팅)
// function sayHello(){
//     console.log('Hello');
// }
// sayHello();

// 함수 표현식 : 코드에 도달하면 생성
// let sayHello = function(){
//     console.log('Hello');
// }
// sayHello();

// 화살표 함수
// let add = function(num1, num2){
//     return num1 + num2;
// }

// function을 지우고, => 생성
// let add = (num1, num2) => {
//     return num1 + num2;
// }

// 코드가 한줄일때 return을 지울 수 있음, {}를 ()로 변경
// let add = (num1, num2) => (
//     num1 + num2
// )

// return문이 한글이라면 괄호도 생략 가능
// let add = (num1, num2) => 
//     num1 + num2;

// 인수가 하나여도 괄호 생략 가능
// let sayHello = (name) => `Hello, ${name}`;

// 인수가 없는 경우 괄호 생략 불가
// let showError = () => {
//     alert('error!');
// }

// return문이 있다고 해도 return 전에 여러줄의 코드가 있을 경우 일반 괄호 사용 불가
// let add = function(num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// 이렇게 사용해야 한다.
// let add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }

// 함수 선언문 예제 1
// showError();

// function showError(){
//     console.log('error');
// }

// 함수 표현식 예제 1
// let showError = function(){
//     console.log('error');
// }
// showError();

//화살표 함수 예제 1
// let showError = () => {
//     console.log('error');
// }

// showError();

// 함수 표현식 예제 2
// const sayHello = function (name) {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// };
// sayHello();

// 화살표 함수 예제 2
// const sayHello = (name) => {
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// };
// sayHello();

// 인수가 두개이고 return문이 있는 예제 3
// const add = function (num1, num2){
//     const result = num1 + num2;
//     return result;
// }

// 화살표 함수 예제 3
const add = (num1, num2) => num1 + num2;
