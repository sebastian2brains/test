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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var icons = {"size-1":"_E20oA","size-2":"_1LAUs","size-3":"_3tmzu","size-4":"_f8f2b","size-5":"_3WQf-","size-6":"_325my","size-7":"_vbJDw","size-8":"_HfeIC","icon-alarm":"_1UfCs","icon-alert":"_1sBsM","icon-app-notification":"_k6COO","icon-block":"_2FJt0","icon-bookmark":"_2Gg_H","icon-bug":"_1oFzp","icon-check-double":"_2pvnG","icon-check":"_Wb2XK","icon-cloud-disable":"_j_7gN","icon-cloud-download":"_1dzy1","icon-cloud-upload":"_2jnFK","icon-cloud":"_XL8Xi","icon-cogwheel":"_3mCNb","icon-copy":"_1fOSF","icon-cross":"_10QIh","icon-cut":"_3fs14","icon-dashboard":"_QRta1","icon-down":"_HXmn3","icon-download-queue":"_3ICli","icon-download":"_2SdS4","icon-draft":"_P7At8","icon-exit-fullscreen":"_Mh01S","icon-eye-close":"_1KjPQ","icon-eye-open":"_3ATsw","icon-female-user":"_2Dfx_","icon-file":"_3bdqj","icon-filter":"_295_z","icon-flag":"_1TXC1","icon-fullscreen":"_FIx0R","icon-heart":"_2g-zt","icon-help":"_1qlUa","icon-home":"_2JGHi","icon-information":"_2iZcp","icon-left":"_1WSQ-","icon-lifebuoy":"_1SMNH","icon-list":"_ZRgfq","icon-loading":"_3CMbC","icon-lock":"_163V5","icon-login":"_2ii93","icon-logout":"_1Z960","icon-menu-burger":"_2boVJ","icon-menu-dots":"_Li-Ov","icon-microphone-disable":"_1bA0I","icon-microphone":"_TfNxZ","icon-minus":"_2QDQO","icon-note":"_38j6H","icon-notification-disable":"_K1T2z","icon-notification":"_2Ra63","icon-paste":"_51DLi","icon-plus":"_1HBpS","icon-power-sign":"_1mx6V","icon-print":"_1GulE","icon-puzzle":"_2lbdS","icon-refresh":"_Lubaw","icon-reply-all":"_3KEs9","icon-reply":"_8CChY","icon-right":"_xteAB","icon-save":"_2bqpv","icon-screenshot":"_3SlDa","icon-search-alt":"_1TlAn","icon-search-check":"_2TIsj","icon-search-cross":"_2NZWr","icon-search-minus":"_3c04X","icon-search-plus":"_3deTb","icon-share":"_3rHQW","icon-shield":"_2HTIc","icon-snooze":"_1H3-p","icon-star":"_ot_K-","icon-stars":"_3n6WS","icon-sync":"_g4AKq","icon-task":"_2iDpn","icon-time":"_rVrZO","icon-trash-empty":"_2rUqI","icon-trash-full":"_2M4JD","icon-trash":"_H5UfA","icon-umbrella":"_1MSD1","icon-unlock":"_5VZLW","icon-up":"_1tEMX","icon-upload-queue":"_2EQnt","icon-upload":"_MTrj9","icon-user":"_2cuT3","icon-verification-fail":"_3CYbD","icon-verification":"_3hYBR","icon-wrench":"_2swwf","icon-write":"_2oNry"};

var Icon = function Icon(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'alarm' : _ref$name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '1' : _ref$size,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "size"]);

  var icon = icons["icon-" + name];
  var sizeSelected = icons["size-" + size] || '1';
  return /*#__PURE__*/React.createElement("i", _extends({}, props, {
    width: "25",
    className: "coopeuch-icon " + icon + " " + sizeSelected
  }));
};

