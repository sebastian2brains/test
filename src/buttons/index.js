import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons';
import styles from '../scss/_buttons.scss';

const Button = ({ children, color, variant, disabled, prefix, suffix, ...props }) => {
  const btnVariant = variant !== '' ? `-${variant}` : '';

  return <button {...props} className={`${styles.btn} ${styles[`btn-${color}${btnVariant}`] || ''}`} disabled={disabled} >
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
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['', 'outline', 'text']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;