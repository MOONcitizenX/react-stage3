import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </>
    );
  }
}
