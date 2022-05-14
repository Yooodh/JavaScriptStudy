// Destructuring assignment
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
let [x, y] = [1, 2];

console.log(x); // 1
console.log(y); // 2

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
// let user1 = users[0];
// let user2 = users[1];
// let user3 = users[2];

console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'

let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split('-');

console.log(user4); // 'Mike'
console.log(user5); // 'Tom'
console.log(user6); // 'Jane'

// 배열 구조 분해 : 기본값
let [a, b, c] = [1, 2]; // c는 undefined

let [d=3, e=4, f=5] = [1,2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // undefined
console.log(d); // 1
console.log(e); // 2
console.log(f); // 5

// 배열 구조 분해 : 일부 반환값 무시
let [user7, ,user8] = ['Mike', 'Tom', 'Jane', 'Tony'];

console.log(user7); // 'Mike'
console.log(user8); // 'Jane'

// 배열 구조 분해 : 바꿔치기
let g = 1;
let h = 2;

let i = g;
g = h;
h = i;

[g, h] = [h, g];

// 객체 구조 분해
let user9 = {name: 'Mike', age: 30};
let {name, age} = user9;
// let name = user9.name;
// let age = user9.age;

console.log(name); // 'Mike'
console.log(age); // 30

// 객체 구조 분해 : 새로운 변수 이름으로 할당
let user0 = {name1: 'Mike', age1 : 30};
// let {name1, age1} = user0;
let{name1: userName, age1 : userAge} = user0;

console.log(userName); // 'Mike'
console.log(userAge); // 30

// 객체 구조 분해 : 기본값
let user10 = {name2: 'Mike', age2: 30};
// let {name2, age2, gender} = user10; // gender는 undefined
let {name2, age2, gender = 'male'} = user10;

console.log(gender); // 'male'

let user11 = {
    name3: 'Jane',
    age3: 18,
    gender1:'female'
};

let {name3, age3, gender1 = 'male'} = user11;
console.log(gender1); //'female'