webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-align/dist-web/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-align/dist-web/index.js ***!
  \**************************************************/
/*! exports provided: default, alignElement, alignPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignElement", function() { return alignElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignPoint", function() { return alignPoint; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

/* harmony default export */ __webpack_exports__["default"] = (alignElement);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Dom/isVisible */ "./node_modules/rc-util/es/Dom/isVisible.js");
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-align */ "./node_modules/dom-align/dist-web/index.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/rc-align/es/util.js");
/* harmony import */ var _hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useBuffer */ "./node_modules/rc-align/es/hooks/useBuffer.js");



/**
 * Removed props:
 *  - childrenProps
 */








function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = Object(_hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

    if (!latestDisabled && latestTarget) {
      var source = nodeRef.current;
      var result;
      var element = getElement(latestTarget);
      var point = getPoint(latestTarget);
      cacheRef.current.element = element;
      cacheRef.current.point = point; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      if (element && Object(rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__["default"])(element)) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_5__["alignElement"])(source, element, align);
      } else if (point) {
        result = Object(dom_align__WEBPACK_IMPORTED_MODULE_5__["alignPoint"])(source, point, align);
      }

      Object(_util__WEBPACK_IMPORTED_MODULE_7__["restoreFocus"])(activeElement, source);

      if (latestOnAlign && result) {
        latestOnAlign(source, result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated


  var resizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  }); // Listen for source updated

  var sourceResizeMonitor = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef({
    cancel: function cancel() {}
  });
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["monitorResize"])(nodeRef.current, _forceAlign);
    }

    if (cacheRef.current.element !== element || !Object(_util__WEBPACK_IMPORTED_MODULE_7__["isSamePoint"])(cacheRef.current.point, point)) {
      _forceAlign(); // Add resize observer


      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["monitorResize"])(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  var winResizeRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (monitorWindowResize) {
      if (!winResizeRef.current) {
        winResizeRef.current = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])(window, 'resize', _forceAlign);
      }
    } else if (winResizeRef.current) {
      winResizeRef.current.remove();
      winResizeRef.current = null;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if (react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(childNode)) {
    childNode = react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(childNode, {
      ref: Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RefAlign = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(Align);
RefAlign.displayName = 'Align';
/* harmony default export */ __webpack_exports__["default"] = (RefAlign);

/***/ }),

/***/ "./node_modules/rc-align/es/hooks/useBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-align/es/hooks/useBuffer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (callback, buffer) {
  var calledRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(false);
  var timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});

/***/ }),

/***/ "./node_modules/rc-align/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "./node_modules/rc-align/es/Align.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_Align__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-align/es/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-align/es/util.js ***!
  \******************************************/
/*! exports provided: isSamePoint, restoreFocus, monitorResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamePoint", function() { return isSamePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreFocus", function() { return restoreFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorResize", function() { return monitorResize; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");



function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__["default"])(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotion.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotion.js ***!
  \************************************************/
/*! exports provided: genCSSMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotion", function() { return genCSSMotion; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useStatus */ "./node_modules/rc-motion/es/hooks/useStatus.js");
/* harmony import */ var _DomWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DomWrapper */ "./node_modules/rc-motion/es/DomWrapper.js");
/* harmony import */ var _hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");





/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */










/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

    function getDomElement() {
      try {
        return Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__["default"])(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = Object(_hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__["default"])(supportMotion, visible, getDomElement, props),
        _useStatus2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rended
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var originRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(ref);
    originRef.current = ref;
    var setNodeRef = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (node) {
      nodeRef.current = node;
      Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__["fillRef"])(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_9__["STATUS_NONE"] || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender) {
        motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__["STEP_PREPARE"]) {
        statusSuffix = 'prepare';
      } else if (Object(_hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__["isActive"])(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__["STEP_START"]) {
        statusSuffix = 'start';
      }

      motionChildren = children(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(Object(_util_motion__WEBPACK_IMPORTED_MODULE_8__["getTransitionName"])(motionName, status), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, Object(_util_motion__WEBPACK_IMPORTED_MODULE_8__["getTransitionName"])(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DomWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ __webpack_exports__["default"] = (genCSSMotion(_util_motion__WEBPACK_IMPORTED_MODULE_8__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotionList.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotionList.js ***!
  \****************************************************/
/*! exports provided: genCSSMotionList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotionList", function() { return genCSSMotionList; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _util_diff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/diff */ "./node_modules/rc-motion/es/util/diff.js");








/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */

function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CSSMotion__WEBPACK_IMPORTED_MODULE_8__["default"];

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CSSMotionList, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(CSSMotionList);

    function CSSMotionList() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CSSMotionList);

      _this = _super.apply(this, arguments);
      _this.state = {
        keyEntities: []
      };

      _this.removeKey = function (removeKey) {
        _this.setState(function (_ref) {
          var keyEntities = _ref.keyEntities;
          return {
            keyEntities: keyEntities.map(function (entity) {
              if (entity.key !== removeKey) return entity;
              return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, entity), {}, {
                status: _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVED"]
              });
            })
          };
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["component", "children", "onVisibleChanged"]);

        var Component = component || react__WEBPACK_IMPORTED_MODULE_7__["Fragment"];
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["status"]);

          var visible = status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_ADD"] || status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_KEEP"];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](CSSMotion, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = Object(_util_diff__WEBPACK_IMPORTED_MODULE_10__["parseKeys"])(keys);
        var mixedKeyEntities = Object(_util_diff__WEBPACK_IMPORTED_MODULE_10__["diffKeys"])(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVED"] && entity.status === _util_diff__WEBPACK_IMPORTED_MODULE_10__["STATUS_REMOVE"]) {
              return false;
            }

            return true;
          })
        };
      }
    }]);

    return CSSMotionList;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
/* harmony default export */ __webpack_exports__["default"] = (genCSSMotionList(_util_motion__WEBPACK_IMPORTED_MODULE_9__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-motion/es/DomWrapper.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-motion/es/DomWrapper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var DomWrapper = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DomWrapper, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(DomWrapper);

  function DomWrapper() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DomWrapper);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js":
/*!***************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/motion */ "./node_modules/rc-motion/es/util/motion.js");



/* harmony default export */ __webpack_exports__["default"] = (function (callback) {
  var cacheElementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Cache callback

  var callbackRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["transitionEndName"], onInternalMotionEnd);
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["animationEndName"], onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["transitionEndName"], onInternalMotionEnd);
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__["animationEndName"], onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");

 // It's safe to use `useLayoutEffect` but the warning is annoying

var useIsomorphicLayoutEffect = Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])() ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useIsomorphicLayoutEffect);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useNextFrame.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useNextFrame.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var nextFrameRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  function cancelNextFrame() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useState.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useState.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMountStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useMountStatus(defaultValue) {
  var destroyRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStatus.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStatus.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStatus; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useState */ "./node_modules/rc-motion/es/hooks/useState.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useStepQueue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");
/* harmony import */ var _useDomMotionEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useDomMotionEvents */ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js");










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(null),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  var deadlineRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var destroyedRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false); // =========================== Dom Node ===========================

  var cacheElementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================


  var activeRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"] && activeRef.current) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"] && activeRef.current) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"] && activeRef.current) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (canEnd !== false && !destroyedRef.current) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = Object(_useDomMotionEvents__WEBPACK_IMPORTED_MODULE_8__["default"])(onInternalMotionEnd),
      _useDomMotionEvents2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case 'appear':
        return _ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onAppearPrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onAppearStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onAppearActive), _ref2;

      case 'enter':
        return _ref3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onEnterPrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onEnterStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onEnterActive), _ref3;

      case 'leave':
        return _ref4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"], onLeavePrepare), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"], onLeaveStart), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"], onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = Object(_useStepQueue__WEBPACK_IMPORTED_MODULE_7__["default"])(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]) {
      var onPrepare = eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]];

      if (!onPrepare) {
        return _useStepQueue__WEBPACK_IMPORTED_MODULE_7__["SkipStep"];
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update


    // Rest step is sync update
    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_ACTIVE"]) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return _useStepQueue__WEBPACK_IMPORTED_MODULE_7__["DoStep"];
  }),
      _useStepQueue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = Object(_useStepQueue__WEBPACK_IMPORTED_MODULE_7__["isActive"])(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"];
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"];
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"];
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if ( // Cancel appear
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_APPEAR"] && !motionAppear || // Cancel enter
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_ENTER"] && !motionEnter || // Cancel leave
    status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_LEAVE"] && !motionLeave) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (asyncVisible !== undefined && status === _interface__WEBPACK_IMPORTED_MODULE_4__["STATUS_NONE"]) {
      onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_4__["STEP_PREPARE"]] && step === _interface__WEBPACK_IMPORTED_MODULE_4__["STEP_START"]) {
    mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStepQueue.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStepQueue.js ***!
  \*********************************************************/
/*! exports provided: SkipStep, DoStep, isActive, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipStep", function() { return SkipStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoStep", function() { return DoStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActive", function() { return isActive; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useNextFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useNextFrame */ "./node_modules/rc-motion/es/hooks/useNextFrame.js");





var STEP_QUEUE = [_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_PREPARE"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_START"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVE"], _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"]];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVE"] || step === _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"];
}
/* harmony default export */ __webpack_exports__["default"] = (function (status, callback) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_NONE"]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _useNextFrame = Object(_useNextFrame__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _useNextFrame2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(_interface__WEBPACK_IMPORTED_MODULE_2__["STEP_PREPARE"]);
  }

  Object(_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (step !== _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_NONE"] && step !== _interface__WEBPACK_IMPORTED_MODULE_2__["STEP_ACTIVATED"]) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-motion/es/index.js ***!
  \********************************************/
/*! exports provided: CSSMotionList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSMotionList */ "./node_modules/rc-motion/es/CSSMotionList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSMotionList", function() { return _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_CSSMotion__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-motion/es/interface.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/interface.js ***!
  \************************************************/
/*! exports provided: STATUS_NONE, STATUS_APPEAR, STATUS_ENTER, STATUS_LEAVE, STEP_NONE, STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_NONE", function() { return STATUS_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_APPEAR", function() { return STATUS_APPEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ENTER", function() { return STATUS_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_LEAVE", function() { return STATUS_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_NONE", function() { return STEP_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_PREPARE", function() { return STEP_PREPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_START", function() { return STEP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_ACTIVE", function() { return STEP_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_ACTIVATED", function() { return STEP_ACTIVATED; });
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

/***/ }),

/***/ "./node_modules/rc-motion/es/util/diff.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/util/diff.js ***!
  \************************************************/
/*! exports provided: STATUS_ADD, STATUS_KEEP, STATUS_REMOVE, STATUS_REMOVED, wrapKeyToObject, parseKeys, diffKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ADD", function() { return STATUS_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_KEEP", function() { return STATUS_KEEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_REMOVE", function() { return STATUS_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_REMOVED", function() { return STATUS_REMOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapKeyToObject", function() { return wrapKeyToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKeys", function() { return parseKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffKeys", function() { return diffKeys; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

/***/ }),

/***/ "./node_modules/rc-motion/es/util/motion.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-motion/es/util/motion.js ***!
  \**************************************************/
/*! exports provided: getVendorPrefixes, getVendorPrefixedEventName, supportTransition, animationEndName, transitionEndName, getTransitionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixes", function() { return getVendorPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedEventName", function() { return getVendorPrefixedEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportTransition", function() { return supportTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEndName", function() { return animationEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEndName", function() { return transitionEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionName", function() { return getTransitionName; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");

 // ================= Transition =================
// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])(), typeof window !== 'undefined' ? window : {});
var style = {};

if (Object(rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}

/***/ }),

/***/ "./node_modules/rc-slider/es/Handle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Handle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Handle; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");












var Handle = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Handle, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(Handle);

  function Handle() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Handle);

    _this = _super.apply(this, arguments);
    _this.state = {
      clickFocused: false
    };

    _this.setHandleRef = function (node) {
      _this.handle = node;
    };

    _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    };

    _this.handleMouseDown = function (e) {
      // avoid selecting text during drag
      // https://github.com/ant-design/ant-design/issues/25010
      e.preventDefault(); // fix https://github.com/ant-design/ant-design/issues/15324

      _this.focus();
    };

    _this.handleBlur = function () {
      _this.setClickFocus(false);
    };

    _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Handle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    }
  }, {
    key: "clickFocus",
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref, _ref2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          vertical = _this$props.vertical,
          reverse = _this$props.reverse,
          offset = _this$props.offset,
          style = _this$props.style,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaValueTextFormatter = _this$props.ariaValueTextFormatter,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]);

      var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(this.props.className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
      var positionStyle = vertical ? (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);

      var elStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style), positionStyle);

      var mergedTabIndex = tabIndex || 0;

      if (disabled || tabIndex === null) {
        mergedTabIndex = null;
      }

      var ariaValueText;

      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: this.setHandleRef,
        tabIndex: mergedTabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown // aria attribute
        ,
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": !!disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }));
    }
  }]);

  return Handle;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./node_modules/rc-slider/es/Range.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/Range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");













var _trimAlignValue = function trimAlignValue(_ref) {
  var value = _ref.value,
      handle = _ref.handle,
      bounds = _ref.bounds,
      props = _ref.props;
  var allowCross = props.allowCross,
      pushable = props.pushable;
  var thershold = Number(pushable);
  var valInRange = _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValueInRange"](value, props);
  var valNotConflict = valInRange;

  if (!allowCross && handle != null && bounds !== undefined) {
    if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) {
      valNotConflict = bounds[handle - 1] + thershold;
    }

    if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) {
      valNotConflict = bounds[handle + 1] - thershold;
    }
  }

  return _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValuePrecision"](valNotConflict, props);
};

var Range = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Range, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Range);

  function Range(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Range);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      var bounds = _this.getValue();

      var value = _this.calcValueByPos(position);

      var closestBound = _this.getClosestBound(value);

      var index = _this.getBoundNeedMoving(value, closestBound);

      var prevValue = bounds[index];
      if (value === prevValue) return null;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(bounds);

      nextBounds[index] = value;
      return nextBounds;
    };

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (!handle) {
        _this.dragTrack = false;
      }

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;
    var initialValue = Array.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _trimAlignValue({
        value: v,
        handle: i,
        props: props
      });
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;
    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Range, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "getSliderLength",
    value: function getSliderLength() {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      if (min === prevProps.min && max === prevProps.max) {
        return;
      }

      var currentValue = value || prevState.bounds;

      if (currentValue.some(function (v) {
        return _utils__WEBPACK_IMPORTED_MODULE_11__["isValueOutOfRange"](v, _this2.props);
      })) {
        var newValues = currentValue.map(function (v) {
          return _utils__WEBPACK_IMPORTED_MODULE_11__["ensureValueInRange"](v, _this2.props);
        });
        onChange(newValues);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);

      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};
        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state), state);

      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      var props = this.props,
          state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);
      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({
        bounds: nextBounds
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position, dragTrack, startBounds) {
      _utils__WEBPACK_IMPORTED_MODULE_11__["pauseEvent"](e);
      var state = this.state,
          props = this.props;
      var maxValue = props.max || 100;
      var minValue = props.min || 0;

      if (dragTrack) {
        var pos = props.vertical ? -position : position;
        pos = props.reverse ? -pos : pos;
        var max = maxValue - Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startBounds));
        var min = minValue - Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startBounds));
        var ratio = Math.min(Math.max(pos / (this.getSliderLength() / 100), min), max);
        var nextBounds = startBounds.map(function (v) {
          return Math.floor(Math.max(Math.min(v + ratio, maxValue), minValue));
        });

        if (state.bounds.map(function (c, i) {
          return c === nextBounds[i];
        }).some(function (c) {
          return !c;
        })) {
          this.onChange({
            bounds: nextBounds
          });
        }

        return;
      }

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;
      this.moveTo(value);
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_11__["getKeyboardValueMutator"](e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_11__["pauseEvent"](e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;
        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);

        var value = _trimAlignValue({
          value: mutatedValue,
          handle: handle,
          bounds: state.bounds,
          props: props
        });

        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: "getClosestBound",
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;
      var closestBound = 0;

      for (var i = 1; i < bounds.length - 1; i += 1) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }

      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }

      return closestBound;
    }
  }, {
    key: "getBoundNeedMoving",
    value: function getBoundNeedMoving(value, closestBound) {
      var _this$state = this.state,
          bounds = _this$state.bounds,
          recent = _this$state.recent;
      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }

      return boundNeedMoving;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      var bounds = this.state.bounds;
      return bounds[bounds.length - 1];
    }
    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: "getPoints",
    value: function getPoints() {
      var _this$props3 = this.props,
          marks = _this$props3.marks,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;
      var cache = this.internalPointsCache;

      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, marks);

        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }

        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this.internalPointsCache = {
          marks: marks,
          step: step,
          points: points
        };
      }

      return this.internalPointsCache.points;
    }
  }, {
    key: "moveTo",
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;

      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }

      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });

      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: "pushSurroundingHandles",
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var direction = 0;

      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }

      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        // eslint-disable-next-line no-param-reassign
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: "pushHandle",
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];

      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          // eslint-disable-next-line no-param-reassign
          bounds[handle] = originalValue;
          return false;
        }

        currentValue = bounds[handle];
      } // the handle was pushed enough to create the needed `amount` gap


      return true;
    }
  }, {
    key: "pushHandleOnePoint",
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;

      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }

      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var diffToNext = direction * (bounds[nextHandle] - nextValue);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      } // push the handle
      // eslint-disable-next-line no-param-reassign


      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(value) {
      var _this$state2 = this.state,
          handle = _this$state2.handle,
          bounds = _this$state2.bounds;
      return _trimAlignValue({
        value: value,
        handle: handle,
        bounds: bounds,
        props: this.props
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          handle = _this$state3.handle,
          bounds = _this$state3.bounds;
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          vertical = _this$props4.vertical,
          included = _this$props4.included,
          disabled = _this$props4.disabled,
          min = _this$props4.min,
          max = _this$props4.max,
          reverse = _this$props4.reverse,
          handleGenerator = _this$props4.handle,
          trackStyle = _this$props4.trackStyle,
          handleStyle = _this$props4.handleStyle,
          tabIndex = _this$props4.tabIndex,
          ariaLabelGroupForHandles = _this$props4.ariaLabelGroupForHandles,
          ariaLabelledByGroupForHandles = _this$props4.ariaLabelledByGroupForHandles,
          ariaValueTextFormatterGroupForHandles = _this$props4.ariaValueTextFormatterGroupForHandles;
      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });
      var handleClassName = "".concat(prefixCls, "-handle");
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var mergedTabIndex = tabIndex[i] || 0;

        if (disabled || tabIndex[i] === null) {
          mergedTabIndex = null;
        }

        var dragging = handle === i;
        return handleGenerator({
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, handleClassName, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-").concat(i + 1), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-dragging"), dragging), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          dragging: dragging,
          offset: offsets[i],
          value: v,
          index: i,
          tabIndex: mergedTabIndex,
          min: min,
          max: max,
          reverse: reverse,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          },
          ariaLabel: ariaLabelGroupForHandles[i],
          ariaLabelledBy: ariaLabelledByGroupForHandles[i],
          ariaValueTextFormatter: ariaValueTextFormatterGroupForHandles[i]
        });
      });
      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track-").concat(i), true), _classNames2));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: trackClassName,
          vertical: vertical,
          reverse: reverse,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });
      return {
        tracks: tracks,
        handles: handles
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!('value' in props || 'min' in props || 'max' in props)) {
        return null;
      }

      var value = props.value || state.bounds;
      var nextBounds = value.map(function (v, i) {
        return _trimAlignValue({
          value: v,
          handle: i,
          bounds: state.bounds,
          props: props
        });
      });

      if (state.bounds.length === nextBounds.length) {
        if (nextBounds.every(function (v, i) {
          return v === state.bounds[i];
        })) {
          return null;
        }
      } else {
        nextBounds = value.map(function (v, i) {
          return _trimAlignValue({
            value: v,
            handle: i,
            props: props
          });
        });
      }

      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        bounds: nextBounds
      });
    }
  }]);

  return Range;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
/* eslint-enable */


Range.displayName = 'Range';
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  draggableTrack: false,
  tabIndex: [],
  ariaLabelGroupForHandles: [],
  ariaLabelledByGroupForHandles: [],
  ariaValueTextFormatterGroupForHandles: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_10__["default"])(Range));

/***/ }),

/***/ "./node_modules/rc-slider/es/Slider.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Slider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");











var Slider = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider);

  /* eslint-enable */
  function Slider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    _this = _super.call(this, props);

    _this.positionGetValue = function (position) {
      return [];
    };

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();

      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        dragging: false
      });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;
    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          onChange = _this$props.onChange;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      var theValue = value !== undefined ? value : prevState.value;
      var nextValue = this.trimAlignValue(theValue, this.props);

      if (nextValue === prevState.value) {
        return;
      } // eslint-disable-next-line


      this.setState({
        value: nextValue
      });

      if (!(min === prevProps.min && max === prevProps.max) && _utils__WEBPACK_IMPORTED_MODULE_9__["isValueOutOfRange"](theValue, this.props)) {
        onChange(nextValue);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state), {}, {
        value: this.props.max
      }) : state;

      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      this.setState({
        dragging: true
      });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      if (value === prevValue) return;
      this.prevMovedHandleIndex = 0;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position) {
      _utils__WEBPACK_IMPORTED_MODULE_9__["pauseEvent"](e);
      var oldValue = this.state.value;
      var value = this.calcValueByPos(position);
      if (value === oldValue) return;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_9__["getKeyboardValueMutator"](e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_9__["pauseEvent"](e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        this.onChange({
          value: value
        });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      var minPoint = this.props.startPoint || this.props.min;
      return this.state.value > minPoint ? minPoint : this.state.value;
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      if (this.state.value < this.props.startPoint) {
        return this.props.startPoint;
      }

      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props), nextProps);

      var val = _utils__WEBPACK_IMPORTED_MODULE_9__["ensureValueInRange"](v, mergedProps);
      return _utils__WEBPACK_IMPORTED_MODULE_9__["ensureValuePrecision"](val, mergedProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          vertical = _this$props3.vertical,
          included = _this$props3.included,
          disabled = _this$props3.disabled,
          minimumTrackStyle = _this$props3.minimumTrackStyle,
          trackStyle = _this$props3.trackStyle,
          handleStyle = _this$props3.handleStyle,
          tabIndex = _this$props3.tabIndex,
          ariaLabelForHandle = _this$props3.ariaLabelForHandle,
          ariaLabelledByForHandle = _this$props3.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = _this$props3.ariaValueTextFormatterForHandle,
          min = _this$props3.min,
          max = _this$props3.max,
          startPoint = _this$props3.startPoint,
          reverse = _this$props3.reverse,
          handleGenerator = _this$props3.handle;
      var _this$state = this.state,
          value = _this$state.value,
          dragging = _this$state.dragging;
      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: "".concat(prefixCls, "-handle"),
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabIndex: tabIndex,
        ariaLabel: ariaLabelForHandle,
        ariaLabelledBy: ariaLabelledByForHandle,
        ariaValueTextFormatter: ariaValueTextFormatterForHandle,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });
      var trackOffset = startPoint !== undefined ? this.calcOffset(startPoint) : 0;
      var mergedTrackStyle = trackStyle[0] || trackStyle;
      var track = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Track__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "".concat(prefixCls, "-track"),
        vertical: vertical,
        included: included,
        offset: trackOffset,
        reverse: reverse,
        length: offset - trackOffset,
        style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, minimumTrackStyle), mergedTrackStyle)
      });
      return {
        tracks: track,
        handles: handle
      };
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_createSlider__WEBPACK_IMPORTED_MODULE_8__["default"])(Slider));

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Marks.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Marks.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(markPoint) === 'object' && ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text-active"), isActive), _classNames));

    var bottomStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));

    var leftStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
    }, reverse ? 'right' : 'left', "".concat((point - min) / range * 100, "%"));

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), markPoint.style) : style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: markClassName,
      style: markStyle,
      key: point,
      onMouseDown: function onMouseDown(e) {
        return onClickLabel(e, point);
      },
      onTouchStart: function onTouchStart(e) {
        return onClickLabel(e, point);
      }
    }, markLabel);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: className
  }, elements);
};

/* harmony default export */ __webpack_exports__["default"] = (Marks);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/SliderTooltip.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/SliderTooltip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");





var SliderTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](function (props, ref) {
  var visible = props.visible,
      overlay = props.overlay;
  var innerRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var tooltipRef = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__["composeRef"])(ref, innerRef);
  var rafRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  function cancelKeepAlign() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"].cancel(rafRef.current);
  }

  function keepAlign() {
    rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var _innerRef$current;

      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.forcePopupAlign();
    });
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible, overlay]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rc_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: tooltipRef
  }, props));
});
/* harmony default export */ __webpack_exports__["default"] = (SliderTooltip);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Steps.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Steps.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");






var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'top' : 'bottom', offset)) : Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style), activeDotStyle);
    }

    var pointClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-active"), isActived), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: pointClassName,
      style: style,
      key: point
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, elements);
};

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Track.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Track.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      style = props.style;
  var length = props.length,
      offset = props.offset,
      reverse = props.reverse;

  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }

  var positonStyle = vertical ? (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "width", "".concat(length, "%")), _ref2);

  var elStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), positonStyle);

  return included ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className,
    style: elStyle
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/createSlider.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/createSlider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSlider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/es/common/Steps.js");
/* harmony import */ var _Marks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/es/common/Marks.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils */ "./node_modules/rc-slider/es/utils.js");



















/* eslint-disable @typescript-eslint/no-explicit-any */

function noop() {}

function createSlider(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ComponentEnhancer, _Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_10__["default"])(ComponentEnhancer);

    function ComponentEnhancer(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ComponentEnhancer);

      _this = _super.call(this, props);

      _this.onDown = function (e, position) {
        var p = position;
        var _this$props = _this.props,
            draggableTrack = _this$props.draggableTrack,
            isVertical = _this$props.vertical;
        var bounds = _this.state.bounds;
        var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
        var inPoint = _utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs);
        _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function (n, i) {
          var v = !i ? n >= bounds[i] : true;
          return i === value.length - 1 ? n <= bounds[i] : v;
        }).some(function (c) {
          return !c;
        });

        if (_this.dragTrack) {
          _this.dragOffset = p;
          _this.startBounds = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(bounds);
        } else {
          if (!inPoint) {
            _this.dragOffset = 0;
          } else {
            var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_18__["getHandleCenterPosition"](isVertical, e.target);
            _this.dragOffset = p - handlePosition;
            p = handlePosition;
          }

          _this.onStart(p);
        }
      };

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        _this.removeDocumentEvents();

        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getMousePosition"](isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isNotTouchEvent"](e)) return;
        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getTouchPosition"](isVertical, e);

        _this.onDown(e, position);

        _this.addDocumentTouchEvents();

        _utils__WEBPACK_IMPORTED_MODULE_18__["pauseEvent"](e);
      };

      _this.onFocus = function (e) {
        var _this$props2 = _this.props,
            onFocus = _this$props2.onFocus,
            vertical = _this$props2.vertical;

        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs) && !_this.dragTrack) {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_18__["getHandleCenterPosition"](vertical, e.target);
          _this.dragOffset = 0;

          _this.onStart(handlePosition);

          _utils__WEBPACK_IMPORTED_MODULE_18__["pauseEvent"](e);

          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        if (!_this.dragTrack) {
          _this.onEnd();
        }

        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getMousePosition"](_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onTouchMove = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_18__["isNotTouchEvent"](e) || !_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_18__["getTouchPosition"](_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && _utils__WEBPACK_IMPORTED_MODULE_18__["isEventFromHandle"](e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();

        _this.onChange({
          value: value
        }); // eslint-disable-next-line react/no-unused-state


        _this.setState({
          value: value
        }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;
      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line

      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
      _this.handlesRefs = {};
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentEnhancer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var _this$props3 = this.props,
            autoFocus = _this$props3.autoFocus,
            disabled = _this$props3.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this)) Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _this$props4 = this.props,
            vertical = _this$props4.vertical,
            reverse = _this$props4.reverse;
        var rect = slider.getBoundingClientRect();

        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }

        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: "getSliderLength",
      value: function getSliderLength() {
        var slider = this.sliderRef;

        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_12__["default"])(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function removeDocumentEvents() {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: "focus",
      value: function focus() {
        var _this$handlesRefs$;

        if (this.props.disabled) {
          return;
        }

        (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        var _this2 = this;

        if (this.props.disabled) {
          return;
        }

        Object.keys(this.handlesRefs).forEach(function (key) {
          var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;

          (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 ? void 0 : (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 ? void 0 : _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
        });
      }
    }, {
      key: "calcValue",
      value: function calcValue(offset) {
        var _this$props5 = this.props,
            vertical = _this$props5.vertical,
            min = _this$props5.min,
            max = _this$props5.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: "calcValueByPos",
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: "calcOffset",
      value: function calcOffset(value) {
        var _this$props6 = this.props,
            min = _this$props6.min,
            max = _this$props6.max;
        var ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
      }
    }, {
      key: "saveHandle",
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props7 = this.props,
            prefixCls = _this$props7.prefixCls,
            className = _this$props7.className,
            marks = _this$props7.marks,
            dots = _this$props7.dots,
            step = _this$props7.step,
            included = _this$props7.included,
            disabled = _this$props7.disabled,
            vertical = _this$props7.vertical,
            reverse = _this$props7.reverse,
            min = _this$props7.min,
            max = _this$props7.max,
            children = _this$props7.children,
            maximumTrackStyle = _this$props7.maximumTrackStyle,
            style = _this$props7.style,
            railStyle = _this$props7.railStyle,
            dotStyle = _this$props7.dotStyle,
            activeDotStyle = _this$props7.activeDotStyle;

        var _get$call = Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer.prototype), "render", this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames__WEBPACK_IMPORTED_MODULE_13___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, "".concat(prefixCls, "-vertical"), vertical), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_classNames, className, className), _classNames));
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "".concat(prefixCls, "-rail"),
          style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, maximumTrackStyle), railStyle)
        }), tracks, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Steps__WEBPACK_IMPORTED_MODULE_15__["default"], {
          prefixCls: prefixCls,
          vertical: vertical,
          reverse: reverse,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }), handles, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Marks__WEBPACK_IMPORTED_MODULE_16__["default"], {
          className: "".concat(prefixCls, "-mark"),
          onClickLabel: disabled ? noop : this.onClickMarkLabel,
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          reverse: reverse
        }), children);
      }
    }]);

    return ComponentEnhancer;
  }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, Component.defaultProps), {}, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(props) {
      var index = props.index,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["index"]);

      delete restProps.dragging;

      if (restProps.value === null) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
        key: index
      }));
    },
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/createSliderWithTooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-slider/es/createSliderWithTooltip.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSliderWithTooltip; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");











function createSliderWithTooltip(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentWrapper, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(ComponentWrapper);

    function ComponentWrapper() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ComponentWrapper);

      _this = _super.apply(this, arguments);
      _this.state = {
        visibles: {}
      };

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, prevState.visibles), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["value", "dragging", "index", "disabled"]);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle,
            getTooltipContainer = _this$props.getTooltipContainer;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === void 0 ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === void 0 ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === void 0 ? false : _tipProps$visible,
            restTooltipProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(tipProps, ["prefixCls", "overlay", "placement", "visible"]);

        var handleStyleWithIndex;

        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_common_SliderTooltip__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restTooltipProps, {
          getTooltipContainer: getTooltipContainer,
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
          key: index
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Handle__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
          style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, handleStyleWithIndex),
          value: value,
          onMouseEnter: function onMouseEnter() {
            return _this.handleTooltipVisibleChange(index, true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this.handleTooltipVisibleChange(index, false);
          }
        })));
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentWrapper, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          handle: this.handleWithTooltip
        }));
      }
    }]);

    return ComponentWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component), _a.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },
    handleStyle: [{}],
    tipProps: {},
    getTooltipContainer: function getTooltipContainer(node) {
      return node.parentNode;
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/index.js ***!
  \********************************************/
/*! exports provided: default, Range, Handle, createSliderWithTooltip, SliderTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./node_modules/rc-slider/es/Slider.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Range */ "./node_modules/rc-slider/es/Range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _Range__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return _Handle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSliderWithTooltip */ "./node_modules/rc-slider/es/createSliderWithTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSliderWithTooltip", function() { return _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderTooltip", function() { return _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__["default"]; });






var InternalSlider = _Slider__WEBPACK_IMPORTED_MODULE_0__["default"];
InternalSlider.Range = _Range__WEBPACK_IMPORTED_MODULE_1__["default"];
InternalSlider.Handle = _Handle__WEBPACK_IMPORTED_MODULE_2__["default"];
InternalSlider.createSliderWithTooltip = _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (InternalSlider);


/***/ }),

/***/ "./node_modules/rc-slider/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/utils.js ***!
  \********************************************/
/*! exports provided: isEventFromHandle, isValueOutOfRange, isNotTouchEvent, getClosestPoint, getPrecision, getMousePosition, getTouchPosition, getHandleCenterPosition, ensureValueInRange, ensureValuePrecision, pauseEvent, calculateNextValue, getKeyboardValueMutator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEventFromHandle", function() { return isEventFromHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueOutOfRange", function() { return isValueOutOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotTouchEvent", function() { return isNotTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestPoint", function() { return getClosestPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrecision", function() { return getPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePosition", function() { return getMousePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchPosition", function() { return getTouchPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHandleCenterPosition", function() { return getHandleCenterPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValueInRange", function() { return ensureValueInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureValuePrecision", function() { return ensureValuePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseEvent", function() { return pauseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNextValue", function() { return calculateNextValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyboardValueMutator", function() { return getKeyboardValueMutator; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");



function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(handles[key]);
    });
  } catch (error) {
    return false;
  }
}
function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  return value < min || value > max;
}
function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}
function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;
  var points = Object.keys(marks).map(parseFloat);

  if (step !== null) {
    var baseNum = Math.pow(10, getPrecision(step));
    var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }

  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(diffs)))];
}
function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;

  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }

  return precision;
}
function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}
function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}
function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }

  if (val >= max) {
    return max;
  }

  return val;
}
function ensureValuePrecision(val, props) {
  var step = props.step;
  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line

  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}
function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };
  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  }

  if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }

  return value;
}
function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;

  switch (e.keyCode) {
    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].UP:
      method = vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT:
      method = !vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN:
      method = vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT:
      method = !vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].END:
      return function (value, props) {
        return props.max;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].HOME:
      return function (value, props) {
        return props.min;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }

  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Content.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Content.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Content = function Content(props) {
  var overlay = props.overlay,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof overlay === 'function' ? overlay() : overlay);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Tooltip.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./node_modules/rc-tooltip/es/Content.js");










var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      motion = props.motion,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);

  var domRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useImperativeHandle"])(ref, function () {
    return domRef.current;
  });

  var extraProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    var _props$arrowContent = props.arrowContent,
        arrowContent = _props$arrowContent === void 0 ? null : _props$arrowContent,
        overlay = props.overlay,
        id = props.id;
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "".concat(prefixCls, "-arrow"),
      key: "arrow"
    }, arrowContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Content__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlay: overlay,
      overlayInnerStyle: overlayInnerStyle
    })];
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_6__["placements"],
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(Tooltip));

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tooltip/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/rc-tooltip/es/Tooltip.js");

/* harmony default export */ __webpack_exports__["default"] = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/placements.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tooltip/es/placements.js ***!
  \**************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/Mask.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/Mask.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");






function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
      motionAppear: true
    }, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__["getMotion"])({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-mask"), className)
    });
  });
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/MobilePopupInner.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var MobilePopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender;
  var elementRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_2__["Children"].count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      ref: motionRef,
      className: mergedClassName,
      style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
/* harmony default export */ __webpack_exports__["default"] = (MobilePopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/PopupInner.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/PopupInner.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _useVisibleStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useVisibleStatus */ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");
/* harmony import */ var _useStretchStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useStretchStyle */ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js");











var PopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart;
  var alignRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = Object(_useStretchStyle__WEBPACK_IMPORTED_MODULE_9__["default"])(stretch),
      _useStretchStyle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = Object(_useVisibleStatus__WEBPACK_IMPORTED_MODULE_7__["default"])(visible, doMeasure),
      _useVisibleStatus2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================


  var prepareResolveRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    if (status === 'align') {
      var nextAlignedClassName = getClassNameFromAlign(matchAlign);
      setAlignedClassName(nextAlignedClassName); // Repeat until not more align needed

      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================


  var motion = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__["getMotion"])(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stretchStyle), {}, {
    zIndex: zIndex
  }, style), {}, {
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    pointerEvents: status === 'stable' ? undefined : 'none'
  }); // Align status


  var alignDisabled = true;

  if ((align === null || align === void 0 ? void 0 : align.points) && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_3__["Children"].count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_align__WEBPACK_IMPORTED_MODULE_4__["default"], {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';
/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mask */ "./node_modules/rc-trigger/es/Popup/Mask.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/Popup/PopupInner.js");
/* harmony import */ var _MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MobilePopupInner */ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js");










var Popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["visible", "mobile"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(visible),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile(Object(rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_PopupInner__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Mask__WEBPACK_IMPORTED_MODULE_6__["default"], cloneProps), popupNode);
});
Popup.displayName = 'Popup';
/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useStretchStyle.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (stretch) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    width: 0,
    height: 0
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  } // Merge stretch style


  var style = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useVisibleStatus.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");





var StatusQueue = ['measure', 'align', null, 'motion'];
/* harmony default export */ __webpack_exports__["default"] = (function (visible, doMeasure) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var destroyRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);

  function setStatus(nextStatus) {
    if (!destroyRef.current) {
      setInternalStatus(nextStatus);
    }
  }

  function cancelRaf() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"].cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';

          default:
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;

      default:
    }

    if (status) {
      rafRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var index, nextStatus;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return function () {
      destroyRef.current = true;
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/context.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-trigger/es/context.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TriggerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
/* harmony default export */ __webpack_exports__["default"] = (TriggerContext);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
/*! exports provided: generateTrigger, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTrigger", function() { return generateTrigger; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/alignUtil */ "./node_modules/rc-trigger/es/utils/alignUtil.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./context */ "./node_modules/rc-trigger/es/context.js");




















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Trigger, _React$Component);

    var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Trigger);

    function Trigger(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createRef"]();
      _this.triggerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createRef"]();

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])(root, target) && !Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_10__["default"])(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile
        }), typeof popup === 'function' ? popup() : popup);
      };

      _this.attachParent = function (popupContainer) {
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"].cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      var popupVisible;

      if ('popupVisible' in props) {
        popupVisible = !!props.popupVisible;
      } else {
        popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: popupVisible,
        popupVisible: popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_13__["default"])(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_9__["default"].cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;

        // for test
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return Object(_utils_alignUtil__WEBPACK_IMPORTED_MODULE_16__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */

    }, {
      key: "setPopupVisible",
      value: function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = react__WEBPACK_IMPORTED_MODULE_7__["Children"].only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_15___default()(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newChildProps);

        if (Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__["supportRef"])(child)) {
          cloneProps.ref = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_12__["composeRef"])(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"](child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_context__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
          value: {
            onPopupMouseDown: this.onPopupMouseDown
          }
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  Trigger.contextType = _context__WEBPACK_IMPORTED_MODULE_18__["default"];
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return Trigger;
}
/* harmony default export */ __webpack_exports__["default"] = (generateTrigger(rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_14__["default"]));

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/alignUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/alignUtil.js ***!
  \*******************************************************/
/*! exports provided: getAlignFromPlacement, getAlignPopupClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignPopupClassName", function() { return getAlignPopupClassName; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/legacyUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/legacyUtil.js ***!
  \********************************************************/
/*! exports provided: getMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMotion", function() { return getMotion; });
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addEventListenerWrap; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/canUseDom.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/canUseDom.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canUseDom; });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/contains.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/contains.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/findDOMNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/findDOMNode.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findDOMNode; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(node);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/isVisible.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/isVisible.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
});

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/KeyCode.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (KeyCode);

/***/ }),

/***/ "./node_modules/rc-util/es/Portal.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-util/es/Portal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



var Portal = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var didUpdate = props.didUpdate,
      getContainer = props.getContainer,
      children = props.children;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Ref return nothing, only for wrapper check exist

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  if (!initRef.current && Object(_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      var _containerRef$current, _containerRef$current2;

      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, containerRef.current) : null;
});
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/rc-util/es/isMobile.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/es/isMobile.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }

  return false;
});

/***/ }),

/***/ "./node_modules/rc-util/es/raf.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/raf.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wrapperRaf; });
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

function wrapperRaf(callback) {
  return raf(callback);
}
wrapperRaf.cancel = caf;

/***/ }),

/***/ "./node_modules/rc-util/es/ref.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/ref.js ***!
  \****************************************/
/*! exports provided: fillRef, composeRef, supportRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRef", function() { return fillRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeRef", function() { return composeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportRef", function() { return supportRef; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_1__);


function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isMemo"])(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-util/es/warning.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/warning.js ***!
  \********************************************/
/*! exports provided: warning, note, resetWarned, call, warningOnce, noteOnce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "note", function() { return note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWarned", function() { return resetWarned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningOnce", function() { return warningOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noteOnce", function() { return noteOnce; });
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ __webpack_exports__["default"] = (warningOnce);
/* eslint-enable */

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./src/componets/Player/index.tsx":
/*!****************************************!*\
  !*** ./src/componets/Player/index.tsx ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_Player_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/Player.Context */ "./src/contexts/Player.Context.ts");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/componets/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Juliana\\Documents\\GitHub\\Podcastr\\podcastrnext\\src\\componets\\Player\\index.tsx",
    _s = $RefreshSig$();







function Player() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_Player_Context__WEBPACK_IMPORTED_MODULE_5__["PlayerContext"]),
      episodeList = _useContext.episodeList,
      currentEpisodeIndex = _useContext.currentEpisodeIndex;

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), episode ?
    /*#__PURE__*/
    // se existe algo em episode faça isso
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this) :
    /*#__PURE__*/
    // senão faça isso
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Selecione um podcastr para ouvir"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 10
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-next.svg",
            alt: "Tocar Pr\xF3xima"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Player, "tQTBMNfOyVyGY1ku5Vu4bVttE/Y=");

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc3VwZXJQcm9wQmFzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2Rpc3Qtd2ViL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvQWxpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9ob29rcy91c2VCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvQ1NTTW90aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL0NTU01vdGlvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvRG9tV3JhcHBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9ob29rcy91c2VEb21Nb3Rpb25FdmVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvaG9va3MvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9ob29rcy91c2VOZXh0RnJhbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvaG9va3MvdXNlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvaG9va3MvdXNlU3RhdHVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL2hvb2tzL3VzZVN0ZXBRdWV1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLW1vdGlvbi9lcy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1tb3Rpb24vZXMvdXRpbC9kaWZmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtbW90aW9uL2VzL3V0aWwvbW90aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL0hhbmRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9SYW5nZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvY29tbW9uL01hcmtzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL2NvbW1vbi9TbGlkZXJUb29sdGlwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2VzL2NvbW1vbi9TdGVwcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jb21tb24vVHJhY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvZXMvY29tbW9uL2NyZWF0ZVNsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9jcmVhdGVTbGlkZXJXaXRoVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL01hc2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL01vYmlsZVBvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL1BvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cC91c2VTdHJldGNoU3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwL3VzZVZpc2libGVTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy91dGlscy9hbGlnblV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL3V0aWxzL2xlZ2FjeVV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vY2FuVXNlRG9tLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9maW5kRE9NTm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvRG9tL2lzVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvS2V5Q29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvUG9ydGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9pc01vYmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvcmFmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9yZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmV0cy9QbGF5ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlBsYXllciIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0IiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiZXBpc29kZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsInByb2dyZXNzIiwic2xpZGVyIiwiZW1wdHlTbGlkZXIiLCJidXR0b25zIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFxRDtBQUN0QztBQUNmLGlDQUFpQyxvRUFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFB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QW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQyxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7O0FBRTlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDLDBEQUEwRDs7QUFFMUQ7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtB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QUNwRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOzs7QUFHQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQWM7QUFDbEM7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQSx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTOzs7QUFHVDtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDOW1CdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJFO0FBQzFDO0FBQ087QUFDeEMsYUFBYSx3REFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQU0sR0FBRzs7QUFFOUIsRUFBRSxpRUFBbUI7QUFDckI7QUFDQSxHQUFHLEVBQUU7O0FBRUwsZ0JBQWdCLG9EQUFNOztBQUV0QiwwQkFBMEIsOERBQVM7QUFDbkM7QUFDQTtBQUNBLEdBQUc7OztBQUdILEVBQUUsdURBQVM7QUFDWDtBQUNBLEdBQUc7QUFDSCxFQUFFLHVEQUFTO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxnQ0FBZ0MsZ0RBQVE7QUFDeEMsQ0FBQztBQUNjLHFFQUFNLEU7Ozs7Ozs7Ozs7OztBQ25DckI7QUFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDWkQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0Esd0I7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RDtBQUN0QjtBQUMzQjtBQUNQO0FBQ0E7QUFDQSxHQUFHLFVBQVUsaUZBQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7O0FBRUEsYUFBYSx1REFBTSxxRUFBcUU7O0FBRXhGO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1COzs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ087QUFDUDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ2UsMEVBQVcsRUFBQztBQUMzQixtQjs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLEVBQUU7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUJBQW1CLEVBQUU7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEVBQUU7QUFDckIsbUJBQW1CLEVBQUU7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsRUFBRTtBQUNyQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEVBQUU7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLG1CQUFtQixFQUFFO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0MsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDLDZCQUE2QixFQUFFLGFBQWE7QUFDNUcsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsbUNBQW1D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QTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDLzVCckI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRU8sU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLG9CQUNvQkMsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FEOUI7QUFBQSxNQUNoQkMsV0FEZ0IsZUFDaEJBLFdBRGdCO0FBQUEsTUFDSEMsbUJBREcsZUFDSEEsbUJBREc7O0FBR3ZCLE1BQU1DLE9BQU8sR0FBR0YsV0FBVyxDQUFDQyxtQkFBRCxDQUEzQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFRSwwREFBTSxDQUFDQyxlQUF2QjtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUMsY0FBVDtBQUF3QixXQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQU1JRixPQUFPO0FBQUE7QUFBSztBQUNaO0FBQUssZUFBUyxFQUFFQywwREFBTSxDQUFDRSxjQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBSyxFQUFHLEdBRFY7QUFFRSxjQUFNLEVBQUcsR0FGWDtBQUdFLFdBQUcsRUFBRUgsT0FBTyxDQUFDSSxTQUhmO0FBSUUsaUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FO0FBQUEsa0JBQVNKLE9BQU8sQ0FBQ0s7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUU7QUFBQSxrQkFBT0wsT0FBTyxDQUFDTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETztBQUFBO0FBV0g7QUFDSjtBQUFLLGVBQVMsRUFBRUwsMERBQU0sQ0FBQ00sV0FBdkI7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkosZUF1QkU7QUFBUSxlQUFTLEVBQUUsQ0FBQ1AsT0FBRCxHQUFVQywwREFBTSxDQUFDTyxLQUFqQixHQUF3QixFQUEzQztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBR1AsMERBQU0sQ0FBQ1EsUUFBeEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVJVCxPQUFPLGdCQUNQLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE8sZ0JBR1A7QUFBSyxtQkFBUyxFQUFFQywwREFBTSxDQUFDUyxNQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRVQsMERBQU0sQ0FBQ1U7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWFFO0FBQUssaUJBQVMsRUFBRVYsMERBQU0sQ0FBQ1csT0FBdkI7QUFBQSxnQ0FDRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsY0FBVDtBQUF3QixlQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsb0JBQVQ7QUFBOEIsZUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBT0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFFWCwwREFBTSxDQUFDWSxVQUF4QztBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLFdBQVQ7QUFBcUIsZUFBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBVUU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLGVBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWFFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5REQ7O0dBOURlbEIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ4ZTUyMDY1MDNjMWMwZjU1MWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCIuL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBnZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBzdXBlclByb3BCYXNlIGZyb20gXCIuL3N1cGVyUHJvcEJhc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IHN1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIHZlbmRvclByZWZpeDtcbnZhciBqc0Nzc01hcCA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgbXM6ICctbXMtJyxcbiAgTzogJy1vLSdcbn07XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCgpIHtcbiAgaWYgKHZlbmRvclByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZlbmRvclByZWZpeDtcbiAgfVxuXG4gIHZlbmRvclByZWZpeCA9ICcnO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGU7XG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmVuZG9yUHJlZml4ID0ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZW5kb3JQcmVmaXg7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBcIlwiLmNvbmNhdChnZXRWZW5kb3JQcmVmaXgoKSwgXCJUcmFuc2l0aW9uUHJvcGVydHlcIikgOiAndHJhbnNpdGlvblByb3BlcnR5Jztcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtTmFtZSgpIHtcbiAgcmV0dXJuIGdldFZlbmRvclByZWZpeCgpID8gXCJcIi5jb25jYXQoZ2V0VmVuZG9yUHJlZml4KCksIFwiVHJhbnNmb3JtXCIpIDogJ3RyYW5zZm9ybSc7XG59XG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2l0aW9uTmFtZSgpO1xuXG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2l0aW9uUHJvcGVydHknKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0obm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lKCk7XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wZXJ0eShub2RlKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCBub2RlLnN0eWxlW2dldFRyYW5zaXRpb25OYW1lKCldO1xufVxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtWFkobm9kZSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcblxuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5yZXBsYWNlKC9bXjAtOVxcLS4sXS9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogcGFyc2VGbG9hdChtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSwgMCksXG4gICAgICB5OiBwYXJzZUZsb2F0KG1hdHJpeFsxM10gfHwgbWF0cml4WzVdLCAwKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufVxudmFyIG1hdHJpeDJkID0gL21hdHJpeFxcKCguKilcXCkvO1xudmFyIG1hdHJpeDNkID0gL21hdHJpeDNkXFwoKC4qKVxcKS87XG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm1YWShub2RlLCB4eSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcblxuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIGFycjtcbiAgICB2YXIgbWF0Y2gyZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgyZCk7XG5cbiAgICBpZiAobWF0Y2gyZCkge1xuICAgICAgbWF0Y2gyZCA9IG1hdGNoMmRbMV07XG4gICAgICBhcnIgPSBtYXRjaDJkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzRdID0geHkueDtcbiAgICAgIGFycls1XSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgXCJtYXRyaXgoXCIuY29uY2F0KGFyci5qb2luKCcsJyksIFwiKVwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaDNkID0gdHJhbnNmb3JtLm1hdGNoKG1hdHJpeDNkKVsxXTtcbiAgICAgIGFyciA9IG1hdGNoM2Quc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbMTJdID0geHkueDtcbiAgICAgIGFyclsxM10gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsIFwibWF0cml4M2QoXCIuY29uY2F0KGFyci5qb2luKCcsJyksIFwiKVwiKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldFRyYW5zZm9ybShub2RlLCBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHh5LngsIFwicHgpIHRyYW5zbGF0ZVkoXCIpLmNvbmNhdCh4eS55LCBcInB4KSB0cmFuc2xhdGVaKDApXCIpKTtcbiAgfVxufVxuXG52YXIgUkVfTlVNID0gL1tcXC0rXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVtcXC0rXT9cXGQrfCkvLnNvdXJjZTtcbnZhciBnZXRDb21wdXRlZFN0eWxlWDsgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0ODU2NTQvMzA0MDYwNVxuXG5mdW5jdGlvbiBmb3JjZVJlbGF5b3V0KGVsZW0pIHtcbiAgdmFyIG9yaWdpbmFsU3R5bGUgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZWxlbS5vZmZzZXRIZWlnaHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbFN0eWxlO1xufVxuXG5mdW5jdGlvbiBjc3MoZWwsIG5hbWUsIHYpIHtcbiAgdmFyIHZhbHVlID0gdjtcblxuICBpZiAoX3R5cGVvZihuYW1lKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIik7XG4gICAgfVxuXG4gICAgZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UG9zaXRpb24oZWxlbSkge1xuICB2YXIgYm94O1xuICB2YXIgeDtcbiAgdmFyIHk7XG4gIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQ7IC8vIOagueaNriBHQlMg5pyA5paw5pWw5o2u77yMQS1HcmFkZSBCcm93c2VycyDpg73lt7LmlK/mjIEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IOaWueazle+8jOS4jeeUqOWGjeiAg+iZkeS8oOe7n+eahOWunueOsOaWueW8j1xuXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIOazqO+8mmpRdWVyeSDov5jogIPomZHlh4/ljrsgZG9jRWxlbS5jbGllbnRMZWZ0L2NsaWVudFRvcFxuICAvLyDkvYbmtYvor5Xlj5HnjrDvvIzov5nmoLflj43ogIzkvJrlr7zoh7TlvZMgaHRtbCDlkowgYm9keSDmnInovrnot50v6L655qGG5qC35byP5pe277yM6I635Y+W55qE5YC85LiN5q2j56GuXG4gIC8vIOatpOWklu+8jGllNiDkvJrlv73nlaUgaHRtbCDnmoQgbWFyZ2luIOWAvO+8jOW5uOi/kOWcsOaYr+ayoeacieiwgeS8muWOu+iuvue9riBodG1sIOeahCBtYXJnaW5cblxuICB4ID0gYm94LmxlZnQ7XG4gIHkgPSBib3gudG9wOyAvLyBJbiBJRSwgbW9zdCBvZiB0aGUgdGltZSwgMiBleHRyYSBwaXhlbHMgYXJlIGFkZGVkIHRvIHRoZSB0b3AgYW5kIGxlZnRcbiAgLy8gZHVlIHRvIHRoZSBpbXBsaWNpdCAyLXBpeGVsIGluc2V0IGJvcmRlci4gIEluIElFNi83IHF1aXJrcyBtb2RlIGFuZFxuICAvLyBJRTYgc3RhbmRhcmRzIG1vZGUsIHRoaXMgYm9yZGVyIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHNldHRpbmcgdGhlXG4gIC8vIGRvY3VtZW50IGVsZW1lbnQncyBib3JkZXIgdG8gemVybyAtLSB0aHVzLCB3ZSBjYW5ub3QgcmVseSBvbiB0aGVcbiAgLy8gb2Zmc2V0IGFsd2F5cyBiZWluZyAyIHBpeGVscy5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG4gIC8vIGllIOS4i+W6lOivpeWHj+WOu+eql+WPo+eahOi+ueahhuWQp++8jOavleern+m7mOiupCBhYnNvbHV0ZSDpg73mmK/nm7jlr7nnqpflj6PlrprkvY3nmoRcbiAgLy8g56qX5Y+j6L655qGG5qCH5YeG5piv6K6+IGRvY3VtZW50RWxlbWVudCAscXVpcmtzIOaXtuiuvue9riBib2R5XG4gIC8vIOacgOWlveemgeatouWcqCBib2R5IOWSjCBodG1sIOS4iui+ueahhiDvvIzkvYYgaWUgPCA5IGh0bWwg6buY6K6k5pyJIDJweCDvvIzlh4/ljrtcbiAgLy8g5L2G5piv6Z2eIGllIOS4jeWPr+iDveiuvue9rueql+WPo+i+ueahhu+8jGJvZHkgaHRtbCDkuZ/kuI3mmK/nqpflj6MgLGllIOWPr+S7pemAmui/hyBodG1sLGJvZHkg6K6+572uXG4gIC8vIOagh+WHhiBpZSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5bCx5pivIGJvcmRlci10b3BcbiAgLy8gaWU3IGh0bWwg5Y2z56qX5Y+j6L655qGG5pS55Y+Y5LiN5LqG44CC5rC46L+c5Li6IDJcbiAgLy8g5L2G5qCH5YeGIGZpcmVmb3gvY2hyb21lL2llOSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5piv56qX5Y+j6L655qGG77yM5Y2z5L2/6K6+5LqGIGJvcmRlci10b3Ag5Lmf5Li6IDBcblxuICB4IC09IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgeSAtPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgdmFyIHJldCA9IHdbXCJwYWdlXCIuY29uY2F0KHRvcCA/ICdZJyA6ICdYJywgXCJPZmZzZXRcIildO1xuICB2YXIgbWV0aG9kID0gXCJzY3JvbGxcIi5jb25jYXQodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuXG4gIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgIHZhciBkID0gdy5kb2N1bWVudDsgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG5cbiAgICByZXQgPSBkLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuXG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgLy8gbXVzdCB1c2UgPT0gZm9yIGllOFxuXG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudChub2RlKSB7XG4gIGlmIChpc1dpbmRvdyhub2RlKSkge1xuICAgIHJldHVybiBub2RlLmRvY3VtZW50O1xuICB9XG5cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG5hbWUsIGNzKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gY3M7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIGQgPSBnZXREb2N1bWVudChlbGVtKTtcbiAgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGUgfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpOyAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy82MVxuXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoXCJeKFwiLmNvbmNhdChSRV9OVU0sIFwiKSg/IXB4KVthLXolXSskXCIpLCAnaScpO1xuXG52YXIgUkVfUE9TID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIENVUlJFTlRfU1RZTEUgPSAnY3VycmVudFN0eWxlJztcbnZhciBSVU5USU1FX1NUWUxFID0gJ3J1bnRpbWVTdHlsZSc7XG52YXIgTEVGVCA9ICdsZWZ0JztcbnZhciBQWCA9ICdweCc7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlSUUoZWxlbSwgbmFtZSkge1xuICAvLyBjdXJyZW50U3R5bGUgbWF5YmUgbnVsbFxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzUyMzEuYXNweFxuICB2YXIgcmV0ID0gZWxlbVtDVVJSRU5UX1NUWUxFXSAmJiBlbGVtW0NVUlJFTlRfU1RZTEVdW25hbWVdOyAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuICAvLyBGcm9tIHRoZSBhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXG4gIC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcbiAgLy8gSWYgd2UncmUgbm90IGRlYWxpbmcgd2l0aCBhIHJlZ3VsYXIgcGl4ZWwgbnVtYmVyXG4gIC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xuICAvLyBleGNsdWRlIGxlZnQgcmlnaHQgZm9yIHJlbGF0aXZpdHlcblxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTsgLy8gcHJldmVudCBmbGFzaGluZyBvZiBjb250ZW50XG5cbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gZWxlbVtDVVJSRU5UX1NUWUxFXVtMRUZUXTsgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuXG4gICAgc3R5bGVbTEVGVF0gPSBuYW1lID09PSAnZm9udFNpemUnID8gJzFlbScgOiByZXQgfHwgMDtcbiAgICByZXQgPSBzdHlsZS5waXhlbExlZnQgKyBQWDsgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSByc0xlZnQ7XG4gIH1cblxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldERpcmVjdGlvbihkaXIsIG9wdGlvbikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gb3B0aW9uLnVzZUNzc1JpZ2h0ID8gJ3JpZ2h0JyA6IGRpcjtcbiAgfVxuXG4gIHJldHVybiBvcHRpb24udXNlQ3NzQm90dG9tID8gJ2JvdHRvbScgOiBkaXI7XG59XG5cbmZ1bmN0aW9uIG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGRpcikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gJ3JpZ2h0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdyaWdodCcpIHtcbiAgICByZXR1cm4gJ2xlZnQnO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ3RvcCcpIHtcbiAgICByZXR1cm4gJ2JvdHRvbSc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAnYm90dG9tJykge1xuICAgIHJldHVybiAndG9wJztcbiAgfVxufSAvLyDorr7nva4gZWxlbSDnm7jlr7kgZWxlbS5vd25lckRvY3VtZW50IOeahOWdkOagh1xuXG5cbmZ1bmN0aW9uIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG5cbiAgdmFyIHByZXNldEggPSAtOTk5O1xuICB2YXIgcHJlc2V0ViA9IC05OTk7XG4gIHZhciBob3Jpem9udGFsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ2xlZnQnLCBvcHRpb24pO1xuICB2YXIgdmVydGljYWxQcm9wZXJ0eSA9IGdldE9mZnNldERpcmVjdGlvbigndG9wJywgb3B0aW9uKTtcbiAgdmFyIG9wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5ID0gb3Bwb3NpdGVPZmZzZXREaXJlY3Rpb24oaG9yaXpvbnRhbFByb3BlcnR5KTtcbiAgdmFyIG9wcG9zaXRlVmVydGljYWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKHZlcnRpY2FsUHJvcGVydHkpO1xuXG4gIGlmIChob3Jpem9udGFsUHJvcGVydHkgIT09ICdsZWZ0Jykge1xuICAgIHByZXNldEggPSA5OTk7XG4gIH1cblxuICBpZiAodmVydGljYWxQcm9wZXJ0eSAhPT0gJ3RvcCcpIHtcbiAgICBwcmVzZXRWID0gOTk5O1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsVHJhbnNpdGlvbiA9ICcnO1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgb3JpZ2luYWxUcmFuc2l0aW9uID0gZ2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0pIHx8ICcnO1xuICAgIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtLCAnbm9uZScpO1xuICB9XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICBlbGVtLnN0eWxlW29wcG9zaXRlSG9yaXpvbnRhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbaG9yaXpvbnRhbFByb3BlcnR5XSA9IFwiXCIuY29uY2F0KHByZXNldEgsIFwicHhcIik7XG4gIH1cblxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVt2ZXJ0aWNhbFByb3BlcnR5XSA9IFwiXCIuY29uY2F0KHByZXNldFYsIFwicHhcIik7XG4gIH0gLy8gZm9yY2UgcmVsYXlvdXRcblxuXG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGRpciA9IGdldE9mZnNldERpcmVjdGlvbihrZXksIG9wdGlvbik7XG4gICAgICB2YXIgcHJlc2V0ID0ga2V5ID09PSAnbGVmdCcgPyBwcmVzZXRIIDogcHJlc2V0VjtcbiAgICAgIHZhciBvZmYgPSBvcmlnaW5hbE9mZnNldFtrZXldIC0gb2xkW2tleV07XG5cbiAgICAgIGlmIChkaXIgPT09IGtleSkge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgKyBvZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgLSBvZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3NzKGVsZW0sIG9yaWdpbmFsU3R5bGUpOyAvLyBmb3JjZSByZWxheW91dFxuXG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG5cbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgc2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0sIG9yaWdpbmFsVHJhbnNpdGlvbik7XG4gIH1cblxuICB2YXIgcmV0ID0ge307XG5cbiAgZm9yICh2YXIgX2tleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICB2YXIgX2RpciA9IGdldE9mZnNldERpcmVjdGlvbihfa2V5LCBvcHRpb24pO1xuXG4gICAgICB2YXIgX29mZiA9IG9mZnNldFtfa2V5XSAtIG9yaWdpbmFsT2Zmc2V0W19rZXldO1xuXG4gICAgICBpZiAoX2tleSA9PT0gX2Rpcikge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdICsgX29mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gLSBfb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNzcyhlbGVtLCByZXQpO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0kMShlbGVtLCBvZmZzZXQpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxYWSA9IGdldFRyYW5zZm9ybVhZKGVsZW0pO1xuICB2YXIgcmVzdWx0WFkgPSB7XG4gICAgeDogb3JpZ2luYWxYWS54LFxuICAgIHk6IG9yaWdpbmFsWFkueVxuICB9O1xuXG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgcmVzdWx0WFkueCA9IG9yaWdpbmFsWFkueCArIG9mZnNldC5sZWZ0IC0gb3JpZ2luYWxPZmZzZXQubGVmdDtcbiAgfVxuXG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS55ID0gb3JpZ2luYWxYWS55ICsgb2Zmc2V0LnRvcCAtIG9yaWdpbmFsT2Zmc2V0LnRvcDtcbiAgfVxuXG4gIHNldFRyYW5zZm9ybVhZKGVsZW0sIHJlc3VsdFhZKTtcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0KGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIGlmIChvcHRpb24uaWdub3JlU2hha2UpIHtcbiAgICB2YXIgb3JpT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICAgIHZhciBvTGVmdCA9IG9yaU9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIG9Ub3AgPSBvcmlPZmZzZXQudG9wLnRvRml4ZWQoMCk7XG4gICAgdmFyIHRMZWZ0ID0gb2Zmc2V0LmxlZnQudG9GaXhlZCgwKTtcbiAgICB2YXIgdFRvcCA9IG9mZnNldC50b3AudG9GaXhlZCgwKTtcblxuICAgIGlmIChvTGVmdCA9PT0gdExlZnQgJiYgb1RvcCA9PT0gdFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRpb24udXNlQ3NzUmlnaHQgfHwgb3B0aW9uLnVzZUNzc0JvdHRvbSkge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2UgaWYgKG9wdGlvbi51c2VDc3NUcmFuc2Zvcm0gJiYgZ2V0VHJhbnNmb3JtTmFtZSgpIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpIHtcbiAgICBzZXRUcmFuc2Zvcm0kMShlbGVtLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVhY2goYXJyLCBmbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCb3JkZXJCb3hGbihlbGVtKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCAnYm94U2l6aW5nJykgPT09ICdib3JkZXItYm94Jztcbn1cblxudmFyIEJPWF9NT0RFTFMgPSBbJ21hcmdpbicsICdib3JkZXInLCAncGFkZGluZyddO1xudmFyIENPTlRFTlRfSU5ERVggPSAtMTtcbnZhciBQQURESU5HX0lOREVYID0gMjtcbnZhciBCT1JERVJfSU5ERVggPSAxO1xudmFyIE1BUkdJTl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIG9sZCA9IHt9O1xuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICB2YXIgbmFtZTsgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgb2xkW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICBzdHlsZVtuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suY2FsbChlbGVtKTsgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG5cbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgc3R5bGVbbmFtZV0gPSBvbGRbbmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBCTVdpZHRoKGVsZW0sIHByb3BzLCB3aGljaCkge1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgcHJvcDtcbiAgdmFyIGo7XG4gIHZhciBpO1xuXG4gIGZvciAoaiA9IDA7IGogPCBwcm9wcy5sZW5ndGg7IGorKykge1xuICAgIHByb3AgPSBwcm9wc1tqXTtcblxuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHByb3AgPT09ICdib3JkZXInKSB7XG4gICAgICAgICAgY3NzUHJvcCA9IFwiXCIuY29uY2F0KHByb3ApLmNvbmNhdCh3aGljaFtpXSwgXCJXaWR0aFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBjc3NQcm9wKSkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBkb21VdGlscyA9IHtcbiAgZ2V0UGFyZW50OiBmdW5jdGlvbiBnZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIHZhciBwYXJlbnQgPSBlbGVtZW50O1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50Lmhvc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSAxICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gOSk7XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9XG59O1xuZWFjaChbJ1dpZHRoJywgJ0hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICBkb21VdGlsc1tcImRvY1wiLmNvbmNhdChuYW1lKV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KCAvLyBmaXJlZm94IGNocm9tZSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PCBib2R5LnNjcm9sbEhlaWdodFxuICAgIC8vIGllIHN0YW5kYXJkIG1vZGUgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PiBib2R5LnNjcm9sbEhlaWdodFxuICAgIGQuZG9jdW1lbnRFbGVtZW50W1wic2Nyb2xsXCIuY29uY2F0KG5hbWUpXSwgLy8gcXVpcmtzIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCDmnIDlpKfnrYnkuo7lj6/op4bnqpflj6PlpJrkuIDngrnvvJ9cbiAgICBkLmJvZHlbXCJzY3JvbGxcIi5jb25jYXQobmFtZSldLCBkb21VdGlsc1tcInZpZXdwb3J0XCIuY29uY2F0KG5hbWUpXShkKSk7XG4gIH07XG5cbiAgZG9tVXRpbHNbXCJ2aWV3cG9ydFwiLmNvbmNhdChuYW1lKV0gPSBmdW5jdGlvbiAod2luKSB7XG4gICAgLy8gcGMgYnJvd3NlciBpbmNsdWRlcyBzY3JvbGxiYXIgaW4gd2luZG93LmlubmVyV2lkdGhcbiAgICB2YXIgcHJvcCA9IFwiY2xpZW50XCIuY29uY2F0KG5hbWUpO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTsgLy8g5qCH5YeG5qih5byP5Y+WIGRvY3VtZW50RWxlbWVudFxuICAgIC8vIGJhY2tjb21wYXQg5Y+WIGJvZHlcblxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcbi8qXG4g5b6X5Yiw5YWD57Sg55qE5aSn5bCP5L+h5oGvXG4gQHBhcmFtIGVsZW1cbiBAcGFyYW0gbmFtZVxuIEBwYXJhbSB7U3RyaW5nfSBbZXh0cmFdICAncGFkZGluZycgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmdcbiAnYm9yZGVyJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlclxuICdtYXJnaW4nIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyICsgbWFyZ2luXG4gKi9cblxuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXgpIHtcbiAgdmFyIGV4dHJhID0gZXg7XG5cbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cblxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcbiAgdmFyIGJvcmRlckJveFZhbHVlID0gbmFtZSA9PT0gJ3dpZHRoJyA/IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcbiAgdmFyIGNzc0JveFZhbHVlID0gMDtcblxuICBpZiAoYm9yZGVyQm94VmFsdWUgPT09IG51bGwgfHwgYm9yZGVyQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBib3JkZXJCb3hWYWx1ZSA8PSAwKSB7XG4gICAgYm9yZGVyQm94VmFsdWUgPSB1bmRlZmluZWQ7IC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuIGNvbXB1dGVkIGNzcyBpZiBuZWNlc3NhcnlcblxuICAgIGNzc0JveFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgbmFtZSk7XG5cbiAgICBpZiAoY3NzQm94VmFsdWUgPT09IG51bGwgfHwgY3NzQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfSAvLyBOb3JtYWxpemUgJycsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuXG5cbiAgICBjc3NCb3hWYWx1ZSA9IHBhcnNlRmxvYXQoY3NzQm94VmFsdWUpIHx8IDA7XG4gIH1cblxuICBpZiAoZXh0cmEgPT09IHVuZGVmaW5lZCkge1xuICAgIGV4dHJhID0gaXNCb3JkZXJCb3ggPyBCT1JERVJfSU5ERVggOiBDT05URU5UX0lOREVYO1xuICB9XG5cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcblxuICBpZiAoZXh0cmEgPT09IENPTlRFTlRfSU5ERVgpIHtcbiAgICBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgICByZXR1cm4gdmFsIC0gZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInLCAncGFkZGluZyddLCB3aGljaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc0JveFZhbHVlO1xuICB9IGVsc2UgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIGlmIChleHRyYSA9PT0gQk9SREVSX0lOREVYKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gpKTtcbiAgfVxuXG4gIHJldHVybiBjc3NCb3hWYWx1ZSArIGdldFBCTVdpZHRoKGVsZW0sIEJPWF9NT0RFTFMuc2xpY2UoZXh0cmEpLCB3aGljaCk7XG59XG5cbnZhciBjc3NTaG93ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gIGRpc3BsYXk6ICdibG9jaydcbn07IC8vIGZpeCAjMTE5IDogaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTE5XG5cbmZ1bmN0aW9uIGdldFdISWdub3JlRGlzcGxheSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIHZhbDtcbiAgdmFyIGVsZW0gPSBhcmdzWzBdOyAvLyBpbiBjYXNlIGVsZW0gaXMgd2luZG93XG4gIC8vIGVsZW0ub2Zmc2V0V2lkdGggPT09IHVuZGVmaW5lZFxuXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5lYWNoKFsnd2lkdGgnLCAnaGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmaXJzdCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuXG4gIGRvbVV0aWxzW1wib3V0ZXJcIi5jb25jYXQoZmlyc3QpXSA9IGZ1bmN0aW9uIChlbCwgaW5jbHVkZU1hcmdpbikge1xuICAgIHJldHVybiBlbCAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWwsIG5hbWUsIGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fSU5ERVggOiBCT1JERVJfSU5ERVgpO1xuICB9O1xuXG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuXG4gIGRvbVV0aWxzW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIHYpIHtcbiAgICB2YXIgdmFsID0gdjtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgICAgICAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcblxuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3NzKGVsZW0sIG5hbWUsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1peCh0bywgZnJvbSkge1xuICBmb3IgKHZhciBpIGluIGZyb20pIHtcbiAgICBpZiAoZnJvbS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgdG9baV0gPSBmcm9tW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxudmFyIHV0aWxzID0ge1xuICBnZXRXaW5kb3c6IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5kb2N1bWVudCAmJiBub2RlLnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIH0sXG4gIGdldERvY3VtZW50OiBnZXREb2N1bWVudCxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yIChpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG92ZXJmbG93ID0gb2JqLm92ZXJmbG93O1xuXG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBtaXg6IG1peCxcbiAgZ2V0V2luZG93U2Nyb2xsTGVmdDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsTGVmdCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gIH0sXG4gIGdldFdpbmRvd1Njcm9sbFRvcDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsVG9wKHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHV0aWxzLm1peChyZXQsIGkgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn07XG5taXgodXRpbHMsIGRvbVV0aWxzKTtcblxuLyoqXG4gKiDlvpfliLDkvJrlr7zoh7TlhYPntKDmmL7npLrkuI3lhajnmoTnpZblhYjlhYPntKBcbiAqL1xuXG52YXIgZ2V0UGFyZW50ID0gdXRpbHMuZ2V0UGFyZW50O1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAodXRpbHMuaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IC8vIGllIOi/meS4quS5n+S4jeaYr+WujOWFqOWPr+ihjFxuXG4gIC8qXG4gICA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwcHg7aGVpZ2h0OiAxMDBweDtvdmVyZmxvdzogaGlkZGVuXCI+XG4gICA8ZGl2IHN0eWxlPVwid2lkdGg6IDUwcHg7aGVpZ2h0OiAxMDBweDtwb3NpdGlvbjogcmVsYXRpdmU7XCIgaWQ9XCJkNlwiPlxuICAg5YWD57SgIDYg6auYIDEwMHB4IOWuvSA1MHB4PGJyLz5cbiAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICAqL1xuICAvLyBlbGVtZW50Lm9mZnNldFBhcmVudCBkb2VzIHRoZSByaWdodCB0aGluZyBpbiBpZTcgYW5kIGJlbG93LiBSZXR1cm4gcGFyZW50IHdpdGggbGF5b3V0IVxuICAvLyAgSW4gb3RoZXIgYnJvd3NlcnMgaXQgb25seSBpbmNsdWRlcyBlbGVtZW50cyB3aXRoIHBvc2l0aW9uIGFic29sdXRlLCByZWxhdGl2ZSBvclxuICAvLyBmaXhlZCwgbm90IGVsZW1lbnRzIHdpdGggb3ZlcmZsb3cgc2V0IHRvIGF1dG8gb3Igc2Nyb2xsLlxuICAvLyAgICAgICAgaWYgKFVBLmllICYmIGllTW9kZSA8IDgpIHtcbiAgLy8gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gIC8vICAgICAgICB9XG4gIC8vIOe7n+S4gOeahCBvZmZzZXRQYXJlbnQg5pa55rOVXG5cblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQ7XG4gIHZhciBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuICB2YXIgc2tpcFN0YXRpYyA9IHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcgfHwgcG9zaXRpb25TdHlsZSA9PT0gJ2Fic29sdXRlJztcblxuICBpZiAoIXNraXBTdGF0aWMpIHtcbiAgICByZXR1cm4gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcgPyBudWxsIDogZ2V0UGFyZW50KGVsZW1lbnQpO1xuICB9XG5cbiAgZm9yIChwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHkgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSA5OyBwYXJlbnQgPSBnZXRQYXJlbnQocGFyZW50KSkge1xuICAgIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcblxuICAgIGlmIChwb3NpdGlvblN0eWxlICE9PSAnc3RhdGljJykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGdldFBhcmVudCQxID0gdXRpbHMuZ2V0UGFyZW50O1xuZnVuY3Rpb24gaXNBbmNlc3RvckZpeGVkKGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuXG4gIGZvciAocGFyZW50ID0gZ2V0UGFyZW50JDEoZWxlbWVudCk7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHk7IHBhcmVudCA9IGdldFBhcmVudCQxKHBhcmVudCkpIHtcbiAgICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhwYXJlbnQsICdwb3NpdGlvbicpO1xuXG4gICAgaWYgKHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiDojrflvpflhYPntKDnmoTmmL7npLrpg6jliIbnmoTljLrln59cbiAqL1xuXG5mdW5jdGlvbiBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoZWxlbWVudCwgYWx3YXlzQnlWaWV3cG9ydCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogSW5maW5pdHksXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogSW5maW5pdHlcbiAgfTtcbiAgdmFyIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7IC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgdmlzaWJsZSByZWN0IGJ5IGNsaW1iaW5nIHRoZSBkb20gYWNjb3VudGluZyBmb3JcbiAgLy8gYWxsIHNjcm9sbGFibGUgY29udGFpbmVycy5cblxuICB3aGlsZSAoZWwpIHtcbiAgICAvLyBjbGllbnRXaWR0aCBpcyB6ZXJvIGZvciBpbmxpbmUgYmxvY2sgZWxlbWVudHMgaW4gaWUuXG4gICAgaWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA9PT0gLTEgfHwgZWwuY2xpZW50V2lkdGggIT09IDApICYmIC8vIGJvZHkgbWF5IGhhdmUgb3ZlcmZsb3cgc2V0IG9uIGl0LCB5ZXQgd2Ugc3RpbGwgZ2V0IHRoZSBlbnRpcmVcbiAgICAvLyB2aWV3cG9ydC4gSW4gc29tZSBicm93c2VycywgZWwub2Zmc2V0UGFyZW50IG1heSBiZVxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc28gY2hlY2sgZm9yIHRoYXQgdG9vLlxuICAgIGVsICE9PSBib2R5ICYmIGVsICE9PSBkb2N1bWVudEVsZW1lbnQgJiYgdXRpbHMuY3NzKGVsLCAnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICB2YXIgcG9zID0gdXRpbHMub2Zmc2V0KGVsKTsgLy8gYWRkIGJvcmRlclxuXG4gICAgICBwb3MubGVmdCArPSBlbC5jbGllbnRMZWZ0O1xuICAgICAgcG9zLnRvcCArPSBlbC5jbGllbnRUb3A7XG4gICAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHBvcy50b3ApO1xuICAgICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgLy8gY29uc2lkZXIgYXJlYSB3aXRob3V0IHNjcm9sbEJhclxuICAgICAgcG9zLmxlZnQgKyBlbC5jbGllbnRXaWR0aCk7XG4gICAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHBvcy50b3AgKyBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHBvcy5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKGVsID09PSBib2R5IHx8IGVsID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsKTtcbiAgfSAvLyBTZXQgZWxlbWVudCBwb3NpdGlvbiB0byBmaXhlZFxuICAvLyBtYWtlIHN1cmUgYWJzb2x1dGUgZWxlbWVudCBpdHNlbGYgZG9uJ3QgYWZmZWN0IGl0J3MgdmlzaWJsZSBhcmVhXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzc2MDFcblxuXG4gIHZhciBvcmlnaW5hbFBvc2l0aW9uID0gbnVsbDtcblxuICBpZiAoIXV0aWxzLmlzV2luZG93KGVsZW1lbnQpICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvcmlnaW5hbFBvc2l0aW9uID0gZWxlbWVudC5zdHlsZS5wb3NpdGlvbjtcbiAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG5cbiAgICBpZiAocG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7IC8vIHNjcm9sbFhYWCBvbiBodG1sIGlzIHN5bmMgd2l0aCBib2R5IHdoaWNoIG1lYW5zIG92ZXJmbG93OiBoaWRkZW4gb24gYm9keSBnZXRzIHdyb25nIHNjcm9sbFhYWC5cbiAgLy8gV2Ugc2hvdWxkIGN1dCB0aGlzIG91cnNlbGYuXG5cbiAgdmFyIGJvZHlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvZHkpO1xuXG4gIGlmIChib2R5U3R5bGUub3ZlcmZsb3dYID09PSAnaGlkZGVuJykge1xuICAgIGRvY3VtZW50V2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmIChib2R5U3R5bGUub3ZlcmZsb3dZID09PSAnaGlkZGVuJykge1xuICAgIGRvY3VtZW50SGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICB9IC8vIFJlc2V0IGVsZW1lbnQgcG9zaXRpb24gYWZ0ZXIgY2FsY3VsYXRlIHRoZSB2aXNpYmxlIGFyZWFcblxuXG4gIGlmIChlbGVtZW50LnN0eWxlKSB7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IG9yaWdpbmFsUG9zaXRpb247XG4gIH1cblxuICBpZiAoYWx3YXlzQnlWaWV3cG9ydCB8fCBpc0FuY2VzdG9yRml4ZWQoZWxlbWVudCkpIHtcbiAgICAvLyBDbGlwIGJ5IHZpZXdwb3J0J3Mgc2l6ZS5cbiAgICB2aXNpYmxlUmVjdC5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QubGVmdCwgc2Nyb2xsWCk7XG4gICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBzY3JvbGxZKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIC8vIENsaXAgYnkgZG9jdW1lbnQncyBzaXplLlxuICAgIHZhciBtYXhWaXNpYmxlV2lkdGggPSBNYXRoLm1heChkb2N1bWVudFdpZHRoLCBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCk7XG4gICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCwgbWF4VmlzaWJsZVdpZHRoKTtcbiAgICB2YXIgbWF4VmlzaWJsZUhlaWdodCA9IE1hdGgubWF4KGRvY3VtZW50SGVpZ2h0LCBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQpO1xuICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgbWF4VmlzaWJsZUhlaWdodCk7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVJlY3QudG9wID49IDAgJiYgdmlzaWJsZVJlY3QubGVmdCA+PSAwICYmIHZpc2libGVSZWN0LmJvdHRvbSA+IHZpc2libGVSZWN0LnRvcCAmJiB2aXNpYmxlUmVjdC5yaWdodCA+IHZpc2libGVSZWN0LmxlZnQgPyB2aXNpYmxlUmVjdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG92ZXJmbG93KSB7XG4gIHZhciBwb3MgPSB1dGlscy5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfSAvLyBMZWZ0IGVkZ2UgaW5zaWRlIGFuZCByaWdodCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cucmVzaXplV2lkdGggJiYgcG9zLmxlZnQgPj0gdmlzaWJsZVJlY3QubGVmdCAmJiBwb3MubGVmdCArIHNpemUud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodCkge1xuICAgIHNpemUud2lkdGggLT0gcG9zLmxlZnQgKyBzaXplLndpZHRoIC0gdmlzaWJsZVJlY3QucmlnaHQ7XG4gIH0gLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cblxuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgLy8g5L+d6K+B5bem6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5bem6L6555WM5a+56b2QXG4gICAgcG9zLmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5yaWdodCAtIHNpemUud2lkdGgsIHZpc2libGVSZWN0LmxlZnQpO1xuICB9IC8vIFRvcCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH0gLy8gVG9wIGVkZ2UgaW5zaWRlIGFuZCBib3R0b20gZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuXG5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZUhlaWdodCAmJiBwb3MudG9wID49IHZpc2libGVSZWN0LnRvcCAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICBzaXplLmhlaWdodCAtPSBwb3MudG9wICsgc2l6ZS5oZWlnaHQgLSB2aXNpYmxlUmVjdC5ib3R0b207XG4gIH0gLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG5cblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WSAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICAvLyDkv53or4HkuIrovrnnlYzlkozlj6/op4bljLrln5/kuIrovrnnlYzlr7npvZBcbiAgICBwb3MudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQsIHZpc2libGVSZWN0LnRvcCk7XG4gIH1cblxuICByZXR1cm4gdXRpbHMubWl4KHBvcywgc2l6ZSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlZ2lvbihub2RlKSB7XG4gIHZhciBvZmZzZXQ7XG4gIHZhciB3O1xuICB2YXIgaDtcblxuICBpZiAoIXV0aWxzLmlzV2luZG93KG5vZGUpICYmIG5vZGUubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvZmZzZXQgPSB1dGlscy5vZmZzZXQobm9kZSk7XG4gICAgdyA9IHV0aWxzLm91dGVyV2lkdGgobm9kZSk7XG4gICAgaCA9IHV0aWxzLm91dGVySGVpZ2h0KG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB3aW4gPSB1dGlscy5nZXRXaW5kb3cobm9kZSk7XG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgdyA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgICBoID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgfVxuXG4gIG9mZnNldC53aWR0aCA9IHc7XG4gIG9mZnNldC5oZWlnaHQgPSBoO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG4vKipcbiAqIOiOt+WPliBub2RlIOS4iueahCBhbGlnbiDlr7npvZDngrkg55u45a+55LqO6aG16Z2i55qE5Z2Q5qCHXG4gKi9cbmZ1bmN0aW9uIGdldEFsaWduT2Zmc2V0KHJlZ2lvbiwgYWxpZ24pIHtcbiAgdmFyIFYgPSBhbGlnbi5jaGFyQXQoMCk7XG4gIHZhciBIID0gYWxpZ24uY2hhckF0KDEpO1xuICB2YXIgdyA9IHJlZ2lvbi53aWR0aDtcbiAgdmFyIGggPSByZWdpb24uaGVpZ2h0O1xuICB2YXIgeCA9IHJlZ2lvbi5sZWZ0O1xuICB2YXIgeSA9IHJlZ2lvbi50b3A7XG5cbiAgaWYgKFYgPT09ICdjJykge1xuICAgIHkgKz0gaCAvIDI7XG4gIH0gZWxzZSBpZiAoViA9PT0gJ2InKSB7XG4gICAgeSArPSBoO1xuICB9XG5cbiAgaWYgKEggPT09ICdjJykge1xuICAgIHggKz0gdyAvIDI7XG4gIH0gZWxzZSBpZiAoSCA9PT0gJ3InKSB7XG4gICAgeCArPSB3O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCkge1xuICB2YXIgcDEgPSBnZXRBbGlnbk9mZnNldChyZWZOb2RlUmVnaW9uLCBwb2ludHNbMV0pO1xuICB2YXIgcDIgPSBnZXRBbGlnbk9mZnNldChlbFJlZ2lvbiwgcG9pbnRzWzBdKTtcbiAgdmFyIGRpZmYgPSBbcDIubGVmdCAtIHAxLmxlZnQsIHAyLnRvcCAtIHAxLnRvcF07XG4gIHJldHVybiB7XG4gICAgbGVmdDogTWF0aC5yb3VuZChlbFJlZ2lvbi5sZWZ0IC0gZGlmZlswXSArIG9mZnNldFswXSAtIHRhcmdldE9mZnNldFswXSksXG4gICAgdG9wOiBNYXRoLnJvdW5kKGVsUmVnaW9uLnRvcCAtIGRpZmZbMV0gKyBvZmZzZXRbMV0gLSB0YXJnZXRPZmZzZXRbMV0pXG4gIH07XG59XG5cbi8qKlxuICogYWxpZ24gZG9tIG5vZGUgZmxleGlibHlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuZnVuY3Rpb24gaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodDtcbn1cblxuZnVuY3Rpb24gaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3AgfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA+IHZpc2libGVSZWN0LnJpZ2h0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA8IHZpc2libGVSZWN0LmxlZnQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPiB2aXNpYmxlUmVjdC5ib3R0b20gfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0IDwgdmlzaWJsZVJlY3QudG9wO1xufVxuXG5mdW5jdGlvbiBmbGlwKHBvaW50cywgcmVnLCBtYXApIHtcbiAgdmFyIHJldCA9IFtdO1xuICB1dGlscy5lYWNoKHBvaW50cywgZnVuY3Rpb24gKHApIHtcbiAgICByZXQucHVzaChwLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG1hcFttXTtcbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmbGlwT2Zmc2V0KG9mZnNldCwgaW5kZXgpIHtcbiAgb2Zmc2V0W2luZGV4XSA9IC1vZmZzZXRbaW5kZXhdO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0KHN0ciwgb2Zmc2V0TGVuKSB7XG4gIHZhciBuO1xuXG4gIGlmICgvJSQvLnRlc3Qoc3RyKSkge1xuICAgIG4gPSBwYXJzZUludChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSwgMTApIC8gMTAwICogb2Zmc2V0TGVuO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUludChzdHIsIDEwKTtcbiAgfVxuXG4gIHJldHVybiBuIHx8IDA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsKSB7XG4gIG9mZnNldFswXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzBdLCBlbC53aWR0aCk7XG4gIG9mZnNldFsxXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzFdLCBlbC5oZWlnaHQpO1xufVxuLyoqXG4gKiBAcGFyYW0gZWxcbiAqIEBwYXJhbSB0Z3RSZWdpb24g5Y+C54Wn6IqC54K55omA5Y2g55qE5Yy65Z+fOiB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9XG4gKiBAcGFyYW0gYWxpZ25cbiAqL1xuXG5cbmZ1bmN0aW9uIGRvQWxpZ24oZWwsIHRndFJlZ2lvbiwgYWxpZ24sIGlzVGd0UmVnaW9uVmlzaWJsZSkge1xuICB2YXIgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICB2YXIgb2Zmc2V0ID0gYWxpZ24ub2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIHRhcmdldE9mZnNldCA9IGFsaWduLnRhcmdldE9mZnNldCB8fCBbMCwgMF07XG4gIHZhciBvdmVyZmxvdyA9IGFsaWduLm92ZXJmbG93O1xuICB2YXIgc291cmNlID0gYWxpZ24uc291cmNlIHx8IGVsO1xuICBvZmZzZXQgPSBbXS5jb25jYXQob2Zmc2V0KTtcbiAgdGFyZ2V0T2Zmc2V0ID0gW10uY29uY2F0KHRhcmdldE9mZnNldCk7XG4gIG92ZXJmbG93ID0gb3ZlcmZsb3cgfHwge307XG4gIHZhciBuZXdPdmVyZmxvd0NmZyA9IHt9O1xuICB2YXIgZmFpbCA9IDA7XG4gIHZhciBhbHdheXNCeVZpZXdwb3J0ID0gISEob3ZlcmZsb3cgJiYgb3ZlcmZsb3cuYWx3YXlzQnlWaWV3cG9ydCk7IC8vIOW9k+WJjeiKgueCueWPr+S7peiiq+aUvue9rueahOaYvuekuuWMuuWfn1xuXG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChzb3VyY2UsIGFsd2F5c0J5Vmlld3BvcnQpOyAvLyDlvZPliY3oioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuXG4gIHZhciBlbFJlZ2lvbiA9IGdldFJlZ2lvbihzb3VyY2UpOyAvLyDlsIYgb2Zmc2V0IOi9rOaNouaIkOaVsOWAvO+8jOaUr+aMgeeZvuWIhuavlFxuXG4gIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsUmVnaW9uKTtcbiAgbm9ybWFsaXplT2Zmc2V0KHRhcmdldE9mZnNldCwgdGd0UmVnaW9uKTsgLy8g5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG5cbiAgdmFyIGVsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7IC8vIOW9k+WJjeiKgueCueWwhuimgeaJgOWkhOeahOWMuuWfn1xuXG4gIHZhciBuZXdFbFJlZ2lvbiA9IHV0aWxzLm1lcmdlKGVsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7IC8vIOWmguaenOWPr+inhuWMuuWfn+S4jeiDveWujOWFqOaUvue9ruW9k+WJjeiKgueCueaXtuWFgeiuuOiwg+aVtFxuXG4gIGlmICh2aXNpYmxlUmVjdCAmJiAob3ZlcmZsb3cuYWRqdXN0WCB8fCBvdmVyZmxvdy5hZGp1c3RZKSAmJiBpc1RndFJlZ2lvblZpc2libGUpIHtcbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WCkge1xuICAgICAgLy8g5aaC5p6c5qiq5ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW2xyXS9naSwge1xuICAgICAgICAgIGw6ICdyJyxcbiAgICAgICAgICByOiAnbCdcbiAgICAgICAgfSk7IC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuXG4gICAgICAgIHZhciBuZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdFbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIG5ld1BvaW50cywgbmV3T2Zmc2V0LCBuZXdUYXJnZXRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxYKG5ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IG5ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBuZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WSkge1xuICAgICAgLy8g5aaC5p6c57q15ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIF9uZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1t0Yl0vZ2ksIHtcbiAgICAgICAgICB0OiAnYicsXG4gICAgICAgICAgYjogJ3QnXG4gICAgICAgIH0pOyAvLyDlgY/np7vph4/kuZ/lj43kuItcblxuXG4gICAgICAgIHZhciBfbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDEpO1xuXG4gICAgICAgIHZhciBfbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDEpO1xuXG4gICAgICAgIHZhciBfbmV3RWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBfbmV3UG9pbnRzLCBfbmV3T2Zmc2V0LCBfbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWShfbmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBfbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IF9uZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gX25ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8g5aaC5p6c5aSx6LSl77yM6YeN5paw6K6h566X5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG5cblxuICAgIGlmIChmYWlsKSB7XG4gICAgICBlbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAgICAgdXRpbHMubWl4KG5ld0VsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3RpbGxGYWlsWCA9IGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG4gICAgdmFyIGlzU3RpbGxGYWlsWSA9IGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7IC8vIOajgOafpeWPjeS4i+WQjueahOS9jee9ruaYr+WQpuWPr+S7peaUvuS4i+S6hu+8jOWmguaenOS7jeeEtuaUvuS4jeS4i++8mlxuICAgIC8vIDEuIOWkjeWOn+S/ruaUuei/h+eahOWumuS9jeWPguaVsFxuXG4gICAgaWYgKGlzU3RpbGxGYWlsWCB8fCBpc1N0aWxsRmFpbFkpIHtcbiAgICAgIHZhciBfbmV3UG9pbnRzMiA9IHBvaW50czsgLy8g6YeN572u5a+55bqU6YOo5YiG55qE57+76L2s6YC76L6RXG5cbiAgICAgIGlmIChpc1N0aWxsRmFpbFgpIHtcbiAgICAgICAgX25ld1BvaW50czIgPSBmbGlwKHBvaW50cywgL1tscl0vZ2ksIHtcbiAgICAgICAgICBsOiAncicsXG4gICAgICAgICAgcjogJ2wnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGlsbEZhaWxZKSB7XG4gICAgICAgIF9uZXdQb2ludHMyID0gZmxpcChwb2ludHMsIC9bdGJdL2dpLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcG9pbnRzID0gX25ld1BvaW50czI7XG4gICAgICBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICAgICAgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgICB9IC8vIDIuIOWPquacieaMh+WumuS6huWPr+S7peiwg+aVtOW9k+WJjeaWueWQkeaJjeiwg+aVtFxuXG5cbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RYID0gb3ZlcmZsb3cuYWRqdXN0WCAmJiBpc1N0aWxsRmFpbFg7XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSA9IG92ZXJmbG93LmFkanVzdFkgJiYgaXNTdGlsbEZhaWxZOyAvLyDnoa7lrp7opoHosIPmlbTvvIznlJroh7Plj6/og73kvJrosIPmlbTpq5jluqblrr3luqZcblxuICAgIGlmIChuZXdPdmVyZmxvd0NmZy5hZGp1c3RYIHx8IG5ld092ZXJmbG93Q2ZnLmFkanVzdFkpIHtcbiAgICAgIG5ld0VsUmVnaW9uID0gYWRqdXN0Rm9yVmlld3BvcnQoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgbmV3T3ZlcmZsb3dDZmcpO1xuICAgIH1cbiAgfSAvLyBuZWVkIGp1ZGdlIHRvIGluIGNhc2Ugc2V0IGZpeGVkIHdpdGggaW4gY3NzIG9uIGhlaWdodCBhdXRvIGVsZW1lbnRcblxuXG4gIGlmIChuZXdFbFJlZ2lvbi53aWR0aCAhPT0gZWxSZWdpb24ud2lkdGgpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnd2lkdGgnLCB1dGlscy53aWR0aChzb3VyY2UpICsgbmV3RWxSZWdpb24ud2lkdGggLSBlbFJlZ2lvbi53aWR0aCk7XG4gIH1cblxuICBpZiAobmV3RWxSZWdpb24uaGVpZ2h0ICE9PSBlbFJlZ2lvbi5oZWlnaHQpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnaGVpZ2h0JywgdXRpbHMuaGVpZ2h0KHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi5oZWlnaHQgLSBlbFJlZ2lvbi5oZWlnaHQpO1xuICB9IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzE5MFxuICAvLyDnm7jlr7nkuo7lsY/luZXkvY3nva7msqHlj5jvvIzogIwgbGVmdC90b3Ag5Y+Y5LqGXG4gIC8vIOS+i+WmgiA8ZGl2ICdyZWxhdGl2ZSc+PGVsIGFic29sdXRlPjwvZGl2PlxuXG5cbiAgdXRpbHMub2Zmc2V0KHNvdXJjZSwge1xuICAgIGxlZnQ6IG5ld0VsUmVnaW9uLmxlZnQsXG4gICAgdG9wOiBuZXdFbFJlZ2lvbi50b3BcbiAgfSwge1xuICAgIHVzZUNzc1JpZ2h0OiBhbGlnbi51c2VDc3NSaWdodCxcbiAgICB1c2VDc3NCb3R0b206IGFsaWduLnVzZUNzc0JvdHRvbSxcbiAgICB1c2VDc3NUcmFuc2Zvcm06IGFsaWduLnVzZUNzc1RyYW5zZm9ybSxcbiAgICBpZ25vcmVTaGFrZTogYWxpZ24uaWdub3JlU2hha2VcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcG9pbnRzOiBwb2ludHMsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgb3ZlcmZsb3c6IG5ld092ZXJmbG93Q2ZnXG4gIH07XG59XG4vKipcbiAqICAyMDEyLTA0LTI2IHlpbWluZ2hlQGdtYWlsLmNvbVxuICogICAtIOS8mOWMluaZuuiDveWvuem9kOeul+azlVxuICogICAtIOaFjueUqCByZXNpemVYWFxuICpcbiAqICAyMDExLTA3LTEzIHlpbWluZ2hlQGdtYWlsLmNvbSBub3RlOlxuICogICAtIOWinuWKoOaZuuiDveWvuem9kO+8jOS7peWPiuWkp+Wwj+iwg+aVtOmAiemhuVxuICoqL1xuXG5mdW5jdGlvbiBpc091dE9mVmlzaWJsZVJlY3QodGFyZ2V0LCBhbHdheXNCeVZpZXdwb3J0KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudCh0YXJnZXQsIGFsd2F5c0J5Vmlld3BvcnQpO1xuICB2YXIgdGFyZ2V0UmVnaW9uID0gZ2V0UmVnaW9uKHRhcmdldCk7XG4gIHJldHVybiAhdmlzaWJsZVJlY3QgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgKyB0YXJnZXRSZWdpb24ud2lkdGggPD0gdmlzaWJsZVJlY3QubGVmdCB8fCB0YXJnZXRSZWdpb24udG9wICsgdGFyZ2V0UmVnaW9uLmhlaWdodCA8PSB2aXNpYmxlUmVjdC50b3AgfHwgdGFyZ2V0UmVnaW9uLmxlZnQgPj0gdmlzaWJsZVJlY3QucmlnaHQgfHwgdGFyZ2V0UmVnaW9uLnRvcCA+PSB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGFsaWduRWxlbWVudChlbCwgcmVmTm9kZSwgYWxpZ24pIHtcbiAgdmFyIHRhcmdldCA9IGFsaWduLnRhcmdldCB8fCByZWZOb2RlO1xuICB2YXIgcmVmTm9kZVJlZ2lvbiA9IGdldFJlZ2lvbih0YXJnZXQpO1xuICB2YXIgaXNUYXJnZXROb3RPdXRPZlZpc2libGUgPSAhaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCwgYWxpZ24ub3ZlcmZsb3cgJiYgYWxpZ24ub3ZlcmZsb3cuYWx3YXlzQnlWaWV3cG9ydCk7XG4gIHJldHVybiBkb0FsaWduKGVsLCByZWZOb2RlUmVnaW9uLCBhbGlnbiwgaXNUYXJnZXROb3RPdXRPZlZpc2libGUpO1xufVxuXG5hbGlnbkVsZW1lbnQuX19nZXRPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQ7XG5hbGlnbkVsZW1lbnQuX19nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7XG5cbi8qKlxuICogYHRndFBvaW50YDogeyBwYWdlWCwgcGFnZVkgfSBvciB7IGNsaWVudFgsIGNsaWVudFkgfS5cbiAqIElmIGNsaWVudCBwb3NpdGlvbiBwcm92aWRlZCwgd2lsbCBpbnRlcm5hbCBjb252ZXJ0IHRvIHBhZ2UgcG9zaXRpb24uXG4gKi9cblxuZnVuY3Rpb24gYWxpZ25Qb2ludChlbCwgdGd0UG9pbnQsIGFsaWduKSB7XG4gIHZhciBwYWdlWDtcbiAgdmFyIHBhZ2VZO1xuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWwpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcblxuICBpZiAoJ3BhZ2VYJyBpbiB0Z3RQb2ludCkge1xuICAgIHBhZ2VYID0gdGd0UG9pbnQucGFnZVg7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVggPSBzY3JvbGxYICsgdGd0UG9pbnQuY2xpZW50WDtcbiAgfVxuXG4gIGlmICgncGFnZVknIGluIHRndFBvaW50KSB7XG4gICAgcGFnZVkgPSB0Z3RQb2ludC5wYWdlWTtcbiAgfSBlbHNlIHtcbiAgICBwYWdlWSA9IHNjcm9sbFkgKyB0Z3RQb2ludC5jbGllbnRZO1xuICB9XG5cbiAgdmFyIHRndFJlZ2lvbiA9IHtcbiAgICBsZWZ0OiBwYWdlWCxcbiAgICB0b3A6IHBhZ2VZLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuICB2YXIgcG9pbnRJblZpZXcgPSBwYWdlWCA+PSAwICYmIHBhZ2VYIDw9IHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoICYmIHBhZ2VZID49IDAgJiYgcGFnZVkgPD0gc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0OyAvLyBQcm92aWRlIGRlZmF1bHQgdGFyZ2V0IHBvaW50XG5cbiAgdmFyIHBvaW50cyA9IFthbGlnbi5wb2ludHNbMF0sICdjYyddO1xuICByZXR1cm4gZG9BbGlnbihlbCwgdGd0UmVnaW9uLCBfb2JqZWN0U3ByZWFkMih7fSwgYWxpZ24sIHtcbiAgICBwb2ludHM6IHBvaW50c1xuICB9KSwgcG9pbnRJblZpZXcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGlnbkVsZW1lbnQ7XG5leHBvcnQgeyBhbGlnbkVsZW1lbnQsIGFsaWduUG9pbnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5cbi8qKlxuICogUmVtb3ZlZCBwcm9wczpcbiAqICAtIGNoaWxkcmVuUHJvcHNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBpc1Zpc2libGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2lzVmlzaWJsZVwiO1xuaW1wb3J0IHsgYWxpZ25FbGVtZW50LCBhbGlnblBvaW50IH0gZnJvbSAnZG9tLWFsaWduJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBpc1NhbWVQb2ludCwgcmVzdG9yZUZvY3VzLCBtb25pdG9yUmVzaXplIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB1c2VCdWZmZXIgZnJvbSAnLi9ob29rcy91c2VCdWZmZXInO1xuXG5mdW5jdGlvbiBnZXRFbGVtZW50KGZ1bmMpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGZ1bmMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9pbnQocG9pbnQpIHtcbiAgaWYgKF90eXBlb2YocG9pbnQpICE9PSAnb2JqZWN0JyB8fCAhcG9pbnQpIHJldHVybiBudWxsO1xuICByZXR1cm4gcG9pbnQ7XG59XG5cbnZhciBBbGlnbiA9IGZ1bmN0aW9uIEFsaWduKF9yZWYsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQsXG4gICAgICBhbGlnbiA9IF9yZWYuYWxpZ24sXG4gICAgICBvbkFsaWduID0gX3JlZi5vbkFsaWduLFxuICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZSA9IF9yZWYubW9uaXRvcldpbmRvd1Jlc2l6ZSxcbiAgICAgIF9yZWYkbW9uaXRvckJ1ZmZlclRpbSA9IF9yZWYubW9uaXRvckJ1ZmZlclRpbWUsXG4gICAgICBtb25pdG9yQnVmZmVyVGltZSA9IF9yZWYkbW9uaXRvckJ1ZmZlclRpbSA9PT0gdm9pZCAwID8gMCA6IF9yZWYkbW9uaXRvckJ1ZmZlclRpbTtcbiAgdmFyIGNhY2hlUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgdmFyIG5vZGVSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGNoaWxkTm9kZSA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gQWxpZ24gPT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBXZSBzYXZlIHRoZSBwcm9wcyBoZXJlIHRvIGF2b2lkIGNsb3N1cmUgbWFrZXMgcHJvcHMgb29kXG5cbiAgdmFyIGZvcmNlQWxpZ25Qcm9wc1JlZiA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIGZvcmNlQWxpZ25Qcm9wc1JlZi5jdXJyZW50LnRhcmdldCA9IHRhcmdldDtcbiAgZm9yY2VBbGlnblByb3BzUmVmLmN1cnJlbnQub25BbGlnbiA9IG9uQWxpZ247XG5cbiAgdmFyIF91c2VCdWZmZXIgPSB1c2VCdWZmZXIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfZm9yY2VBbGlnblByb3BzUmVmJGMgPSBmb3JjZUFsaWduUHJvcHNSZWYuY3VycmVudCxcbiAgICAgICAgbGF0ZXN0RGlzYWJsZWQgPSBfZm9yY2VBbGlnblByb3BzUmVmJGMuZGlzYWJsZWQsXG4gICAgICAgIGxhdGVzdFRhcmdldCA9IF9mb3JjZUFsaWduUHJvcHNSZWYkYy50YXJnZXQsXG4gICAgICAgIGxhdGVzdE9uQWxpZ24gPSBfZm9yY2VBbGlnblByb3BzUmVmJGMub25BbGlnbjtcblxuICAgIGlmICghbGF0ZXN0RGlzYWJsZWQgJiYgbGF0ZXN0VGFyZ2V0KSB7XG4gICAgICB2YXIgc291cmNlID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudChsYXRlc3RUYXJnZXQpO1xuICAgICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQobGF0ZXN0VGFyZ2V0KTtcbiAgICAgIGNhY2hlUmVmLmN1cnJlbnQuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICBjYWNoZVJlZi5jdXJyZW50LnBvaW50ID0gcG9pbnQ7IC8vIElFIGxvc2UgZm9jdXMgYWZ0ZXIgZWxlbWVudCByZWFsaWduXG4gICAgICAvLyBXZSBzaG91bGQgcmVjb3JkIGFjdGl2ZUVsZW1lbnQgYW5kIHJlc3RvcmUgbGF0ZXJcblxuICAgICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBfZG9jdW1lbnQuYWN0aXZlRWxlbWVudDsgLy8gV2Ugb25seSBhbGlnbiB3aGVuIGVsZW1lbnQgaXMgdmlzaWJsZVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiBpc1Zpc2libGUoZWxlbWVudCkpIHtcbiAgICAgICAgcmVzdWx0ID0gYWxpZ25FbGVtZW50KHNvdXJjZSwgZWxlbWVudCwgYWxpZ24pO1xuICAgICAgfSBlbHNlIGlmIChwb2ludCkge1xuICAgICAgICByZXN1bHQgPSBhbGlnblBvaW50KHNvdXJjZSwgcG9pbnQsIGFsaWduKTtcbiAgICAgIH1cblxuICAgICAgcmVzdG9yZUZvY3VzKGFjdGl2ZUVsZW1lbnQsIHNvdXJjZSk7XG5cbiAgICAgIGlmIChsYXRlc3RPbkFsaWduICYmIHJlc3VsdCkge1xuICAgICAgICBsYXRlc3RPbkFsaWduKHNvdXJjZSwgcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LCBtb25pdG9yQnVmZmVyVGltZSksXG4gICAgICBfdXNlQnVmZmVyMiA9IF9zbGljZWRUb0FycmF5KF91c2VCdWZmZXIsIDIpLFxuICAgICAgX2ZvcmNlQWxpZ24gPSBfdXNlQnVmZmVyMlswXSxcbiAgICAgIGNhbmNlbEZvcmNlQWxpZ24gPSBfdXNlQnVmZmVyMlsxXTsgLy8gPT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gTGlzdGVuIGZvciB0YXJnZXQgdXBkYXRlZFxuXG5cbiAgdmFyIHJlc2l6ZU1vbml0b3IgPSBSZWFjdC51c2VSZWYoe1xuICAgIGNhbmNlbDogZnVuY3Rpb24gY2FuY2VsKCkge31cbiAgfSk7IC8vIExpc3RlbiBmb3Igc291cmNlIHVwZGF0ZWRcblxuICB2YXIgc291cmNlUmVzaXplTW9uaXRvciA9IFJlYWN0LnVzZVJlZih7XG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7fVxuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQodGFyZ2V0KTtcbiAgICB2YXIgcG9pbnQgPSBnZXRQb2ludCh0YXJnZXQpO1xuXG4gICAgaWYgKG5vZGVSZWYuY3VycmVudCAhPT0gc291cmNlUmVzaXplTW9uaXRvci5jdXJyZW50LmVsZW1lbnQpIHtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50ID0gbm9kZVJlZi5jdXJyZW50O1xuICAgICAgc291cmNlUmVzaXplTW9uaXRvci5jdXJyZW50LmNhbmNlbCA9IG1vbml0b3JSZXNpemUobm9kZVJlZi5jdXJyZW50LCBfZm9yY2VBbGlnbik7XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlUmVmLmN1cnJlbnQuZWxlbWVudCAhPT0gZWxlbWVudCB8fCAhaXNTYW1lUG9pbnQoY2FjaGVSZWYuY3VycmVudC5wb2ludCwgcG9pbnQpKSB7XG4gICAgICBfZm9yY2VBbGlnbigpOyAvLyBBZGQgcmVzaXplIG9ic2VydmVyXG5cblxuICAgICAgaWYgKHJlc2l6ZU1vbml0b3IuY3VycmVudC5lbGVtZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgICAgcmVzaXplTW9uaXRvci5jdXJyZW50LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICByZXNpemVNb25pdG9yLmN1cnJlbnQuY2FuY2VsID0gbW9uaXRvclJlc2l6ZShlbGVtZW50LCBfZm9yY2VBbGlnbik7XG4gICAgICB9XG4gICAgfVxuICB9KTsgLy8gTGlzdGVuIGZvciBkaXNhYmxlZCBjaGFuZ2VcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIF9mb3JjZUFsaWduKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbEZvcmNlQWxpZ24oKTtcbiAgICB9XG4gIH0sIFtkaXNhYmxlZF0pOyAvLyBMaXN0ZW4gZm9yIHdpbmRvdyByZXNpemVcblxuICB2YXIgd2luUmVzaXplUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb25pdG9yV2luZG93UmVzaXplKSB7XG4gICAgICBpZiAoIXdpblJlc2l6ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIHdpblJlc2l6ZVJlZi5jdXJyZW50ID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBfZm9yY2VBbGlnbik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3aW5SZXNpemVSZWYuY3VycmVudCkge1xuICAgICAgd2luUmVzaXplUmVmLmN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICB3aW5SZXNpemVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9LCBbbW9uaXRvcldpbmRvd1Jlc2l6ZV0pOyAvLyBDbGVhciBhbGwgaWYgdW5tb3VudFxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgIHNvdXJjZVJlc2l6ZU1vbml0b3IuY3VycmVudC5jYW5jZWwoKTtcbiAgICAgIGlmICh3aW5SZXNpemVSZWYuY3VycmVudCkgd2luUmVzaXplUmVmLmN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICBjYW5jZWxGb3JjZUFsaWduKCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09IFJlZiA9PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcmNlQWxpZ246IGZ1bmN0aW9uIGZvcmNlQWxpZ24oKSB7XG4gICAgICAgIHJldHVybiBfZm9yY2VBbGlnbih0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT1cblxuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGROb2RlKSkge1xuICAgIGNoaWxkTm9kZSA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZE5vZGUsIHtcbiAgICAgIHJlZjogY29tcG9zZVJlZihjaGlsZE5vZGUucmVmLCBub2RlUmVmKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTm9kZTtcbn07XG5cbnZhciBSZWZBbGlnbiA9IFJlYWN0LmZvcndhcmRSZWYoQWxpZ24pO1xuUmVmQWxpZ24uZGlzcGxheU5hbWUgPSAnQWxpZ24nO1xuZXhwb3J0IGRlZmF1bHQgUmVmQWxpZ247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoY2FsbGJhY2ssIGJ1ZmZlcikge1xuICB2YXIgY2FsbGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gY2FuY2VsVHJpZ2dlcigpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGZvcmNlKSB7XG4gICAgaWYgKCFjYWxsZWRSZWYuY3VycmVudCB8fCBmb3JjZSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIE5vdCBkZWxheSBzaW5jZSBjYWxsYmFjayBjYW5jZWxsZWQgc2VsZlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNhbGxlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGNhbmNlbFRyaWdnZXIoKTtcbiAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIH0sIGJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbFRyaWdnZXIoKTtcbiAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgdHJpZ2dlcigpO1xuICAgICAgfSwgYnVmZmVyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3RyaWdnZXIsIGZ1bmN0aW9uICgpIHtcbiAgICBjYWxsZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIGNhbmNlbFRyaWdnZXIoKTtcbiAgfV07XG59KTsiLCIvLyBleHBvcnQgdGhpcyBwYWNrYWdlJ3MgYXBpXG5pbXBvcnQgQWxpZ24gZnJvbSAnLi9BbGlnbic7XG5leHBvcnQgZGVmYXVsdCBBbGlnbjsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCJyYy11dGlsL2VzL0RvbS9jb250YWluc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVBvaW50KHByZXYsIG5leHQpIHtcbiAgaWYgKHByZXYgPT09IG5leHQpIHJldHVybiB0cnVlO1xuICBpZiAoIXByZXYgfHwgIW5leHQpIHJldHVybiBmYWxzZTtcblxuICBpZiAoJ3BhZ2VYJyBpbiBuZXh0ICYmICdwYWdlWScgaW4gbmV4dCkge1xuICAgIHJldHVybiBwcmV2LnBhZ2VYID09PSBuZXh0LnBhZ2VYICYmIHByZXYucGFnZVkgPT09IG5leHQucGFnZVk7XG4gIH1cblxuICBpZiAoJ2NsaWVudFgnIGluIG5leHQgJiYgJ2NsaWVudFknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5jbGllbnRYID09PSBuZXh0LmNsaWVudFggJiYgcHJldi5jbGllbnRZID09PSBuZXh0LmNsaWVudFk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZUZvY3VzKGFjdGl2ZUVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAvLyBGb2N1cyBiYWNrIGlmIGlzIGluIHRoZSBjb250YWluZXJcbiAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgY29udGFpbnMoY29udGFpbmVyLCBhY3RpdmVFbGVtZW50KSAmJiB0eXBlb2YgYWN0aXZlRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGFjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1vbml0b3JSZXNpemUoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgdmFyIHByZXZXaWR0aCA9IG51bGw7XG4gIHZhciBwcmV2SGVpZ2h0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBvblJlc2l6ZShfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMSksXG4gICAgICAgIHRhcmdldCA9IF9yZWYyWzBdLnRhcmdldDtcblxuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcblxuICAgIHZhciBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHdpZHRoID0gX3RhcmdldCRnZXRCb3VuZGluZ0NsLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfdGFyZ2V0JGdldEJvdW5kaW5nQ2wuaGVpZ2h0O1xuXG4gICAgdmFyIGZpeGVkV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoKTtcbiAgICB2YXIgZml4ZWRIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCk7XG5cbiAgICBpZiAocHJldldpZHRoICE9PSBmaXhlZFdpZHRoIHx8IHByZXZIZWlnaHQgIT09IGZpeGVkSGVpZ2h0KSB7XG4gICAgICAvLyBodHRwczovL3dlYmtpdC5vcmcvYmxvZy85OTk3L3Jlc2l6ZW9ic2VydmVyLWluLXdlYmtpdC9cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgd2lkdGg6IGZpeGVkV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBmaXhlZEhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByZXZXaWR0aCA9IGZpeGVkV2lkdGg7XG4gICAgcHJldkhlaWdodCA9IGZpeGVkSGVpZ2h0O1xuICB9XG5cbiAgdmFyIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKG9uUmVzaXplKTtcblxuICBpZiAoZWxlbWVudCkge1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgfTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZWZhdWx0LXByb3BzLW1hdGNoLXByb3AtdHlwZXMsIHJlYWN0L25vLW11bHRpLWNvbXAsIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaW5kRE9NTm9kZSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vZmluZERPTU5vZGVcIjtcbmltcG9ydCB7IGZpbGxSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNpdGlvbk5hbWUsIHN1cHBvcnRUcmFuc2l0aW9uIH0gZnJvbSAnLi91dGlsL21vdGlvbic7XG5pbXBvcnQgeyBTVEFUVVNfTk9ORSwgU1RFUF9QUkVQQVJFLCBTVEVQX1NUQVJUIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHVzZVN0YXR1cyBmcm9tICcuL2hvb2tzL3VzZVN0YXR1cyc7XG5pbXBvcnQgRG9tV3JhcHBlciBmcm9tICcuL0RvbVdyYXBwZXInO1xuaW1wb3J0IHsgaXNBY3RpdmUgfSBmcm9tICcuL2hvb2tzL3VzZVN0ZXBRdWV1ZSc7XG4vKipcbiAqIGB0cmFuc2l0aW9uU3VwcG9ydGAgaXMgdXNlZCBmb3Igbm9uZSB0cmFuc2l0aW9uIHRlc3QgY2FzZS5cbiAqIERlZmF1bHQgd2UgdXNlIGJyb3dzZXIgdHJhbnNpdGlvbiBldmVudCBzdXBwb3J0IGNoZWNrLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5DU1NNb3Rpb24oY29uZmlnKSB7XG4gIHZhciB0cmFuc2l0aW9uU3VwcG9ydCA9IGNvbmZpZztcblxuICBpZiAoX3R5cGVvZihjb25maWcpID09PSAnb2JqZWN0Jykge1xuICAgIHRyYW5zaXRpb25TdXBwb3J0ID0gY29uZmlnLnRyYW5zaXRpb25TdXBwb3J0O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdXBwb3J0VHJhbnNpdGlvbihwcm9wcykge1xuICAgIHJldHVybiAhIShwcm9wcy5tb3Rpb25OYW1lICYmIHRyYW5zaXRpb25TdXBwb3J0KTtcbiAgfVxuXG4gIHZhciBDU1NNb3Rpb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHZhciBfcHJvcHMkdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMkdmlzaWJsZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wcyR2aXNpYmxlLFxuICAgICAgICBfcHJvcHMkcmVtb3ZlT25MZWF2ZSA9IHByb3BzLnJlbW92ZU9uTGVhdmUsXG4gICAgICAgIHJlbW92ZU9uTGVhdmUgPSBfcHJvcHMkcmVtb3ZlT25MZWF2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wcyRyZW1vdmVPbkxlYXZlLFxuICAgICAgICBmb3JjZVJlbmRlciA9IHByb3BzLmZvcmNlUmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBtb3Rpb25OYW1lID0gcHJvcHMubW90aW9uTmFtZSxcbiAgICAgICAgbGVhdmVkQ2xhc3NOYW1lID0gcHJvcHMubGVhdmVkQ2xhc3NOYW1lLFxuICAgICAgICBldmVudFByb3BzID0gcHJvcHMuZXZlbnRQcm9wcztcbiAgICB2YXIgc3VwcG9ydE1vdGlvbiA9IGlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpOyAvLyBSZWYgdG8gdGhlIHJlYWN0IG5vZGUsIGl0IG1heSBiZSBhIEhUTUxFbGVtZW50XG5cbiAgICB2YXIgbm9kZVJlZiA9IHVzZVJlZigpOyAvLyBSZWYgdG8gdGhlIGRvbSB3cmFwcGVyIGluIGNhc2UgcmVmIGNhbiBub3QgcGFzcyB0byBIVE1MRWxlbWVudFxuXG4gICAgdmFyIHdyYXBwZXJOb2RlUmVmID0gdXNlUmVmKCk7XG5cbiAgICBmdW5jdGlvbiBnZXREb21FbGVtZW50KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKG5vZGVSZWYuY3VycmVudCB8fCB3cmFwcGVyTm9kZVJlZi5jdXJyZW50KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gT25seSBoYXBwZW4gd2hlbiBgbW90aW9uRGVhZGxpbmVgIHRyaWdnZXIgYnV0IGVsZW1lbnQgcmVtb3ZlZC5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF91c2VTdGF0dXMgPSB1c2VTdGF0dXMoc3VwcG9ydE1vdGlvbiwgdmlzaWJsZSwgZ2V0RG9tRWxlbWVudCwgcHJvcHMpLFxuICAgICAgICBfdXNlU3RhdHVzMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0dXMsIDQpLFxuICAgICAgICBzdGF0dXMgPSBfdXNlU3RhdHVzMlswXSxcbiAgICAgICAgc3RhdHVzU3RlcCA9IF91c2VTdGF0dXMyWzFdLFxuICAgICAgICBzdGF0dXNTdHlsZSA9IF91c2VTdGF0dXMyWzJdLFxuICAgICAgICBtZXJnZWRWaXNpYmxlID0gX3VzZVN0YXR1czJbM107IC8vIFJlY29yZCB3aGV0aGVyIGNvbnRlbnQgaGFzIHJlbmRlZFxuICAgIC8vIFdpbGwgcmV0dXJuIG51bGwgZm9yIHVuLXJlbmRlcmVkIGV2ZW4gd2hlbiBgcmVtb3ZlT25MZWF2ZT17ZmFsc2V9YFxuXG5cbiAgICB2YXIgcmVuZGVyZWRSZWYgPSBSZWFjdC51c2VSZWYobWVyZ2VkVmlzaWJsZSk7XG5cbiAgICBpZiAobWVyZ2VkVmlzaWJsZSkge1xuICAgICAgcmVuZGVyZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09IFJlZnMgPT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICB2YXIgb3JpZ2luUmVmID0gdXNlUmVmKHJlZik7XG4gICAgb3JpZ2luUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgdmFyIHNldE5vZGVSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgICAgbm9kZVJlZi5jdXJyZW50ID0gbm9kZTtcbiAgICAgIGZpbGxSZWYob3JpZ2luUmVmLmN1cnJlbnQsIG5vZGUpO1xuICAgIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciBtb3Rpb25DaGlsZHJlbjtcblxuICAgIHZhciBtZXJnZWRQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZXZlbnRQcm9wcyksIHt9LCB7XG4gICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgfSk7XG5cbiAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICAvLyBObyBjaGlsZHJlblxuICAgICAgbW90aW9uQ2hpbGRyZW4gPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfTk9ORSB8fCAhaXNTdXBwb3J0VHJhbnNpdGlvbihwcm9wcykpIHtcbiAgICAgIC8vIFN0YWJsZSBjaGlsZHJlblxuICAgICAgaWYgKG1lcmdlZFZpc2libGUpIHtcbiAgICAgICAgbW90aW9uQ2hpbGRyZW4gPSBjaGlsZHJlbihfb2JqZWN0U3ByZWFkKHt9LCBtZXJnZWRQcm9wcyksIHNldE5vZGVSZWYpO1xuICAgICAgfSBlbHNlIGlmICghcmVtb3ZlT25MZWF2ZSAmJiByZW5kZXJlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIG1vdGlvbkNoaWxkcmVuID0gY2hpbGRyZW4oX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtZXJnZWRQcm9wcyksIHt9LCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBsZWF2ZWRDbGFzc05hbWVcbiAgICAgICAgfSksIHNldE5vZGVSZWYpO1xuICAgICAgfSBlbHNlIGlmIChmb3JjZVJlbmRlcikge1xuICAgICAgICBtb3Rpb25DaGlsZHJlbiA9IGNoaWxkcmVuKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkUHJvcHMpLCB7fSwge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCBzZXROb2RlUmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdGlvbkNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAvLyBJbiBtb3Rpb25cbiAgICAgIHZhciBzdGF0dXNTdWZmaXg7XG5cbiAgICAgIGlmIChzdGF0dXNTdGVwID09PSBTVEVQX1BSRVBBUkUpIHtcbiAgICAgICAgc3RhdHVzU3VmZml4ID0gJ3ByZXBhcmUnO1xuICAgICAgfSBlbHNlIGlmIChpc0FjdGl2ZShzdGF0dXNTdGVwKSkge1xuICAgICAgICBzdGF0dXNTdWZmaXggPSAnYWN0aXZlJztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzU3RlcCA9PT0gU1RFUF9TVEFSVCkge1xuICAgICAgICBzdGF0dXNTdWZmaXggPSAnc3RhcnQnO1xuICAgICAgfVxuXG4gICAgICBtb3Rpb25DaGlsZHJlbiA9IGNoaWxkcmVuKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkUHJvcHMpLCB7fSwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoZ2V0VHJhbnNpdGlvbk5hbWUobW90aW9uTmFtZSwgc3RhdHVzKSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgZ2V0VHJhbnNpdGlvbk5hbWUobW90aW9uTmFtZSwgXCJcIi5jb25jYXQoc3RhdHVzLCBcIi1cIikuY29uY2F0KHN0YXR1c1N1ZmZpeCkpLCBzdGF0dXNTdWZmaXgpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIG1vdGlvbk5hbWUsIHR5cGVvZiBtb3Rpb25OYW1lID09PSAnc3RyaW5nJyksIF9jbGFzc05hbWVzKSksXG4gICAgICAgIHN0eWxlOiBzdGF0dXNTdHlsZVxuICAgICAgfSksIHNldE5vZGVSZWYpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEb21XcmFwcGVyLCB7XG4gICAgICByZWY6IHdyYXBwZXJOb2RlUmVmXG4gICAgfSwgbW90aW9uQ2hpbGRyZW4pO1xuICB9KTtcbiAgQ1NTTW90aW9uLmRpc3BsYXlOYW1lID0gJ0NTU01vdGlvbic7XG4gIHJldHVybiBDU1NNb3Rpb247XG59XG5leHBvcnQgZGVmYXVsdCBnZW5DU1NNb3Rpb24oc3VwcG9ydFRyYW5zaXRpb24pOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE9yaWdpbkNTU01vdGlvbiBmcm9tICcuL0NTU01vdGlvbic7XG5pbXBvcnQgeyBzdXBwb3J0VHJhbnNpdGlvbiB9IGZyb20gJy4vdXRpbC9tb3Rpb24nO1xuaW1wb3J0IHsgU1RBVFVTX0FERCwgU1RBVFVTX0tFRVAsIFNUQVRVU19SRU1PVkUsIFNUQVRVU19SRU1PVkVELCBkaWZmS2V5cywgcGFyc2VLZXlzIH0gZnJvbSAnLi91dGlsL2RpZmYnO1xudmFyIE1PVElPTl9QUk9QX05BTUVTID0gWydldmVudFByb3BzJywgJ3Zpc2libGUnLCAnY2hpbGRyZW4nLCAnbW90aW9uTmFtZScsICdtb3Rpb25BcHBlYXInLCAnbW90aW9uRW50ZXInLCAnbW90aW9uTGVhdmUnLCAnbW90aW9uTGVhdmVJbW1lZGlhdGVseScsICdtb3Rpb25EZWFkbGluZScsICdyZW1vdmVPbkxlYXZlJywgJ2xlYXZlZENsYXNzTmFtZScsICdvbkFwcGVhclN0YXJ0JywgJ29uQXBwZWFyQWN0aXZlJywgJ29uQXBwZWFyRW5kJywgJ29uRW50ZXJTdGFydCcsICdvbkVudGVyQWN0aXZlJywgJ29uRW50ZXJFbmQnLCAnb25MZWF2ZVN0YXJ0JywgJ29uTGVhdmVBY3RpdmUnLCAnb25MZWF2ZUVuZCddO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIENTU01vdGlvbkxpc3QgY29tcG9uZW50IHdpdGggY29uZmlnXG4gKiBAcGFyYW0gdHJhbnNpdGlvblN1cHBvcnQgTm8gbmVlZCBzaW5jZSBDU1NNb3Rpb25MaXN0IG5vIGxvbmdlciBkZXBlbmRzIG9uIHRyYW5zaXRpb24gc3VwcG9ydFxuICogQHBhcmFtIENTU01vdGlvbiBDU1NNb3Rpb24gY29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbkNTU01vdGlvbkxpc3QodHJhbnNpdGlvblN1cHBvcnQpIHtcbiAgdmFyIENTU01vdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogT3JpZ2luQ1NTTW90aW9uO1xuXG4gIHZhciBDU1NNb3Rpb25MaXN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENTU01vdGlvbkxpc3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDU1NNb3Rpb25MaXN0KTtcblxuICAgIGZ1bmN0aW9uIENTU01vdGlvbkxpc3QoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NNb3Rpb25MaXN0KTtcblxuICAgICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBrZXlFbnRpdGllczogW11cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbW92ZUtleSA9IGZ1bmN0aW9uIChyZW1vdmVLZXkpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIga2V5RW50aXRpZXMgPSBfcmVmLmtleUVudGl0aWVzO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXlFbnRpdGllczoga2V5RW50aXRpZXMubWFwKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgICAgICAgICAgaWYgKGVudGl0eS5rZXkgIT09IHJlbW92ZUtleSkgcmV0dXJuIGVudGl0eTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZW50aXR5KSwge30sIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFNUQVRVU19SRU1PVkVEXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ1NTTW90aW9uTGlzdCwgW3tcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBrZXlFbnRpdGllcyA9IHRoaXMuc3RhdGUua2V5RW50aXRpZXM7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBfb25WaXNpYmxlQ2hhbmdlZCA9IF90aGlzJHByb3BzLm9uVmlzaWJsZUNoYW5nZWQsXG4gICAgICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkcmVuXCIsIFwib25WaXNpYmxlQ2hhbmdlZFwiXSk7XG5cbiAgICAgICAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudCB8fCBSZWFjdC5GcmFnbWVudDtcbiAgICAgICAgdmFyIG1vdGlvblByb3BzID0ge307XG4gICAgICAgIE1PVElPTl9QUk9QX05BTUVTLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICBtb3Rpb25Qcm9wc1twcm9wXSA9IHJlc3RQcm9wc1twcm9wXTtcbiAgICAgICAgICBkZWxldGUgcmVzdFByb3BzW3Byb3BdO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIHJlc3RQcm9wcy5rZXlzO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCByZXN0UHJvcHMsIGtleUVudGl0aWVzLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgc3RhdHVzID0gX3JlZjIuc3RhdHVzLFxuICAgICAgICAgICAgICBldmVudFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbXCJzdGF0dXNcIl0pO1xuXG4gICAgICAgICAgdmFyIHZpc2libGUgPSBzdGF0dXMgPT09IFNUQVRVU19BREQgfHwgc3RhdHVzID09PSBTVEFUVVNfS0VFUDtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uLCBfZXh0ZW5kcyh7fSwgbW90aW9uUHJvcHMsIHtcbiAgICAgICAgICAgIGtleTogZXZlbnRQcm9wcy5rZXksXG4gICAgICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICAgICAgZXZlbnRQcm9wczogZXZlbnRQcm9wcyxcbiAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZWQ6IGZ1bmN0aW9uIG9uVmlzaWJsZUNoYW5nZWQoY2hhbmdlZFZpc2libGUpIHtcbiAgICAgICAgICAgICAgX29uVmlzaWJsZUNoYW5nZWQgPT09IG51bGwgfHwgX29uVmlzaWJsZUNoYW5nZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vblZpc2libGVDaGFuZ2VkKGNoYW5nZWRWaXNpYmxlLCB7XG4gICAgICAgICAgICAgICAga2V5OiBldmVudFByb3BzLmtleVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoIWNoYW5nZWRWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlbW92ZUtleShldmVudFByb3BzLmtleSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSwgY2hpbGRyZW4pO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYzLCBfcmVmNCkge1xuICAgICAgICB2YXIga2V5cyA9IF9yZWYzLmtleXM7XG4gICAgICAgIHZhciBrZXlFbnRpdGllcyA9IF9yZWY0LmtleUVudGl0aWVzO1xuICAgICAgICB2YXIgcGFyc2VkS2V5T2JqZWN0cyA9IHBhcnNlS2V5cyhrZXlzKTtcbiAgICAgICAgdmFyIG1peGVkS2V5RW50aXRpZXMgPSBkaWZmS2V5cyhrZXlFbnRpdGllcywgcGFyc2VkS2V5T2JqZWN0cyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5RW50aXRpZXM6IG1peGVkS2V5RW50aXRpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgICAgICAgIHZhciBwcmV2RW50aXR5ID0ga2V5RW50aXRpZXMuZmluZChmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgICAgICAgdmFyIGtleSA9IF9yZWY1LmtleTtcbiAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eS5rZXkgPT09IGtleTtcbiAgICAgICAgICAgIH0pOyAvLyBSZW1vdmUgaWYgYWxyZWFkeSBtYXJrIGFzIHJlbW92ZWRcblxuICAgICAgICAgICAgaWYgKHByZXZFbnRpdHkgJiYgcHJldkVudGl0eS5zdGF0dXMgPT09IFNUQVRVU19SRU1PVkVEICYmIGVudGl0eS5zdGF0dXMgPT09IFNUQVRVU19SRU1PVkUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDU1NNb3Rpb25MaXN0O1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ1NTTW90aW9uTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcG9uZW50OiAnZGl2J1xuICB9O1xuICByZXR1cm4gQ1NTTW90aW9uTGlzdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGdlbkNTU01vdGlvbkxpc3Qoc3VwcG9ydFRyYW5zaXRpb24pOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBEb21XcmFwcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEb21XcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERvbVdyYXBwZXIpO1xuXG4gIGZ1bmN0aW9uIERvbVdyYXBwZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvbVdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERvbVdyYXBwZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRG9tV3JhcHBlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRG9tV3JhcHBlcjsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhbmltYXRpb25FbmROYW1lLCB0cmFuc2l0aW9uRW5kTmFtZSB9IGZyb20gJy4uL3V0aWwvbW90aW9uJztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIGNhY2hlRWxlbWVudFJlZiA9IHVzZVJlZigpOyAvLyBDYWNoZSBjYWxsYmFja1xuXG4gIHZhciBjYWxsYmFja1JlZiA9IHVzZVJlZihjYWxsYmFjayk7XG4gIGNhbGxiYWNrUmVmLmN1cnJlbnQgPSBjYWxsYmFjazsgLy8gSW50ZXJuYWwgbW90aW9uIGV2ZW50IGhhbmRsZXJcblxuICB2YXIgb25JbnRlcm5hbE1vdGlvbkVuZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNhbGxiYWNrUmVmLmN1cnJlbnQoZXZlbnQpO1xuICB9LCBbXSk7IC8vIFJlbW92ZSBldmVudHNcblxuICBmdW5jdGlvbiByZW1vdmVNb3Rpb25FdmVudHMoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZE5hbWUsIG9uSW50ZXJuYWxNb3Rpb25FbmQpO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZE5hbWUsIG9uSW50ZXJuYWxNb3Rpb25FbmQpO1xuICAgIH1cbiAgfSAvLyBQYXRjaCBldmVudHNcblxuXG4gIGZ1bmN0aW9uIHBhdGNoTW90aW9uRXZlbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQgJiYgY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgIHJlbW92ZU1vdGlvbkV2ZW50cyhjYWNoZUVsZW1lbnRSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kTmFtZSwgb25JbnRlcm5hbE1vdGlvbkVuZCk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kTmFtZSwgb25JbnRlcm5hbE1vdGlvbkVuZCk7IC8vIFNhdmUgYXMgY2FjaGUgaW4gY2FzZSBkb20gcmVtb3ZlZCB0cmlnZ2VyIGJ5IGBtb3Rpb25EZWFkbGluZWBcblxuICAgICAgY2FjaGVFbGVtZW50UmVmLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgfSAvLyBDbGVhbiB1cCB3aGVuIHJlbW92ZWRcblxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZU1vdGlvbkV2ZW50cyhjYWNoZUVsZW1lbnRSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3BhdGNoTW90aW9uRXZlbnRzLCByZW1vdmVNb3Rpb25FdmVudHNdO1xufSk7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2FuVXNlRG9tIGZyb20gXCJyYy11dGlsL2VzL0RvbS9jYW5Vc2VEb21cIjsgLy8gSXQncyBzYWZlIHRvIHVzZSBgdXNlTGF5b3V0RWZmZWN0YCBidXQgdGhlIHdhcm5pbmcgaXMgYW5ub3lpbmdcblxudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBjYW5Vc2VEb20oKSA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDtcbmV4cG9ydCBkZWZhdWx0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3Q7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHZhciBuZXh0RnJhbWVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gY2FuY2VsTmV4dEZyYW1lKCkge1xuICAgIHJhZi5jYW5jZWwobmV4dEZyYW1lUmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dEZyYW1lKGNhbGxiYWNrKSB7XG4gICAgdmFyIGRlbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuICAgIGNhbmNlbE5leHRGcmFtZSgpO1xuICAgIHZhciBuZXh0RnJhbWVJZCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZGVsYXkgPD0gMSkge1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgaXNDYW5jZWxlZDogZnVuY3Rpb24gaXNDYW5jZWxlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0RnJhbWVJZCAhPT0gbmV4dEZyYW1lUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHRGcmFtZShjYWxsYmFjaywgZGVsYXkgLSAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXh0RnJhbWVSZWYuY3VycmVudCA9IG5leHRGcmFtZUlkO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2FuY2VsTmV4dEZyYW1lKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW25leHRGcmFtZSwgY2FuY2VsTmV4dEZyYW1lXTtcbn0pOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTW91bnRTdGF0dXMoZGVmYXVsdFZhbHVlKSB7XG4gIHZhciBkZXN0cm95UmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgdmFsID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFZhbCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgZnVuY3Rpb24gc2V0VmFsdWUobmV4dCkge1xuICAgIGlmICghZGVzdHJveVJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRWYWwobmV4dCk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGVzdHJveVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBbdmFsLCBzZXRWYWx1ZV07XG59IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU1RBVFVTX0FQUEVBUiwgU1RBVFVTX05PTkUsIFNUQVRVU19MRUFWRSwgU1RBVFVTX0VOVEVSLCBTVEVQX1BSRVBBUkUsIFNURVBfU1RBUlQsIFNURVBfQUNUSVZFIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB1c2VTdGF0ZSBmcm9tICcuL3VzZVN0YXRlJztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgdXNlU3RlcFF1ZXVlLCB7IERvU3RlcCwgU2tpcFN0ZXAsIGlzQWN0aXZlIH0gZnJvbSAnLi91c2VTdGVwUXVldWUnO1xuaW1wb3J0IHVzZURvbU1vdGlvbkV2ZW50cyBmcm9tICcuL3VzZURvbU1vdGlvbkV2ZW50cyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTdGF0dXMoc3VwcG9ydE1vdGlvbiwgdmlzaWJsZSwgZ2V0RWxlbWVudCwgX3JlZikge1xuICB2YXIgX3JlZiRtb3Rpb25FbnRlciA9IF9yZWYubW90aW9uRW50ZXIsXG4gICAgICBtb3Rpb25FbnRlciA9IF9yZWYkbW90aW9uRW50ZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJG1vdGlvbkVudGVyLFxuICAgICAgX3JlZiRtb3Rpb25BcHBlYXIgPSBfcmVmLm1vdGlvbkFwcGVhcixcbiAgICAgIG1vdGlvbkFwcGVhciA9IF9yZWYkbW90aW9uQXBwZWFyID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRtb3Rpb25BcHBlYXIsXG4gICAgICBfcmVmJG1vdGlvbkxlYXZlID0gX3JlZi5tb3Rpb25MZWF2ZSxcbiAgICAgIG1vdGlvbkxlYXZlID0gX3JlZiRtb3Rpb25MZWF2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkbW90aW9uTGVhdmUsXG4gICAgICBtb3Rpb25EZWFkbGluZSA9IF9yZWYubW90aW9uRGVhZGxpbmUsXG4gICAgICBtb3Rpb25MZWF2ZUltbWVkaWF0ZWx5ID0gX3JlZi5tb3Rpb25MZWF2ZUltbWVkaWF0ZWx5LFxuICAgICAgb25BcHBlYXJQcmVwYXJlID0gX3JlZi5vbkFwcGVhclByZXBhcmUsXG4gICAgICBvbkVudGVyUHJlcGFyZSA9IF9yZWYub25FbnRlclByZXBhcmUsXG4gICAgICBvbkxlYXZlUHJlcGFyZSA9IF9yZWYub25MZWF2ZVByZXBhcmUsXG4gICAgICBvbkFwcGVhclN0YXJ0ID0gX3JlZi5vbkFwcGVhclN0YXJ0LFxuICAgICAgb25FbnRlclN0YXJ0ID0gX3JlZi5vbkVudGVyU3RhcnQsXG4gICAgICBvbkxlYXZlU3RhcnQgPSBfcmVmLm9uTGVhdmVTdGFydCxcbiAgICAgIG9uQXBwZWFyQWN0aXZlID0gX3JlZi5vbkFwcGVhckFjdGl2ZSxcbiAgICAgIG9uRW50ZXJBY3RpdmUgPSBfcmVmLm9uRW50ZXJBY3RpdmUsXG4gICAgICBvbkxlYXZlQWN0aXZlID0gX3JlZi5vbkxlYXZlQWN0aXZlLFxuICAgICAgb25BcHBlYXJFbmQgPSBfcmVmLm9uQXBwZWFyRW5kLFxuICAgICAgb25FbnRlckVuZCA9IF9yZWYub25FbnRlckVuZCxcbiAgICAgIG9uTGVhdmVFbmQgPSBfcmVmLm9uTGVhdmVFbmQsXG4gICAgICBvblZpc2libGVDaGFuZ2VkID0gX3JlZi5vblZpc2libGVDaGFuZ2VkO1xuXG4gIC8vIFVzZWQgZm9yIG91dGVyIHJlbmRlciB1c2FnZSB0byBhdm9pZCBgdmlzaWJsZTogZmFsc2UgJiBzdGF0dXM6IG5vbmVgIHRvIHJlbmRlciBub3RoaW5nXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBhc3luY1Zpc2libGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0QXN5bmNWaXNpYmxlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKFNUQVRVU19OT05FKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHN0YXR1cyA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTdGF0dXMgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUobnVsbCksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBzdHlsZSA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICBzZXRTdHlsZSA9IF91c2VTdGF0ZTZbMV07XG5cbiAgdmFyIG1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgZGVhZGxpbmVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBkZXN0cm95ZWRSZWYgPSB1c2VSZWYoZmFsc2UpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gRG9tIE5vZGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGNhY2hlRWxlbWVudFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiBnZXREb21FbGVtZW50KCkge1xuICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgIHJldHVybiBlbGVtZW50IHx8IGNhY2hlRWxlbWVudFJlZi5jdXJyZW50O1xuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IE1vdGlvbiBFbmQgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBhY3RpdmVSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIG9uSW50ZXJuYWxNb3Rpb25FbmQoZXZlbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldERvbUVsZW1lbnQoKTtcblxuICAgIGlmIChldmVudCAmJiAhZXZlbnQuZGVhZGxpbmUgJiYgZXZlbnQudGFyZ2V0ICE9PSBlbGVtZW50KSB7XG4gICAgICAvLyBldmVudCBleGlzdHNcbiAgICAgIC8vIG5vdCBpbml0aWF0ZWQgYnkgZGVhZGxpbmVcbiAgICAgIC8vIHRyYW5zaXRpb25FbmQgbm90IGZpcmVkIGJ5IGlubmVyIGVsZW1lbnRzXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbkVuZDtcblxuICAgIGlmIChzdGF0dXMgPT09IFNUQVRVU19BUFBFQVIgJiYgYWN0aXZlUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNhbkVuZCA9IG9uQXBwZWFyRW5kID09PSBudWxsIHx8IG9uQXBwZWFyRW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkFwcGVhckVuZChlbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiBhY3RpdmVSZWYuY3VycmVudCkge1xuICAgICAgY2FuRW5kID0gb25FbnRlckVuZCA9PT0gbnVsbCB8fCBvbkVudGVyRW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkVudGVyRW5kKGVsZW1lbnQsIGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX0xFQVZFICYmIGFjdGl2ZVJlZi5jdXJyZW50KSB7XG4gICAgICBjYW5FbmQgPSBvbkxlYXZlRW5kID09PSBudWxsIHx8IG9uTGVhdmVFbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uTGVhdmVFbmQoZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gLy8gT25seSB1cGRhdGUgc3RhdHVzIHdoZW4gYGNhbkVuZGAgYW5kIG5vdCBkZXN0cm95ZWRcblxuXG4gICAgaWYgKGNhbkVuZCAhPT0gZmFsc2UgJiYgIWRlc3Ryb3llZFJlZi5jdXJyZW50KSB7XG4gICAgICBzZXRTdGF0dXMoU1RBVFVTX05PTkUpO1xuICAgICAgc2V0U3R5bGUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIF91c2VEb21Nb3Rpb25FdmVudHMgPSB1c2VEb21Nb3Rpb25FdmVudHMob25JbnRlcm5hbE1vdGlvbkVuZCksXG4gICAgICBfdXNlRG9tTW90aW9uRXZlbnRzMiA9IF9zbGljZWRUb0FycmF5KF91c2VEb21Nb3Rpb25FdmVudHMsIDEpLFxuICAgICAgcGF0Y2hNb3Rpb25FdmVudHMgPSBfdXNlRG9tTW90aW9uRXZlbnRzMlswXTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU3RlcCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIGV2ZW50SGFuZGxlcnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZjIsIF9yZWYzLCBfcmVmNDtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlICdhcHBlYXInOlxuICAgICAgICByZXR1cm4gX3JlZjIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBTVEVQX1BSRVBBUkUsIG9uQXBwZWFyUHJlcGFyZSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgU1RFUF9TVEFSVCwgb25BcHBlYXJTdGFydCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgU1RFUF9BQ1RJVkUsIG9uQXBwZWFyQWN0aXZlKSwgX3JlZjI7XG5cbiAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgcmV0dXJuIF9yZWYzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgU1RFUF9QUkVQQVJFLCBvbkVudGVyUHJlcGFyZSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMywgU1RFUF9TVEFSVCwgb25FbnRlclN0YXJ0KSwgX2RlZmluZVByb3BlcnR5KF9yZWYzLCBTVEVQX0FDVElWRSwgb25FbnRlckFjdGl2ZSksIF9yZWYzO1xuXG4gICAgICBjYXNlICdsZWF2ZSc6XG4gICAgICAgIHJldHVybiBfcmVmNCA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjQsIFNURVBfUFJFUEFSRSwgb25MZWF2ZVByZXBhcmUpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjQsIFNURVBfU1RBUlQsIG9uTGVhdmVTdGFydCksIF9kZWZpbmVQcm9wZXJ0eShfcmVmNCwgU1RFUF9BQ1RJVkUsIG9uTGVhdmVBY3RpdmUpLCBfcmVmNDtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfSwgW3N0YXR1c10pO1xuXG4gIHZhciBfdXNlU3RlcFF1ZXVlID0gdXNlU3RlcFF1ZXVlKHN0YXR1cywgZnVuY3Rpb24gKG5ld1N0ZXApIHtcbiAgICAvLyBPbmx5IHByZXBhcmUgc3RlcCBjYW4gYmUgc2tpcFxuICAgIGlmIChuZXdTdGVwID09PSBTVEVQX1BSRVBBUkUpIHtcbiAgICAgIHZhciBvblByZXBhcmUgPSBldmVudEhhbmRsZXJzW1NURVBfUFJFUEFSRV07XG5cbiAgICAgIGlmICghb25QcmVwYXJlKSB7XG4gICAgICAgIHJldHVybiBTa2lwU3RlcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9uUHJlcGFyZShnZXREb21FbGVtZW50KCkpO1xuICAgIH0gLy8gUmVzdCBzdGVwIGlzIHN5bmMgdXBkYXRlXG5cblxuICAgIC8vIFJlc3Qgc3RlcCBpcyBzeW5jIHVwZGF0ZVxuICAgIGlmIChzdGVwIGluIGV2ZW50SGFuZGxlcnMpIHtcbiAgICAgIHZhciBfZXZlbnRIYW5kbGVycyRzdGVwO1xuXG4gICAgICBzZXRTdHlsZSgoKF9ldmVudEhhbmRsZXJzJHN0ZXAgPSBldmVudEhhbmRsZXJzW3N0ZXBdKSA9PT0gbnVsbCB8fCBfZXZlbnRIYW5kbGVycyRzdGVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnRIYW5kbGVycyRzdGVwLmNhbGwoZXZlbnRIYW5kbGVycywgZ2V0RG9tRWxlbWVudCgpLCBudWxsKSkgfHwgbnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAgPT09IFNURVBfQUNUSVZFKSB7XG4gICAgICAvLyBQYXRjaCBldmVudHMgd2hlbiBtb3Rpb24gbmVlZGVkXG4gICAgICBwYXRjaE1vdGlvbkV2ZW50cyhnZXREb21FbGVtZW50KCkpO1xuXG4gICAgICBpZiAobW90aW9uRGVhZGxpbmUgPiAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChkZWFkbGluZVJlZi5jdXJyZW50KTtcbiAgICAgICAgZGVhZGxpbmVSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uSW50ZXJuYWxNb3Rpb25FbmQoe1xuICAgICAgICAgICAgZGVhZGxpbmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbW90aW9uRGVhZGxpbmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBEb1N0ZXA7XG4gIH0pLFxuICAgICAgX3VzZVN0ZXBRdWV1ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RlcFF1ZXVlLCAyKSxcbiAgICAgIHN0YXJ0U3RlcCA9IF91c2VTdGVwUXVldWUyWzBdLFxuICAgICAgc3RlcCA9IF91c2VTdGVwUXVldWUyWzFdO1xuXG4gIHZhciBhY3RpdmUgPSBpc0FjdGl2ZShzdGVwKTtcbiAgYWN0aXZlUmVmLmN1cnJlbnQgPSBhY3RpdmU7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU3RhdHVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gVXBkYXRlIHdpdGggbmV3IHN0YXR1c1xuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldEFzeW5jVmlzaWJsZSh2aXNpYmxlKTtcbiAgICB2YXIgaXNNb3VudGVkID0gbW91bnRlZFJlZi5jdXJyZW50O1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG5cbiAgICBpZiAoIXN1cHBvcnRNb3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dFN0YXR1czsgLy8gQXBwZWFyXG5cbiAgICBpZiAoIWlzTW91bnRlZCAmJiB2aXNpYmxlICYmIG1vdGlvbkFwcGVhcikge1xuICAgICAgbmV4dFN0YXR1cyA9IFNUQVRVU19BUFBFQVI7XG4gICAgfSAvLyBFbnRlclxuXG5cbiAgICBpZiAoaXNNb3VudGVkICYmIHZpc2libGUgJiYgbW90aW9uRW50ZXIpIHtcbiAgICAgIG5leHRTdGF0dXMgPSBTVEFUVVNfRU5URVI7XG4gICAgfSAvLyBMZWF2ZVxuXG5cbiAgICBpZiAoaXNNb3VudGVkICYmICF2aXNpYmxlICYmIG1vdGlvbkxlYXZlIHx8ICFpc01vdW50ZWQgJiYgbW90aW9uTGVhdmVJbW1lZGlhdGVseSAmJiAhdmlzaWJsZSAmJiBtb3Rpb25MZWF2ZSkge1xuICAgICAgbmV4dFN0YXR1cyA9IFNUQVRVU19MRUFWRTtcbiAgICB9IC8vIFVwZGF0ZSB0byBuZXh0IHN0YXR1c1xuXG5cbiAgICBpZiAobmV4dFN0YXR1cykge1xuICAgICAgc2V0U3RhdHVzKG5leHRTdGF0dXMpO1xuICAgICAgc3RhcnRTdGVwKCk7XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFJlc2V0IHdoZW4gbW90aW9uIGNoYW5nZWRcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICggLy8gQ2FuY2VsIGFwcGVhclxuICAgIHN0YXR1cyA9PT0gU1RBVFVTX0FQUEVBUiAmJiAhbW90aW9uQXBwZWFyIHx8IC8vIENhbmNlbCBlbnRlclxuICAgIHN0YXR1cyA9PT0gU1RBVFVTX0VOVEVSICYmICFtb3Rpb25FbnRlciB8fCAvLyBDYW5jZWwgbGVhdmVcbiAgICBzdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiAhbW90aW9uTGVhdmUpIHtcbiAgICAgIHNldFN0YXR1cyhTVEFUVVNfTk9ORSk7XG4gICAgfVxuICB9LCBbbW90aW9uQXBwZWFyLCBtb3Rpb25FbnRlciwgbW90aW9uTGVhdmVdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlYWRsaW5lUmVmLmN1cnJlbnQpO1xuICAgICAgZGVzdHJveWVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gVHJpZ2dlciBgb25WaXNpYmxlQ2hhbmdlZGBcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhc3luY1Zpc2libGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0dXMgPT09IFNUQVRVU19OT05FKSB7XG4gICAgICBvblZpc2libGVDaGFuZ2VkID09PSBudWxsIHx8IG9uVmlzaWJsZUNoYW5nZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVmlzaWJsZUNoYW5nZWQoYXN5bmNWaXNpYmxlKTtcbiAgICB9XG4gIH0sIFthc3luY1Zpc2libGUsIHN0YXR1c10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFN0eWxlcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1lcmdlZFN0eWxlID0gc3R5bGU7XG5cbiAgaWYgKGV2ZW50SGFuZGxlcnNbU1RFUF9QUkVQQVJFXSAmJiBzdGVwID09PSBTVEVQX1NUQVJUKSB7XG4gICAgbWVyZ2VkU3R5bGUgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgIH0sIG1lcmdlZFN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBbc3RhdHVzLCBzdGVwLCBtZXJnZWRTdHlsZSwgYXN5bmNWaXNpYmxlICE9PSBudWxsICYmIGFzeW5jVmlzaWJsZSAhPT0gdm9pZCAwID8gYXN5bmNWaXNpYmxlIDogdmlzaWJsZV07XG59IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTVEVQX1BSRVBBUkUsIFNURVBfQUNUSVZFLCBTVEVQX1NUQVJULCBTVEVQX0FDVElWQVRFRCwgU1RFUF9OT05FIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgdXNlTmV4dEZyYW1lIGZyb20gJy4vdXNlTmV4dEZyYW1lJztcbnZhciBTVEVQX1FVRVVFID0gW1NURVBfUFJFUEFSRSwgU1RFUF9TVEFSVCwgU1RFUF9BQ1RJVkUsIFNURVBfQUNUSVZBVEVEXTtcbi8qKiBTa2lwIGN1cnJlbnQgc3RlcCAqL1xuXG5leHBvcnQgdmFyIFNraXBTdGVwID0gZmFsc2U7XG4vKiogQ3VycmVudCBzdGVwIHNob3VsZCBiZSB1cGRhdGUgaW4gKi9cblxuZXhwb3J0IHZhciBEb1N0ZXAgPSB0cnVlO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWN0aXZlKHN0ZXApIHtcbiAgcmV0dXJuIHN0ZXAgPT09IFNURVBfQUNUSVZFIHx8IHN0ZXAgPT09IFNURVBfQUNUSVZBVEVEO1xufVxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChzdGF0dXMsIGNhbGxiYWNrKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShTVEVQX05PTkUpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBzdGVwID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFN0ZXAgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlTmV4dEZyYW1lID0gdXNlTmV4dEZyYW1lKCksXG4gICAgICBfdXNlTmV4dEZyYW1lMiA9IF9zbGljZWRUb0FycmF5KF91c2VOZXh0RnJhbWUsIDIpLFxuICAgICAgbmV4dEZyYW1lID0gX3VzZU5leHRGcmFtZTJbMF0sXG4gICAgICBjYW5jZWxOZXh0RnJhbWUgPSBfdXNlTmV4dEZyYW1lMlsxXTtcblxuICBmdW5jdGlvbiBzdGFydFF1ZXVlKCkge1xuICAgIHNldFN0ZXAoU1RFUF9QUkVQQVJFKTtcbiAgfVxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGVwICE9PSBTVEVQX05PTkUgJiYgc3RlcCAhPT0gU1RFUF9BQ1RJVkFURUQpIHtcbiAgICAgIHZhciBpbmRleCA9IFNURVBfUVVFVUUuaW5kZXhPZihzdGVwKTtcbiAgICAgIHZhciBuZXh0U3RlcCA9IFNURVBfUVVFVUVbaW5kZXggKyAxXTtcbiAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjayhzdGVwKTtcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gU2tpcFN0ZXApIHtcbiAgICAgICAgLy8gU2tpcCB3aGVuIG5vIG5lZWRlZFxuICAgICAgICBzZXRTdGVwKG5leHRTdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERvIGFzIGZyYW1lIGZvciBzdGVwIHVwZGF0ZVxuICAgICAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICBmdW5jdGlvbiBkb05leHQoKSB7XG4gICAgICAgICAgICAvLyBTa2lwIHNpbmNlIGN1cnJlbnQgcXVldWUgaXMgb29kXG4gICAgICAgICAgICBpZiAoaW5mby5pc0NhbmNlbGVkKCkpIHJldHVybjtcbiAgICAgICAgICAgIHNldFN0ZXAobmV4dFN0ZXApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRvTmV4dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPbmx5IHByb21pc2Ugc2hvdWxkIGJlIGFzeW5jXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKGRvTmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzdGF0dXMsIHN0ZXBdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2FuY2VsTmV4dEZyYW1lKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW3N0YXJ0UXVldWUsIHN0ZXBdO1xufSk7IiwiaW1wb3J0IENTU01vdGlvbiBmcm9tICcuL0NTU01vdGlvbic7XG5pbXBvcnQgQ1NTTW90aW9uTGlzdCBmcm9tICcuL0NTU01vdGlvbkxpc3QnO1xuZXhwb3J0IHsgQ1NTTW90aW9uTGlzdCB9O1xuZXhwb3J0IGRlZmF1bHQgQ1NTTW90aW9uOyIsImV4cG9ydCB2YXIgU1RBVFVTX05PTkUgPSAnbm9uZSc7XG5leHBvcnQgdmFyIFNUQVRVU19BUFBFQVIgPSAnYXBwZWFyJztcbmV4cG9ydCB2YXIgU1RBVFVTX0VOVEVSID0gJ2VudGVyJztcbmV4cG9ydCB2YXIgU1RBVFVTX0xFQVZFID0gJ2xlYXZlJztcbmV4cG9ydCB2YXIgU1RFUF9OT05FID0gJ25vbmUnO1xuZXhwb3J0IHZhciBTVEVQX1BSRVBBUkUgPSAncHJlcGFyZSc7XG5leHBvcnQgdmFyIFNURVBfU1RBUlQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBTVEVQX0FDVElWRSA9ICdhY3RpdmUnO1xuZXhwb3J0IHZhciBTVEVQX0FDVElWQVRFRCA9ICdlbmQnOyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5leHBvcnQgdmFyIFNUQVRVU19BREQgPSAnYWRkJztcbmV4cG9ydCB2YXIgU1RBVFVTX0tFRVAgPSAna2VlcCc7XG5leHBvcnQgdmFyIFNUQVRVU19SRU1PVkUgPSAncmVtb3ZlJztcbmV4cG9ydCB2YXIgU1RBVFVTX1JFTU9WRUQgPSAncmVtb3ZlZCc7XG5leHBvcnQgZnVuY3Rpb24gd3JhcEtleVRvT2JqZWN0KGtleSkge1xuICB2YXIga2V5T2JqO1xuXG4gIGlmIChrZXkgJiYgX3R5cGVvZihrZXkpID09PSAnb2JqZWN0JyAmJiAna2V5JyBpbiBrZXkpIHtcbiAgICBrZXlPYmogPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAga2V5T2JqID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwga2V5T2JqKSwge30sIHtcbiAgICBrZXk6IFN0cmluZyhrZXlPYmoua2V5KVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUtleXMoKSB7XG4gIHZhciBrZXlzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgcmV0dXJuIGtleXMubWFwKHdyYXBLZXlUb09iamVjdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlmZktleXMoKSB7XG4gIHZhciBwcmV2S2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciBjdXJyZW50S2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gIHZhciBsaXN0ID0gW107XG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xuICB2YXIgY3VycmVudExlbiA9IGN1cnJlbnRLZXlzLmxlbmd0aDtcbiAgdmFyIHByZXZLZXlPYmplY3RzID0gcGFyc2VLZXlzKHByZXZLZXlzKTtcbiAgdmFyIGN1cnJlbnRLZXlPYmplY3RzID0gcGFyc2VLZXlzKGN1cnJlbnRLZXlzKTsgLy8gQ2hlY2sgcHJldiBrZXlzIHRvIGluc2VydCBvciBrZWVwXG5cbiAgcHJldktleU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5T2JqKSB7XG4gICAgdmFyIGhpdCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IGN1cnJlbnRJbmRleDsgaSA8IGN1cnJlbnRMZW47IGkgKz0gMSkge1xuICAgICAgdmFyIGN1cnJlbnRLZXlPYmogPSBjdXJyZW50S2V5T2JqZWN0c1tpXTtcblxuICAgICAgaWYgKGN1cnJlbnRLZXlPYmoua2V5ID09PSBrZXlPYmoua2V5KSB7XG4gICAgICAgIC8vIE5ldyBhZGRlZCBrZXlzIHNob3VsZCBhZGQgYmVmb3JlIGN1cnJlbnQga2V5XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBpKSB7XG4gICAgICAgICAgbGlzdCA9IGxpc3QuY29uY2F0KGN1cnJlbnRLZXlPYmplY3RzLnNsaWNlKGN1cnJlbnRJbmRleCwgaSkubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG9iaiksIHt9LCB7XG4gICAgICAgICAgICAgIHN0YXR1czogU1RBVFVTX0FERFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjdXJyZW50S2V5T2JqKSwge30sIHtcbiAgICAgICAgICBzdGF0dXM6IFNUQVRVU19LRUVQXG4gICAgICAgIH0pKTtcbiAgICAgICAgY3VycmVudEluZGV4ICs9IDE7XG4gICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gLy8gSWYgbm90IGhpdCwgaXQgbWVhbnMga2V5IGlzIHJlbW92ZWRcblxuXG4gICAgaWYgKCFoaXQpIHtcbiAgICAgIGxpc3QucHVzaChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGtleU9iaiksIHt9LCB7XG4gICAgICAgIHN0YXR1czogU1RBVFVTX1JFTU9WRVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSk7IC8vIEFkZCByZXN0IHRvIHRoZSBsaXN0XG5cbiAgaWYgKGN1cnJlbnRJbmRleCA8IGN1cnJlbnRMZW4pIHtcbiAgICBsaXN0ID0gbGlzdC5jb25jYXQoY3VycmVudEtleU9iamVjdHMuc2xpY2UoY3VycmVudEluZGV4KS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb2JqKSwge30sIHtcbiAgICAgICAgc3RhdHVzOiBTVEFUVVNfQUREXG4gICAgICB9KTtcbiAgICB9KSk7XG4gIH1cbiAgLyoqXG4gICAqIE1lcmdlIHNhbWUga2V5IHdoZW4gaXQgcmVtb3ZlIGFuZCBhZGQgYWdhaW46XG4gICAqICAgIFsxIC0gYWRkLCAyIC0ga2VlcCwgMSAtIHJlbW92ZV0gLT4gWzEgLSBrZWVwLCAyIC0ga2VlcF1cbiAgICovXG5cblxuICB2YXIga2V5cyA9IHt9O1xuICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIga2V5ID0gX3JlZi5rZXk7XG4gICAga2V5c1trZXldID0gKGtleXNba2V5XSB8fCAwKSArIDE7XG4gIH0pO1xuICB2YXIgZHVwbGljYXRlZEtleXMgPSBPYmplY3Qua2V5cyhrZXlzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXlzW2tleV0gPiAxO1xuICB9KTtcbiAgZHVwbGljYXRlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2hLZXkpIHtcbiAgICAvLyBSZW1vdmUgYFNUQVRVU19SRU1PVkVgIG5vZGUuXG4gICAgbGlzdCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcbiAgICAgICAgICBzdGF0dXMgPSBfcmVmMi5zdGF0dXM7XG4gICAgICByZXR1cm4ga2V5ICE9PSBtYXRjaEtleSB8fCBzdGF0dXMgIT09IFNUQVRVU19SRU1PVkU7XG4gICAgfSk7IC8vIFVwZGF0ZSBgU1RBVFVTX0FERGAgdG8gYFNUQVRVU19LRUVQYFxuXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAobm9kZS5rZXkgPT09IG1hdGNoS2V5KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBub2RlLnN0YXR1cyA9IFNUQVRVU19LRUVQO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxpc3Q7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGNhblVzZURPTSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vY2FuVXNlRG9tXCI7IC8vID09PT09PT09PT09PT09PT09IFRyYW5zaXRpb24gPT09PT09PT09PT09PT09PT1cbi8vIEV2ZW50IHdyYXBwZXIuIENvcHkgZnJvbSByZWFjdCBzb3VyY2UgY29kZVxuXG5mdW5jdGlvbiBtYWtlUHJlZml4TWFwKHN0eWxlUHJvcCwgZXZlbnROYW1lKSB7XG4gIHZhciBwcmVmaXhlcyA9IHt9O1xuICBwcmVmaXhlc1tzdHlsZVByb3AudG9Mb3dlckNhc2UoKV0gPSBldmVudE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgcHJlZml4ZXNbXCJXZWJraXRcIi5jb25jYXQoc3R5bGVQcm9wKV0gPSBcIndlYmtpdFwiLmNvbmNhdChldmVudE5hbWUpO1xuICBwcmVmaXhlc1tcIk1velwiLmNvbmNhdChzdHlsZVByb3ApXSA9IFwibW96XCIuY29uY2F0KGV2ZW50TmFtZSk7XG4gIHByZWZpeGVzW1wibXNcIi5jb25jYXQoc3R5bGVQcm9wKV0gPSBcIk1TXCIuY29uY2F0KGV2ZW50TmFtZSk7XG4gIHByZWZpeGVzW1wiT1wiLmNvbmNhdChzdHlsZVByb3ApXSA9IFwib1wiLmNvbmNhdChldmVudE5hbWUudG9Mb3dlckNhc2UoKSk7XG4gIHJldHVybiBwcmVmaXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvclByZWZpeGVzKGRvbVN1cHBvcnQsIHdpbikge1xuICB2YXIgcHJlZml4ZXMgPSB7XG4gICAgYW5pbWF0aW9uZW5kOiBtYWtlUHJlZml4TWFwKCdBbmltYXRpb24nLCAnQW5pbWF0aW9uRW5kJyksXG4gICAgdHJhbnNpdGlvbmVuZDogbWFrZVByZWZpeE1hcCgnVHJhbnNpdGlvbicsICdUcmFuc2l0aW9uRW5kJylcbiAgfTtcblxuICBpZiAoZG9tU3VwcG9ydCkge1xuICAgIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luKSkge1xuICAgICAgZGVsZXRlIHByZWZpeGVzLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gICAgfVxuXG4gICAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luKSkge1xuICAgICAgZGVsZXRlIHByZWZpeGVzLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJlZml4ZXM7XG59XG52YXIgdmVuZG9yUHJlZml4ZXMgPSBnZXRWZW5kb3JQcmVmaXhlcyhjYW5Vc2VET00oKSwgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fSk7XG52YXIgc3R5bGUgPSB7fTtcblxuaWYgKGNhblVzZURPTSgpKSB7XG4gIHZhciBfZG9jdW1lbnQkY3JlYXRlRWxlbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzdHlsZSA9IF9kb2N1bWVudCRjcmVhdGVFbGVtZS5zdHlsZTtcbn1cblxudmFyIHByZWZpeGVkRXZlbnROYW1lcyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKGV2ZW50TmFtZSkge1xuICBpZiAocHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV0pIHtcbiAgICByZXR1cm4gcHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gIH1cblxuICB2YXIgcHJlZml4TWFwID0gdmVuZG9yUHJlZml4ZXNbZXZlbnROYW1lXTtcblxuICBpZiAocHJlZml4TWFwKSB7XG4gICAgdmFyIHN0eWxlUHJvcExpc3QgPSBPYmplY3Qua2V5cyhwcmVmaXhNYXApO1xuICAgIHZhciBsZW4gPSBzdHlsZVByb3BMaXN0Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHZhciBzdHlsZVByb3AgPSBzdHlsZVByb3BMaXN0W2ldO1xuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByZWZpeE1hcCwgc3R5bGVQcm9wKSAmJiBzdHlsZVByb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgcHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSBwcmVmaXhNYXBbc3R5bGVQcm9wXTtcbiAgICAgICAgcmV0dXJuIHByZWZpeGVkRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbnZhciBpbnRlcm5hbEFuaW1hdGlvbkVuZE5hbWUgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgnYW5pbWF0aW9uZW5kJyk7XG52YXIgaW50ZXJuYWxUcmFuc2l0aW9uRW5kTmFtZSA9IGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKCd0cmFuc2l0aW9uZW5kJyk7XG5leHBvcnQgdmFyIHN1cHBvcnRUcmFuc2l0aW9uID0gISEoaW50ZXJuYWxBbmltYXRpb25FbmROYW1lICYmIGludGVybmFsVHJhbnNpdGlvbkVuZE5hbWUpO1xuZXhwb3J0IHZhciBhbmltYXRpb25FbmROYW1lID0gaW50ZXJuYWxBbmltYXRpb25FbmROYW1lIHx8ICdhbmltYXRpb25lbmQnO1xuZXhwb3J0IHZhciB0cmFuc2l0aW9uRW5kTmFtZSA9IGludGVybmFsVHJhbnNpdGlvbkVuZE5hbWUgfHwgJ3RyYW5zaXRpb25lbmQnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKHRyYW5zaXRpb25OYW1lLCB0cmFuc2l0aW9uVHlwZSkge1xuICBpZiAoIXRyYW5zaXRpb25OYW1lKSByZXR1cm4gbnVsbDtcblxuICBpZiAoX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHR5cGUgPSB0cmFuc2l0aW9uVHlwZS5yZXBsYWNlKC8tXFx3L2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lW3R5cGVdO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KHRyYW5zaXRpb25OYW1lLCBcIi1cIikuY29uY2F0KHRyYW5zaXRpb25UeXBlKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuXG52YXIgSGFuZGxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIYW5kbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSGFuZGxlKTtcblxuICBmdW5jdGlvbiBIYW5kbGUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhbmRsZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2xpY2tGb2N1c2VkOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRIYW5kbGVSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuaGFuZGxlID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5oYW5kbGUpIHtcbiAgICAgICAgX3RoaXMuc2V0Q2xpY2tGb2N1cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIGF2b2lkIHNlbGVjdGluZyB0ZXh0IGR1cmluZyBkcmFnXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yNTAxMFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBmaXggaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTUzMjRcblxuICAgICAgX3RoaXMuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldENsaWNrRm9jdXMoZmFsc2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0Q2xpY2tGb2N1cyhmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIYW5kbGUsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgLy8gbW91c2V1cCB3b24ndCB0cmlnZ2VyIGlmIG1vdXNlIG1vdmVkIG91dCBvZiBoYW5kbGUsXG4gICAgICAvLyBzbyB3ZSBsaXN0ZW4gb24gZG9jdW1lbnQgaGVyZS5cbiAgICAgIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMub25Nb3VzZVVwTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlVXBMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0Q2xpY2tGb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDbGlja0ZvY3VzKGZvY3VzZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGlja0ZvY3VzZWQ6IGZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGlja0ZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsaWNrRm9jdXMoKSB7XG4gICAgICB0aGlzLnNldENsaWNrRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5oYW5kbGUuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgdGhpcy5oYW5kbGUuYmx1cigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9yZWYsIF9yZWYyO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzLnZlcnRpY2FsLFxuICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wcy5yZXZlcnNlLFxuICAgICAgICAgIG9mZnNldCA9IF90aGlzJHByb3BzLm9mZnNldCxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzLnN0eWxlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzLm1heCxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3RoaXMkcHJvcHMudGFiSW5kZXgsXG4gICAgICAgICAgYXJpYUxhYmVsID0gX3RoaXMkcHJvcHMuYXJpYUxhYmVsLFxuICAgICAgICAgIGFyaWFMYWJlbGxlZEJ5ID0gX3RoaXMkcHJvcHMuYXJpYUxhYmVsbGVkQnksXG4gICAgICAgICAgYXJpYVZhbHVlVGV4dEZvcm1hdHRlciA9IF90aGlzJHByb3BzLmFyaWFWYWx1ZVRleHRGb3JtYXR0ZXIsXG4gICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJ2ZXJ0aWNhbFwiLCBcInJldmVyc2VcIiwgXCJvZmZzZXRcIiwgXCJzdHlsZVwiLCBcImRpc2FibGVkXCIsIFwibWluXCIsIFwibWF4XCIsIFwidmFsdWVcIiwgXCJ0YWJJbmRleFwiLCBcImFyaWFMYWJlbFwiLCBcImFyaWFMYWJlbGxlZEJ5XCIsIFwiYXJpYVZhbHVlVGV4dEZvcm1hdHRlclwiXSk7XG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFuZGxlLWNsaWNrLWZvY3VzZWRcIiksIHRoaXMuc3RhdGUuY2xpY2tGb2N1c2VkKSk7XG4gICAgICB2YXIgcG9zaXRpb25TdHlsZSA9IHZlcnRpY2FsID8gKF9yZWYgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIHJldmVyc2UgPyAndG9wJyA6ICdib3R0b20nLCBcIlwiLmNvbmNhdChvZmZzZXQsIFwiJVwiKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCByZXZlcnNlID8gJ2JvdHRvbScgOiAndG9wJywgJ2F1dG8nKSwgX2RlZmluZVByb3BlcnR5KF9yZWYsIFwidHJhbnNmb3JtXCIsIHJldmVyc2UgPyBudWxsIDogXCJ0cmFuc2xhdGVZKCs1MCUpXCIpLCBfcmVmKSA6IChfcmVmMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIHJldmVyc2UgPyAncmlnaHQnIDogJ2xlZnQnLCBcIlwiLmNvbmNhdChvZmZzZXQsIFwiJVwiKSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcmV2ZXJzZSA/ICdsZWZ0JyA6ICdyaWdodCcsICdhdXRvJyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdChyZXZlcnNlID8gJysnIDogJy0nLCBcIjUwJSlcIikpLCBfcmVmMik7XG5cbiAgICAgIHZhciBlbFN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIHBvc2l0aW9uU3R5bGUpO1xuXG4gICAgICB2YXIgbWVyZ2VkVGFiSW5kZXggPSB0YWJJbmRleCB8fCAwO1xuXG4gICAgICBpZiAoZGlzYWJsZWQgfHwgdGFiSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgbWVyZ2VkVGFiSW5kZXggPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJpYVZhbHVlVGV4dDtcblxuICAgICAgaWYgKGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXIpIHtcbiAgICAgICAgYXJpYVZhbHVlVGV4dCA9IGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXIodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMuc2V0SGFuZGxlUmVmLFxuICAgICAgICB0YWJJbmRleDogbWVyZ2VkVGFiSW5kZXhcbiAgICAgIH0sIHJlc3RQcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IGVsU3R5bGUsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duIC8vIGFyaWEgYXR0cmlidXRlXG4gICAgICAgICxcbiAgICAgICAgcm9sZTogXCJzbGlkZXJcIixcbiAgICAgICAgXCJhcmlhLXZhbHVlbWluXCI6IG1pbixcbiAgICAgICAgXCJhcmlhLXZhbHVlbWF4XCI6IG1heCxcbiAgICAgICAgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlLFxuICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogISFkaXNhYmxlZCxcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkQnksXG4gICAgICAgIFwiYXJpYS12YWx1ZXRleHRcIjogYXJpYVZhbHVlVGV4dFxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIYW5kbGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCB7IEhhbmRsZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbW1vbi9UcmFjayc7XG5pbXBvcnQgY3JlYXRlU2xpZGVyIGZyb20gJy4vY29tbW9uL2NyZWF0ZVNsaWRlcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxudmFyIF90cmltQWxpZ25WYWx1ZSA9IGZ1bmN0aW9uIHRyaW1BbGlnblZhbHVlKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGhhbmRsZSA9IF9yZWYuaGFuZGxlLFxuICAgICAgYm91bmRzID0gX3JlZi5ib3VuZHMsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG4gIHZhciBhbGxvd0Nyb3NzID0gcHJvcHMuYWxsb3dDcm9zcyxcbiAgICAgIHB1c2hhYmxlID0gcHJvcHMucHVzaGFibGU7XG4gIHZhciB0aGVyc2hvbGQgPSBOdW1iZXIocHVzaGFibGUpO1xuICB2YXIgdmFsSW5SYW5nZSA9IHV0aWxzLmVuc3VyZVZhbHVlSW5SYW5nZSh2YWx1ZSwgcHJvcHMpO1xuICB2YXIgdmFsTm90Q29uZmxpY3QgPSB2YWxJblJhbmdlO1xuXG4gIGlmICghYWxsb3dDcm9zcyAmJiBoYW5kbGUgIT0gbnVsbCAmJiBib3VuZHMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChoYW5kbGUgPiAwICYmIHZhbEluUmFuZ2UgPD0gYm91bmRzW2hhbmRsZSAtIDFdICsgdGhlcnNob2xkKSB7XG4gICAgICB2YWxOb3RDb25mbGljdCA9IGJvdW5kc1toYW5kbGUgLSAxXSArIHRoZXJzaG9sZDtcbiAgICB9XG5cbiAgICBpZiAoaGFuZGxlIDwgYm91bmRzLmxlbmd0aCAtIDEgJiYgdmFsSW5SYW5nZSA+PSBib3VuZHNbaGFuZGxlICsgMV0gLSB0aGVyc2hvbGQpIHtcbiAgICAgIHZhbE5vdENvbmZsaWN0ID0gYm91bmRzW2hhbmRsZSArIDFdIC0gdGhlcnNob2xkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1dGlscy5lbnN1cmVWYWx1ZVByZWNpc2lvbih2YWxOb3RDb25mbGljdCwgcHJvcHMpO1xufTtcblxudmFyIFJhbmdlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSYW5nZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihSYW5nZSk7XG5cbiAgZnVuY3Rpb24gUmFuZ2UocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZ2UpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5wb3NpdGlvbkdldFZhbHVlID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICB2YXIgYm91bmRzID0gX3RoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuXG4gICAgICB2YXIgY2xvc2VzdEJvdW5kID0gX3RoaXMuZ2V0Q2xvc2VzdEJvdW5kKHZhbHVlKTtcblxuICAgICAgdmFyIGluZGV4ID0gX3RoaXMuZ2V0Qm91bmROZWVkTW92aW5nKHZhbHVlLCBjbG9zZXN0Qm91bmQpO1xuXG4gICAgICB2YXIgcHJldlZhbHVlID0gYm91bmRzW2luZGV4XTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gcHJldlZhbHVlKSByZXR1cm4gbnVsbDtcblxuICAgICAgdmFyIG5leHRCb3VuZHMgPSBfdG9Db25zdW1hYmxlQXJyYXkoYm91bmRzKTtcblxuICAgICAgbmV4dEJvdW5kc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBuZXh0Qm91bmRzO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkVuZCA9IGZ1bmN0aW9uIChmb3JjZSkge1xuICAgICAgdmFyIGhhbmRsZSA9IF90aGlzLnN0YXRlLmhhbmRsZTtcblxuICAgICAgX3RoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcblxuICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgX3RoaXMuZHJhZ1RyYWNrID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYW5kbGUgIT09IG51bGwgfHwgZm9yY2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25BZnRlckNoYW5nZShfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYW5kbGU6IG51bGxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY291bnQgPSBwcm9wcy5jb3VudCxcbiAgICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgICBtYXggPSBwcm9wcy5tYXg7XG4gICAgdmFyIGluaXRpYWxWYWx1ZSA9IEFycmF5LmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KEFycmF5KGNvdW50ICsgMSkpKS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1pbjtcbiAgICB9KTtcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gJ2RlZmF1bHRWYWx1ZScgaW4gcHJvcHMgPyBwcm9wcy5kZWZhdWx0VmFsdWUgOiBpbml0aWFsVmFsdWU7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlIDogZGVmYXVsdFZhbHVlO1xuICAgIHZhciBib3VuZHMgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIHJldHVybiBfdHJpbUFsaWduVmFsdWUoe1xuICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgaGFuZGxlOiBpLFxuICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciByZWNlbnQgPSBib3VuZHNbMF0gPT09IG1heCA/IDAgOiBib3VuZHMubGVuZ3RoIC0gMTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhbmRsZTogbnVsbCxcbiAgICAgIHJlY2VudDogcmVjZW50LFxuICAgICAgYm91bmRzOiBib3VuZHNcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogW0xlZ2FjeV0gVXNlZCBmb3IgaW5oZXJpdCBvdGhlciBjb21wb25lbnQuXG4gICAqIEl0J3MgYSBiYWQgY29kZSBzdHlsZSB3aGljaCBzaG91bGQgYmUgcmVmYWN0b3IuXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycywgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFJhbmdlLCBbe1xuICAgIGtleTogXCJjYWxjVmFsdWVCeVBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjVmFsdWVCeVBvcyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNsaWRlckxlbmd0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbGlkZXJMZW5ndGgoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FsY09mZnNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjT2Zmc2V0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2F2ZUhhbmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlSGFuZGxlKGluZGV4LCBoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZURvY3VtZW50RXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50RXZlbnRzKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWUsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHByb3BzLm1heDtcblxuICAgICAgaWYgKCEoJ21pbicgaW4gdGhpcy5wcm9wcyB8fCAnbWF4JyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtaW4gPT09IHByZXZQcm9wcy5taW4gJiYgbWF4ID09PSBwcmV2UHJvcHMubWF4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHZhbHVlIHx8IHByZXZTdGF0ZS5ib3VuZHM7XG5cbiAgICAgIGlmIChjdXJyZW50VmFsdWUuc29tZShmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdXRpbHMuaXNWYWx1ZU91dE9mUmFuZ2UodiwgX3RoaXMyLnByb3BzKTtcbiAgICAgIH0pKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZXMgPSBjdXJyZW50VmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHV0aWxzLmVuc3VyZVZhbHVlSW5SYW5nZSh2LCBfdGhpczIucHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25DaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgaXNOb3RDb250cm9sbGVkID0gISgndmFsdWUnIGluIHByb3BzKTtcblxuICAgICAgaWYgKGlzTm90Q29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjb250cm9sbGVkU3RhdGUgPSB7fTtcbiAgICAgICAgWydoYW5kbGUnLCAncmVjZW50J10uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChzdGF0ZVtpdGVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250cm9sbGVkU3RhdGVbaXRlbV0gPSBzdGF0ZVtpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjb250cm9sbGVkU3RhdGUpLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoY29udHJvbGxlZFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdGhpcy5zdGF0ZSksIHN0YXRlKTtcblxuICAgICAgdmFyIGNoYW5nZWRWYWx1ZSA9IGRhdGEuYm91bmRzO1xuICAgICAgcHJvcHMub25DaGFuZ2UoY2hhbmdlZFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25TdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvblN0YXJ0KHBvc2l0aW9uKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICBwcm9wcy5vbkJlZm9yZUNoYW5nZShib3VuZHMpO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgdmFyIGNsb3Nlc3RCb3VuZCA9IHRoaXMuZ2V0Q2xvc2VzdEJvdW5kKHZhbHVlKTtcbiAgICAgIHRoaXMucHJldk1vdmVkSGFuZGxlSW5kZXggPSB0aGlzLmdldEJvdW5kTmVlZE1vdmluZyh2YWx1ZSwgY2xvc2VzdEJvdW5kKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYW5kbGU6IHRoaXMucHJldk1vdmVkSGFuZGxlSW5kZXgsXG4gICAgICAgIHJlY2VudDogdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleFxuICAgICAgfSk7XG4gICAgICB2YXIgcHJldlZhbHVlID0gYm91bmRzW3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdO1xuICAgICAgaWYgKHZhbHVlID09PSBwcmV2VmFsdWUpIHJldHVybjtcblxuICAgICAgdmFyIG5leHRCb3VuZHMgPSBfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuYm91bmRzKTtcblxuICAgICAgbmV4dEJvdW5kc1t0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4XSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgIGJvdW5kczogbmV4dEJvdW5kc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdmUoZSwgcG9zaXRpb24sIGRyYWdUcmFjaywgc3RhcnRCb3VuZHMpIHtcbiAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBtYXhWYWx1ZSA9IHByb3BzLm1heCB8fCAxMDA7XG4gICAgICB2YXIgbWluVmFsdWUgPSBwcm9wcy5taW4gfHwgMDtcblxuICAgICAgaWYgKGRyYWdUcmFjaykge1xuICAgICAgICB2YXIgcG9zID0gcHJvcHMudmVydGljYWwgPyAtcG9zaXRpb24gOiBwb3NpdGlvbjtcbiAgICAgICAgcG9zID0gcHJvcHMucmV2ZXJzZSA/IC1wb3MgOiBwb3M7XG4gICAgICAgIHZhciBtYXggPSBtYXhWYWx1ZSAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIF90b0NvbnN1bWFibGVBcnJheShzdGFydEJvdW5kcykpO1xuICAgICAgICB2YXIgbWluID0gbWluVmFsdWUgLSBNYXRoLm1pbi5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoc3RhcnRCb3VuZHMpKTtcbiAgICAgICAgdmFyIHJhdGlvID0gTWF0aC5taW4oTWF0aC5tYXgocG9zIC8gKHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCkgLyAxMDApLCBtaW4pLCBtYXgpO1xuICAgICAgICB2YXIgbmV4dEJvdW5kcyA9IHN0YXJ0Qm91bmRzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgubWF4KE1hdGgubWluKHYgKyByYXRpbywgbWF4VmFsdWUpLCBtaW5WYWx1ZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3RhdGUuYm91bmRzLm1hcChmdW5jdGlvbiAoYywgaSkge1xuICAgICAgICAgIHJldHVybiBjID09PSBuZXh0Qm91bmRzW2ldO1xuICAgICAgICB9KS5zb21lKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuICFjO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgYm91bmRzOiBuZXh0Qm91bmRzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgdmFyIG9sZFZhbHVlID0gc3RhdGUuYm91bmRzW3N0YXRlLmhhbmRsZV07XG4gICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG4gICAgICB0aGlzLm1vdmVUbyh2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uS2V5Ym9hcmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlib2FyZChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHMyLnJldmVyc2UsXG4gICAgICAgICAgdmVydGljYWwgPSBfdGhpcyRwcm9wczIudmVydGljYWw7XG4gICAgICB2YXIgdmFsdWVNdXRhdG9yID0gdXRpbHMuZ2V0S2V5Ym9hcmRWYWx1ZU11dGF0b3IoZSwgdmVydGljYWwsIHJldmVyc2UpO1xuXG4gICAgICBpZiAodmFsdWVNdXRhdG9yKSB7XG4gICAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBib3VuZHMgPSBzdGF0ZS5ib3VuZHMsXG4gICAgICAgICAgICBoYW5kbGUgPSBzdGF0ZS5oYW5kbGU7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IGJvdW5kc1toYW5kbGUgPT09IG51bGwgPyBzdGF0ZS5yZWNlbnQgOiBoYW5kbGVdO1xuICAgICAgICB2YXIgbXV0YXRlZFZhbHVlID0gdmFsdWVNdXRhdG9yKG9sZFZhbHVlLCBwcm9wcyk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX3RyaW1BbGlnblZhbHVlKHtcbiAgICAgICAgICB2YWx1ZTogbXV0YXRlZFZhbHVlLFxuICAgICAgICAgIGhhbmRsZTogaGFuZGxlLFxuICAgICAgICAgIGJvdW5kczogc3RhdGUuYm91bmRzLFxuICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG4gICAgICAgIHZhciBpc0Zyb21LZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb3ZlVG8odmFsdWUsIGlzRnJvbUtleWJvYXJkRXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvdW5kcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q2xvc2VzdEJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsb3Nlc3RCb3VuZCh2YWx1ZSkge1xuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuc3RhdGUuYm91bmRzO1xuICAgICAgdmFyIGNsb3Nlc3RCb3VuZCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYm91bmRzLmxlbmd0aCAtIDE7IGkgKz0gMSkge1xuICAgICAgICBpZiAodmFsdWUgPj0gYm91bmRzW2ldKSB7XG4gICAgICAgICAgY2xvc2VzdEJvdW5kID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdIC0gdmFsdWUpIDwgTWF0aC5hYnMoYm91bmRzW2Nsb3Nlc3RCb3VuZF0gLSB2YWx1ZSkpIHtcbiAgICAgICAgY2xvc2VzdEJvdW5kICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9zZXN0Qm91bmQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJvdW5kTmVlZE1vdmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZE5lZWRNb3ZpbmcodmFsdWUsIGNsb3Nlc3RCb3VuZCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBib3VuZHMgPSBfdGhpcyRzdGF0ZS5ib3VuZHMsXG4gICAgICAgICAgcmVjZW50ID0gX3RoaXMkc3RhdGUucmVjZW50O1xuICAgICAgdmFyIGJvdW5kTmVlZE1vdmluZyA9IGNsb3Nlc3RCb3VuZDtcbiAgICAgIHZhciBpc0F0VGhlU2FtZVBvaW50ID0gYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdID09PSBib3VuZHNbY2xvc2VzdEJvdW5kXTtcblxuICAgICAgaWYgKGlzQXRUaGVTYW1lUG9pbnQgJiYgYm91bmRzW3JlY2VudF0gPT09IGJvdW5kc1tjbG9zZXN0Qm91bmRdKSB7XG4gICAgICAgIGJvdW5kTmVlZE1vdmluZyA9IHJlY2VudDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQXRUaGVTYW1lUG9pbnQgJiYgdmFsdWUgIT09IGJvdW5kc1tjbG9zZXN0Qm91bmQgKyAxXSkge1xuICAgICAgICBib3VuZE5lZWRNb3ZpbmcgPSB2YWx1ZSA8IGJvdW5kc1tjbG9zZXN0Qm91bmQgKyAxXSA/IGNsb3Nlc3RCb3VuZCA6IGNsb3Nlc3RCb3VuZCArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3VuZE5lZWRNb3Zpbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExvd2VyQm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG93ZXJCb3VuZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvdW5kc1swXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VXBwZXJCb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVcHBlckJvdW5kKCkge1xuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuc3RhdGUuYm91bmRzO1xuICAgICAgcmV0dXJuIGJvdW5kc1tib3VuZHMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcG9zc2libGUgc2xpZGVyIHBvaW50cywgdGFraW5nIGludG8gYWNjb3VudCBib3RoXG4gICAgICogYG1hcmtzYCBhbmQgYHN0ZXBgLiBUaGUgcmVzdWx0IGlzIGNhY2hlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFBvaW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb2ludHMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBtYXJrcyA9IF90aGlzJHByb3BzMy5tYXJrcyxcbiAgICAgICAgICBzdGVwID0gX3RoaXMkcHJvcHMzLnN0ZXAsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczMubWF4O1xuICAgICAgdmFyIGNhY2hlID0gdGhpcy5pbnRlcm5hbFBvaW50c0NhY2hlO1xuXG4gICAgICBpZiAoIWNhY2hlIHx8IGNhY2hlLm1hcmtzICE9PSBtYXJrcyB8fCBjYWNoZS5zdGVwICE9PSBzdGVwKSB7XG4gICAgICAgIHZhciBwb2ludHNPYmplY3QgPSBfb2JqZWN0U3ByZWFkKHt9LCBtYXJrcyk7XG5cbiAgICAgICAgaWYgKHN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgICBmb3IgKHZhciBwb2ludCA9IG1pbjsgcG9pbnQgPD0gbWF4OyBwb2ludCArPSBzdGVwKSB7XG4gICAgICAgICAgICBwb2ludHNPYmplY3RbcG9pbnRdID0gcG9pbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50cyA9IE9iamVjdC5rZXlzKHBvaW50c09iamVjdCkubWFwKHBhcnNlRmxvYXQpO1xuICAgICAgICBwb2ludHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxQb2ludHNDYWNoZSA9IHtcbiAgICAgICAgICBtYXJrczogbWFya3MsXG4gICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICBwb2ludHM6IHBvaW50c1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFBvaW50c0NhY2hlLnBvaW50cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibW92ZVRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVUbyh2YWx1ZSwgaXNGcm9tS2V5Ym9hcmRFdmVudCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICB2YXIgbmV4dEJvdW5kcyA9IF90b0NvbnN1bWFibGVBcnJheShzdGF0ZS5ib3VuZHMpO1xuXG4gICAgICB2YXIgaGFuZGxlID0gc3RhdGUuaGFuZGxlID09PSBudWxsID8gc3RhdGUucmVjZW50IDogc3RhdGUuaGFuZGxlO1xuICAgICAgbmV4dEJvdW5kc1toYW5kbGVdID0gdmFsdWU7XG4gICAgICB2YXIgbmV4dEhhbmRsZSA9IGhhbmRsZTtcblxuICAgICAgaWYgKHByb3BzLnB1c2hhYmxlICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnB1c2hTdXJyb3VuZGluZ0hhbmRsZXMobmV4dEJvdW5kcywgbmV4dEhhbmRsZSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLmFsbG93Q3Jvc3MpIHtcbiAgICAgICAgbmV4dEJvdW5kcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV4dEhhbmRsZSA9IG5leHRCb3VuZHMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICByZWNlbnQ6IG5leHRIYW5kbGUsXG4gICAgICAgIGhhbmRsZTogbmV4dEhhbmRsZSxcbiAgICAgICAgYm91bmRzOiBuZXh0Qm91bmRzXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzRnJvbUtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8ga25vd24gcHJvYmxlbTogYmVjYXVzZSBzZXRTdGF0ZSBpcyBhc3luYyxcbiAgICAgICAgLy8gc28gdHJpZ2dlciBmb2N1cyB3aWxsIGludm9rZSBoYW5kbGVyJ3Mgb25FbmQgYW5kIGFub3RoZXIgaGFuZGxlcidzIG9uU3RhcnQgdG9vIGVhcmx5LFxuICAgICAgICAvLyBjYXVzZSBvbkJlZm9yZUNoYW5nZSBhbmQgb25BZnRlckNoYW5nZSByZWNlaXZlIHdyb25nIHZhbHVlLlxuICAgICAgICAvLyBoZXJlIHVzZSBzZXRTdGF0ZSBjYWxsYmFjayB0byBoYWNr77yMYnV0IG5vdCBlbGVnYW50XG4gICAgICAgIHRoaXMucHJvcHMub25BZnRlckNoYW5nZShuZXh0Qm91bmRzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5oYW5kbGVzUmVmc1tuZXh0SGFuZGxlXS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbkVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwdXNoU3Vycm91bmRpbmdIYW5kbGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hTdXJyb3VuZGluZ0hhbmRsZXMoYm91bmRzLCBoYW5kbGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgdmFyIHB1c2hhYmxlID0gdGhpcy5wcm9wcy5wdXNoYWJsZTtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSBOdW1iZXIocHVzaGFibGUpO1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IDA7XG5cbiAgICAgIGlmIChib3VuZHNbaGFuZGxlICsgMV0gLSB2YWx1ZSA8IHRocmVzaG9sZCkge1xuICAgICAgICBkaXJlY3Rpb24gPSArMTsgLy8gcHVzaCB0byByaWdodFxuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgLSBib3VuZHNbaGFuZGxlIC0gMV0gPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gLTE7IC8vIHB1c2ggdG8gbGVmdFxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRIYW5kbGUgPSBoYW5kbGUgKyBkaXJlY3Rpb247XG4gICAgICB2YXIgZGlmZlRvTmV4dCA9IGRpcmVjdGlvbiAqIChib3VuZHNbbmV4dEhhbmRsZV0gLSB2YWx1ZSk7XG5cbiAgICAgIGlmICghdGhpcy5wdXNoSGFuZGxlKGJvdW5kcywgbmV4dEhhbmRsZSwgZGlyZWN0aW9uLCB0aHJlc2hvbGQgLSBkaWZmVG9OZXh0KSkge1xuICAgICAgICAvLyByZXZlcnQgdG8gb3JpZ2luYWwgdmFsdWUgaWYgcHVzaGluZyBpcyBpbXBvc3NpYmxlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBib3VuZHNbaGFuZGxlXSA9IGJvdW5kc1tuZXh0SGFuZGxlXSAtIGRpcmVjdGlvbiAqIHRocmVzaG9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaEhhbmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoSGFuZGxlKGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24sIGFtb3VudCkge1xuICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcbiAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcblxuICAgICAgd2hpbGUgKGRpcmVjdGlvbiAqIChjdXJyZW50VmFsdWUgLSBvcmlnaW5hbFZhbHVlKSA8IGFtb3VudCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZU9uZVBvaW50KGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgLy8gY2FuJ3QgcHVzaCBoYW5kbGUgZW5vdWdoIHRvIGNyZWF0ZSB0aGUgbmVlZGVkIGBhbW91bnRgIGdhcCwgc28gd2VcbiAgICAgICAgICAvLyByZXZlcnQgaXRzIHBvc2l0aW9uIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGJvdW5kc1toYW5kbGVdID0gb3JpZ2luYWxWYWx1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcbiAgICAgIH0gLy8gdGhlIGhhbmRsZSB3YXMgcHVzaGVkIGVub3VnaCB0byBjcmVhdGUgdGhlIG5lZWRlZCBgYW1vdW50YCBnYXBcblxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHVzaEhhbmRsZU9uZVBvaW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hIYW5kbGVPbmVQb2ludChib3VuZHMsIGhhbmRsZSwgZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKTtcbiAgICAgIHZhciBwb2ludEluZGV4ID0gcG9pbnRzLmluZGV4T2YoYm91bmRzW2hhbmRsZV0pO1xuICAgICAgdmFyIG5leHRQb2ludEluZGV4ID0gcG9pbnRJbmRleCArIGRpcmVjdGlvbjtcblxuICAgICAgaWYgKG5leHRQb2ludEluZGV4ID49IHBvaW50cy5sZW5ndGggfHwgbmV4dFBvaW50SW5kZXggPCAwKSB7XG4gICAgICAgIC8vIHJlYWNoZWQgdGhlIG1pbmltdW0gb3IgbWF4aW11bSBhdmFpbGFibGUgcG9pbnQsIGNhbid0IHB1c2ggYW55bW9yZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0SGFuZGxlID0gaGFuZGxlICsgZGlyZWN0aW9uO1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IHBvaW50c1tuZXh0UG9pbnRJbmRleF07XG4gICAgICB2YXIgcHVzaGFibGUgPSB0aGlzLnByb3BzLnB1c2hhYmxlO1xuICAgICAgdmFyIHRocmVzaG9sZCA9IE51bWJlcihwdXNoYWJsZSk7XG4gICAgICB2YXIgZGlmZlRvTmV4dCA9IGRpcmVjdGlvbiAqIChib3VuZHNbbmV4dEhhbmRsZV0gLSBuZXh0VmFsdWUpO1xuXG4gICAgICBpZiAoIXRoaXMucHVzaEhhbmRsZShib3VuZHMsIG5leHRIYW5kbGUsIGRpcmVjdGlvbiwgdGhyZXNob2xkIC0gZGlmZlRvTmV4dCkpIHtcbiAgICAgICAgLy8gY291bGRuJ3QgcHVzaCBuZXh0IGhhbmRsZSwgc28gd2Ugd29uJ3QgcHVzaCB0aGlzIG9uZSBlaXRoZXJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBwdXNoIHRoZSBoYW5kbGVcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgICAgIGJvdW5kc1toYW5kbGVdID0gbmV4dFZhbHVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyaW1BbGlnblZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaW1BbGlnblZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBoYW5kbGUgPSBfdGhpcyRzdGF0ZTIuaGFuZGxlLFxuICAgICAgICAgIGJvdW5kcyA9IF90aGlzJHN0YXRlMi5ib3VuZHM7XG4gICAgICByZXR1cm4gX3RyaW1BbGlnblZhbHVlKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBoYW5kbGU6IGhhbmRsZSxcbiAgICAgICAgYm91bmRzOiBib3VuZHMsXG4gICAgICAgIHByb3BzOiB0aGlzLnByb3BzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBoYW5kbGUgPSBfdGhpcyRzdGF0ZTMuaGFuZGxlLFxuICAgICAgICAgIGJvdW5kcyA9IF90aGlzJHN0YXRlMy5ib3VuZHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczQucHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHM0LnZlcnRpY2FsLFxuICAgICAgICAgIGluY2x1ZGVkID0gX3RoaXMkcHJvcHM0LmluY2x1ZGVkLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHM0LmRpc2FibGVkLFxuICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzNC5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHM0Lm1heCxcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHM0LnJldmVyc2UsXG4gICAgICAgICAgaGFuZGxlR2VuZXJhdG9yID0gX3RoaXMkcHJvcHM0LmhhbmRsZSxcbiAgICAgICAgICB0cmFja1N0eWxlID0gX3RoaXMkcHJvcHM0LnRyYWNrU3R5bGUsXG4gICAgICAgICAgaGFuZGxlU3R5bGUgPSBfdGhpcyRwcm9wczQuaGFuZGxlU3R5bGUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczQudGFiSW5kZXgsXG4gICAgICAgICAgYXJpYUxhYmVsR3JvdXBGb3JIYW5kbGVzID0gX3RoaXMkcHJvcHM0LmFyaWFMYWJlbEdyb3VwRm9ySGFuZGxlcyxcbiAgICAgICAgICBhcmlhTGFiZWxsZWRCeUdyb3VwRm9ySGFuZGxlcyA9IF90aGlzJHByb3BzNC5hcmlhTGFiZWxsZWRCeUdyb3VwRm9ySGFuZGxlcyxcbiAgICAgICAgICBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyR3JvdXBGb3JIYW5kbGVzID0gX3RoaXMkcHJvcHM0LmFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJHcm91cEZvckhhbmRsZXM7XG4gICAgICB2YXIgb2Zmc2V0cyA9IGJvdW5kcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5jYWxjT2Zmc2V0KHYpO1xuICAgICAgfSk7XG4gICAgICB2YXIgaGFuZGxlQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYW5kbGVcIik7XG4gICAgICB2YXIgaGFuZGxlcyA9IGJvdW5kcy5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBtZXJnZWRUYWJJbmRleCA9IHRhYkluZGV4W2ldIHx8IDA7XG5cbiAgICAgICAgaWYgKGRpc2FibGVkIHx8IHRhYkluZGV4W2ldID09PSBudWxsKSB7XG4gICAgICAgICAgbWVyZ2VkVGFiSW5kZXggPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYWdnaW5nID0gaGFuZGxlID09PSBpO1xuICAgICAgICByZXR1cm4gaGFuZGxlR2VuZXJhdG9yKHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgaGFuZGxlQ2xhc3NOYW1lLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChoYW5kbGVDbGFzc05hbWUsIFwiLVwiKS5jb25jYXQoaSArIDEpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChoYW5kbGVDbGFzc05hbWUsIFwiLWRyYWdnaW5nXCIpLCBkcmFnZ2luZyksIF9jbGFzc05hbWVzKSksXG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgIGRyYWdnaW5nOiBkcmFnZ2luZyxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldHNbaV0sXG4gICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgdGFiSW5kZXg6IG1lcmdlZFRhYkluZGV4LFxuICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgIHJldmVyc2U6IHJldmVyc2UsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIHN0eWxlOiBoYW5kbGVTdHlsZVtpXSxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM0LnNhdmVIYW5kbGUoaSwgaCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmlhTGFiZWw6IGFyaWFMYWJlbEdyb3VwRm9ySGFuZGxlc1tpXSxcbiAgICAgICAgICBhcmlhTGFiZWxsZWRCeTogYXJpYUxhYmVsbGVkQnlHcm91cEZvckhhbmRsZXNbaV0sXG4gICAgICAgICAgYXJpYVZhbHVlVGV4dEZvcm1hdHRlcjogYXJpYVZhbHVlVGV4dEZvcm1hdHRlckdyb3VwRm9ySGFuZGxlc1tpXVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHRyYWNrcyA9IGJvdW5kcy5zbGljZSgwLCAtMSkubWFwKGZ1bmN0aW9uIChfLCBpbmRleCkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gICAgICAgIHZhciBpID0gaW5kZXggKyAxO1xuICAgICAgICB2YXIgdHJhY2tDbGFzc05hbWUgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmFja1wiKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHJhY2stXCIpLmNvbmNhdChpKSwgdHJ1ZSksIF9jbGFzc05hbWVzMikpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhY2ssIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRyYWNrQ2xhc3NOYW1lLFxuICAgICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgICByZXZlcnNlOiByZXZlcnNlLFxuICAgICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldHNbaSAtIDFdLFxuICAgICAgICAgIGxlbmd0aDogb2Zmc2V0c1tpXSAtIG9mZnNldHNbaSAtIDFdLFxuICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlW2luZGV4XSxcbiAgICAgICAgICBrZXk6IGlcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWNrczogdHJhY2tzLFxuICAgICAgICBoYW5kbGVzOiBoYW5kbGVzXG4gICAgICB9O1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICBpZiAoISgndmFsdWUnIGluIHByb3BzIHx8ICdtaW4nIGluIHByb3BzIHx8ICdtYXgnIGluIHByb3BzKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUgfHwgc3RhdGUuYm91bmRzO1xuICAgICAgdmFyIG5leHRCb3VuZHMgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgcmV0dXJuIF90cmltQWxpZ25WYWx1ZSh7XG4gICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgaGFuZGxlOiBpLFxuICAgICAgICAgIGJvdW5kczogc3RhdGUuYm91bmRzLFxuICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3RhdGUuYm91bmRzLmxlbmd0aCA9PT0gbmV4dEJvdW5kcy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG5leHRCb3VuZHMuZXZlcnkoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgICByZXR1cm4gdiA9PT0gc3RhdGUuYm91bmRzW2ldO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0Qm91bmRzID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF90cmltQWxpZ25WYWx1ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICAgIGhhbmRsZTogaSxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgICBib3VuZHM6IG5leHRCb3VuZHNcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSYW5nZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxuXG5SYW5nZS5kaXNwbGF5TmFtZSA9ICdSYW5nZSc7XG5SYW5nZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvdW50OiAxLFxuICBhbGxvd0Nyb3NzOiB0cnVlLFxuICBwdXNoYWJsZTogZmFsc2UsXG4gIGRyYWdnYWJsZVRyYWNrOiBmYWxzZSxcbiAgdGFiSW5kZXg6IFtdLFxuICBhcmlhTGFiZWxHcm91cEZvckhhbmRsZXM6IFtdLFxuICBhcmlhTGFiZWxsZWRCeUdyb3VwRm9ySGFuZGxlczogW10sXG4gIGFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJHcm91cEZvckhhbmRsZXM6IFtdXG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyKFJhbmdlKTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21tb24vVHJhY2snO1xuaW1wb3J0IGNyZWF0ZVNsaWRlciBmcm9tICcuL2NvbW1vbi9jcmVhdGVTbGlkZXInO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbnZhciBTbGlkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNsaWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTbGlkZXIpO1xuXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgZnVuY3Rpb24gU2xpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNsaWRlcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLnBvc2l0aW9uR2V0VmFsdWUgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25FbmQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgICAgIHZhciBkcmFnZ2luZyA9IF90aGlzLnN0YXRlLmRyYWdnaW5nO1xuXG4gICAgICBfdGhpcy5yZW1vdmVEb2N1bWVudEV2ZW50cygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcgfHwgZm9yY2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25BZnRlckNoYW5nZShfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wcy5kZWZhdWx0VmFsdWUgOiBwcm9wcy5taW47XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzLnZhbHVlIDogZGVmYXVsdFZhbHVlO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IF90aGlzLnRyaW1BbGlnblZhbHVlKHZhbHVlKSxcbiAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgIH07XG4gICAgd2FybmluZyghKCdtaW5pbXVtVHJhY2tTdHlsZScgaW4gcHJvcHMpLCAnbWluaW11bVRyYWNrU3R5bGUgd2lsbCBiZSBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIHRyYWNrU3R5bGUgaW5zdGVhZC4nKTtcbiAgICB3YXJuaW5nKCEoJ21heGltdW1UcmFja1N0eWxlJyBpbiBwcm9wcyksICdtYXhpbXVtVHJhY2tTdHlsZSB3aWxsIGJlIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgcmFpbFN0eWxlIGluc3RlYWQuJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiBbTGVnYWN5XSBVc2VkIGZvciBpbmhlcml0IG90aGVyIGNvbXBvbmVudC5cbiAgICogSXQncyBhIGJhZCBjb2RlIHN0eWxlIHdoaWNoIHNob3VsZCBiZSByZWZhY3Rvci5cbiAgICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzLCBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU2xpZGVyLCBbe1xuICAgIGtleTogXCJjYWxjVmFsdWVCeVBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjVmFsdWVCeVBvcyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbGNPZmZzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY09mZnNldCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNhdmVIYW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZUhhbmRsZShpbmRleCwgaCkge31cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVEb2N1bWVudEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudEV2ZW50cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRwcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3RoaXMkcHJvcHMubWF4LFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWUsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZTtcblxuICAgICAgaWYgKCEoJ21pbicgaW4gdGhpcy5wcm9wcyB8fCAnbWF4JyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0aGVWYWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHByZXZTdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSB0aGlzLnRyaW1BbGlnblZhbHVlKHRoZVZhbHVlLCB0aGlzLnByb3BzKTtcblxuICAgICAgaWYgKG5leHRWYWx1ZSA9PT0gcHJldlN0YXRlLnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiBuZXh0VmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIShtaW4gPT09IHByZXZQcm9wcy5taW4gJiYgbWF4ID09PSBwcmV2UHJvcHMubWF4KSAmJiB1dGlscy5pc1ZhbHVlT3V0T2ZSYW5nZSh0aGVWYWx1ZSwgdGhpcy5wcm9wcykpIHtcbiAgICAgICAgb25DaGFuZ2UobmV4dFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25DaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgaXNOb3RDb250cm9sbGVkID0gISgndmFsdWUnIGluIHByb3BzKTtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSBzdGF0ZS52YWx1ZSA+IHRoaXMucHJvcHMubWF4ID8gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSksIHt9LCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLm1heFxuICAgICAgfSkgOiBzdGF0ZTtcblxuICAgICAgaWYgKGlzTm90Q29udHJvbGxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGFuZ2VkVmFsdWUgPSBuZXh0U3RhdGUudmFsdWU7XG4gICAgICBwcm9wcy5vbkNoYW5nZShjaGFuZ2VkVmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvblN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RhcnQocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHByZXZWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIHByb3BzLm9uQmVmb3JlQ2hhbmdlKHByZXZWYWx1ZSk7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBpZiAodmFsdWUgPT09IHByZXZWYWx1ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleCA9IDA7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25Nb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW92ZShlLCBwb3NpdGlvbikge1xuICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcbiAgICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbktleWJvYXJkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5Ym9hcmQoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzMi5yZXZlcnNlLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHMyLnZlcnRpY2FsO1xuICAgICAgdmFyIHZhbHVlTXV0YXRvciA9IHV0aWxzLmdldEtleWJvYXJkVmFsdWVNdXRhdG9yKGUsIHZlcnRpY2FsLCByZXZlcnNlKTtcblxuICAgICAgaWYgKHZhbHVlTXV0YXRvcikge1xuICAgICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICAgICAgdmFyIG11dGF0ZWRWYWx1ZSA9IHZhbHVlTXV0YXRvcihvbGRWYWx1ZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudHJpbUFsaWduVmFsdWUobXV0YXRlZFZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBvbGRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25BZnRlckNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMub25FbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG93ZXJCb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb3dlckJvdW5kKCkge1xuICAgICAgdmFyIG1pblBvaW50ID0gdGhpcy5wcm9wcy5zdGFydFBvaW50IHx8IHRoaXMucHJvcHMubWluO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWUgPiBtaW5Qb2ludCA/IG1pblBvaW50IDogdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VXBwZXJCb3VuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVcHBlckJvdW5kKCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPCB0aGlzLnByb3BzLnN0YXJ0UG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc3RhcnRQb2ludDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyaW1BbGlnblZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaW1BbGlnblZhbHVlKHYpIHtcbiAgICAgIHZhciBuZXh0UHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1lcmdlZFByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0aGlzLnByb3BzKSwgbmV4dFByb3BzKTtcblxuICAgICAgdmFyIHZhbCA9IHV0aWxzLmVuc3VyZVZhbHVlSW5SYW5nZSh2LCBtZXJnZWRQcm9wcyk7XG4gICAgICByZXR1cm4gdXRpbHMuZW5zdXJlVmFsdWVQcmVjaXNpb24odmFsLCBtZXJnZWRQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMzLnByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzMy52ZXJ0aWNhbCxcbiAgICAgICAgICBpbmNsdWRlZCA9IF90aGlzJHByb3BzMy5pbmNsdWRlZCxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBtaW5pbXVtVHJhY2tTdHlsZSA9IF90aGlzJHByb3BzMy5taW5pbXVtVHJhY2tTdHlsZSxcbiAgICAgICAgICB0cmFja1N0eWxlID0gX3RoaXMkcHJvcHMzLnRyYWNrU3R5bGUsXG4gICAgICAgICAgaGFuZGxlU3R5bGUgPSBfdGhpcyRwcm9wczMuaGFuZGxlU3R5bGUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczMudGFiSW5kZXgsXG4gICAgICAgICAgYXJpYUxhYmVsRm9ySGFuZGxlID0gX3RoaXMkcHJvcHMzLmFyaWFMYWJlbEZvckhhbmRsZSxcbiAgICAgICAgICBhcmlhTGFiZWxsZWRCeUZvckhhbmRsZSA9IF90aGlzJHByb3BzMy5hcmlhTGFiZWxsZWRCeUZvckhhbmRsZSxcbiAgICAgICAgICBhcmlhVmFsdWVUZXh0Rm9ybWF0dGVyRm9ySGFuZGxlID0gX3RoaXMkcHJvcHMzLmFyaWFWYWx1ZVRleHRGb3JtYXR0ZXJGb3JIYW5kbGUsXG4gICAgICAgICAgbWluID0gX3RoaXMkcHJvcHMzLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczMubWF4LFxuICAgICAgICAgIHN0YXJ0UG9pbnQgPSBfdGhpcyRwcm9wczMuc3RhcnRQb2ludCxcbiAgICAgICAgICByZXZlcnNlID0gX3RoaXMkcHJvcHMzLnJldmVyc2UsXG4gICAgICAgICAgaGFuZGxlR2VuZXJhdG9yID0gX3RoaXMkcHJvcHMzLmhhbmRsZTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZS52YWx1ZSxcbiAgICAgICAgICBkcmFnZ2luZyA9IF90aGlzJHN0YXRlLmRyYWdnaW5nO1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMuY2FsY09mZnNldCh2YWx1ZSk7XG4gICAgICB2YXIgaGFuZGxlID0gaGFuZGxlR2VuZXJhdG9yKHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhhbmRsZVwiKSxcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZHJhZ2dpbmc6IGRyYWdnaW5nLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG1pbjogbWluLFxuICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgICAgYXJpYUxhYmVsOiBhcmlhTGFiZWxGb3JIYW5kbGUsXG4gICAgICAgIGFyaWFMYWJlbGxlZEJ5OiBhcmlhTGFiZWxsZWRCeUZvckhhbmRsZSxcbiAgICAgICAgYXJpYVZhbHVlVGV4dEZvcm1hdHRlcjogYXJpYVZhbHVlVGV4dEZvcm1hdHRlckZvckhhbmRsZSxcbiAgICAgICAgc3R5bGU6IGhhbmRsZVN0eWxlWzBdIHx8IGhhbmRsZVN0eWxlLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5zYXZlSGFuZGxlKDAsIGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciB0cmFja09mZnNldCA9IHN0YXJ0UG9pbnQgIT09IHVuZGVmaW5lZCA/IHRoaXMuY2FsY09mZnNldChzdGFydFBvaW50KSA6IDA7XG4gICAgICB2YXIgbWVyZ2VkVHJhY2tTdHlsZSA9IHRyYWNrU3R5bGVbMF0gfHwgdHJhY2tTdHlsZTtcbiAgICAgIHZhciB0cmFjayA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYWNrLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmFja1wiKSxcbiAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICBpbmNsdWRlZDogaW5jbHVkZWQsXG4gICAgICAgIG9mZnNldDogdHJhY2tPZmZzZXQsXG4gICAgICAgIHJldmVyc2U6IHJldmVyc2UsXG4gICAgICAgIGxlbmd0aDogb2Zmc2V0IC0gdHJhY2tPZmZzZXQsXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1pbmltdW1UcmFja1N0eWxlKSwgbWVyZ2VkVHJhY2tTdHlsZSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhY2tzOiB0cmFjayxcbiAgICAgICAgaGFuZGxlczogaGFuZGxlXG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTbGlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNsaWRlcihTbGlkZXIpOyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgTWFya3MgPSBmdW5jdGlvbiBNYXJrcyhfcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHZlcnRpY2FsID0gX3JlZi52ZXJ0aWNhbCxcbiAgICAgIHJldmVyc2UgPSBfcmVmLnJldmVyc2UsXG4gICAgICBtYXJrcyA9IF9yZWYubWFya3MsXG4gICAgICBpbmNsdWRlZCA9IF9yZWYuaW5jbHVkZWQsXG4gICAgICB1cHBlckJvdW5kID0gX3JlZi51cHBlckJvdW5kLFxuICAgICAgbG93ZXJCb3VuZCA9IF9yZWYubG93ZXJCb3VuZCxcbiAgICAgIG1heCA9IF9yZWYubWF4LFxuICAgICAgbWluID0gX3JlZi5taW4sXG4gICAgICBvbkNsaWNrTGFiZWwgPSBfcmVmLm9uQ2xpY2tMYWJlbDtcbiAgdmFyIG1hcmtzS2V5cyA9IE9iamVjdC5rZXlzKG1hcmtzKTtcbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICB2YXIgZWxlbWVudHMgPSBtYXJrc0tleXMubWFwKHBhcnNlRmxvYXQpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgbWFya1BvaW50ID0gbWFya3NbcG9pbnRdO1xuICAgIHZhciBtYXJrUG9pbnRJc09iamVjdCA9IF90eXBlb2YobWFya1BvaW50KSA9PT0gJ29iamVjdCcgJiYgISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobWFya1BvaW50KTtcbiAgICB2YXIgbWFya0xhYmVsID0gbWFya1BvaW50SXNPYmplY3QgPyBtYXJrUG9pbnQubGFiZWwgOiBtYXJrUG9pbnQ7XG5cbiAgICBpZiAoIW1hcmtMYWJlbCAmJiBtYXJrTGFiZWwgIT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBpc0FjdGl2ZSA9ICFpbmNsdWRlZCAmJiBwb2ludCA9PT0gdXBwZXJCb3VuZCB8fCBpbmNsdWRlZCAmJiBwb2ludCA8PSB1cHBlckJvdW5kICYmIHBvaW50ID49IGxvd2VyQm91bmQ7XG4gICAgdmFyIG1hcmtDbGFzc05hbWUgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCItdGV4dFwiKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoY2xhc3NOYW1lLCBcIi10ZXh0LWFjdGl2ZVwiKSwgaXNBY3RpdmUpLCBfY2xhc3NOYW1lcykpO1xuXG4gICAgdmFyIGJvdHRvbVN0eWxlID0gX2RlZmluZVByb3BlcnR5KHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJy01MCUnXG4gICAgfSwgcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbScsIFwiXCIuY29uY2F0KChwb2ludCAtIG1pbikgLyByYW5nZSAqIDEwMCwgXCIlXCIpKTtcblxuICAgIHZhciBsZWZ0U3R5bGUgPSBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHJldmVyc2UgPyBcIjUwJVwiIDogXCItNTAlXCIsIFwiKVwiKSxcbiAgICAgIG1zVHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHJldmVyc2UgPyBcIjUwJVwiIDogXCItNTAlXCIsIFwiKVwiKVxuICAgIH0sIHJldmVyc2UgPyAncmlnaHQnIDogJ2xlZnQnLCBcIlwiLmNvbmNhdCgocG9pbnQgLSBtaW4pIC8gcmFuZ2UgKiAxMDAsIFwiJVwiKSk7XG5cbiAgICB2YXIgc3R5bGUgPSB2ZXJ0aWNhbCA/IGJvdHRvbVN0eWxlIDogbGVmdFN0eWxlO1xuICAgIHZhciBtYXJrU3R5bGUgPSBtYXJrUG9pbnRJc09iamVjdCA/IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3R5bGUpLCBtYXJrUG9pbnQuc3R5bGUpIDogc3R5bGU7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IG1hcmtDbGFzc05hbWUsXG4gICAgICBzdHlsZTogbWFya1N0eWxlLFxuICAgICAga2V5OiBwb2ludCxcbiAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIHJldHVybiBvbkNsaWNrTGFiZWwoZSwgcG9pbnQpO1xuICAgICAgfSxcbiAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgcmV0dXJuIG9uQ2xpY2tMYWJlbChlLCBwb2ludCk7XG4gICAgICB9XG4gICAgfSwgbWFya0xhYmVsKTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSwgZWxlbWVudHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya3M7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyYy10b29sdGlwJztcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG52YXIgU2xpZGVyVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5O1xuICB2YXIgaW5uZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciB0b29sdGlwUmVmID0gY29tcG9zZVJlZihyZWYsIGlubmVyUmVmKTtcbiAgdmFyIHJhZlJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiBjYW5jZWxLZWVwQWxpZ24oKSB7XG4gICAgcmFmLmNhbmNlbChyYWZSZWYuY3VycmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBrZWVwQWxpZ24oKSB7XG4gICAgcmFmUmVmLmN1cnJlbnQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9pbm5lclJlZiRjdXJyZW50O1xuXG4gICAgICAoX2lubmVyUmVmJGN1cnJlbnQgPSBpbm5lclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5uZXJSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2lubmVyUmVmJGN1cnJlbnQuZm9yY2VQb3B1cEFsaWduKCk7XG4gICAgfSk7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICBrZWVwQWxpZ24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuY2VsS2VlcEFsaWduKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbmNlbEtlZXBBbGlnbjtcbiAgfSwgW3Zpc2libGUsIG92ZXJsYXldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIF9leHRlbmRzKHtcbiAgICByZWY6IHRvb2x0aXBSZWZcbiAgfSwgcHJvcHMpKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgU2xpZGVyVG9vbHRpcDsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcblxudmFyIGNhbGNQb2ludHMgPSBmdW5jdGlvbiBjYWxjUG9pbnRzKHZlcnRpY2FsLCBtYXJrcywgZG90cywgc3RlcCwgbWluLCBtYXgpIHtcbiAgd2FybmluZyhkb3RzID8gc3RlcCA+IDAgOiB0cnVlLCAnYFNsaWRlcltzdGVwXWAgc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyIGluIG9yZGVyIHRvIG1ha2UgU2xpZGVyW2RvdHNdIHdvcmsuJyk7XG4gIHZhciBwb2ludHMgPSBPYmplY3Qua2V5cyhtYXJrcykubWFwKHBhcnNlRmxvYXQpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGlmIChkb3RzICYmIHN0ZXApIHtcbiAgICBmb3IgKHZhciBpID0gbWluOyBpIDw9IG1heDsgaSArPSBzdGVwKSB7XG4gICAgICBpZiAocG9pbnRzLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59O1xuXG52YXIgU3RlcHMgPSBmdW5jdGlvbiBTdGVwcyhfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIHZlcnRpY2FsID0gX3JlZi52ZXJ0aWNhbCxcbiAgICAgIHJldmVyc2UgPSBfcmVmLnJldmVyc2UsXG4gICAgICBtYXJrcyA9IF9yZWYubWFya3MsXG4gICAgICBkb3RzID0gX3JlZi5kb3RzLFxuICAgICAgc3RlcCA9IF9yZWYuc3RlcCxcbiAgICAgIGluY2x1ZGVkID0gX3JlZi5pbmNsdWRlZCxcbiAgICAgIGxvd2VyQm91bmQgPSBfcmVmLmxvd2VyQm91bmQsXG4gICAgICB1cHBlckJvdW5kID0gX3JlZi51cHBlckJvdW5kLFxuICAgICAgbWF4ID0gX3JlZi5tYXgsXG4gICAgICBtaW4gPSBfcmVmLm1pbixcbiAgICAgIGRvdFN0eWxlID0gX3JlZi5kb3RTdHlsZSxcbiAgICAgIGFjdGl2ZURvdFN0eWxlID0gX3JlZi5hY3RpdmVEb3RTdHlsZTtcbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICB2YXIgZWxlbWVudHMgPSBjYWxjUG9pbnRzKHZlcnRpY2FsLCBtYXJrcywgZG90cywgc3RlcCwgbWluLCBtYXgpLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgb2Zmc2V0ID0gXCJcIi5jb25jYXQoTWF0aC5hYnMocG9pbnQgLSBtaW4pIC8gcmFuZ2UgKiAxMDAsIFwiJVwiKTtcbiAgICB2YXIgaXNBY3RpdmVkID0gIWluY2x1ZGVkICYmIHBvaW50ID09PSB1cHBlckJvdW5kIHx8IGluY2x1ZGVkICYmIHBvaW50IDw9IHVwcGVyQm91bmQgJiYgcG9pbnQgPj0gbG93ZXJCb3VuZDtcbiAgICB2YXIgc3R5bGUgPSB2ZXJ0aWNhbCA/IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZG90U3R5bGUpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCByZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJywgb2Zmc2V0KSkgOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRvdFN0eWxlKSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcmV2ZXJzZSA/ICdyaWdodCcgOiAnbGVmdCcsIG9mZnNldCkpO1xuXG4gICAgaWYgKGlzQWN0aXZlZCkge1xuICAgICAgc3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKSwgYWN0aXZlRG90U3R5bGUpO1xuICAgIH1cblxuICAgIHZhciBwb2ludENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3RcIiksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90LWFjdGl2ZVwiKSwgaXNBY3RpdmVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1yZXZlcnNlXCIpLCByZXZlcnNlKSwgX2NsYXNzTmFtZXMpKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogcG9pbnRDbGFzc05hbWUsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBrZXk6IHBvaW50XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdGVwXCIpXG4gIH0sIGVsZW1lbnRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzOyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIFRyYWNrID0gZnVuY3Rpb24gVHJhY2socHJvcHMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyO1xuXG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBpbmNsdWRlZCA9IHByb3BzLmluY2x1ZGVkLFxuICAgICAgdmVydGljYWwgPSBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG4gIHZhciBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBwcm9wcy5vZmZzZXQsXG4gICAgICByZXZlcnNlID0gcHJvcHMucmV2ZXJzZTtcblxuICBpZiAobGVuZ3RoIDwgMCkge1xuICAgIHJldmVyc2UgPSAhcmV2ZXJzZTtcbiAgICBsZW5ndGggPSBNYXRoLmFicyhsZW5ndGgpO1xuICAgIG9mZnNldCA9IDEwMCAtIG9mZnNldDtcbiAgfVxuXG4gIHZhciBwb3NpdG9uU3R5bGUgPSB2ZXJ0aWNhbCA/IChfcmVmID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCByZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJywgXCJcIi5jb25jYXQob2Zmc2V0LCBcIiVcIikpLCBfZGVmaW5lUHJvcGVydHkoX3JlZiwgcmV2ZXJzZSA/ICdib3R0b20nIDogJ3RvcCcsICdhdXRvJyksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCBcImhlaWdodFwiLCBcIlwiLmNvbmNhdChsZW5ndGgsIFwiJVwiKSksIF9yZWYpIDogKF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgcmV2ZXJzZSA/ICdyaWdodCcgOiAnbGVmdCcsIFwiXCIuY29uY2F0KG9mZnNldCwgXCIlXCIpKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCByZXZlcnNlID8gJ2xlZnQnIDogJ3JpZ2h0JywgJ2F1dG8nKSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBcIndpZHRoXCIsIFwiXCIuY29uY2F0KGxlbmd0aCwgXCIlXCIpKSwgX3JlZjIpO1xuXG4gIHZhciBlbFN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIHBvc2l0b25TdHlsZSk7XG5cbiAgcmV0dXJuIGluY2x1ZGVkID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBlbFN0eWxlXG4gIH0pIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9nZXQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFwiO1xuaW1wb3J0IF9nZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2ZcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCBTdGVwcyBmcm9tICcuL1N0ZXBzJztcbmltcG9ydCBNYXJrcyBmcm9tICcuL01hcmtzJztcbmltcG9ydCBIYW5kbGUgZnJvbSAnLi4vSGFuZGxlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcihDb21wb25lbnQpIHtcbiAgdmFyIF9hOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cblxuICByZXR1cm4gX2EgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ29tcG9uZW50RW5oYW5jZXIsIF9Db21wb25lbnQpO1xuXG4gICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDb21wb25lbnRFbmhhbmNlcik7XG5cbiAgICBmdW5jdGlvbiBDb21wb25lbnRFbmhhbmNlcihwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50RW5oYW5jZXIpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgICAgX3RoaXMub25Eb3duID0gZnVuY3Rpb24gKGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBwID0gcG9zaXRpb247XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlVHJhY2sgPSBfdGhpcyRwcm9wcy5kcmFnZ2FibGVUcmFjayxcbiAgICAgICAgICAgIGlzVmVydGljYWwgPSBfdGhpcyRwcm9wcy52ZXJ0aWNhbDtcbiAgICAgICAgdmFyIGJvdW5kcyA9IF90aGlzLnN0YXRlLmJvdW5kcztcbiAgICAgICAgdmFyIHZhbHVlID0gZHJhZ2dhYmxlVHJhY2sgJiYgX3RoaXMucG9zaXRpb25HZXRWYWx1ZSA/IF90aGlzLnBvc2l0aW9uR2V0VmFsdWUocCkgfHwgW10gOiBbXTtcbiAgICAgICAgdmFyIGluUG9pbnQgPSB1dGlscy5pc0V2ZW50RnJvbUhhbmRsZShlLCBfdGhpcy5oYW5kbGVzUmVmcyk7XG4gICAgICAgIF90aGlzLmRyYWdUcmFjayA9IGRyYWdnYWJsZVRyYWNrICYmIGJvdW5kcy5sZW5ndGggPj0gMiAmJiAhaW5Qb2ludCAmJiAhdmFsdWUubWFwKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICAgICAgdmFyIHYgPSAhaSA/IG4gPj0gYm91bmRzW2ldIDogdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gaSA9PT0gdmFsdWUubGVuZ3RoIC0gMSA/IG4gPD0gYm91bmRzW2ldIDogdjtcbiAgICAgICAgfSkuc29tZShmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiAhYztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF90aGlzLmRyYWdUcmFjaykge1xuICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSBwO1xuICAgICAgICAgIF90aGlzLnN0YXJ0Qm91bmRzID0gX3RvQ29uc3VtYWJsZUFycmF5KGJvdW5kcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFpblBvaW50KSB7XG4gICAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhhbmRsZVBvc2l0aW9uID0gdXRpbHMuZ2V0SGFuZGxlQ2VudGVyUG9zaXRpb24oaXNWZXJ0aWNhbCwgZS50YXJnZXQpO1xuICAgICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IHAgLSBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICAgIHAgPSBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5vblN0YXJ0KHApO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG5cbiAgICAgICAgdmFyIGlzVmVydGljYWwgPSBfdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0TW91c2VQb3NpdGlvbihpc1ZlcnRpY2FsLCBlKTtcblxuICAgICAgICBfdGhpcy5vbkRvd24oZSwgcG9zaXRpb24pO1xuXG4gICAgICAgIF90aGlzLmFkZERvY3VtZW50TW91c2VFdmVudHMoKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh1dGlscy5pc05vdFRvdWNoRXZlbnQoZSkpIHJldHVybjtcbiAgICAgICAgdmFyIGlzVmVydGljYWwgPSBfdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0VG91Y2hQb3NpdGlvbihpc1ZlcnRpY2FsLCBlKTtcblxuICAgICAgICBfdGhpcy5vbkRvd24oZSwgcG9zaXRpb24pO1xuXG4gICAgICAgIF90aGlzLmFkZERvY3VtZW50VG91Y2hFdmVudHMoKTtcblxuICAgICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9uRm9jdXMgPSBfdGhpcyRwcm9wczIub25Gb2N1cyxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3RoaXMkcHJvcHMyLnZlcnRpY2FsO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0V2ZW50RnJvbUhhbmRsZShlLCBfdGhpcy5oYW5kbGVzUmVmcykgJiYgIV90aGlzLmRyYWdUcmFjaykge1xuICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHV0aWxzLmdldEhhbmRsZUNlbnRlclBvc2l0aW9uKHZlcnRpY2FsLCBlLnRhcmdldCk7XG4gICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IDA7XG5cbiAgICAgICAgICBfdGhpcy5vblN0YXJ0KGhhbmRsZVBvc2l0aW9uKTtcblxuICAgICAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG5cbiAgICAgICAgICBpZiAob25Gb2N1cykge1xuICAgICAgICAgICAgb25Gb2N1cyhlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBvbkJsdXIgPSBfdGhpcy5wcm9wcy5vbkJsdXI7XG5cbiAgICAgICAgaWYgKCFfdGhpcy5kcmFnVHJhY2spIHtcbiAgICAgICAgICBfdGhpcy5vbkVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICAgIG9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuaGFuZGxlc1JlZnNbX3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdKSB7XG4gICAgICAgICAgX3RoaXMuaGFuZGxlc1JlZnNbX3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdLmNsaWNrRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIV90aGlzLnNsaWRlclJlZikge1xuICAgICAgICAgIF90aGlzLm9uRW5kKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5nZXRNb3VzZVBvc2l0aW9uKF90aGlzLnByb3BzLnZlcnRpY2FsLCBlKTtcblxuICAgICAgICBfdGhpcy5vbk1vdmUoZSwgcG9zaXRpb24gLSBfdGhpcy5kcmFnT2Zmc2V0LCBfdGhpcy5kcmFnVHJhY2ssIF90aGlzLnN0YXJ0Qm91bmRzKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzTm90VG91Y2hFdmVudChlKSB8fCAhX3RoaXMuc2xpZGVyUmVmKSB7XG4gICAgICAgICAgX3RoaXMub25FbmQoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldFRvdWNoUG9zaXRpb24oX3RoaXMucHJvcHMudmVydGljYWwsIGUpO1xuXG4gICAgICAgIF90aGlzLm9uTW92ZShlLCBwb3NpdGlvbiAtIF90aGlzLmRyYWdPZmZzZXQsIF90aGlzLmRyYWdUcmFjaywgX3RoaXMuc3RhcnRCb3VuZHMpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKF90aGlzLnNsaWRlclJlZiAmJiB1dGlscy5pc0V2ZW50RnJvbUhhbmRsZShlLCBfdGhpcy5oYW5kbGVzUmVmcykpIHtcbiAgICAgICAgICBfdGhpcy5vbktleWJvYXJkKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNsaWNrTWFya0xhYmVsID0gZnVuY3Rpb24gKGUsIHZhbHVlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgX3RoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZVxuXG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm9uRW5kKHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVTbGlkZXIgPSBmdW5jdGlvbiAoc2xpZGVyKSB7XG4gICAgICAgIF90aGlzLnNsaWRlclJlZiA9IHNsaWRlcjtcbiAgICAgIH07XG5cbiAgICAgIHZhciBzdGVwID0gcHJvcHMuc3RlcCxcbiAgICAgICAgICBtYXggPSBwcm9wcy5tYXgsXG4gICAgICAgICAgbWluID0gcHJvcHMubWluO1xuICAgICAgdmFyIGlzUG9pbnREaWZmRXZlbiA9IGlzRmluaXRlKG1heCAtIG1pbikgPyAobWF4IC0gbWluKSAlIHN0ZXAgPT09IDAgOiB0cnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgIHdhcm5pbmcoc3RlcCAmJiBNYXRoLmZsb29yKHN0ZXApID09PSBzdGVwID8gaXNQb2ludERpZmZFdmVuIDogdHJ1ZSwgXCJTbGlkZXJbbWF4XSAtIFNsaWRlclttaW5dIChcIi5jb25jYXQobWF4IC0gbWluLCBcIikgc2hvdWxkIGJlIGEgbXVsdGlwbGUgb2YgU2xpZGVyW3N0ZXBdIChcIikuY29uY2F0KHN0ZXAsIFwiKVwiKSk7XG4gICAgICBfdGhpcy5oYW5kbGVzUmVmcyA9IHt9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb21wb25lbnRFbmhhbmNlciwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvLyBTbmFwc2hvdCB0ZXN0aW5nIGNhbm5vdCBoYW5kbGUgcmVmcywgc28gYmUgc3VyZSB0byBudWxsLWNoZWNrIHRoaXMuXG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSB0aGlzLnNsaWRlclJlZiAmJiB0aGlzLnNsaWRlclJlZi5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGF1dG9Gb2N1cyA9IF90aGlzJHByb3BzMy5hdXRvRm9jdXMsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMy5kaXNhYmxlZDtcblxuICAgICAgICBpZiAoYXV0b0ZvY3VzICYmICFkaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAoX2dldChfZ2V0UHJvdG90eXBlT2YoQ29tcG9uZW50RW5oYW5jZXIucHJvdG90eXBlKSwgXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLCB0aGlzKSkgX2dldChfZ2V0UHJvdG90eXBlT2YoQ29tcG9uZW50RW5oYW5jZXIucHJvdG90eXBlKSwgXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFNsaWRlclN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2xpZGVyU3RhcnQoKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSB0aGlzLnNsaWRlclJlZjtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzNC52ZXJ0aWNhbCxcbiAgICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wczQucmV2ZXJzZTtcbiAgICAgICAgdmFyIHJlY3QgPSBzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgICAgcmV0dXJuIHJldmVyc2UgPyByZWN0LmJvdHRvbSA6IHJlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCArIChyZXZlcnNlID8gcmVjdC5yaWdodCA6IHJlY3QubGVmdCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFNsaWRlckxlbmd0aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNsaWRlckxlbmd0aCgpIHtcbiAgICAgICAgdmFyIHNsaWRlciA9IHRoaXMuc2xpZGVyUmVmO1xuXG4gICAgICAgIGlmICghc2xpZGVyKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29vcmRzID0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52ZXJ0aWNhbCA/IGNvb3Jkcy5oZWlnaHQgOiBjb29yZHMud2lkdGg7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZERvY3VtZW50VG91Y2hFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudFRvdWNoRXZlbnRzKCkge1xuICAgICAgICAvLyBqdXN0IHdvcmsgZm9yIENocm9tZSBpT1MgU2FmYXJpIGFuZCBBbmRyb2lkIEJyb3dzZXJcbiAgICAgICAgdGhpcy5vblRvdWNoTW92ZUxpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XG4gICAgICAgIHRoaXMub25Ub3VjaFVwTGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyKHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMub25FbmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhZGREb2N1bWVudE1vdXNlRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRG9jdW1lbnRNb3VzZUV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZUxpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyKHRoaXMuZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5vbkVuZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbW92ZURvY3VtZW50RXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRG9jdW1lbnRFdmVudHMoKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgICAgdGhpcy5vblRvdWNoTW92ZUxpc3RlbmVyICYmIHRoaXMub25Ub3VjaE1vdmVMaXN0ZW5lci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5vblRvdWNoVXBMaXN0ZW5lciAmJiB0aGlzLm9uVG91Y2hVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIgJiYgdGhpcy5vbk1vdXNlTW92ZUxpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyICYmIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgIHZhciBfdGhpcyRoYW5kbGVzUmVmcyQ7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAoX3RoaXMkaGFuZGxlc1JlZnMkID0gdGhpcy5oYW5kbGVzUmVmc1swXSkgPT09IG51bGwgfHwgX3RoaXMkaGFuZGxlc1JlZnMkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRoYW5kbGVzUmVmcyQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5oYW5kbGVzUmVmcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIF90aGlzMiRoYW5kbGVzUmVmcyRrZSwgX3RoaXMyJGhhbmRsZXNSZWZzJGtlMjtcblxuICAgICAgICAgIChfdGhpczIkaGFuZGxlc1JlZnMka2UgPSBfdGhpczIuaGFuZGxlc1JlZnNba2V5XSkgPT09IG51bGwgfHwgX3RoaXMyJGhhbmRsZXNSZWZzJGtlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3RoaXMyJGhhbmRsZXNSZWZzJGtlMiA9IF90aGlzMiRoYW5kbGVzUmVmcyRrZS5ibHVyKSA9PT0gbnVsbCB8fCBfdGhpczIkaGFuZGxlc1JlZnMka2UyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpczIkaGFuZGxlc1JlZnMka2UyLmNhbGwoX3RoaXMyJGhhbmRsZXNSZWZzJGtlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNhbGNWYWx1ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNWYWx1ZShvZmZzZXQpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzNS52ZXJ0aWNhbCxcbiAgICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzNS5taW4sXG4gICAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczUubWF4O1xuICAgICAgICB2YXIgcmF0aW8gPSBNYXRoLmFicyhNYXRoLm1heChvZmZzZXQsIDApIC8gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZlcnRpY2FsID8gKDEgLSByYXRpbykgKiAobWF4IC0gbWluKSArIG1pbiA6IHJhdGlvICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2FsY1ZhbHVlQnlQb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjVmFsdWVCeVBvcyhwb3NpdGlvbikge1xuICAgICAgICB2YXIgc2lnbiA9IHRoaXMucHJvcHMucmV2ZXJzZSA/IC0xIDogKzE7XG4gICAgICAgIHZhciBwaXhlbE9mZnNldCA9IHNpZ24gKiAocG9zaXRpb24gLSB0aGlzLmdldFNsaWRlclN0YXJ0KCkpO1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gdGhpcy50cmltQWxpZ25WYWx1ZSh0aGlzLmNhbGNWYWx1ZShwaXhlbE9mZnNldCkpO1xuICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjYWxjT2Zmc2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY09mZnNldCh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzNi5taW4sXG4gICAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczYubWF4O1xuICAgICAgICB2YXIgcmF0aW8gPSAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCByYXRpbyAqIDEwMCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNhdmVIYW5kbGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlSGFuZGxlKGluZGV4LCBoYW5kbGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVzUmVmc1tpbmRleF0gPSBoYW5kbGU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHM3LnByZWZpeENscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNy5jbGFzc05hbWUsXG4gICAgICAgICAgICBtYXJrcyA9IF90aGlzJHByb3BzNy5tYXJrcyxcbiAgICAgICAgICAgIGRvdHMgPSBfdGhpcyRwcm9wczcuZG90cyxcbiAgICAgICAgICAgIHN0ZXAgPSBfdGhpcyRwcm9wczcuc3RlcCxcbiAgICAgICAgICAgIGluY2x1ZGVkID0gX3RoaXMkcHJvcHM3LmluY2x1ZGVkLFxuICAgICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczcuZGlzYWJsZWQsXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzNy52ZXJ0aWNhbCxcbiAgICAgICAgICAgIHJldmVyc2UgPSBfdGhpcyRwcm9wczcucmV2ZXJzZSxcbiAgICAgICAgICAgIG1pbiA9IF90aGlzJHByb3BzNy5taW4sXG4gICAgICAgICAgICBtYXggPSBfdGhpcyRwcm9wczcubWF4LFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczcuY2hpbGRyZW4sXG4gICAgICAgICAgICBtYXhpbXVtVHJhY2tTdHlsZSA9IF90aGlzJHByb3BzNy5tYXhpbXVtVHJhY2tTdHlsZSxcbiAgICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHM3LnN0eWxlLFxuICAgICAgICAgICAgcmFpbFN0eWxlID0gX3RoaXMkcHJvcHM3LnJhaWxTdHlsZSxcbiAgICAgICAgICAgIGRvdFN0eWxlID0gX3RoaXMkcHJvcHM3LmRvdFN0eWxlLFxuICAgICAgICAgICAgYWN0aXZlRG90U3R5bGUgPSBfdGhpcyRwcm9wczcuYWN0aXZlRG90U3R5bGU7XG5cbiAgICAgICAgdmFyIF9nZXQkY2FsbCA9IF9nZXQoX2dldFByb3RvdHlwZU9mKENvbXBvbmVudEVuaGFuY2VyLnByb3RvdHlwZSksIFwicmVuZGVyXCIsIHRoaXMpLmNhbGwodGhpcyksXG4gICAgICAgICAgICB0cmFja3MgPSBfZ2V0JGNhbGwudHJhY2tzLFxuICAgICAgICAgICAgaGFuZGxlcyA9IF9nZXQkY2FsbC5oYW5kbGVzO1xuXG4gICAgICAgIHZhciBzbGlkZXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13aXRoLW1hcmtzXCIpLCBPYmplY3Qua2V5cyhtYXJrcykubGVuZ3RoKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi12ZXJ0aWNhbFwiKSwgdmVydGljYWwpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICByZWY6IHRoaXMuc2F2ZVNsaWRlcixcbiAgICAgICAgICBjbGFzc05hbWU6IHNsaWRlckNsYXNzTmFtZSxcbiAgICAgICAgICBvblRvdWNoU3RhcnQ6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgIG9uTW91c2VEb3duOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICAgIG9uTW91c2VVcDogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICAgICAgb25LZXlEb3duOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgICBvbkZvY3VzOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAgb25CbHVyOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uQmx1cixcbiAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1yYWlsXCIpLFxuICAgICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1heGltdW1UcmFja1N0eWxlKSwgcmFpbFN0eWxlKVxuICAgICAgICB9KSwgdHJhY2tzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdGVwcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgICByZXZlcnNlOiByZXZlcnNlLFxuICAgICAgICAgIG1hcmtzOiBtYXJrcyxcbiAgICAgICAgICBkb3RzOiBkb3RzLFxuICAgICAgICAgIHN0ZXA6IHN0ZXAsXG4gICAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICAgIGxvd2VyQm91bmQ6IHRoaXMuZ2V0TG93ZXJCb3VuZCgpLFxuICAgICAgICAgIHVwcGVyQm91bmQ6IHRoaXMuZ2V0VXBwZXJCb3VuZCgpLFxuICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgIGRvdFN0eWxlOiBkb3RTdHlsZSxcbiAgICAgICAgICBhY3RpdmVEb3RTdHlsZTogYWN0aXZlRG90U3R5bGVcbiAgICAgICAgfSksIGhhbmRsZXMsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1hcmtcIiksXG4gICAgICAgICAgb25DbGlja0xhYmVsOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uQ2xpY2tNYXJrTGFiZWwsXG4gICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgIG1hcmtzOiBtYXJrcyxcbiAgICAgICAgICBpbmNsdWRlZDogaW5jbHVkZWQsXG4gICAgICAgICAgbG93ZXJCb3VuZDogdGhpcy5nZXRMb3dlckJvdW5kKCksXG4gICAgICAgICAgdXBwZXJCb3VuZDogdGhpcy5nZXRVcHBlckJvdW5kKCksXG4gICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgcmV2ZXJzZTogcmV2ZXJzZVxuICAgICAgICB9KSwgY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb21wb25lbnRFbmhhbmNlcjtcbiAgfShDb21wb25lbnQpLCBfYS5kaXNwbGF5TmFtZSA9IFwiQ29tcG9uZW50RW5oYW5jZXIoXCIuY29uY2F0KENvbXBvbmVudC5kaXNwbGF5TmFtZSwgXCIpXCIpLCBfYS5kZWZhdWx0UHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMpLCB7fSwge1xuICAgIHByZWZpeENsczogJ3JjLXNsaWRlcicsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgc3RlcDogMSxcbiAgICBtYXJrczoge30sXG4gICAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUocHJvcHMpIHtcbiAgICAgIHZhciBpbmRleCA9IHByb3BzLmluZGV4LFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiaW5kZXhcIl0pO1xuXG4gICAgICBkZWxldGUgcmVzdFByb3BzLmRyYWdnaW5nO1xuXG4gICAgICBpZiAocmVzdFByb3BzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGFuZGxlLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgICAgIGtleTogaW5kZXhcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmVmb3JlQ2hhbmdlOiBub29wLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uQWZ0ZXJDaGFuZ2U6IG5vb3AsXG4gICAgaW5jbHVkZWQ6IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICByZXZlcnNlOiBmYWxzZSxcbiAgICB0cmFja1N0eWxlOiBbe31dLFxuICAgIGhhbmRsZVN0eWxlOiBbe31dLFxuICAgIHJhaWxTdHlsZToge30sXG4gICAgZG90U3R5bGU6IHt9LFxuICAgIGFjdGl2ZURvdFN0eWxlOiB7fVxuICB9KSwgX2E7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vY29tbW9uL1NsaWRlclRvb2x0aXAnO1xuaW1wb3J0IEhhbmRsZSBmcm9tICcuL0hhbmRsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcChDb21wb25lbnQpIHtcbiAgdmFyIF9hOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5cblxuICByZXR1cm4gX2EgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ29tcG9uZW50V3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENvbXBvbmVudFdyYXBwZXIpO1xuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50V3JhcHBlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvbmVudFdyYXBwZXIpO1xuXG4gICAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHZpc2libGVzOiB7fVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlVG9vbHRpcFZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiAoaW5kZXgsIHZpc2libGUpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlczogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcmV2U3RhdGUudmlzaWJsZXMpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCBpbmRleCwgdmlzaWJsZSkpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5oYW5kbGVXaXRoVG9vbHRpcCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgICAgICBkcmFnZ2luZyA9IF9yZWYuZHJhZ2dpbmcsXG4gICAgICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widmFsdWVcIiwgXCJkcmFnZ2luZ1wiLCBcImluZGV4XCIsIFwiZGlzYWJsZWRcIl0pO1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgdGlwRm9ybWF0dGVyID0gX3RoaXMkcHJvcHMudGlwRm9ybWF0dGVyLFxuICAgICAgICAgICAgdGlwUHJvcHMgPSBfdGhpcyRwcm9wcy50aXBQcm9wcyxcbiAgICAgICAgICAgIGhhbmRsZVN0eWxlID0gX3RoaXMkcHJvcHMuaGFuZGxlU3R5bGUsXG4gICAgICAgICAgICBnZXRUb29sdGlwQ29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0VG9vbHRpcENvbnRhaW5lcjtcblxuICAgICAgICB2YXIgX3RpcFByb3BzJHByZWZpeENscyA9IHRpcFByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgIHByZWZpeENscyA9IF90aXBQcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy1zbGlkZXItdG9vbHRpcCcgOiBfdGlwUHJvcHMkcHJlZml4Q2xzLFxuICAgICAgICAgICAgX3RpcFByb3BzJG92ZXJsYXkgPSB0aXBQcm9wcy5vdmVybGF5LFxuICAgICAgICAgICAgb3ZlcmxheSA9IF90aXBQcm9wcyRvdmVybGF5ID09PSB2b2lkIDAgPyB0aXBGb3JtYXR0ZXIodmFsdWUpIDogX3RpcFByb3BzJG92ZXJsYXksXG4gICAgICAgICAgICBfdGlwUHJvcHMkcGxhY2VtZW50ID0gdGlwUHJvcHMucGxhY2VtZW50LFxuICAgICAgICAgICAgcGxhY2VtZW50ID0gX3RpcFByb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ3RvcCcgOiBfdGlwUHJvcHMkcGxhY2VtZW50LFxuICAgICAgICAgICAgX3RpcFByb3BzJHZpc2libGUgPSB0aXBQcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgdmlzaWJsZSA9IF90aXBQcm9wcyR2aXNpYmxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aXBQcm9wcyR2aXNpYmxlLFxuICAgICAgICAgICAgcmVzdFRvb2x0aXBQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aXBQcm9wcywgW1wicHJlZml4Q2xzXCIsIFwib3ZlcmxheVwiLCBcInBsYWNlbWVudFwiLCBcInZpc2libGVcIl0pO1xuXG4gICAgICAgIHZhciBoYW5kbGVTdHlsZVdpdGhJbmRleDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVTdHlsZSkpIHtcbiAgICAgICAgICBoYW5kbGVTdHlsZVdpdGhJbmRleCA9IGhhbmRsZVN0eWxlW2luZGV4XSB8fCBoYW5kbGVTdHlsZVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoYW5kbGVTdHlsZVdpdGhJbmRleCA9IGhhbmRsZVN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRvb2x0aXAsIF9leHRlbmRzKHt9LCByZXN0VG9vbHRpcFByb3BzLCB7XG4gICAgICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lcjogZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICAgIHZpc2libGU6ICFkaXNhYmxlZCAmJiAoX3RoaXMuc3RhdGUudmlzaWJsZXNbaW5kZXhdIHx8IGRyYWdnaW5nKSB8fCB2aXNpYmxlLFxuICAgICAgICAgIGtleTogaW5kZXhcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhhbmRsZSwgX2V4dGVuZHMoe30sIHJlc3RQcm9wcywge1xuICAgICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHt9LCBoYW5kbGVTdHlsZVdpdGhJbmRleCksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZVRvb2x0aXBWaXNpYmxlQ2hhbmdlKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZVRvb2x0aXBWaXNpYmxlQ2hhbmdlKGluZGV4LCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDb21wb25lbnRXcmFwcGVyLCBbe1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBoYW5kbGU6IHRoaXMuaGFuZGxlV2l0aFRvb2x0aXBcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb21wb25lbnRXcmFwcGVyO1xuICB9KFJlYWN0LkNvbXBvbmVudCksIF9hLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXBGb3JtYXR0ZXI6IGZ1bmN0aW9uIHRpcEZvcm1hdHRlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgaGFuZGxlU3R5bGU6IFt7fV0sXG4gICAgdGlwUHJvcHM6IHt9LFxuICAgIGdldFRvb2x0aXBDb250YWluZXI6IGZ1bmN0aW9uIGdldFRvb2x0aXBDb250YWluZXIobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH0sIF9hO1xufSIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi9TbGlkZXInO1xuaW1wb3J0IFJhbmdlIGZyb20gJy4vUmFuZ2UnO1xuaW1wb3J0IEhhbmRsZSBmcm9tICcuL0hhbmRsZSc7XG5pbXBvcnQgY3JlYXRlU2xpZGVyV2l0aFRvb2x0aXAgZnJvbSAnLi9jcmVhdGVTbGlkZXJXaXRoVG9vbHRpcCc7XG5pbXBvcnQgU2xpZGVyVG9vbHRpcCBmcm9tICcuL2NvbW1vbi9TbGlkZXJUb29sdGlwJztcbnZhciBJbnRlcm5hbFNsaWRlciA9IFNsaWRlcjtcbkludGVybmFsU2xpZGVyLlJhbmdlID0gUmFuZ2U7XG5JbnRlcm5hbFNsaWRlci5IYW5kbGUgPSBIYW5kbGU7XG5JbnRlcm5hbFNsaWRlci5jcmVhdGVTbGlkZXJXaXRoVG9vbHRpcCA9IGNyZWF0ZVNsaWRlcldpdGhUb29sdGlwO1xuZXhwb3J0IGRlZmF1bHQgSW50ZXJuYWxTbGlkZXI7XG5leHBvcnQgeyBSYW5nZSwgSGFuZGxlLCBjcmVhdGVTbGlkZXJXaXRoVG9vbHRpcCwgU2xpZGVyVG9vbHRpcCB9OyIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQga2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNFdmVudEZyb21IYW5kbGUoZSwgaGFuZGxlcykge1xuICB0cnkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYW5kbGVzKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldCA9PT0gZmluZERPTU5vZGUoaGFuZGxlc1trZXldKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlT3V0T2ZSYW5nZSh2YWx1ZSwgX3JlZikge1xuICB2YXIgbWluID0gX3JlZi5taW4sXG4gICAgICBtYXggPSBfcmVmLm1heDtcbiAgcmV0dXJuIHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90VG91Y2hFdmVudChlKSB7XG4gIHJldHVybiBlLnRvdWNoZXMubGVuZ3RoID4gMSB8fCBlLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RvdWNoZW5kJyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0UG9pbnQodmFsLCBfcmVmMikge1xuICB2YXIgbWFya3MgPSBfcmVmMi5tYXJrcyxcbiAgICAgIHN0ZXAgPSBfcmVmMi5zdGVwLFxuICAgICAgbWluID0gX3JlZjIubWluLFxuICAgICAgbWF4ID0gX3JlZjIubWF4O1xuICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMobWFya3MpLm1hcChwYXJzZUZsb2F0KTtcblxuICBpZiAoc3RlcCAhPT0gbnVsbCkge1xuICAgIHZhciBiYXNlTnVtID0gTWF0aC5wb3coMTAsIGdldFByZWNpc2lvbihzdGVwKSk7XG4gICAgdmFyIG1heFN0ZXBzID0gTWF0aC5mbG9vcigobWF4ICogYmFzZU51bSAtIG1pbiAqIGJhc2VOdW0pIC8gKHN0ZXAgKiBiYXNlTnVtKSk7XG4gICAgdmFyIHN0ZXBzID0gTWF0aC5taW4oKHZhbCAtIG1pbikgLyBzdGVwLCBtYXhTdGVwcyk7XG4gICAgdmFyIGNsb3Nlc3RTdGVwID0gTWF0aC5yb3VuZChzdGVwcykgKiBzdGVwICsgbWluO1xuICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RTdGVwKTtcbiAgfVxuXG4gIHZhciBkaWZmcyA9IHBvaW50cy5tYXAoZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHZhbCAtIHBvaW50KTtcbiAgfSk7XG4gIHJldHVybiBwb2ludHNbZGlmZnMuaW5kZXhPZihNYXRoLm1pbi5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoZGlmZnMpKSldO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZWNpc2lvbihzdGVwKSB7XG4gIHZhciBzdGVwU3RyaW5nID0gc3RlcC50b1N0cmluZygpO1xuICB2YXIgcHJlY2lzaW9uID0gMDtcblxuICBpZiAoc3RlcFN0cmluZy5pbmRleE9mKCcuJykgPj0gMCkge1xuICAgIHByZWNpc2lvbiA9IHN0ZXBTdHJpbmcubGVuZ3RoIC0gc3RlcFN0cmluZy5pbmRleE9mKCcuJykgLSAxO1xuICB9XG5cbiAgcmV0dXJuIHByZWNpc2lvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uKHZlcnRpY2FsLCBlKSB7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGUuY2xpZW50WSA6IGUucGFnZVg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hQb3NpdGlvbih2ZXJ0aWNhbCwgZSkge1xuICByZXR1cm4gdmVydGljYWwgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUudG91Y2hlc1swXS5wYWdlWDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYW5kbGVDZW50ZXJQb3NpdGlvbih2ZXJ0aWNhbCwgaGFuZGxlKSB7XG4gIHZhciBjb29yZHMgPSBoYW5kbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGNvb3Jkcy50b3AgKyBjb29yZHMuaGVpZ2h0ICogMC41IDogd2luZG93LnBhZ2VYT2Zmc2V0ICsgY29vcmRzLmxlZnQgKyBjb29yZHMud2lkdGggKiAwLjU7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVmFsdWVJblJhbmdlKHZhbCwgX3JlZjMpIHtcbiAgdmFyIG1heCA9IF9yZWYzLm1heCxcbiAgICAgIG1pbiA9IF9yZWYzLm1pbjtcblxuICBpZiAodmFsIDw9IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cblxuICBpZiAodmFsID49IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVZhbHVlUHJlY2lzaW9uKHZhbCwgcHJvcHMpIHtcbiAgdmFyIHN0ZXAgPSBwcm9wcy5zdGVwO1xuICB2YXIgY2xvc2VzdFBvaW50ID0gaXNGaW5pdGUoZ2V0Q2xvc2VzdFBvaW50KHZhbCwgcHJvcHMpKSA/IGdldENsb3Nlc3RQb2ludCh2YWwsIHByb3BzKSA6IDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICByZXR1cm4gc3RlcCA9PT0gbnVsbCA/IGNsb3Nlc3RQb2ludCA6IHBhcnNlRmxvYXQoY2xvc2VzdFBvaW50LnRvRml4ZWQoZ2V0UHJlY2lzaW9uKHN0ZXApKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGF1c2VFdmVudChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOZXh0VmFsdWUoZnVuYywgdmFsdWUsIHByb3BzKSB7XG4gIHZhciBvcGVyYXRpb25zID0ge1xuICAgIGluY3JlYXNlOiBmdW5jdGlvbiBpbmNyZWFzZShhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfSxcbiAgICBkZWNyZWFzZTogZnVuY3Rpb24gZGVjcmVhc2UoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH1cbiAgfTtcbiAgdmFyIGluZGV4VG9HZXQgPSBvcGVyYXRpb25zW2Z1bmNdKE9iamVjdC5rZXlzKHByb3BzLm1hcmtzKS5pbmRleE9mKEpTT04uc3RyaW5naWZ5KHZhbHVlKSksIDEpO1xuICB2YXIga2V5VG9HZXQgPSBPYmplY3Qua2V5cyhwcm9wcy5tYXJrcylbaW5kZXhUb0dldF07XG5cbiAgaWYgKHByb3BzLnN0ZXApIHtcbiAgICByZXR1cm4gb3BlcmF0aW9uc1tmdW5jXSh2YWx1ZSwgcHJvcHMuc3RlcCk7XG4gIH1cblxuICBpZiAoISFPYmplY3Qua2V5cyhwcm9wcy5tYXJrcykubGVuZ3RoICYmICEhcHJvcHMubWFya3Nba2V5VG9HZXRdKSB7XG4gICAgcmV0dXJuIHByb3BzLm1hcmtzW2tleVRvR2V0XTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlib2FyZFZhbHVlTXV0YXRvcihlLCB2ZXJ0aWNhbCwgcmV2ZXJzZSkge1xuICB2YXIgaW5jcmVhc2UgPSAnaW5jcmVhc2UnO1xuICB2YXIgZGVjcmVhc2UgPSAnZGVjcmVhc2UnO1xuICB2YXIgbWV0aG9kID0gaW5jcmVhc2U7XG5cbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIGtleUNvZGUuVVA6XG4gICAgICBtZXRob2QgPSB2ZXJ0aWNhbCAmJiByZXZlcnNlID8gZGVjcmVhc2UgOiBpbmNyZWFzZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBrZXlDb2RlLlJJR0hUOlxuICAgICAgbWV0aG9kID0gIXZlcnRpY2FsICYmIHJldmVyc2UgPyBkZWNyZWFzZSA6IGluY3JlYXNlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGtleUNvZGUuRE9XTjpcbiAgICAgIG1ldGhvZCA9IHZlcnRpY2FsICYmIHJldmVyc2UgPyBpbmNyZWFzZSA6IGRlY3JlYXNlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGtleUNvZGUuTEVGVDpcbiAgICAgIG1ldGhvZCA9ICF2ZXJ0aWNhbCAmJiByZXZlcnNlID8gaW5jcmVhc2UgOiBkZWNyZWFzZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBrZXlDb2RlLkVORDpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5tYXg7XG4gICAgICB9O1xuXG4gICAgY2FzZSBrZXlDb2RlLkhPTUU6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHMubWluO1xuICAgICAgfTtcblxuICAgIGNhc2Uga2V5Q29kZS5QQUdFX1VQOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgcHJvcHMuc3RlcCAqIDI7XG4gICAgICB9O1xuXG4gICAgY2FzZSBrZXlDb2RlLlBBR0VfRE9XTjpcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAtIHByb3BzLnN0ZXAgKiAyO1xuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcHMpIHtcbiAgICByZXR1cm4gY2FsY3VsYXRlTmV4dFZhbHVlKG1ldGhvZCwgdmFsdWUsIHByb3BzKTtcbiAgfTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBDb250ZW50ID0gZnVuY3Rpb24gQ29udGVudChwcm9wcykge1xuICB2YXIgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXksXG4gICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGUgPSBwcm9wcy5vdmVybGF5SW5uZXJTdHlsZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXJcIiksXG4gICAgaWQ6IGlkLFxuICAgIHJvbGU6IFwidG9vbHRpcFwiLFxuICAgIHN0eWxlOiBvdmVybGF5SW5uZXJTdHlsZVxuICB9LCB0eXBlb2Ygb3ZlcmxheSA9PT0gJ2Z1bmN0aW9uJyA/IG92ZXJsYXkoKSA6IG92ZXJsYXkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnLi9wbGFjZW1lbnRzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gVG9vbHRpcChwcm9wcywgcmVmKSB7XG4gIHZhciBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyR0cmlnZ2VyID0gcHJvcHMudHJpZ2dlcixcbiAgICAgIHRyaWdnZXIgPSBfcHJvcHMkdHJpZ2dlciA9PT0gdm9pZCAwID8gWydob3ZlciddIDogX3Byb3BzJHRyaWdnZXIsXG4gICAgICBfcHJvcHMkbW91c2VFbnRlckRlbGEgPSBwcm9wcy5tb3VzZUVudGVyRGVsYXksXG4gICAgICBtb3VzZUVudGVyRGVsYXkgPSBfcHJvcHMkbW91c2VFbnRlckRlbGEgPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbW91c2VFbnRlckRlbGEsXG4gICAgICBfcHJvcHMkbW91c2VMZWF2ZURlbGEgPSBwcm9wcy5tb3VzZUxlYXZlRGVsYXksXG4gICAgICBtb3VzZUxlYXZlRGVsYXkgPSBfcHJvcHMkbW91c2VMZWF2ZURlbGEgPT09IHZvaWQgMCA/IDAuMSA6IF9wcm9wcyRtb3VzZUxlYXZlRGVsYSxcbiAgICAgIG92ZXJsYXlTdHlsZSA9IHByb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtdG9vbHRpcCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSA9IHByb3BzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IHByb3BzLmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24sXG4gICAgICBtb3Rpb24gPSBwcm9wcy5tb3Rpb24sXG4gICAgICBfcHJvcHMkcGxhY2VtZW50ID0gcHJvcHMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3Byb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ3JpZ2h0JyA6IF9wcm9wcyRwbGFjZW1lbnQsXG4gICAgICBfcHJvcHMkYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGFsaWduID0gX3Byb3BzJGFsaWduID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRhbGlnbixcbiAgICAgIF9wcm9wcyRkZXN0cm95VG9vbHRpcCA9IHByb3BzLmRlc3Ryb3lUb29sdGlwT25IaWRlLFxuICAgICAgZGVzdHJveVRvb2x0aXBPbkhpZGUgPSBfcHJvcHMkZGVzdHJveVRvb2x0aXAgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRlc3Ryb3lUb29sdGlwLFxuICAgICAgZGVmYXVsdFZpc2libGUgPSBwcm9wcy5kZWZhdWx0VmlzaWJsZSxcbiAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBwcm9wcy5nZXRUb29sdGlwQ29udGFpbmVyLFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGUgPSBwcm9wcy5vdmVybGF5SW5uZXJTdHlsZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wib3ZlcmxheUNsYXNzTmFtZVwiLCBcInRyaWdnZXJcIiwgXCJtb3VzZUVudGVyRGVsYXlcIiwgXCJtb3VzZUxlYXZlRGVsYXlcIiwgXCJvdmVybGF5U3R5bGVcIiwgXCJwcmVmaXhDbHNcIiwgXCJjaGlsZHJlblwiLCBcIm9uVmlzaWJsZUNoYW5nZVwiLCBcImFmdGVyVmlzaWJsZUNoYW5nZVwiLCBcInRyYW5zaXRpb25OYW1lXCIsIFwiYW5pbWF0aW9uXCIsIFwibW90aW9uXCIsIFwicGxhY2VtZW50XCIsIFwiYWxpZ25cIiwgXCJkZXN0cm95VG9vbHRpcE9uSGlkZVwiLCBcImRlZmF1bHRWaXNpYmxlXCIsIFwiZ2V0VG9vbHRpcENvbnRhaW5lclwiLCBcIm92ZXJsYXlJbm5lclN0eWxlXCJdKTtcblxuICB2YXIgZG9tUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb21SZWYuY3VycmVudDtcbiAgfSk7XG5cbiAgdmFyIGV4dHJhUHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCByZXN0UHJvcHMpO1xuXG4gIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICBleHRyYVByb3BzLnBvcHVwVmlzaWJsZSA9IHByb3BzLnZpc2libGU7XG4gIH1cblxuICB2YXIgZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0UG9wdXBFbGVtZW50KCkge1xuICAgIHZhciBfcHJvcHMkYXJyb3dDb250ZW50ID0gcHJvcHMuYXJyb3dDb250ZW50LFxuICAgICAgICBhcnJvd0NvbnRlbnQgPSBfcHJvcHMkYXJyb3dDb250ZW50ID09PSB2b2lkIDAgPyBudWxsIDogX3Byb3BzJGFycm93Q29udGVudCxcbiAgICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXksXG4gICAgICAgIGlkID0gcHJvcHMuaWQ7XG4gICAgcmV0dXJuIFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIiksXG4gICAgICBrZXk6IFwiYXJyb3dcIlxuICAgIH0sIGFycm93Q29udGVudCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnQsIHtcbiAgICAgIGtleTogXCJjb250ZW50XCIsXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZTogb3ZlcmxheUlubmVyU3R5bGVcbiAgICB9KV07XG4gIH07XG5cbiAgdmFyIGRlc3Ryb3lUb29sdGlwID0gZmFsc2U7XG4gIHZhciBhdXRvRGVzdHJveSA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgZGVzdHJveVRvb2x0aXBPbkhpZGUgPT09ICdib29sZWFuJykge1xuICAgIGRlc3Ryb3lUb29sdGlwID0gZGVzdHJveVRvb2x0aXBPbkhpZGU7XG4gIH0gZWxzZSBpZiAoZGVzdHJveVRvb2x0aXBPbkhpZGUgJiYgX3R5cGVvZihkZXN0cm95VG9vbHRpcE9uSGlkZSkgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGtlZXBQYXJlbnQgPSBkZXN0cm95VG9vbHRpcE9uSGlkZS5rZWVwUGFyZW50O1xuICAgIGRlc3Ryb3lUb29sdGlwID0ga2VlcFBhcmVudCA9PT0gdHJ1ZTtcbiAgICBhdXRvRGVzdHJveSA9IGtlZXBQYXJlbnQgPT09IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXIsIF9leHRlbmRzKHtcbiAgICBwb3B1cENsYXNzTmFtZTogb3ZlcmxheUNsYXNzTmFtZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBwb3B1cDogZ2V0UG9wdXBFbGVtZW50LFxuICAgIGFjdGlvbjogdHJpZ2dlcixcbiAgICBidWlsdGluUGxhY2VtZW50czogcGxhY2VtZW50cyxcbiAgICBwb3B1cFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgIHJlZjogZG9tUmVmLFxuICAgIHBvcHVwQWxpZ246IGFsaWduLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRUb29sdGlwQ29udGFpbmVyLFxuICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBvblZpc2libGVDaGFuZ2UsXG4gICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IGFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICBwb3B1cFRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICBwb3B1cEFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgIHBvcHVwTW90aW9uOiBtb3Rpb24sXG4gICAgZGVmYXVsdFBvcHVwVmlzaWJsZTogZGVmYXVsdFZpc2libGUsXG4gICAgZGVzdHJveVBvcHVwT25IaWRlOiBkZXN0cm95VG9vbHRpcCxcbiAgICBhdXRvRGVzdHJveTogYXV0b0Rlc3Ryb3ksXG4gICAgbW91c2VMZWF2ZURlbGF5OiBtb3VzZUxlYXZlRGVsYXksXG4gICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgIG1vdXNlRW50ZXJEZWxheTogbW91c2VFbnRlckRlbGF5XG4gIH0sIGV4dHJhUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihUb29sdGlwKTsiLCJpbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnO1xuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDsiLCJ2YXIgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IHtcbiAgbGVmdDoge1xuICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHBsYWNlbWVudHM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ1NTTW90aW9uIGZyb20gJ3JjLW1vdGlvbic7XG5pbXBvcnQgeyBnZXRNb3Rpb24gfSBmcm9tICcuLi91dGlscy9sZWdhY3lVdGlsJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hc2socHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgekluZGV4ID0gcHJvcHMuekluZGV4LFxuICAgICAgbWFzayA9IHByb3BzLm1hc2ssXG4gICAgICBtYXNrTW90aW9uID0gcHJvcHMubWFza01vdGlvbixcbiAgICAgIG1hc2tBbmltYXRpb24gPSBwcm9wcy5tYXNrQW5pbWF0aW9uLFxuICAgICAgbWFza1RyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuXG4gIGlmICghbWFzaykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1vdGlvbiA9IHt9O1xuXG4gIGlmIChtYXNrTW90aW9uIHx8IG1hc2tUcmFuc2l0aW9uTmFtZSB8fCBtYXNrQW5pbWF0aW9uKSB7XG4gICAgbW90aW9uID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBtb3Rpb25BcHBlYXI6IHRydWVcbiAgICB9LCBnZXRNb3Rpb24oe1xuICAgICAgbW90aW9uOiBtYXNrTW90aW9uLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICB0cmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgYW5pbWF0aW9uOiBtYXNrQW5pbWF0aW9uXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENTU01vdGlvbiwgX2V4dGVuZHMoe30sIG1vdGlvbiwge1xuICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgcmVtb3ZlT25MZWF2ZTogdHJ1ZVxuICB9KSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWU7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHpJbmRleDogekluZGV4XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWFza1wiKSwgY2xhc3NOYW1lKVxuICAgIH0pO1xuICB9KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTTW90aW9uIGZyb20gJ3JjLW1vdGlvbic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbnZhciBNb2JpbGVQb3B1cElubmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgekluZGV4ID0gcHJvcHMuekluZGV4LFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRtb2JpbGUgPSBwcm9wcy5tb2JpbGU7XG4gIF9wcm9wcyRtb2JpbGUgPSBfcHJvcHMkbW9iaWxlID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRtb2JpbGU7XG4gIHZhciBwb3B1cENsYXNzTmFtZSA9IF9wcm9wcyRtb2JpbGUucG9wdXBDbGFzc05hbWUsXG4gICAgICBwb3B1cFN0eWxlID0gX3Byb3BzJG1vYmlsZS5wb3B1cFN0eWxlLFxuICAgICAgX3Byb3BzJG1vYmlsZSRwb3B1cE1vID0gX3Byb3BzJG1vYmlsZS5wb3B1cE1vdGlvbixcbiAgICAgIHBvcHVwTW90aW9uID0gX3Byb3BzJG1vYmlsZSRwb3B1cE1vID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRtb2JpbGUkcG9wdXBNbyxcbiAgICAgIHBvcHVwUmVuZGVyID0gX3Byb3BzJG1vYmlsZS5wb3B1cFJlbmRlcjtcbiAgdmFyIGVsZW1lbnRSZWYgPSBSZWFjdC51c2VSZWYoKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBSZWZzID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JjZUFsaWduOiBmdW5jdGlvbiBmb3JjZUFsaWduKCkge30sXG4gICAgICBnZXRFbGVtZW50OiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgfVxuICAgIH07XG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBtZXJnZWRTdHlsZSA9IF9vYmplY3RTcHJlYWQoe1xuICAgIHpJbmRleDogekluZGV4XG4gIH0sIHBvcHVwU3R5bGUpO1xuXG4gIHZhciBjaGlsZE5vZGUgPSBjaGlsZHJlbjsgLy8gV3JhcHBlciB3aGVuIG11bHRpcGxlIGNoaWxkcmVuXG5cbiAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDEpIHtcbiAgICBjaGlsZE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudFwiKVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfSAvLyBNb2JpbGUgc3VwcG9ydCBhZGRpdGlvbmFsIHJlbmRlclxuXG5cbiAgaWYgKHBvcHVwUmVuZGVyKSB7XG4gICAgY2hpbGROb2RlID0gcG9wdXBSZW5kZXIoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIF9leHRlbmRzKHtcbiAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgIHJlZjogZWxlbWVudFJlZixcbiAgICByZW1vdmVPbkxlYXZlOiB0cnVlXG4gIH0sIHBvcHVwTW90aW9uKSwgZnVuY3Rpb24gKF9yZWYsIG1vdGlvblJlZikge1xuICAgIHZhciBtb3Rpb25DbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgbW90aW9uU3R5bGUgPSBfcmVmLnN0eWxlO1xuICAgIHZhciBtZXJnZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgcG9wdXBDbGFzc05hbWUsIG1vdGlvbkNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogbW90aW9uUmVmLFxuICAgICAgY2xhc3NOYW1lOiBtZXJnZWRDbGFzc05hbWUsXG4gICAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtb3Rpb25TdHlsZSksIG1lcmdlZFN0eWxlKVxuICAgIH0sIGNoaWxkTm9kZSk7XG4gIH0pO1xufSk7XG5Nb2JpbGVQb3B1cElubmVyLmRpc3BsYXlOYW1lID0gJ01vYmlsZVBvcHVwSW5uZXInO1xuZXhwb3J0IGRlZmF1bHQgTW9iaWxlUG9wdXBJbm5lcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxpZ24gZnJvbSAncmMtYWxpZ24nO1xuaW1wb3J0IENTU01vdGlvbiBmcm9tICdyYy1tb3Rpb24nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdXNlVmlzaWJsZVN0YXR1cyBmcm9tICcuL3VzZVZpc2libGVTdGF0dXMnO1xuaW1wb3J0IHsgZ2V0TW90aW9uIH0gZnJvbSAnLi4vdXRpbHMvbGVnYWN5VXRpbCc7XG5pbXBvcnQgdXNlU3RyZXRjaFN0eWxlIGZyb20gJy4vdXNlU3RyZXRjaFN0eWxlJztcbnZhciBQb3B1cElubmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB6SW5kZXggPSBwcm9wcy56SW5kZXgsXG4gICAgICBzdHJldGNoID0gcHJvcHMuc3RyZXRjaCxcbiAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZSA9IHByb3BzLmRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgIGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBwb2ludCA9IHByb3BzLnBvaW50LFxuICAgICAgZ2V0Um9vdERvbU5vZGUgPSBwcm9wcy5nZXRSb290RG9tTm9kZSxcbiAgICAgIGdldENsYXNzTmFtZUZyb21BbGlnbiA9IHByb3BzLmdldENsYXNzTmFtZUZyb21BbGlnbixcbiAgICAgIG9uQWxpZ24gPSBwcm9wcy5vbkFsaWduLFxuICAgICAgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZURvd24gPSBwcm9wcy5vbk1vdXNlRG93bixcbiAgICAgIG9uVG91Y2hTdGFydCA9IHByb3BzLm9uVG91Y2hTdGFydDtcbiAgdmFyIGFsaWduUmVmID0gdXNlUmVmKCk7XG4gIHZhciBlbGVtZW50UmVmID0gdXNlUmVmKCk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGFsaWduZWRDbGFzc05hbWUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0QWxpZ25lZENsYXNzTmFtZSA9IF91c2VTdGF0ZTJbMV07IC8vID09PT09PT09PT09PT09PT09PT09PT09IE1lYXN1cmUgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgX3VzZVN0cmV0Y2hTdHlsZSA9IHVzZVN0cmV0Y2hTdHlsZShzdHJldGNoKSxcbiAgICAgIF91c2VTdHJldGNoU3R5bGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0cmV0Y2hTdHlsZSwgMiksXG4gICAgICBzdHJldGNoU3R5bGUgPSBfdXNlU3RyZXRjaFN0eWxlMlswXSxcbiAgICAgIG1lYXN1cmVTdHJldGNoU3R5bGUgPSBfdXNlU3RyZXRjaFN0eWxlMlsxXTtcblxuICBmdW5jdGlvbiBkb01lYXN1cmUoKSB7XG4gICAgaWYgKHN0cmV0Y2gpIHtcbiAgICAgIG1lYXN1cmVTdHJldGNoU3R5bGUoZ2V0Um9vdERvbU5vZGUoKSk7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBTdGF0dXMgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgX3VzZVZpc2libGVTdGF0dXMgPSB1c2VWaXNpYmxlU3RhdHVzKHZpc2libGUsIGRvTWVhc3VyZSksXG4gICAgICBfdXNlVmlzaWJsZVN0YXR1czIgPSBfc2xpY2VkVG9BcnJheShfdXNlVmlzaWJsZVN0YXR1cywgMiksXG4gICAgICBzdGF0dXMgPSBfdXNlVmlzaWJsZVN0YXR1czJbMF0sXG4gICAgICBnb05leHRTdGF0dXMgPSBfdXNlVmlzaWJsZVN0YXR1czJbMV07IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBBbGlnbnMgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgcHJlcGFyZVJlc29sdmVSZWYgPSB1c2VSZWYoKTsgLy8gYHRhcmdldGAgb24gYHJjLWFsaWduYCBjYW4gYWNjZXB0IGFzIGEgZnVuY3Rpb24gdG8gZ2V0IHRoZSBiaW5kIGVsZW1lbnQgb3IgYSBwb2ludC5cbiAgLy8gcmVmOiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yYy1hbGlnblxuXG4gIGZ1bmN0aW9uIGdldEFsaWduVGFyZ2V0KCkge1xuICAgIGlmIChwb2ludCkge1xuICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiBnZXRSb290RG9tTm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmNlQWxpZ24oKSB7XG4gICAgdmFyIF9hbGlnblJlZiRjdXJyZW50O1xuXG4gICAgKF9hbGlnblJlZiRjdXJyZW50ID0gYWxpZ25SZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2FsaWduUmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hbGlnblJlZiRjdXJyZW50LmZvcmNlQWxpZ24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uSW50ZXJuYWxBbGlnbihwb3B1cERvbU5vZGUsIG1hdGNoQWxpZ24pIHtcbiAgICBpZiAoc3RhdHVzID09PSAnYWxpZ24nKSB7XG4gICAgICB2YXIgbmV4dEFsaWduZWRDbGFzc05hbWUgPSBnZXRDbGFzc05hbWVGcm9tQWxpZ24obWF0Y2hBbGlnbik7XG4gICAgICBzZXRBbGlnbmVkQ2xhc3NOYW1lKG5leHRBbGlnbmVkQ2xhc3NOYW1lKTsgLy8gUmVwZWF0IHVudGlsIG5vdCBtb3JlIGFsaWduIG5lZWRlZFxuXG4gICAgICBpZiAoYWxpZ25lZENsYXNzTmFtZSAhPT0gbmV4dEFsaWduZWRDbGFzc05hbWUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yY2VBbGlnbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdvTmV4dFN0YXR1cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF9wcmVwYXJlUmVzb2x2ZVJlZiRjdTtcblxuICAgICAgICAgIChfcHJlcGFyZVJlc29sdmVSZWYkY3UgPSBwcmVwYXJlUmVzb2x2ZVJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfcHJlcGFyZVJlc29sdmVSZWYkY3UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcmVwYXJlUmVzb2x2ZVJlZiRjdS5jYWxsKHByZXBhcmVSZXNvbHZlUmVmKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG9uQWxpZ24gPT09IG51bGwgfHwgb25BbGlnbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25BbGlnbihwb3B1cERvbU5vZGUsIG1hdGNoQWxpZ24pO1xuICAgIH1cbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gTW90aW9uID09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIG1vdGlvbiA9IF9vYmplY3RTcHJlYWQoe30sIGdldE1vdGlvbihwcm9wcykpO1xuXG4gIFsnb25BcHBlYXJFbmQnLCAnb25FbnRlckVuZCcsICdvbkxlYXZlRW5kJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdmFyIG9yaWdpbkhhbmRsZXIgPSBtb3Rpb25bZXZlbnROYW1lXTtcblxuICAgIG1vdGlvbltldmVudE5hbWVdID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgICBnb05leHRTdGF0dXMoKTtcbiAgICAgIHJldHVybiBvcmlnaW5IYW5kbGVyID09PSBudWxsIHx8IG9yaWdpbkhhbmRsZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbkhhbmRsZXIoZWxlbWVudCwgZXZlbnQpO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uU2hvd1ByZXBhcmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBwcmVwYXJlUmVzb2x2ZVJlZi5jdXJyZW50ID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgfSAvLyBHbyB0byBzdGFibGUgZGlyZWN0bHkgd2hlbiBtb3Rpb24gbm90IHByb3ZpZGVkXG5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbW90aW9uLm1vdGlvbk5hbWUgJiYgc3RhdHVzID09PSAnbW90aW9uJykge1xuICAgICAgZ29OZXh0U3RhdHVzKCk7XG4gICAgfVxuICB9LCBbbW90aW9uLm1vdGlvbk5hbWUsIHN0YXR1c10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IFJlZnMgPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcmNlQWxpZ246IGZvcmNlQWxpZ24sXG4gICAgICBnZXRFbGVtZW50OiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFJlZi5jdXJyZW50O1xuICAgICAgfVxuICAgIH07XG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBtZXJnZWRTdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHJldGNoU3R5bGUpLCB7fSwge1xuICAgIHpJbmRleDogekluZGV4XG4gIH0sIHN0eWxlKSwge30sIHtcbiAgICBvcGFjaXR5OiBzdGF0dXMgPT09ICdtb3Rpb24nIHx8IHN0YXR1cyA9PT0gJ3N0YWJsZScgfHwgIXZpc2libGUgPyB1bmRlZmluZWQgOiAwLFxuICAgIHBvaW50ZXJFdmVudHM6IHN0YXR1cyA9PT0gJ3N0YWJsZScgPyB1bmRlZmluZWQgOiAnbm9uZSdcbiAgfSk7IC8vIEFsaWduIHN0YXR1c1xuXG5cbiAgdmFyIGFsaWduRGlzYWJsZWQgPSB0cnVlO1xuXG4gIGlmICgoYWxpZ24gPT09IG51bGwgfHwgYWxpZ24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFsaWduLnBvaW50cykgJiYgKHN0YXR1cyA9PT0gJ2FsaWduJyB8fCBzdGF0dXMgPT09ICdzdGFibGUnKSkge1xuICAgIGFsaWduRGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBjaGlsZE5vZGUgPSBjaGlsZHJlbjsgLy8gV3JhcHBlciB3aGVuIG11bHRpcGxlIGNoaWxkcmVuXG5cbiAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDEpIHtcbiAgICBjaGlsZE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudFwiKVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIF9leHRlbmRzKHtcbiAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgIHJlZjogZWxlbWVudFJlZixcbiAgICBsZWF2ZWRDbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGlkZGVuXCIpXG4gIH0sIG1vdGlvbiwge1xuICAgIG9uQXBwZWFyUHJlcGFyZTogb25TaG93UHJlcGFyZSxcbiAgICBvbkVudGVyUHJlcGFyZTogb25TaG93UHJlcGFyZSxcbiAgICByZW1vdmVPbkxlYXZlOiBkZXN0cm95UG9wdXBPbkhpZGVcbiAgfSksIGZ1bmN0aW9uIChfcmVmLCBtb3Rpb25SZWYpIHtcbiAgICB2YXIgbW90aW9uQ2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICAgIG1vdGlvblN0eWxlID0gX3JlZi5zdHlsZTtcbiAgICB2YXIgbWVyZ2VkQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSwgYWxpZ25lZENsYXNzTmFtZSwgbW90aW9uQ2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWxpZ24sIHtcbiAgICAgIHRhcmdldDogZ2V0QWxpZ25UYXJnZXQoKSxcbiAgICAgIGtleTogXCJwb3B1cFwiLFxuICAgICAgcmVmOiBhbGlnblJlZixcbiAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICBkaXNhYmxlZDogYWxpZ25EaXNhYmxlZCxcbiAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgIG9uQWxpZ246IG9uSW50ZXJuYWxBbGlnblxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogbW90aW9uUmVmLFxuICAgICAgY2xhc3NOYW1lOiBtZXJnZWRDbGFzc05hbWUsXG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZURvd25DYXB0dXJlOiBvbk1vdXNlRG93bixcbiAgICAgIG9uVG91Y2hTdGFydENhcHR1cmU6IG9uVG91Y2hTdGFydCxcbiAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1vdGlvblN0eWxlKSwgbWVyZ2VkU3R5bGUpXG4gICAgfSwgY2hpbGROb2RlKSk7XG4gIH0pO1xufSk7XG5Qb3B1cElubmVyLmRpc3BsYXlOYW1lID0gJ1BvcHVwSW5uZXInO1xuZXhwb3J0IGRlZmF1bHQgUG9wdXBJbm5lcjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzTW9iaWxlIGZyb20gXCJyYy11dGlsL2VzL2lzTW9iaWxlXCI7XG5pbXBvcnQgTWFzayBmcm9tICcuL01hc2snO1xuaW1wb3J0IFBvcHVwSW5uZXIgZnJvbSAnLi9Qb3B1cElubmVyJztcbmltcG9ydCBNb2JpbGVQb3B1cElubmVyIGZyb20gJy4vTW9iaWxlUG9wdXBJbm5lcic7XG52YXIgUG9wdXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciB2aXNpYmxlID0gX3JlZi52aXNpYmxlLFxuICAgICAgbW9iaWxlID0gX3JlZi5tb2JpbGUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ2aXNpYmxlXCIsIFwibW9iaWxlXCJdKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUodmlzaWJsZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGlubmVyVmlzaWJsZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXJJbm5lclZpc2libGUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgaW5Nb2JpbGUgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0SW5Nb2JpbGUgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBjbG9uZVByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgdmlzaWJsZTogaW5uZXJWaXNpYmxlXG4gIH0pOyAvLyBXZSBjaGVjayBtb2JpbGUgaW4gdmlzaWJsZSBjaGFuZ2VkIGhlcmUuXG4gIC8vIEFuZCB0aGlzIGFsc28gZGVsYXkgc2V0IGBpbm5lclZpc2libGVgIHRvIGF2b2lkIHBvcHVwIGNvbXBvbmVudCByZW5kZXIgZmxhc2hcblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2VySW5uZXJWaXNpYmxlKHZpc2libGUpO1xuXG4gICAgaWYgKHZpc2libGUgJiYgbW9iaWxlKSB7XG4gICAgICBzZXRJbk1vYmlsZShpc01vYmlsZSgpKTtcbiAgICB9XG4gIH0sIFt2aXNpYmxlLCBtb2JpbGVdKTtcbiAgdmFyIHBvcHVwTm9kZSA9IGluTW9iaWxlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9iaWxlUG9wdXBJbm5lciwgX2V4dGVuZHMoe30sIGNsb25lUHJvcHMsIHtcbiAgICBtb2JpbGU6IG1vYmlsZSxcbiAgICByZWY6IHJlZlxuICB9KSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3B1cElubmVyLCBfZXh0ZW5kcyh7fSwgY2xvbmVQcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pKTsgLy8gV2UgY2FuIHVzZSBmcmFnbWVudCBkaXJlY3RseSBidXQgdGhpcyBtYXkgZmFpbGVkIHNvbWUgc2VsZWN0b3IgdXNhZ2UuIEtlZXAgYXMgb3JpZ2luIGxvZ2ljXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1hc2ssIGNsb25lUHJvcHMpLCBwb3B1cE5vZGUpO1xufSk7XG5Qb3B1cC5kaXNwbGF5TmFtZSA9ICdQb3B1cCc7XG5leHBvcnQgZGVmYXVsdCBQb3B1cDsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoc3RyZXRjaCkge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9KSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgdGFyZ2V0U2l6ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRUYXJnZXRTaXplID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBmdW5jdGlvbiBtZWFzdXJlU3RyZXRjaChlbGVtZW50KSB7XG4gICAgc2V0VGFyZ2V0U2l6ZSh7XG4gICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9KTtcbiAgfSAvLyBNZXJnZSBzdHJldGNoIHN0eWxlXG5cblxuICB2YXIgc3R5bGUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2l6ZVN0eWxlID0ge307XG5cbiAgICBpZiAoc3RyZXRjaCkge1xuICAgICAgdmFyIHdpZHRoID0gdGFyZ2V0U2l6ZS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSB0YXJnZXRTaXplLmhlaWdodDsgLy8gU3RyZXRjaCB3aXRoIHRhcmdldFxuXG4gICAgICBpZiAoc3RyZXRjaC5pbmRleE9mKCdoZWlnaHQnKSAhPT0gLTEgJiYgaGVpZ2h0KSB7XG4gICAgICAgIHNpemVTdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHN0cmV0Y2guaW5kZXhPZignbWluSGVpZ2h0JykgIT09IC0xICYmIGhlaWdodCkge1xuICAgICAgICBzaXplU3R5bGUubWluSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RyZXRjaC5pbmRleE9mKCd3aWR0aCcpICE9PSAtMSAmJiB3aWR0aCkge1xuICAgICAgICBzaXplU3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoc3RyZXRjaC5pbmRleE9mKCdtaW5XaWR0aCcpICE9PSAtMSAmJiB3aWR0aCkge1xuICAgICAgICBzaXplU3R5bGUubWluV2lkdGggPSB3aWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZVN0eWxlO1xuICB9LCBbc3RyZXRjaCwgdGFyZ2V0U2l6ZV0pO1xuICByZXR1cm4gW3N0eWxlLCBtZWFzdXJlU3RyZXRjaF07XG59KTsiLCJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIjtcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvclwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmFmIGZyb20gXCJyYy11dGlsL2VzL3JhZlwiO1xudmFyIFN0YXR1c1F1ZXVlID0gWydtZWFzdXJlJywgJ2FsaWduJywgbnVsbCwgJ21vdGlvbiddO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICh2aXNpYmxlLCBkb01lYXN1cmUpIHtcbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzdGF0dXMgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW50ZXJuYWxTdGF0dXMgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciByYWZSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGRlc3Ryb3lSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXR1cyhuZXh0U3RhdHVzKSB7XG4gICAgaWYgKCFkZXN0cm95UmVmLmN1cnJlbnQpIHtcbiAgICAgIHNldEludGVybmFsU3RhdHVzKG5leHRTdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbFJhZigpIHtcbiAgICByYWYuY2FuY2VsKHJhZlJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvTmV4dFN0YXR1cyhjYWxsYmFjaykge1xuICAgIGNhbmNlbFJhZigpO1xuICAgIHJhZlJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIE9ubHkgYWxpZ24gc2hvdWxkIGJlIG1hbnVhbGx5IHRyaWdnZXJcbiAgICAgIHNldFN0YXR1cyhmdW5jdGlvbiAocHJldikge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgIGNhc2UgJ2FsaWduJzpcbiAgICAgICAgICAgIHJldHVybiAnbW90aW9uJztcblxuICAgICAgICAgIGNhc2UgJ21vdGlvbic6XG4gICAgICAgICAgICByZXR1cm4gJ3N0YWJsZSc7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9KTtcbiAgICAgIGNhbGxiYWNrID09PSBudWxsIHx8IGNhbGxiYWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9IC8vIEluaXQgc3RhdHVzXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldFN0YXR1cygnbWVhc3VyZScpO1xuICB9LCBbdmlzaWJsZV0pOyAvLyBHbyBuZXh0IHN0YXR1c1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ21lYXN1cmUnOlxuICAgICAgICBkb01lYXN1cmUoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cykge1xuICAgICAgcmFmUmVmLmN1cnJlbnQgPSByYWYoIC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICB2YXIgaW5kZXgsIG5leHRTdGF0dXM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaW5kZXggPSBTdGF0dXNRdWV1ZS5pbmRleE9mKHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXR1cyA9IFN0YXR1c1F1ZXVlW2luZGV4ICsgMV07XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dFN0YXR1cyAmJiBpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHNldFN0YXR1cyhuZXh0U3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUpO1xuICAgICAgfSkpKTtcbiAgICB9XG4gIH0sIFtzdGF0dXNdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZGVzdHJveVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIGNhbmNlbFJhZigpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtzdGF0dXMsIGdvTmV4dFN0YXR1c107XG59KTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgVHJpZ2dlckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXJDb250ZXh0OyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2NvbnRhaW5zXCI7XG5pbXBvcnQgZmluZERPTU5vZGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2ZpbmRET01Ob2RlXCI7XG5pbXBvcnQgeyBjb21wb3NlUmVmLCBzdXBwb3J0UmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IFBvcnRhbCBmcm9tIFwicmMtdXRpbC9lcy9Qb3J0YWxcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0QWxpZ25Gcm9tUGxhY2VtZW50LCBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lIH0gZnJvbSAnLi91dGlscy9hbGlnblV0aWwnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IFRyaWdnZXJDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiByZXR1cm5FbXB0eVN0cmluZygpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Eb2N1bWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XG59XG5cbnZhciBBTExfSEFORExFUlMgPSBbJ29uQ2xpY2snLCAnb25Nb3VzZURvd24nLCAnb25Ub3VjaFN0YXJ0JywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlTGVhdmUnLCAnb25Gb2N1cycsICdvbkJsdXInLCAnb25Db250ZXh0TWVudSddO1xuLyoqXG4gKiBJbnRlcm5hbCB1c2FnZS4gRG8gbm90IHVzZSBpbiB5b3VyIGNvZGUgc2luY2UgdGhpcyB3aWxsIGJlIHJlbW92ZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVHJpZ2dlcihQb3J0YWxDb21wb25lbnQpIHtcbiAgdmFyIFRyaWdnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVHJpZ2dlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRyaWdnZXIpO1xuXG4gICAgZnVuY3Rpb24gVHJpZ2dlcihwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZ2dlcik7XG5cbiAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgX3RoaXMucG9wdXBSZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICBfdGhpcy50cmlnZ2VyUmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgICBfdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbW91c2VFbnRlckRlbGF5ID0gX3RoaXMucHJvcHMubW91c2VFbnRlckRlbGF5O1xuXG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uTW91c2VFbnRlcicsIGUpO1xuXG4gICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKHRydWUsIG1vdXNlRW50ZXJEZWxheSwgbW91c2VFbnRlckRlbGF5ID8gbnVsbCA6IGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlTW92ZScsIGUpO1xuXG4gICAgICAgIF90aGlzLnNldFBvaW50KGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZUxlYXZlJywgZSk7XG5cbiAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzLnByb3BzLm1vdXNlTGVhdmVEZWxheSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblBvcHVwTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblBvcHVwTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwb3B1cFJlZiRjdXJyZW47XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL3B1bGwvMTNcbiAgICAgICAgLy8gcmVhY3QgYnVnP1xuICAgICAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ICYmICFlLnJlbGF0ZWRUYXJnZXQuc2V0VGltZW91dCAmJiBjb250YWlucygoX3RoaXMkcG9wdXBSZWYkY3VycmVuID0gX3RoaXMucG9wdXBSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3RoaXMkcG9wdXBSZWYkY3VycmVuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwb3B1cFJlZiRjdXJyZW4uZ2V0RWxlbWVudCgpLCBlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzLnByb3BzLm1vdXNlTGVhdmVEZWxheSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Gb2N1cycsIGUpOyAvLyBpbmNhc2UgZm9jdXNpbiBhbmQgZm9jdXNvdXRcblxuXG4gICAgICAgIF90aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc0ZvY3VzVG9TaG93KCkpIHtcbiAgICAgICAgICBfdGhpcy5mb2N1c1RpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgX3RoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgX3RoaXMucHJvcHMuZm9jdXNEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Nb3VzZURvd24nLCBlKTtcblxuICAgICAgICBfdGhpcy5wcmVDbGlja1RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMuZmlyZUV2ZW50cygnb25Ub3VjaFN0YXJ0JywgZSk7XG5cbiAgICAgICAgX3RoaXMucHJlVG91Y2hUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uQmx1cicsIGUpO1xuXG4gICAgICAgIF90aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChfdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgICAgIF90aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpcy5wcm9wcy5ibHVyRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uQ29udGV4dE1lbnUnLCBlKTtcblxuICAgICAgICBfdGhpcy5zZXRQb3B1cFZpc2libGUodHJ1ZSwgZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoJ29uQ2xpY2snLCBldmVudCk7IC8vIGZvY3VzIHdpbGwgdHJpZ2dlciBjbGlja1xuXG5cbiAgICAgICAgaWYgKF90aGlzLmZvY3VzVGltZSkge1xuICAgICAgICAgIHZhciBwcmVUaW1lO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByZUNsaWNrVGltZSAmJiBfdGhpcy5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgICAgIHByZVRpbWUgPSBNYXRoLm1pbihfdGhpcy5wcmVDbGlja1RpbWUsIF90aGlzLnByZVRvdWNoVGltZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5wcmVDbGlja1RpbWUpIHtcbiAgICAgICAgICAgIHByZVRpbWUgPSBfdGhpcy5wcmVDbGlja1RpbWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgICAgIHByZVRpbWUgPSBfdGhpcy5wcmVUb3VjaFRpbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKE1hdGguYWJzKHByZVRpbWUgLSBfdGhpcy5mb2N1c1RpbWUpIDwgMjApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c1RpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucHJlQ2xpY2tUaW1lID0gMDtcbiAgICAgICAgX3RoaXMucHJlVG91Y2hUaW1lID0gMDsgLy8gT25seSBwcmV2ZW50IGRlZmF1bHQgd2hlbiBhbGwgdGhlIGFjdGlvbiBpcyBjbGljay5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTcwNDNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTcyOTFcblxuICAgICAgICBpZiAoX3RoaXMuaXNDbGlja1RvU2hvdygpICYmIChfdGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgX3RoaXMuaXNCbHVyVG9IaWRlKCkpICYmIGV2ZW50ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0VmlzaWJsZSA9ICFfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG5cbiAgICAgICAgaWYgKF90aGlzLmlzQ2xpY2tUb0hpZGUoKSAmJiAhbmV4dFZpc2libGUgfHwgbmV4dFZpc2libGUgJiYgX3RoaXMuaXNDbGlja1RvU2hvdygpKSB7XG4gICAgICAgICAgX3RoaXMuc2V0UG9wdXBWaXNpYmxlKCFfdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Qb3B1cE1vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuaGFzUG9wdXBNb3VzZURvd24gPSB0cnVlO1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMubW91c2VEb3duVGltZW91dCk7XG4gICAgICAgIF90aGlzLm1vdXNlRG93blRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuaGFzUG9wdXBNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkY29udGV4dDtcblxuICAgICAgICAgIChfdGhpcyRjb250ZXh0ID0gX3RoaXMuY29udGV4dCkub25Qb3B1cE1vdXNlRG93bi5hcHBseShfdGhpcyRjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm1hc2sgJiYgIV90aGlzLnByb3BzLm1hc2tDbG9zYWJsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgdmFyIHJvb3QgPSBfdGhpcy5nZXRSb290RG9tTm9kZSgpO1xuXG4gICAgICAgIHZhciBwb3B1cE5vZGUgPSBfdGhpcy5nZXRQb3B1cERvbU5vZGUoKTtcblxuICAgICAgICBpZiAoIWNvbnRhaW5zKHJvb3QsIHRhcmdldCkgJiYgIWNvbnRhaW5zKHBvcHVwTm9kZSwgdGFyZ2V0KSAmJiAhX3RoaXMuaGFzUG9wdXBNb3VzZURvd24pIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRSb290RG9tTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdldFRyaWdnZXJET01Ob2RlID0gX3RoaXMucHJvcHMuZ2V0VHJpZ2dlckRPTU5vZGU7XG5cbiAgICAgICAgaWYgKGdldFRyaWdnZXJET01Ob2RlKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFRyaWdnZXJET01Ob2RlKF90aGlzLnRyaWdnZXJSZWYuY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBkb21Ob2RlID0gZmluZERPTU5vZGUoX3RoaXMudHJpZ2dlclJlZi5jdXJyZW50KTtcblxuICAgICAgICAgIGlmIChkb21Ob2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tTm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikgey8vIERvIG5vdGhpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IGZ1bmN0aW9uIChhbGlnbikge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gW107XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgcG9wdXBQbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5wb3B1cFBsYWNlbWVudCxcbiAgICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gX3RoaXMkcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBhbGlnblBvaW50ID0gX3RoaXMkcHJvcHMuYWxpZ25Qb2ludCxcbiAgICAgICAgICAgIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduID0gX3RoaXMkcHJvcHMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ247XG5cbiAgICAgICAgaWYgKHBvcHVwUGxhY2VtZW50ICYmIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgICAgICAgY2xhc3NOYW1lLnB1c2goZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZShidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbiwgYWxpZ25Qb2ludCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKSB7XG4gICAgICAgICAgY2xhc3NOYW1lLnB1c2goZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc05hbWUuam9pbignICcpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gX3RoaXMkcHJvcHMyLmRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICAgICAgb25Qb3B1cEFsaWduID0gX3RoaXMkcHJvcHMyLm9uUG9wdXBBbGlnbixcbiAgICAgICAgICAgIHBvcHVwTW90aW9uID0gX3RoaXMkcHJvcHMyLnBvcHVwTW90aW9uLFxuICAgICAgICAgICAgcG9wdXBBbmltYXRpb24gPSBfdGhpcyRwcm9wczIucG9wdXBBbmltYXRpb24sXG4gICAgICAgICAgICBwb3B1cFRyYW5zaXRpb25OYW1lID0gX3RoaXMkcHJvcHMyLnBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICBwb3B1cFN0eWxlID0gX3RoaXMkcHJvcHMyLnBvcHVwU3R5bGUsXG4gICAgICAgICAgICBtYXNrID0gX3RoaXMkcHJvcHMyLm1hc2ssXG4gICAgICAgICAgICBtYXNrQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMyLm1hc2tBbmltYXRpb24sXG4gICAgICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWUgPSBfdGhpcyRwcm9wczIubWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgbWFza01vdGlvbiA9IF90aGlzJHByb3BzMi5tYXNrTW90aW9uLFxuICAgICAgICAgICAgekluZGV4ID0gX3RoaXMkcHJvcHMyLnpJbmRleCxcbiAgICAgICAgICAgIHBvcHVwID0gX3RoaXMkcHJvcHMyLnBvcHVwLFxuICAgICAgICAgICAgc3RyZXRjaCA9IF90aGlzJHByb3BzMi5zdHJldGNoLFxuICAgICAgICAgICAgYWxpZ25Qb2ludCA9IF90aGlzJHByb3BzMi5hbGlnblBvaW50LFxuICAgICAgICAgICAgbW9iaWxlID0gX3RoaXMkcHJvcHMyLm1vYmlsZTtcbiAgICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgICBwb3B1cFZpc2libGUgPSBfdGhpcyRzdGF0ZS5wb3B1cFZpc2libGUsXG4gICAgICAgICAgICBwb2ludCA9IF90aGlzJHN0YXRlLnBvaW50O1xuXG4gICAgICAgIHZhciBhbGlnbiA9IF90aGlzLmdldFBvcHVwQWxpZ24oKTtcblxuICAgICAgICB2YXIgbW91c2VQcm9wcyA9IHt9O1xuXG4gICAgICAgIGlmIChfdGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUVudGVyID0gX3RoaXMub25Qb3B1cE1vdXNlRW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgICAgICBtb3VzZVByb3BzLm9uTW91c2VMZWF2ZSA9IF90aGlzLm9uUG9wdXBNb3VzZUxlYXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgbW91c2VQcm9wcy5vbk1vdXNlRG93biA9IF90aGlzLm9uUG9wdXBNb3VzZURvd247XG4gICAgICAgIG1vdXNlUHJvcHMub25Ub3VjaFN0YXJ0ID0gX3RoaXMub25Qb3B1cE1vdXNlRG93bjtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBvcHVwLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlOiBkZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgICAgdmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICAgIHBvaW50OiBhbGlnblBvaW50ICYmIHBvaW50LFxuICAgICAgICAgIGNsYXNzTmFtZTogcG9wdXBDbGFzc05hbWUsXG4gICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgIG9uQWxpZ246IG9uUG9wdXBBbGlnbixcbiAgICAgICAgICBhbmltYXRpb246IHBvcHVwQW5pbWF0aW9uLFxuICAgICAgICAgIGdldENsYXNzTmFtZUZyb21BbGlnbjogX3RoaXMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ25cbiAgICAgICAgfSwgbW91c2VQcm9wcywge1xuICAgICAgICAgIHN0cmV0Y2g6IHN0cmV0Y2gsXG4gICAgICAgICAgZ2V0Um9vdERvbU5vZGU6IF90aGlzLmdldFJvb3REb21Ob2RlLFxuICAgICAgICAgIHN0eWxlOiBwb3B1cFN0eWxlLFxuICAgICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgICAgekluZGV4OiB6SW5kZXgsXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgbWFza0FuaW1hdGlvbjogbWFza0FuaW1hdGlvbixcbiAgICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBtYXNrTW90aW9uOiBtYXNrTW90aW9uLFxuICAgICAgICAgIHJlZjogX3RoaXMucG9wdXBSZWYsXG4gICAgICAgICAgbW90aW9uOiBwb3B1cE1vdGlvbixcbiAgICAgICAgICBtb2JpbGU6IG1vYmlsZVxuICAgICAgICB9KSwgdHlwZW9mIHBvcHVwID09PSAnZnVuY3Rpb24nID8gcG9wdXAoKSA6IHBvcHVwKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmF0dGFjaFBhcmVudCA9IGZ1bmN0aW9uIChwb3B1cENvbnRhaW5lcikge1xuICAgICAgICByYWYuY2FuY2VsKF90aGlzLmF0dGFjaElkKTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfdGhpcyRwcm9wczMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICBnZXREb2N1bWVudCA9IF90aGlzJHByb3BzMy5nZXREb2N1bWVudDtcblxuICAgICAgICB2YXIgZG9tTm9kZSA9IF90aGlzLmdldFJvb3REb21Ob2RlKCk7XG5cbiAgICAgICAgdmFyIG1vdW50Tm9kZTtcblxuICAgICAgICBpZiAoIWdldFBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgICAgbW91bnROb2RlID0gZ2V0RG9jdW1lbnQoX3RoaXMuZ2V0Um9vdERvbU5vZGUoKSkuYm9keTtcbiAgICAgICAgfSBlbHNlIGlmIChkb21Ob2RlIHx8IGdldFBvcHVwQ29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIENvbXBhdGlibGUgZm9yIGxlZ2FjeSBnZXRQb3B1cENvbnRhaW5lciB3aXRoIGRvbU5vZGUgYXJndW1lbnQuXG4gICAgICAgICAgLy8gSWYgbm8gbmVlZCBgZG9tTm9kZWAgYXJndW1lbnQsIHdpbGwgY2FsbCBkaXJlY3RseS5cbiAgICAgICAgICAvLyBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvZWxvcXVlbnQtbWNsZWFuLXNzOTNtP2ZpbGU9L3NyYy9BcHAuanNcbiAgICAgICAgICBtb3VudE5vZGUgPSBnZXRQb3B1cENvbnRhaW5lcihkb21Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3VudE5vZGUpIHtcbiAgICAgICAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHJ5IGFmdGVyIGZyYW1lIHJlbmRlciBpbiBjYXNlIHBhcmVudCBub3QgcmVhZHlcbiAgICAgICAgICBfdGhpcy5hdHRhY2hJZCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hdHRhY2hQYXJlbnQocG9wdXBDb250YWluZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnZXREb2N1bWVudCA9IF90aGlzLnByb3BzLmdldERvY3VtZW50O1xuICAgICAgICB2YXIgcG9wdXBDb250YWluZXIgPSBnZXREb2N1bWVudChfdGhpcy5nZXRSb290RG9tTm9kZSgpKS5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gTWFrZSBzdXJlIGRlZmF1bHQgcG9wdXAgY29udGFpbmVyIHdpbGwgbmV2ZXIgY2F1c2Ugc2Nyb2xsYmFyIGFwcGVhcmluZ1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvaXNzdWVzLzQxXG5cbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBwb3B1cENvbnRhaW5lci5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXG4gICAgICAgIF90aGlzLmF0dGFjaFBhcmVudChwb3B1cENvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHBvcHVwQ29udGFpbmVyO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2V0UG9pbnQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgdmFyIGFsaWduUG9pbnQgPSBfdGhpcy5wcm9wcy5hbGlnblBvaW50O1xuICAgICAgICBpZiAoIWFsaWduUG9pbnQgfHwgIXBvaW50KSByZXR1cm47XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICBwYWdlWDogcG9pbnQucGFnZVgsXG4gICAgICAgICAgICBwYWdlWTogcG9pbnQucGFnZVlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlUG9ydGFsVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuc3RhdGUucHJldlBvcHVwVmlzaWJsZSAhPT0gX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMuYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UoX3RoaXMuc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIHBvcHVwVmlzaWJsZTtcblxuICAgICAgaWYgKCdwb3B1cFZpc2libGUnIGluIHByb3BzKSB7XG4gICAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMucG9wdXBWaXNpYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5kZWZhdWx0UG9wdXBWaXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgcHJldlBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgICAgfTtcbiAgICAgIEFMTF9IQU5ETEVSUy5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIF90aGlzW1wiZmlyZVwiLmNvbmNhdChoKV0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIF90aGlzLmZpcmVFdmVudHMoaCwgZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVHJpZ2dlciwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7IC8vIFdlIG11c3QgbGlzdGVuIHRvIGBtb3VzZWRvd25gIG9yIGB0b3VjaHN0YXJ0YCwgZWRnZSBjYXNlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81ODA0XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvY2FsZW5kYXIvaXNzdWVzLzI1MFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvaXNzdWVzLzUwXG5cbiAgICAgICAgaWYgKHN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIHZhciBjdXJyZW50RG9jdW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciAmJiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpKSB7XG4gICAgICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBwcm9wcy5nZXREb2N1bWVudCh0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICAgICAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICAgICAgfSAvLyBhbHdheXMgaGlkZSBvbiBtb2JpbGVcblxuXG4gICAgICAgICAgaWYgKCF0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIGN1cnJlbnREb2N1bWVudCA9IGN1cnJlbnREb2N1bWVudCB8fCBwcm9wcy5nZXREb2N1bWVudCh0aGlzLmdldFJvb3REb21Ob2RlKCkpO1xuICAgICAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICAgIH0gLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCBkb2N1bWVudCBpcyBzY3JvbGxpbmcuXG5cblxuICAgICAgICAgIGlmICghdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSAmJiB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KHRoaXMuZ2V0Um9vdERvbU5vZGUoKSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLm9uQ29udGV4dE1lbnVDbG9zZSk7XG4gICAgICAgICAgfSAvLyBjbG9zZSBwb3B1cCB3aGVuIHRyaWdnZXIgdHlwZSBjb250YWlucyAnb25Db250ZXh0TWVudScgYW5kIHdpbmRvdyBpcyBibHVyLlxuXG5cbiAgICAgICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgPSBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2JsdXInLCB0aGlzLm9uQ29udGV4dE1lbnVDbG9zZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICAgIHRoaXMuY2xlYXJPdXRzaWRlSGFuZGxlcigpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgICAgICAgcmFmLmNhbmNlbCh0aGlzLmF0dGFjaElkKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UG9wdXBEb21Ob2RlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgICB2YXIgX3RoaXMkcG9wdXBSZWYkY3VycmVuMjtcblxuICAgICAgICAvLyBmb3IgdGVzdFxuICAgICAgICByZXR1cm4gKChfdGhpcyRwb3B1cFJlZiRjdXJyZW4yID0gdGhpcy5wb3B1cFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfdGhpcyRwb3B1cFJlZiRjdXJyZW4yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwb3B1cFJlZiRjdXJyZW4yLmdldEVsZW1lbnQoKSkgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0UG9wdXBBbGlnblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwQWxpZ24oKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICAgICAgcG9wdXBBbGlnbiA9IHByb3BzLnBvcHVwQWxpZ24sXG4gICAgICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzO1xuXG4gICAgICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgICAgIHJldHVybiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBvcHVwUGxhY2VtZW50LCBwb3B1cEFsaWduKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3B1cEFsaWduO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0gcG9wdXBWaXNpYmxlICAgIFNob3cgb3Igbm90IHRoZSBwb3B1cCBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0gZXZlbnQgICAgICAgICAgIFN5bnRoZXRpY0V2ZW50LCB1c2VkIGZvciBgcG9pbnRBbGlnbmBcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldFBvcHVwVmlzaWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUsIGV2ZW50KSB7XG4gICAgICAgIHZhciBhbGlnblBvaW50ID0gdGhpcy5wcm9wcy5hbGlnblBvaW50O1xuICAgICAgICB2YXIgcHJldlBvcHVwVmlzaWJsZSA9IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChwcmV2UG9wdXBWaXNpYmxlICE9PSBwb3B1cFZpc2libGUpIHtcbiAgICAgICAgICBpZiAoISgncG9wdXBWaXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICAgICAgICBwcmV2UG9wdXBWaXNpYmxlOiBwcmV2UG9wdXBWaXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnByb3BzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlKHBvcHVwVmlzaWJsZSk7XG4gICAgICAgIH0gLy8gQWx3YXlzIHJlY29yZCB0aGUgcG9pbnQgcG9zaXRpb24gc2luY2UgbW91c2VFbnRlckRlbGF5IHdpbGwgZGVsYXkgdGhlIHNob3dcblxuXG4gICAgICAgIGlmIChhbGlnblBvaW50ICYmIGV2ZW50ICYmIHBvcHVwVmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuc2V0UG9pbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlbGF5U2V0UG9wdXBWaXNpYmxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVsYXlTZXRQb3B1cFZpc2libGUodmlzaWJsZSwgZGVsYXlTLCBldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZGVsYXkgPSBkZWxheVMgKiAxMDAwO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuXG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgIHZhciBwb2ludCA9IGV2ZW50ID8ge1xuICAgICAgICAgICAgcGFnZVg6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBwb2ludCk7XG5cbiAgICAgICAgICAgIF90aGlzMi5jbGVhckRlbGF5VGltZXIoKTtcbiAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRQb3B1cFZpc2libGUodmlzaWJsZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsZWFyRGVsYXlUaW1lclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xlYXJPdXRzaWRlSGFuZGxlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyT3V0c2lkZUhhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxKSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMS5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyKSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMi5yZW1vdmUoKTtcbiAgICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjcmVhdGVUd29DaGFpbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVUd29DaGFpbnMoZXZlbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkUHJvcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGNoaWxkUHJvc1tldmVudF0gJiYgcHJvcHNbZXZlbnRdKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbXCJmaXJlXCIuY29uY2F0KGV2ZW50KV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9zW2V2ZW50XSB8fCBwcm9wc1tldmVudF07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQ2xpY2tUb1Nob3dcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NsaWNrVG9TaG93KCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzNC5hY3Rpb24sXG4gICAgICAgICAgICBzaG93QWN0aW9uID0gX3RoaXMkcHJvcHM0LnNob3dBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNDb250ZXh0TWVudVRvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ29udGV4dE1lbnVUb1Nob3coKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHM1LmFjdGlvbixcbiAgICAgICAgICAgIHNob3dBY3Rpb24gPSBfdGhpcyRwcm9wczUuc2hvd0FjdGlvbjtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjb250ZXh0TWVudScpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0NsaWNrVG9IaWRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGlja1RvSGlkZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczYuYWN0aW9uLFxuICAgICAgICAgICAgaGlkZUFjdGlvbiA9IF90aGlzJHByb3BzNi5oaWRlQWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzTW91c2VFbnRlclRvU2hvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzTW91c2VFbnRlclRvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczcuYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzNy5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignbW91c2VFbnRlcicpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNNb3VzZUxlYXZlVG9IaWRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb3VzZUxlYXZlVG9IaWRlKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF90aGlzJHByb3BzOC5hY3Rpb24sXG4gICAgICAgICAgICBoaWRlQWN0aW9uID0gX3RoaXMkcHJvcHM4LmhpZGVBY3Rpb247XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdtb3VzZUxlYXZlJykgIT09IC0xO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc0ZvY3VzVG9TaG93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNGb2N1c1RvU2hvdygpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfdGhpcyRwcm9wczkuYWN0aW9uLFxuICAgICAgICAgICAgc2hvd0FjdGlvbiA9IF90aGlzJHByb3BzOS5zaG93QWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTE7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImlzQmx1clRvSGlkZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQmx1clRvSGlkZSgpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3RoaXMkcHJvcHMxMC5hY3Rpb24sXG4gICAgICAgICAgICBoaWRlQWN0aW9uID0gX3RoaXMkcHJvcHMxMC5oaWRlQWN0aW9uO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignYmx1cicpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZm9yY2VQb3B1cEFsaWduXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZm9yY2VQb3B1cEFsaWduKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkcG9wdXBSZWYkY3VycmVuMztcblxuICAgICAgICAgIChfdGhpcyRwb3B1cFJlZiRjdXJyZW4zID0gdGhpcy5wb3B1cFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfdGhpcyRwb3B1cFJlZiRjdXJyZW4zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRwb3B1cFJlZiRjdXJyZW4zLmZvcmNlQWxpZ24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmaXJlRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmlyZUV2ZW50cyh0eXBlLCBlKSB7XG4gICAgICAgIHZhciBjaGlsZENhbGxiYWNrID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wc1t0eXBlXTtcblxuICAgICAgICBpZiAoY2hpbGRDYWxsYmFjaykge1xuICAgICAgICAgIGNoaWxkQ2FsbGJhY2soZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLnByb3BzW3R5cGVdO1xuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcG9wdXBWaXNpYmxlID0gdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wczExID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMxMS5jaGlsZHJlbixcbiAgICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMxMS5mb3JjZVJlbmRlcixcbiAgICAgICAgICAgIGFsaWduUG9pbnQgPSBfdGhpcyRwcm9wczExLmFsaWduUG9pbnQsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczExLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGF1dG9EZXN0cm95ID0gX3RoaXMkcHJvcHMxMS5hdXRvRGVzdHJveTtcbiAgICAgICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIHZhciBuZXdDaGlsZFByb3BzID0ge1xuICAgICAgICAgIGtleTogJ3RyaWdnZXInXG4gICAgICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBWaXNpYmxlIEhhbmRsZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyA+Pj4gQ29udGV4dE1lbnVcblxuICAgICAgICBpZiAodGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uQ29udGV4dE1lbnUgPSB0aGlzLm9uQ29udGV4dE1lbnU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ29udGV4dE1lbnUnKTtcbiAgICAgICAgfSAvLyA+Pj4gQ2xpY2tcblxuXG4gICAgICAgIGlmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCB0aGlzLmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMub25DbGljaztcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bjtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMub25Ub3VjaFN0YXJ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkNsaWNrJyk7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRG93bicpO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uVG91Y2hTdGFydCcpO1xuICAgICAgICB9IC8vID4+PiBIb3ZlcihlbnRlcilcblxuXG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VFbnRlclRvU2hvdygpKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlcjsgLy8gUG9pbnQgYWxpZ25cblxuICAgICAgICAgIGlmIChhbGlnblBvaW50KSB7XG4gICAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZUVudGVyJyk7XG4gICAgICAgIH0gLy8gPj4+IEhvdmVyKGxlYXZlKVxuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VMZWF2ZScpO1xuICAgICAgICB9IC8vID4+PiBGb2N1c1xuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNGb2N1c1RvU2hvdygpIHx8IHRoaXMuaXNCbHVyVG9IaWRlKCkpIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXM7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Gb2N1cycpO1xuICAgICAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQmx1cicpO1xuICAgICAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICAgICAgdmFyIGNoaWxkcmVuQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhjaGlsZCAmJiBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkcmVuQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgbmV3Q2hpbGRQcm9wcy5jbGFzc05hbWUgPSBjaGlsZHJlbkNsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjbG9uZVByb3BzID0gX29iamVjdFNwcmVhZCh7fSwgbmV3Q2hpbGRQcm9wcyk7XG5cbiAgICAgICAgaWYgKHN1cHBvcnRSZWYoY2hpbGQpKSB7XG4gICAgICAgICAgY2xvbmVQcm9wcy5yZWYgPSBjb21wb3NlUmVmKHRoaXMudHJpZ2dlclJlZiwgY2hpbGQucmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmlnZ2VyID0gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2xvbmVQcm9wcyk7XG4gICAgICAgIHZhciBwb3J0YWw7IC8vIHByZXZlbnQgdW5tb3VudGluZyBhZnRlciBpdCdzIHJlbmRlcmVkXG5cbiAgICAgICAgaWYgKHBvcHVwVmlzaWJsZSB8fCB0aGlzLnBvcHVwUmVmLmN1cnJlbnQgfHwgZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgICBwb3J0YWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxcIixcbiAgICAgICAgICAgIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIsXG4gICAgICAgICAgICBkaWRVcGRhdGU6IHRoaXMuaGFuZGxlUG9ydGFsVXBkYXRlXG4gICAgICAgICAgfSwgdGhpcy5nZXRDb21wb25lbnQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBvcHVwVmlzaWJsZSAmJiBhdXRvRGVzdHJveSkge1xuICAgICAgICAgIHBvcnRhbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgb25Qb3B1cE1vdXNlRG93bjogdGhpcy5vblBvcHVwTW91c2VEb3duXG4gICAgICAgICAgfVxuICAgICAgICB9LCB0cmlnZ2VyLCBwb3J0YWwpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgdmFyIHBvcHVwVmlzaWJsZSA9IF9yZWYucG9wdXBWaXNpYmxlO1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcblxuICAgICAgICBpZiAocG9wdXBWaXNpYmxlICE9PSB1bmRlZmluZWQgJiYgcHJldlN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gcG9wdXBWaXNpYmxlKSB7XG4gICAgICAgICAgbmV3U3RhdGUucG9wdXBWaXNpYmxlID0gcG9wdXBWaXNpYmxlO1xuICAgICAgICAgIG5ld1N0YXRlLnByZXZQb3B1cFZpc2libGUgPSBwcmV2U3RhdGUucG9wdXBWaXNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUcmlnZ2VyO1xuICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgVHJpZ2dlci5jb250ZXh0VHlwZSA9IFRyaWdnZXJDb250ZXh0O1xuICBUcmlnZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdyYy10cmlnZ2VyLXBvcHVwJyxcbiAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogcmV0dXJuRW1wdHlTdHJpbmcsXG4gICAgZ2V0RG9jdW1lbnQ6IHJldHVybkRvY3VtZW50LFxuICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uUG9wdXBBbGlnbjogbm9vcCxcbiAgICBwb3B1cENsYXNzTmFtZTogJycsXG4gICAgbW91c2VFbnRlckRlbGF5OiAwLFxuICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgIGZvY3VzRGVsYXk6IDAsXG4gICAgYmx1ckRlbGF5OiAwLjE1LFxuICAgIHBvcHVwU3R5bGU6IHt9LFxuICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZmFsc2UsXG4gICAgcG9wdXBBbGlnbjoge30sXG4gICAgZGVmYXVsdFBvcHVwVmlzaWJsZTogZmFsc2UsXG4gICAgbWFzazogZmFsc2UsXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGFjdGlvbjogW10sXG4gICAgc2hvd0FjdGlvbjogW10sXG4gICAgaGlkZUFjdGlvbjogW10sXG4gICAgYXV0b0Rlc3Ryb3k6IGZhbHNlXG4gIH07XG4gIHJldHVybiBUcmlnZ2VyO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVUcmlnZ2VyKFBvcnRhbCk7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcblxuZnVuY3Rpb24gaXNQb2ludHNFcShhMSwgYTIsIGlzQWxpZ25Qb2ludCkge1xuICBpZiAoaXNBbGlnblBvaW50KSB7XG4gICAgcmV0dXJuIGExWzBdID09PSBhMlswXTtcbiAgfVxuXG4gIHJldHVybiBhMVswXSA9PT0gYTJbMF0gJiYgYTFbMV0gPT09IGEyWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwbGFjZW1lbnRTdHIsIGFsaWduKSB7XG4gIHZhciBiYXNlQWxpZ24gPSBidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRTdHJdIHx8IHt9O1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBiYXNlQWxpZ24pLCBhbGlnbik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZShidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbiwgaXNBbGlnblBvaW50KSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIHZhciBwbGFjZW1lbnRzID0gT2JqZWN0LmtleXMoYnVpbHRpblBsYWNlbWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgaWYgKGlzUG9pbnRzRXEoYnVpbHRpblBsYWNlbWVudHNbcGxhY2VtZW50XS5wb2ludHMsIHBvaW50cywgaXNBbGlnblBvaW50KSkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGxhY2VtZW50LVwiKS5jb25jYXQocGxhY2VtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldE1vdGlvbihfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIG1vdGlvbiA9IF9yZWYubW90aW9uLFxuICAgICAgYW5pbWF0aW9uID0gX3JlZi5hbmltYXRpb24sXG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IF9yZWYudHJhbnNpdGlvbk5hbWU7XG5cbiAgaWYgKG1vdGlvbikge1xuICAgIHJldHVybiBtb3Rpb247XG4gIH1cblxuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdGlvbk5hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChhbmltYXRpb24pXG4gICAgfTtcbiAgfVxuXG4gIGlmICh0cmFuc2l0aW9uTmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBtb3Rpb25OYW1lOiB0cmFuc2l0aW9uTmFtZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXcmFwKHRhcmdldCwgZXZlbnRUeXBlLCBjYiwgb3B0aW9uKSB7XG4gIC8qIGVzbGludCBjYW1lbGNhc2U6IDIgKi9cbiAgdmFyIGNhbGxiYWNrID0gUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGNiLCBlKTtcbiAgfSA6IGNiO1xuXG4gIGlmICh0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2ssIG9wdGlvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgaWYgKHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Vc2VEb20oKSB7XG4gIHJldHVybiAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHJvb3QsIG4pIHtcbiAgaWYgKCFyb290KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHJvb3QuY29udGFpbnMobik7XG59IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vKipcbiAqIFJldHVybiBpZiBhIG5vZGUgaXMgYSBET00gbm9kZS4gRWxzZSB3aWxsIHJldHVybiBieSBgZmluZERPTU5vZGVgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZERPTU5vZGUobm9kZSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUobm9kZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQuZ2V0QkJveCkge1xuICAgIHZhciBib3ggPSBlbGVtZW50LmdldEJCb3goKTtcblxuICAgIGlmIChib3gud2lkdGggfHwgYm94LmhlaWdodCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgdmFyIF9ib3ggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKF9ib3gud2lkdGggfHwgX2JveC5oZWlnaHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pOyIsIi8qKlxuICogQGlnbm9yZVxuICogc29tZSBrZXktY29kZXMgZGVmaW5pdGlvbiBhbmQgdXRpbHMgZnJvbSBjbG9zdXJlLWxpYnJhcnlcbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cbnZhciBLZXlDb2RlID0ge1xuICAvKipcbiAgICogTUFDX0VOVEVSXG4gICAqL1xuICBNQUNfRU5URVI6IDMsXG5cbiAgLyoqXG4gICAqIEJBQ0tTUEFDRVxuICAgKi9cbiAgQkFDS1NQQUNFOiA4LFxuXG4gIC8qKlxuICAgKiBUQUJcbiAgICovXG4gIFRBQjogOSxcblxuICAvKipcbiAgICogTlVNTE9DSyBvbiBGRi9TYWZhcmkgTWFjXG4gICAqL1xuICBOVU1fQ0VOVEVSOiAxMixcblxuICAvKipcbiAgICogRU5URVJcbiAgICovXG4gIEVOVEVSOiAxMyxcblxuICAvKipcbiAgICogU0hJRlRcbiAgICovXG4gIFNISUZUOiAxNixcblxuICAvKipcbiAgICogQ1RSTFxuICAgKi9cbiAgQ1RSTDogMTcsXG5cbiAgLyoqXG4gICAqIEFMVFxuICAgKi9cbiAgQUxUOiAxOCxcblxuICAvKipcbiAgICogUEFVU0VcbiAgICovXG4gIFBBVVNFOiAxOSxcblxuICAvKipcbiAgICogQ0FQU19MT0NLXG4gICAqL1xuICBDQVBTX0xPQ0s6IDIwLFxuXG4gIC8qKlxuICAgKiBFU0NcbiAgICovXG4gIEVTQzogMjcsXG5cbiAgLyoqXG4gICAqIFNQQUNFXG4gICAqL1xuICBTUEFDRTogMzIsXG5cbiAgLyoqXG4gICAqIFBBR0VfVVBcbiAgICovXG4gIFBBR0VfVVA6IDMzLFxuXG4gIC8qKlxuICAgKiBQQUdFX0RPV05cbiAgICovXG4gIFBBR0VfRE9XTjogMzQsXG5cbiAgLyoqXG4gICAqIEVORFxuICAgKi9cbiAgRU5EOiAzNSxcblxuICAvKipcbiAgICogSE9NRVxuICAgKi9cbiAgSE9NRTogMzYsXG5cbiAgLyoqXG4gICAqIExFRlRcbiAgICovXG4gIExFRlQ6IDM3LFxuXG4gIC8qKlxuICAgKiBVUFxuICAgKi9cbiAgVVA6IDM4LFxuXG4gIC8qKlxuICAgKiBSSUdIVFxuICAgKi9cbiAgUklHSFQ6IDM5LFxuXG4gIC8qKlxuICAgKiBET1dOXG4gICAqL1xuICBET1dOOiA0MCxcblxuICAvKipcbiAgICogUFJJTlRfU0NSRUVOXG4gICAqL1xuICBQUklOVF9TQ1JFRU46IDQ0LFxuXG4gIC8qKlxuICAgKiBJTlNFUlRcbiAgICovXG4gIElOU0VSVDogNDUsXG5cbiAgLyoqXG4gICAqIERFTEVURVxuICAgKi9cbiAgREVMRVRFOiA0NixcblxuICAvKipcbiAgICogWkVST1xuICAgKi9cbiAgWkVSTzogNDgsXG5cbiAgLyoqXG4gICAqIE9ORVxuICAgKi9cbiAgT05FOiA0OSxcblxuICAvKipcbiAgICogVFdPXG4gICAqL1xuICBUV086IDUwLFxuXG4gIC8qKlxuICAgKiBUSFJFRVxuICAgKi9cbiAgVEhSRUU6IDUxLFxuXG4gIC8qKlxuICAgKiBGT1VSXG4gICAqL1xuICBGT1VSOiA1MixcblxuICAvKipcbiAgICogRklWRVxuICAgKi9cbiAgRklWRTogNTMsXG5cbiAgLyoqXG4gICAqIFNJWFxuICAgKi9cbiAgU0lYOiA1NCxcblxuICAvKipcbiAgICogU0VWRU5cbiAgICovXG4gIFNFVkVOOiA1NSxcblxuICAvKipcbiAgICogRUlHSFRcbiAgICovXG4gIEVJR0hUOiA1NixcblxuICAvKipcbiAgICogTklORVxuICAgKi9cbiAgTklORTogNTcsXG5cbiAgLyoqXG4gICAqIFFVRVNUSU9OX01BUktcbiAgICovXG4gIFFVRVNUSU9OX01BUks6IDYzLFxuXG4gIC8qKlxuICAgKiBBXG4gICAqL1xuICBBOiA2NSxcblxuICAvKipcbiAgICogQlxuICAgKi9cbiAgQjogNjYsXG5cbiAgLyoqXG4gICAqIENcbiAgICovXG4gIEM6IDY3LFxuXG4gIC8qKlxuICAgKiBEXG4gICAqL1xuICBEOiA2OCxcblxuICAvKipcbiAgICogRVxuICAgKi9cbiAgRTogNjksXG5cbiAgLyoqXG4gICAqIEZcbiAgICovXG4gIEY6IDcwLFxuXG4gIC8qKlxuICAgKiBHXG4gICAqL1xuICBHOiA3MSxcblxuICAvKipcbiAgICogSFxuICAgKi9cbiAgSDogNzIsXG5cbiAgLyoqXG4gICAqIElcbiAgICovXG4gIEk6IDczLFxuXG4gIC8qKlxuICAgKiBKXG4gICAqL1xuICBKOiA3NCxcblxuICAvKipcbiAgICogS1xuICAgKi9cbiAgSzogNzUsXG5cbiAgLyoqXG4gICAqIExcbiAgICovXG4gIEw6IDc2LFxuXG4gIC8qKlxuICAgKiBNXG4gICAqL1xuICBNOiA3NyxcblxuICAvKipcbiAgICogTlxuICAgKi9cbiAgTjogNzgsXG5cbiAgLyoqXG4gICAqIE9cbiAgICovXG4gIE86IDc5LFxuXG4gIC8qKlxuICAgKiBQXG4gICAqL1xuICBQOiA4MCxcblxuICAvKipcbiAgICogUVxuICAgKi9cbiAgUTogODEsXG5cbiAgLyoqXG4gICAqIFJcbiAgICovXG4gIFI6IDgyLFxuXG4gIC8qKlxuICAgKiBTXG4gICAqL1xuICBTOiA4MyxcblxuICAvKipcbiAgICogVFxuICAgKi9cbiAgVDogODQsXG5cbiAgLyoqXG4gICAqIFVcbiAgICovXG4gIFU6IDg1LFxuXG4gIC8qKlxuICAgKiBWXG4gICAqL1xuICBWOiA4NixcblxuICAvKipcbiAgICogV1xuICAgKi9cbiAgVzogODcsXG5cbiAgLyoqXG4gICAqIFhcbiAgICovXG4gIFg6IDg4LFxuXG4gIC8qKlxuICAgKiBZXG4gICAqL1xuICBZOiA4OSxcblxuICAvKipcbiAgICogWlxuICAgKi9cbiAgWjogOTAsXG5cbiAgLyoqXG4gICAqIE1FVEFcbiAgICovXG4gIE1FVEE6IDkxLFxuXG4gIC8qKlxuICAgKiBXSU5fS0VZX1JJR0hUXG4gICAqL1xuICBXSU5fS0VZX1JJR0hUOiA5MixcblxuICAvKipcbiAgICogQ09OVEVYVF9NRU5VXG4gICAqL1xuICBDT05URVhUX01FTlU6IDkzLFxuXG4gIC8qKlxuICAgKiBOVU1fWkVST1xuICAgKi9cbiAgTlVNX1pFUk86IDk2LFxuXG4gIC8qKlxuICAgKiBOVU1fT05FXG4gICAqL1xuICBOVU1fT05FOiA5NyxcblxuICAvKipcbiAgICogTlVNX1RXT1xuICAgKi9cbiAgTlVNX1RXTzogOTgsXG5cbiAgLyoqXG4gICAqIE5VTV9USFJFRVxuICAgKi9cbiAgTlVNX1RIUkVFOiA5OSxcblxuICAvKipcbiAgICogTlVNX0ZPVVJcbiAgICovXG4gIE5VTV9GT1VSOiAxMDAsXG5cbiAgLyoqXG4gICAqIE5VTV9GSVZFXG4gICAqL1xuICBOVU1fRklWRTogMTAxLFxuXG4gIC8qKlxuICAgKiBOVU1fU0lYXG4gICAqL1xuICBOVU1fU0lYOiAxMDIsXG5cbiAgLyoqXG4gICAqIE5VTV9TRVZFTlxuICAgKi9cbiAgTlVNX1NFVkVOOiAxMDMsXG5cbiAgLyoqXG4gICAqIE5VTV9FSUdIVFxuICAgKi9cbiAgTlVNX0VJR0hUOiAxMDQsXG5cbiAgLyoqXG4gICAqIE5VTV9OSU5FXG4gICAqL1xuICBOVU1fTklORTogMTA1LFxuXG4gIC8qKlxuICAgKiBOVU1fTVVMVElQTFlcbiAgICovXG4gIE5VTV9NVUxUSVBMWTogMTA2LFxuXG4gIC8qKlxuICAgKiBOVU1fUExVU1xuICAgKi9cbiAgTlVNX1BMVVM6IDEwNyxcblxuICAvKipcbiAgICogTlVNX01JTlVTXG4gICAqL1xuICBOVU1fTUlOVVM6IDEwOSxcblxuICAvKipcbiAgICogTlVNX1BFUklPRFxuICAgKi9cbiAgTlVNX1BFUklPRDogMTEwLFxuXG4gIC8qKlxuICAgKiBOVU1fRElWSVNJT05cbiAgICovXG4gIE5VTV9ESVZJU0lPTjogMTExLFxuXG4gIC8qKlxuICAgKiBGMVxuICAgKi9cbiAgRjE6IDExMixcblxuICAvKipcbiAgICogRjJcbiAgICovXG4gIEYyOiAxMTMsXG5cbiAgLyoqXG4gICAqIEYzXG4gICAqL1xuICBGMzogMTE0LFxuXG4gIC8qKlxuICAgKiBGNFxuICAgKi9cbiAgRjQ6IDExNSxcblxuICAvKipcbiAgICogRjVcbiAgICovXG4gIEY1OiAxMTYsXG5cbiAgLyoqXG4gICAqIEY2XG4gICAqL1xuICBGNjogMTE3LFxuXG4gIC8qKlxuICAgKiBGN1xuICAgKi9cbiAgRjc6IDExOCxcblxuICAvKipcbiAgICogRjhcbiAgICovXG4gIEY4OiAxMTksXG5cbiAgLyoqXG4gICAqIEY5XG4gICAqL1xuICBGOTogMTIwLFxuXG4gIC8qKlxuICAgKiBGMTBcbiAgICovXG4gIEYxMDogMTIxLFxuXG4gIC8qKlxuICAgKiBGMTFcbiAgICovXG4gIEYxMTogMTIyLFxuXG4gIC8qKlxuICAgKiBGMTJcbiAgICovXG4gIEYxMjogMTIzLFxuXG4gIC8qKlxuICAgKiBOVU1MT0NLXG4gICAqL1xuICBOVU1MT0NLOiAxNDQsXG5cbiAgLyoqXG4gICAqIFNFTUlDT0xPTlxuICAgKi9cbiAgU0VNSUNPTE9OOiAxODYsXG5cbiAgLyoqXG4gICAqIERBU0hcbiAgICovXG4gIERBU0g6IDE4OSxcblxuICAvKipcbiAgICogRVFVQUxTXG4gICAqL1xuICBFUVVBTFM6IDE4NyxcblxuICAvKipcbiAgICogQ09NTUFcbiAgICovXG4gIENPTU1BOiAxODgsXG5cbiAgLyoqXG4gICAqIFBFUklPRFxuICAgKi9cbiAgUEVSSU9EOiAxOTAsXG5cbiAgLyoqXG4gICAqIFNMQVNIXG4gICAqL1xuICBTTEFTSDogMTkxLFxuXG4gIC8qKlxuICAgKiBBUE9TVFJPUEhFXG4gICAqL1xuICBBUE9TVFJPUEhFOiAxOTIsXG5cbiAgLyoqXG4gICAqIFNJTkdMRV9RVU9URVxuICAgKi9cbiAgU0lOR0xFX1FVT1RFOiAyMjIsXG5cbiAgLyoqXG4gICAqIE9QRU5fU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIE9QRU5fU1FVQVJFX0JSQUNLRVQ6IDIxOSxcblxuICAvKipcbiAgICogQkFDS1NMQVNIXG4gICAqL1xuICBCQUNLU0xBU0g6IDIyMCxcblxuICAvKipcbiAgICogQ0xPU0VfU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIENMT1NFX1NRVUFSRV9CUkFDS0VUOiAyMjEsXG5cbiAgLyoqXG4gICAqIFdJTl9LRVlcbiAgICovXG4gIFdJTl9LRVk6IDIyNCxcblxuICAvKipcbiAgICogTUFDX0ZGX01FVEFcbiAgICovXG4gIE1BQ19GRl9NRVRBOiAyMjQsXG5cbiAgLyoqXG4gICAqIFdJTl9JTUVcbiAgICovXG4gIFdJTl9JTUU6IDIyOSxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IEZ1bmN0aW9uID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiB3aGV0aGVyIHRleHQgYW5kIG1vZGlmaWVkIGtleSBpcyBlbnRlcmVkIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAqL1xuICBpc1RleHRNb2RpZnlpbmdLZXlFdmVudDogZnVuY3Rpb24gaXNUZXh0TW9kaWZ5aW5nS2V5RXZlbnQoZSkge1xuICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuXG4gICAgaWYgKGUuYWx0S2V5ICYmICFlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IC8vIEZ1bmN0aW9uIGtleXMgZG9uJ3QgZ2VuZXJhdGUgdGV4dFxuICAgIGtleUNvZGUgPj0gS2V5Q29kZS5GMSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuRjEyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBUaGUgZm9sbG93aW5nIGtleXMgYXJlIHF1aXRlIGhhcm1sZXNzLCBldmVuIGluIGNvbWJpbmF0aW9uIHdpdGhcbiAgICAvLyBDVFJMLCBBTFQgb3IgU0hJRlQuXG5cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBLZXlDb2RlLkFMVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5DQVBTX0xPQ0s6XG4gICAgICBjYXNlIEtleUNvZGUuQ09OVEVYVF9NRU5VOlxuICAgICAgY2FzZSBLZXlDb2RlLkNUUkw6XG4gICAgICBjYXNlIEtleUNvZGUuRE9XTjpcbiAgICAgIGNhc2UgS2V5Q29kZS5FTkQ6XG4gICAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgICAgY2FzZSBLZXlDb2RlLkhPTUU6XG4gICAgICBjYXNlIEtleUNvZGUuSU5TRVJUOlxuICAgICAgY2FzZSBLZXlDb2RlLkxFRlQ6XG4gICAgICBjYXNlIEtleUNvZGUuTUFDX0ZGX01FVEE6XG4gICAgICBjYXNlIEtleUNvZGUuTUVUQTpcbiAgICAgIGNhc2UgS2V5Q29kZS5OVU1MT0NLOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTV9DRU5URVI6XG4gICAgICBjYXNlIEtleUNvZGUuUEFHRV9ET1dOOlxuICAgICAgY2FzZSBLZXlDb2RlLlBBR0VfVVA6XG4gICAgICBjYXNlIEtleUNvZGUuUEFVU0U6XG4gICAgICBjYXNlIEtleUNvZGUuUFJJTlRfU0NSRUVOOlxuICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUOlxuICAgICAgY2FzZSBLZXlDb2RlLlNISUZUOlxuICAgICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgICAgY2FzZSBLZXlDb2RlLldJTl9LRVk6XG4gICAgICBjYXNlIEtleUNvZGUuV0lOX0tFWV9SSUdIVDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIHdoZXRoZXIgY2hhcmFjdGVyIGlzIGVudGVyZWQuXG4gICAqL1xuICBpc0NoYXJhY3RlcktleTogZnVuY3Rpb24gaXNDaGFyYWN0ZXJLZXkoa2V5Q29kZSkge1xuICAgIGlmIChrZXlDb2RlID49IEtleUNvZGUuWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTklORSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5OVU1fWkVSTyAmJiBrZXlDb2RlIDw9IEtleUNvZGUuTlVNX01VTFRJUExZKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLkEgJiYga2V5Q29kZSA8PSBLZXlDb2RlLlopIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gU2FmYXJpIHNlbmRzIHplcm8ga2V5IGNvZGUgZm9yIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuXG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignV2ViS2l0JykgIT09IC0xICYmIGtleUNvZGUgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgY2FzZSBLZXlDb2RlLlFVRVNUSU9OX01BUks6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX1BMVVM6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX01JTlVTOlxuICAgICAgY2FzZSBLZXlDb2RlLk5VTV9QRVJJT0Q6XG4gICAgICBjYXNlIEtleUNvZGUuTlVNX0RJVklTSU9OOlxuICAgICAgY2FzZSBLZXlDb2RlLlNFTUlDT0xPTjpcbiAgICAgIGNhc2UgS2V5Q29kZS5EQVNIOlxuICAgICAgY2FzZSBLZXlDb2RlLkVRVUFMUzpcbiAgICAgIGNhc2UgS2V5Q29kZS5DT01NQTpcbiAgICAgIGNhc2UgS2V5Q29kZS5QRVJJT0Q6XG4gICAgICBjYXNlIEtleUNvZGUuU0xBU0g6XG4gICAgICBjYXNlIEtleUNvZGUuQVBPU1RST1BIRTpcbiAgICAgIGNhc2UgS2V5Q29kZS5TSU5HTEVfUVVPVEU6XG4gICAgICBjYXNlIEtleUNvZGUuT1BFTl9TUVVBUkVfQlJBQ0tFVDpcbiAgICAgIGNhc2UgS2V5Q29kZS5CQUNLU0xBU0g6XG4gICAgICBjYXNlIEtleUNvZGUuQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgS2V5Q29kZTsiLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgZm9yd2FyZFJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNhblVzZURvbSBmcm9tICcuL0RvbS9jYW5Vc2VEb20nO1xudmFyIFBvcnRhbCA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGRpZFVwZGF0ZSA9IHByb3BzLmRpZFVwZGF0ZSxcbiAgICAgIGdldENvbnRhaW5lciA9IHByb3BzLmdldENvbnRhaW5lcixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gIHZhciBjb250YWluZXJSZWYgPSB1c2VSZWYoKTsgLy8gUmVmIHJldHVybiBub3RoaW5nLCBvbmx5IGZvciB3cmFwcGVyIGNoZWNrIGV4aXN0XG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge307XG4gIH0pOyAvLyBDcmVhdGUgY29udGFpbmVyIGluIGNsaWVudCBzaWRlIHdpdGggc3luYyB0byBhdm9pZCB1c2VFZmZlY3Qgbm90IGdldCByZWZcblxuICB2YXIgaW5pdFJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgaWYgKCFpbml0UmVmLmN1cnJlbnQgJiYgY2FuVXNlRG9tKCkpIHtcbiAgICBjb250YWluZXJSZWYuY3VycmVudCA9IGdldENvbnRhaW5lcigpO1xuICAgIGluaXRSZWYuY3VycmVudCA9IHRydWU7XG4gIH0gLy8gW0xlZ2FjeV0gVXNlZCBieSBgcmMtdHJpZ2dlcmBcblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZGlkVXBkYXRlID09PSBudWxsIHx8IGRpZFVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlkVXBkYXRlKHByb3BzKTtcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfY29udGFpbmVyUmVmJGN1cnJlbnQsIF9jb250YWluZXJSZWYkY3VycmVudDI7XG5cbiAgICAgIC8vIFtMZWdhY3ldIFRoaXMgc2hvdWxkIG5vdCBiZSBoYW5kbGUgYnkgUG9ydGFsIGJ1dCBwYXJlbnQgUG9ydGFsV3JhcHBlciBpbnN0ZWFkLlxuICAgICAgLy8gU2luY2Ugc29tZSBjb21wb25lbnQgdXNlIGBQb3J0YWxgIGRpcmVjdGx5LCB3ZSBoYXZlIHRvIGtlZXAgdGhlIGxvZ2ljIGhlcmUuXG4gICAgICAoX2NvbnRhaW5lclJlZiRjdXJyZW50ID0gY29udGFpbmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9jb250YWluZXJSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9jb250YWluZXJSZWYkY3VycmVudDIgPSBfY29udGFpbmVyUmVmJGN1cnJlbnQucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2NvbnRhaW5lclJlZiRjdXJyZW50MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NvbnRhaW5lclJlZiRjdXJyZW50Mi5yZW1vdmVDaGlsZChjb250YWluZXJSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gY29udGFpbmVyUmVmLmN1cnJlbnQgPyBSZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIGNvbnRhaW5lclJlZi5jdXJyZW50KSA6IG51bGw7XG59KTtcbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDsiLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuXG4gIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhZ2VudCkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHMtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YnctKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG0tfGNlbGx8Y2h0bXxjbGRjfGNtZC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGMtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2YtNXxnLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGQtKG18cHx0KXxoZWktfGhpKHB0fHRhKXxocCggaXxpcCl8aHMtY3xodChjKC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2MtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fC1bYS13XSl8bGlid3xseW54fG0xLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKS18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG4tMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0LWd8cWEtYXxxYygwN3wxMnwyMXwzMnw2MHwtWzItN118aS0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoLXxvb3xwLSl8c2RrXFwvfHNlKGMoLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2gtfHNoYXJ8c2llKC18bSl8c2stMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoLXx2LXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbC18dGRnLXx0ZWwoaXxtKXx0aW0tfHQtbW98dG8ocGx8c2gpfHRzKDcwfG0tfG0zfG01KXx0eC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYygtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzLXx5b3VyfHpldG98enRlLS9pLnRlc3QoYWdlbnQgPT09IG51bGwgfHwgYWdlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFnZW50LnN1YnN0cigwLCA0KSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0pOyIsInZhciByYWYgPSBmdW5jdGlvbiByYWYoY2FsbGJhY2spIHtcbiAgcmV0dXJuICtzZXRUaW1lb3V0KGNhbGxiYWNrLCAxNik7XG59O1xuXG52YXIgY2FmID0gZnVuY3Rpb24gY2FmKG51bSkge1xuICByZXR1cm4gY2xlYXJUaW1lb3V0KG51bSk7XG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3JlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gd2luZG93KSB7XG4gIHJhZiA9IGZ1bmN0aW9uIHJhZihjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcblxuICBjYWYgPSBmdW5jdGlvbiBjYWYoaGFuZGxlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cmFwcGVyUmFmKGNhbGxiYWNrKSB7XG4gIHJldHVybiByYWYoY2FsbGJhY2spO1xufVxud3JhcHBlclJhZi5jYW5jZWwgPSBjYWY7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgaXNNZW1vIH0gZnJvbSAncmVhY3QtaXMnO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGxSZWYocmVmLCBub2RlKSB7XG4gIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmVmKG5vZGUpO1xuICB9IGVsc2UgaWYgKF90eXBlb2YocmVmKSA9PT0gJ29iamVjdCcgJiYgcmVmICYmICdjdXJyZW50JyBpbiByZWYpIHtcbiAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gIH1cbn1cbi8qKlxuICogTWVyZ2UgcmVmcyBpbnRvIG9uZSByZWYgZnVuY3Rpb24gdG8gc3VwcG9ydCByZWYgcGFzc2luZy5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVJlZigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlZnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVmc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICBmaWxsUmVmKHJlZiwgbm9kZSk7XG4gICAgfSk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydFJlZihub2RlT3JDb21wb25lbnQpIHtcbiAgdmFyIF90eXBlJHByb3RvdHlwZSwgX25vZGVPckNvbXBvbmVudCRwcm90O1xuXG4gIHZhciB0eXBlID0gaXNNZW1vKG5vZGVPckNvbXBvbmVudCkgPyBub2RlT3JDb21wb25lbnQudHlwZS50eXBlIDogbm9kZU9yQ29tcG9uZW50LnR5cGU7IC8vIEZ1bmN0aW9uIGNvbXBvbmVudCBub2RlXG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmICEoKF90eXBlJHByb3RvdHlwZSA9IHR5cGUucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfdHlwZSRwcm90b3R5cGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90eXBlJHByb3RvdHlwZS5yZW5kZXIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIENsYXNzIGNvbXBvbmVudFxuXG5cbiAgaWYgKHR5cGVvZiBub2RlT3JDb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgISgoX25vZGVPckNvbXBvbmVudCRwcm90ID0gbm9kZU9yQ29tcG9uZW50LnByb3RvdHlwZSkgPT09IG51bGwgfHwgX25vZGVPckNvbXBvbmVudCRwcm90ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZU9yQ29tcG9uZW50JHByb3QucmVuZGVyKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyogZXNsaW50LWVuYWJsZSAqLyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbnZhciB3YXJuZWQgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nKHZhbGlkLCBtZXNzYWdlKSB7XG4gIC8vIFN1cHBvcnQgdWdsaWZ5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF2YWxpZCAmJiBjb25zb2xlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiV2FybmluZzogXCIuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG5vdGUodmFsaWQsIG1lc3NhZ2UpIHtcbiAgLy8gU3VwcG9ydCB1Z2xpZnlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXZhbGlkICYmIGNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybihcIk5vdGU6IFwiLmNvbmNhdChtZXNzYWdlKSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNldFdhcm5lZCgpIHtcbiAgd2FybmVkID0ge307XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsbChtZXRob2QsIHZhbGlkLCBtZXNzYWdlKSB7XG4gIGlmICghdmFsaWQgJiYgIXdhcm5lZFttZXNzYWdlXSkge1xuICAgIG1ldGhvZChmYWxzZSwgbWVzc2FnZSk7XG4gICAgd2FybmVkW21lc3NhZ2VdID0gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdPbmNlKHZhbGlkLCBtZXNzYWdlKSB7XG4gIGNhbGwod2FybmluZywgdmFsaWQsIG1lc3NhZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vdGVPbmNlKHZhbGlkLCBtZXNzYWdlKSB7XG4gIGNhbGwobm90ZSwgdmFsaWQsIG1lc3NhZ2UpO1xufVxuZXhwb3J0IGRlZmF1bHQgd2FybmluZ09uY2U7XG4vKiBlc2xpbnQtZW5hYmxlICovIiwiLyoqXHJcbiAqIEEgY29sbGVjdGlvbiBvZiBzaGltcyB0aGF0IHByb3ZpZGUgbWluaW1hbCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBFUzYgY29sbGVjdGlvbnMuXHJcbiAqXHJcbiAqIFRoZXNlIGltcGxlbWVudGF0aW9ucyBhcmUgbm90IG1lYW50IHRvIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJcclxuICogbW9kdWxlcyBhcyB0aGV5IGNvdmVyIG9ubHkgYSBsaW1pdGVkIHJhbmdlIG9mIHVzZSBjYXNlcy5cclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MsIHZhbGlkLWpzZG9jICovXHJcbnZhciBNYXBTaGltID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBNYXA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5kZXggaW4gcHJvdmlkZWQgYXJyYXkgdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQga2V5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRJbmRleChhcnIsIGtleSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAtMTtcclxuICAgICAgICBhcnIuc29tZShmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeVswXSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2VudHJpZXNfXy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9fZW50cmllc19fW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfX1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18ucHVzaChba2V5LCB2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9fZW50cmllc19fO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleChlbnRyaWVzLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+Z2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnNwbGljZSgwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbY3R4PW51bGxdXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XHJcbiAgICAgICAgICAgIGlmIChjdHggPT09IHZvaWQgMCkgeyBjdHggPSBudWxsOyB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9fZW50cmllc19fOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVudHJ5WzFdLCBlbnRyeVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjbGFzc18xO1xyXG4gICAgfSgpKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIERldGVjdHMgd2hldGhlciB3aW5kb3cgYW5kIGRvY3VtZW50IG9iamVjdHMgYXJlIGF2YWlsYWJsZSBpbiBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gKi9cclxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ID09PSBkb2N1bWVudDtcblxuLy8gUmV0dXJucyBnbG9iYWwgb2JqZWN0IG9mIGEgY3VycmVudCBlbnZpcm9ubWVudC5cclxudmFyIGdsb2JhbCQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XHJcbn0pKCk7XG5cbi8qKlxyXG4gKiBBIHNoaW0gZm9yIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2hpY2ggZmFsbHMgYmFjayB0byB0aGUgc2V0VGltZW91dCBpZlxyXG4gKiBmaXJzdCBvbmUgaXMgbm90IHN1cHBvcnRlZC5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gUmVxdWVzdHMnIGlkZW50aWZpZXIuXHJcbiAqL1xyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBJdCdzIHJlcXVpcmVkIHRvIHVzZSBhIGJvdW5kZWQgZnVuY3Rpb24gYmVjYXVzZSBJRSBzb21ldGltZXMgdGhyb3dzXHJcbiAgICAgICAgLy8gYW4gXCJJbnZhbGlkIGNhbGxpbmcgb2JqZWN0XCIgZXJyb3IgaWYgckFGIGlzIGludm9rZWQgd2l0aG91dCB0aGUgZ2xvYmFsXHJcbiAgICAgICAgLy8gb2JqZWN0IG9uIHRoZSBsZWZ0IGhhbmQgc2lkZS5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQoZ2xvYmFsJDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjayhEYXRlLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcclxufSkoKTtcblxuLy8gRGVmaW5lcyBtaW5pbXVtIHRpbWVvdXQgYmVmb3JlIGFkZGluZyBhIHRyYWlsaW5nIGNhbGwuXHJcbnZhciB0cmFpbGluZ1RpbWVvdXQgPSAyO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggZW5zdXJlcyB0aGF0IHByb3ZpZGVkIGNhbGxiYWNrIHdpbGwgYmVcclxuICogaW52b2tlZCBvbmx5IG9uY2UgZHVyaW5nIHRoZSBzcGVjaWZpZWQgZGVsYXkgcGVyaW9kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGRlbGF5IHBlcmlvZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gRGVsYXkgYWZ0ZXIgd2hpY2ggdG8gaW52b2tlIGNhbGxiYWNrLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvdHRsZSAoY2FsbGJhY2ssIGRlbGF5KSB7XHJcbiAgICB2YXIgbGVhZGluZ0NhbGwgPSBmYWxzZSwgdHJhaWxpbmdDYWxsID0gZmFsc2UsIGxhc3RDYWxsVGltZSA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGFuZCBzY2hlZHVsZXMgbmV3IGludm9jYXRpb24gaWZcclxuICAgICAqIHRoZSBcInByb3h5XCIgd2FzIGNhbGxlZCBkdXJpbmcgY3VycmVudCByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZXNvbHZlUGVuZGluZygpIHtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYWlsaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBwcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5LiBJdCB3aWxsIGZ1cnRoZXIgcG9zdHBvbmVcclxuICAgICAqIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGRlbGVnYXRpbmcgaXQgdG8gdGhlXHJcbiAgICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRpbWVvdXRDYWxsYmFjaygpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMShyZXNvbHZlUGVuZGluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNjaGVkdWxlcyBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcHJveHkoKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFJlamVjdCBpbW1lZGlhdGVseSBmb2xsb3dpbmcgY2FsbHMuXHJcbiAgICAgICAgICAgIGlmICh0aW1lU3RhbXAgLSBsYXN0Q2FsbFRpbWUgPCB0cmFpbGluZ1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSBuZXcgY2FsbCB0byBiZSBpbiBpbnZva2VkIHdoZW4gdGhlIHBlbmRpbmcgb25lIGlzIHJlc29sdmVkLlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgXCJ0cmFuc2l0aW9uc1wiIHdoaWNoIG5ldmVyIGFjdHVhbGx5IHN0YXJ0XHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHNvIHRoZXJlIGlzIGEgY2hhbmNlIHRoYXQgd2UgbWlnaHQgbWlzcyBvbmUgaWYgY2hhbmdlXHJcbiAgICAgICAgICAgIC8vIGhhcHBlbnMgYW1pZHMgdGhlIHBlbmRpbmcgaW52b2NhdGlvbi5cclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RDYWxsVGltZSA9IHRpbWVTdGFtcDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm94eTtcclxufVxuXG4vLyBNaW5pbXVtIGRlbGF5IGJlZm9yZSBpbnZva2luZyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy5cclxudmFyIFJFRlJFU0hfREVMQVkgPSAyMDtcclxuLy8gQSBsaXN0IG9mIHN1YnN0cmluZ3Mgb2YgQ1NTIHByb3BlcnRpZXMgdXNlZCB0byBmaW5kIHRyYW5zaXRpb24gZXZlbnRzIHRoYXRcclxuLy8gbWlnaHQgYWZmZWN0IGRpbWVuc2lvbnMgb2Ygb2JzZXJ2ZWQgZWxlbWVudHMuXHJcbnZhciB0cmFuc2l0aW9uS2V5cyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgJ3dpZHRoJywgJ2hlaWdodCcsICdzaXplJywgJ3dlaWdodCddO1xyXG4vLyBDaGVjayBpZiBNdXRhdGlvbk9ic2VydmVyIGlzIGF2YWlsYWJsZS5cclxudmFyIG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XHJcbi8qKlxyXG4gKiBTaW5nbGV0b24gY29udHJvbGxlciBjbGFzcyB3aGljaCBoYW5kbGVzIHVwZGF0ZXMgb2YgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIERPTSBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVsbHMgdGhhdCBjb250cm9sbGVyIGhhcyBzdWJzY3JpYmVkIGZvciBNdXRhdGlvbiBFdmVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogS2VlcHMgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge011dGF0aW9uT2JzZXJ2ZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbGlzdCBvZiBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmVyU1BJPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmVyc18gPSBbXTtcclxuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZF8gPSB0aGlzLm9uVHJhbnNpdGlvbkVuZF8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aHJvdHRsZSh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgUkVGUkVTSF9ERUxBWSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb2JzZXJ2ZXIgdG8gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSBhZGRlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgaWYgKCF+dGhpcy5vYnNlcnZlcnNfLmluZGV4T2Yob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVycyBpZiB0aGV5IGhhdmVuJ3QgYmVlbiBhZGRlZCB5ZXQuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc187XHJcbiAgICAgICAgdmFyIGluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvYnNlcnZlciBpZiBpdCdzIHByZXNlbnQgaW4gcmVnaXN0cnkuXHJcbiAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVycyBpZiBjb250cm9sbGVyIGhhcyBubyBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGlmICghb2JzZXJ2ZXJzLmxlbmd0aCAmJiB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuIEl0IHdpbGwgY29udGludWUgcnVubmluZyB1cGRhdGVzIGluc29mYXJcclxuICAgICAqIGl0IGRldGVjdHMgY2hhbmdlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLnVwZGF0ZU9ic2VydmVyc18oKTtcclxuICAgICAgICAvLyBDb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaWYgY2hhbmdlcyBoYXZlIGJlZW4gZGV0ZWN0ZWQgYXMgdGhlcmUgbWlnaHRcclxuICAgICAgICAvLyBiZSBmdXR1cmUgb25lcyBjYXVzZWQgYnkgQ1NTIHRyYW5zaXRpb25zLlxyXG4gICAgICAgIGlmIChjaGFuZ2VzRGV0ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBldmVyeSBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0IGFuZCBub3RpZmllcyB0aGVtIG9mIHF1ZXVlZFxyXG4gICAgICogZW50cmllcy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgXCJ0cnVlXCIgaWYgYW55IG9ic2VydmVyIGhhcyBkZXRlY3RlZCBjaGFuZ2VzIGluXHJcbiAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgaXQncyBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVPYnNlcnZlcnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIENvbGxlY3Qgb2JzZXJ2ZXJzIHRoYXQgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHZhciBhY3RpdmVPYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc18uZmlsdGVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZ2F0aGVyQWN0aXZlKCksIG9ic2VydmVyLmhhc0FjdGl2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIERlbGl2ZXIgbm90aWZpY2F0aW9ucyBpbiBhIHNlcGFyYXRlIGN5Y2xlIGluIG9yZGVyIHRvIGF2b2lkIGFueVxyXG4gICAgICAgIC8vIGNvbGxpc2lvbnMgYmV0d2VlbiBvYnNlcnZlcnMsIGUuZy4gd2hlbiBtdWx0aXBsZSBpbnN0YW5jZXMgb2ZcclxuICAgICAgICAvLyBSZXNpemVPYnNlcnZlciBhcmUgdHJhY2tpbmcgdGhlIHNhbWUgZWxlbWVudCBhbmQgdGhlIGNhbGxiYWNrIG9mIG9uZVxyXG4gICAgICAgIC8vIG9mIHRoZW0gY2hhbmdlcyBjb250ZW50IGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIHRhcmdldC4gU29tZXRpbWVzXHJcbiAgICAgICAgLy8gdGhpcyBtYXkgcmVzdWx0IGluIG5vdGlmaWNhdGlvbnMgYmVpbmcgYmxvY2tlZCBmb3IgdGhlIHJlc3Qgb2Ygb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGFjdGl2ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gb2JzZXJ2ZXIuYnJvYWRjYXN0QWN0aXZlKCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVPYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IGFkZGVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8IHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN1YnNjcmlwdGlvbiB0byB0aGUgXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaXMgdXNlZCBhcyBhIHdvcmthcm91bmQgZm9yXHJcbiAgICAgICAgLy8gZGVsYXllZCB0cmFuc2l0aW9ucy4gVGhpcyB3YXkgaXQncyBwb3NzaWJsZSB0byBjYXB0dXJlIGF0IGxlYXN0IHRoZVxyXG4gICAgICAgIC8vIGZpbmFsIHN0YXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5vYnNlcnZlKGRvY3VtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuZGlzY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgcmVtb3ZlZC5cclxuICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCAhdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7VHJhbnNpdGlvbkV2ZW50fSBldmVudFxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kXyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hLnByb3BlcnR5TmFtZSwgcHJvcGVydHlOYW1lID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2I7XHJcbiAgICAgICAgLy8gRGV0ZWN0IHdoZXRoZXIgdHJhbnNpdGlvbiBtYXkgYWZmZWN0IGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICB2YXIgaXNSZWZsb3dQcm9wZXJ0eSA9IHRyYW5zaXRpb25LZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+cHJvcGVydHlOYW1lLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXNSZWZsb3dQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluc3RhbmNlIG9mIHRoZSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZV8pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZV8gPSBuZXcgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhvbGRzIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlcidzIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5pbnN0YW5jZV8gPSBudWxsO1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcclxufSgpKTtcblxuLyoqXHJcbiAqIERlZmluZXMgbm9uLXdyaXRhYmxlL2VudW1lcmFibGUgcHJvcGVydGllcyBvZiB0aGUgcHJvdmlkZWQgdGFyZ2V0IG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIE9iamVjdCBmb3Igd2hpY2ggdG8gZGVmaW5lIHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIFByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZC5cclxuICogQHJldHVybnMge09iamVjdH0gVGFyZ2V0IG9iamVjdC5cclxuICovXHJcbnZhciBkZWZpbmVDb25maWd1cmFibGUgPSAoZnVuY3Rpb24gKHRhcmdldCwgcHJvcHMpIHtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzW2tleV0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufSk7XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBnbG9iYWwgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCBwcm92aWRlZCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG52YXIgZ2V0V2luZG93T2YgPSAoZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgLy8gQXNzdW1lIHRoYXQgdGhlIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgTm9kZSwgd2hpY2ggbWVhbnMgdGhhdCBpdFxyXG4gICAgLy8gaGFzIHRoZSBcIm93bmVyRG9jdW1lbnRcIiBwcm9wZXJ0eSBmcm9tIHdoaWNoIHdlIGNhbiByZXRyaWV2ZSBhXHJcbiAgICAvLyBjb3JyZXNwb25kaW5nIGdsb2JhbCBvYmplY3QuXHJcbiAgICB2YXIgb3duZXJHbG9iYWwgPSB0YXJnZXQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGxvY2FsIGdsb2JhbCBvYmplY3QgaWYgaXQncyBub3QgcG9zc2libGUgZXh0cmFjdCBvbmUgZnJvbVxyXG4gICAgLy8gcHJvdmlkZWQgZWxlbWVudC5cclxuICAgIHJldHVybiBvd25lckdsb2JhbCB8fCBnbG9iYWwkMTtcclxufSk7XG5cbi8vIFBsYWNlaG9sZGVyIG9mIGFuIGVtcHR5IGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG52YXIgZW1wdHlSZWN0ID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBwcm92aWRlZCBzdHJpbmcgdG8gYSBudW1iZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWVcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBib3JkZXJzIHNpemUgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwb3NpdGlvbnMgLSBCb3JkZXJzIHBvc2l0aW9ucyAodG9wLCByaWdodCwgLi4uKVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzKSB7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHBvc2l0aW9uc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3NpdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChzaXplLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1snYm9yZGVyLScgKyBwb3NpdGlvbiArICctd2lkdGgnXTtcclxuICAgICAgICByZXR1cm4gc2l6ZSArIHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfSwgMCk7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHBhZGRpbmdzIHNpemVzIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQYWRkaW5ncyBib3guXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQYWRkaW5ncyhzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xyXG4gICAgdmFyIHBhZGRpbmdzID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHBvc2l0aW9uc18xID0gcG9zaXRpb25zOyBfaSA8IHBvc2l0aW9uc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHBvc2l0aW9uc18xW19pXTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ3BhZGRpbmctJyArIHBvc2l0aW9uXTtcclxuICAgICAgICBwYWRkaW5nc1twb3NpdGlvbl0gPSB0b0Zsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWRkaW5ncztcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBTVkcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtTVkdHcmFwaGljc0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHNcclxuICogICAgICB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIHZhciBiYm94ID0gdGFyZ2V0LmdldEJCb3goKTtcclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdCgwLCAwLCBiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgSFRNTEVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgZm9yIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgY29udGVudCByZWN0YW5nbGUuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICAvLyBDbGllbnQgd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBjYW4ndCBiZVxyXG4gICAgLy8gdXNlZCBleGNsdXNpdmVseSBhcyB0aGV5IHByb3ZpZGUgcm91bmRlZCB2YWx1ZXMuXHJcbiAgICB2YXIgY2xpZW50V2lkdGggPSB0YXJnZXQuY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XHJcbiAgICAvLyBCeSB0aGlzIGNvbmRpdGlvbiB3ZSBjYW4gY2F0Y2ggYWxsIG5vbi1yZXBsYWNlZCBpbmxpbmUsIGhpZGRlbiBhbmRcclxuICAgIC8vIGRldGFjaGVkIGVsZW1lbnRzLiBUaG91Z2ggZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGxlc3NcclxuICAgIC8vIHRoYW4gMC41IHdpbGwgYmUgZGlzY2FyZGVkIGFzIHdlbGwuXHJcbiAgICAvL1xyXG4gICAgLy8gV2l0aG91dCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGltcGxlbWVudCBzZXBhcmF0ZSBtZXRob2RzIGZvciBlYWNoIG9mXHJcbiAgICAvLyB0aG9zZSBjYXNlcyBhbmQgaXQncyBub3QgcG9zc2libGUgdG8gcGVyZm9ybSBhIHByZWNpc2UgYW5kIHBlcmZvcm1hbmNlXHJcbiAgICAvLyBlZmZlY3RpdmUgdGVzdCBmb3IgaGlkZGVuIGVsZW1lbnRzLiBFLmcuIGV2ZW4galF1ZXJ5J3MgJzp2aXNpYmxlJyBmaWx0ZXJcclxuICAgIC8vIGdpdmVzIHdyb25nIHJlc3VsdHMgZm9yIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgbGVzcyB0aGFuIDAuNS5cclxuICAgIGlmICghY2xpZW50V2lkdGggJiYgIWNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICB9XHJcbiAgICB2YXIgc3R5bGVzID0gZ2V0V2luZG93T2YodGFyZ2V0KS5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XHJcbiAgICB2YXIgcGFkZGluZ3MgPSBnZXRQYWRkaW5ncyhzdHlsZXMpO1xyXG4gICAgdmFyIGhvcml6UGFkID0gcGFkZGluZ3MubGVmdCArIHBhZGRpbmdzLnJpZ2h0O1xyXG4gICAgdmFyIHZlcnRQYWQgPSBwYWRkaW5ncy50b3AgKyBwYWRkaW5ncy5ib3R0b207XHJcbiAgICAvLyBDb21wdXRlZCBzdHlsZXMgb2Ygd2lkdGggJiBoZWlnaHQgYXJlIGJlaW5nIHVzZWQgYmVjYXVzZSB0aGV5IGFyZSB0aGVcclxuICAgIC8vIG9ubHkgZGltZW5zaW9ucyBhdmFpbGFibGUgdG8gSlMgdGhhdCBjb250YWluIG5vbi1yb3VuZGVkIHZhbHVlcy4gSXQgY291bGRcclxuICAgIC8vIGJlIHBvc3NpYmxlIHRvIHV0aWxpemUgdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpZiBvbmx5IGl0J3MgZGF0YSB3YXNuJ3RcclxuICAgIC8vIGFmZmVjdGVkIGJ5IENTUyB0cmFuc2Zvcm1hdGlvbnMgbGV0IGFsb25lIHBhZGRpbmdzLCBib3JkZXJzIGFuZCBzY3JvbGwgYmFycy5cclxuICAgIHZhciB3aWR0aCA9IHRvRmxvYXQoc3R5bGVzLndpZHRoKSwgaGVpZ2h0ID0gdG9GbG9hdChzdHlsZXMuaGVpZ2h0KTtcclxuICAgIC8vIFdpZHRoICYgaGVpZ2h0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgd2hlbiB0aGUgJ2JvcmRlci1ib3gnIGJveFxyXG4gICAgLy8gbW9kZWwgaXMgYXBwbGllZCAoZXhjZXB0IGZvciBJRSkuXHJcbiAgICBpZiAoc3R5bGVzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XHJcbiAgICAgICAgLy8gRm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIHJlcXVpcmVkIHRvIGhhbmRsZSBJbnRlcm5ldCBFeHBsb3JlciB3aGljaFxyXG4gICAgICAgIC8vIGRvZXNuJ3QgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB0byBjb21wdXRlZCBDU1MgZGltZW5zaW9ucy5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGNhbiBzYXkgdGhhdCBpZiBDU1MgZGltZW5zaW9ucyArIHBhZGRpbmdzIGFyZSBlcXVhbCB0byB0aGUgXCJjbGllbnRcIlxyXG4gICAgICAgIC8vIHByb3BlcnRpZXMgdGhlbiBpdCdzIGVpdGhlciBJRSwgYW5kIHRodXMgd2UgZG9uJ3QgbmVlZCB0byBzdWJ0cmFjdFxyXG4gICAgICAgIC8vIGFueXRoaW5nLCBvciBhbiBlbGVtZW50IG1lcmVseSBkb2Vzbid0IGhhdmUgcGFkZGluZ3MvYm9yZGVycyBzdHlsZXMuXHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgIT09IGNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ2xlZnQnLCAncmlnaHQnKSArIGhvcml6UGFkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAhPT0gY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd0b3AnLCAnYm90dG9tJykgKyB2ZXJ0UGFkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEZvbGxvd2luZyBzdGVwcyBjYW4ndCBiZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCdzIHJvb3QgZWxlbWVudCBhcyBpdHNcclxuICAgIC8vIGNsaWVudFtXaWR0aC9IZWlnaHRdIHByb3BlcnRpZXMgcmVwcmVzZW50IHZpZXdwb3J0IGFyZWEgb2YgdGhlIHdpbmRvdy5cclxuICAgIC8vIEJlc2lkZXMsIGl0J3MgYXMgd2VsbCBub3QgbmVjZXNzYXJ5IGFzIHRoZSA8aHRtbD4gaXRzZWxmIG5laXRoZXIgaGFzXHJcbiAgICAvLyByZW5kZXJlZCBzY3JvbGwgYmFycyBub3IgaXQgY2FuIGJlIGNsaXBwZWQuXHJcbiAgICBpZiAoIWlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChvbmx5IGluIEZpcmVmb3gsIGFjdHVhbGx5KSBDU1Mgd2lkdGggJiBoZWlnaHRcclxuICAgICAgICAvLyBpbmNsdWRlIHNjcm9sbCBiYXJzIHNpemUgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYXQgdGhpcyBzdGVwIGFzIHNjcm9sbFxyXG4gICAgICAgIC8vIGJhcnMgYXJlIHRoZSBvbmx5IGRpZmZlcmVuY2UgYmV0d2VlbiByb3VuZGVkIGRpbWVuc2lvbnMgKyBwYWRkaW5nc1xyXG4gICAgICAgIC8vIGFuZCBcImNsaWVudFwiIHByb3BlcnRpZXMsIHRob3VnaCB0aGF0IGlzIG5vdCBhbHdheXMgdHJ1ZSBpbiBDaHJvbWUuXHJcbiAgICAgICAgdmFyIHZlcnRTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpIC0gY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdmFyIGhvcml6U2Nyb2xsYmFyID0gTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAtIGNsaWVudEhlaWdodDtcclxuICAgICAgICAvLyBDaHJvbWUgaGFzIGEgcmF0aGVyIHdlaXJkIHJvdW5kaW5nIG9mIFwiY2xpZW50XCIgcHJvcGVydGllcy5cclxuICAgICAgICAvLyBFLmcuIGZvciBhbiBlbGVtZW50IHdpdGggY29udGVudCB3aWR0aCBvZiAzMTQuMnB4IGl0IHNvbWV0aW1lcyBnaXZlc1xyXG4gICAgICAgIC8vIHRoZSBjbGllbnQgd2lkdGggb2YgMzE1cHggYW5kIGZvciB0aGUgd2lkdGggb2YgMzE0LjdweCBpdCBtYXkgZ2l2ZVxyXG4gICAgICAgIC8vIDMxNHB4LiBBbmQgaXQgZG9lc24ndCBoYXBwZW4gYWxsIHRoZSB0aW1lLiBTbyBqdXN0IGlnbm9yZSB0aGlzIGRlbHRhXHJcbiAgICAgICAgLy8gYXMgYSBub24tcmVsZXZhbnQuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlcnRTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHZlcnRTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyhob3JpelNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGhvcml6U2Nyb2xsYmFyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdChwYWRkaW5ncy5sZWZ0LCBwYWRkaW5ncy50b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBTVkdHcmFwaGljc0VsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBpc1NWR0dyYXBoaWNzRWxlbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTb21lIGJyb3dzZXJzLCBuYW1lbHkgSUUgYW5kIEVkZ2UsIGRvbid0IGhhdmUgdGhlIFNWR0dyYXBoaWNzRWxlbWVudFxyXG4gICAgLy8gaW50ZXJmYWNlLlxyXG4gICAgaWYgKHR5cGVvZiBTVkdHcmFwaGljc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHR3JhcGhpY3NFbGVtZW50OyB9O1xyXG4gICAgfVxyXG4gICAgLy8gSWYgaXQncyBzbywgdGhlbiBjaGVjayB0aGF0IGVsZW1lbnQgaXMgYXQgbGVhc3QgYW4gaW5zdGFuY2Ugb2YgdGhlXHJcbiAgICAvLyBTVkdFbGVtZW50IGFuZCB0aGF0IGl0IGhhcyB0aGUgXCJnZXRCQm94XCIgbWV0aG9kLlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLXBhcmVuc1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0VsZW1lbnQgJiZcclxuICAgICAgICB0eXBlb2YgdGFyZ2V0LmdldEJCb3ggPT09ICdmdW5jdGlvbicpOyB9O1xyXG59KSgpO1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhIGRvY3VtZW50IGVsZW1lbnQgKDxodG1sPikuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkge1xyXG4gICAgcmV0dXJuIHRhcmdldCA9PT0gZ2V0V2luZG93T2YodGFyZ2V0KS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYW4gYXBwcm9wcmlhdGUgY29udGVudCByZWN0YW5nbGUgZm9yIHByb3ZpZGVkIGh0bWwgb3Igc3ZnIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIGlmICghaXNCcm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIGlmIChpc1NWR0dyYXBoaWNzRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIHJlY3RhbmdsZSB3aXRoIGFuIGludGVyZmFjZSBvZiB0aGUgRE9NUmVjdFJlYWRPbmx5LlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZG9tcmVjdHJlYWRvbmx5XHJcbiAqXHJcbiAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gT2JqZWN0IHdpdGggcmVjdGFuZ2xlJ3MgeC95IGNvb3JkaW5hdGVzIGFuZCBkaW1lbnNpb25zLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdFJlYWRPbmx5fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVhZE9ubHlSZWN0KF9hKSB7XHJcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAvLyBJZiBET01SZWN0UmVhZE9ubHkgaXMgYXZhaWxhYmxlIHVzZSBpdCBhcyBhIHByb3RvdHlwZSBmb3IgdGhlIHJlY3RhbmdsZS5cclxuICAgIHZhciBDb25zdHIgPSB0eXBlb2YgRE9NUmVjdFJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJyA/IERPTVJlY3RSZWFkT25seSA6IE9iamVjdDtcclxuICAgIHZhciByZWN0ID0gT2JqZWN0LmNyZWF0ZShDb25zdHIucHJvdG90eXBlKTtcclxuICAgIC8vIFJlY3RhbmdsZSdzIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZSBhbmQgbm9uLWVudW1lcmFibGUuXHJcbiAgICBkZWZpbmVDb25maWd1cmFibGUocmVjdCwge1xyXG4gICAgICAgIHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgdG9wOiB5LFxyXG4gICAgICAgIHJpZ2h0OiB4ICsgd2lkdGgsXHJcbiAgICAgICAgYm90dG9tOiBoZWlnaHQgKyB5LFxyXG4gICAgICAgIGxlZnQ6IHhcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgRE9NUmVjdEluaXQgb2JqZWN0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkaW1lbnNpb25zIGFuZCB0aGUgeC95IGNvb3JkaW5hdGVzLlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZGljdGRlZi1kb21yZWN0aW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFJlY3RhbmdsZSdzIHdpZHRoLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gUmVjdGFuZ2xlJ3MgaGVpZ2h0LlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWN0SW5pdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbn1cblxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGF0aW9ucyBvZiB0aGUgY29udGVudCByZWN0YW5nbGUgb2ZcclxuICogcHJvdmlkZWQgRE9NIGVsZW1lbnQgYW5kIGZvciBrZWVwaW5nIHRyYWNrIG9mIGl0J3MgY2hhbmdlcy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIHdpZHRoIG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCcm9hZGNhc3RlZCBoZWlnaHQgb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7RE9NUmVjdEluaXR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBjb250ZW50IHJlY3RhbmdsZSBhbmQgdGVsbHMgd2hldGhlciBpdCdzIHdpZHRoIG9yIGhlaWdodCBwcm9wZXJ0aWVzXHJcbiAgICAgKiBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYnJvYWRjYXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBnZXRDb250ZW50UmVjdCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSByZWN0O1xyXG4gICAgICAgIHJldHVybiAocmVjdC53aWR0aCAhPT0gdGhpcy5icm9hZGNhc3RXaWR0aCB8fFxyXG4gICAgICAgICAgICByZWN0LmhlaWdodCAhPT0gdGhpcy5icm9hZGNhc3RIZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyAnYnJvYWRjYXN0V2lkdGgnIGFuZCAnYnJvYWRjYXN0SGVpZ2h0JyBwcm9wZXJ0aWVzIHdpdGggYSBkYXRhXHJcbiAgICAgKiBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXMgb2YgdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fSBMYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY29udGVudFJlY3RfO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xyXG59KCkpO1xuXG52YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckVudHJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0aGF0IGlzIGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBEYXRhIG9mIHRoZSBlbGVtZW50J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0LCByZWN0SW5pdCkge1xyXG4gICAgICAgIHZhciBjb250ZW50UmVjdCA9IGNyZWF0ZVJlYWRPbmx5UmVjdChyZWN0SW5pdCk7XHJcbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGVcclxuICAgICAgICAvLyBhbmQgYXJlIGFsc28gbm90IGVudW1lcmFibGUgaW4gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFByb3BlcnR5IGFjY2Vzc29ycyBhcmUgbm90IGJlaW5nIHVzZWQgYXMgdGhleSdkIHJlcXVpcmUgdG8gZGVmaW5lIGFcclxuICAgICAgICAvLyBwcml2YXRlIFdlYWtNYXAgc3RvcmFnZSB3aGljaCBtYXkgY2F1c2UgbWVtb3J5IGxlYWtzIGluIGJyb3dzZXJzIHRoYXRcclxuICAgICAgICAvLyBkb24ndCBzdXBwb3J0IHRoaXMgdHlwZSBvZiBjb2xsZWN0aW9ucy5cclxuICAgICAgICBkZWZpbmVDb25maWd1cmFibGUodGhpcywgeyB0YXJnZXQ6IHRhcmdldCwgY29udGVudFJlY3Q6IGNvbnRlbnRSZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlclNQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkXHJcbiAgICAgKiAgICAgIHdoZW4gb25lIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2VzIGl0J3MgY29udGVudCBkaW1lbnNpb25zLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBDb250cm9sbGVyIGluc3RhbmNlIHdoaWNoXHJcbiAgICAgKiAgICAgIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgdXBkYXRlcyBvZiBvYnNlcnZlci5cclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJ9IGNhbGxiYWNrQ3R4IC0gUmVmZXJlbmNlIHRvIHRoZSBwdWJsaWNcclxuICAgICAqICAgICAgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2Ugd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCBjYWxsYmFja0N0eCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbGxlY3Rpb24gb2YgcmVzaXplIG9ic2VydmF0aW9ucyB0aGF0IGhhdmUgZGV0ZWN0ZWQgY2hhbmdlcyBpbiBkaW1lbnNpb25zXHJcbiAgICAgICAgICogb2YgZWxlbWVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdHJ5IG9mIHRoZSBSZXNpemVPYnNlcnZhdGlvbiBpbnN0YW5jZXMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TWFwPEVsZW1lbnQsIFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18gPSBuZXcgTWFwU2hpbSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8gPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tDdHhfID0gY2FsbGJhY2tDdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICBpZiAob2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLnNldCh0YXJnZXQsIG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLmFkZE9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIC8vIEZvcmNlIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIHN0b3Agb2JzZXJ2aW5nLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgbm90IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLnNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIGVsZW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvbGxlY3RzIG9ic2VydmF0aW9uIGluc3RhbmNlcyB0aGUgYXNzb2NpYXRlZCBlbGVtZW50IG9mIHdoaWNoIGhhcyBjaGFuZ2VkXHJcbiAgICAgKiBpdCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZ2F0aGVyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YXRpb24uaXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5wdXNoKG9ic2VydmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyBpbml0aWFsIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYSBsaXN0IG9mIFJlc2l6ZU9ic2VydmVyRW50cnlcclxuICAgICAqIGluc3RhbmNlcyBjb2xsZWN0ZWQgZnJvbSBhY3RpdmUgcmVzaXplIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmJyb2FkY2FzdEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIG9ic2VydmVyIGRvZXNuJ3QgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNhbGxiYWNrQ3R4XztcclxuICAgICAgICAvLyBDcmVhdGUgUmVzaXplT2JzZXJ2ZXJFbnRyeSBpbnN0YW5jZSBmb3IgZXZlcnkgYWN0aXZlIG9ic2VydmF0aW9uLlxyXG4gICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLm1hcChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlckVudHJ5KG9ic2VydmF0aW9uLnRhcmdldCwgb2JzZXJ2YXRpb24uYnJvYWRjYXN0UmVjdCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrXy5jYWxsKGN0eCwgZW50cmllcywgY3R4KTtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIGNvbGxlY3Rpb24gb2YgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmNsZWFyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5zcGxpY2UoMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB3aGV0aGVyIG9ic2VydmVyIGhhcyBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuaGFzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTUEk7XHJcbn0oKSk7XG5cbi8vIFJlZ2lzdHJ5IG9mIGludGVybmFsIG9ic2VydmVycy4gSWYgV2Vha01hcCBpcyBub3QgYXZhaWxhYmxlIHVzZSBjdXJyZW50IHNoaW1cclxuLy8gZm9yIHRoZSBNYXAgY29sbGVjdGlvbiBhcyBpdCBoYXMgYWxsIHJlcXVpcmVkIG1ldGhvZHMgYW5kIGJlY2F1c2UgV2Vha01hcFxyXG4vLyBjYW4ndCBiZSBmdWxseSBwb2x5ZmlsbGVkIGFueXdheS5cclxudmFyIG9ic2VydmVycyA9IHR5cGVvZiBXZWFrTWFwICE9PSAndW5kZWZpbmVkJyA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgTWFwU2hpbSgpO1xyXG4vKipcclxuICogUmVzaXplT2JzZXJ2ZXIgQVBJLiBFbmNhcHN1bGF0ZXMgdGhlIFJlc2l6ZU9ic2VydmVyIFNQSSBpbXBsZW1lbnRhdGlvblxyXG4gKiBleHBvc2luZyBvbmx5IHRob3NlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgc3BlYy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNpemVPYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udHJvbGxlciA9IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgdGhpcyk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnNldCh0aGlzLCBvYnNlcnZlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0oKSk7XHJcbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcyBvZiBSZXNpemVPYnNlcnZlci5cclxuW1xyXG4gICAgJ29ic2VydmUnLFxyXG4gICAgJ3Vub2JzZXJ2ZScsXHJcbiAgICAnZGlzY29ubmVjdCdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcclxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gb2JzZXJ2ZXJzLmdldCh0aGlzKSlbbWV0aG9kXS5hcHBseShfYSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn0pO1xuXG52YXIgaW5kZXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRXhwb3J0IGV4aXN0aW5nIGltcGxlbWVudGF0aW9uIGlmIGF2YWlsYWJsZS5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcydcclxuXHJcbmltcG9ydCB7UGxheWVyQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyLkNvbnRleHQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpIHtcclxuICBjb25zdCB7ZXBpc29kZUxpc3QsIGN1cnJlbnRFcGlzb2RlSW5kZXh9ID0gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllckNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIvPlxyXG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSA8L3N0cm9uZz5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICB7IGVwaXNvZGUgPyAoIC8vIHNlIGV4aXN0ZSBhbGdvIGVtIGVwaXNvZGUgZmHDp2EgaXNzb1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHdpZHRoID17NTkyfVxyXG4gICAgICAgICAgICBoZWlnaHQgPXs1OTJ9XHJcbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIgIFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5tZW1iZXJzfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6ICggLy8gc2Vuw6NvIGZhw6dhIGlzc29cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5UGxheWVyfT5cclxuICAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdHIgcGFyYSBvdXZpcjwvc3Ryb25nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIH1cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXshZXBpc29kZT8gc3R5bGVzLmVtcHR5OiAnJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgPHNwYW4+MDA6MDA8L3NwYW4+XHJcbiAgICAgICAgICB7IGVwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgIDxTbGlkZXIvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlTbGlkZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICApIH1cclxuICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgYW50ZXJpb3JcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2FyIFByw7N4aW1hXCIvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwZWF0LnN2Z1wiIGFsdD1cIlJlcGV0aXJcIi8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9