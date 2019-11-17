## 작업 환경설정

create-react-app redux-counter

yarn add redux react-redux

actions폴더 - 액션 타입과 액션 생성자 파일을 저장합니다.

components폴더 - 컴포넌트의 뷰가 어떻게 생길지만 담당하는 프리젠테이셔널 컴포넌트를 저장합니다.

containers폴더 - 스토어에 있는 상태를 props로 받아 오는 컨테이너 컴포넌트들을 저장합니다.

reducers폴더 - 스토어의 기본 상태 값과 상태의 업데이트를 담당하는 리듀서 파일들을 저장합니다.

lib폴더 - 일부 컴포넌트에서 함께 사용되는 파일을 저장합니다.


## 프리젠테이셔널 컴포넌트

오직 뷰만 담당

리덕스 스토어에 직접 접근할 권한은 없으며, 오직 props로만 데이터를 가져올 수 있다.

## 컨테이너 컴포넌트

프리젠테이셔널 컴포넌트들과 컨테이너 컴포넌트들의 관리를 담당한다.

내부에 DOM 엘리먼트를 직접적으로 사용할 때는 없고, 감싸는 용도일 때만 사용

## PropTypes

전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기를 내보낸다.

prop에 유효하지 않은 값이 전달 되었을 때, 경고문이 javascript 콘솔을 통해 보인다.

## reducers

    리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.

## store 

리덕스에서 가장 핵심적인 인스턴스입니다.
구독중인 함수들이 상태가 업데이트 될 때 마다 다시 실행되게 해준다.

// 스토어 생성
const store = createStore(reducers);

## Provider 컴포넌트

Provider 는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트입니다.

이 컴포넌트를 불러온다음에, 연동 할 컴포넌트를 감싸준다음에 Provider 컴포넌트의 props로 store 값을 설정해주면 됩니다.

## combineReducers

여러개의 서브리듀서를 하나로 합쳐줍니다. 이 과정에서 함수에 객체를 전달하게 되는데, 이 객체의 구조에 따라 합쳐진 리듀서의 상태의 구조가 만들어집니다.

## 스프레드 연산자 

... 세개의 점으로 이루어진 연산자로, 몇 가지 다른 역할을 담당한다.

const cities = ["Kampala", "Nairobi", "Lagos"];
console.log(...cities); // Kampala Nairobi Lagos

const countries = [...east, ...west];
console.log(countries); // [ 'Uganda', 'Kenya', 'Tanzania', 'Nigeria', 'Cameroon', 'Ghana' ]

let lakes = ["경포호", "화진포", "송지호", "청초호"];
let [first, ...rest] = lakes;
console.log(rest.join(", ")) // 화진포, 송지호, 청초호

## 리덕스의 세 가지 규칙

스토어는 단 한 개 - 스토어를 여러 개 생성해서 상태를 관리하면 안됨. 대신 리듀서를 여러 개 만들어서 관리

state는 읽기 전용 - 절대로 직접 수정 x 

변화는 순수 함수로 구성 - 리듀서 함수 내부에서 외부 네트워크와 데이터베이스에 직접 접근하면 안된다. 
                        요청이 실패할 수도 있고, 외부 서버의 반환 값이 변할 수 있기 때문
                        현재 날짜를 반환하는 new Date() 함수나 Math.random() 함수 등도 사용 x 


