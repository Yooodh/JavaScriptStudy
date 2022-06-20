// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = 'apple, kiwi, banana, cherry';
  // const result = fruits.split(', ', 2); // ['apple', 'kiwi']
  const result = fruits.split(', ');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2);
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result = students.find(function (student, index) {
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array contanining only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // 콜백 함수로 전달되는 인자는 최대한 이해하기 쉽게 쓰는 것이 중요하다.
  const result = students.map((student) => student.score);
  // const result = students.map((student) => student.score * 2);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 배열에 들어있는 요소 중 하나라도 이 조건에 만족되면 true를 return
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 배열에 들어있는 모든 요소들이 이 조건에 만족되면 true를 return
  // const result2 = students.every((student) => student.score >= 50);
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
  console.log(!true);
}

// Q9. compute students' average score
{
  // reduce : 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용
  // prev : 이전에 callback함수에서 return된 값이 전달되어져 온다.
  // curr : 배열의 아이템을 순차적으로 전달 받는다.
  const result = students.reduce((prev, curr) => {
    console.log('---------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);

  // reduceRight : 배열의 제일 뒤에서부터 시작하며 값을 누적한다.
  const result2 = students.reduceRight((prev, curr) => prev + curr.score, 0);
  console.log(result2 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50) // 50점 이하 제외
    .join(); // string으로 변경
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    // .sort((a, b) => a - b)
    .sort((a, b) => b - a) // 점수가 큰 것이 앞으로 나오게 하기
    .join();
  console.log(result);
}
