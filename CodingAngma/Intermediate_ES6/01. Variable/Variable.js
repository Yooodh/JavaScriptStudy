// var
// 1. 한번 선언된 변수를 다시 선언할 수 있다.
// var name = 'Mike';
// console.log(name); // Mike 

// var name = 'Jane';
// console.log(name); // Jane

// 2. 선언하기 전에 사용할 수 있다.
// var name; // 호이스팅(hoisting)

// console.log(name); //undefined

// var name = 'Mike'; // ↑ 호이스팅(hoisting)

// let

// 1. 한 번 선언된 변수는 다시 선언할 수 없다.
// let name = 'Mike';
// console.log(name); // Mike 

// let name = 'Jane'; // error!
// console.log(name); 

// 2. 선언하기 전에 사용할 수 없다.
// console.log(name); // ReferenceError

// let name = 'Mike';

// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
// var, let, const 모두 호이스팅이 된다.
// TDZ(Temporal Dead Zone) 때문에 let, const는 에러가 난다.

// console.log(name) // TDZ(Temporal Dead Zone)
// const name = "Mike" // 함수 선언 및 할당
// console.log(name) // 사용 가능

// 호이스팅 (문제 없는 코드)
// let age = 30;
// function showAge(){
//     console.log(age);

// }
// showAge();

// 호이스팅 (문제 발생 코드)
// let age = 30;
// function showAge(){     // TDZ(Temporal Dead Zone)
//     console.log(age);   // TDZ(Temporal Dead Zone)
//     let age = 20;       // TDZ(Temporal Dead Zone) // 호이스팅
// }                       // TDZ(Temporal Dead Zone)
// showAge();

// 변수의 생성과정
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계

// var 
// 1. 선언 및 초기화 단계 
// 2. 할당 단계
// 선언과 초기화가 동시에 된다. // 그래서 할당 전에 호출하면 에러를 내지 않고 undefined가 뜬다.

// let
// 1. 선언 단계
// 2. 초기화 단계
// 3. 할당 단계
// 선언과 초기화가 분리되어 진행된다. // 호이스팅 되면서 선언 단계가 이루어지지만 // 초기화 단계는 실제 코드에 도달했을때 // ReferenceError 발생

// const
// 1. 선언 + 초기화 + 할당
// 선언과 할당이 동시에 진행된다. 

// let name;
// name = 'Mike';

// var age;
// age = 30;

// const gender; // 에러 발생! : 선언하면서 바로 할당을 안했기 때문.
// gender = 'male';

// 스코프

// var : 함수 스코프(function-scoped)
// 함수 스코프 : 함수 내에서 선언된 변수만 그 지역변수가 되는 것

// if문 안에서 var로 선언한 변수는 if문 밖에서도 사용이 가능하다.(let, const는 사용 불가.)
// const age = 30;
// if(age>19) {
//     var txt = '성인'
// }
// console.log(txt); // 성인

// 함수 내에서 사용되면 함수 바깥에서 사용 불가.(함수 : 유일하게 벗어날 수 없는 스코프)
// function add(num1, num2){
//     var result = num1 + num2;
// }

// add(2,3);

// console.log(result);

// let, const : 블록 스코프(block-scoped)
// 블록스코프 : 모든 코드블록(함수, if문, for문, while문, try/catch문 등) 내에서 선언된 변수(지역변수)는 코드블록 내에서만 유효하며 외부에서는 접근할 수 없다.

// function add (){
//     //Block-level Scope
// }

// if(){
//     //Block-level Scope
// }

// for(let i; i < 10; i++){
//     //Block-level Scope 
// }

