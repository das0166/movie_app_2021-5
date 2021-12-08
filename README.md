# 배다슬 201930216
## [ 12월 08일 ]<br>
* 리스트와 Key<br>
    - 배열의 값을 반환할 때는 map()함수 사용. 변환하여 반환하는 것도 가능<br>
    ```jsx
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);
    ```
    -> 콘솔에 [2,4,6,8,10]을 출력<br>
    ❗❗react에서 배열을 엘리먼트 리스트로 만드는 방식도 이와 유사<br>
    * 여러개의 컴포넌트 렌더링 하기<br>
        * 엘리먼트 모음을 만들고 중괄호 {}를 이용하여 JSX에 포함 시킬 수 있음<br>
    * 기본 리스트 컴포넌트<br>
        * 여러개의 컴포넌트를 렌더링하는 예제를 numbers 배열을 props로 받아서 순서 없는 엘리먼트 리스트를 출력하는 컴포넌트로 리팩토링 하려면 key를 넣어야한다는 오류가 남. 이때 key props를 넣으면 됨.<br>
    * key<br>
        * Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도움<br>
        * key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정<br>
        * 일반적으로 항목이 고정적일 경우 배열의 index값 사용<br>
        * 항목의 순서가 바뀔 수 있는 경우 key에 index를 사용하는 것은 권장X, 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 발생할 수 있음.<br>
    * Key로 컴포넌트 추출하기<br>
        * ListItem 안에 있는 <li> 엘리먼트가 아니라 분해하는 곳의 <ListItem /> 엘리먼트가 key를 가져야 함.<br>
        * map() 함수 내부에 있는 엘리먼트에 key를 넣어 주는 게 좋음<br>
    * Key는 배열내 요소 사이에서만 고유한 값이면 된다.<br>
        * Key는 배열내의 요소 사이에서만 고유하면 되고 전체 범위에서 고유할 필요는 없음<br>
        *  두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있음<br>
        * 컴포넌트에 KEY로 사용할 prop을 전달할 수는 있지만 key 자체를 전달할 수 없음 (받은 쪽에서 key라는 변수를 prop으로 사용할 수 없다는 뜻)<br>
        ```jsx
        const content = posts.map((post) =>
        <Post
            key={post.id}
            id={post.id}
            title={post.title} />
        );
        ```
        * 위 예시에서 Post 컴포넌트는 props.id를 읽을 수 있지만 props.key는 읽을 수 없음.<br>
    * JSX에 map() 포함시키기<br>
        * JSX를 사용하면 중괄호 안에 모든 표현식을 포함시킬 수 있으므로 map() 함수의 결과를 인라인으로 처리할 수 있음<br>
        * map() 함수가 너무 중첩된다면 가독성이 좋지 않기 때문에 컴포넌트로 추출하는 것이 좋음<br>
* 폼<br>
    - HTML 폼 엘리먼트는 폼 엘리먼트 자체가 내부 상태를 가지기 때문에, React의 다른 DOM 엘리먼트와 다르게 동작함<br>
    - 순수한 HTML에서 이 폼은 name을 입력받음<br>
    - React에서 동일한 동작을 원한다면 그대로 사용하면 됨<br>
    - 일반적으로 JS함수로 폼의 제출을 처리하고 사용자가 폼에 입력한 데이터에 접근하도록 하는 것이 편리 => 이를 위한 표준 방식은 "제어 컴포넌트(controlled components)"라고 불리는 기술을 이용하는 것<br>
    * 제어 컴포넌트<br>
        * 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트함<br>
        * React에서는 변경할 수 있는 state가 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트됨<br>
        * 폼에서 사용될 값을 react의 state로 일원화하면 편하게 관리 가능 <br>
        * React에 의해 값이 제어되는 입력 폼 엘리먼트를 "제어 컴포넌트 (controlled component)"라고 함<br>
        * 입력값의 업데이트는 handleChange의 setState를 통해 이루어짐<br>
    * textarea 태그<br>
        * HTML에서 `<textarea>` 엘리먼트는 텍스트를 자식으로 정의<br>
        * React에서 `<textarea>`는 value속성을 대신 사용<br>
        * react의 textarea는 싱글 태그를 사용하여 작성<br>
        ❗❗ 꼭 초기 값이 있어야되는 것은 아님<br>
    * select 태그<br>
        * HTML에서 `<select>`는 드롭 다운 목록을 만듬<br>
        * HTML에서 option의 속성으로 selected를 사용하고 있으나 react에서는 select 속성으로 지정함<br>
        * select의 value를 통해 option의 value를 지정해서 selected를 대신함<br>
        * state의 관리는 textarea와 동일<br>
        ❗❗ select 태그에 multiple 옵션을 허용한다면 value 속성에 배열을 전달할 수 있음<br>
        ```jsx
        <select multiple={true} value={['B', 'C']}>
        ```
    * file input 태그<br>
        * HTML에서 `<input type="file">`는 사용자가 하나 이상의 파일을 로컬에서 서버로 업로드하거나 File API를 통해 JavaScript로 조작할 수 있음<br>
        * 값이 읽기 전용이기 때문에 React에서는 비제어 컴포넌트임<br>
    * 다중 입력 제어하기<br>
        * 여러 input 엘리먼트를 제어해야할 때, 각 엘리먼트에 name 속성을 추가하고 event.target.name 값을 통해 핸들러가 어떤 작업을 할지 선택할 수 있게 해줌<br>
        * 주어진 input 태그의 name에 일치하는 state를 업데이트하기 위해 ES6의 computed property name 구문을 사용함<br>
        * setState()는 자동적으로 현재 state에 일부 state를 병합하기때문에 바뀐 부분에 대해서만 호출 됨<br>
    * 제어되는 Input Null 값<br>
        * 제어 컴포넌트에 value prop을 지정하면 의도하지 않는 한 사용자가 변경할 수 없음<br>
        * value를 설정했는데 여전히 수정할 수 있다면 실수로 value를 undefined나 null로 설정했을 수 있음<br>
    * 제어 컴포넌트의 대안<br>
        * 데이터를 변경할 수 있는 모든 방법에 대해 이벤트 핸들러를 작성하고 React 컴포넌트를 통해 모든 입력 상태를 연결해야 하기 때문에 때로는 제어 컴포넌트를 사용하는 게 불편할 수 있음<br>
        * 입력 폼을 구현하기 위한 대체 기술인 비제어 컴포넌트를 확인하면 됨.<br>
    * 완전한 해결책<br>
        * 유효성 검사, 방문한 필드 추적 및 폼 제출 처리와 같은 완벽한 해결을 원한다면 Formik이 대중적인 선택 중 하나임<br>
