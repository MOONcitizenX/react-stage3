import React, { Component } from 'react';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import FormsPage from './pages/FormsPage';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="404" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
