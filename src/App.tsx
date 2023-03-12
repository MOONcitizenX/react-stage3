import React, { Component } from 'react';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    );
  }
}
