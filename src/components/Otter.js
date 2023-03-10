import React from 'react';
import PropTypes from 'prop-types';

function Otter(props) {
  const { name, imageSrc, color } = props;

  return (
    <div className={`${color} otter`}>
      <img className="profile" src={imageSrc} alt="otter" />
      <div className="intro">
        <h2 className="name">{name}</h2>
        <p>
          Otter has an unsophisticated face and is rarely flustered by anything. There have been incidents involving Otter sauntering into villages and gnawing on the houses without a single care.
        </p>
      </div>
    </div>
  );
}

Otter.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Otter;