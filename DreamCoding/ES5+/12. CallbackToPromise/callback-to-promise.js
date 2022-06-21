// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// userStorage에서
userStorage
// login이 성공하면 
.loginUser(id, password)
// user가 전달되어 그 user을 이용해서 getRoles 호출
.then(userStorage.getRoles)
// 모든게 성공적으로 된다면 최종적으로 받아오는 user을 이용해서 alert창 나타낸다.
.then(user =>  alert(`Hello ${user.name}, you have a ${user.role} role`))
// 수행중 문제가 생기면 catch를 이용해 console.log 출력
.catch(console.log);