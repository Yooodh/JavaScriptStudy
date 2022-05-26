/********************************** #1 노드에 접근하기 **********************************/

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


/********************************** #2 부모, 자식 형제 노드 **********************************/

/* 
    // querySelectorAll 과 getElementsByTagName의 차이점
    document.querySelectorAll('p'); // NodeList
    document.getElementsByTagName('p'); // HTMLCollection

    const pList1 = document.querySelectorAll('p');
    const pList2 = document.getElementsByTagName('p');

    // querySelectorAll로 가져온 리스트
    pList1; // NodeList (한 번 저장된 값을 계속 사용) // 예외적으로 childNodes는 실시간 반영이 동작한다.

    // getElementsByTagName로 가져온 리스트
    pList2; // HTMLCollection(노드에 변경사항 실시간으로 반영)
*/

/* 
    // 부모 노드 찾기 

    // getElementById로 Red 선택
    const red = document.getElementById('red');

    // 부모 노드에 접근
    red.parentNode;
    red.parentElement;

    // html
    document.documentElement;

    // parentNode는 부모 노드 중 모든 노드를 반환한다.
    document.documentElement.parentNode; // #document

    // parentElement는 부모 노드 중 요소 노드만 반환한다.
    // 요소 노드 : html 태그로 이루어진 요소
    document.documentElement.parentElement; // null
*/

/* 
    // 자식 노드 찾기

    // id가 color인 ul에서 자식 값 찾기
    const ul = document.getElementById('color');

    // 자식 노드 전부 찾기
    ul.childNodes; // NodeList

    // 자식 노드 중 요소 노드 찾기
    ul.children; // HTMLCollection

    // 첫 번째 노드 가져오기
    ul.firstChild;

    // 마지막 노드 가져오기
    ul.lastChild;

    // 첫 번째 요소 노드 가져오기
    ul.firstElementChild;

    // 마지막 요소 노드 가져오기
    ul.lastElementChild;
*/

/* 
    // 형제 노드 찾기

    // blue를 기준으로 찾기
    const blue = document.getElementById('blue');

    // 형제 노드는 이전 형제와 다음 형제로 나뉜다.

    // 이전 형제
    blue.previousSibling;

    // 다음 형제 
    blue.nextSibling;

    // 이전 형제 요소 
    blue.previousElementSibling;

    // 다음 형제 요소 
    blue.nextElementSibling;
*/


/********************************** #3 노드 생성, 추가, 복제, 삭제 **********************************/

/* 
    // Dom 노드 수정

    // blue 선택
    const blue = document.getElementById('blue');

    blue.firstChild; // text // "Blue"
    blue.firstElementChild; // null

    // 변수 만들기
    const blueTextNode = blue.firstChild;

    // blueTextNode 정보 보기
    blueTextNode.nodeName; // '#text'
    blueTextNode.nodeType; // 3
    blueTextNode.nodeValue; // 'Blue'

    // 특정 요소의 텍스트를 가져와서 써야할 때 nodeValue를 활용할 수 있다.

    // 수정하기
    blueTextNode.nodeValue = '';

    // nodeValue는 모든 노드가 가지고 있는 프로퍼티지만 text노드가 아니면 null을 반환한다.

    // ul 선택
    const ul = document.getElementById('color');

    ul.nodeType; // 1 // 요소노드
    ul.nodeName; // 'UL' // 요소노드의 태그명을 대문자로 반환
    ul.nodeValue; // null // 텍스트 노드에서만 nodeValue를 이용해서 수정이 가능하다.

    // textContent를 이용하면 텍스트 노드가 아니더라도 값을 수정할 수 있다.
    ul.textContent; // '\n        Red\n        \n        파랑\n        Green\n    ' // 마크업이 모두 날아간다.

    // 수정하기
    ul.textContent = '<li>RED</li>' // '<li>RED</li>' // 마크업까지 텍스트로 출력된다.

    // 마크업을 제대로 표현하기
    ul.innerHTML = '<li>RED</li>' // '<li>RED</li>' 

    // innerHTML 간단하게 마크업을 적용할 수 있는 편리한 기능이지만
    // 단점으로는 요소를 추가, 제거, 수정 할 때마다 다시 모든 HTML을 String으로 작성해야 한다.
*/

