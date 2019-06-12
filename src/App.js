import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import apiKey from './config';

import Header from './Components/Header';
import Gallery from './Components/Gallery';
import NotFound from './Components/NotFound';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imagesTitle: '',
      mountains: [],
      forrests: [],
      dogs: []
    };
  }

  performSearch = query => {
    this.getImagesFromFlickr(query);
  };

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
          this.setState({
            images: responseData.photos.photo,
            imagesTitle: tag
          });
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Header onSearch={this.performSearch} />
        <section className='photo-container'>
          <Switch>
            <Route
              path='/mountains'
              render={() => (
                <Gallery title={'Mountains'} data={this.state.mountains} />
              )}
            />
            <Route
              path='/forrests'
              render={() => (
                <Gallery title={'Forrests'} data={this.state.forrests} />
              )}
            />
            <Route
              path='/dogs'
              render={() => <Gallery title={'Dogs'} data={this.state.dogs} />}
            />
            <Route
              path='/query/:query'
              render={() => (
                <Gallery
                  title={this.state.imagesTitle}
                  data={this.state.images}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