* State 끌어올리기(state를 parents component로 올리기)<br>
    - 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 할 필요가 있음<br>
    - 가장 가까운 공통 parents component로 state를 끌어올리는 것이 좋음<br>
* 합성 (Composition) vs 상속 (Inheritance)<br>
    - React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋음<br>
    * 컴포넌트에서 다른 컴포넌트를 담기<br>
        * 어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있음<br>
        * 범용적인 ‘박스’ 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 자주 볼 수 있음<br>
        * 특수한 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋음<br>
        * 다른 컴포넌트에서 JSX를 중첩하여 임의의 자식을 전달할 수 있음<br>
        * `<FancyBorder>` JSX 태그 안에 있는 것들이 FancyBorder 컴포넌트의 children prop으로 전달됨<br>
        * FancyBorder는 {props.children}을 `<div>` 안에 렌더링하므로 전달된 엘리먼트들이 최종 출력됨<br> 
        * 종종 컴포넌트에 여러 개의 "holes"가 필요할 수도 있음. children 대신 자신만의 고유한 방식을 적용할 수 있음<br>
        * `<Contacts />`와 `<Chat />`같은 React 엘리먼트는 단지 객체이기 때문에 다른 데이터처럼 prop으로 전달할 수 있음<br>
        * 이러한 접근은 다른 라이브러리의 "슬롯 (slots)"과 비슷해보이지만 React에서 prop으로 전달할 수 있는 것에는 제한이 없음<br>
    * 특수화<br>
        - 어떤 컴포넌트의 "특수한 경우"인 컴포넌트를 고려해야 하는 경우가 있음<br>
        - WelcomeDialog는 Dialog의 특수한 경우라고 할 수 있음<br>
        - React에서는 이 역시 합성을 통해 해결할 수 있음<br>
        - 더 "구체적인" 컴포넌트가 "일반적인" 컴포넌트를 렌더링하고 props를 통해 내용을 구성함<br>
    * 그렇다면 상속은?<br>
        * props와 합성은 명시적이고 안전한 방법으로 컴포넌트의 모양과 동작을 커스터마이징하는데 필요한 모든 유연성을 제공함<br>
        * 컴포넌트가 원시 타입의 값, React 엘리먼트 혹은 함수 등 어떠한 props도 받을 수 있음<br>
        * UI가 아닌 기능을 여러 컴포넌트에서 재사용하기를 원한다면, 별도의 JavaScript 모듈로 분리하는 것이 좋음<br>
        * 컴포넌트에서 상속받을 필요 없이 해당 함수, 객체, 클래스 등을 import 하여 사용할 수 있음<br>
