import { createContext } from 'react';

// 새 Context를 만들 때는 createContext 함수를 사용합니다.
const ColorContext = createContext({ color: 'black'});

export default ColorContext;

