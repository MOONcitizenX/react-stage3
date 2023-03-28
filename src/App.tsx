import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import HomePage from 'pages/HomePage/HomePage';
import Page404 from 'pages/Page404/Page404';
import Layout from 'components/Layout';
import FormsPage from 'pages/FormsPage/FormsPage';

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
