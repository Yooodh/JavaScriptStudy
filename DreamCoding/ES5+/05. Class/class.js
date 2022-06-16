// class 안에는 이름과 나이 같은 속성(field)이 들어있다.
// 그리고 말하는 행동(method)이 들어있다.
// 그래서 class는 조금 더 연관이 있는 데이터들을 묶어놓은 fields와 methods가 종합적으로 묶여있는 것
// 간혹 class 안에는 method는 들어있지 않고 field만 들어있는 경우가 있다. 그것들을 데이터 클래스 라고 부른다.

// class 안에서 내부적으로 보여지는 변수와 밖에서 보일 수 있는 변수들을 나누어서 이것들을 캡슐화 라고도 한다.
// class를 이용해서 상속과 다양성이 일어날 수 있는데 이런 모든 것들이 가능한 것이 객체지향 언어이다.

// class는 붕어빵을 만들 수 있는 틀을 말한다. 
// 그래서 청사진 이라고도 불리고 템플릿 이라고도 불린다.
// class 자체에는 데이터가 들어있지 않고 템플릿만 정해놓는다.
// class안에 어떤 데이터가 들어올 수 있는지 정의를 해놓고 한 번만 선언한다.
// class를 이용해서 실제로 데이터를 넣어서 만드는 것이 object이다.
// class를 이용해서 새로운 instance를 생성하면 object가 된다.
// object는 class를 이용해서 굉장히 많이 만들 수 있다.
// class는 정의만 한 것이라서 실제로 메모리에 올라가진 않지만 실제로 데이터를 넣으면 object는 메모리에도 올라가게 된다.

'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactial sugar over Prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// class를 사용하는 사용자가 다른 사람이 잘못 사용해도 조금 더 방어적인 자세로 만들 수 있도록 하는 것
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 콜스택 초과 닫힘 방지를 위해 _ 기호를 이용해서 getter와 setter의 변수를 만든다.

    // get을 이용해서 값을 return
    get age() {
        return this._age;
    }

    // set은 값을 설정하기 때문에 value를 받아와야 한다.
    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be nagetive');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2;
    // # 기호를 붙이게 되면 class 내부에서만 값이 보여지고 접근이 되고 변경이 가능
    // class 외부에서는 이 값을 읽을수도 변경할 수도 없다.
    #privateField = 0;
}
const experiment = new Experiment(); 
console.log(experiment.publicField); // 2
console.log(experiment.privateFile); // undefined

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        // console.log(`drawing ${this.color} color of`);
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `Triangle: color: ${this.color}`
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {

    // draw를 Overriding 했기 때문에 Shape에 정의된 draw 함수가 호출되지 않는다.
    draw() {
        // super 함수를 호출하게 되면 부모의 method도 호출된다.
        super.draw();
        console.log('▲');
    }

    // 필요한 함수들만 Overriding해서 작성할 수 있다.
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

console.log(triangle.toString());