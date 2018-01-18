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

  const galleryItems = images.map(
    ({ media: { m: image }, title, author, link }) => {
      return (
        <div className="Gallery-item" key={image}>
          <GalleryItem image={image} link={link} title={title} />
        </div>
      );
    }
  );

  if (images.length === 0) return errorMessage;

  return <div className="Gallery">{galleryItems}</div>;
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;
