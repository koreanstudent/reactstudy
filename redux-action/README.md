## 작업 환경설정

create-react-app redux-counter

yarn add redux react-redux

actions폴더 - 액션 타입과 액션 생성자 파일을 저장합니다.

components폴더 - 컴포넌트의 뷰가 어떻게 생길지만 담당하는 프리젠테이셔널 컴포넌트를 저장합니다.

containers폴더 - 스토어에 있는 상태를 props로 받아 오는 컨테이너 컴포넌트들을 저장합니다.

reducers폴더 - 스토어의 기본 상태 값과 상태의 업데이트를 담당하는 리듀서 파일들을 저장합니다.

lib폴더 - 일부 컴포넌트에서 함께 사용되는 파일을 저장합니다.

yarn add redux-actions immutable

## redux-actions => createAction, handleActions

createAction 함수는 액션 생성 함수를 간단하게 만들어 준다.

handleActions - swith문을 대신 사용

## immutable

자바스크립트에서 불변성 데이터를 다룰 수 있도록 도와줍니다.

