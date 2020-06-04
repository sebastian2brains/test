import React from 'react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var icons = {"size-1":"__coopeuch-icon__size-1__E20oA","size-2":"__coopeuch-icon__size-2__1LAUs","size-3":"__coopeuch-icon__size-3__3tmzu","size-4":"__coopeuch-icon__size-4__f8f2b","size-5":"__coopeuch-icon__size-5__3WQf-","size-6":"__coopeuch-icon__size-6__325my","size-7":"__coopeuch-icon__size-7__vbJDw","size-8":"__coopeuch-icon__size-8__HfeIC","icon-alarm":"__coopeuch-icon__icon-alarm__1UfCs","icon-alert":"__coopeuch-icon__icon-alert__1sBsM","icon-app-notification":"__coopeuch-icon__icon-app-notification__k6COO","icon-block":"__coopeuch-icon__icon-block__2FJt0","icon-bookmark":"__coopeuch-icon__icon-bookmark__2Gg_H","icon-bug":"__coopeuch-icon__icon-bug__1oFzp","icon-check-double":"__coopeuch-icon__icon-check-double__2pvnG","icon-check":"__coopeuch-icon__icon-check__Wb2XK","icon-cloud-disable":"__coopeuch-icon__icon-cloud-disable__j_7gN","icon-cloud-download":"__coopeuch-icon__icon-cloud-download__1dzy1","icon-cloud-upload":"__coopeuch-icon__icon-cloud-upload__2jnFK","icon-cloud":"__coopeuch-icon__icon-cloud__XL8Xi","icon-cogwheel":"__coopeuch-icon__icon-cogwheel__3mCNb","icon-copy":"__coopeuch-icon__icon-copy__1fOSF","icon-cross":"__coopeuch-icon__icon-cross__10QIh","icon-cut":"__coopeuch-icon__icon-cut__3fs14","icon-dashboard":"__coopeuch-icon__icon-dashboard__QRta1","icon-down":"__coopeuch-icon__icon-down__HXmn3","icon-download-queue":"__coopeuch-icon__icon-download-queue__3ICli","icon-download":"__coopeuch-icon__icon-download__2SdS4","icon-draft":"__coopeuch-icon__icon-draft__P7At8","icon-exit-fullscreen":"__coopeuch-icon__icon-exit-fullscreen__Mh01S","icon-eye-close":"__coopeuch-icon__icon-eye-close__1KjPQ","icon-eye-open":"__coopeuch-icon__icon-eye-open__3ATsw","icon-female-user":"__coopeuch-icon__icon-female-user__2Dfx_","icon-file":"__coopeuch-icon__icon-file__3bdqj","icon-filter":"__coopeuch-icon__icon-filter__295_z","icon-flag":"__coopeuch-icon__icon-flag__1TXC1","icon-fullscreen":"__coopeuch-icon__icon-fullscreen__FIx0R","icon-heart":"__coopeuch-icon__icon-heart__2g-zt","icon-help":"__coopeuch-icon__icon-help__1qlUa","icon-home":"__coopeuch-icon__icon-home__2JGHi","icon-information":"__coopeuch-icon__icon-information__2iZcp","icon-left":"__coopeuch-icon__icon-left__1WSQ-","icon-lifebuoy":"__coopeuch-icon__icon-lifebuoy__1SMNH","icon-list":"__coopeuch-icon__icon-list__ZRgfq","icon-loading":"__coopeuch-icon__icon-loading__3CMbC","icon-lock":"__coopeuch-icon__icon-lock__163V5","icon-login":"__coopeuch-icon__icon-login__2ii93","icon-logout":"__coopeuch-icon__icon-logout__1Z960","icon-menu-burger":"__coopeuch-icon__icon-menu-burger__2boVJ","icon-menu-dots":"__coopeuch-icon__icon-menu-dots__Li-Ov","icon-microphone-disable":"__coopeuch-icon__icon-microphone-disable__1bA0I","icon-microphone":"__coopeuch-icon__icon-microphone__TfNxZ","icon-minus":"__coopeuch-icon__icon-minus__2QDQO","icon-note":"__coopeuch-icon__icon-note__38j6H","icon-notification-disable":"__coopeuch-icon__icon-notification-disable__K1T2z","icon-notification":"__coopeuch-icon__icon-notification__2Ra63","icon-paste":"__coopeuch-icon__icon-paste__51DLi","icon-plus":"__coopeuch-icon__icon-plus__1HBpS","icon-power-sign":"__coopeuch-icon__icon-power-sign__1mx6V","icon-print":"__coopeuch-icon__icon-print__1GulE","icon-puzzle":"__coopeuch-icon__icon-puzzle__2lbdS","icon-refresh":"__coopeuch-icon__icon-refresh__Lubaw","icon-reply-all":"__coopeuch-icon__icon-reply-all__3KEs9","icon-reply":"__coopeuch-icon__icon-reply__8CChY","icon-right":"__coopeuch-icon__icon-right__xteAB","icon-save":"__coopeuch-icon__icon-save__2bqpv","icon-screenshot":"__coopeuch-icon__icon-screenshot__3SlDa","icon-search-alt":"__coopeuch-icon__icon-search-alt__1TlAn","icon-search-check":"__coopeuch-icon__icon-search-check__2TIsj","icon-search-cross":"__coopeuch-icon__icon-search-cross__2NZWr","icon-search-minus":"__coopeuch-icon__icon-search-minus__3c04X","icon-search-plus":"__coopeuch-icon__icon-search-plus__3deTb","icon-share":"__coopeuch-icon__icon-share__3rHQW","icon-shield":"__coopeuch-icon__icon-shield__2HTIc","icon-snooze":"__coopeuch-icon__icon-snooze__1H3-p","icon-star":"__coopeuch-icon__icon-star__ot_K-","icon-stars":"__coopeuch-icon__icon-stars__3n6WS","icon-sync":"__coopeuch-icon__icon-sync__g4AKq","icon-task":"__coopeuch-icon__icon-task__2iDpn","icon-time":"__coopeuch-icon__icon-time__rVrZO","icon-trash-empty":"__coopeuch-icon__icon-trash-empty__2rUqI","icon-trash-full":"__coopeuch-icon__icon-trash-full__2M4JD","icon-trash":"__coopeuch-icon__icon-trash__H5UfA","icon-umbrella":"__coopeuch-icon__icon-umbrella__1MSD1","icon-unlock":"__coopeuch-icon__icon-unlock__5VZLW","icon-up":"__coopeuch-icon__icon-up__1tEMX","icon-upload-queue":"__coopeuch-icon__icon-upload-queue__2EQnt","icon-upload":"__coopeuch-icon__icon-upload__MTrj9","icon-user":"__coopeuch-icon__icon-user__2cuT3","icon-verification-fail":"__coopeuch-icon__icon-verification-fail__3CYbD","icon-verification":"__coopeuch-icon__icon-verification__3hYBR","icon-wrench":"__coopeuch-icon__icon-wrench__2swwf","icon-write":"__coopeuch-icon__icon-write__2oNry"};

