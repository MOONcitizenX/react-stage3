import React, { Component } from 'react';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </>
    );
  }
}
