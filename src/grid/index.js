import React from 'react';
import PropTypes from 'prop-types';
import gridStyles from "../scss/_grid.scss";

// const Grid = ({ variant = 'div', children }) => React.createElement(variant, { className: gridStyles.row }, children);
const Grid = ({ variant = 'div', row, children, ...props }) => {
  let styles = row ? [gridStyles.row] : [gridStyles.col];

  if (props.col) {
    styles = styles.concat(gridStyles[`col-${props.col}`]);
  }

  if (props.sm) {
    styles = styles.concat(gridStyles[`col-sm-${props.sm}`]);
  }

  if (props.md) {
    styles = styles.concat(gridStyles[`col-md-${props.md}`]);
  }

  if (props.lg) {
    styles = styles.concat(gridStyles[`col-lg-${props.lg}`]);
  }

  if (props.xl) {
    styles = styles.concat(gridStyles[`col-xl-${props.xl}`]);
  }

  return React.createElement(variant, { ...props, className: styles.concat(props.className || '').join(' ') }, children);
};

Grid.defaultProps = {
  variant: 'div',
  onClick: () => null
};

Grid.propTypes = {
  variant: PropTypes.string,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  onClick: PropTypes.func,
  row: PropTypes.bool
};


export default Grid;