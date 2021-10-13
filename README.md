# 배다슬 201930216

## [ 10월 13일 ]<br>
`this.setState({movies,movies})`에서 처음있는 movies는 movies state이고 뒤에 있는 것은 axios.get()의 결과를 저장할 수 있는 변수임. 또한 키와 대입할 변수의 이름이 같으므로  `this.setState({movies})`로 축약 가능<br>
* 화면에 출력되는 값 바꾸는 방법<br>
    `{isLoading ? 'Loading..' : 'We are ready'}`로 되어있음.<br>
    화면에 Loading 만 보이는 이유는 `state={isLoading: true, movies: []};`로 되어 있었기때문에 isLoading: true 값인 Loading만 보였던것<br>
    영화 데이터를 가져올때 로딩 상태를 변경해야하기때문에 movies state에 `this.setState ({movies, isLoading: false});`로 작성<br>
* RealMovie 컴포넌트 만들기<br>
    필요한 것들을 RealMovie 컴포넌트에 입력<br>
    `id: PropTypes.number.isRequired` : 자료형이 number이고 반드시 있어야하는 id 라는 뜻<br>  
* 구조 분해 할당으로 this.state에 있는 movies를 얻은 다음, movie   컴포넌트에 movies.map()을 사용<br>
`render(){const{isLoading, movies}=this.state;`<br>
`return <div>{isLoading ? 'Loading..' : movies.map()}</div>`<br>
* 영화 데이터 출력하는 코드 작성<br>
    * [console]탭에 영화 데이터 출력<br>
        `return <div>{isLoading ? 'Loading..' : movies.map((movie)=>{console.log(movie); return;})}</div>`<br>
    * ReactMovie 컴포넌트 반환<br>
        `import RealMovie from './RealMovie';`<br>
         `return <div>{isLoading ? 'Loading..' : movies.map((movie)=>{console.log(movie); return <ReactMovie />;})}</div>`<br>
    * ReactMovie 컴포넌트에 props 전달<br>
         `return <div>{isLoading ? 'Loading..' : movies.map((movie)=>{console.log(movie); return <ReactMovie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />;})}</div>`<br>
         poster={movie.medium_cover_image}로 적는 이유 : image인데 string으로 작성한 이유 : url 주소가 들어가기때문에<br>
        ![영화명결과값](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/weareready%ED%99%94%EB%A9%B4.PNG)<br>

        💡<b>메세지 해결 방법</b><br>
         ![prop 문제](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/weareready%ED%99%94%EB%A9%B4.PNG)<br>
        <b>오류가 난 이유?</b><br>
        key값이 없어서 생김<br>
        <b>해결 방법</b><br>
        `return <div>{isLoading ? 'Loading..' : movies.map((movie)=>{console.log(movie); return <ReactMovie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />;})}</div>`<br>

        * CSS<br>
            * JSX의 가장 바깥쪽은 section 엘리먼트로 감싸기<br>
            * class명은 "loader__text"보다 "loader-text"로 작성하는게 좋음<br>
            `<img src={poster} alt={true} title={title} />`<br>
        
        * RealMovie 컴포넌트에 장르 추가<br>
            `genres:PropTypes.arrayOf(PropTypes.string).isRequired`추가<br>
            arrayOf(PropTypes.string) : 문자열을 원소로 하는 배열 의미<br>

            
        💡<b>메세지 해결 방법</b><br>
         ![class속성, genre에 대한 경고](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/weareready%ED%99%94%EB%A9%B4.PNG)<br>
        <b>오류가 난 이유?</b><br>
        1.JSX에 사용한 속성 중 class 속성이 className으로 사용되지 않았음<br>
        2. genre prps가 필수인데 RealMovie 컴포넌트에 undefined로 넘어왔다는 뜻<br>
        <b>해결 방법</b><br>
        1. class속성을 className으로 변경<br>
        2. Movie.js에 `genres={movie.genres}` 추가하면 없어짐<br>


