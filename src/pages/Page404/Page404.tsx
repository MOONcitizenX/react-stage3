import React from 'react';
import { Link } from 'react-router-dom';
import s from './Page404.module.css';

const Page404 = () => {
  return (
    <div className={s.errorText}>
      Something went wrong 😢 <span className={s.span404}>404</span>
      <p>
        Please, navigate to the{' '}
        <Link to="/" className={s.homeLink}>
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default Page404;
