// 어휘적 환경(Lexical Environment)

// 예제 1
// 코드가 실행되면 스크립트 내에서 선언한 변수들이 Lexical 환경에 올라간다. (전역 Lexical 환경)
let one;  // one : 초기화x (사용 불가) 
// one : undefined (사용 가능) // 아직 할당 안되어 있기 때문에 초기값 undefined를 갖는다.
ont = 1; 
// one : 1 // one에 숫자 1 할당

function addOne(num) { // addOne : function (사용 가능)
    console.log(one + num);
}

// 새로운 Lexical 환경 생성 (내부 Lexical 환경)
// 이곳에는 함수가 넘겨받은 매개변수, 지역변수들이 저장된다.
// 내부 Lexical 환경 (참조)-> 전역 Lexical 환경
// 코드에서 변수를 찾을 때 내부에서 찾고 없으면 외부, 거기에도 없으면 전역 Lexical 환경까지 범위를 넓혀서 찾는다.
addOne(5); // num : 5

// 예제 2
// 전역 Lexical 환경
// makeAdder : function
// add3 : 초기화X
// -> add3 : function
function makeAdder(x){
    return function(y){ // function(y) : y를 가지고 있고 상위함수인 makeAdder의 x에 접근 가능
        // 익명함수 Lexical 환경
        // y : 2
        return x + y;
    }
}

const add3 = makeAdder(3);
// makeAdder Lexical 환경
// x : 3
console.log(add3(2)); // 5 // add3(2) : add3 함수가 생성된 이후에도 상위 함수인 makeAdder의 x에 접근 가능

// add10 과 add3은 서로 다른 환경을 가지고 있다.
const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 4

// Closure
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변를 기억
// 생성 이후에도 계속 접근 가능

function makeCounter() {
    let num = 0; // 은닉화

    return function () {
        return num++;
    };
}

let counter = makeCounter();

// 숫자 수정 불가능
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
