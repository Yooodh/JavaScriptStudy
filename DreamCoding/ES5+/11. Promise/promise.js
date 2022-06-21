'use strict';

// Promise is a JavaScript object for asynchronous aperation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // 성공
    // reject(new Error('no network')); // 실패
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise 
.then((value) => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log('finally');
});

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2) // 2
.then(num => num * 3) // 6
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num -1), 1000);
  })
})
.then(num => console.log(num)); // 5

// 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve('hen'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
  setTimeout(() =>
    resolve(`${hen} => egg`), 1000);
    // reject(new Error(`error! ${hen} => egg`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => fried egg`), 1000);
});

getHen()
// .then(hen => getEgg(hen))
.then(getEgg)

// .catch(error => {
//   return 'bread';
// })

// .then(egg => cook(egg))
.then(cook)
// .then(meal => console.log(meal));
.then(console.log)

.catch(console.log);