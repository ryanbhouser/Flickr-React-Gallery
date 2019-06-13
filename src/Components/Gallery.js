import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {
  const results = props.data;
  let flickrImages;

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
      <ul>{props.loading ? <p>Loading...</p> : flickrImages}</ul>
    </div>
  );
};

export default Gallery;
