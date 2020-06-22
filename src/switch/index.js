import React from 'react';
import styles from './_switch.scss';
import PropTypes from 'prop-types';

const Switch = ({ status, ...props }) => {
  let switchClass = [styles.switchBar];

  if (status) {
    switchClass = switchClass.concat(styles.active);
  }

  return <div data-status={status ? 'on' : 'off'} className={styles.switchContainer} {...props}>
    <div className={switchClass.join(' ')}>
      <div className={styles.circle}></div>
    </div>
  </div>
}

Switch.defaultProps = {
  status: false
};

Switch.propTypes = {
  status: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Switch;