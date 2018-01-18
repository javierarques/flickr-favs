import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem';
import './Gallery.css';

const Gallery = ({ images }) => {
  const errorMessage = (
    <p className="Gallery-emptyMessage">
      Ooops, we haven't found anything here.
    </p>
  );

  const galleryItems = images.ids.map(id => {
    const image = images.byId[id];
    return (
      <div className="Gallery-item" key={id}>
        <GalleryItem image={image} />
      </div>
    );
  });

  if (images.ids.length === 0) return errorMessage;

  return <div className="Gallery">{galleryItems}</div>;
};

Gallery.propTypes = {
  images: PropTypes.object.isRequired
};

export default Gallery;