* React로 사고하기<br>
    - React는 JavaScript로 규모가 크고 빠른 웹 애플리케이션을 만드는 가장 좋은 방법임<br>
    - React의 가장 멋진 점 중 하나는 앱을 설계하는 방식<br>
    * 1단계: UI를 컴포넌트 계층 구조로 나누기<br>
        * 모든 컴포넌트(와 하위 컴포넌트)의 주변에 박스를 그리고 그 각각에 이름을 붙임<br>
        - 어떤 것이 컴포넌트가 되어야 할지 어떻게 알 수 있을까요?<br>
        * 새로운 함수나 객체를 만들 때처럼 만들면 됨<br>
        * 한 가지 테크닉은 단일 책임 원칙<br>
        * 이는 하나의 컴포넌트는 한 가지 일을 하는게 이상적이라는 원칙. 하나의 컴포넌트가 커지게 된다면 이는 보다 작은 하위 컴포넌트로 분리되어야 함<br>
        * 주로 JSON 데이터를 유저에게 보여주기 때문에, 데이터 모델이 적절하게 만들어졌다면, UI(컴포넌트 구조)가 잘 연결될 것임<br>
        * 이는 UI와 데이터 모델이 같은 인포메이션 아키텍처(information architecture)를 가지는 경향이 있기 때문<br>
        * 각 컴포넌트가 데이터 모델의 한 조각을 나타내도록 분리해주기<br>
    * 2단계: React로 정적인 버전 만들기<br>
        * 데이터 모델을 렌더링하는 앱의 정적 버전을 만들기 위해 다른 컴포넌트를 재사용하는 컴포넌트를 만들고 props 를 이용해 데이터를 전달해줌<br>
        * props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법<br>
        * 정적 버전을 만들기 위해 state를 사용X<br>
        * 계층 구조의 상층부에 있는 컴포넌트부터 만들거나 하층부에 있는 컴포넌트부터 만들 수도 있음<br>
    * 3단계: UI state에 대한 최소한의 (하지만 완전한) 표현 찾아내기<br>
        * 각 데이터에 대해 아래의 세 가지 질문을 통해 결정할 수 있음<br>
            1. 부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.<br>
            2. 시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.<br>
            3. 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 state가 아닙니다.<br>
    * 4단계: State가 어디에 있어야 할지 찾기<br>
    * 5단계: 역방향 데이터 흐름 추가하기<br>
* HOOK<br>
    * Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용 가능<br>
    * Hook의 특징<br>
        * 선택적 사용 : 기존의 코드를 다시 작성할 필요 없이 일부의 컴포넌트들 안에서 Hook을 사용할 수 있음<br>
        * 100% 이전 버전과의 호환성 : Hook은 호환성을 깨뜨리는 변화가 없음<br>
        * 현재 사용 가능 : Hook은 배포 v16.8.0에서 사용할 수 있음<br>
    * React에서 Class를 제거할 계획은 없음<br>
    * Hook은 알고 있는 React 컨셉을 대체하지 않음<br>
    * 동기<br>
        * 컴포넌트 사이에서 상태 로직을 재사용하기 어려움<br>
        * 복잡한 컴포넌트들은 이해하기 어려움<br>
            * 관리하기가 힘들어지는 상태 관련 로직들과 사이드 이펙트가 있는 컴포넌트들을 유지보수해야함<br>
            * 버그가 쉽게 발생하고 무결성을 너무나 쉽게 해침<br>
            * Hook을 통해 서로 비슷한 것을 하는 작은 함수의 묶음으로 컴포넌트를 나누는 방법을 사용할 수 있음<br>
            * 로직의 추적을 쉽게 할 수 있도록 리듀서를 활용해 컴포넌트의 지역 상태 값을 관리하도록 할 수 있음<br>
        * Class은 사람과 기계를 혼동시킴<br>
            * JavaScript의 this키워드는 대부분의 다른 언어에서와는 다르게 작동함으로 사용자에게 큰 혼란을 주었으며, 코드의 재사용성과 구성을 매우 어렵게 만들고는 했음<br>
            * class의 사용을 위해 이벤트 핸들러가 등록되는 방법을 정확히 파악해야 했으며, 이는 불안정한 문법 제안들의 도움이 없을 시엔, 코드를 매우 장황하게 만들었음<br>
            * React 내의 함수와 Class 컴포넌트의 구별, 각 요소의 사용 타이밍 등은 숙련된 React 개발자 사이에서도 의견이 일치하지 않음<br>
            
    * 점진적 적용 전략<br>
        * Hook은 존재하는 코드와 함께 나란히 작동함으로써 점진적으로 적용할 수 있음<br>
        * 이미 사용중인 복잡한 Class 컴포넌트들에 대한 "큰 리팩토링"을 피하기를 권장<br>


