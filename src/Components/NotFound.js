import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className='not-found'>
        <h3>Sorry, that page doesn't exist!</h3>
        <p>Try clicking any of the buttons or searching for a tag using the input box above.</p>
      </div>
    );
  }
}

export default NotFound;
