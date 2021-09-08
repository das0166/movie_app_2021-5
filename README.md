# 배다슬 201930216

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