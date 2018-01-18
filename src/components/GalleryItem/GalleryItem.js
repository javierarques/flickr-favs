import React from 'react';
import PropTypes from 'prop-types';
import './GalleryItem.css';

const GalleryItem = ({ image, link, title }) => (
  <article className="GalleryItem">
    <a className="GalleryItem-wrapper" href={link} title={title}>
      <div className="GalleryItem-imageWrapper">
        <img
          src={image}
          alt={title}
          title={title}
          className="GalleryItem-image"
        />
      </div>
      {title && <h3 className="GalleryItem-title">{title}</h3>}
    </a>
  </article>
);

GalleryItem.propType = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GalleryItem;