## [ 12월 01일 ]<br>
* State and Lifecycle<br>
    * 함수에서 클래스로 변환하기<br>
        <b>다섯 단계로 Clock과 같은 함수 컴포넌트를 클래스로 변환하기</b><br>
        1. React.Component를 확장하는 동일한 이름의 class를 생성<br>
        2. render()라고 불리는 빈 메서드를 추가<br>
        3. 함수의 내용을 render() 메서드 안으로 옮김<br>
        4. render() 내용 안에 있는 props를 this.props로 변경
        5. 남아있는 빈 함수 선언을 삭제<br>
        ```jsx
            class Clock extends React.Component {
                render() {
                    return (
                    <div>
                        <h1>Hello, world!</h1>
                        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
                    </div>
                    );
                }
            }
        ```
        * Clock은 함수가 아닌 클래스로 정의<br>
        * render 메서드는 업데이트가 발생할 때마다 호출되지만, 같은 DOM 노드로 <Clock />을 렌더링하는 경우 Clock 클래스의 단일 인스턴스만 사용됨. 이것은 로컬 state와 생명주기 메서드와 같은 부가적인 기능을 사용할 수 있게 해줌<br>
    * 클래스에 로컬 State 추가하기<br>
        <b>세 단계에 걸쳐서 date를 props에서 state로 이동해 보기</b><br>
        1. render() 메서드 안에 있는 this.props.date를 this.state.date로 변경<br>
        2. 초기 this.state를 지정하는 class constructor를 추가<br>
        3. <Clock /> 요소에서 date prop을 삭제<br>
        ```jsx
        class Clock extends React.Component {
            constructor(props) {
                super(props);
                this.state = {date: new Date()};
            }

            render() {
                return (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
                );
            }
            }

            ReactDOM.render(
            <Clock />,
            document.getElementById('root')
            );
        ```
        * 클래스 컴포넌트는 항상 props로 기본 constructor를 호출<br>
    * 생명주기 메서드를 클래스에 추가하기<br>
        * 마운팅 : Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정하는 것<br>
        * 언마운팅 : Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제하는 것<br>
        ```jsx
        class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }

        componentDidMount() {
            this.timerID = setInterval(
            () => this.tick(),
            1000
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
            date: new Date()
            });
        }

        render() {
            return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            );
        }
        }

        ReactDOM.render(
        <Clock />,
        document.getElementById('root')
        );
        ```
        1. <Clock />가 ReactDOM.render()로 전달되었을 때 React는 Clock 컴포넌트의 constructor를 호출 후 현재 시각이 포함된 객체로 this.state를 초기화.<br>
        2. React는 Clock 컴포넌트의 render() 메서드를 호출 후 Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트<br>
        3. Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 생명주기 메서드를 호출. 그 안에서 Clock 컴포넌트는 매초 컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청.<br>
        4. 매초 브라우저가 tick() 메서드를 호출. 그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체를 호출하면서 UI 업데이트 진행. React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 render() 메서드를 다시 호출. 이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 업데이트된 시각을 포함. React는 이에 따라 DOM을 업데이트.<br>
        5. Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출.<br>
    * State를 올바르게 사용하기<br>
        1. 직접 State를 수정 X<br>
            `this.state.comment = 'Hello';`는 컴포넌트를 다시 렌더링하지 않는 대신 setState()를 사용. `this.setState({comment: 'Hello'});` constructor은 this.state를 지정할 수 있는 유일한 공간임<br>
        2. State 업데이트는 비동기적일 수도 있음<br>
            `this.setState({counter: this.state.counter + this.props.increment,});`로 하면 카운터 업데이트에 실패할 수 있음. 그러므로 함수를 인자로 사용하는 다른 형태의 setState()를 사용하는 것이 좋음.<br>
            1. `this.setState((state, props) => ({counter: state.counter + props.increment}));` - 화살표 함수로 사용하는 방법<br>
            2. `this.setState(function(state, props) { return { counter: state.counter + props.increment};});`<br>
        3. State 업데이트는 병합됨<br>
            setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합<br>
    * 데이터는 아래로 흐름<br>
        * state가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근 불가<br>
        * 컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있음<br>
        * React 앱에서 컴포넌트가 유상태 또는 무상태에 대한 것은 시간이 지남에 따라 변경될 수 있는 구현 세부 사항으로 간주<br>
        * 유상태 컴포넌트 안에서 무상태 컴포넌트를 사용할 수 있으며, 그 반대 경우도 마찬가지로 사용할 수 있음<br>
* 이벤트 처리하기<br>
    * React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사함.<br>
    * 차이점<br>
        1. React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용<br>
        2. JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달<br>
        3. React에서는 false를 반환해도 기본 동작을 방지할 수 없음. 반드시 preventDefault를 명시적으로 호출<br>
    * 이벤트 핸들러에 인자 전달<br>
        ```jsx
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
        ```
        두 줄은 동등하며 각각 화살표 함수와 Function.prototype.bind를 사용<br>
        두 경우 모두 React 이벤트를 나타내는 e 인자가 ID 뒤에 두 번째 인자로 전달. 화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우 추가 인자가 자동으로 전달됨.<br>
