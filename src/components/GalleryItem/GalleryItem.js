import React from 'react';
import PropTypes from 'prop-types';
import './GalleryItem.css';

const GalleryItem = ({ image }) => {
  const { link, title, src } = image;
  return (
    <article className="GalleryItem">
      <a className="GalleryItem-wrapper" href={link} title={title}>
        <div className="GalleryItem-imageWrapper">
          <img
            src={src}
            alt={title}
            title={title}
            className="GalleryItem-image"
          />
        </div>
        {title && <h3 className="GalleryItem-title">{title}</h3>}
      </a>
    </article>
  );
};

GalleryItem.propType = {
  image: PropTypes.object.isRequired
};

export default GalleryItem;
