import React from 'react'
import styles from './styles.module.css'
import Button from './buttons';
import Icon from './icons';
import Grid from './grid';

import './scss/custom.scss';

export const ExampleComponent = ({ text }) => {
  return <div className="container">
    <div className="row">
      <div className="col">a</div>
      <div className="col">b</div>
    </div>
    <div className={styles.test}>Example Component: {text}</div>
  </div>
}

export {
  Button,
  Icon,
  Grid
};
