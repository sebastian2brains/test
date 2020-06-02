import React from 'react';
import styles from '../scss/_buttons.scss';

const Button = ({ children, size, color, variant, disabled }) => {
  const btnSize = size === 'large' ? 'large' : 'regular';
  const btnVariant = variant === 'outline' ? `-${variant}` : '';
  return <button className={`${styles.btn} ${styles[btnSize] || ''} ${styles[`btn-${color}${btnVariant}`] || ''}`} disabled={disabled} > {children} </button>;
}

Button.defaultProps = {
  size: 'medium',
  variant: '',
  disabled: false,
  onClick: () => null
};

export default Button;