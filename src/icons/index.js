import React, { Fragment } from 'react';
import path from 'path';
import iconss from '../out/css/sprite.css'


const Icon = ({ name = 'alarm' }) => {
  const file = path.resolve(`library/dist/icons/${name}.svg`);
  console.log(file);

  // const imagex = require(`./${name}.svg`);
  return <>
    <div style={{ height: '32px', width: '32px' }} width="25" className={iconss[`svg-${name}`]} />
    <img width="25" src={file} />
  </>
}

export default Icon;
