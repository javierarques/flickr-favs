import React from 'react';
import './FavIcon.css';

const FavIcon = () => (
  <svg
    className="FavIcon"
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <circle
        className="FavIcon-circle"
        fill="#e0e3e4"
        cx="16"
        cy="16"
        r="16"
      />
      <path
        className="FavIcon-heart"
        d="M16 26.28l-1.308-1.306C9.835 20.683 6.66 17.792 6.66 14.247c0-2.891 2.242-5.13 5.138-5.13 1.588 0 3.176.746 4.203 1.959 1.027-1.213 2.615-1.959 4.203-1.959 2.896 0 5.138 2.239 5.138 5.13 0 3.545-3.176 6.436-8.033 10.727L16 26.279z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default FavIcon;
