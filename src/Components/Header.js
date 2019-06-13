import React from 'react';
import MainNav from './MainNav';
import SearchForm from './SearchForm';

// Displays header component with search form and nav
const Header = (props) => {
  return (
    <header>
      <h1>React Image Gallery</h1>
      <p>Search for an image below...</p>
      <SearchForm onSearch={props.onSearch} title={props.getTitle} />
      <MainNav />
    </header>
  );
};

export default Header;
