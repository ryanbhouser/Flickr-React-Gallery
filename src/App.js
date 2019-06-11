import React from 'react';
// import apiKey from './config';

import Header from './Components/Header';
import MainNav from './Components/MainNav';
import Gallery from './Components/Gallery';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainNav />
        <Gallery />
      </div>
    );
  }
}

export default App;
