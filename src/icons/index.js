import React from 'react';
import icons from '../scss/_coopeuch-icon.scss';

const Icon = ({ name = 'alarm', size = '1', className, ...props }) => {
  const icon = icons[`icon-${name}`];
  const sizeSelected = icons[`size-${size}`] || '1';
  return <i {...props} className={`coopeuch-icon ${icon} ${sizeSelected} ${className}`} />
}

export default Icon;
