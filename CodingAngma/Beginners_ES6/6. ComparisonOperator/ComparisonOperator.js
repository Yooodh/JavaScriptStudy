// < 크다   
// > 작다
// <= 크거나 같다
// >= 작거나 같다
// == 같다
// != 다르다

// 비교 연산자
// 반환값은 항상 Boolean형. true나 false로 반환

// a = 3; // a에 3을 넣는다.
// a == 3; // a와 3이 같다.
// a != 3; // a와 3이 다르다.

console.log(10 > 5);
console.log(10 == 5); // 동등 연산자
console.log(10 != 5);

// 동등 연산자
const a =1;
const b ="1";

// console.log(a == b); // true
console.log(a === b); // 일치 연산자 : ===을 쓰면 타임까지 비교해줌. 가급적 동등연산자보다 일치연산자를 사용하기를 추천.

// 조건문 : 어떤 조건에 따라 이후 행동이 달라지게 만들어주는 역할.

// if문 : 괄호안에 들어가는 조건을 평가해서 true면 실행해준다.
// if(Boolean : true, false){}
// else절은 if문이 false일 때 실행된다.

// if
const age = 30;

if(age > 19){
    console.log('환영합니다.');
}

if(age <= 19){
    console.log('안녕히가세요.');
}

console.log('-----------------------')

// else
const age1 = 10;

if(age1 > 19){
    console.log('환영합니다.');
}

else{
    console.log('안녕히가세요.');
}

console.log('-----------------------')

// else if
// 추가 요구사항 : 19살이면 수낭 잘치세요 라는 문구를 보여주세요.
// age === 19
const age2 = 19;

if(age2 > 19){
    console.log('환영합니다.');
}

else if(age2 === 19) {
    console.log('수능 잘치세요.');
}

else{
    console.log('안녕히가세요.');
}

console.log('-----------------------')