// async, await를 사용하면 Promise의 대인 메서드를 체인 형식으로 호출하는 것보다 가독성이 좋아진다.

// async
// 함수 앞에 async 키워드를 붙여주면 항상 Promise를 반환한다.
async function getName() {
    // return "Mike";

    // 반환 값이 Promise면 값을 그대로 사용한다.
    // return Promise.resolve("Tom");

    // 함수 내부에서 예외가 발생하면 reject상태의 Promise가 반환된다.
    throw new Error("err..");
}

console.log(getName());

// getName().then((name) => {
//     console.log(name);
// });

// reject는 catch로 확인
getName().catch((err) => {
    console.log(err);
});

// await
// await 키워드는 async 함수 내부에서만 사용할 수 있다.
// 일반 함수에서 사용하면 에러가 발생한다.
function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

async function showName() {
    const result = await getName('Mike');
    console.log(result);
}

console.log("시작");
showName();

// Promise로 만든 코드 async await로 바꾸기
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
}

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej(new Error("err..."));
        },3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// f1()
// .then((res) => f2(res))
// .then((res) => f3(res))
// .then((res) => console.log(res))
// .catch(console.log);

console.log("시작");
async function order() {
    // 변수(result)에 데이터(f)가 기다렸다가(await) 들어가는 것을 명확하게 볼 수 있다.
    // const result1 = await f1();
    // reject일 경우 try catch문으로 감싸주면 된다.
    try{
        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);
        // const result2 = await f2(result1);
        // const result3 = await f3(result2);
        // console.log(result3);
    } catch(e) {
        console.log(e);
    }
    console.log("종료");
}

order();

