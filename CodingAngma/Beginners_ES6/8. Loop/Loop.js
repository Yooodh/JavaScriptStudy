// 1부터 10까지 로그 찍기
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// 1부터 100까지, 1000까지, 10000까지 로그 찍기
// 이럴때 반복문을 쓴다 : 동일한 작업을 여러번 반복

// for
// for (let i = 0; i < 10; i++)

// 초기값 
// let i = 0; 

// 조건 false가 되면 멈춤 
// i < 10; 

// 코드 실행후 작업 
// i++

// {   // 반복할 코드 }

// i = 0
// i가 10보다 작으므로 코드 실행
// i 값 1 증가

// i = 1
// i 가 10보다 작으므로 코드 실행
// i값 1증가

// (반복)


// 1부터 10까지 로그
for (let i = 1; i < 11; i++){
    console.log(i);
}

for (let i = 1; i <= 10; i++){
    console.log(i);
}

for (let i = 0; i < 10; i++){
    console.log(i+1);
}

// while
let i = 0;

while(i<10){
    console.log(i);
    i++;
}

// do.. while
// 코드를 실행하고 조건체크, 한 번은 실행한다는 것이 while과 차이점
let ii = 0;

do {
    // 코드
    ii++;
} while(ii<10)

// break : 멈추고 빠져나옴
while(true) {
    let answer = confirm('계속 할까요?');
    if(!answer){
        break;
    }
}

// continue : 멈추고 다음 반복으로 진행

// continue 
// 짝수만
for(let iii = 0; iii< 10; iii++){
    if(iii % 2) {
        continue;
    }
    console.log(iii);
}

// Tip. 명확한 횟수가 정해져 있으면 for문, 그게 아니라면 while문 사용