import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <NavLink to="/" className={s.navLink}>
                  Home
                </NavLink>
              </li>
              <li className={s.navItem}>
                <NavLink to="/about" className={s.navLink}>
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
