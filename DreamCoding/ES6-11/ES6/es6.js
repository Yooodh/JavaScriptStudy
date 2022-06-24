/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * 
 */

{
  const ellie1 = {
    name: 'Ellie',
    age: '18',
  };

  const name = 'Ellie';
  const age = '18';

  // △
  const ellie2 = {
    name: name,
    age: age,
  };

  // ○
  const ellie3 = {
    name,
    age,
  };

  console.log(ellie1, ellie2, ellie3);
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * 
 */

  //object
  const student = {
    name: 'Anna',
    level: 1,
  };

  // △
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // ○
  {
    const { name, level } = student;
    console.log(name, level);

    // 다른 이름으로 선언하기
    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);

    // array
    const animals = ['dog', 'cat'];

    // △
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }  

    // ○
    {
      const [first, second] = animals;
      console.log(first, second);
    }
  } 

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * 
 */

/**
 * Spread 연산자는 object 안에 들어있는 item들을 하나하나 복사해 오는 것이 아니라
 * object가 가리키고 있는 주소의 참조 값만 복사해 오는 것이기 때문에
 * Spread Operator(...)를 이용해서 복사해 온다고 해도
 * 원래의 object를 변경하게 되면 전부 다 영향이 갈 수 있기 때문에 유의해야한다.
 */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array]; // Spread Operator(...)는 array에 들어있는 item들 하나하나씩을 각각 낱개로 가져와서 복사한다.
  console.log(array, arrayCopy);

  // 새로운 item 추가
  const arrayCopy2 = [...array, {key: 'key3'}];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  // object copy
  const obj3 = {...obj1};
  console.log(obj3);

  // array concatenation
  const fruits1 = ['peach', 'strawberry'];
  const fruits2 = ['banana', 'kiwi'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  // 동일한 key를 가지고 있는 object일 경우 제일 마지막에 오는 object가 최종적으로 값을 덮어 씌운다.
  const dog1 = { dog1: 'dog1'}
  const dog2 = { dog2: 'dog2'}
  const dog = {...dog1, ...dog2};
  console.log(dog);
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */

{
  // △
  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }

  // ○
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */

{
  const isCat = true;

  // △ 
  {
    let component;
    if(isCat) {
      component = 'cat';
    } else {
      component = 'dog';
    }
    console.log(component);
  }  

  // ○
  {
    const component = isCat ? 'cat' : 'dog';
    console.log(component);
    console.log(isCat ? 'cat' : 'dog');
  }
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */

{
  const weather = 'sunny';
  const temparature = '16℃'

  // △ 
  console.log(
    'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
  );

  // ○
  console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}