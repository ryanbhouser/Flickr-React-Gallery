import React from 'react';
import {NavLink} from 'react-router-dom';

// Displays nav component with NavLinks to the three main routes
class MainNav extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/mountains">Mountains</NavLink></li>
          <li><NavLink to="/forrests">Forrests</NavLink></li>
          <li><NavLink to="/dogs">Dogs</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
