// Array
// 배열 : 순서가 있는 리스트
// 배열은 []로 묶어주고 ,로 구분한다.
// 탐색할때는 고유번호를 사용한다. index : 0부터 시작
// 1번에 철수 2번에 영희 ... 30번에 영수

// let students = ['철수','영희', ... '영수'];

// console.log[0]; // 철수
// console.log[1]; // 영희
// console.log[29]; // 영수

// 수정
// students[0] = '민정';
// console.log(students) // ['민정','영희', ...

// 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
let arr = [
    '민수', // 문자
    3, // 숫자
    false, // Boolean
    {
        name : 'Mike', // 객체
        age : 30, // 객체
    },
    function(){ //함수
        console.log('TEST');
    }
];

console.log(arr);

// length : 배열의 길이
// students.length // 30

// push() : 배열 끝에 추가
// let days = ['월', '화', '수'];
// days.push('목')
// console.log(days) // ['월', '화', '수', '목']

// pop() : 배열 끝 요소 제거
// let days = ['월', '화', '수'];
// days.pop()
// console.log(days) // ['월', '화']

// shift, unshift 배열 앞에 제거/추가

// 추가
// days.unshift('일');
// console.log(days) // ['일', '월', '화', '수'];

// 제거
// days.shift();
// console.log(days) // ['월', '화', '수'];

// 반복문 : for
// let days = ['월', '화', '수'];
// for(let index = 0; index < days.length; index++){
//     console.log(days[index])
// }

// 반복문 : for...of (for in과 헷갈리지 않게 주의)
// for문 보다는 간단하지만 index를 얻지 못한다는 단점이 있다.
// let days = ['월', '화', '수'];
// for(let day of days){
//     console.log(day);
// }

// array
let days = ["mon", "tue", "wed"];

// days[1] = '화요일' // 2번째 배열 화요일로 변경

days.push("thu"); // 배열 맨 뒤 목요일 추가

days.unshift("sun") // 배열 맨 앞 일요일 추가

console.log(days[1]);
console.log(days);
console.log(days.length);

for(let index=0; index < days.length; index++){
    console.log(days[index]);
}

for(let day of days) {
    console.log(day);
}