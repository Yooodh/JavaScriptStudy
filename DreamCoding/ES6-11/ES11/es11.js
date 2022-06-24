/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */

{
  const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  // △ 
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    // printManager(person2);
  }

  // △ 
  {
    function printManager(person) {
      console.log(
        person.job
        ? person.job.manager
        ? person.job.manager.name
        : undefined
        : undefined
      );
    }
    printManager(person1);
    printManager(person2);
  }

  // △ 
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  // ○
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

/**
 * Nullish Coalescing Operator (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */

{
  // Logical OR operator
  // false: false, '', 0, null, undefined
  {
    const name = 'Ellie';

    // ||(or) 연산자는 앞에 있는 값이 false일 때만 뒤의 값이 실행
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
  }

  // △ 
  {
    // 문자열이 비어있는 경우에도 false로 간주되기 때문에 뒤의 것(Guest)이 할당되어진다.
    // 사용자가 아무런 이름을 쓰고싶지 않을 때도 Guest가 할당되어버린다.
    const name = '';
    const userName = name || 'Guest';
    console.log(userName);

    // 숫자 0이 할당되었지만 0은 false로 간주되기 때문에 뒤의 것(undefined)이 할당되어진다.
    const num = 0;
    const message = num || 'undefined';
    console.log(message);
  }

  // ○
  {
    const name = '';
    // 이름이 있다면 이름을 쓰고, 이름에 아무런 값이 없다면 'Guest'를 이용한다.
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    // num이라는 변수에 값이 있다면 num을 이용하고 num이 없을때만 undefined를 작성한다.
    const message = num ?? 'undefined';
    console.log(message);
  }
}