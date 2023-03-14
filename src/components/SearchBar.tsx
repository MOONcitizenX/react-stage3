import React, { Component } from 'react';
import s from './SearchBar.module.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className={s.searchWrapper}>
        <input
          type="search"
          className={s.searchInput}
          // value={searchVal}
          // onChange={(event) => {
          //   const value = event.target?.value;
          //   setSearchVal(value);
          //   updateFilterState(value.toLocaleLowerCase());
          // }}
          required
        />
        <span className={s.searchTitle}>Search</span>
      </div>
    );
  }
}
