import React,{ createContext, useState } from 'react';

// 새 Context를 만들 때는 createContext 함수를 사용합니다.
const ColorContext = createContext({ 
    state: {color: 'black', subcolor: 'red'},
    actions : {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({ children}) => {
    const [color, setColor] =useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value= {
        state: { color, subcolor },
        actions : { setColor, setSubcolor}
    }
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer} = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer};

export default ColorContext;

