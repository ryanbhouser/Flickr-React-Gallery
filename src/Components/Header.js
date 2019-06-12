import React from 'react';
import MainNav from './MainNav';
import SearchForm from './SearchForm';

const Header = (props) => {
  return (
    <header>
      <h1>React Image Gallery</h1>
      <p>Search for an image below...</p>
      <SearchForm onSearch={props.onSearch} />
      <MainNav />
    </header>
  );
};

export default Header;