const Icon = ({
  name: _name = 'alarm',
  size: _size = '1',
  className,
  ...props
}) => {
  const icon = icons[`icon-${_name}`];
  const sizeSelected = icons[`size-${_size}`] || '1';
  return /*#__PURE__*/React.createElement("i", Object.assign({}, props, {
    className: `coopeuch-icon ${icon} ${sizeSelected} ${className}`
  }));
};

var styles = {"elevation-1":"__buttons__elevation-1__5h7nw","elevation-2":"__buttons__elevation-2__3d4Cf","elevation-3":"__buttons__elevation-3__2q8Nc","elevation-4":"__buttons__elevation-4__32nCN","elevation-5":"__buttons__elevation-5__rhvLq","elevation-element-1":"__buttons__elevation-element-1__MupO8","elevation-element-2":"__buttons__elevation-element-2__3-v1q","btn":"__buttons__btn__1rTjI","elevation-element-3":"__buttons__elevation-element-3__3wyMt","elevation-element-4":"__buttons__elevation-element-4__1_HsB","btn-primary":"__buttons__btn-primary__qR-dP","btn-secondary":"__buttons__btn-secondary__15IjF","prefix":"__buttons__prefix__2y1vb","suffix":"__buttons__suffix__2BcL2","btn-primary-outline":"__buttons__btn-primary-outline__388da","btn-primary-text":"__buttons__btn-primary-text__KsHMS","btn-secondary-outline":"__buttons__btn-secondary-outline__GQn7f","btn-secondary-text":"__buttons__btn-secondary-text__2BbSs"};

