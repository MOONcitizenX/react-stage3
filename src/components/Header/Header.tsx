import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <h2 className={s.navHeader}>
            <Routes>
              <Route path="/" element={'Home'} />
              <Route path="/about" element={'About Us'} />
              <Route path="/forms" element={'Forms'} />
              <Route path="*" element={'Not Found'} />
            </Routes>
          </h2>
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
            <li className={s.navItem}>
              <NavLink to="/forms" className={s.navLink}>
                Forms
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
