//Computed property
// let a = 'age';

// const user = {
//     name : 'Mike',
//     // age : 30 // 대신
//     [a] : 30 // 이렇게 사용해도 됨 // a 라는 문자열이 아니라 변수 a에 할당 된 값이 들어간다.
// }

// 식 자체를 넣는것도 가능
// const user = {
//     [1 + 4] : 5,
//     ["안녕"+"하세요"] : "Hello"
// }

// console.log(user)

// Methods
// Object.assign(); // 객체 복제
// const user = {
//     name : 'Mike',
//     age : 30
// }

// const newUser = Object.assign({}, user);
// const newUser = Object.assign({gender:'male'}, user);
// const newUser = Object.assign({name:'Tom'}, user);

// newUser.name = 'Tom';

// console.log(user.name); // 'Mike'

// console.log(newUser);

// newUser != user
// const cloneUser = user; // x


// Object.keys(); // 키 배열 반환
// const user = {
//     name : 'Mike',
//     age : 30,
//     gender : 'male',
// }

// Object.keys(user);   // ["name". 'age", "gender"]

// Object.values(); // 값 배열 반환
// const user = {
//     name : 'Mike',
//     age : 30,
//     gender : 'male',
// }

// Object.values(user);   // ["Mike", 30, "male"]

// Object.entries(); // 키/값 배열 반환
// const user = {
//     name : 'Mike',
//     age : 30,
//     gender : 'male',
// }

// Object.entries(user);
// // [
// //  ["name","Mike"]
// //   ["age",30],
// //   ["gender","male"]
// // ]

// Object.fromEntries(); // 키/값 배열을 객체로
// const arr = 
// [
//     ["name","Mike"],
//     ["age",30],
//     ["gender","male"]
// ];

// Object.fromEntries(arr);
// // {
// //    name : 'Mike',
// //    age : 30,
// //    gender : 'male',
// // }

// 예제 1
// let n = "name";
// let a = "age";

// const user = {
//     [n] : 'Mike',
//     [a] : 30,
//     [1 + 4] : 5,
// }

// console.log(user);

// 예제 2
// function makeObj(key, val){
//     return {
//         [key] : val
//     }
// }

// // const obj = makeObj("나이", 33);
// // const obj = makeObj("이름", 33);
// const obj = makeObj("성별", "male");

// console.log(obj);

// 예제 3
// const user = {
//     name : "Mike",
//     age : 30,
// };

// // const user2 = user; // x
// const user2 = Object.assign({}, user);
// user2.name = "Tom"; 

// console.log(user);
// console.log(user2);

// 예제 4
// const user = {
//     name : "Mike",
//     age : 30,
// };

// // const result = Object.keys(user);
// // const result = Object.values(user);
// const result = Object.entries(user);

// console.log(result);

// 예제 5
let arr = [
    ['mon', '월'],
    ['tue', '화']
]

const result = Object.fromEntries(arr);

console.log(result);