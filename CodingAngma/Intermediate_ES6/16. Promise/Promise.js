// Promise
// resolve : 성공
// reject : 실패
// 어떤 일이 완료 된 이후 실행되는 함수 -> callback함수
const pr = new Promise ((resolve, reject) => {
    //code
});

// new Promise
// state : pending(대기) -resolve(value)-> state : fulfilled(이행됨) / result : value
const pr0 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('OK')
    }, 3000)
});

// state는 pending(대기) 이었다가 3초후에 fulfilled(이행됨) 로 바뀐다.
// rsult는 undefined 였다가 'OK'로 바뀐다.
console.log(pr0);

// result : undefined -reject(error)-> state : rejected(거부됨) / result : error
const pr1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        reject(new Error('error..'))
    }, 3000)
});

// state는 pending(대기) 이었다가 3초후에 rejected(거부됨) 로 바뀐다.    
// rsult는 undefined 였다가 error로 바뀐다.
console.log(pr1);

// 판매자 코드
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
});

// 소비자 코드
pr2.then(
    function(result) {}, // 이행 되었을때 실행 // result에 'OK'값이 들어온다.
    function(err) {} // 거부 되었을때 실행
);

const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
});

// resolve로 실행되었기 때문에 function(err){} 코드는 실행되지 않는다.
pr3.then(
    function(result){
        console.log(result + ' 가지러 가자.');
    },
    function(err) {
        console.log('다시 주문해주세요..');
    }
);

// then 이외에 사용 할 수 있는것이 catch와 finally
const pr4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('OK')
    }, 3000)
});

// pr4.then(
//     function(result){},
//     function(err){}
// );


pr4.then(
    function(result){}

// catch는 에러가 발생할 경우 reject인 경우에만 실행된다.
// 두번째로 전달했던 함수를 catch 안으로 넣어준다
// catch로 명확하게 구분해 주는게 가독성이 좋다.
// 첫번째 함수를 실행했다가 나는 에러도 잡아줄 수 있기 때문에 catch문을 사용하는 것이 좋다.
).catch(
    function(err){}

// finally는 처리가 완료되면 항상 실행된다.
// 로딩화면 등을 없앨 때 이용한다. 
).finally(
    function(){
        console.log('--- 주문 끝 ---')
    }
)

// 예제1
const pr5 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve("OK");
        reject(new Error("err..."));
    }, 1000);
});

console.log("시작");

pr5.then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("끝");
    });

// callback 함수
const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

console.log('시작');
f1(function() {
    f2(function() {
        f3(function() {
            console.log('끝');
        });
    });
});

// Promise
const f4 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f5 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res("2번 주문 완료");
            rej(new Error("xx"));
        }, 3000);
    });
};

const f6 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// // Promise.all
// // 한꺼번에 시작하고 모두 이행되면 값을 사용할 수 있다. (시간 절약 가능)
// // 하나의 정보라도 누락되면 페이지를 보여주면 안되는 경우에 사용. (다 보여주거나, 아예 안 보여주거나)
// console.time('x');
// Promise.all([f4(), f5(), f6()]).then((res) => {
//     console.log(res);
//     console.timeEnd("x");
// });

// Promise.race
// 사용법은 Promise.all과 같다.
// Promise.all : 모든 작업이 완료 될 때까지 기다린다.
// Promise.race : 하나라도 1등으로 완료되면 끝낸다.
console.time('x');
Promise.race([f4(), f5(), f6()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});

// // 프로미스 체이닝(Promises chaining)
// // 가져온 데이터 순으로 화면을 그릴 수 있다.
// // console.log('시작');
// console.time("시작");
// f4()
//     .then ((res) => f5(res))
//     .then ((res) => f6(res))
//     .then ((res) => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//         // console.log("끝");
//         console.timeEnd("시작");
//     });

