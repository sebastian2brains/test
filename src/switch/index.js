import React from 'react';
import styles from './_switch.scss';

const Switch = ({ status, ...props }) => {
  let switchClass = [styles.switchBar];

  if (status) {
    switchClass = switchClass.concat(styles.active);
  }

  console.log(switchClass);


  return <div data-status={status ? 'on' : 'off'} className={styles.switchContainer} {...props}>
    <div className={switchClass.join(' ')}>
      <div className={styles.circle}></div>
    </div>
  </div>
}

export default Switch;