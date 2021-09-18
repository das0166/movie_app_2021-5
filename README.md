# 배다슬 201930216

## [ 09월 15일 ]<br>
* JSX<br>
    JSX란?<br>
    HTML과 JS를 조합한 것<br>
    1. Potato컴포넌트 만들기<br>
        'Potato.js' 만들기<br>
        <span style="color:Yellow"><b>컴포넌트를 작성할 때 중요한 규칙 => 이름은 대문자로 시작</b></span><br>
    2. Potato() 함수 작성<br>
        `function Potato() {    }`<br>
    3. Potato 컴포넌트가 JSX 반환하게 만들기<br>
        `function Potato() {return <h3>I love Potato</h3>}` -> HTML이 아닌 JSX<br>
    4. 다른 파일애서 Potato 컴포넌트를 사용할 수 있게 만들기<br> 
        마지막에 `export default Potato` 추가 <br>
    5. App 컴포넌트에 Potato 컴포넌트 임포트하기<br>
        `import Potato from './Potato'` 추가하고 App 컴포넌트가 반환활 값으로 `function App() { return(<div> <Potato /> </div>)}` 작성<br>
    6. 개발자 도구에서 Potato 컴포넌트 살피기<br>
        리액트가 `<Potato />`를 해석해서 `<h3>I love potato</h3>` 로 만들어줌 -> 이것이 컴포넌트와 JSX가 리액트에서 동작하는 방식.<br>
    7. Potato.js 없이 App 컴포넌트 안에 Potato 컴포넌트 만들기<br>
        `function Potato(){return <h1>I like Potato</h1>}` 추가하고 `function App() { return(<div> <Potato /> </div>)}`하면 정상적으로 작동<br>
    > <span style="color:red"><b>컴포넌트는 JSX로 만들고, JSX는 JS와 HTML을 조합한 문법을 사용한다.</b></span>

* props<br>
    props란?<br>
    컴포넌트에서 컴포넌트로 전달하는 데이터<br>
    * 컴포넌트가 다른 값을 출력하고 싶을떄?<br>
        1. `function Food(props) { {fav}=props return <h1>I like {fav}</h1>}`<br>
        2. `function Food({fav}) {return <h1>I like {fav}</h1>}`<br>
        둘 중 하나의 방법으로 작성한 뒤 <br>
        `function App(){ return(<div><Food fav="kimchi" /><Food fav="ramen" />)}`으로 작성하면<br>
        `<h1>I like kimchi</h1> <h1>I like ramen</h1>`으로 출력됨<br>
    ![props출력](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/let%ED%82%A4%EC%9B%8C%EB%93%9C%EC%99%80const%ED%82%A4%EC%9B%8C%EB%93%9C.PNG)<br>

