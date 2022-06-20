// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 목록만 출력하기
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

// 세밀하게 통제하기 위해 콜백함수 사용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // key가 name이면 ellie라는 value로 설정하고 name이 아니면 원래의 value 설정
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parsre(json)
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);

  // key가 birthDate면 Date라는 새로운 Object를 만들고, key가 birthDate가 아니면 원래 있던 value 그대로 사용
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
