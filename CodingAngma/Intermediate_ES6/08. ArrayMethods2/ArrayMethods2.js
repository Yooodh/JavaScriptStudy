// arr.sort()
// 배열 재정렬
// 배열 자체가 변경되니 주의
// 인수로 정렬 로직을 담은 함수를 받음
let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr);

let arr0 = ["a", "c", "d", "e", "b"];

arr0.sort();

console.log(arr0);

let arr1 = [27, 8, 5, 13];

// function fn(a,b){
//     return a - b;
// }
arr1.sort((a, b) => {
    console.log(a, b);
    // 8, 27, 5, 13 // 8, 27 비교
    // 5, 8, 27, 13 // 5, 8 비교
    // 5, 8, 27, 13 // 13, 5 비교
    // 5, 8, 27, 13 // 13, 8 비교
    // 5, 8, 13, 27 // 13, 27 비교
    return a - b;
});

// arr1.sort();
// arr1.sort(fn);

console.log(arr1);

// Lodash
// _.sortBy(arr);

// arr.reduce()
// 인수로 함수를 받음
// (누적 계산값, 현재값) => {return 계산값};

// 배열에 모든 수 합치기
// for, for of, forEach
let arr2 = [1, 2, 3, 4, 5];

let result = 0;
arr2.forEach(num =>{
    // result = result + num;
    result += num;
})

const result0 = arr2.reduce((prev, cur)=>{
    return prev + cur;

}, 0)

const result1 = arr2.reduce((prev, cur)=>{
    return prev + cur;

}, 100)


console.log(result);
console.log(result0);
console.log(result1);

// 성인 구하기
let userList = [
    {name : "Mike", age : 30},
    {name : "Tom", age : 10},
    {name : "Jane", age : 27},
    {name : "Sue", age : 26},
    {name : "Harry", age : 42},
    {name : "Steve", age : 69},
]

let result2 = userList.reduce((prev, cur)=>{
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
},[])

console.log(result2);

// 성인 구하기2
let userList0 = [
    {name : "Mike", age : 30},
    {name : "Tom", age : 10},
    {name : "Jane", age : 27},
    {name : "Sue", age : 26},
    {name : "Harry", age : 3},
    {name : "Steve", age : 69},
]

let result3 = userList0.reduce((prev, cur)=>{
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
},[])

console.log(result3);

// 나이 합 구하기
let userList1 = [
    {name : "Mike", age : 30},
    {name : "Tom", age : 10},
    {name : "Jane", age : 27},
    {name : "Sue", age : 26},
    {name : "Harry", age : 43},
    {name : "Steve", age : 60},
]

let result4 = userList1.reduce((prev, cur)=>{
    return (prev += cur.age);
}, 0)

console.log(result4);

// 이름이 3자인 사람 구하기
let userList2 = [
    {name : "Mike", age : 30},
    {name : "Tom", age : 10},
    {name : "Jane", age : 27},
    {name : "Sue", age : 26},
    {name : "Harry", age : 43},
    {name : "Steve", age : 60},
]

let result5 = userList2.reduce((prev, cur)=>{
    if(cur.name.length === 3) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result5);

// arr.reduceRight();
// arr.reduce(); 와 기능이 동일하지만 배열 우측부터 연산을 실행한다는 차이점이 있다.