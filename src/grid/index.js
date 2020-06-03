import React from 'react';
import gridStyles from "../scss/_grid.scss";

// const Grid = ({ variant = 'div', children }) => React.createElement(variant, { className: gridStyles.row }, children);
const Grid = ({ variant = 'div', container, children, ...props }) => {
  console.log(gridStyles);

  let styles = container ? [gridStyles.row] : [gridStyles.col];


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

export default Grid;