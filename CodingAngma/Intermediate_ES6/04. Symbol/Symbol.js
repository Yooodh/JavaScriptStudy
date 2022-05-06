// property key : 문자형

// const obj = {
//     1 : '1입니다.',
//     false : '거짓'
// }

// Object.keys(obj); // ["1", "false"]
// console.log(obj);

// obj ['1'] // "1 입니다."
// obj ['false'] // "거짓"

// Symbol : 유일한 식별자를 만들때 사용 (유일성 보장)
// const a = Symbol(); // new를 붙이지 않습니다!
// const b = Symbol();

// console.log(a);
// console.log(b);

// a === b; // false
// a == b; // flase

// const id = Symbol('id'); // 심볼을 만들때 설명을 붙일 수 있다. (디버깅 할 때 편하다.)
// const id2 = Symbol('id');

// console.log(id, id2);
// console.log(id === id2);
// console.log(id == id2);

// property key : 심볼형
// const id = Symbol('id');
// const user = {
//     name : 'Mike',
//     age : 30,
//     [id] : 'myid'
// }
// Object.keys(user); // ["name", "age"]
// Object.values(user); // ["Mike", 30]
// Object.entries(user); // [Array(2), Array(2)]
// for(let a in user) {}

// console.log(user);

// const user = {
//     name : 'Mike',
//     age : 30 
// }

// const id = Symbol('id');
// user[id] = 'myid';

// user.name = 'myname';// x
// user.a_key_no_one_used = 'hahaha'; // x

// Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
// const id1 = Symbol.for('id');
// const id2 = Symbol.for('id');

// Symbol.keyFor(id1); // "id"

// console.log(id1 === id2); // true

// 전역 심볼이 아닌 심볼은 keyFor을 사용할 수 없다.
// const id = Symbol('id 입니다.');
// // 대신 description으로 그 이름을 알 수 있다.
// id.description; // "id 입니다." 
// console.log(id.description);

// 숨겨진 Symbol key 보는 법
// const id = Symbol('id');

// const user = {
//     name : 'Mike',
//     age : 30,
//     [id] : 'myid'
// }

// Object.getOwnPropertySymbols(user);
// console.log(id);

// Reflect.ownKeys(user);
// console.log(user);

// 예제 1
// 다른 개발자가 만들어 놓은 객체
const user = {
    name : "Mike",
    age : 30,
};

// 내가 작업
// user.showName = function () {}; // x
const showName = Symbol("show name");
user[showName] = function () {
    console.log(this.name);
};

user[showName] ();


// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user [key]}.`);
}