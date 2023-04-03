import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './SearchBar.module.css';

const LSName = 'personSearchValue';

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

interface SearchBarProps {
  onInput: (input: string) => void;
}

const SearchBar = ({ onInput }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>(() => getInitialValue());

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleSearchInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onInput(searchValue);
  };

  useEffect(() => {
    localStorage.setItem(LSName, searchValue);
  }, [searchValue]);

  return (
    <div className={s.searchWrapper}>
      <form onSubmit={handleSearchInput}>
        <input
          type="search"
          placeholder="Search"
          className={s.searchInput}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