var gridStyles = {"container":"_14kEn","container-fluid":"_3HzEQ","container-sm":"_z_9u9","container-md":"_2qcSz","container-lg":"_3VnX7","container-xl":"_bhEqE","row":"_UYIH9","no-gutters":"_3497d","col":"_WdUKx","col-1":"_2oac2","col-2":"_2aKQ6","col-3":"_1Ja7k","col-4":"_b0o_p","col-5":"_2y9KV","col-6":"_j6U_N","col-7":"_2cnib","col-8":"_j_GRF","col-9":"_3BV2S","col-10":"_aijt7","col-11":"_1uF6h","col-12":"_16Mq4","col-auto":"_2Mnx4","col-sm-1":"_g_BYh","col-sm-2":"_p2Bkv","col-sm-3":"_2tBAn","col-sm-4":"_2Zrnf","col-sm-5":"_gq2Q6","col-sm-6":"_36wvN","col-sm-7":"_-xjYm","col-sm-8":"_qCgI9","col-sm-9":"_jglMn","col-sm-10":"_1Ddzm","col-sm-11":"_qAOmb","col-sm-12":"_360Zl","col-sm":"_2eo6T","col-sm-auto":"_xYrp3","col-md-1":"_1MDP_","col-md-2":"_QnY1p","col-md-3":"_2nlsV","col-md-4":"_HQIaP","col-md-5":"_1NiLw","col-md-6":"_3bPY2","col-md-7":"_wciee","col-md-8":"_1H4wt","col-md-9":"_KrrZO","col-md-10":"_1gKWm","col-md-11":"_1j8Cn","col-md-12":"_ExYPp","col-md":"_1Jn07","col-md-auto":"_1hpEj","col-lg-1":"_1kYkS","col-lg-2":"_3Ve2f","col-lg-3":"_38JX2","col-lg-4":"_1fUJA","col-lg-5":"_uKYiC","col-lg-6":"_jq4-x","col-lg-7":"_4TRJM","col-lg-8":"_28FDI","col-lg-9":"_5od1R","col-lg-10":"_3l02V","col-lg-11":"_1M3kU","col-lg-12":"_3b23J","col-lg":"_g2MV9","col-lg-auto":"_38l7t","col-xl-1":"_1TFKO","col-xl-2":"_3H5NW","col-xl-3":"_2-3I8","col-xl-4":"_2bCzv","col-xl-5":"_FiM51","col-xl-6":"_22zbY","col-xl-7":"_Uz6KO","col-xl-8":"_3xW-U","col-xl-9":"_tx7dN","col-xl-10":"_g8oUp","col-xl-11":"_1NMog","col-xl-12":"_3xWBZ","col-xl":"_1obk1","col-xl-auto":"_3B4QJ","row-cols-1":"_2KDZX","row-cols-2":"_2AZ0L","row-cols-3":"_1_Jez","row-cols-4":"_TPZ-D","row-cols-5":"_2VBE2","row-cols-6":"_1NJXc","order-first":"_1ZEA2","order-last":"_1FlxM","order-0":"_3g6N8","order-1":"_27fZm","order-2":"_1-n0m","order-3":"_1rlAk","order-4":"_1xXWr","order-5":"_2fRKt","order-6":"_2TwlZ","order-7":"_OxRQt","order-8":"_Fniow","order-9":"_1TRrL","order-10":"_2qPqQ","order-11":"_Uy2O6","order-12":"_1Pbsy","offset-1":"_2Robc","offset-2":"_Zx4LU","offset-3":"_1RMUT","offset-4":"_lKEsr","offset-5":"_1C2Lc","offset-6":"_L8nKJ","offset-7":"_2wdLz","offset-8":"_2cugz","offset-9":"_2f92V","offset-10":"_3HEcr","offset-11":"_1FjQ3","row-cols-sm-1":"_2Cqfh","row-cols-sm-2":"_aRq2C","row-cols-sm-3":"_mdj6b","row-cols-sm-4":"_2YLRY","row-cols-sm-5":"_2ytCO","row-cols-sm-6":"_2Sv2Y","order-sm-first":"_37-vl","order-sm-last":"_nQLHh","order-sm-0":"_1nBLx","order-sm-1":"_3B5ZD","order-sm-2":"_2_7dp","order-sm-3":"_fFJcI","order-sm-4":"_1P-il","order-sm-5":"_3svwq","order-sm-6":"_2-X2m","order-sm-7":"_qv6ue","order-sm-8":"_1mVZg","order-sm-9":"_3leZv","order-sm-10":"_14eYB","order-sm-11":"_3fHA9","order-sm-12":"_3YGbr","offset-sm-0":"_Ji6GE","offset-sm-1":"_1xwIb","offset-sm-2":"_1uaVT","offset-sm-3":"_3JY3T","offset-sm-4":"_1UZxV","offset-sm-5":"_1sjCS","offset-sm-6":"_shONY","offset-sm-7":"_3apzC","offset-sm-8":"_1VVCu","offset-sm-9":"_2lE77","offset-sm-10":"_1Jg_Q","offset-sm-11":"_1VzVm","row-cols-md-1":"_3ROj2","row-cols-md-2":"_2NJM4","row-cols-md-3":"_3IouR","row-cols-md-4":"_1zciP","row-cols-md-5":"_3GPlG","row-cols-md-6":"_3Yypo","order-md-first":"_YId5-","order-md-last":"_FoL1t","order-md-0":"_11X2_","order-md-1":"_29ppz","order-md-2":"_BX_wA","order-md-3":"_3vovI","order-md-4":"_1DG-r","order-md-5":"_1t-wS","order-md-6":"_xhpHy","order-md-7":"_1KW3a","order-md-8":"_12iOD","order-md-9":"_2o7SZ","order-md-10":"_30TSh","order-md-11":"_3a2ES","order-md-12":"_17gjx","offset-md-0":"_3SIYS","offset-md-1":"_9sDKs","offset-md-2":"_2LaPL","offset-md-3":"_3tebD","offset-md-4":"_18n2k","offset-md-5":"_joIgt","offset-md-6":"_1q1LS","offset-md-7":"_K5T5U","offset-md-8":"_1bjmQ","offset-md-9":"_1jm7r","offset-md-10":"_1SlPm","offset-md-11":"_PRoM9","row-cols-lg-1":"_1l-Ab","row-cols-lg-2":"_1VCF7","row-cols-lg-3":"_38pSz","row-cols-lg-4":"_3MNUX","row-cols-lg-5":"_1ZPJw","row-cols-lg-6":"_25fN8","order-lg-first":"_6acFv","order-lg-last":"_2AuqS","order-lg-0":"_2GeAp","order-lg-1":"_1H7K7","order-lg-2":"_MYlUI","order-lg-3":"_3Q3rS","order-lg-4":"_Rl2vD","order-lg-5":"_2mrT8","order-lg-6":"_3FBi8","order-lg-7":"_3-wtn","order-lg-8":"_2KbpA","order-lg-9":"_2-Zpx","order-lg-10":"_1Ksq5","order-lg-11":"_3oMde","order-lg-12":"_3tvoB","offset-lg-0":"_3ANrG","offset-lg-1":"_1dJCm","offset-lg-2":"_7RGUZ","offset-lg-3":"_3HK2f","offset-lg-4":"_2j5R6","offset-lg-5":"_2QCMg","offset-lg-6":"_3jf4w","offset-lg-7":"_pOUQI","offset-lg-8":"_2fHoJ","offset-lg-9":"_1U4zu","offset-lg-10":"_16S5i","offset-lg-11":"_2SkJN","row-cols-xl-1":"_3RG4D","row-cols-xl-2":"_ZvXCx","row-cols-xl-3":"_EUhdv","row-cols-xl-4":"_3RRjt","row-cols-xl-5":"_1Cq7j","row-cols-xl-6":"_3XAEM","order-xl-first":"_3AJuA","order-xl-last":"_289w5","order-xl-0":"_3wkjk","order-xl-1":"_1qVNF","order-xl-2":"_3KD7H","order-xl-3":"_2CmD8","order-xl-4":"_3hL_C","order-xl-5":"_YEmoW","order-xl-6":"_3iHlB","order-xl-7":"_1D3Bm","order-xl-8":"_2lHpd","order-xl-9":"_IMgOv","order-xl-10":"_2gsV6","order-xl-11":"_1cf7J","order-xl-12":"_2iwf0","offset-xl-0":"_1xbZ5","offset-xl-1":"_rSZgC","offset-xl-2":"_2-q6r","offset-xl-3":"_18aVH","offset-xl-4":"_L_fbC","offset-xl-5":"_1-42j","offset-xl-6":"_1nSva","offset-xl-7":"_27qri","offset-xl-8":"_3wrlN","offset-xl-9":"_JTcR4","offset-xl-10":"_2Lf0i","offset-xl-11":"_2pahu"};

var Grid = function Grid(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'div' : _ref$variant,
      container = _ref.container,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "container", "children"]);

  console.log(gridStyles);
  var styles = container ? [gridStyles.row] : [gridStyles.col];

  if (props.sm) {
    styles = styles.concat(gridStyles["col-sm-" + props.sm]);
  }

  if (props.md) {
    styles = styles.concat(gridStyles["col-md-" + props.md]);
  }

  if (props.lg) {
    styles = styles.concat(gridStyles["col-lg-" + props.lg]);
  }

  if (props.xl) {
    styles = styles.concat(gridStyles["col-xl-" + props.xl]);
  }

  return React.createElement(variant, _extends({}, props, {
    className: styles.concat(props.className || '').join(' ')
  }), children);
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, "a"), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, "b")), /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text));
};

export { Button, ExampleComponent, Grid, Icon };
//# sourceMappingURL=index.modern.js.map
