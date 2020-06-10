import React from 'react';
import { Icon } from "../../";
import headerStyle from './_headerProfileItem.scss';

export const HeaderProfileItem = ({ name, date = new Date() }) => {
  const options = { day: 'numeric', year: 'numeric', month: 'short' };

  return <div className={`${headerStyle.profileItemContainer}`}>
    <div>
      <div className={headerStyle.circleAvatar}>XR</div>
    </div>
    <div className={headerStyle.profileBox}>
      <span className={headerStyle.profileBoxUsername}>{name}</span>
      <p className={headerStyle.date}><small>Último acceso {date.toLocaleDateString('es-ES', options)} - {`${date.getHours()}:${date.getMinutes()}`} hrs </small></p>
    </div>
    <Icon name="arrow-right" className="px-1" />
  </div>
}

export default HeaderProfileItem;