// setTimeout : 일정 시간이 지난 후 함수를 실행
// function fn(){
//     console.log(3)
// }

// 3000 == 3s 의미
// setTimeout(fn, 3000);

// 함수를 전달하지 않고 직접 코드를 작성해도 동일하게 동작한다.
setTimeout(function(){
    console.log(3)
}, 3000);

// 인수가 필요하다면 시간 뒤에 적어준다.

function showName(name){
    console.log(name);
}

// 'Mike'는 함수의 첫번째 인수로 전달된다.
setTimeout(showName, 3000, 'Mike');

// clearTimeout(tId); 는 예정된 작업을 없앤다.
// 3초가 지나기 전에 코드가 실행되기 때문에 아무일도 일어나지 않는다.


// setInterval : 일정 시간 간격으로 함수를 반복
// setTimeout과 사용법이 동일하다.
// 한번 실행하고 끝내는 것과는 달리 계속 반복 실행한다.
// 3초마다 'Mike'가 찍힌다.
function showName0(name0){
    console.log(name0);
}

const tid = setInterval(showName0, 3000, 'Mike');

// 중간에 중단하려면 clearInterval(tId); 실행하면 된다.

// 주의사항
// delay = 0 으로 줘도 실제 바로 실행되지는 않는다.
// 1이 먼저 찍히고 2가 찍힌다.
// 현재 실행중인 스크립트가 종료된 이후 스케줄링 함수를 실행하기 때문
// 기본적으로 브라우저는 4ms~ 정도의 대기 시간이 있다.
setTimeout(function(){
    console.log(2)
}, 0);

console.log(1);

// 예제
let num = 0;

// function showTime() {
//     console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
// }

function showTime() {
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if(num > 5) {
        clearInterval(tId0);
    }
}

// setInterval(showTime, 1000);
const tId0 = setInterval(showTime, 1000);
