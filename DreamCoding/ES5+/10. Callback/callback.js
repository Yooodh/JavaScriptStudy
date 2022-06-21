'use strict';

// JavaScript is synchronous.
// Excute the code block in orger after hoisting.
// hoisting: var, function declaration
console.log('1'); // 동기

setTimeout(() => console.log('2'), 1000); // 비동기

console.log('3'); // 동기

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello')); // 동기

// Asychronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000); // 비동기

// Callback Hell example
class UserStorage {
  // 사용자 로그인, 로그인 성공 시 onSuccess 호출, 로그인 실패시 onError 호출
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        // id가 ellie이고 password가 dream 이거나
        (id === 'ellie' && password === 'dream') ||
        // id가 coder이고 password가 academy이면
        (id === 'coder' && password === 'academy')
      ) {
        // 전달받은 onSuccess라는 callback를 불러주는데 id를 전달해준다.
        onSuccess(id);
        // 위에 포함되지 않을 경우
      } else {
        // Error라는 Object를 만들어서 not found를 전달해준다.
        onError(new Error('not found'));
      }
    }, 2000);
  }

  // 사용자의 데이터를 받아서 사용자마다 가지고 있는 역할들을 서버에게 다시 요청해서 정보를 받아온다.
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      // user가 ellie이면
      if (user === 'ellie') {
        // onSuccess를 호출, 이름은 ellie, role은 admin인 Object를 전달한다.
        onSuccess({ name: 'ellie', role: 'admin' });
        // 아니라면
      } else {
        // onError callback을 호출하면서 Error의 Object를 만들어서 no access를 전달해준다.
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    UserStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
