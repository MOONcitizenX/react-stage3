import React, { ChangeEvent, Component } from 'react';
import s from './SearchBar.module.css';

interface SearchBarState {
  searchValue: string;
}

export default class SearchBar extends Component<SearchBarState> {
  state = {
    searchValue: localStorage.getItem('productSearchValue') || '',
  };

  handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ searchValue: value });
  };

  handleRefresh = () => {
    localStorage.setItem('productSearchValue', this.state.searchValue);
  };

  componentDidMount(): void {
    const val = localStorage.getItem('productSearchValue');
    if (val) {
      this.setState({ searchValue: val });
    }
    window.addEventListener('beforeunload', this.handleRefresh);
  }

  componentWillUnmount(): void {
    localStorage.setItem('productSearchValue', this.state.searchValue);
    window.removeEventListener('beforeunload', this.handleRefresh);
  }

  render() {
    return (
      <div className={s.searchWrapper}>
        <input
          type="search"
          className={s.searchInput}
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
          required
        />
        <span className={s.searchTitle}>Search</span>
      </div>
    );
  }
}
