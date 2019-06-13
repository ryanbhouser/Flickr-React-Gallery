import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {
  const results = props.data;
  let flickrImages;

  // If there are results, set flickrImages to those results and create a gallery item for each one
  // Else, display a friendly message that there were no results
  if (results.length > 1) {
    flickrImages = results.map((img, i) => {
      return (
        <GalleryItem
          key={i}
          farm={img.farm}
          serverID={img.id}
          photoID={img.id}
          secret={img.secret}
          title={img.title}
        />
      );
    });
  } else {
    flickrImages = 'Sorry, no results were found.';
  }

  return (
    <div>
      <h3>{props.title}</h3>
      {/* // If props.loading is true, show a loading message */}
      <ul>{props.loading ? <p>Loading...</p> : flickrImages}</ul>
    </div>
  );
};

export default Gallery;
