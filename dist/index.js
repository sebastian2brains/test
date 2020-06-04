function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var styles = {"test":"_styles-module__test__3ybTi"};

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

var icons = {"size-1":"__coopeuch-icon__size-1__E20oA","size-2":"__coopeuch-icon__size-2__1LAUs","size-3":"__coopeuch-icon__size-3__3tmzu","size-4":"__coopeuch-icon__size-4__f8f2b","size-5":"__coopeuch-icon__size-5__3WQf-","size-6":"__coopeuch-icon__size-6__325my","size-7":"__coopeuch-icon__size-7__vbJDw","size-8":"__coopeuch-icon__size-8__HfeIC","icon-alarm":"__coopeuch-icon__icon-alarm__1UfCs","icon-alert":"__coopeuch-icon__icon-alert__1sBsM","icon-app-notification":"__coopeuch-icon__icon-app-notification__k6COO","icon-block":"__coopeuch-icon__icon-block__2FJt0","icon-bookmark":"__coopeuch-icon__icon-bookmark__2Gg_H","icon-bug":"__coopeuch-icon__icon-bug__1oFzp","icon-check-double":"__coopeuch-icon__icon-check-double__2pvnG","icon-check":"__coopeuch-icon__icon-check__Wb2XK","icon-cloud-disable":"__coopeuch-icon__icon-cloud-disable__j_7gN","icon-cloud-download":"__coopeuch-icon__icon-cloud-download__1dzy1","icon-cloud-upload":"__coopeuch-icon__icon-cloud-upload__2jnFK","icon-cloud":"__coopeuch-icon__icon-cloud__XL8Xi","icon-cogwheel":"__coopeuch-icon__icon-cogwheel__3mCNb","icon-copy":"__coopeuch-icon__icon-copy__1fOSF","icon-cross":"__coopeuch-icon__icon-cross__10QIh","icon-cut":"__coopeuch-icon__icon-cut__3fs14","icon-dashboard":"__coopeuch-icon__icon-dashboard__QRta1","icon-down":"__coopeuch-icon__icon-down__HXmn3","icon-download-queue":"__coopeuch-icon__icon-download-queue__3ICli","icon-download":"__coopeuch-icon__icon-download__2SdS4","icon-draft":"__coopeuch-icon__icon-draft__P7At8","icon-exit-fullscreen":"__coopeuch-icon__icon-exit-fullscreen__Mh01S","icon-eye-close":"__coopeuch-icon__icon-eye-close__1KjPQ","icon-eye-open":"__coopeuch-icon__icon-eye-open__3ATsw","icon-female-user":"__coopeuch-icon__icon-female-user__2Dfx_","icon-file":"__coopeuch-icon__icon-file__3bdqj","icon-filter":"__coopeuch-icon__icon-filter__295_z","icon-flag":"__coopeuch-icon__icon-flag__1TXC1","icon-fullscreen":"__coopeuch-icon__icon-fullscreen__FIx0R","icon-heart":"__coopeuch-icon__icon-heart__2g-zt","icon-help":"__coopeuch-icon__icon-help__1qlUa","icon-home":"__coopeuch-icon__icon-home__2JGHi","icon-information":"__coopeuch-icon__icon-information__2iZcp","icon-left":"__coopeuch-icon__icon-left__1WSQ-","icon-lifebuoy":"__coopeuch-icon__icon-lifebuoy__1SMNH","icon-list":"__coopeuch-icon__icon-list__ZRgfq","icon-loading":"__coopeuch-icon__icon-loading__3CMbC","icon-lock":"__coopeuch-icon__icon-lock__163V5","icon-login":"__coopeuch-icon__icon-login__2ii93","icon-logout":"__coopeuch-icon__icon-logout__1Z960","icon-menu-burger":"__coopeuch-icon__icon-menu-burger__2boVJ","icon-menu-dots":"__coopeuch-icon__icon-menu-dots__Li-Ov","icon-microphone-disable":"__coopeuch-icon__icon-microphone-disable__1bA0I","icon-microphone":"__coopeuch-icon__icon-microphone__TfNxZ","icon-minus":"__coopeuch-icon__icon-minus__2QDQO","icon-note":"__coopeuch-icon__icon-note__38j6H","icon-notification-disable":"__coopeuch-icon__icon-notification-disable__K1T2z","icon-notification":"__coopeuch-icon__icon-notification__2Ra63","icon-paste":"__coopeuch-icon__icon-paste__51DLi","icon-plus":"__coopeuch-icon__icon-plus__1HBpS","icon-power-sign":"__coopeuch-icon__icon-power-sign__1mx6V","icon-print":"__coopeuch-icon__icon-print__1GulE","icon-puzzle":"__coopeuch-icon__icon-puzzle__2lbdS","icon-refresh":"__coopeuch-icon__icon-refresh__Lubaw","icon-reply-all":"__coopeuch-icon__icon-reply-all__3KEs9","icon-reply":"__coopeuch-icon__icon-reply__8CChY","icon-right":"__coopeuch-icon__icon-right__xteAB","icon-save":"__coopeuch-icon__icon-save__2bqpv","icon-screenshot":"__coopeuch-icon__icon-screenshot__3SlDa","icon-search-alt":"__coopeuch-icon__icon-search-alt__1TlAn","icon-search-check":"__coopeuch-icon__icon-search-check__2TIsj","icon-search-cross":"__coopeuch-icon__icon-search-cross__2NZWr","icon-search-minus":"__coopeuch-icon__icon-search-minus__3c04X","icon-search-plus":"__coopeuch-icon__icon-search-plus__3deTb","icon-share":"__coopeuch-icon__icon-share__3rHQW","icon-shield":"__coopeuch-icon__icon-shield__2HTIc","icon-snooze":"__coopeuch-icon__icon-snooze__1H3-p","icon-star":"__coopeuch-icon__icon-star__ot_K-","icon-stars":"__coopeuch-icon__icon-stars__3n6WS","icon-sync":"__coopeuch-icon__icon-sync__g4AKq","icon-task":"__coopeuch-icon__icon-task__2iDpn","icon-time":"__coopeuch-icon__icon-time__rVrZO","icon-trash-empty":"__coopeuch-icon__icon-trash-empty__2rUqI","icon-trash-full":"__coopeuch-icon__icon-trash-full__2M4JD","icon-trash":"__coopeuch-icon__icon-trash__H5UfA","icon-umbrella":"__coopeuch-icon__icon-umbrella__1MSD1","icon-unlock":"__coopeuch-icon__icon-unlock__5VZLW","icon-up":"__coopeuch-icon__icon-up__1tEMX","icon-upload-queue":"__coopeuch-icon__icon-upload-queue__2EQnt","icon-upload":"__coopeuch-icon__icon-upload__MTrj9","icon-user":"__coopeuch-icon__icon-user__2cuT3","icon-verification-fail":"__coopeuch-icon__icon-verification-fail__3CYbD","icon-verification":"__coopeuch-icon__icon-verification__3hYBR","icon-wrench":"__coopeuch-icon__icon-wrench__2swwf","icon-write":"__coopeuch-icon__icon-write__2oNry"};

