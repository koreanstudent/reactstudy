## 개발환경

node-sass classnames react-icons

## UI 구성하기

1. TodoTemplate : 화면을 가운데에 정렬시켜 주며, 앱 타이틀을 보여준다 
2. TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해 인풋의 상태를 관리함
3. TodoListItem : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트. todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 ui를 보여줌
4. TodoList : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌


https://react-icons.netlify.com/#/icons/md  아이콘 사용 가능

## 기능 구현

나중에 추가할 일정 항목에 대한 상태들은 모두 App 컴포넌트에서 관리합니다.

APP에서 useState를 사용하여 todos라는 상태를 정의하고, todos를 TodoList의 props로 전달한다.

## useCallback

렌더링 성능을 최적화 한다.

컴포넌트의 렌더링이 자주 발생하거나, 렌더링 해야할 컴포넌트의 개수가 많아진다면 이 부분을 최적화 해주는게 좋다. -> 컴포넌트가 리렌더링 될 때마다 함수들이 새로 생성되기 때문