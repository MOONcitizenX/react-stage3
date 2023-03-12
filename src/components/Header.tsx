import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <ul className={s.navList}>
              <li className={s.navItem}>
                <Link to="/" className={s.navLink}>
                  Home
                </Link>
              </li>
              <li className={s.navItem}>
                <Link to="/about" className={s.navLink}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
