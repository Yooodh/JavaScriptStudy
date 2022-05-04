// switch문
// if, else 문을 알고있다면 굳이 몰라도 된다.
// 모든 switch문은 if, else문으로 쓸수 있기 때문

// 하지만 케이스가 다양할 경우 보다 간결하게 쓸 수 있다는 장점이 있기 때문에 사용.
// switch(평가){
//     case A :
//         // A 일때 코드
//         case B :
//             // B 일때 코드
// }

// 위의 스위치 문을 if, else 문으로 바꿨을 때
// if(평가 == A) {
//     // A 일때 코드
// }else if(평가 == B){
//     // B 일때 코드
// }

// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 500원
// 수박 : 500원 
// 사고 싶은 과일을 물어보고 가격 알려주기
let fruit = prompt('무슨 과일을 사고 싶나요?');

// 이렇게 작성할 경우 찍은 case 아래 전부가 찍힘
// switch(fruit){
//     case '사과' :
//         console.log('100원 입니다.');
//     case '바나나' :
//         console.log('200원 입니다.');
//     case '키위' :
//         console.log('300원 입니다.');
//     case '멜론' :
//         console.log('500원 입니다.');
//     case '수박' :
//         console.log('500원 입니다.');
// }

// break 걸어주기
// switch(fruit){
//     case '사과' :
//         console.log('100원 입니다.');
//         break;
//     case '바나나' :
//         console.log('200원 입니다.');
//         break;
//     case '키위' :
//         console.log('300원 입니다.');
//         break;
//     case '멜론' :
//         console.log('500원 입니다.');
//         break;
//     case '수박' :
//         console.log('500원 입니다.');
//         break;
// }

// 사용자가 없는 값을 입력할 경우 아무런 알림창이 뜨지 않는 문제발생
// if문 메서는 else를 넣어주지만 
// switch문 에서는 default를 넣어준다.
// switch(fruit){
//     case '사과' :
//         console.log('100원 입니다.');
//         break;
//     case '바나나' :
//         console.log('200원 입니다.');
//         break;
//     case '키위' :
//         console.log('300원 입니다.');
//         break;
//     case '멜론' :
//         console.log('500원 입니다.');
//         break;
//     case '수박' :
//         console.log('500원 입니다.');
//         break;
//     default :
//         console.log('그런 과일은 없습니다.');
// }


// '멜론' 과 '수박'이 같은 가격이니까 묶어서 코드 줄이기
switch(fruit){
    case '사과' :
        console.log('100원 입니다.');
        break;

    case '바나나' :
        console.log('200원 입니다.');
        break;

    case '키위' :
        console.log('300원 입니다.');
        break;

    case '멜론' :
    case '수박' :
        console.log('500원 입니다.');
        break;
        
    default :
        console.log('그런 과일은 없습니다.');
}