* 조건부 렌더링<br>
    JavaScript에서의 조건 처리와 같이 동작<br>
    if나 조건부 연산자와 같은 JavaScript 연산자를 현재 상태를 나타내는 엘리먼트를 만드는 데에 사용<br>
    * 엘리먼트 변수<br>
        엘리먼트를 저장하기 위해 변수를 사용<br> 
        출력의 다른 부분은 변하지 않은 채로 컴포넌트의 일부를 조건부로 렌더링 할 수 있음 <br>
        * 논리 && 연산자로 If를 인라인으로 표현하기<br>
            * JSX 안에는 중괄호를 이용해서 표현식을 포함 할 수 있음<br> 
            * 그 안에 JavaScript의 논리 연산자 &&를 사용하면 쉽게 엘리먼트를 조건부로 넣을 수 있음<br>
            * JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됨. 따라서 && 뒤의 엘리먼트는 조건이 true일때 출력. 조건이 false라면 React는 무시하고 건너뜀.<br>
            <b>✨ falsy 표현식을 반환하면 여전히 && 뒤에 있는 표현식은 건너뛰지만 falsy 표현식이 반환된다는 것에 주의!!✨</b>
        * 조건부 연산자로 If-Else구문 인라인으로 표현하기<br>
            * 엘리먼트를 조건부로 렌더링하는 다른 방법은 조건부 연산자인 condition ? true: false를 사용하는 것<br>
        * 컴포넌트가 렌더링하는 것을 막기<br>
            * 렌더링 결과를 출력하는 대신 null을 반환하면 해결 가능<br>
            EX)<WarningBanner />가 warn prop의 값에 의해서 렌더링됨. prop이 false라면 컴포넌트는 렌더링하지 않게 됨.<br>
            ```jsx
            function WarningBanner(props) {
            if (!props.warn) {
                return null;
            }

            return (
                <div className="warning">
                Warning!
                </div>
            );
            }

            class Page extends React.Component {
            constructor(props) {
                super(props);
                this.state = {showWarning: true};
                this.handleToggleClick = this.handleToggleClick.bind(this);
            }

            handleToggleClick() {
                this.setState(state => ({
                showWarning: !state.showWarning
                }));
            }

            render() {
                return (
                <div>
                    <WarningBanner warn={this.state.showWarning} />
                    <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                    </button>
                </div>
                );
            }
            }

            ReactDOM.render(
            <Page />,
            document.getElementById('root')
            );
            ```
        * 컴포넌트의 render 메서드로부터 null을 반환하는 것은 생명주기 메서드 호출에 영향을 주지 않음. 그 예로 componentDidUpdate는 계속해서 호출되게 됨.




## [ 11월 17일 ]<br>

* React의 특징<br>
    * 상호작용이 많은 UI개발에 적합<br>
    * 컴포넌트 로직은 JavaScript로 작성<br>
    * 캡슐화된 컴포넌트로 개발되어 재사용이 용이<br>
    * DOM과는 별개로 상태 관리 가능<br>
    * 기술 스택의 나머지 부분에는 관여 X<br>
    * 기존 코드와 별개로 개발 가능<br>
    * React Native를 이용하면 모바일 앱도 개발 가능<br>

> React 공식 사이트 introduction에 있는 4가지 기본 예제 중심으로 설명한 자료 사이트 : https://ko.reactjs.org/

* 첫번째 예제- 간단한 컴포넌트<br>
    * 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할을 하는 것 : React 컴포넌트가 구현하는 메서드 render()<br>
    * 컴포넌트로 전달된 데이터는 render() 안에서 this.props를 통해 접근 가능<br>
    * React를 개발하는데 반드시 JSX를 써야 하는 것은 아님<br>
    * JSX를 JavaScript로 확인하고 싶을 경우 Babel REPL을 사용<br>

* 두번째 예제 - 상태를 가지는 컴포넌트(state가 포함된 component)<br>
    * 동적인 데이터는 this.state로 접근 가능<br>
    * state가 변하면 render()메소드가 다시 호출되어 화면이 갱신<br>
    * super는 부모 클래스를 의미하는 것으로 부모클래스의 생성자를 사용하겠다는 선언
    임과 동시에 this를 사용하기 위한 것, super를 호출하기 전에 this를 사용 불가<br>
    ```jsx
    class Timer extends React.Component {
    constructor(props) {
        super(props); //super(props)를 사용하는 이유 : React의 class는 모두 React.Component에서 상속
        this.state = { seconds: 0 }; //1.초기의 state를 0으로 출력
    }

    tick() {
        this.setState(state => ({
        seconds: state.seconds + 1
        })); 
    } //3.호출된 tick()메소드는 setState()를 통해 state를 1씩 증가

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    } //2.이후 componentDidMount()메소드로 1초에 한번씩 tick()메소드를 호출

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
        <div>
            Seconds: {this.state.seconds}
        </div>
        );
    }
    }

    ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example') //화면이 켜져있는 동안 초를 카운트하는 Timer앱
    );
    ```
    
