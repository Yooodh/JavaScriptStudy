// call, apply, bind : 함수 호출 방식과 관계없이 this를 지정할 수 있음.

// call
// call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다.
const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

showThisName();

// 함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인것처럼 사용할 수 있다.
// call의 첫번째 매개변수는 this로 사용할 값이고, 매개변수가 더 있으면 그 매개변수를 호출하는 함수로 전달된다.
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

// update.call(mike, 1999, 'singer');

// console.log(mike);

// update.call(tom, 2002, 'teacher');

// console.log(tom);

// apply
// apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.

update.apply(mike, [1999, 'singer']);

console.log(mike);

update.apply(tom, [2002, 'teacher']);

console.log(tom);

// apply는 배열 요소를 함수 매개변수로 사용할 때 유용하다.
const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])

const maxNum = Math.max.call(null, ...nums);
// = Math.min.apply(null, 3, 10, 1, 6, 4)

console.log(minNum);
console.log(maxNum);

// call과 apply의 동작방식은 같다. 매개변수를 받는 방법이 다르다.
// call은 직접 받고 apply는 배열 형태로 받는다.

// bind
// 함수의 this 값을 영구히 바꿀 수 있다.
const mike0 = {
    name: "Mike",
};

function update(birthYear0, occupation0) {
    this.birthYear0 = birthYear0;
    this.occupation0 = occupation0;
}

const updateMike = update.bind(mike0);

updateMike(1980, "police");
console.log(mike0);

// 예제
const user = {
    name: "Mike",
    showName: function () {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

// fn에 할당할 때 this를 잃어버린다.
let fn = user.showName;

fn();

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();