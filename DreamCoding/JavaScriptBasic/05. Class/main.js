class Counter {
  constructor(runEveryFiveTimes) {
    // 0부터 시작하는 counter 변수
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }
  // class에서 함수를 선언할때는 function을 작성하지 않아도 된다.
  increase(runIf5Times) {
    // increase를 호출할 때마다 counter의 숫자를 하나씩 증가
    this.counter++;
    console.log(this.counter);
    // increase가 5번 호출될 때마다 yo 찍어주기
    if(this.counter % 5 === 0) {
      // console.log('yo!');
      // runIf5Times(this.counter);

      // this.callback true일 때(undefined가 아닐 때) callback이 있다면
      // if(this.callback) {
      //   this.callback(this.counter);
      // }
      this.callback && this.callback(this.counter);
      // this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`Wow! ${num}`);
}

function alertNum(num) {
  alert(`Wow! ${num}`);
}

// new 키워드를 이용해서 class만들기
const coolCounter = new Counter();

const printCounter = new Counter(printSomething);
const alertCoutner = new Counter(alertNum);

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(alertNum);
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();