var Icon = function Icon(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'alarm' : _ref$name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '1' : _ref$size,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "size", "className"]);

  var icon = icons["icon-" + name];
  var sizeSelected = icons["size-" + size] || '1';
  return /*#__PURE__*/React.createElement("i", _extends({}, props, {
    className: "coopeuch-icon " + icon + " " + sizeSelected + " " + className
  }));
};

var styles$1 = {"elevation-1":"__buttons__elevation-1__5h7nw","elevation-2":"__buttons__elevation-2__3d4Cf","elevation-3":"__buttons__elevation-3__2q8Nc","elevation-4":"__buttons__elevation-4__32nCN","elevation-5":"__buttons__elevation-5__rhvLq","elevation-element-1":"__buttons__elevation-element-1__MupO8","elevation-element-2":"__buttons__elevation-element-2__3-v1q","btn":"__buttons__btn__1rTjI","elevation-element-3":"__buttons__elevation-element-3__3wyMt","elevation-element-4":"__buttons__elevation-element-4__1_HsB","btn-primary":"__buttons__btn-primary__qR-dP","btn-secondary":"__buttons__btn-secondary__15IjF","prefix":"__buttons__prefix__2y1vb","suffix":"__buttons__suffix__2BcL2","btn-primary-outline":"__buttons__btn-primary-outline__388da","btn-primary-text":"__buttons__btn-primary-text__KsHMS","btn-secondary-outline":"__buttons__btn-secondary-outline__GQn7f","btn-secondary-text":"__buttons__btn-secondary-text__2BbSs"};

