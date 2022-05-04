// Object
// const superman = {
//     name : 'clark',
//     age : 33,
// }

// const { unwatchFile } = require("fs");

// 객체 접근
// superman.name // 'clark'
// superman['age'] // 33

// 객체 추가
// superman.gender = 'male';
// superman ['hairColor'] = 'black';

// 객체 삭제
// delete superman.hairColor;

// Object 단축 프로퍼티
// const name = 'clark';
// const age = 33;

// 이 코드를
// const superman = {
//    name : name,
//    age : age,
//    gender : 'male',
//}

// 이렇게 변경 가능
// const superman = {
//     name, // name : name
//     age, // age : age
//     gender : 'male',
// }

// Object 프로퍼티 존재 여부 확인
// superman.birthDay; // undefined

// 'birthDay' in superman; // false

// 'age' in superman; // true

// for(let key in superman) {
//     console.log(key)
//     console.log(superman[key])
// }

// 객체
// const superman = {
//     name : 'clark',
//     age : 30,
// }

// console.log(superman.name);
// console.log(superman['age']);

// 추가하기
// superman.hairColor = 'black';
// superman['hobby'] = 'football';

// 지우기
// delete superman.age;

// console.log(superman)

// 객체
// function makeObject(name, age) {
//     return {
//         name, // name : name,
//         age, // age : age,
//         hobby : 'football',
//     }
// }

// const Mike = makeObject('Mike', 30) ;
// console.log(Mike);

// console.log('age' in Mike);
// console.log('birthday' in Mike);

// 객체 in
// function isAdult(user){
//     if(user.age < 20){
//         return false;
//     }else{
//         return true;
//     }
// }

// function isAdult(user) {
//     if(!('age' in user) || // user에 age가 없거나
//     user.age < 20) { // 20살 미만이거나
//         return false;
//     }
//     return true;
// };

// const Mike = {
//     name : 'Mike',
//     age : 30
// };

// const Jane = {
//     name : 'Jane'
// };

// console.log(isAdult(Mike));
// console.log(isAdult(Jane));

// 객체 for ... in
const Mike = {
    name : "Mike",
    age : 30,
};

for(x in Mike) {
    console.log(Mike[x]); //Mike ['name'] // Mike['age']
}
