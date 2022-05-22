// Prototype
const user = {
    name : 'Mike',
    // hasOwnProperty : function() {
    //     console.log('haha');
    // }
}

console.log(user.name);
console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('age'));
console.log(user);

// hasOwnProperty가 객체 안에 없을때만 Prototype에서 property를 찾는다.
// 객체 안에 있을때는 객체에 property가 있으면 거기서 탐색을 멈춘다.

// wheels, drive가 공통되니까 분리해서 car로 묶어준다
const car = {
    wheels: 4,
    drive() {
        cosnol.log("drive..");
    },
};

const bmw = {
    color: "red",
    // wheels: 4,
    naviagtion: 1,
    // drive() {
    //     console.log("drive..");
    // },
};

const benz = {
    color: 'black',
    // wheels: 4,
    // drive() {
    //     console.log("drive..");
    // },
};

const audi = {
    color: "blue",
    // wheels: 4,
    // drive() {
    //     console.log("drive..");
    // },
};

// car 상속받기
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw);
console.log(bmw.color);
console.log(bmw.wheels);

const x5 = {
    color: "white",
    name: "x5",
};

// x5는 bmw의 상속을 받는다.
x5.__proto__ = bmw;

console.log(x5.name);
console.log(x5.color);
console.log(x5.naviagtion);

for(p in x5){
    console.log(p);
}

// hasOwnProperty는 객체가 직접 가지고 있는 property만 true를 반환한다.
for(o in x5) {
    if(x5.hasOwnProperty(o)){
        console.log('o', o);
    } else {
        console.log('x', o);
    }
}

console.log(x5);
console.log(Object.keys(x5));
console.log(Object.values(x5));

//Prototype Chain
// x5에서 naviagtion을 찾고 없으니까 Prototype인 bmw에서 탐색하고 있으니까 멈춘다.
// x5에 drive라는 메서드가 없고 bmw로 올라가보니 여기도 없어서 Prototype인 car까지 올라가서 drive 메서드를 사용한다.

// const car0 = {
//     wheels : 4,
//     drive() {
//         console.log('drive..');
//     },
// };

const Bmw = function (color) {
    this.color = color;
    // this.wheels = 4;
    // this.drive = function () {
    //     console.log("drive..");
    // };
};

// 생성자 함수(Bmw)가 생성하는 객체(x4, z4)에 __proto__를 (.wheels, .drive)로 설정한다.
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//     console.log("drive..");
// };

// Bmw.prototype.naviagtion = 1;
// Bmw.prototype.stop = function () {
//     console.log("STOP!");
// };

// prototype를 덮어쓰면 z4.constructor === Bmw가 false가 나온다.
// 이런 현상을 방지하기 위해 하나씩 property를 추가하는게 좋다.
// Bmw.prototype = {
//     wheels : 4,
//     drive() {
//         console.log("drive...");
//     },
//     naviagtion: 1,
//     stop () {
//         console.log("STOP!");
//     },
// };

// 혹은 
Bmw.prototype = {
    //수동으로 작성한다.
    constructor: Bmw,
    wheels : 4,
    drive() {
        console.log("drive...");
    },
    naviagtion: 1,
    stop () {
        console.log("STOP!");
    },
};

const x4 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x4);
console.log(x4.wheels);
console.log(x4.drive());
console.log(x4.stop());

// x4.__proto__ = car;
// z4.__proto__ = car;

// 생성자 함수가 새로운 객체를 만들어 낼때 그 객체는 생성자의 instance라고 불린다.
// JS에는 이를 편리하게 확인할 수 있는 instanceof 연산자가 있다.
// instanceof를 이용해서 객체와 생성자를 비교할 수 있고, 해당 객체가 그 생성자로부터 생성된 것인지를 판단해서 true, false로 반환한다.
console.log(z4 instanceof Bmw);
console.log(z4.constructor === Bmw);

// 아무나 수정하지 못하게 closure 이용
const Bmw0 = function (color) {
    const c = color;
    // this.color = color;
    this.getColor = function () {
        console.log(c);
    };
};

const x3 = new Bmw0("red");

console.log(x3.getColor());