const Button = ({
  children,
  color,
  variant,
  disabled,
  prefix,
  suffix,
  ...props
}) => {
  const btnVariant = variant !== '' ? `-${variant}` : '';
  return /*#__PURE__*/React.createElement("button", Object.assign({}, props, {
    className: `${styles.btn} ${styles[`btn-${color}${btnVariant}`] || ''}`,
    disabled: disabled
  }), prefix && /*#__PURE__*/React.createElement(Icon, {
    className: styles.prefix,
    name: prefix
  }), variant !== 'text' ? children : /*#__PURE__*/React.createElement("span", null, children), suffix && /*#__PURE__*/React.createElement(Icon, {
    className: styles.suffix,
    name: suffix
  }));
};

Button.defaultProps = {
  variant: '',
  disabled: false,
  onClick: () => null
};
Button.propTypes = {
  prefix: propTypes.string,
  suffix: propTypes.string,
  color: propTypes.oneOf(['primary', 'secondary']),
  variant: propTypes.oneOf(['', 'outline', 'text']),
  onClick: propTypes.func,
  disabled: propTypes.bool
};

var gridStyles = {"container":"__grid__container__14kEn","container-fluid":"__grid__container-fluid__3HzEQ","container-sm":"__grid__container-sm__z_9u9","container-md":"__grid__container-md__2qcSz","container-lg":"__grid__container-lg__3VnX7","container-xl":"__grid__container-xl__bhEqE","row":"__grid__row__UYIH9","no-gutters":"__grid__no-gutters__3497d","col":"__grid__col__WdUKx","col-1":"__grid__col-1__2oac2","col-2":"__grid__col-2__2aKQ6","col-3":"__grid__col-3__1Ja7k","col-4":"__grid__col-4__b0o_p","col-5":"__grid__col-5__2y9KV","col-6":"__grid__col-6__j6U_N","col-7":"__grid__col-7__2cnib","col-8":"__grid__col-8__j_GRF","col-9":"__grid__col-9__3BV2S","col-10":"__grid__col-10__aijt7","col-11":"__grid__col-11__1uF6h","col-12":"__grid__col-12__16Mq4","col-auto":"__grid__col-auto__2Mnx4","col-sm-1":"__grid__col-sm-1__g_BYh","col-sm-2":"__grid__col-sm-2__p2Bkv","col-sm-3":"__grid__col-sm-3__2tBAn","col-sm-4":"__grid__col-sm-4__2Zrnf","col-sm-5":"__grid__col-sm-5__gq2Q6","col-sm-6":"__grid__col-sm-6__36wvN","col-sm-7":"__grid__col-sm-7__-xjYm","col-sm-8":"__grid__col-sm-8__qCgI9","col-sm-9":"__grid__col-sm-9__jglMn","col-sm-10":"__grid__col-sm-10__1Ddzm","col-sm-11":"__grid__col-sm-11__qAOmb","col-sm-12":"__grid__col-sm-12__360Zl","col-sm":"__grid__col-sm__2eo6T","col-sm-auto":"__grid__col-sm-auto__xYrp3","col-md-1":"__grid__col-md-1__1MDP_","col-md-2":"__grid__col-md-2__QnY1p","col-md-3":"__grid__col-md-3__2nlsV","col-md-4":"__grid__col-md-4__HQIaP","col-md-5":"__grid__col-md-5__1NiLw","col-md-6":"__grid__col-md-6__3bPY2","col-md-7":"__grid__col-md-7__wciee","col-md-8":"__grid__col-md-8__1H4wt","col-md-9":"__grid__col-md-9__KrrZO","col-md-10":"__grid__col-md-10__1gKWm","col-md-11":"__grid__col-md-11__1j8Cn","col-md-12":"__grid__col-md-12__ExYPp","col-md":"__grid__col-md__1Jn07","col-md-auto":"__grid__col-md-auto__1hpEj","col-lg-1":"__grid__col-lg-1__1kYkS","col-lg-2":"__grid__col-lg-2__3Ve2f","col-lg-3":"__grid__col-lg-3__38JX2","col-lg-4":"__grid__col-lg-4__1fUJA","col-lg-5":"__grid__col-lg-5__uKYiC","col-lg-6":"__grid__col-lg-6__jq4-x","col-lg-7":"__grid__col-lg-7__4TRJM","col-lg-8":"__grid__col-lg-8__28FDI","col-lg-9":"__grid__col-lg-9__5od1R","col-lg-10":"__grid__col-lg-10__3l02V","col-lg-11":"__grid__col-lg-11__1M3kU","col-lg-12":"__grid__col-lg-12__3b23J","col-lg":"__grid__col-lg__g2MV9","col-lg-auto":"__grid__col-lg-auto__38l7t","col-xl-1":"__grid__col-xl-1__1TFKO","col-xl-2":"__grid__col-xl-2__3H5NW","col-xl-3":"__grid__col-xl-3__2-3I8","col-xl-4":"__grid__col-xl-4__2bCzv","col-xl-5":"__grid__col-xl-5__FiM51","col-xl-6":"__grid__col-xl-6__22zbY","col-xl-7":"__grid__col-xl-7__Uz6KO","col-xl-8":"__grid__col-xl-8__3xW-U","col-xl-9":"__grid__col-xl-9__tx7dN","col-xl-10":"__grid__col-xl-10__g8oUp","col-xl-11":"__grid__col-xl-11__1NMog","col-xl-12":"__grid__col-xl-12__3xWBZ","col-xl":"__grid__col-xl__1obk1","col-xl-auto":"__grid__col-xl-auto__3B4QJ","row-cols-1":"__grid__row-cols-1__2KDZX","row-cols-2":"__grid__row-cols-2__2AZ0L","row-cols-3":"__grid__row-cols-3__1_Jez","row-cols-4":"__grid__row-cols-4__TPZ-D","row-cols-5":"__grid__row-cols-5__2VBE2","row-cols-6":"__grid__row-cols-6__1NJXc","order-first":"__grid__order-first__1ZEA2","order-last":"__grid__order-last__1FlxM","order-0":"__grid__order-0__3g6N8","order-1":"__grid__order-1__27fZm","order-2":"__grid__order-2__1-n0m","order-3":"__grid__order-3__1rlAk","order-4":"__grid__order-4__1xXWr","order-5":"__grid__order-5__2fRKt","order-6":"__grid__order-6__2TwlZ","order-7":"__grid__order-7__OxRQt","order-8":"__grid__order-8__Fniow","order-9":"__grid__order-9__1TRrL","order-10":"__grid__order-10__2qPqQ","order-11":"__grid__order-11__Uy2O6","order-12":"__grid__order-12__1Pbsy","offset-1":"__grid__offset-1__2Robc","offset-2":"__grid__offset-2__Zx4LU","offset-3":"__grid__offset-3__1RMUT","offset-4":"__grid__offset-4__lKEsr","offset-5":"__grid__offset-5__1C2Lc","offset-6":"__grid__offset-6__L8nKJ","offset-7":"__grid__offset-7__2wdLz","offset-8":"__grid__offset-8__2cugz","offset-9":"__grid__offset-9__2f92V","offset-10":"__grid__offset-10__3HEcr","offset-11":"__grid__offset-11__1FjQ3","row-cols-sm-1":"__grid__row-cols-sm-1__2Cqfh","row-cols-sm-2":"__grid__row-cols-sm-2__aRq2C","row-cols-sm-3":"__grid__row-cols-sm-3__mdj6b","row-cols-sm-4":"__grid__row-cols-sm-4__2YLRY","row-cols-sm-5":"__grid__row-cols-sm-5__2ytCO","row-cols-sm-6":"__grid__row-cols-sm-6__2Sv2Y","order-sm-first":"__grid__order-sm-first__37-vl","order-sm-last":"__grid__order-sm-last__nQLHh","order-sm-0":"__grid__order-sm-0__1nBLx","order-sm-1":"__grid__order-sm-1__3B5ZD","order-sm-2":"__grid__order-sm-2__2_7dp","order-sm-3":"__grid__order-sm-3__fFJcI","order-sm-4":"__grid__order-sm-4__1P-il","order-sm-5":"__grid__order-sm-5__3svwq","order-sm-6":"__grid__order-sm-6__2-X2m","order-sm-7":"__grid__order-sm-7__qv6ue","order-sm-8":"__grid__order-sm-8__1mVZg","order-sm-9":"__grid__order-sm-9__3leZv","order-sm-10":"__grid__order-sm-10__14eYB","order-sm-11":"__grid__order-sm-11__3fHA9","order-sm-12":"__grid__order-sm-12__3YGbr","offset-sm-0":"__grid__offset-sm-0__Ji6GE","offset-sm-1":"__grid__offset-sm-1__1xwIb","offset-sm-2":"__grid__offset-sm-2__1uaVT","offset-sm-3":"__grid__offset-sm-3__3JY3T","offset-sm-4":"__grid__offset-sm-4__1UZxV","offset-sm-5":"__grid__offset-sm-5__1sjCS","offset-sm-6":"__grid__offset-sm-6__shONY","offset-sm-7":"__grid__offset-sm-7__3apzC","offset-sm-8":"__grid__offset-sm-8__1VVCu","offset-sm-9":"__grid__offset-sm-9__2lE77","offset-sm-10":"__grid__offset-sm-10__1Jg_Q","offset-sm-11":"__grid__offset-sm-11__1VzVm","row-cols-md-1":"__grid__row-cols-md-1__3ROj2","row-cols-md-2":"__grid__row-cols-md-2__2NJM4","row-cols-md-3":"__grid__row-cols-md-3__3IouR","row-cols-md-4":"__grid__row-cols-md-4__1zciP","row-cols-md-5":"__grid__row-cols-md-5__3GPlG","row-cols-md-6":"__grid__row-cols-md-6__3Yypo","order-md-first":"__grid__order-md-first__YId5-","order-md-last":"__grid__order-md-last__FoL1t","order-md-0":"__grid__order-md-0__11X2_","order-md-1":"__grid__order-md-1__29ppz","order-md-2":"__grid__order-md-2__BX_wA","order-md-3":"__grid__order-md-3__3vovI","order-md-4":"__grid__order-md-4__1DG-r","order-md-5":"__grid__order-md-5__1t-wS","order-md-6":"__grid__order-md-6__xhpHy","order-md-7":"__grid__order-md-7__1KW3a","order-md-8":"__grid__order-md-8__12iOD","order-md-9":"__grid__order-md-9__2o7SZ","order-md-10":"__grid__order-md-10__30TSh","order-md-11":"__grid__order-md-11__3a2ES","order-md-12":"__grid__order-md-12__17gjx","offset-md-0":"__grid__offset-md-0__3SIYS","offset-md-1":"__grid__offset-md-1__9sDKs","offset-md-2":"__grid__offset-md-2__2LaPL","offset-md-3":"__grid__offset-md-3__3tebD","offset-md-4":"__grid__offset-md-4__18n2k","offset-md-5":"__grid__offset-md-5__joIgt","offset-md-6":"__grid__offset-md-6__1q1LS","offset-md-7":"__grid__offset-md-7__K5T5U","offset-md-8":"__grid__offset-md-8__1bjmQ","offset-md-9":"__grid__offset-md-9__1jm7r","offset-md-10":"__grid__offset-md-10__1SlPm","offset-md-11":"__grid__offset-md-11__PRoM9","row-cols-lg-1":"__grid__row-cols-lg-1__1l-Ab","row-cols-lg-2":"__grid__row-cols-lg-2__1VCF7","row-cols-lg-3":"__grid__row-cols-lg-3__38pSz","row-cols-lg-4":"__grid__row-cols-lg-4__3MNUX","row-cols-lg-5":"__grid__row-cols-lg-5__1ZPJw","row-cols-lg-6":"__grid__row-cols-lg-6__25fN8","order-lg-first":"__grid__order-lg-first__6acFv","order-lg-last":"__grid__order-lg-last__2AuqS","order-lg-0":"__grid__order-lg-0__2GeAp","order-lg-1":"__grid__order-lg-1__1H7K7","order-lg-2":"__grid__order-lg-2__MYlUI","order-lg-3":"__grid__order-lg-3__3Q3rS","order-lg-4":"__grid__order-lg-4__Rl2vD","order-lg-5":"__grid__order-lg-5__2mrT8","order-lg-6":"__grid__order-lg-6__3FBi8","order-lg-7":"__grid__order-lg-7__3-wtn","order-lg-8":"__grid__order-lg-8__2KbpA","order-lg-9":"__grid__order-lg-9__2-Zpx","order-lg-10":"__grid__order-lg-10__1Ksq5","order-lg-11":"__grid__order-lg-11__3oMde","order-lg-12":"__grid__order-lg-12__3tvoB","offset-lg-0":"__grid__offset-lg-0__3ANrG","offset-lg-1":"__grid__offset-lg-1__1dJCm","offset-lg-2":"__grid__offset-lg-2__7RGUZ","offset-lg-3":"__grid__offset-lg-3__3HK2f","offset-lg-4":"__grid__offset-lg-4__2j5R6","offset-lg-5":"__grid__offset-lg-5__2QCMg","offset-lg-6":"__grid__offset-lg-6__3jf4w","offset-lg-7":"__grid__offset-lg-7__pOUQI","offset-lg-8":"__grid__offset-lg-8__2fHoJ","offset-lg-9":"__grid__offset-lg-9__1U4zu","offset-lg-10":"__grid__offset-lg-10__16S5i","offset-lg-11":"__grid__offset-lg-11__2SkJN","row-cols-xl-1":"__grid__row-cols-xl-1__3RG4D","row-cols-xl-2":"__grid__row-cols-xl-2__ZvXCx","row-cols-xl-3":"__grid__row-cols-xl-3__EUhdv","row-cols-xl-4":"__grid__row-cols-xl-4__3RRjt","row-cols-xl-5":"__grid__row-cols-xl-5__1Cq7j","row-cols-xl-6":"__grid__row-cols-xl-6__3XAEM","order-xl-first":"__grid__order-xl-first__3AJuA","order-xl-last":"__grid__order-xl-last__289w5","order-xl-0":"__grid__order-xl-0__3wkjk","order-xl-1":"__grid__order-xl-1__1qVNF","order-xl-2":"__grid__order-xl-2__3KD7H","order-xl-3":"__grid__order-xl-3__2CmD8","order-xl-4":"__grid__order-xl-4__3hL_C","order-xl-5":"__grid__order-xl-5__YEmoW","order-xl-6":"__grid__order-xl-6__3iHlB","order-xl-7":"__grid__order-xl-7__1D3Bm","order-xl-8":"__grid__order-xl-8__2lHpd","order-xl-9":"__grid__order-xl-9__IMgOv","order-xl-10":"__grid__order-xl-10__2gsV6","order-xl-11":"__grid__order-xl-11__1cf7J","order-xl-12":"__grid__order-xl-12__2iwf0","offset-xl-0":"__grid__offset-xl-0__1xbZ5","offset-xl-1":"__grid__offset-xl-1__rSZgC","offset-xl-2":"__grid__offset-xl-2__2-q6r","offset-xl-3":"__grid__offset-xl-3__18aVH","offset-xl-4":"__grid__offset-xl-4__L_fbC","offset-xl-5":"__grid__offset-xl-5__1-42j","offset-xl-6":"__grid__offset-xl-6__1nSva","offset-xl-7":"__grid__offset-xl-7__27qri","offset-xl-8":"__grid__offset-xl-8__3wrlN","offset-xl-9":"__grid__offset-xl-9__JTcR4","offset-xl-10":"__grid__offset-xl-10__2Lf0i","offset-xl-11":"__grid__offset-xl-11__2pahu"};

const Grid = ({
  variant: _variant = 'div',
  row,
  children,
  ...props
}) => {
  let styles = row ? [gridStyles.row] : [gridStyles.col];

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

  return React.createElement(_variant, { ...props,
    className: styles.concat(props.className || '').join(' ')
  }, children);
};

Grid.defaultProps = {
  variant: 'div',
  onClick: () => null
};
Grid.propTypes = {
  variant: propTypes.string,
  sm: propTypes.number,
  md: propTypes.number,
  lg: propTypes.number,
  xl: propTypes.number,
  onClick: propTypes.func,
  row: propTypes.bool
};

export { Button, Grid, Icon };
//# sourceMappingURL=index.modern.js.map
