// Dom : Document Object Model (문서 객체 모델)
// html 문서에 각 요소들을 트리 형식으로 표현해준다.
// 개발자는 JS를 이용해서 이를 생성하거나 수정하거나 삭제할 수 있다. 

/*
    // 모든 html 태그는 객체이다. 
    // 이 객체는 자바스크립트로 접근하고 제어할 수 있다.

    document.document Element; : html에 접근
    document.body; : body에 접근
    document.head; : head에 접근
 */

/* 
    // style 변경
    document.body.style; 

    document.body.style.opacity = ''; 
    document.body.style.padding = '';
*/

/* 
    // id로 접근
    // id는 한 페이지에 한번만 사용할 수 있다. 그래서 getElement 단수형 사용
    const el = document.getElementById('first');
    el;

    // p태그 접근
    // p태그는 한 페이지에 여러개 사용할 수 있다. 그래서 getElements 복수형 사용
    const pList = document.getElementsByTagName('p');
    pList;

    // pList는 for of 로 순회할 수 있다.

    // 폰트 사이즈 변경
    for(p of pList){
        p.style.fontSize = '';
    }

    // 투명도 랜덤으로 주기
    for(p of pList) {
        p.style.opacity = String(Math.random());
    }
*/

/* 
    // getElementsBy를 이용하면 ClassName이나 Name으로도 노드에 접근할 수 있다.
    document.getElementsByClassName()
    document.getElementsByName()

    // link 클래스를 가진 요소 찾기
    document.getElementsByClassName('link');
*/

/* 
    // querySelectorAll
    // 상당히 자주 사용된다.

    // 동일한 결과가 나온다.
    document.querySelectorAll('.link');
    document.getElementsByClassName('link');

    // id를 선택할 때는 어차피 하나만 나오기 때문에 All을 빼고 사용한다.
    document.querySelector('#first');

    // querySelectorAll : 모든 노드를 가지고 온다.
    // querySelector : 딱 하나 제일 처음의 노드만 가지고 온다.

    // 두 번째 h3 태그 찾기
    document.querySelector('h3:nth-of-type(2)');

    // 두번째 h3 태그 색상 변경
    document.querySelector('h3:nth-of-type(2)').style.color = '';

    // 짝수번째 p 찾기
    const pList = document.querySelectorAll('p:nth-of-type(2n)')

    // 색상 변경
    for(p of pList){
        p.style.backgroundColor = '';
        p.style.color = '';
    }
*/

/* 
    // 위에서 사용한 메서드로 가져온 결과들은 Array처럼 보이지만 NodeList이다.
    pList; // NodeList

    // NodeList는 이터러블 컬렉션이다.
    // for of 사용 가능.
    for(p of pList){
        p.style.backgroundColor = '';
        p.style.color = '';
    }

    // index를 통해 각 노드에 접근할 수 있다.
    pList[1];

    // length를 이용해서 갯수를 알 수 있다.
    pList.length;
    
    // Array가 아니기 때문에 push(), pop(), filter(), join()은 사용할 수 없다.
    pList.push(); // x
    pList.pop(); // x
    pList.filter(); // x
    pList.join(); // x
*/