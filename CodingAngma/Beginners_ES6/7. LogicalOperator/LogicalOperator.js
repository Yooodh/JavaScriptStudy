// 논리 연산자

// || (or)
// 여러개 중 하나라도 true면 true
// 즉, 모든 값이 fales일 때만 false를 반환
// 첫번째 true를 발견하는 즉시 평가를 멈춤

// 스티브 잡스는 한국인 이거나 ||, 남자이다. : true
// 스티브 잡스는 남자이거나 ||, 한국인 인거나, 군인이거나...
// 남자 true값을 찾자마자 멈춘다.

// && (and)
// 모든 값이 true면 true
// 즉 하나라도 false면 false를 반환
// 첫번째 false를 발견하는 즉시 평가를 멈춤

// 스티브 잡스는 한국인 이고 &&, 남자이다. : false
// 스팁브 잡스는 남자 이고 &&, 한국인 이며, 군인인 동시에...
// 한국인 false값을 찾자마자 멈춘다.

// ! (not) true와 false를 반대값으로 바꿔준다.
// true면 flase
// false면 true

// 평가
// 운전면허(80%)가 있고 시력(60%)이 좋은 여군(7%)
// -> 여군인데 시력이 좋고 운전면허가 있는 사람.

// OR
// 이름이 TOM 이거나, 성인이면 통과
const name = "Mike";
const age = 30;

if(name === 'Tom' || age > 19){
    console.log('통과');
}else{
    console.log('X');
}

// AND
// 이름이 Mike이고, 성인이면 통과
const name1 ="Tom"
const age1 = 30;

if(name1 === 'Mike' && age1 > 19){
    console.log('통과');
}else{
    console.log('X');
}

// NOT
// 나이를 입력받아 성인 아니면 통과 못함.
const age2 = prompt('나이가...?')
const isAdult = age2 >19;

if(!isAdult){
    console.log('X');
}

// 우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과
const gender = "F";
const name3 = "Jane";
const isAdult2 = true;

// if(gender === 'M' && name3 === 'Mike' || isAdult2){ // &&가 || 보다 우선순위가 높아서 통과된다.
// if((gender === 'M' && name3 === 'Mike' ) || isAdult2){ // 위 코드와 같은 코드
if(gender === 'F' && (name3 === 'Mike' || isAdult2)){
    console.log('통과');
}else{
    console.log('X');
} 

