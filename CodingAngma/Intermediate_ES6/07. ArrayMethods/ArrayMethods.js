// Array

// push() : 뒤에 삽입
// pop() : 뒤에 삭제
// unshift() : 앞에 삽입
// shift() : 앞에 삭제

// arr.splice(n, m) : n번째 요소 부터 m개를 지운다. 특정 요소 지움
let arr = [1,2,3,4,5];
arr.splice(1,2);

console.log(arr); // [1,4,5]

// arr.splice(n, m, x) : 특정요소 지우고 (x)추가
// 지운 자리에 넣는다.
let arr0 = [1, 2, 3, 4, 5];
arr0.splice(1, 3, 100, 200);

console.log(arr0); // [1, 100, 200, 5]

// 두번째 요소에 0을 넣으면?
// 아무것도 지우지 않고 중간에 새로운 요소를 추가할 수 있다.
let arr1 = ["나는", "철수", "입니다."];
arr1.splice(1, 0, "대한민국", "소방관");

console.log(arr1); // ["나는", "대한민국", "소방관", "철수", "입니다."]

// arr.splice() : 삭제된 요소 반환
// 메소드를 사용할 때 값을 반환하는데 그 값이 삭제된 요소의 배열이다.
let arr2 = [1,2,3,4,5];
let result = arr2.splice(1,2);

console.log(arr2); // [1,4,5]
console.log(result); // [2,3]

// arr.slice(n, m) : n부터 m까지 반환
// m은 포함하지 않고 바로 앞자리 의미, 안쓰면 배열 끝까지를 의미
let arr3 = [1,2,3,4,5];
arr3.slice(1,4); // [2,3,4]

console.log(arr3.slice(1,4));

let arr4 = arr3.slice();
console.log(arr4); // [1,2,3,4,5]

// arr.concat(arr2, arr3 ..) : 합쳐서 새배열 반환
let arr5 = [1,2];
arr5.concat([3,4]); // [1,2,3,4]
arr5.concat([3,4],[5,6]); // [1,2,3,4,5,6]
arr5.concat([3,4],5,6);

console.log(arr5.concat([3,4]));
console.log(arr5.concat([3,4],[5,6]));
console.log(arr5.concat([3,4],5,6));

// arr.forEach(fn) : 배열 반복
// 함수를 인수로 받는다.
// 함수는 세개의 매개변수를 갖는다.(해당요소, index, 해당배열)
// let users = ['Mike', 'Tom', 'Jane'];
// users.forEach((item, index, arr) =>{
//     //..
// });
let arr6 = ["Mike", "Tom", "Jane"];
arr6.forEach((name, index)=>{
    console.log(`${index + 1}. ${name}`);
});

// arr.indexOf / arr.lastIndexOf
let arr7 = [1,2,3,4,5,1,2,3];
arr7.indexOf(3); // 2
arr7.indexOf(3,3); // 7

arr7.lastIndexOf(3); // 7

console.log(arr7.indexOf(3));
console.log(arr7.indexOf(3,3));
console.log(arr7.lastIndexOf(3));

// arr.includes() : 포함하는지 확인 (index확인 x)
let arr8 = [1,2,3];

arr8.includes(2); // true
arr8.includes(8); // false

console.log(arr8.includes(2));
console.log(arr8.includes(8));

// arr.find(fn) / arr.findIndex(fn)
// indexOf처럼 찾는다는 의미는 동일하지만 보다 복잡한 연산이 가능하도록 함수를 연결할 수 있다.
// 짝수 찾기, 성인 찾기 등

// arr.find() 
// 첫번째 true 값만 반환하고 끝
// 만약 없으면 undefined를 반환

// arr.findIndex()
// 해당 index를 반환
// 없으면 -1을 반환

// 짝수를 찾아서 반환
let arr9 = [1,2,3,4,5];

const result0 = arr9.find((item)=>{
    return item % 2 === 0;
});

console.log(result0);

let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

const result1 = userList.find((user)=>{
    if(user.age < 19) {
        return true;
    } 
        return false;
});

console.log(result1);

const result2 = userList.findIndex((user)=>{
    if(user.age < 19) {
        return true;
    } 
        return false;
});

console.log(result2);

// arr.filter(fn) : 만족하는 모든 요소를 배열로 반환
let arr10 = [1,2,3,4,5,6];

const result3 = arr10.filter((item)=>{
    return item % 2 === 0;
});

console.log(result3);

// arr.reverse() : 역순으로 재정렬
// 최근 가입된 유저부터 보여주기, 게시판에서 가장 최근에 작성된 글 순서로 정렬
let arr11 = [1,2,3,4,5];

const result4 = arr11.reverse(); // [5,4,3,2,1]

console.log(result4);

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let userList0 = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

let newUserList = userList0.map((user, index)=>{
    return Object.assign({}, user, {
        id : index + 1,
        isAdult: user.age >19,
    });
});

console.log(newUserList);
console.log(userList0);

// join
// 배열을 합쳐서 문자열로 만든다.
let arr12 = ["안녕", "나는", "철수야"];

let result5 = arr12.join("-");

console.log(result5);

// split
// 문자열을 나눠서 배열로 만들어준다.

// let users = "Mike,Jane,Tom,Tony";
let str = "Hello, My name is Mike.";
const result6 = str.split(",");

console.log(str);

// Array.isArray()
// 배열인지 아닌지 확인
// js에서 배열은 객체형에 속하기 때문에 typeOf는 객체라고 알려준다
let user0 = {
    name : "Mike",
    age: 30,
};

let userList1 = ["Mike", "Tom", "Jane"];

console.log(typeof user0);
console.log(typeof userList1);

console.log(Array.isArray(user0));
console.log(Array.isArray(userList1));