import React, { Component } from 'react';
import s from './Page404.module.css';

export default class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <div className={s.errorText}>
          Something went wrong 😢 <span className={s.span404}>404</span>
        </div>
      </div>
    );
  }
}
