// Objects
// one of the JavaScripts's data types.
// a collection of related data and/or functionality.
// Nearly all abjects in JavaScript are instances of Object
// object = { key : value };

// 1. Litterals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; // javascript에서는 class가 없어도 {}를 이용해서 object를 생성할 수 있다.
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 순간 순간 key에 해당하는 값을 받아오고 싶을 때 사용
console.log(ellie['name']); // 정확하게 어떤 key가 필요한지 모를 때(런타임에서 결정 될 때) 사용 

ellie['hasJob'] = true;

console.log(ellie.hasJob);

// 동적으로 key에 관련 된 value를 받아와야 할 때 유용하게 사용할 수 있다.
function printValue(obj, key) {
  // console.log(obj.key); // undefined
  console.log(obj[key]);
}

printValue(ellie, 'name'); 
printValue(ellie, 'age'); 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

// const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', 30);

console.log(person4);

// function makePerson(name, age) {
//   return {
//     // name: name,
//     name,
//     // age: age,
//     age,
//   };
// }

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
// 모든 key들을 받아와서 일들을 처리하고 싶을 때 사용
// console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for(value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.addign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// const user4 = {};
// Object.assign({}, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); 
console.log(mixed.color); // blue
console.log(mixed.size); // big