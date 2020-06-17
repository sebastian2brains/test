import React from 'react';
import PropTypes from 'prop-types';
import Styles from './_header.scss';

import { Grid, HeaderProfileItem } from '../';

const Header = ({ children, logo, logOut, userData, ...props }) => {
  const headerStyleContainer = [Styles.header].concat(props.className).join(' ');

  return <Grid row className={headerStyleContainer}>
    <Grid col={7} xl={8} className={Styles.headerOptionsContainer}>
      <Grid row className={Styles.headerLeftArea}>
        {
          logo && <Grid col={3} xl={4} className={Styles.headerLogoContainer}>
            {logo}
          </Grid>
        }
        {children}
      </Grid>
    </Grid>
    <Grid col={3} lg={4} xl={3} className={Styles.profileItemContainer}>
      <HeaderProfileItem name={userData.name} date={userData.date} />
    </Grid>
    {
      logOut && <Grid col={1} className={Styles.flex}>
        {logOut}
      </Grid>
    }
  </Grid>
}

Header.defaultProps = {
  userData: {
    name: 'coopeuch username',
    date: new Date()
  }
}

Header.propTypes = {
  logo: PropTypes.element,
  logOut: PropTypes.element,
  userData: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.date
  })
}

export default Header;