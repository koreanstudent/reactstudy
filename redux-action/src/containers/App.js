import React, {Component} from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';

import { connect } from 'react-redux';
// import * as actions from '../actions';
import * as actions from '../modules';

import { getRandomColor } from '../lib';

class App extends Component {
    render() {
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        );
    }
}

// 액션함수 준비
// 스토어에 액션을 넣을 때 store.dispatch 함수를 사용
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(App);