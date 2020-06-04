import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons';
import styles from '../scss/_buttons.scss';

const Button = ({ children, size, color, variant, disabled, prefix, suffix }) => {
  const btnVariant = variant !== '' ? `-${variant}` : '';
  console.log(btnVariant);

  return <button className={`${styles.btn} ${styles[`btn-${color}${btnVariant}`] || ''}`} disabled={disabled} >
    {prefix && <Icon className={styles.prefix} name={prefix} />}
    {variant !== 'text' ? children : <span>{children}</span>}
    {suffix && <Icon className={styles.suffix} name={suffix} />}
  </button>;
}

Button.defaultProps = {
  variant: '',
  disabled: false,
  onClick: () => null
};

Button.propTypes = {
  variant: PropTypes.string
};

export default Button;