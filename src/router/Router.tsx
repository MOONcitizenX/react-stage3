import React from 'react';
import Layout from 'components/Layout';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import FormsPage from 'pages/FormsPage/FormsPage';
import HomePage from 'pages/HomePage/HomePage';
import Page404 from 'pages/Page404/Page404';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="forms" element={<FormsPage />} />
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="404" />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
