import React from 'react'
import styles from './styles.module.css'
import Button from './buttons';
import Icon from './icons';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export {
  Button,
  Icon
};
