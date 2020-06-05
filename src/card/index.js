import React from 'react';
import PropTypes from 'prop-types';
import styles from './_card.scss';

const Card = ({ border, animated, children, ...props }) => {
  console.log(props.onClick);


  let cardStules = [styles.card];
  cardStules = border ? cardStules.concat(styles.border) : cardStules.concat(styles['elevation-1']);

  if (props.onClick) {
    cardStules = cardStules.concat(styles.animated);
  }

  return <div {...props} className={cardStules.concat(props.className).join(' ')}>
    {children}
  </div>
}

Card.defaultProps = {
  border: false,
  animated: false,
};

Card.propTypes = {
  onClick: PropTypes.func,
  border: PropTypes.bool,
  animated: PropTypes.bool
};

export default Card;