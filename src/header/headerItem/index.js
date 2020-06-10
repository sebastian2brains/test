import React from 'react';
import { Icon } from '../../';

import headerItemStyles from './_headerItem.scss';

const HeaderItem = ({ icon }) => {
  return <div className={headerItemStyles.headerItem}>
    <Icon name={icon} />
  label
</div>
}

// d-inline-flex flex-column text-center align-items-center p-1 

export default HeaderItem;