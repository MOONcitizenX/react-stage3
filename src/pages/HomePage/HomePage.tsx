import Card, { Person } from 'components/Card/Card';
import React, { useState } from 'react';
import s from './HomePage.module.css';
import SearchBar from 'components/SearchBar/SearchBar';
import useFetch from 'hooks/useFetch';
import { Loader } from 'components/Loader/Loader';
import { API_ROOT } from 'constants/constants';

interface Data {
  count: number;
  next: string;
  previous: null | string;
  results: Person[];
}

const HomePage = () => {
  const [search, setSearch] = useState<string>(API_ROOT);
  const { data, loading, error } = useFetch<Data>(search);

  const handleInput = (input: string) => {
    setSearch(`${API_ROOT}?search=${input.trim().toLowerCase()}`);
  };

  return (
    <>
      <SearchBar onInput={handleInput} />
      {loading && <Loader />}
      <div className={s.productsWrapper}>
        {data && data?.results.map((person) => <Card key={person.name} person={person} />)}
        {error && <p>Something went wrong 😥</p>}
      </div>
    </>
  );
};

export default HomePage;
