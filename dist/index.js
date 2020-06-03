function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"test":"_styles-module__test__3ybTi"};

var styles$1 = {"elevation-1":"__buttons__elevation-1__5h7nw","elevation-2":"__buttons__elevation-2__3d4Cf","elevation-3":"__buttons__elevation-3__2q8Nc","elevation-4":"__buttons__elevation-4__32nCN","elevation-5":"__buttons__elevation-5__rhvLq","elevation-element-1":"__buttons__elevation-element-1__MupO8","elevation-element-2":"__buttons__elevation-element-2__3-v1q","btn":"__buttons__btn__1rTjI","elevation-element-3":"__buttons__elevation-element-3__3wyMt","elevation-element-4":"__buttons__elevation-element-4__1_HsB","btn-secondary-green":"__buttons__btn-secondary-green__1oHO9","btn-secondary-green-outline":"__buttons__btn-secondary-green-outline__2wUjt","btn-secondary-blue":"__buttons__btn-secondary-blue__18s3n","btn-secondary-blue-outline":"__buttons__btn-secondary-blue-outline__10sZo","btn-secondary-purple":"__buttons__btn-secondary-purple__1w9Pd","btn-secondary-purple-outline":"__buttons__btn-secondary-purple-outline__1ebxm","btn-primary-outline":"__buttons__btn-primary-outline__388da","btn-primary":"__buttons__btn-primary__qR-dP","large":"__buttons__large__2Yjez"};

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

