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
      dogs: [],
      loading: true
    };
  }

  // Calls the API from a query in the search box
  performSearch = query => {
    this.getImagesFromFlickr(query);
  };

  // Inits call for three main categories
  componentDidMount() {
    this.getImagesFromFlickr('mountains');
    this.getImagesFromFlickr('forrest');
    this.getImagesFromFlickr('dogs');
  }

  // If tag equals mountains, forrest, or dogs, set the state to the results of that call
  // If other, set the state to the results of whatever the user searched for
  // Sets loading to false, and back to true once the API call is through
  getImagesFromFlickr = tag => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        if (tag === 'mountains') {
          this.setState({
            mountains: responseData.photos.photo,
            loading: false
          });
        } else if (tag === 'forrest') {
          this.setState({
            forrests: responseData.photos.photo,
            loading: false
          });
        } else if (tag === 'dogs') {
          this.setState({ dogs: responseData.photos.photo, loading: false });
        } else {
          this.setState({
            images: responseData.photos.photo,
            imagesTitle: tag,
            loading: false
          });
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    this.setState({ loading: true });
  };

  // Renders the header and gallery components.  Also uses react-router to display routes
  render() {
    return (
      <BrowserRouter>
        <Header onSearch={this.performSearch} />
        <section className='photo-container'>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <h3>Search for a tag in the search box above!</h3>}
            />
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
              path='/search/:tag'
              render={() => (
                <Gallery
                  title={this.state.imagesTitle}
                  data={this.state.images}
                  loading={this.state.loading}
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
