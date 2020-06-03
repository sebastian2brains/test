import React from 'react';

var styles = {"test":"_3ybTi"};

var styles$1 = {"elevation-1":"_5h7nw","elevation-2":"_3d4Cf","elevation-3":"_2q8Nc","elevation-4":"_32nCN","elevation-5":"_rhvLq","elevation-element-1":"_MupO8","elevation-element-2":"_3-v1q","btn":"_1rTjI","elevation-element-3":"_3wyMt","elevation-element-4":"_1_HsB","btn-secondary-green":"_1oHO9","btn-secondary-green-outline":"_2wUjt","btn-secondary-blue":"_18s3n","btn-secondary-blue-outline":"_10sZo","btn-secondary-purple":"_1w9Pd","btn-secondary-purple-outline":"_1ebxm","btn-primary-outline":"_388da","btn-primary":"_qR-dP","large":"_2Yjez"};

var Button = function Button(_ref) {
  var children = _ref.children,
      size = _ref.size,
      color = _ref.color,
      variant = _ref.variant,
      disabled = _ref.disabled;
  var btnSize = size === 'large' ? 'large' : 'regular';
  var btnVariant = variant === 'outline' ? "-" + variant : '';
  return /*#__PURE__*/React.createElement("button", {
    className: styles$1.btn + " " + (styles$1[btnSize] || '') + " " + (styles$1["btn-" + color + btnVariant] || ''),
    disabled: disabled
  }, " ", children, " ");
};

Button.defaultProps = {
  size: 'medium',
  variant: '',
  disabled: false,
  onClick: function onClick() {
    return null;
  }
};

var icons = {"icon-alarm":"_1UfCs","icon-alert":"_1sBsM","icon-app-notification":"_k6COO","icon-block":"_2FJt0","icon-bookmark":"_2Gg_H","icon-bug":"_1oFzp","icon-check-double":"_2pvnG","icon-check":"_Wb2XK","icon-cloud-disable":"_j_7gN","icon-cloud-download":"_1dzy1","icon-cloud-upload":"_2jnFK","icon-cloud":"_XL8Xi","icon-cogwheel":"_3mCNb","icon-copy":"_1fOSF","icon-cross":"_10QIh","icon-cut":"_3fs14","icon-dashboard":"_QRta1","icon-down":"_HXmn3","icon-download-queue":"_3ICli","icon-download":"_2SdS4","icon-draft":"_P7At8","icon-exit-fullscreen":"_Mh01S","icon-eye-close":"_1KjPQ","icon-eye-open":"_3ATsw","icon-female-user":"_2Dfx_","icon-file":"_3bdqj","icon-filter":"_295_z","icon-flag":"_1TXC1","icon-fullscreen":"_FIx0R","icon-heart":"_2g-zt","icon-help":"_1qlUa","icon-home":"_2JGHi","icon-information":"_2iZcp","icon-left":"_1WSQ-","icon-lifebuoy":"_1SMNH","icon-list":"_ZRgfq","icon-loading":"_3CMbC","icon-lock":"_163V5","icon-login":"_2ii93","icon-logout":"_1Z960","icon-menu-burger":"_2boVJ","icon-menu-dots":"_Li-Ov","icon-microphone-disable":"_1bA0I","icon-microphone":"_TfNxZ","icon-minus":"_2QDQO","icon-note":"_38j6H","icon-notification-disable":"_K1T2z","icon-notification":"_2Ra63","icon-paste":"_51DLi","icon-plus":"_1HBpS","icon-power-sign":"_1mx6V","icon-print":"_1GulE","icon-puzzle":"_2lbdS","icon-refresh":"_Lubaw","icon-reply-all":"_3KEs9","icon-reply":"_8CChY","icon-right":"_xteAB","icon-save":"_2bqpv","icon-screenshot":"_3SlDa","icon-search-alt":"_1TlAn","icon-search-check":"_2TIsj","icon-search-cross":"_2NZWr","icon-search-minus":"_3c04X","icon-search-plus":"_3deTb","icon-share":"_3rHQW","icon-shield":"_2HTIc","icon-snooze":"_1H3-p","icon-star":"_ot_K-","icon-stars":"_3n6WS","icon-sync":"_g4AKq","icon-task":"_2iDpn","icon-time":"_rVrZO","icon-trash-empty":"_2rUqI","icon-trash-full":"_2M4JD","icon-trash":"_H5UfA","icon-umbrella":"_1MSD1","icon-unlock":"_5VZLW","icon-up":"_1tEMX","icon-upload-queue":"_2EQnt","icon-upload":"_MTrj9","icon-user":"_2cuT3","icon-verification-fail":"_3CYbD","icon-verification":"_3hYBR","icon-wrench":"_2swwf","icon-write":"_2oNry"};

var Icon = function Icon(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'alarm' : _ref$name;
  var icon = icons["icon-" + name];
  return /*#__PURE__*/React.createElement("div", {
    width: "25",
    className: "coopeuch-icon " + icon
  });
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { Button, ExampleComponent, Icon };
//# sourceMappingURL=index.modern.js.map