* 세번째 예제 - Todo 리스트 만들기<br>
    * TodoApp과 TodoList 두개의 컴포넌트 구성<br>
    * handleChange는 키보드 입력마다 react의 state를 갱신->element에서 확인<br>
    * 시간으로 보는 동작<br>
        유저 입력 > handleChange > react의 state 갱신 > form element가 React state 참조
    * render() 메소드에서 초기 렌더링을 실행
    * onChange를 통해 input에 입력되는 값으로 state 상태 변경 준비
    ```jsx
    class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
        <div>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
                What needs to be done?
            </label> //htmlFor : input과 연결을 위한 id 값
            <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
            /> //input area에 이벤트 발생하면 handleChange(e)가 동작하여 State의 text 값 변경
            <button>
                Add #{this.state.items.length + 1}
            </button> // ADD #x 버튼을 클릭하면 리스트의 length에 1을 더해서 버튼에 출력
            </form>
        </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
        return;
        }
        const newItem = {
        text: this.state.text,
        id: Date.now()
        };
        this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
        })); //  입력된 값은 "text: ""에 임시 저장
    }
    }

    class TodoList extends React.Component {
    render() {
        return (
        <ul>
            {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
            ))}
        </ul>
        );
    }
    }

    ReactDOM.render(
    <TodoApp />,
    document.getElementById('todos-example')
    );
    ```
    <span style="color:Yellow"><b>❗❓ handleSubmit(e)에서 e.preventDefault() 메소드를 사
    용하는 이유</b></span><br>
    * 브라우저에서 양식을 제출할 때는 기본적으로 브라우저의 새로 고침이 발생하는데, React나 SPA(single page application)의 경우 필요 없는 동작임으로 이를 방지하기위해 사용<br>
    * stae.text의 길이가 0이면 아무 것도 반환하지 않음<br>

* 네번째 예제 - 외부 플러그인을 사용하는 컴포넌트(외부컴포넌트를 사용한 markdown 에디터)<br>
    * 외부 플러그인은 Remarkable을 사용함으로 CDN으로 링크 추가<br>
        * remarkable.js로 검색하고 CDN사이트 2곳 중 한 곳에서 링크를 복사해 추가(https://github.com/jonschlinkert/remarkable)<br>
    * remarkable을 사용해 ``<textarea>``의 값을 실시간으로 변환<br>

## [ 11월 10일 ]<br>
* movie app 배포하기<br>
    1. 설치하기 전 package.json 수정하기<br>
        - scripts에 depoly와 predeploy 추가하고
        ```jsx
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "deploy": "gh-pages -d build",
            "predeploy": "npm run build"
        },
        ```
        마지막 줄에 github에 올려진 것을 사용하여 배포하기 위해 github에 올린 이름과 동일하게 homepage에 작성하기<br>
        ```jsx
        "homepage": "https://das0166.github.io/movie_app_2021-5"
        ```
    2. `npm install gh-pages`을 사용하여 gh-pages 설치하기<br>
    3. `git remote -v`을 사용하여 깃허브 주소 확인하기
    3. `npm run deploy`을 사용하여 배포하기<br>
    4. 위의 순서를 진행하게 되면 build 폴더가 생성되며 https://das0166.github.io/movie_app_2021-5에 들어가면 movie app이 실행됨<br>
    <span style="color:Red"><b>❗❗ 순서대로 했는데도 오류가 생긴다면 확인해봐야할 것(404오류나 loading 화면만 지속될 경우)</b></span><br>
        1. 마지막줄인 "homepage": "https://das0166.github.io/movie_app_2021-5"와 github에 올린 저장소 이름과 동일한지 확인해보기<br>
        2. package.json에 작성한 코드 중 deploy와 predeploy 순서 확인해보기<br>
            ```jsx
            "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "deploy": "gh-pages -d build",
            "predeploy": "npm run build"
            },
            ```
        3. build 폴더 안에 있는 index.html코드가 폴더 주소를 제대로 따라가고 있는지 확인해보기<br>
        4. `git remote -v`을 사용하여 맞게 지정되어 있는지 확인해보기<br>

* package.json과 package-lock.json 차이<br>
    * 컴포넌트 설치 오류 등 원인 규명이 되지 않은 오류가 있을 때<br>
        1. `npm cache clean--force`<br>
        2. `npm rebuild`<br>
        3. `rm-rf node_modules`<br>
        4. `npm install`<br>
        * 3번째 rm 명령이 실행되지 않으면 shell을 관리자 권한으로 실행 후 다시 시도하기<br>
    * package.json과 package-lock.json 차이<br>
        1. package.json은 패키지 의존성 관리 파일<br>
        2. 협업 등 팀원들 각자의 컴퓨터에 같은 패키지를 설치하여 동일한 개발환경을 구성해야 할때 package.json 사용<br>
        3. 만일 버전이 다르게 설치되는 경우 앱이 동작하지 않는 경우<br>
            1. `$ npm –version`을 이용하여 npm버전이 일치한지 확인<br>
            2. node_modules 폴더 삭제 
            3. npm cache 삭제
            4. `$ npm install`을 이용하여 node_modules 재설치<br>
        4. package.json의 경우는 version range를 사용 ex) "express": "~4.16.1"<br>
        5. package-lock.json은 package.json보다 더 정확한 버전이 기록되어 있음<br>
        6. npm install 을 진행하더라도 서로 다른 node_modules트리를 생성하는 경우가 발생 -> npm의 버전이 다른 경우 npm 알고리즘의 차이가 나기 때문 -> 문제가 발생하면 npm버전부터 확인 후 package-lock.json파일이 있으면 npm install명령은 package-lock.json 을 사용하여 node-modules 를 생성<br>

