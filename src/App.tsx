import React, { Component } from 'react';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </>
    );
  }
}
