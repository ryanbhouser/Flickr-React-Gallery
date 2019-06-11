import React from 'react';
// import apiKey from './config';

import Header from './Components/Header';
import MainNav from './Components/MainNav';
import Gallery from './Components/Gallery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5ea4eaa0bd7d7d1d54f9b8db641bb2ba&tags=disney&per_page=24&format=json&nojsoncallback=1'
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ images: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <MainNav />
        <div className='photo-container'>
          <Gallery data={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
