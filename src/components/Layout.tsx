import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Outlet />
        </main>
      </>
    );
  }
}
