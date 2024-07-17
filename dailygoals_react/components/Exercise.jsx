import React from 'react';

const Exercise = ({ src, alt, description }) => {
  return (
    <li>
      <img src={src} alt={alt} />
      <p>{description}</p>
    </li>
  );
};

export default Exercise;