// 인수 전달
function showName(name){
    console.log(name);
}
showName('Mike'); // 'Mike'
showName('Mike', 'Tom'); // 에러발생x // 'Mike'
showName(); // undefined

// 함수에 인수를 얹는 방법
// 1. arguments로 접근 (화살표 함수에는 없다.)
// 2. 나머지 매개 변수 사용 

// arguments
// 함수로 넘어 온 모든 인수에 접근
// 함수 내에서 이용 가능한 지역 변수
// length / index
// Array 형태의 객체
// 배열의 내장 메서드 없음 (forEach, map)
function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName('Mike', 'Tom');
// 2
// 'Mike'
// 'Tom'

// 나머지 매개변수(Rest parameters)
function showName(...names){
    console.log(names);
}
showName(); // []
showName('Mike'); // ['Mike']
showName('Mike', 'Tom'); //['Mike', 'Tom']

// 나머지 매개변수
// 전달 받은 모든 수를 더해야함
function add(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}

function add(...numbers) {
    let result = numbers.reduce((prev, cur) => prev + cur);
    console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// user 객체를 만들어 주는 생성자 함수를 만들어 주기.
// 나머지 매개변수 (...)은 항상 마지막에 위치해야 한다.
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
console.log(user2);
console.log(user3);

// 전개 구문(Spread syntax) : 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result1 = [...arr1, ...arr2];
// let result = [0, ...arr1, ...arr2, 7, 8, 9];
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(result1); // [1, 2, 3, 4, 5, 6]

// 전개 구문(Spread syntax) : 객체
let user4 = {anme : 'Mike'}
let mike = {...user4, age :30}

console.log(mike); // {name : "Mike", age : 30}

// 전개 구문(Spread syntax) : 복제
let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // [1, 2, 3]

let user5 = {name: 'Mike', age:30};
let user6 = {...user5};

user6.name = "Tom";

console.log(user5.name); // "Mike"
console.log(user6.name); // "Tom"

// 전개 구문
// arr5 를 [4, 5, 6, 1, 2, 3] 으로 만들기
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];

// arr6.reverse().forEach((num) => {
//     arr5.unshift(num)
// })

arr5 = [...arr6, ...arr5];

console.log(arr5)

let user7 = {name : "Mike"};
let info = {age : 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// user7 = Object.assign({}, user7, info, {
//         skills : []
//     });

// fe.forEach((item) =>{
//     user7.skills.push(item);
// });
// lang.forEach((item) => {
//     user7.skills.push(item);
// });

user7 ={
    ...user7,
    ...info,
    skills : [...fe, ...lang],
};

console.log(user7);