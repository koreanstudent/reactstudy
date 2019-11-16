import React from 'react';
import './PageInput.scss';


const PageInput =({value,onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return(
        <div className= "PageInsert">
            <input onChange={onChange} value={value} onKeyPress ={handleKeyPress}/>
            <button type="submit" onClick={onInsert}>추가</button>
        </div>
    );
};

export default PageInput;