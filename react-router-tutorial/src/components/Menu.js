import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {

    // 스타일 지정
    // NavLink  스타일 css 사용 하기 위해서
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
            <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>

/* <li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/about/foo">About Foo</Link></li> */
/* <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
<li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
<li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li> */
    );
};

export default Menu;