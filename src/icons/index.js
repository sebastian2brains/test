import React, { Fragment } from 'react';
import icons from '../scss/_coopeuch-icon.scss';

const Icon = ({ name = 'alarm' }) => {
  return <div width="25" className={icons[`icon-${name}`]} />
}

export default Icon;