/* 
    // innerHTML 사용하여 자식 텍스트 노드 만들기

    // li 요소 만들기
    const newLi = document.createElement('li');
    newLi; // <li></li>

    // 텍스트 노드 만들어주기
    newLi.innerHTML = 'green';
    newLi; // <li>green</li>

    // ul 내부로 넣어주기
    const ul = document.getElementById('color');
    ul.appendChild(newLi); 
*/

/* 
    // innerHTML 사용하지 않고 자식 텍스트 노드 만들기

    // li 요소 만들기
    const newLi2 = document.createElement('li');

    // 텍스트 노드 생성
    const newText = document.createTextNode('pink');
    newText; // "pink"

    // li에 텍스트 노드 넣기
    newLi2.appendChild(newText);

    // ul에 li 넣기
    ul.appendChild(newLi2);
*/

/* 
    // appendChild는 항상 지정한 부모 노드에 가장 마지막 자식으로 추가된다. 
    // 원하는 위치가 마지막이 아니라면 insertBefore를 이용한다.
    // 특정 노드를 전달하면 그 노드 전에 삽입이 된다.

    // li 만들기
    const newLi3 = document.createElement('li');

    // 텍스트 노드 만들기
    const textNode3 = document.createTextNode('black');

    // li에 추가하기
    newLi3.appendChild(textNode3);

    // red 지정하기
    const red = document.getElementById('red');

    // insertBefore 두 번째 인자로 red를 전달한다. (red 앞에 li를 넣어라)
    ul.insertBefore(newLi3, red);
*/

/* 
    // appendChild, insertBefore
    // 새롭게 노드를 생성하지 않고 기존의 노드를 이 메서드들에게 전달하면 노드가 이동된다.

    // 기존에 존재하던 red를 appendChild에 전달하기

    // red를 제일 뒤로 이동하기
    ul.appendChild(red); 

    // red를 가장 위로 이동하기
    ul.insertBefore(red, newLi3);
*/

/* 
    // 노드 복제하기
    // cloneNode
    // cloneNode는 인수로 Boolean 값을 받는다.

    // black를 복제하여 newBlack 만들기
    const newBlack = newLi3.cloneNode();

    // li 추가하기
    ul.appendChild(newBlack); // li 태그만 복제가 된다.

    // 깊은 복제 실행 (자식 노드 까지 모두 복제 된다.)
    // 여기서 자식노드는 text 노드
    // 아무것도 안적거나 false로 전달하면 노드 자식만 복제된다.
    const newBlack2 = newLi3.cloneNode(true);

    // appendChild로 newBlack2 추가하기
    ul.appendChild(newBlack2);
*/

/* 
    // 노드 삭제하기
    // removeChild

    // red 삭제하기
    ul.removeChild(red);

    // newBlack2 삭제하기
    ul.removeChild(newBlack2);

    // 첫 번째 자식 요소 노드 삭제
    ul.removeChild(ul.firstElementChild);

    // 마지막 자식 요소 노드 삭제
    ul.removeChild(ul.lastElementChild);
*/



/********************************** NODE_VALUE **********************************/

/* 
    Node.ELEMENT_NODE (1) // 요소 노드
    An Element node like <p> or <div>.
    
    Node.ATTRIBUTE_NODE (2)
    An Attribute of an Element.

    Node.TEXT_NODE (3) // 텍스트 노드
    The actual Text inside an Element or Attr.

    Node.CDATA_SECTION_NODE (4)
    A CDATASection, such as <!CDATA[[ ... ]]>.

    Node.PROCESSING_INSTRUCTION_NODE (7)
    A ProcessingInstruction of an XML document, such as <?xml-stylesheet ... ?>.

    Node.COMMENT_NODE (8)
    A Commit node, such as <!-- ... -->.

    Node.DOCUMENT_NODE (9)
    A Document node.

    Node.DOCUMENT_TYPE_NODE (10)
    A DocumentType node, such as <!DOCTYPE html>.

    Node.DOCUMENT_FRAGMENT_NODE (11)
    A DocumentFragment node.
*/