import React from 'react';
import Card, { Person } from 'components/Card/Card';
import s from './HomePage.module.css';
import SearchBar from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { changeSearchText } from 'store/searchTextSlice';
import { useGetPersonByNameQuery } from 'API/swapi';

export interface Data {
  count: number;
  next: string;
  previous: null | string;
  results: Person[];
}

const HomePage = () => {
  const { searchText } = useAppSelector((state) => state.searchText);
  const dispatch = useAppDispatch();
  const { isError, isLoading, data } = useGetPersonByNameQuery(searchText);

  const handleInput = (input: string) => {
    dispatch(changeSearchText(input));
  };

  return (
    <>
      <SearchBar onInput={handleInput} />
      {isLoading && <Loader />}
      <div className={s.productsWrapper}>
        {data && data?.results.map((person) => <Card key={person.name} person={person} />)}
        {isError && <p>Something went wrong 😥</p>}
      </div>
    </>
  );
};

export default HomePage;
