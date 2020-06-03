import React from 'react';
import icons from '../scss/_coopeuch-icon.scss';

const Icon = ({ name = 'alarm', size = '1', ...props }) => {
  const icon = icons[`icon-${name}`];
  const sizeSelected = icons[`size-${size}`] || '1';
  return <i {...props} width="25" className={`coopeuch-icon ${icon} ${sizeSelected}`} />
}

export default Icon;
