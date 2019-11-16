import React from 'react';
import './PageTemplate.scss';


const PageTemplate = ({children}) => {
    return (
        <div className = "PageTemplate">
            <div className = "app-title">일정 관리</div>
            <div className = "content">
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;
