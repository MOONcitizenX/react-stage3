import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './SearchBar.module.css';

const LSName = 'productSearchValue';

const getInitialValue = () => {
  let val = '';
  try {
    const LSValue = localStorage.getItem(LSName);
    if (LSValue) {
      val = LSValue;
    }
  } catch (error) {
    console.error(error);
  }

  return val;
};

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>(() => getInitialValue());

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  useEffect(() => {
    localStorage.setItem(LSName, searchValue);
  }, [searchValue]);

  return (
    <div className={s.searchWrapper}>
      <input
        type="search"
        className={s.searchInput}
        value={searchValue}
        onChange={handleSearchChange}
        required
      />
      <span className={s.searchTitle}>Search</span>
    </div>
  );
};

export default SearchBar;
