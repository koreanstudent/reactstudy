import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import App from './App';

// react-router를 사용하기위해서는 최상단에 BrowserRouter를 명시해주어야 사용 가능 
const Root = () => {
    return (
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    )
}

export default Root;