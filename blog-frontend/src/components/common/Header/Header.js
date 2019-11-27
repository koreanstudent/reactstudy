import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
    <Header className={cx('Header')}>
        <div className={cx('Header-conent')}>
            <div className={cx('brand')}>
                <Link to ="/">reactblog</Link>
            </div>
            <div className={cx('right')}>
                오른쪽
            </div>
        </div>
    </Header>
)

export default Header;