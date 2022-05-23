// Class
// ES6에 추가된 스펙

const User = function (name, age) {
    this.name = name;
    this.age = age;
    // this.showName = function () {
    //     console.log(this.name);
    // };
};

User.prototype.showName = function () {
    console.log(this.name);
};

const mike = new User("Mike", 30);

// Class 사용
class User2 {
    // constructor : 객체를 만들어주는 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // showName()처럼 class내에 정의한 메서드는 User2에 prototype에 저장한다.
    showName() {
        console.log(this.name);
    }
}

// new를 통해 호출하면 자동으로 실행된다.
const tom = new User2("Tom", 19);

// 내부에서 정의된 내용으로 객체를 생성하는 것은 동일하다.
console.log(tom);
console.log(mike);
console.log(mike.showName());
console.log(tom.showName());

// Class의 메서드는 for in 문에서 제외된다.
for(const p in mike) {
    console.log(p);
}

for(const p in tom) {
    console.log(p);
}

// 상속
// extends
class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

// 메소드 오버라이딩(method overriding)
class Bmw extends Car {
    // constructor이 없을때
    // constructor(...args){
    //     super(...args);
    // }
    constructor(color) {
        // super 키워드로 부모 클래스의 constructor를 실행해준다.
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
//     // 동일한 이름으로 메소드를 정의하면 덮어쓰게 된다.
//     stop() {
//         // 부모의 메서드를 그대로 사용하면서 확장하려면 super키워드를 사용하면 된다.
//         super.stop();
//         console.log("OFF");
//     }
}

const z4 = new Bmw("blue");

console.log(z4);
console.log(z4.drive());
console.log(z4.stop());