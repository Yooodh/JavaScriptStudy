// Object
// method : 객체 프로퍼티로 할당 된 함수

const superman = {
    name : 'clark',
    age : 33,
    // fly : function(){ // fly 함수가 superman 객체의 method
    fly(){
        console.log('날아갑니다.')
    }
}

superman.fly();

// const user = {
//     name : 'Mike',
//     sayHello(){
//         // console.log(`Hello, I'm ${user.name}`); // user -> this
//         console.log(`Hello, I'm ${this.name}`);
//     }
// }
// user.sayHello();

// let boy = {
//     name : 'Mike',
//     sayHello : function(){
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };

// let girl = {
//     name : 'Jane',
//     sayHello : function(){
//         console.log(`Hello, I'm ${this.name}`);
//     }
// };

// boy.sayHello(); // I'm Mike
// girl.sayHello(); // I'm Jane

// 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴

// let boy = {
//     name : 'Mike',
//     sayHello : () => {
//         console.log(this); // 전역객체 // 브라우저 환경 : window  // Node js : global
//     }
// };
// boy.sayHello();

// method
// method 에서는 객체명을 직접 써주는 것보다 this를 사용하는 것이 좋다.
// let boy = {
//     name : "Mike",
//     showName : function () {
//         // console.log(boy.name)
//         console.log(this.name)
//     }
// };

// boy.showName();

// let man = boy;
// boy = null;

// man.showName();

// man.name = "Tom"
// console.log(boy.name)


// 객체의 method를 작성할때는 화살표함수를 사용하지 않는 것을 추천.
let boy = {
    name : "Mike",
    sayThis : () => {
        console.log(this)
    }
};

boy.sayThis();