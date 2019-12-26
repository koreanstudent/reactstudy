//리덕스 적용
// 리덕스로 회원가입과 로그인 폼의 상태를 관리하는 방법
import { createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD ='auth/CHANGE_FIELD';
const INITIALIZE_FORM ='auth/INITIALIZE_FORM';

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value}) => ({
        form, //register, login
        key, // username, password, passwordConfirm
        value // 실제 바꾸려는 값
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register /login

const initialState = {
    register : {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login : {
        username: '',
        password: '',
    }
};

// 객체의 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우, immer를 사용하면 훨씬 편리하게 상태를 관리 할 수 있다.
const auth = handleActions(
    {
        [CHANGE_FIELD] : (state, { payload: { form, key, value}}) => 
            produce(state, draft => {
                draft[form][key] = value; // 예 : state.register.username을 바꾼다.
            }),
        [INITIALIZE_FORM] : (state, { payload: form}) => ({
            ...state,
            [form]: initialState[form]
        })
    },
    initialState,
);

export default auth;