## [ 11월 03일 ]<br>
* Navigation 만들기<br>
    * Home과 About 버튼을 눌렀을때 적절한 화면 보여주기<br>
    `<a href="/">Home</a><a href="/about"About</a>`로 코드를 작성하게 되면 링크를 누를때마다 리액트가 죽고, 화면 전체가 새로 고침됨.<br>
    ❗❓이는 a 엘리먼트 특징 때문.(a href 속성은 페이지 전체를 다시 그림) => 이를 해결하기 위해선 a href 대신 `<Link to="/">Home</Link><Link to="/about">About</Link>`를 하게 되면 화면 전체가 새로 고침되지 않음.<br>

* 영화 상세 정보 기능 만들기<br>
    ![routeprops](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/routeprops.PNG)<br>
    react-router-dome에서 Route 컴포넌트가 그려줄 컴포넌트에 전달한 props값<br>
    Route 컴포넌트가 그려줄 컴포넌트에는 항상 이 props가 전달되고, 이 props에 원하는 데이터를 담아보내줄 수 있음<br>
    * route props에 데이터 담아 보내기<br>
        route props에 데이터를 담아 보내기 위해 Navigation 컴포넌트에 있는 Link컴포넌트의 to props의 구조 바꾸기<br>
    `<Link to={{ pathname: '/about', state: { fromNavigation: true}}}>About</Link>`로 바꾸게 되면 to props에 객체를 전달하게 됨. pathname은 URL, state는 route props에 보내줄 데이터 의미<br>
    * Movie 컴포넌트에 Link 컴포넌트 추가<br>
    Movie 컴포넌트에 Link 컴포넌트를 입력하고 Link 컴포넌트에 props를 작성하는 코드인 `<Link to={{pathname:'/movie-detail',state: {year, title,summary, poster, genres},}}>`를 넣으면 영화 카드를 누르면 /movie-detail로 이동하게 됨<br>
    * Detail 컴포넌트 만들기<br>
    Detail 컴포넌트에서 Link 컴포넌트가 보내준 영화 데이터를 확인할 수 있게 하기<br>
    Detail을 출력해주는 Route 컴포넌트를 App.js에 추가하기 위해 `<Route path="/movie-detail" component={Detail} />`를 작성하기<br>
    ![Detail컴포넌트](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/detail%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8.PNG)<br>
    영화 카드를 눌러 /movie-detail로 이동하면 Detail 컴포넌트가 출력하고 있는 hello라는 문장이 보이고 console을 보면 Movie 컴포넌트에서 Link 컴포넌트를 통해 보내준 데이터가 있음<br>

* 리다이렉트 기능 만들기<br>
    * Detail 컴포넌트 클래스형 컴포넌트로 변경<br>
    Detail 컴포넌트를 함수형에서 클래스형 컴포넌트로 변경한 다음 location, history 키를 구조 분해 할당 함<br>
    => location키의 state 키가 비어있음<br>
    * push() 함수 사용<br>
    location.state가 undefined인 경우 history.push("/")를 실행하도록 코드 작성<br>
    `if(location.state === undefined) {history.push('/');}`<br>
    * 영화 제목 출력하기<br>
    ```jsx
    const { location } = this.props;
        return <span>{location.state.title}</span>
    ```
    Movie 컴포넌트로부터 전달 받은 영화 데이터가 location.state에 있음.<br>
    * location.state 확인하기<br>
    ❗❓ /movie-detail로 이동하면 오류 발생하는 이유?
    detail컴포넌트는 render() -> componentDidMount() 순서로 함수를 실행하기때문.<br>
    ❗❗해결방법<br>
    ```jsx
    render() {
        const { location } = this.props;
        if (location.state) {
        return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
    ```
    render() 함수에 componentDidMount() 생명주기 함수에 작성한 리다이렉트 코드 추가<br>


    

