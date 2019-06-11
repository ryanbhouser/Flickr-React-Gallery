import React from 'react';

// Map over each of the images that get returned from Flickr and create a GalleryItem

const GalleryItem = props => {
  const { id, farm, serverID, photoID, secret, title } = props;
  return (
    <li>
      <img
        key={id}
        src={`https://farm${farm}.staticflickr.com/${serverID}/${photoID}_${secret}.jpg`}
        alt={title}
      />
    </li>
  );
};

export default GalleryItem;
