import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import apiKey from './config';

import Header from './Components/Header';
import Gallery from './Components/Gallery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      mountains: [],
      forrests: [],
      dogs: []
    };
  }

  componentDidMount() {
    this.getImagesFromFlickr('mountains');
    this.getImagesFromFlickr('forrest');
    this.getImagesFromFlickr('dogs');
  }

  getImagesFromFlickr = tag => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        if (tag === 'mountains') {
          this.setState({ mountains: responseData.photos.photo });
        } else if (tag === 'forrest') {
          this.setState({ forrests: responseData.photos.photo });
        } else if (tag === 'dogs') {
          this.setState({ dogs: responseData.photos.photo });
        } else {
          this.setState({ images: responseData.photos.photo });
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <div className='photo-container'>
              <Route
                path='/mountains'
                render={() => <Gallery data={this.state.mountains} />}
              />
              <Route
                path='/forrests'
                render={() => <Gallery data={this.state.forrests} />}
              />
              <Route
                path='/dogs'
                render={() => <Gallery data={this.state.dogs} />}
              />
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
