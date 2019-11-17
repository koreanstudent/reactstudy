import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

// onContextMenu - 우클릭을 하여 메뉴가 열리는 이벤트를 의미, e.preventDefault()를 통해 메뉴가 열리지 않게 된다.

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {

    return (
        <div
           className ="Counter"
           onClick={onIncrement}
           onContextMenu={(e)=> {
               e.preventDefault();
               onDecrement();
           }}
           onDoubleClick={onSetColor}
           style={{
               backgroundColor: color
           }}>
               {number}
           </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;

