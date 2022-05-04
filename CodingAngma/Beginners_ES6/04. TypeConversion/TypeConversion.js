// String() 문자형으로 변환
// Number() 숫자형으로 변환
// Boolean() 불린형으로 변환

// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// const result = (mathScore + engScore) / 2;

// prompt 입력 -> 문자형 
// 숫자형이 아니더라도 나누기같은 표현식은 숫자형으로 자동 변환 되어서 계산된다.(자동 형 변환)

const mathScore = 90;
const engScore = 80;
const result = (mathScore + engScore) / 2;

console.log(result);

// String
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
);

// Number
console.log(
    Number("1234"),
    Number("1234asdf")
);

console.log(
    Number(true),
    Number(false)
)

// Boolean

// false
// 1. 숫자 0
// 2. 빈 문자열 "
// 3. null
// 4. undefined
// 5. NaN
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)

// 이외에는 모두 true
console.log(
    Boolean(1),
    Boolean(123),
    Boolean("javacscript")
)

// 주의사항 1
// Boolean(Null) // 0
// Boolean(undefind) // NaN

// 주의사항 2
// Boolean(0) // false
// Boolean('0') //true

// Boolean('') //false
// Boolean(' ') //true