## [ 10월 06일 ]<br>
* 영화 앱 만들기<br>
    * 데이터 로딩하는 화면 만들기<br>
        * isLoading state 만들기<br>
            `state = { isLoading: true,}` -> isLoading state는 컴포넌트가 마운트되면 true이여야해서 이렇게 코드 작성<br>
            `render(){const { isLoading } = this.state; return <div>{isLoading ? 'Loading..' : 'We are ready'}</div>;}`-> 구조 분해 할당과 삼항 연산자를 활용해서 로딩상태를 알려주는 코드<br>
            `const { isLoading } = this.state;`->구조 분해 할당으로 this.state에 있는 isLoading을 우선 얻으면 항상 this.state를 입력하지 않아도 됨<br>
            `isLoading ? 'Loading..' : 'We are ready'` -> isLoading을 삼항 연산자에 활용<br>
        ![loading화면](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/loading%ED%99%94%EB%A9%B4.PNG)<br>   
             * 로딩 현상 구현<br>
             `componentDidMount(){setTimeout(()=>{this.setState({isLoading:false});},6000)}`=>6초 후에 isLoading state를 false로 바꿔줌<br>
             
              ![weareready화면](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/weareready%ED%99%94%EB%A9%B4.PNG)<br>

    * 영화 API를 사용해 getMovies() 함수 기다린 다음, axios.get() 함수가 반환한 데이터 잡기<br>
        `getMovies = () => {const movies = axios.get("http://yts-proxy.now.sh/list_movies.json");}` => axios.get()이 반환한 결과를 movies에 저장<br>
        `componentDidMount(){this.getMovies();}` => componentDidMount()함수가 실행되면 this.getMovies()가 실행됨<br>
    * getMovies()에 async 붙이고, axios.get()에 await 붙이기<br>
         <span style="color:RED">❗axios는 네트워크를 사용하므로 느리게 동작, getMovies()함수는 시간이 필요하다는 것을 JS에게 말하기 위해 async와 await 사용</span><br>
         `getMovies = async () => {const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json");}` => JS에게 getMovies()함수는 시간이 필요하다는 것을 알려주기 위해 () 앞에 async를 붙이고 실제 시간이 필요한 대상인 axios.get() 앞에 await를 붙이면 됨.<br>
         > async 키워드 : JS에게 getMovies()함수가 비동기라고 말해주는 것<br>
         await 키워드 : JS에게 getMovies()함수 내부의 axios.get()의 실행 완료를 기다렸다가 끝나면 계속 진행해달라고 얘기하는 것<br>
         <span style="color:YELLOW">💡 API에서 데이터를 받아오는 axios.get()을 실행하려면 시간이 필요하고, 이 사실을 JS에게 알려야만 데이터를 잡을 수 있으므로 async와 await를 사용한 것</span><br>

    * 영화 데이터 화면에 그리기<br>
        console.log를 찍으면 data->data->movies 순서대로 객체에 접근하면 원하는 데이터 추출 가능<br>
        첫번째 방법: 점 연산자로 객체에 접근<br>
          `getMovies = async () => {const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json");console.log(movies.data.data.movies);}`
        두번째 방법: 구조 분해 할당 사용<br>
        `getMovies = async () => {const {data: {data: {movies },},} = await axios.get("http://yts-proxy.now.sh/list_movies.json");console.log(movies);}`     


## [ 09월 29일 ]<br>
* prop-types<br>
    prop-types란?<br>
    컴포넌트가 전달받은 props가 내가 원하는 값인지 확인해주는 역할<br>  
    ex) picture props를 보내야하는데 image props를 보내는 경우 오류 메세지 보여줌<br>
    💡<b>메세지 해결 방법</b><br>
    ![ratingprops자료형경고](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/ratingprops%EC%9E%90%EB%A3%8C%ED%98%95%EA%B2%BD%EA%B3%A0.PNG)<br>
    <b>오류가 난 이유?</b><br>
    rating에 준 값은 number인데 `rating: PropTypes.string.isRequired`라고 작성해서 string 자료형이 필요하다라는 뜻<br>
    <b>해결 방법</b><br>
    string이 아닌 number로 코드 수정<br>
     `rating: PropTypes.number.isRequired`<br>
     <span style="color:Yellow">❗❗<b>중요 포인트</b></span><br>
    <b>`rating: PropTypes.string.isRequired`에서 isRequired의 뜻은?</b><br>
    필수로 작성해야한다는 뜻<br>
    만약, `rating: PropTypes.number`로 작성하면 ' 값을 주는 것은 선택이고 만약 값을 준다면 자료형이 number이기만 하면 된다'라는 뜻<br>
