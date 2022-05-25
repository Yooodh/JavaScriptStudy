// Generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// 제너레이터는 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분 부터 이어서 실행 ex) Redux Saga
// next(), return(), throw()

// iterable
// Symbol.iterator 메서드가 있다.
// Symbol.iterator 는 iterator 를 반환해야 한다.

// iterator
// next 메서드를 가진다.
// next 메서드는 value와 done 속성을 가진 객체를 반환한다.
// 작업이 끝나면 done 은 true 가 된다.

// 값을 미리 만들어 두지 않음

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

const a = fn();

console.log(a);
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.throw(new Error('err')));
console.log(a.return('END'));
console.log(a.next());
console.log(a.next());

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

console.log(a[Symbol.iterator]() === a);

for(let num of b) {
    console.log(num);
};

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

// yield* 을 이용
function* gne1() {
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2() {
    yield "Hello,";
    yield* gne1();
    yield "!";
}

console.log(...gen2());