import React from 'react';
import icons from '../scss/_coopeuch-icon.scss';

const Icon = ({ name = 'alarm' }) => {
  const icon = icons[`icon-${name}`];
  return <div width="25" className={`coopeuch-icon ${icon}`} />
}

export default Icon;