* state<br>
    state란?<br>
    동적 데이터(변경될 가능성이 있는 데이터)를 다룰 때 사용하는 것<br>
    클래스형 컴포넌트에서 사용할 수 있는 개념<br>
    1. 클래스형 컴포넌트 기본 뼈대 작성<br>
       `import React from 'react';`<br>
       `class Foo extends React.Component{}`<br>
       `export default App;`<br>
        * 클래스형 컴포넌트가 되려면 Component 클래스를 반드시 상속받아야 한다!<br>
    2. render() 사용<br>
      `import React from 'react';`<br>
       `class Foo extends React.Component{`<br>
       `render(){`<br>
            `return <h1>I'm a class component</h1>`<br>
       `}}`<br>
       `export default App;`<br>
       -> 결과 창에 'I'm a class component'라고 출력됨<br>
         <span style="color:Yellow"><b>❗❓ 함수형 컴포넌트와 클래스형 컴포넌트 차이</b></span><br>
        함수형 컴포넌트는 return문이 JSX를 반환<br>
        클래스형 컴포넌트는 render()함수가 JSX 반환 = render() 함수는 직접 실행하지 않아도 실행되는 함수<br>
    3. state 정의후 사용<br>
        state를 사용하려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용하여 `state={}`로 정의<br>
        <span style="color:Yellow"><b>❗❓ 증감할 때 `this.state.count++` or `this.state.count=1`처럼 사용하면 안되는 이유?</b></span><br>
        state를 직접 변경하는 경우에는 render()함수를 다시 실행하지 않음<br>
        그러므로 `this.setState(current=>({count: current.count + 1}))`로 작성하면 add를 눌렀을때 current에 현재 state가 넘어가고 그 state의 count에 1을 더하게 됨<br>
* 클래스형 컴포넌트의 일생<br>
    * {constructor->(componentWillMount)->render:컴포넌트의 생성}->{componentDidMount:생성직후}<br>
    * {(componentWillReceveProps):props/state의 변화}->{shouldComponentUpdate->(componentWillUpdate)->render:Update 처리}->{componentDitUpdate:처리직후}<br>
    * {componentWillUnmount:컴포넌트제거)}<br>
    위에 괄호로 표시한 3가지는 없어질 예정이므로 사용하지 않는 것이 좋음<br>
        * constructor()함수<br>
            component를 생성할 때 state 값을 초기화하거나 메서드를 사용할때 사용<br>
            constructor()함수와 render() 함수 안에서 console.log를 찍었더니 constructor함수에 찍은 값이 먼저 나옴<br>
        * componentDidMount() 함수<br>
            componentDidMount함수와 render 함수 안에서 console.log를 찍었더니 render 값이 출력된 후 componentDidMount 값 출력<br>
            <span style="color:RED"><b>constructor()함수 실행->render()함수 실행->componentDidMount()함수 실행</b></span><br>
        * componentDidUpdate() 함수<br>
            <span style="color:RED"><b>setState()함수 실행:버튼 누르면 실행됨->render()함수 실행:화면이 업데이트 되니까->componentDidUpdate()함수 실행</b></span><br>
        * componentWillUnmount() 함수<br>
            초기화할 때 사용<br>
            렌더링이 끝난 후 componentWillUnmount()함수가 실행되는 것이라 화면에 표시가 안 됨<br>



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
    ![props출력](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/props.PNG)<br>

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
      ![KeyWarning](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/KeyWarning.PNG)<br>
      <b>오류가 난 이유?</b><br>
      key 값이 없어서 뜬 오류! 리액트의 원소들은 유일해야 하는데 리액트 원소가 리스트에 포함되면서 유일성이 없어짐.<br>
      <b>해결 방법</b><br>
      데이터에 id 추가<br>
       `const foodLike=[{id:1, name:'kimchi', image:'이미지 주소',},{id:2, name:'cake', image:'이미지 주소'},]`<br>
     Food 컴포넌트에 key props 추가<br>
          `function App(){return (<div>{foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} />))}</div>)}`<br>

    💡<b>메세지 해결 방법</b><br>
    ![altMessage](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/altM.PNG)<br>
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