* 비슷한 컴포넌트를 많이 만들 때<br>
    이러한 경우에는 위와 같은 코드를 쓰게 되면 비효율적.<br>
    또한 서버에서 음식 데이터를 받아 출력할 경우 위와 같은 방법으로 출력하면 안됨<br>
        1. 데이터 만들기<br>
            서버에서 넘어온 데이터를 저장할 수 있도록 foodLike라는 변수를 만든 다음 빈 배열 할당<br>
            `const foodLike=[]`<br>
        2. 넣고 싶은 값 입력<br>
        `const foodLike=[{name:'kimchi', image:'이미지 주소',},{name:'cake', image:'이미지 주소'},]`<br>
        3. map() 함수 이용하기<br>
            Food컴포넌트에서 받는 인자를 { name, picture }으로 수정<br>
            `function Food({name, picture}) {return (<div><h2>I like {name}</h2><img src={picture} /></div>)}`<br>
            화살표 함수를 이용하여 전달<br>
            `function App(){return (<div>{foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))}</div>)}`<br>
            dish에 foodLike 원소가 하나씩 넘어오고 {name:'', image:''}와 같은 형태이므로 Food 컴포넌트에 dish.name, dish.iamge과 같이 음식 이름과 사진을 name props, picture props에 전달<br>
        <span style="color:Yellow">map()함수의 첫 번째 인자로 넘어가는 함수의 첫 번째 인자인 dish에는 foodLike의 원소가 하나씩 넘어간다는 점을 꼭 기억!</span><br>
    💡 <b>오류 해결 방법</b><br>
      ![KeyWarning](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/let%ED%82%A4%EC%9B%8C%EB%93%9C%EC%99%80const%ED%82%A4%EC%9B%8C%EB%93%9C.PNG)<br>
      <b>오류가 난 이유?</b><br>
      key 값이 없어서 뜬 오류! 리액트의 원소들은 유일해야 하는데 리액트 원소가 리스트에 포함되면서 유일성이 없어짐.<br>
      <b>해결 방법</b><br>
      데이터에 id 추가<br>
       `const foodLike=[{id:1, name:'kimchi', image:'이미지 주소',},{id:2, name:'cake', image:'이미지 주소'},]`<br>
     Food 컴포넌트에 key props 추가<br>
          `function App(){return (<div>{foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))}</div>)}`<br>

    💡<b>메세지 해결 방법</b><br>
    ![altMessage](https://github.com/das0166/js2021-5/blob/master/js%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/let%ED%82%A4%EC%9B%8C%EB%93%9C%EC%99%80const%ED%82%A4%EC%9B%8C%EB%93%9C.PNG)<br>
    <b>오류가 난 이유?</b><br>
    alt 속성은 시각 장애인을 위한 것. create-react-app은 세세한 경고도 해줌<br>
    <b>해결 방법</b><br>
    Food 컴포넌트에 alt 속성 추가<br>
     `function Food({name, picture}) {return (<div><h2>I like {name}</h2><img src={picture} alt={name} /></div>)}`<br>



## [ 09월 08일 ]<br>
<span style="color:red"><b>create-react-app은 리액트 개발을 바로 시작할 수 있도록 프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해주는 도구</b></span><br>
`npm start` -> 리액트 앱 실행 명령어<br>
`ctrl+c` -> 리액트 앱 종료 명령어<br>
favicon.ico -> 브라우저 제목과 함께 표시되는 아이콘<br>
> 리액트 동작 원리<br>
>* index.js에 있는 `document.getElementById('root')` 'root'라는 id와 index.html에 있는 `<div id="root"></div>`의 id가 같아야 웹페이지에 출력됨<br>
>* 출력하고 싶은 값은 index.js에 작성되어 있는 `import App from './App'`으로 인해 App.js에 return할 값을 적는 `function App() {return <div>Hello</div>}`인 return 뒤에 작성<br>

>리액트 기초 개념: 컴포넌트<br>
>* 위 리액트 동작 원리에 적혀 있는 내용이 컴포넌트의 내용<br>
>* App.js에 적혀있는 `function App()`이 App 컴포넌트를 정의하는 것이고 `return <div>Hello</div>`이 App컴포넌트가 HTML('Hello'라는 값)을 반환하는 것<br>
>* index.js에 있는 `import App from './App'`, `ReactDOM.render(<App />, document.getElementById('root'))`이 App 컴포넌트를 임포트하여 사용한 것<br>
>* `<App/>`을 `ReactDOM.render()`함수의 첫 번째 인자로 전달하면 App 컴포넌트가 그려질 위치는 `ReactDOM.render()`의 두번째 함수인 `document.getElementById('root')`로 전달하면 됨<br>
<b>=> App 컴포넌트는 아이디가 root인 엘리먼트에 그려질 것이다.</b>

><span style="color:yellow"><b>Tip's</b></span><Br>
`import React from 'react';` -> 삭제해도 됨<br>
끝에 `;` 안 붙여도 됨<br>
리액트 실행하고 있을때 터미널 종료하면 안됨<br>

## [ 09월 01일 ]<br>
><span style="color:red"><b>클론 코딩이란?</b><br>
>* 실제로 존재하는 사이트나 앱의 코드를 보며 그대로 따라 만들면서, 해당 언어나 기술을 습득하는 학습 방법
>* 완성된 프로젝트를 클론해서 하나씩 완성해 가는 실습 위주의 학습

>클론 코딩의 부작용<br>
>* 실력이 늘지 않는 부작용
>* 완성된 코드를 맹목적으로 복사해서 사용하면 안됨
>* 이론 양이 많아 추후 학습 의욕 저하

>클론 코딩의 학습 방법<br>
>* 모르는 내용이나 코드가 있으면 질문&검색
>* 코드를 그대로 따라하지 말고 학습자의 개성 살리기
>* 주석을 자세하게 달기
>* 학습한 내용 문서화 하기->README.md
>* 지속적으로 커밋 후 포트폴리오 제작
>* 학습한 내용을 기반으로 한 다른 프로젝트를 스스로 기획&개발

>리액트인 이유<br>
>* 리액트를 사용한 웹페이지가 많음
>* npmjs에서 리액트 다운 받은 횟수가 엄청나게 많음
>* 수많은 개발자들이 리액트를 많이 사용하고 선호함

><span style="color:yellow"><b>리액트의 장점</b><br>
>* JS로 작성되어 있음