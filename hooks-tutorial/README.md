## Hooks

함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공

## useState

const [value, setValue] = useState(0);

함수가 호출되면 배열을 반환하는데 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수

하나의 상태 값만 관리할 수 있다 

## useEffect

리엑트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook

기본적으로 렌더링되고 난 직후마다 실행됨

componentDidMount 와 componentDidUpdate를 합친 형태로 보아도 무방

 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수 두번째 파라미터로 비어 있는 배열을 넣는다
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.!');

    },[])

    업데이트될때마다. 
    useEffect(() => {
    console.log('렌더링이 완료되었습니다.!');
    console.log(name);

    },[name])

컴포넌트가 언마운트되거 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리함수를 반환

useEffect(() => {
    console.log('렌더링이 완료되었습니다.!');
    console.log(name);
    
    return () =>{
        console.log(name);
    }

    })

## useReducer

useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용

useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어 줍니다.

Hook을 사용하면 state 값과 dispatch 함수를 받아온다

state는 현재 가리키고 있는 상태, dispatch는 액션을 발생시키는 함수

dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조

useReducer를 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.

## useMemo

함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다.







