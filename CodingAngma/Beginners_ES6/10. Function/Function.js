// Function
// 한번에 한 작업에 집중
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
// showError // 에러를 보여줌
// getName // 이름을 얻어옴
// createUserData // 유저 데이터 생성
// checkLogin // 로그인 여부 체크

//   함수    함수명  매개변수
// function sayHello(name){
//     console.log(`Hello, ${name}`);
// }

// 함수 작성
// function showError(){
//     alert('에러가 발생했습니다. 다시 시도해주세요');
// }

// showError();

// 뒤의 문구를 새로고침 해주세요. 주문
function showError(){
    alert('에러가 발생했습니다. 새로고침 해주세요.');
}

showError();

// 매개변수가 있는 함수
// function sayHello(name){
//     const msg = `Hello, ${name}`;
//     console.log(msg);
// }

// sayHello('Mike');
// sayHello('Tom');
// sayHello('Jane');

// 만약 로그인하지 않아서 사용자의 이름을 모를 때
// 중괄호 내부에 조건문으로 처리
// function sayHello(name){
//     console.log(name);
//     // let으로 변경
//     // msg 변수가 달라질수도 있기 때문
//     let msg = `Hello`;
//     if(name){
//         msg = `Hello, ${name}`;
//     }
//     console.log(msg);
// }

// sayHello();

// let msg = 'Hello'; // 전역변수 (global varable) : 어디서나 접근 가능한 변수
// console.log('함수 호출 전');
// console.log(msg);

// function sayHello(name){
//     // 여기서 msg는 지역변수 (local varable)
//     // 지역변수는 함수 안에서만 사용할 수 있다.
//     // 함수 외부에서도 사용하고 싶다면 함수 바깥으로 빼줘야한다.
//     // let msg = 'Hello';
//     if(name){
//         // msg += ', ' + name;
//         msg += `, ${name}`;
//     }
//     console.log('함수 내부');
//     console.log(msg);
// }

// sayHello('Mike');
// console.log('함수 호출 후')
// console.log(msg);

// 전역 변수와 지역 변수
// let msg = "welcome"; // 전역변수
// console.log(msg);

// function sayHello(name){
//     let msg = "Hello" // 지역변수
//     console.log(msg + ' ' + name);
// }

// sayHello('Mike');
// console.log(msg);


// 전체 서비스에서 공통으로 바라봐야하는 변수를 제외하고는 지역변수를 쓰는 습관을 들이는게 좋다.
// let name = "Mike";

// function sayHello(name){
//     console.log(name)
// }

// sayHello();
// sayHello('Jane');

// OR
function sayHello(name = 'friend'){
    // let newName = name || 'friend';
    let msg = `Hello, ${name}`
    console.log(msg)
}

sayHello();
sayHello('Jane');

// return 으로 값 반환
// function add(num1, num2){
//     return num1 + num2;
// }

// const result = add(2,3);
// console.log(result)

// return 으로 값 반환
function showError(){
    alert('에러가 발생했습니다.');
    return;
    alert('이 코드는 절대 실행되지 않습니다.');
}
const result = showError();
console.log(result)