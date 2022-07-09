import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <a className={style.logo} href="https://social-network.samuraijs.com/" target="_blank"><span>.</span>react social</a>
            <ul className={style.menu}>
                <li>Username</li>
                <li>Login</li>
            </ul>
        </header>
    );
};

export default Header;