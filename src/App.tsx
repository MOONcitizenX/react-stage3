import React, { Component } from 'react';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Route>
      </Routes>
    );
  }
}