## [ 10월 27일 ]<br>
💡<b>메세지 해결 방법</b><br>
![className으로변경](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/className%EC%9C%BC%EB%A1%9C%20%EB%B3%80%EA%B2%BD.PNG)<br>
<b>오류가 난 이유?</b><br>
HTML의 class와 자바스크립트의 class라는 이름이 겹치면 리액트가 혼란스러울 수 있기 때문<br>
<b>해결 방법</b><br>
class라고 적혀있는 것을 className으로 변경<br> 

* li tag에 key props 추가<br>
 genre에는 key값으로 사용하기에 적당한 id값 같은 것이 없음.<br>
 map()함수에는 2번째 매개변수를 지정할 경우 배열의 index
값을 반환해 주는 기능이 있음<br>
=>`genres.map((genre) => { return (<li className="movie-genre"> ....}` ->`genres.map((genre, index) => { return (<li ket={index} className="movie-genre"> ....}`로 변경<br>
index를 추가함으로써 key props로 활용<br>
* 시놉시스 글자 수 제한하기<br>
`summary.slice(0,180)`를 하게되면 summary에 들어가는 글자 첫번째(0)부터 180개의 글자로 제한한다. 즉, 첫번째 글자부터 179번째 글자까지 작성되어진다.<br>

* 라우터 이용하기<br>
라우터란?<br>
화면 이동을 시켜주는 장치 => 사용자가 입력한 url을 통해 특정 컴포넌트를 부름<br>
ex)localhost:3000/home 이라고 입력하면 home 컴포넌트로 불러주는 것이 라우터의 역할<br>
    * 라우터 사용법<br>
    `import {HashRouter, Route} form 'react-router-dom'`<br>
    `function App() { return (<HashRouter> <Route /> </HashRouter>)}`이라고 입력하면 주소창에 #/이 추가되면서 실행이 됨<br>
    ![라우터실행](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EB%9D%BC%EC%9A%B0%ED%84%B0%EC%8B%A4%ED%96%89.PNG)<br>
    * Route 컴포넌트에 path, component props 추가<br>
    About 컴포넌트를 임포트한 뒤, path, component props에 url과 About 컴포넌트 전달<br>
    `function App() { return (<HashRouter> <Route path="/about" component={About} /> </HashRouter>)}`로 작성 뒤 about컴포넌트로 이동했을때 보여줄 내용 About.js에 작성하기<br>
    localhost:3000/#에 path props로 지정했던 값 /about을 붙여서 접속하기<br>
    ![About컴포넌트실행](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/about%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%8B%A4%ED%96%89.PNG)<br>
    * Home컴포넌트를 위한 Route 컴포넌트 추가<br>
    App 컴포넌트에 Home 컴포넌트를 임포트하고, 또 다른 Route 컴포넌트 추가<br>
    `function App() { return (<HashRouter> <Route path="/" component={Home} /> <Route path="/about" component={About} /> </HashRouter>)}`<br>
    localhost:3000/#와 localhost:3000/#/about 둘 다 Movie 컴포넌트 출력됨<br>
    ![두곳에서Movie컴포넌트실행](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EB%91%90%EA%B3%B3%EC%97%90%EC%84%9CMovie%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%8B%A4%ED%96%89.PNG)<br>
    <span style="color:Yellow"><b>❗❓ About 컴포넌트에도 Movie 컴포넌트가 출력되는 이유는?</b></span><br>
    라우터는 사용자가 /home/introduction에 접속하면 /, /home, /home/introduction 순서로 path props가 있는지를 찾음. 그런데 이들 모두가 path props를 갖고 있기 때문에 introduction에 접속하면 Home에 입력한 것과 introduction에 입력한 것이 모두 보임<br>
    같은 원리로 /about에 접속하면 /, /about 순서로 path props를 찾으므로 Home, About 컴포넌트가 모두 그려지게 됨<br>
    <b>해결 방법</b><br>
    exact props(Route 컴포넌트가 path props와 정확하게 일치하는 url에만 반응하도록 만들어줌)를 추가하면 됨.<br>
    `function App() { return (<HashRouter> <Route path="/" exact={true} component={Home} /> <Route path="/about" component={About} /> </HashRouter>)}`<br>
    




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
        ![영화명결과값](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/%EC%98%81%ED%99%94%EB%AA%85%EA%B2%B0%EA%B3%BC%EA%B0%92.PNG)<br>

        💡<b>메세지 해결 방법</b><br>
         ![prop 문제](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/prop%20%EB%AC%B8%EC%A0%9C.PNG)<br>
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
         ![class속성, genre에 대한 경고](https://github.com/das0166/movie_app_2021-5/blob/master/%EC%97%85%EB%A1%9C%EB%93%9C%EC%9E%90%EB%A3%8C/class%EC%86%8D%EC%84%B1%2C%20genres%EC%97%90%20%EB%8C%80%ED%95%9C%20%EA%B2%BD%EA%B3%A0.PNG)<br>
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