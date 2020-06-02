import React from 'react';
import path from 'path';

const Icon = ({ name = 'alarm' }) => {
  const file = path.resolve(`node_modules/library-1/icons/${name}.svg`);
  console.log(file);

  const imagex = require(file);
  return <img width="25" src={imagex} />
}

export default Icon;
