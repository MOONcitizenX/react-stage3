import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from './Page404.module.css';

export default class Page404 extends Component {
  render() {
    return (
      <div className={s.errorText}>
        Something went wrong 😢 <span className={s.span404}>404</span>
        <p>
          Please, navigate to the{' '}
          <Link to="/" className={s.homeLink}>
            Home Page
          </Link>
        </p>
      </div>
    );
  }
}
