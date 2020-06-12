import React from 'react';
import PropTypes from 'prop-types';
import icons from '../scss/_coopeuch-icon.scss';

const Icon = ({ name, size, className, ...props }) => {
  const icon = icons[`icon-${name}`];
  const sizeSelected = icons[`size-${size}`] || '1';
  return <i {...props} className={`coopeuch-icon ${icon} ${sizeSelected} ${className || ''}`} />
}

Icon.defaultProps = {
  name: 'alarm',
  size: 2
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};

export default Icon;
