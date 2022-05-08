// ' ', " " 는 차이가 크게 없으니 상황에 맞게 쓰는 것이 좋다.

// html 코드 같은 경우에는 ' '로 감싸는게 좋다. 
let html = '<div class="box_title">제목영역</div>';

// 영어로 된 문장은 " "로 감싸는게 좋다.
let desc = "It's 3 o'clock."

// ` `는 $와 { }를 이용해 변수를 표현하거나 표현식을 쓸 수 있다.
let name = "Mike";
let result = `My name is ${name}.` // My name is Mike.
let add = `2 더하기 3은 ${2+3}입니다`  // 2 더하기 3은 5입니다.

console.log(result);
console.log(add);

// 여러줄
// ` `은 여러줄을 포함할 수 있다.
let desc1 = `오늘은 맑고 화창한 
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`;

// ' '로 여러줄을 표시하려면 \n을 써야한다.
let desc2 = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.';
// let desc2 = '오늘은 맑고 화창한 // error!
// 날씨가 계속 되겠습니다.
// 내일은 비소식이 있습니다.';

console.log(desc1);
console.log(desc2);

// length : 문자열 길이
// 보통 가입할 때 id나 pw를 몇자 이상, 몇자 이하로 제한할때 체크
let desc3 = '안녕하세요.';
desc3.length // 6

console.log(desc3.length);

// 특정 위치에 접근
// 배열 동일하게 0부터 시작
let desc4 = '안녕하세요.';
desc4[2] // '하'

console.log(desc4[2]);

// 배열과 다르게 한글자만 바꾸는 것을 허용하지 않는다.
desc4[4] = '용';

console.log(desc4); // 안녕하세요.

// toUpperCase() / toLowerCase()
// 영어인 경우 대,소문자 바꾸기
let desc5 = "Hi guys. Nice to meet you.";

desc5.toUpperCase();
"HI GUYS. NICE TO MEET YOU.";

console.log(desc5.toUpperCase());

desc5.toLowerCase();
"hi guys. nice to meet you.";

console.log(desc5.toLowerCase());

// str.indexOf(text) : 문자를 인수로 받아 몇번째에 위치하는지 알려준다.
let desc6 = "Hi guys. Nice to meet you";

desc6.indexOf('to'); // 14
desc6.indexOf('man'); // -1

console.log(desc6.indexOf('to'));
console.log(desc6.indexOf('man'));

// 주의할 점 : 포함된 문자가 여러개여도 첫번째 문자만 반환한다.
// Hi로 시작하는 문장이라 indexOf의 Hi는 0이기 때문(첫번째에 있어서)
// if에서 0은 false이기 때문에 console이 찍히지 않는다.
if(desc6.indexOf('Hi')){
    console.log('Hi가 포함된 문장입니다.')
}

// 그래서 항상 -1보다 큰가? 로 비교하면 된다.
if(desc6.indexOf('Hi') > -1){
    console.log('Hi가 포함된 문장입니다.')
}

// str.slice(n, m) : n(시작점) 부터 m(없으면 문자열 끝까지, 양수면 그 숫자까지,(포함하지 않음), 음수면 끝에서부터 센다) 까지의 문자열을 반환한다.
// 특정 범위의 문자열만 뽑아보기
let desc7 = "abcdefg";

desc7.slice(2); // "cdefg"
desc7.slice(0,5); // "abced"
desc7.slice(2,-2); // "cde"

console.log(desc7.slice(2));
console.log(desc7.slice(0,5));
console.log(desc7.slice(2,-2));

// str.substring(n, m) : n과 m 사이 문자열 반환 / n과 m을 바꿔도 동작한다. / 음수를 허용하지 않는다.(음수는 0으로 인식)
let desc8 = "abcdefg";

desc8.substring(2,5); // "cde"
desc8.substring(5,2); // "cde"

console.log(desc8.substring(2,5));
console.log(desc8.substring(5,2));

// str.substr(n,m) : / n부터 시작해서 m 개를 가져온다.
let desc9 = "abcdefg";
desc9.substr(2,4); // "cdef"
desc9.substr(-4,2); //"de"

console.log(desc9.substr(2,4));
console.log(desc9.substr(-4,2));

// str.trim() : 앞 뒤 공백 제거
let desc0 = " coding     ";
desc0.trim(); // "coding"

console.log(desc0.trim());

// str.repeat(n) : 문자열 n번 반복
let hello = "hello!";
hello.repeat(3); // "hello!hello!hello!"

console.log(hello.repeat(3));

// 문자열 비교
1<3 // true
"a" < "c" // true

console.log(1<3);
console.log("a"<"c");

// 알파벳은 a 보다 z가 크다.
// 대문자보다 소문자가 크다.

"a".codePointAt(0); // 97
String.fromCodePoint(97); // "a"

console.log("a".codePointAt(0));
console.log(String.fromCodePoint(97));

// 예제 1
let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

// 숫자는 제외하고 글자들만 찍기
let newList = [];

for(let i=0; i<list.length; i++){
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList);

// 금칙어 : 콜라
// function hasCola(str){
//     if(str.indexOf('콜라') > -1){
//         console.log('금칙어가 있습니다.');
//     }else {
//         console.log('통과')
//     }
// }

// hasCola('와 사이다가 짱이야!'); // -1
// hasCola('무슨소리, 콜라가 최고');
// hasCola('콜라'); // 0

// includes
function hasCola(str){
    if(str.includes("콜라")){
        console.log('금칙어가 있습니다.');
    }else {
        console.log('통과')
    }
}

hasCola('와 사이다가 짱이야!'); // -1
hasCola('무슨소리, 콜라가 최고');
hasCola('콜라'); // 0