var icons = {"size-1":"__coopeuch-icon__size-1__E20oA","size-2":"__coopeuch-icon__size-2__1LAUs","size-3":"__coopeuch-icon__size-3__3tmzu","size-4":"__coopeuch-icon__size-4__f8f2b","size-5":"__coopeuch-icon__size-5__3WQf-","size-6":"__coopeuch-icon__size-6__325my","size-7":"__coopeuch-icon__size-7__vbJDw","size-8":"__coopeuch-icon__size-8__HfeIC","icon-alarm":"__coopeuch-icon__icon-alarm__1UfCs","icon-alert":"__coopeuch-icon__icon-alert__1sBsM","icon-app-notification":"__coopeuch-icon__icon-app-notification__k6COO","icon-block":"__coopeuch-icon__icon-block__2FJt0","icon-bookmark":"__coopeuch-icon__icon-bookmark__2Gg_H","icon-bug":"__coopeuch-icon__icon-bug__1oFzp","icon-check-double":"__coopeuch-icon__icon-check-double__2pvnG","icon-check":"__coopeuch-icon__icon-check__Wb2XK","icon-cloud-disable":"__coopeuch-icon__icon-cloud-disable__j_7gN","icon-cloud-download":"__coopeuch-icon__icon-cloud-download__1dzy1","icon-cloud-upload":"__coopeuch-icon__icon-cloud-upload__2jnFK","icon-cloud":"__coopeuch-icon__icon-cloud__XL8Xi","icon-cogwheel":"__coopeuch-icon__icon-cogwheel__3mCNb","icon-copy":"__coopeuch-icon__icon-copy__1fOSF","icon-cross":"__coopeuch-icon__icon-cross__10QIh","icon-cut":"__coopeuch-icon__icon-cut__3fs14","icon-dashboard":"__coopeuch-icon__icon-dashboard__QRta1","icon-down":"__coopeuch-icon__icon-down__HXmn3","icon-download-queue":"__coopeuch-icon__icon-download-queue__3ICli","icon-download":"__coopeuch-icon__icon-download__2SdS4","icon-draft":"__coopeuch-icon__icon-draft__P7At8","icon-exit-fullscreen":"__coopeuch-icon__icon-exit-fullscreen__Mh01S","icon-eye-close":"__coopeuch-icon__icon-eye-close__1KjPQ","icon-eye-open":"__coopeuch-icon__icon-eye-open__3ATsw","icon-female-user":"__coopeuch-icon__icon-female-user__2Dfx_","icon-file":"__coopeuch-icon__icon-file__3bdqj","icon-filter":"__coopeuch-icon__icon-filter__295_z","icon-flag":"__coopeuch-icon__icon-flag__1TXC1","icon-fullscreen":"__coopeuch-icon__icon-fullscreen__FIx0R","icon-heart":"__coopeuch-icon__icon-heart__2g-zt","icon-help":"__coopeuch-icon__icon-help__1qlUa","icon-home":"__coopeuch-icon__icon-home__2JGHi","icon-information":"__coopeuch-icon__icon-information__2iZcp","icon-left":"__coopeuch-icon__icon-left__1WSQ-","icon-lifebuoy":"__coopeuch-icon__icon-lifebuoy__1SMNH","icon-list":"__coopeuch-icon__icon-list__ZRgfq","icon-loading":"__coopeuch-icon__icon-loading__3CMbC","icon-lock":"__coopeuch-icon__icon-lock__163V5","icon-login":"__coopeuch-icon__icon-login__2ii93","icon-logout":"__coopeuch-icon__icon-logout__1Z960","icon-menu-burger":"__coopeuch-icon__icon-menu-burger__2boVJ","icon-menu-dots":"__coopeuch-icon__icon-menu-dots__Li-Ov","icon-microphone-disable":"__coopeuch-icon__icon-microphone-disable__1bA0I","icon-microphone":"__coopeuch-icon__icon-microphone__TfNxZ","icon-minus":"__coopeuch-icon__icon-minus__2QDQO","icon-note":"__coopeuch-icon__icon-note__38j6H","icon-notification-disable":"__coopeuch-icon__icon-notification-disable__K1T2z","icon-notification":"__coopeuch-icon__icon-notification__2Ra63","icon-paste":"__coopeuch-icon__icon-paste__51DLi","icon-plus":"__coopeuch-icon__icon-plus__1HBpS","icon-power-sign":"__coopeuch-icon__icon-power-sign__1mx6V","icon-print":"__coopeuch-icon__icon-print__1GulE","icon-puzzle":"__coopeuch-icon__icon-puzzle__2lbdS","icon-refresh":"__coopeuch-icon__icon-refresh__Lubaw","icon-reply-all":"__coopeuch-icon__icon-reply-all__3KEs9","icon-reply":"__coopeuch-icon__icon-reply__8CChY","icon-right":"__coopeuch-icon__icon-right__xteAB","icon-save":"__coopeuch-icon__icon-save__2bqpv","icon-screenshot":"__coopeuch-icon__icon-screenshot__3SlDa","icon-search-alt":"__coopeuch-icon__icon-search-alt__1TlAn","icon-search-check":"__coopeuch-icon__icon-search-check__2TIsj","icon-search-cross":"__coopeuch-icon__icon-search-cross__2NZWr","icon-search-minus":"__coopeuch-icon__icon-search-minus__3c04X","icon-search-plus":"__coopeuch-icon__icon-search-plus__3deTb","icon-share":"__coopeuch-icon__icon-share__3rHQW","icon-shield":"__coopeuch-icon__icon-shield__2HTIc","icon-snooze":"__coopeuch-icon__icon-snooze__1H3-p","icon-star":"__coopeuch-icon__icon-star__ot_K-","icon-stars":"__coopeuch-icon__icon-stars__3n6WS","icon-sync":"__coopeuch-icon__icon-sync__g4AKq","icon-task":"__coopeuch-icon__icon-task__2iDpn","icon-time":"__coopeuch-icon__icon-time__rVrZO","icon-trash-empty":"__coopeuch-icon__icon-trash-empty__2rUqI","icon-trash-full":"__coopeuch-icon__icon-trash-full__2M4JD","icon-trash":"__coopeuch-icon__icon-trash__H5UfA","icon-umbrella":"__coopeuch-icon__icon-umbrella__1MSD1","icon-unlock":"__coopeuch-icon__icon-unlock__5VZLW","icon-up":"__coopeuch-icon__icon-up__1tEMX","icon-upload-queue":"__coopeuch-icon__icon-upload-queue__2EQnt","icon-upload":"__coopeuch-icon__icon-upload__MTrj9","icon-user":"__coopeuch-icon__icon-user__2cuT3","icon-verification-fail":"__coopeuch-icon__icon-verification-fail__3CYbD","icon-verification":"__coopeuch-icon__icon-verification__3hYBR","icon-wrench":"__coopeuch-icon__icon-wrench__2swwf","icon-write":"__coopeuch-icon__icon-write__2oNry"};

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

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.Button = Button;
exports.ExampleComponent = ExampleComponent;
exports.Icon = Icon;
//# sourceMappingURL=index.js.map
