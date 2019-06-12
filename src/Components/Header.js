import React from 'react';
import MainNav from './MainNav';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header>
      <h1>React Image Gallery</h1>
      <p>Search for an image below...</p>
      <SearchForm />
      <MainNav />
    </header>
  );
};

export default Header;
