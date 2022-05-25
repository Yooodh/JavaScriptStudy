// Generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// 제너레이터는 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분 부터 이어서 실행 ex) Redux Saga
// next(), return(), throw()

// iterable (반복 가능)
// Symbol.iterator 메서드가 있다.
// Symbol.iterator 는 iterator 를 반환해야 한다.

// iterator
// next 메서드를 가진다.
// next 메서드는 value와 done 속성을 가진 객체를 반환한다.
// 작업이 끝나면 done 은 true 가 된다.

// function 옆에 *을 써서 만든다.
// 내부에 yield 키워드를 사용한다.
// yield에서 함수의 실행을 멈출 수 있다.
function* fn() {
    try {
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    } catch (e) {
        console.log(e);
    }
}

// 제네레이터 함수를 실행하면 제네레이터 객체가 반환된다.
// 제네레이터 객체는 next() 메서드가 있다.
// next()로 호출하면 가장 가까운 yield문을 만날때 까지 실행되고 데이터 객체를 반환한다.
// 반환 된 데이터 객체는 value와 done 프로퍼티를 가지는데
// value는 yield 오른쪽 값이다. 값을 생략하면 undefined
// done은 함수 코드가 끝났는지를 나타낸다.
// 실행이 끝났으면 true, 아니면 false
const a = fn();

console.log(a);
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.throw(new Error('err')));
console.log(a.return('END'));
console.log(a.next());
console.log(a.next());


// 배열은 반복 가능한 객체
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(let num of arr){
    console.log(num)
};

function* fn0() {
    yield 4;
    yield 5;
    yield 6;
}

const b = fn0()

// 제너레이터에 Symbol.iterator 메서드를 실행한 값이 자기 자신
// 즉, 제너레이터는 iterable 객체
console.log(a[Symbol.iterator]() === a);


// for of 가 시작이 되면 Symbol.iterator이 호출하고
// 없으면 에러발생
// 반환된 iterator에 next() 메서드를 호출하면서 done이 true가 될 때 까지 반복한다.
for(let num of b) {
    console.log(num);
};

// 문자열도 iterable
const str = 'hello';

const xx = str[Symbol.iterator]();

for(let s of xx){
    console.log(s);
};

console.log(xx.next());
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());
console.log(xx.next());

// next() 에 인수 전달
// 제너레이터는 외부로부터 값을 입력받을 수도 있다.
function* fn1() {
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 + num2;
}

const c = fn1();

console.log(c.next());
console.log(c.next(2));
console.log(c.next(4));
console.log(c.next());

// 값을 미리 만들어 두지 않음 (메모리 관리 측면에서 효율적)
// 필요한 값만 그때그때 생성한다.
function* fn2() {
    let index = 0;
    while (true) {
        yield index ++;
    }
}

const d = fn2();

console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log(d.next());
console.log(d.next());

// yield* 을 이용 (다른 제너레이터 부르기)
function* gne1() {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2() {
    yield "Hello,";
    yield* gne1(); // 반복 가능한 모든 객체 올 수 있다.
    yield "!";
}

console.log(...gen2());