var _Button$propTypes;

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      variant = _ref.variant,
      disabled = _ref.disabled,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "color", "variant", "disabled", "prefix", "suffix"]);

  var btnVariant = variant !== '' ? "-" + variant : '';
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    className: styles$1.btn + " " + (styles$1["btn-" + color + btnVariant] || ''),
    disabled: disabled
  }), prefix && /*#__PURE__*/React.createElement(Icon, {
    className: styles$1.prefix,
    name: prefix
  }), variant !== 'text' ? children : /*#__PURE__*/React.createElement("span", null, children), suffix && /*#__PURE__*/React.createElement(Icon, {
    className: styles$1.suffix,
    name: suffix
  }));
};

Button.defaultProps = {
  variant: '',
  disabled: false,
  onClick: function onClick() {
    return null;
  }
};
Button.propTypes = (_Button$propTypes = {
  variant: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary'])
}, _Button$propTypes["variant"] = PropTypes.oneOf(['', 'outline', 'text']), _Button$propTypes.onClick = PropTypes.func, _Button$propTypes.disabled = PropTypes.bool, _Button$propTypes);

var gridStyles = {"container":"__grid__container__14kEn","container-fluid":"__grid__container-fluid__3HzEQ","container-sm":"__grid__container-sm__z_9u9","container-md":"__grid__container-md__2qcSz","container-lg":"__grid__container-lg__3VnX7","container-xl":"__grid__container-xl__bhEqE","row":"__grid__row__UYIH9","no-gutters":"__grid__no-gutters__3497d","col":"__grid__col__WdUKx","col-1":"__grid__col-1__2oac2","col-2":"__grid__col-2__2aKQ6","col-3":"__grid__col-3__1Ja7k","col-4":"__grid__col-4__b0o_p","col-5":"__grid__col-5__2y9KV","col-6":"__grid__col-6__j6U_N","col-7":"__grid__col-7__2cnib","col-8":"__grid__col-8__j_GRF","col-9":"__grid__col-9__3BV2S","col-10":"__grid__col-10__aijt7","col-11":"__grid__col-11__1uF6h","col-12":"__grid__col-12__16Mq4","col-auto":"__grid__col-auto__2Mnx4","col-sm-1":"__grid__col-sm-1__g_BYh","col-sm-2":"__grid__col-sm-2__p2Bkv","col-sm-3":"__grid__col-sm-3__2tBAn","col-sm-4":"__grid__col-sm-4__2Zrnf","col-sm-5":"__grid__col-sm-5__gq2Q6","col-sm-6":"__grid__col-sm-6__36wvN","col-sm-7":"__grid__col-sm-7__-xjYm","col-sm-8":"__grid__col-sm-8__qCgI9","col-sm-9":"__grid__col-sm-9__jglMn","col-sm-10":"__grid__col-sm-10__1Ddzm","col-sm-11":"__grid__col-sm-11__qAOmb","col-sm-12":"__grid__col-sm-12__360Zl","col-sm":"__grid__col-sm__2eo6T","col-sm-auto":"__grid__col-sm-auto__xYrp3","col-md-1":"__grid__col-md-1__1MDP_","col-md-2":"__grid__col-md-2__QnY1p","col-md-3":"__grid__col-md-3__2nlsV","col-md-4":"__grid__col-md-4__HQIaP","col-md-5":"__grid__col-md-5__1NiLw","col-md-6":"__grid__col-md-6__3bPY2","col-md-7":"__grid__col-md-7__wciee","col-md-8":"__grid__col-md-8__1H4wt","col-md-9":"__grid__col-md-9__KrrZO","col-md-10":"__grid__col-md-10__1gKWm","col-md-11":"__grid__col-md-11__1j8Cn","col-md-12":"__grid__col-md-12__ExYPp","col-md":"__grid__col-md__1Jn07","col-md-auto":"__grid__col-md-auto__1hpEj","col-lg-1":"__grid__col-lg-1__1kYkS","col-lg-2":"__grid__col-lg-2__3Ve2f","col-lg-3":"__grid__col-lg-3__38JX2","col-lg-4":"__grid__col-lg-4__1fUJA","col-lg-5":"__grid__col-lg-5__uKYiC","col-lg-6":"__grid__col-lg-6__jq4-x","col-lg-7":"__grid__col-lg-7__4TRJM","col-lg-8":"__grid__col-lg-8__28FDI","col-lg-9":"__grid__col-lg-9__5od1R","col-lg-10":"__grid__col-lg-10__3l02V","col-lg-11":"__grid__col-lg-11__1M3kU","col-lg-12":"__grid__col-lg-12__3b23J","col-lg":"__grid__col-lg__g2MV9","col-lg-auto":"__grid__col-lg-auto__38l7t","col-xl-1":"__grid__col-xl-1__1TFKO","col-xl-2":"__grid__col-xl-2__3H5NW","col-xl-3":"__grid__col-xl-3__2-3I8","col-xl-4":"__grid__col-xl-4__2bCzv","col-xl-5":"__grid__col-xl-5__FiM51","col-xl-6":"__grid__col-xl-6__22zbY","col-xl-7":"__grid__col-xl-7__Uz6KO","col-xl-8":"__grid__col-xl-8__3xW-U","col-xl-9":"__grid__col-xl-9__tx7dN","col-xl-10":"__grid__col-xl-10__g8oUp","col-xl-11":"__grid__col-xl-11__1NMog","col-xl-12":"__grid__col-xl-12__3xWBZ","col-xl":"__grid__col-xl__1obk1","col-xl-auto":"__grid__col-xl-auto__3B4QJ","row-cols-1":"__grid__row-cols-1__2KDZX","row-cols-2":"__grid__row-cols-2__2AZ0L","row-cols-3":"__grid__row-cols-3__1_Jez","row-cols-4":"__grid__row-cols-4__TPZ-D","row-cols-5":"__grid__row-cols-5__2VBE2","row-cols-6":"__grid__row-cols-6__1NJXc","order-first":"__grid__order-first__1ZEA2","order-last":"__grid__order-last__1FlxM","order-0":"__grid__order-0__3g6N8","order-1":"__grid__order-1__27fZm","order-2":"__grid__order-2__1-n0m","order-3":"__grid__order-3__1rlAk","order-4":"__grid__order-4__1xXWr","order-5":"__grid__order-5__2fRKt","order-6":"__grid__order-6__2TwlZ","order-7":"__grid__order-7__OxRQt","order-8":"__grid__order-8__Fniow","order-9":"__grid__order-9__1TRrL","order-10":"__grid__order-10__2qPqQ","order-11":"__grid__order-11__Uy2O6","order-12":"__grid__order-12__1Pbsy","offset-1":"__grid__offset-1__2Robc","offset-2":"__grid__offset-2__Zx4LU","offset-3":"__grid__offset-3__1RMUT","offset-4":"__grid__offset-4__lKEsr","offset-5":"__grid__offset-5__1C2Lc","offset-6":"__grid__offset-6__L8nKJ","offset-7":"__grid__offset-7__2wdLz","offset-8":"__grid__offset-8__2cugz","offset-9":"__grid__offset-9__2f92V","offset-10":"__grid__offset-10__3HEcr","offset-11":"__grid__offset-11__1FjQ3","row-cols-sm-1":"__grid__row-cols-sm-1__2Cqfh","row-cols-sm-2":"__grid__row-cols-sm-2__aRq2C","row-cols-sm-3":"__grid__row-cols-sm-3__mdj6b","row-cols-sm-4":"__grid__row-cols-sm-4__2YLRY","row-cols-sm-5":"__grid__row-cols-sm-5__2ytCO","row-cols-sm-6":"__grid__row-cols-sm-6__2Sv2Y","order-sm-first":"__grid__order-sm-first__37-vl","order-sm-last":"__grid__order-sm-last__nQLHh","order-sm-0":"__grid__order-sm-0__1nBLx","order-sm-1":"__grid__order-sm-1__3B5ZD","order-sm-2":"__grid__order-sm-2__2_7dp","order-sm-3":"__grid__order-sm-3__fFJcI","order-sm-4":"__grid__order-sm-4__1P-il","order-sm-5":"__grid__order-sm-5__3svwq","order-sm-6":"__grid__order-sm-6__2-X2m","order-sm-7":"__grid__order-sm-7__qv6ue","order-sm-8":"__grid__order-sm-8__1mVZg","order-sm-9":"__grid__order-sm-9__3leZv","order-sm-10":"__grid__order-sm-10__14eYB","order-sm-11":"__grid__order-sm-11__3fHA9","order-sm-12":"__grid__order-sm-12__3YGbr","offset-sm-0":"__grid__offset-sm-0__Ji6GE","offset-sm-1":"__grid__offset-sm-1__1xwIb","offset-sm-2":"__grid__offset-sm-2__1uaVT","offset-sm-3":"__grid__offset-sm-3__3JY3T","offset-sm-4":"__grid__offset-sm-4__1UZxV","offset-sm-5":"__grid__offset-sm-5__1sjCS","offset-sm-6":"__grid__offset-sm-6__shONY","offset-sm-7":"__grid__offset-sm-7__3apzC","offset-sm-8":"__grid__offset-sm-8__1VVCu","offset-sm-9":"__grid__offset-sm-9__2lE77","offset-sm-10":"__grid__offset-sm-10__1Jg_Q","offset-sm-11":"__grid__offset-sm-11__1VzVm","row-cols-md-1":"__grid__row-cols-md-1__3ROj2","row-cols-md-2":"__grid__row-cols-md-2__2NJM4","row-cols-md-3":"__grid__row-cols-md-3__3IouR","row-cols-md-4":"__grid__row-cols-md-4__1zciP","row-cols-md-5":"__grid__row-cols-md-5__3GPlG","row-cols-md-6":"__grid__row-cols-md-6__3Yypo","order-md-first":"__grid__order-md-first__YId5-","order-md-last":"__grid__order-md-last__FoL1t","order-md-0":"__grid__order-md-0__11X2_","order-md-1":"__grid__order-md-1__29ppz","order-md-2":"__grid__order-md-2__BX_wA","order-md-3":"__grid__order-md-3__3vovI","order-md-4":"__grid__order-md-4__1DG-r","order-md-5":"__grid__order-md-5__1t-wS","order-md-6":"__grid__order-md-6__xhpHy","order-md-7":"__grid__order-md-7__1KW3a","order-md-8":"__grid__order-md-8__12iOD","order-md-9":"__grid__order-md-9__2o7SZ","order-md-10":"__grid__order-md-10__30TSh","order-md-11":"__grid__order-md-11__3a2ES","order-md-12":"__grid__order-md-12__17gjx","offset-md-0":"__grid__offset-md-0__3SIYS","offset-md-1":"__grid__offset-md-1__9sDKs","offset-md-2":"__grid__offset-md-2__2LaPL","offset-md-3":"__grid__offset-md-3__3tebD","offset-md-4":"__grid__offset-md-4__18n2k","offset-md-5":"__grid__offset-md-5__joIgt","offset-md-6":"__grid__offset-md-6__1q1LS","offset-md-7":"__grid__offset-md-7__K5T5U","offset-md-8":"__grid__offset-md-8__1bjmQ","offset-md-9":"__grid__offset-md-9__1jm7r","offset-md-10":"__grid__offset-md-10__1SlPm","offset-md-11":"__grid__offset-md-11__PRoM9","row-cols-lg-1":"__grid__row-cols-lg-1__1l-Ab","row-cols-lg-2":"__grid__row-cols-lg-2__1VCF7","row-cols-lg-3":"__grid__row-cols-lg-3__38pSz","row-cols-lg-4":"__grid__row-cols-lg-4__3MNUX","row-cols-lg-5":"__grid__row-cols-lg-5__1ZPJw","row-cols-lg-6":"__grid__row-cols-lg-6__25fN8","order-lg-first":"__grid__order-lg-first__6acFv","order-lg-last":"__grid__order-lg-last__2AuqS","order-lg-0":"__grid__order-lg-0__2GeAp","order-lg-1":"__grid__order-lg-1__1H7K7","order-lg-2":"__grid__order-lg-2__MYlUI","order-lg-3":"__grid__order-lg-3__3Q3rS","order-lg-4":"__grid__order-lg-4__Rl2vD","order-lg-5":"__grid__order-lg-5__2mrT8","order-lg-6":"__grid__order-lg-6__3FBi8","order-lg-7":"__grid__order-lg-7__3-wtn","order-lg-8":"__grid__order-lg-8__2KbpA","order-lg-9":"__grid__order-lg-9__2-Zpx","order-lg-10":"__grid__order-lg-10__1Ksq5","order-lg-11":"__grid__order-lg-11__3oMde","order-lg-12":"__grid__order-lg-12__3tvoB","offset-lg-0":"__grid__offset-lg-0__3ANrG","offset-lg-1":"__grid__offset-lg-1__1dJCm","offset-lg-2":"__grid__offset-lg-2__7RGUZ","offset-lg-3":"__grid__offset-lg-3__3HK2f","offset-lg-4":"__grid__offset-lg-4__2j5R6","offset-lg-5":"__grid__offset-lg-5__2QCMg","offset-lg-6":"__grid__offset-lg-6__3jf4w","offset-lg-7":"__grid__offset-lg-7__pOUQI","offset-lg-8":"__grid__offset-lg-8__2fHoJ","offset-lg-9":"__grid__offset-lg-9__1U4zu","offset-lg-10":"__grid__offset-lg-10__16S5i","offset-lg-11":"__grid__offset-lg-11__2SkJN","row-cols-xl-1":"__grid__row-cols-xl-1__3RG4D","row-cols-xl-2":"__grid__row-cols-xl-2__ZvXCx","row-cols-xl-3":"__grid__row-cols-xl-3__EUhdv","row-cols-xl-4":"__grid__row-cols-xl-4__3RRjt","row-cols-xl-5":"__grid__row-cols-xl-5__1Cq7j","row-cols-xl-6":"__grid__row-cols-xl-6__3XAEM","order-xl-first":"__grid__order-xl-first__3AJuA","order-xl-last":"__grid__order-xl-last__289w5","order-xl-0":"__grid__order-xl-0__3wkjk","order-xl-1":"__grid__order-xl-1__1qVNF","order-xl-2":"__grid__order-xl-2__3KD7H","order-xl-3":"__grid__order-xl-3__2CmD8","order-xl-4":"__grid__order-xl-4__3hL_C","order-xl-5":"__grid__order-xl-5__YEmoW","order-xl-6":"__grid__order-xl-6__3iHlB","order-xl-7":"__grid__order-xl-7__1D3Bm","order-xl-8":"__grid__order-xl-8__2lHpd","order-xl-9":"__grid__order-xl-9__IMgOv","order-xl-10":"__grid__order-xl-10__2gsV6","order-xl-11":"__grid__order-xl-11__1cf7J","order-xl-12":"__grid__order-xl-12__2iwf0","offset-xl-0":"__grid__offset-xl-0__1xbZ5","offset-xl-1":"__grid__offset-xl-1__rSZgC","offset-xl-2":"__grid__offset-xl-2__2-q6r","offset-xl-3":"__grid__offset-xl-3__18aVH","offset-xl-4":"__grid__offset-xl-4__L_fbC","offset-xl-5":"__grid__offset-xl-5__1-42j","offset-xl-6":"__grid__offset-xl-6__1nSva","offset-xl-7":"__grid__offset-xl-7__27qri","offset-xl-8":"__grid__offset-xl-8__3wrlN","offset-xl-9":"__grid__offset-xl-9__JTcR4","offset-xl-10":"__grid__offset-xl-10__2Lf0i","offset-xl-11":"__grid__offset-xl-11__2pahu"};

var Grid = function Grid(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'div' : _ref$variant,
      container = _ref.container,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "container", "children"]);

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

exports.Button = Button;
exports.ExampleComponent = ExampleComponent;
exports.Grid = Grid;
exports.Icon = Icon;
//# sourceMappingURL=index.js.map
