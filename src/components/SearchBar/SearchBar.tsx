import React, { ChangeEvent, useEffect } from 'react';
import s from './SearchBar.module.css';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { changeSearchText } from 'store/searchTextSlice';

interface SearchBarProps {
  onInput: (input: string) => void;
}

const LSName = 'personSearchValue';

const SearchBar = ({ onInput }: SearchBarProps) => {
  const { searchText } = useAppSelector((state) => state.searchText);
  const dispatch = useAppDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(changeSearchText(value));
  };

  const handleSearchInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onInput(searchText);
  };

  useEffect(() => {
    localStorage.setItem(LSName, searchText);
  }, [searchText]);

  return (
    <div className={s.searchWrapper}>
      <form onSubmit={handleSearchInput}>
        <input
          type="search"
          placeholder="Search"
          className={s.searchInput}
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
