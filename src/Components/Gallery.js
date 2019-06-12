import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = props => {
  const results = props.data;
  let flickrImages = results.map((img, i) => {
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
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>{flickrImages}</ul>
    </div>
  );
};

export default Gallery;
