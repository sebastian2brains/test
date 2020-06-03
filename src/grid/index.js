import React from 'react';
import gridStyles from "../scss/_grid.scss";

const Grid = ({ variant = 'div', children }) => React.createElement(variant, { className: gridStyles.row }, children);
// const Grid = () => <div>hoal mundo</div>;
export default Grid;