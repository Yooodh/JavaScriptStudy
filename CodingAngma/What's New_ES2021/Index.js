/* ES2021 */

/* String.replaceAll */
// replace 와 사용법 동일
// replace 는 첫 번째 문자만 바꿔주는데 replaceAll 은 모든 문자열에 적용된다.
const str1 = "Hello world";

// replaceAll 이 없었을때는 정규표현식(/l/)을 사용했다.
// 정규 표현식을 써주면 첫 번째 문자만 바뀐다.
// 이런 경우에는 g플래그(전역검색) 를 사용한다.
console.log(str1.replace(/l/, "~"));
console.log(str1.replace(/l/g, "~"));
console.log(str1.replaceAll("l", "~"));

const str11 = "I'm [Mike]. this is Tom's [Car].";

console.log(str11.replaceAll("[", "~").replaceAll("]", "~"));
// 정규표현식은 특수문자 앞에 \를 붙여줘야한다.
console.log(str11.replace(/\[/g, "~").replace(/\]/g, "~"));


/* Promise.any */
// Promise.race와 비슷하다. 둘 다 Promise 배열을 받는다.

// 1초 후에 거부되는 Promise
const rejPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("fail..");
    }, 1000);
});

// 2초 후에 이행되는 Promise
const resPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("success");
    }, 2000);
});

// race, any 동일하게 전달

// Promise.race : 프로미스 중에 가장 먼저 완료된 결과값으로 이행/거부
Promise.race([rejPromise, resPromise])
    .then(() => console.log("성공"))
    .catch(e => console.log(e));

// Promise.any : 프로미스 중에 가장 먼저 이행된 객체 반환
Promise.any([rejPromise, resPromise])
    .then(() => console.log("성공"))
    .catch(e => console.log(e));


/* Logical assignment Operators */

// function add(num1, num2){
//     console.log(num1 + num2);
// } // NaN

// default 값 주기
function add(num1, num2) {
    // num1 = num1 || 0;
    num1 ||= 0;
    // num2 = num2 || 0;
    num2 ||= 0;
    console.log(num1 + num2);
}

console.log(add());

let num = 0;
console.log(num);

num = num + 3;
console.log(num);

// num 과 num이 같을 때 = 과 + 합칠 수 있는 원리와 같다.
num += 3;
console.log(num);

name = name && `Hello ${name}`;
name &&= `Hello ${name}`;

// ?? -> Nullish coalescing operator : null 병합 연산자
// 앞의 값(name)이 null 이거나 undefined일때 뒤의 값("Mike")이 실행된다.
// || : 앞의 값이 false 이면 뒤의 값 실행
name = name ?? "Mike"
name ??= "Mike"

let num3 = 0;
console.log(num3);

let a = num3 || 3;
console.log(a);

let b = num3 ?? 3;
console.log(b);


/* Numeric separators */

// JS는 ,를 숫자 사이에 넣는 것을 허용하지 않는다.

// let billion = 1,000,000,000 // 10억

// _를 구분자로 사용한다.
let billion = 1_000_000_000 // 10억

console.log(billion);

/* WeakRef */
// WeakRef = weak reference (약한 참조)

// JS는 가비지 컬렉터가 있다.
// 사용하지 않은 객체를 메모리에서 해제 해주는 작업을 자동으로 해준다.
// 참조가 걸려있으면 메모리에서 제거되지 않는다.
// 약한참조 = 가비지 컬렉터 대상이 된다.
let user = {name: 'Mike', age: 30}
const weakUser = new WeakRef(user);

user = null;

const timer = setInterval(() => {
    // deref()는 참조에 접근하기 위해 사용
    const wUser = weakUser.deref();
    if(wUser) {
        console.log(wUser.name);
    } else {
        console.log('제거 되었습니다.');
        clearInterval(timer)
    }
}, 1000)

// WeakRef는 약한 참조이기 때문에 특정 객체를 일정시간만 cache하도록 하는 방법으로도 사용할 수 있다.
class MyCache {
    constructor() {
        // cache 빈 객체 생성
        this.cache = {}
    }

    // add를 하여 cache 객체에 key와 객체를 받아서 넣어준다.
    // WeakRef로 넣어준다. new WeakRef(obj)를 사용하지 않고 객체를 넣어주면 강한참조가 된다.
    // 강한 참조가 되면 전달이 된 객체가 사라진다고 하더라도 cache[key]를 가비지 컬렉터가 가비지로 인식하지 못한다.
    add(key, obj) {
        this.cache[key] = new WeakRef(obj)
    }

    // get은 add로 넣어준 객체를 다시 읽을때 사용한다.
    get(key) {
        let cachedRef = this.cache[key].deref()

        // if 문으로 있는지 없는지 항상 확인해준다. (지워졌을 수도 있기 때문)
        if(cachedRef) {
            return cachedRef
        } else {
            return false;
        }
    }
}