import React from 'react';

// 404-like message to display if a user enters a route that doesn't exist
class NotFound extends React.Component {
  render() {
    return (
      <div className='not-found'>
        <h3>Try again!</h3>
        <p>Use the search input above to look for images, or click on the buttons.</p>
      </div>
    );
  }
}

export default NotFound;
