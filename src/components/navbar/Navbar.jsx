import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.menu}>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Users</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;