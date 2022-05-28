// TypeScript

// 우리가 쓰는 브라우저는 TypeScript를 이해하지 못한다.
// 그래서 JavaScript로 변환해서 로드해야 실행할 수 있다.

// JavaScript(동적언어) : 런타임에 타입 결정 / 오류 발견
// 개발자가 실수하게 되면 사용자가 그 오류를 볼 수 있다.

// Java, TypeScript (정적언어) : 컴파일 타임에 타입 결정 / 오류 발견
// 코드 작성시간은 길어지겠지만 초기에 생각을 많이 해서 코드를 짜준다면 안정적이고 빠르게 작업을 진행할 수 있는 장점이 있다.

function add(num1, num2) {
    console.log(num1 + num2);
}

// 아무 인수도 전달하지 않아서 undefined가 됐고
// undefined와 undefined를 더하니 NaN이 나온다. 
add(); // NaN

// 1과 undefined를 더했으니 NaN이 나온다.
add(1); // NaN

// 1과 2를 더해 3이 나온다.
add(1, 2); // 3

// 세번째 인수는 무시된다.
// 3과 4를 더해 7이 나온다.
add(3, 4, 5); // 7 // 12를 예상하고 이 함수를 사용한 개발자는 어디서 버그가 발생했는지 찾아봐야 할 것이다.

// 문자열도 더해진다.
add('hello', 'world'); // "helloworld"

// showItems는 배열을 받아서 루프를 돌면서 보여주는 함수이다.
function showItems(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}

// 배열은 잘 전달한다.
showItems([1, 2, 3]); // 1 // 2 // 3

// 배열이 아니면 레퍼런스 에러가 발생한다.
// 숫자 1에는 forEach라는 메서드가 없기 때문이다.
// showItems(1, 2, 3);