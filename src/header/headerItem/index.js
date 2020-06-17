import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../';

import headerItemStyles from './_headerItem.scss';

const HeaderItem = ({ icon, children, ...props }) => {
  return <div className={headerItemStyles.headerItem} {...props}>
    {
      icon && <Icon name={icon} />
    }
    {children}
  </div>
}

HeaderItem.defaultProps = {
  children: '',
};

HeaderItem.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string,
};

export default HeaderItem;