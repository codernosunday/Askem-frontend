module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/questions/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/add-answer/add-answer.module.css":
/*!*****************************************************!*\
  !*** ./components/add-answer/add-answer.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "add-answer_container__a2UTk",
	"textarea": "add-answer_textarea__3uSC0",
	"status": "add-answer_status__3QM6A"
};


/***/ }),

/***/ "./components/add-answer/index.js":
/*!****************************************!*\
  !*** ./components/add-answer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/modal */ "./store/modal.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../textarea */ "./components/textarea/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tag */ "./components/tag/index.js");
/* harmony import */ var _add_answer_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-answer.module.css */ "./components/add-answer/add-answer.module.css");
/* harmony import */ var _add_answer_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_add_answer_module_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "W:\\ClientAskem\\components\\add-answer\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const AddAnswer = ({
  id,
  tags,
  setQuestion
}) => {
  const {
    authAxios
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_4__["FetchContext"]);
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  const {
    handleComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      text: ''
    },
    onSubmit: async (values, {
      setStatus,
      resetForm
    }) => {
      setLoading(true);
      try {
        const {
          data
        } = await authAxios.post(`/answer/${id}`, values);
        setQuestion(data);
        resetForm({});
      } catch (error) {
        setStatus(error.response.data.message);
      }
      setLoading(false);
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_3__["object"]({
      text: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('Body is missing.').min(30, 'Body must be at least 30 characters.').max(30000, 'Body cannot be longer than 30000 characters.')
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, ({
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => __jsx("form", {
    className: _add_answer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.container,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Your answer"), __jsx(_textarea__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "text",
    autoComplete: "off",
    value: values.text,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.text && errors.text,
    errorMessage: errors.text && errors.text,
    className: _add_answer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.textarea,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _add_answer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, status), __jsx("div", {
    className: _add_answer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "submit",
    primary: true,
    isLoading: loading,
    disabled: isSubmitting,
    onClick: () => !isAuthenticated() && handleComponentVisible(true, 'signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Post Your Answer")), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "Browse other questions tagged \xA0", tags.map(tag => __jsx(_tag__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: tag,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, tag)), "or \xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/questions/ask",
    as: "/questions/ask",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "ask your own question.")))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddAnswer);

/***/ }),

/***/ "./components/answer-container/answer-container.module.css":
/*!*****************************************************************!*\
  !*** ./components/answer-container/answer-container.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "answer-container_container__1JhnB",
	"header": "answer-container_header__2xWxk",
	"fill": "answer-container_fill__2nEgn"
};


/***/ }),

/***/ "./components/answer-container/index.js":
/*!**********************************************!*\
  !*** ./components/answer-container/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button-group */ "./components/button-group/index.js");
/* harmony import */ var _answer_container_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answer-container.module.css */ "./components/answer-container/answer-container.module.css");
/* harmony import */ var _answer_container_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_answer_container_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "W:\\ClientAskem\\components\\answer-container\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AnswerContainer = ({
  answerCount,
  answerSortType,
  setAnswerSortType,
  children
}) => {
  return __jsx("div", {
    className: _answer_container_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _answer_container_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _answer_container_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, answerCount, " Answers")), __jsx(_button_group__WEBPACK_IMPORTED_MODULE_1__["default"], {
    buttons: ['Votes', 'Newest', 'Oldest'],
    selected: answerSortType,
    setSelected: setAnswerSortType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), children);
};
/* harmony default export */ __webpack_exports__["default"] = (AnswerContainer);

/***/ }),

/***/ "./components/button-group/button-group.module.css":
/*!*********************************************************!*\
  !*** ./components/button-group/button-group.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "button-group_container__F0-AA",
	"active": "button-group_active__3Y2Lf",
	"borderBottom": "button-group_borderBottom__2Wu6p"
};


/***/ }),

/***/ "./components/button-group/index.js":
/*!******************************************!*\
  !*** ./components/button-group/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-group.module.css */ "./components/button-group/button-group.module.css");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "W:\\ClientAskem\\components\\button-group\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ButtonGroup = ({
  buttons,
  selected,
  setSelected,
  borderBottom = false
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container, borderBottom && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderBottom),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, buttons.map(button => __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: button,
    className: selected === button && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,
    onClick: () => setSelected(button),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, button)));
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);

/***/ }),

/***/ "./components/button/button.module.css":
/*!*********************************************!*\
  !*** ./components/button/button.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "button_button__2-1iQ",
	"primary": "button_primary__1mGdL",
	"secondary": "button_secondary__1sgMH",
	"full": "button_full__1VDks",
	"isLoading": "button_isLoading__3lt2o",
	"spin": "button_spin__2xDvi"
};


/***/ }),

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.module.css */ "./components/button/button.module.css");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "W:\\ClientAskem\\components\\button\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const LinkButton = _ref => {
  let {
      href,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, ["href", "children"]);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    as: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), children));
};
const BaseButton = _ref2 => {
  let {
      children
    } = _ref2,
    props = _objectWithoutProperties(_ref2, ["children"]);
  return __jsx("button", _extends({
    type: "button"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), children);
};
const Button = _ref3 => {
  let {
      primary,
      secondary,
      full = false,
      isLoading = false,
      children,
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, ["primary", "secondary", "full", "isLoading", "children", "className"]);
  const Comp = props.href ? LinkButton : BaseButton;
  return __jsx(Comp, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, primary && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.primary, secondary && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.secondary, full && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.full, isLoading && _button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), children);
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/detail-page-container/detail-page-container.module.css":
/*!***************************************************************************!*\
  !*** ./components/detail-page-container/detail-page-container.module.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "detail-page-container_container__3BRtT"
};


/***/ }),

/***/ "./components/detail-page-container/index.js":
/*!***************************************************!*\
  !*** ./components/detail-page-container/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _layout_extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/extra */ "./components/layout/extra/index.js");
/* harmony import */ var _layout_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/main */ "./components/layout/main/index.js");
/* harmony import */ var _detail_page_container_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-page-container.module.css */ "./components/detail-page-container/detail-page-container.module.css");
/* harmony import */ var _detail_page_container_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_detail_page_container_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "W:\\ClientAskem\\components\\detail-page-container\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const DetailPageContainer = ({
  children
}) => {
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: _detail_page_container_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_layout_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    border: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, children), size.width > _constants__WEBPACK_IMPORTED_MODULE_1__["default"].TABLET_SIZE && __jsx(_layout_extra__WEBPACK_IMPORTED_MODULE_3__["default"], {
    marginTop: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 42
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (DetailPageContainer);

/***/ }),

/***/ "./components/icons/Addcomment.js":
/*!****************************************!*\
  !*** ./components/icons/Addcomment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Addcomment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function Addcomment(props) {
  return __jsx("svg", _extends({
    width: "2em",
    height: "2em",
    viewBox: "0 0 23 23",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M12 8V14M15 11H9M12.2896 17.9984C18.0965 17.9343 21 15.9189 21 11C21 6 18 4 12 4C6 4 3 6 3 11C3 14.0771 4.13623 16.018 6.40868 17.0557L5 21L12.2896 17.9984Z",
    stroke: "#ffffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Addcomment);

/***/ }),

/***/ "./components/icons/Admin.js":
/*!***********************************!*\
  !*** ./components/icons/Admin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function Admins(props) {
  return __jsx("svg", _extends({
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 21 21",
    fill: "#fcd394"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    fill: "#fcd394",
    "fill-rule": "evenodd",
    d: "M10.0248,9.97521 L5.83008,14.1699 C4.72551,15.2745 2.93464,15.2745 1.83008,14.1699 C0.725505,13.0654 0.725506,11.2745 1.83008,10.1699 L6.02479,5.97521 C6.0084,5.81904 6,5.6605 6,5.5 C6,3.18096 7.7542,1.27164 10.008,1.02658 C10.1696,1.00901 10.3338,1 10.5,1 C11.1906,1 11.8448,1.15555 12.4295,1.43351 L10.2851,3.57797 C9.6993,4.16376 9.6993,5.11351 10.2851,5.69929 C10.8709,6.28508 11.8206,6.28508 12.4064,5.69929 L14.5564,3.54932 C14.8407,4.13945 15,4.80112 15,5.5 C15,5.65429 14.9922,5.80676 14.9771,5.95705 C14.748,8.22767 12.831,10 10.5,10 C10.3395,10 10.181,9.9916 10.0248,9.97521 Z M9.28499,7.88658 L4.41586,12.7557 C4.09234,13.0792 3.56781,13.0792 3.24429,12.7557 C2.92077,12.4322 2.92077,11.9077 3.24429,11.5841 L8.11342,6.715 L9.28499,7.88658 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Admins);

/***/ }),

/***/ "./components/icons/Alert.js":
/*!***********************************!*\
  !*** ./components/icons/Alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Alert.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgAlert(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M8 16A8 8 0 118 0a8 8 0 010 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgAlert);

/***/ }),

/***/ "./components/icons/ArrowDown.js":
/*!***************************************!*\
  !*** ./components/icons/ArrowDown.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\ArrowDown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgArrowDown(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M2 10h32L18 26 2 10z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgArrowDown);

/***/ }),

/***/ "./components/icons/ArrowUp.js":
/*!*************************************!*\
  !*** ./components/icons/ArrowUp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\ArrowUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgArrowUp(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M2 26h32L18 10 2 26z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgArrowUp);

/***/ }),

/***/ "./components/icons/Close.js":
/*!***********************************!*\
  !*** ./components/icons/Close.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Close.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgClose(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "close_svg__feather close_svg__feather-x"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M18 6L6 18M6 6l12 12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgClose);

/***/ }),

/***/ "./components/icons/Delete.js":
/*!************************************!*\
  !*** ./components/icons/Delete.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Delete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function Delete(props) {
  return __jsx("svg", _extends({
    width: "2em",
    height: "2em",
    viewBox: "0 0 25 25",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M10 11V17",
    stroke: "#d21404",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), " ", __jsx("path", {
    d: "M14 11V17",
    stroke: "#d21404",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 122
    }
  }), " ", __jsx("path", {
    d: "M4 7H20",
    stroke: "#d21404",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 231
    }
  }), " ", __jsx("path", {
    d: "M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z",
    stroke: "#d21404",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 338
    }
  }), " ", __jsx("path", {
    d: "M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
    stroke: "#d21404",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 510
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Delete);

/***/ }),

/***/ "./components/icons/Group.js":
/*!***********************************!*\
  !*** ./components/icons/Group.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Group.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function Groups(props) {
  return __jsx("svg", _extends({
    width: "1.25em",
    height: "1.25em",
    viewBox: "0 0 23 23",
    fill: "#fcd394"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M24,10c0,3.02-1.34,5.71-3.45,7.55C22.07,15.79,23,13.51,23,11c0-5.52-4.48-10-10-10c-2.51,0-4.79,0.93-6.55,2.45 C8.29,1.34,10.98,0,14,0C19.52,0,24,4.48,24,10z M12,2C8.98,2,6.29,3.34,4.45,5.45C6.21,3.93,8.49,3,11,3c5.52,0,10,4.48,10,10 c0,2.51-0.93,4.79-2.45,6.55C20.66,17.71,22,15.02,22,12C22,6.48,17.52,2,12,2z M20,14c0,5.52-4.48,10-10,10S0,19.52,0,14 C0,8.48,4.48,4,10,4S20,8.48,20,14z M16,13.32h-5.3V8H9.3v5.32H4v1.31h5.3V20h1.39v-5.37H16V13.32z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Groups);

/***/ }),

/***/ "./components/icons/Logo.js":
/*!**********************************!*\
  !*** ./components/icons/Logo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function SvgLogo(props) {
  return __jsx("svg", {
    width: "1.5em",
    height: "1.5em",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13.59 14.61",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, `
      .b { fill: #f4f1f3; }
      .c { fill: #e2ad8c; }
      .d { fill: #e1aa88; }
      .e { fill: #f3f1f2; }
      .f { fill: #35338e; }
      .g { fill: #36348e; }
      .h { fill: #d7a789; }
      .i { fill: #fdd594; }
      .j { fill: #eab288; }
      .k { fill: #37358e; }
      .l { fill: #383790; }
      .m { fill: #fbd395; }
      .n { fill: #353490; }
      .o { fill: #dfa887; }
      .p { fill: #e3ac87; }
      .q { fill: #fcd394; }
      .r { fill: #f9f8f9; }
      `)), __jsx("path", {
    className: "n",
    d: "M3.58,11.47c-.23-.06-.45-.11-.67-.19-.74-.28-1.22-.98-1.23-1.77,0-.46,0-.91,0-1.37,0-.17-.05-.25-.22-.32C.55,7.47,0,6.68,0,5.73c0-.97,.54-1.76,1.48-2.13,.18-.07,.21-.16,.21-.33,0-.44,0-.89,0-1.33C1.69,.86,2.54,0,3.62,0,5.77,0,7.91,0,10.05,0c.78,0,1.42,.36,1.72,1.08,.42,1,.74,2.03,1.1,3.05,.21,.61,.42,1.23,.63,1.84,.26,.78-.05,1.34-.85,1.57q-.67,.19-.67,.89c0,.34,0,.68,0,1.03,0,1.06-.79,1.91-1.85,1.95-.5,.02-.79,.37-1.16,.6-.05,.03-.06,.14-.06,.22-.14,1.23-.78,2.06-1.78,2.29-1.17,.28-2.44-.2-3.03-1.22-.25-.44-.34-.98-.49-1.47-.04-.12-.02-.25-.04-.37ZM.92,5.24l-.05,.2c-.2,1.01,.5,1.76,1.56,1.67,.02,.12,.06,.24,.06,.36,0,.66,0,1.32,0,1.98,0,.54,.35,.99,.83,1.12,.24,.07,.45,.07,.5-.27,.03-.18,.1-.35,.16-.52,.13-.24,.24-.49,.41-.71,.5-.67,1.44-.59,1.83,.15,.09,.17,.18,.35,.24,.53,.07,.21,.18,.25,.39,.18,.58-.19,1.18-.35,1.76-.53,.6-.19,1.12-.1,1.56,.36l.25,.76c.53-.15,.81-.57,.77-1.12,.01-.76,.03-1.53,.04-2.29,.35-.1,.69-.2,1.04-.29,.58-.16,.63-.26,.38-.83-.49-1.45-.97-2.91-1.47-4.36-.2-.56-.63-.83-1.24-.82-2,.01-4,0-6.01,0-.12,0-.25,.02-.37,.03l-.07,.02h0c-.57,.07-.96,.5-.97,1.12-.01,.77,0,1.55,0,2.32-.14,0-.27,0-.41,0-.55,.02-1.01,.39-1.16,.94h0Zm8.34,4.92c-.15,0-.32-.01-.46,.03-.75,.22-1.5,.46-2.25,.68-.37,.11-.51,.03-.66-.33-.12-.28-.22-.57-.36-.85-.05-.11-.17-.23-.28-.25-.07-.02-.17,.14-.26,.22l-.26,.54c-.09,.29-.22,.58-.27,.87-.14,.73,0,1.41,.46,2,.49,.62,1.46,.89,2.2,.6,.67-.26,1.04-.97,.98-1.82,0-.11,.07-.28,.16-.35,.34-.26,.7-.47,1.04-.72,.33-.24,.31-.47-.03-.63Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("path", {
    className: "q",
    d: "M10.14,9.77c-.44-.47-.96-.56-1.56-.36-.58,.19-1.18,.35-1.76,.53-.2,.06-.32,.03-.39-.18-.06-.18-.15-.36-.24-.53-.38-.74-1.32-.82-1.83-.15-.16,.22-.27,.47-.41,.71-.52-.08-.73-.31-.73-.85,0-1.49,0-2.99,0-4.48,0-.79-.03-1.59-.05-2.38,.1-.1,.2-.21,.32-.28,.18-.1,.38-.24,.57-.24,1.38-.02,2.77,0,4.15,0-.3,.3-.36,.54-.17,.73,.26,.26,.48,.1,.71-.08,.34-.27,.8-.24,1.17,.03,.37,.27,.48,.26,.77-.07l1.35,3.93c-.09,.04-.18,.09-.27,.12q-.64,.21-.6,.91c-.01,.76-.03,1.53-.04,2.29-.29,.25-.61,.42-1.02,.36Zm-3.25-4.74l-.34-.65c.07-.02,.18-.03,.22-.08,.09-.13,.23-.29,.21-.41-.02-.13-.2-.32-.31-.33-.52-.04-1.05-.04-1.57,0-.12,0-.31,.21-.31,.32,0,.14,.13,.3,.24,.43,.05,.06,.18,.06,.24,.07-.12,.26-.28,.49-.34,.74-.12,.59,.47,1.35,1.4,1.06,.07,.03,.14,.08,.21,.08,.73,0,1.46,0,2.19,0,.07,0,.14-.05,.21-.08,.89,.19,1.41-.23,1.41-1.14,0-.3,0-.59,0-.89,0-.61-.41-1.04-.98-1.05-.59-.01-1.01,.41-1.03,1.03-.01,.29-.01,.59-.02,.89h-1.43Zm.01,2.32c.23-.1,.4-.22,.2-.46-.22-.26-.5-.35-.83-.27-.32,.07-.53,.28-.58,.6-.02,.09,.11,.23,.2,.32,.08,.1,.24,.15,.29,.25,.32,.64,.97,1.02,1.64,.95,.36-.04,.55-.2,.51-.46-.04-.32-.26-.38-.55-.36-.42,.03-.69-.15-.87-.57Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 1525
    }
  }), __jsx("path", {
    className: "r",
    d: "M12.07,6.09c-.45-1.31-.9-2.62-1.35-3.93,.04-.28-.1-.47-.32-.62-.73-.49-1.45-.43-2.16,.01-1.38,0-2.77-.01-4.15,0-.19,0-.39,.14-.57,.24-.12,.07-.21,.19-.32,.28,.02-.42,0-.85,.26-1.21h0l.07-.02c.12,0,.25-.03,.37-.03,2,0,4,0,6.01,0,.61,0,1.04,.26,1.24,.82,.51,1.45,.98,2.9,1.47,4.36l-.55,.1Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 2689
    }
  }), __jsx("path", {
    className: "c",
    d: "M3.46,.86c-.27,.37-.24,.79-.26,1.21,.02,.79,.04,1.59,.05,2.38,0,1.49,0,2.99,0,4.48,0,.53,.21,.77,.73,.85-.05,.17-.13,.34-.16,.52-.05,.33-.25,.33-.5,.27-.48-.13-.82-.58-.83-1.12,0-.66,0-1.32,0-1.98,0-.12-.04-.24-.06-.36,.02-.12,.07-.24,.07-.36,0-.69,0-1.38,0-2.06v-.39c0-.77-.01-1.55,0-2.32,0-.62,.39-1.05,.97-1.12Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3003
    }
  }), __jsx("path", {
    className: "i",
    d: "M4.73,10.21c.09-.18,.17-.36,.26-.54,.09,.11,.2,.2,.25,.32,.11,.27,.18,.56,.28,.84,.23,.59,.49,.7,1.07,.47,.54-.22,1.07-.45,1.61-.66,.35-.13,.71-.22,1.06-.33-.12,.11-.21,.25-.35,.34-.35,.22-.71,.41-1.06,.61-.2,.11-.3,.23-.26,.51,.07,.5,0,1.03-.45,1.36-.44,.32-.92,.24-1.38-.01-.57-.32-.92-.82-1.01-1.46-.07-.48-.02-.97-.03-1.45Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3344
    }
  }), __jsx("path", {
    className: "o",
    d: "M4.73,10.21c0,.48-.03,.97,.03,1.45,.09,.64,.43,1.14,1.01,1.46,.46,.26,.94,.33,1.38,.01,.45-.33,.52-.85,.45-1.36-.04-.28,.06-.4,.26-.51,.35-.2,.72-.39,1.06-.61,.13-.08,.23-.22,.35-.34v-.14c.33,.16,.35,.38,.02,.63-.34,.25-.7,.47-1.04,.72-.09,.07-.17,.23-.16,.35,.06,.85-.31,1.56-.98,1.82-.74,.29-1.71,.02-2.2-.6-.47-.59-.6-1.27-.46-2,.06-.3,.18-.58,.27-.87Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3698
    }
  }), __jsx("path", {
    className: "m",
    d: "M2.49,4.69c0,.69,0,1.38,0,2.06,0,.12-.04,.24-.07,.36-1.06,.09-1.76-.66-1.56-1.67l.05-.2h0c.47-.33,.99-.52,1.57-.55Zm-.48,1.04c0-.07,.01-.14,0-.2-.03-.12-.08-.23-.12-.34-.12,.06-.27,.1-.36,.2-.08,.08-.11,.22-.12,.34-.02,.24,.22,.56,.41,.55,.36-.02,.13-.31,.2-.47,0-.02,0-.04,0-.07Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4080
    }
  }), __jsx("path", {
    className: "e",
    d: "M9.26,10.17v.14c-.35,.11-.71,.2-1.05,.33-.54,.2-1.07,.44-1.61,.66-.59,.24-.85,.13-1.07-.47-.1-.28-.17-.57-.28-.84-.05-.12-.17-.22-.25-.32,.09-.08,.19-.23,.26-.22,.11,.02,.23,.14,.28,.25,.14,.27,.24,.57,.36,.85,.15,.36,.3,.44,.66,.33,.75-.23,1.5-.46,2.25-.68,.14-.04,.31-.02,.46-.03Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4387
    }
  }), __jsx("path", {
    className: "d",
    d: "M12.07,6.09l.55-.1c.25,.57,.2,.67-.38,.83-.35,.1-.69,.2-1.04,.29q-.04-.7,.6-.91c.09-.03,.18-.08,.27-.12Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4696
    }
  }), __jsx("path", {
    className: "b",
    d: "M2.49,4.69c-.58,.03-1.1,.22-1.57,.55,.15-.54,.61-.92,1.16-.94,.14,0,.27,0,.41,0,0,.13,0,.26,0,.39Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4827
    }
  }), __jsx("path", {
    className: "h",
    d: "M10.14,9.77c.4,.06,.73-.11,1.02-.36,.04,.55-.24,.96-.77,1.12l-.25-.76Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4952
    }
  }), __jsx("path", {
    className: "b",
    d: "M.92,5.24l-.05,.2,.05-.2Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5049
    }
  }), __jsx("path", {
    className: "c",
    d: "M3.53,.85l-.07,.02,.07-.02Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5101
    }
  }), __jsx("path", {
    className: "f",
    d: "M8.32,5.04c0-.3,0-.59,.02-.89,.02-.62,.44-1.05,1.03-1.03,.57,.01,.97,.44,.98,1.05,0,.3,0,.59,0,.89,0,.91-.53,1.33-1.41,1.14-.43-.26-.61-.66-.61-1.15Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5155
    }
  }), __jsx("path", {
    className: "g",
    d: "M6.32,6.19c-.92,.29-1.52-.47-1.4-1.06,.05-.25,.22-.48,.34-.74-.06-.02-.19-.01-.24-.07-.11-.12-.25-.29-.24-.43,0-.12,.2-.32,.31-.32,.52-.04,1.05-.04,1.57,0,.12,0,.3,.2,.31,.33,.02,.13-.12,.29-.21,.41-.04,.05-.14,.05-.22,.08l.34,.65c.08,.52-.15,.88-.57,1.15Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5331
    }
  }), __jsx("path", {
    className: "k",
    d: "M6.9,7.36c.18,.42,.44,.6,.87,.57,.29-.02,.51,.04,.55,.36,.04,.27-.15,.43-.51,.46-.67,.07-1.32-.32-1.64-.95-.05-.11-.2-.16-.29-.25-.08-.09-.21-.23-.2-.32,.05-.32,.27-.52,.58-.6,.33-.08,.61,0,.83,.27,.2,.24,.04,.36-.2,.46Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5614
    }
  }), __jsx("path", {
    className: "l",
    d: "M8.23,1.55c.72-.45,1.44-.51,2.16-.01,.22,.15,.36,.34,.32,.62-.3,.33-.41,.34-.77,.07-.37-.27-.82-.3-1.17-.03-.23,.18-.45,.34-.71,.08-.19-.19-.13-.43,.17-.73Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5861
    }
  }), __jsx("path", {
    className: "p",
    d: "M6.32,6.19c.42-.27,.65-.63,.57-1.15h1.43c0,.5,.18,.89,.61,1.15-.07,.03-.14,.08-.21,.08-.73,0-1.46,0-2.19,0-.07,0-.14-.05-.21-.08Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6044
    }
  }), __jsx("path", {
    className: "j",
    d: "M2.01,5.73s0,.05,0,.07c-.06,.16,.16,.45-.2,.47-.19,.01-.43-.3-.41-.55,0-.12,.04-.26,.12-.34,.09-.09,.24-.13,.36-.2,.04,.11,.09,.23,.12,.34,.02,.06,0,.14,0,.2Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6200
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgLogo);

/***/ }),

/***/ "./components/icons/Menu.js":
/*!**********************************!*\
  !*** ./components/icons/Menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgMenu(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "menu_svg__feather menu_svg__feather-menu"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M3 12h18M3 6h18M3 18h18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgMenu);

/***/ }),

/***/ "./components/icons/Search.js":
/*!************************************!*\
  !*** ./components/icons/Search.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgSearch(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgSearch);

/***/ }),

/***/ "./components/icons/Spinner.js":
/*!*************************************!*\
  !*** ./components/icons/Spinner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Spinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgSpinner(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.9166666666666666s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(30 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.8333333333333334s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(60 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.75s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(90 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.6666666666666666s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(120 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5833333333333334s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(150 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(180 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.4166666666666667s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(210 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.3333333333333333s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(240 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.25s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(270 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.16666666666666666s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(300 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.08333333333333333s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  })), __jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(330 50 50)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgSpinner);

/***/ }),

/***/ "./components/icons/Tag.js":
/*!*********************************!*\
  !*** ./components/icons/Tag.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Tag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function Tags(props) {
  return __jsx("svg", _extends({
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 22 22",
    fill: "#fcd394"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.5916 20.6555 9.24711 17.9665 6.55812L16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.5988 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816ZM10.1234 7.27098C10.911 8.05856 10.911 9.33549 10.1234 10.1231C9.33581 10.9107 8.05888 10.9107 7.27129 10.1231C6.48371 9.33549 6.48371 8.05856 7.27129 7.27098C8.05888 6.48339 9.33581 6.48339 10.1234 7.27098ZM19.0511 12.0511L12.0721 19.0303C11.7792 19.3232 11.3043 19.3232 11.0114 19.0303C10.7185 18.7375 10.7185 18.2626 11.0114 17.9697L17.9904 10.9904C18.2833 10.6975 18.7582 10.6975 19.0511 10.9904C19.344 11.2833 19.344 11.7582 19.0511 12.0511Z",
    fill: "#fcd394",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./components/icons/Users.js":
/*!***********************************!*\
  !*** ./components/icons/Users.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\Users.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function Users(props) {
  return __jsx("svg", _extends({
    width: "1.5em",
    height: "1.5em",
    viewBox: "0 0 22 22",
    fill: "#fcd394"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z",
    fill: "#fcd394",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), " ", __jsx("path", {
    d: "M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z",
    fill: "#fcd394",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 204
    }
  }), " ", __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z",
    fill: "#fcd394",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 553
    }
  }), " ", __jsx("path", {
    d: "M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z",
    fill: "#fcd394",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 908
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./components/icons/World.js":
/*!***********************************!*\
  !*** ./components/icons/World.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\components\\icons\\World.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgWorld(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M8 0a8 8 0 100 16A8 8 0 008 0zM7 14.32a6.4 6.4 0 01-5.23-7.75L6 10.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1V9c0-.44-.56-1-1-1H5V6h1c.44 0 1-.56 1-1V4h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z",
    fill: "currentColor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (SvgWorld);

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: Alert, ArrowDown, ArrowUp, Close, Logo, Menu, Search, Spinner, World, Tags, Users, Groups, Admin, Delete, Addcomment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./components/icons/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ArrowDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrowDown */ "./components/icons/ArrowDown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return _ArrowDown__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ArrowUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrowUp */ "./components/icons/ArrowUp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowUp", function() { return _ArrowUp__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Close */ "./components/icons/Close.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return _Close__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./components/icons/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/icons/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search */ "./components/icons/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./components/icons/Spinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./World */ "./components/icons/World.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "World", function() { return _World__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tag */ "./components/icons/Tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return _Tag__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Users */ "./components/icons/Users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _Users__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Group */ "./components/icons/Group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Groups", function() { return _Group__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Admin */ "./components/icons/Admin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return _Admin__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Delete */ "./components/icons/Delete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return _Delete__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _Addcomment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Addcomment */ "./components/icons/Addcomment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Addcomment", function() { return _Addcomment__WEBPACK_IMPORTED_MODULE_14__["default"]; });

















/***/ }),

/***/ "./components/image-question/imagequestion.module.css":
/*!************************************************************!*\
  !*** ./components/image-question/imagequestion.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"imagecontainer": "imagequestion_imagecontainer__194Ml",
	"base64image": "imagequestion_base64image__29cIy"
};


/***/ }),

/***/ "./components/image-question/index.js":
/*!********************************************!*\
  !*** ./components/image-question/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imagequestion_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagequestion.module.css */ "./components/image-question/imagequestion.module.css");
/* harmony import */ var _imagequestion_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imagequestion_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "W:\\ClientAskem\\components\\image-question\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ImageQuestion = ({
  base64String,
  altText = 'Image'
}) => {
  return __jsx("div", {
    className: _imagequestion_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imagecontainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: base64String,
    altText: altText,
    className: _imagequestion_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.base64image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ImageQuestion);

/***/ }),

/***/ "./components/layout/extra/extra.module.css":
/*!**************************************************!*\
  !*** ./components/layout/extra/extra.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "extra_container__1lVpg",
	"tagContainer": "extra_tagContainer__1leJw",
	"popularTags": "extra_popularTags__3CI1X"
};


/***/ }),

/***/ "./components/layout/extra/index.js":
/*!******************************************!*\
  !*** ./components/layout/extra/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/tag */ "./store/tag.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tag */ "./components/tag/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extra.module.css */ "./components/layout/extra/extra.module.css");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_extra_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "W:\\ClientAskem\\components\\layout\\extra\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Extra = ({
  marginTop = 24
}) => {
  const {
    tagState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_tag__WEBPACK_IMPORTED_MODULE_1__["TagContext"]);
  return __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.tagContainer,
    style: {
      marginTop: `${marginTop}px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Popular Tags"), !tagState && __jsx("div", {
    className: "loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.popularTags,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, tagState === null || tagState === void 0 ? void 0 : tagState.map(tag => __jsx(_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: tag._id,
    count: tag.count,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, tag._id)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Extra);

/***/ }),

/***/ "./components/layout/footer/footerstyle.module.css":
/*!*********************************************************!*\
  !*** ./components/layout/footer/footerstyle.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footerstyle_footer__1yMhP",
	"links": "footerstyle_links__2PgX8",
	"link": "footerstyle_link__Jl68-",
	"text": "footerstyle_text__2uXrk"
};


/***/ }),

/***/ "./components/layout/footer/index.js":
/*!*******************************************!*\
  !*** ./components/layout/footer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footerstyle.module.css */ "./components/layout/footer/footerstyle.module.css");
/* harmony import */ var _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "W:\\ClientAskem\\components\\layout\\footer\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Import CSS Module

const Footer = () => {
  return __jsx("footer", {
    className: _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Home"), __jsx("a", {
    href: "#",
    className: _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "About"), __jsx("a", {
    href: "#",
    className: _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Contact"), __jsx("a", {
    href: "#",
    className: _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Privacy")), __jsx("p", {
    className: _footerstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "\xA9 ", new Date().getFullYear(), " Askem community"));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout/header/header.module.css":
/*!****************************************************!*\
  !*** ./components/layout/header/header.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__1sVnS",
	"container": "header_container__3WFhY",
	"menuContainer": "header_menuContainer__doImK",
	"menu": "header_menu__15JBk",
	"logo": "header_logo__111YJ",
	"auth": "header_auth__iT3tj",
	"userInfo": "header_userInfo__3FIdZ",
	"btnlogout": "header_btnlogout__2Pbh5"
};


/***/ }),

/***/ "./components/layout/header/index.js":
/*!*******************************************!*\
  !*** ./components/layout/header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useComponentVisible */ "./hooks/useComponentVisible.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _navigation_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../navigation-dropdown */ "./components/navigation-dropdown/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header.module.css */ "./components/layout/header/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "W:\\ClientAskem\\components\\layout\\header\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }












const Header = _ref => {
  let {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className"]);
  const {
    handleComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    isAuthenticated,
    authState,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_7__["AuthContext"]);
  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (size.width > _constants__WEBPACK_IMPORTED_MODULE_5__["default"].MOBILE_SIZE) {
      setIsComponentVisible(false);
    }
  }, [size]);
  return __jsx("header", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.header, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: toggleRef,
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.menuContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.menu,
    onClick: () => setIsComponentVisible(isOpen => !isOpen),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, isComponentVisible ? __jsx(_icons__WEBPACK_IMPORTED_MODULE_10__["Close"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 35
    }
  }) : __jsx(_icons__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 47
    }
  }))), __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.logo,
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_10__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Askem"))), __jsx("div", {
    style: {
      flex: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), isAuthenticated() ? __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.userInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Welcome", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: `/users/${authState.userInfo.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, authState.userInfo.username, "!"))), __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnlogout // Đảm bảo className được cập nhật
    ,
    primary: true,
    onClick: () => logout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "Log Out"), " ")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnlogout,
    secondary: true,
    onClick: () => handleComponentVisible(true, 'login'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Log in"), __jsx(_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.btnlogout,
    primary: true,
    onClick: () => handleComponentVisible(true, 'signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Sign up"))), __jsx("div", {
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, isComponentVisible && __jsx(_navigation_dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 45
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./hooks/useWindowSize.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./components/layout/sidebar/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main */ "./components/layout/main/index.js");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra */ "./components/layout/extra/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ "./components/layout/header/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ "./components/layout/footer/index.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "W:\\ClientAskem\\components\\layout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Layout = ({
  extra = true,
  children,
  footer = false
}) => {
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.layout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_layout_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.body, !extra && _layout_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.main),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, size.width > _constants__WEBPACK_IMPORTED_MODULE_2__["default"].MOBILE_SIZE && __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 46
    }
  }), __jsx(_main__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, children), size.width > _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TABLET_SIZE && extra && __jsx(_extra__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 55
    }
  }))), footer && __jsx(_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "layout_body__2IZRo",
	"main": "layout_main__3O2ar",
	"container": "layout_container__2yT5o"
};


/***/ }),

/***/ "./components/layout/main/index.js":
/*!*****************************************!*\
  !*** ./components/layout/main/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.module.css */ "./components/layout/main/main.module.css");
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "W:\\ClientAskem\\components\\layout\\main\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Main = ({
  border = true,
  children
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_main_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main, border && _main_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.border),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/layout/main/main.module.css":
/*!************************************************!*\
  !*** ./components/layout/main/main.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"border": "main_border__3hdrZ"
};


/***/ }),

/***/ "./components/layout/sidebar/index.js":
/*!********************************************!*\
  !*** ./components/layout/sidebar/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./components/navigation/index.js");
/* harmony import */ var _sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.module.css */ "./components/layout/sidebar/sidebar.module.css");
/* harmony import */ var _sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "W:\\ClientAskem\\components\\layout\\sidebar\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const Sidebar = _ref => {
  let {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className"]);
  return __jsx("nav", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sidebar, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx(_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/layout/sidebar/sidebar.module.css":
/*!******************************************************!*\
  !*** ./components/layout/sidebar/sidebar.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "sidebar_sidebar__1R-_j"
};


/***/ }),

/***/ "./components/navigation-dropdown/index.js":
/*!*************************************************!*\
  !*** ./components/navigation-dropdown/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation */ "./components/navigation/index.js");
/* harmony import */ var _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-dropdown.module.css */ "./components/navigation-dropdown/navigation-dropdown.module.css");
/* harmony import */ var _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "W:\\ClientAskem\\components\\navigation-dropdown\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NavigationDropdown = () => {
  return __jsx("div", {
    className: _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dialog,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _navigation_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (NavigationDropdown);

/***/ }),

/***/ "./components/navigation-dropdown/navigation-dropdown.module.css":
/*!***********************************************************************!*\
  !*** ./components/navigation-dropdown/navigation-dropdown.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dialog": "navigation-dropdown_dialog__3DoVn",
	"sidebar": "navigation-dropdown_sidebar__1Vvuq"
};


/***/ }),

/***/ "./components/navigation/index.js":
/*!****************************************!*\
  !*** ./components/navigation/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-item */ "./components/navigation/nav-item/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.module.css */ "./components/navigation/navigation.module.css");
/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
var _jsxFileName = "W:\\ClientAskem\\components\\navigation\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Navigation = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    authState,
    isAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  return __jsx("nav", {
    className: _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    selected: router.pathname == '/' || router.pathname.split('/')[1] == 'questions',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Askem")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/tags",
    selected: router.pathname == '/tags',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Tags"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Tags")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/users",
    selected: router.pathname.split('/')[1] == 'users',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Users"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Users")), __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/groups",
    selected: router.pathname == '/groups',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Groups"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Groups")), isAdmin() && __jsx(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/administrator",
    selected: router.pathname == '/administrator',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Admin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Administator")));
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/navigation/nav-item/index.js":
/*!*************************************************!*\
  !*** ./components/navigation/nav-item/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav_item_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-item.module.css */ "./components/navigation/nav-item/nav-item.module.css");
/* harmony import */ var _nav_item_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nav_item_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "W:\\ClientAskem\\components\\navigation\\nav-item\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const NavItem = _ref => {
  let {
      href,
      children,
      selected
    } = _ref,
    props = _objectWithoutProperties(_ref, ["href", "children", "selected"]);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    as: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_nav_item_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navItem, selected && _nav_item_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navItemSelected)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), children));
};
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./components/navigation/nav-item/nav-item.module.css":
/*!************************************************************!*\
  !*** ./components/navigation/nav-item/nav-item.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navItem": "nav-item_navItem__1zKDV",
	"navItemSelected": "nav-item_navItemSelected__2yQW2"
};


/***/ }),

/***/ "./components/navigation/navigation.module.css":
/*!*****************************************************!*\
  !*** ./components/navigation/navigation.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "navigation_nav__8ntz-",
	"color": "navigation_color__3OuDx"
};


/***/ }),

/***/ "./components/page-title/index.js":
/*!****************************************!*\
  !*** ./components/page-title/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/auth */ "./store/auth.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-title.module.css */ "./components/page-title/page-title.module.css");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "W:\\ClientAskem\\components\\page-title\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PageTitle = ({
  title,
  button,
  borderBottom = true,
  group = false,
  askBtn = false,
  adminBtn = false,
  children
}) => {
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container, borderBottom && _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderBottom),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, title), __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, button && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: isAuthenticated() ? '/questions/ask' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Ask Question"), group && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: isAuthenticated() ? '/groups/createGroup' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Create group"), askBtn && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: isAuthenticated() ? '/groups/ask' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Ask question"), adminBtn && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: isAuthenticated() ? '/groups/admin' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Group manage"))), children && __jsx("p", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.summary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 20
    }
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./components/page-title/page-title.module.css":
/*!*****************************************************!*\
  !*** ./components/page-title/page-title.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "page-title_container__2y0RO",
	"borderBottom": "page-title_borderBottom__ijYtw",
	"title": "page-title_title__tRISx",
	"summary": "page-title_summary__3wbe9",
	"buttonContainer": "page-title_buttonContainer__13v6e",
	"btndatcauhoi": "page-title_btndatcauhoi__3Zvjl"
};


/***/ }),

/***/ "./components/post/add-comment/add-comment.module.css":
/*!************************************************************!*\
  !*** ./components/post/add-comment/add-comment.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "add-comment_container__1HLB5",
	"button": "add-comment_button__1B6fu",
	"status": "add-comment_status__17kg1"
};


/***/ }),

/***/ "./components/post/add-comment/index.js":
/*!**********************************************!*\
  !*** ./components/post/add-comment/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../textarea */ "./components/textarea/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _add_comment_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-comment.module.css */ "./components/post/add-comment/add-comment.module.css");
/* harmony import */ var _add_comment_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_add_comment_module_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "W:\\ClientAskem\\components\\post\\add-comment\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const AddComment = ({
  questionId,
  answerId,
  setShowAddComment,
  setQuestion
}) => {
  const {
    authAxios
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_3__["FetchContext"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      comment: ''
    },
    onSubmit: async (values, {
      setStatus,
      resetForm
    }) => {
      setLoading(true);
      try {
        const {
          data
        } = await authAxios.post(`/comment/${questionId}/${answerId ? answerId : ''}`, values);
        setQuestion(data);
        resetForm({});
        setShowAddComment(false);
      } catch (error) {
        setStatus(error.response.data.message);
      }
      setLoading(false);
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      comment: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Comment is missing.').min(5, 'Comment must be at least 5 characters.').max(1000, 'Comment cannot be longer than 1000 characters.')
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, ({
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => __jsx("form", {
    className: _add_comment_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "comment",
    autoComplete: "off",
    value: values.comment,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.comment && errors.comment,
    errorMessage: errors.comment && errors.comment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _add_comment_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, status), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _add_comment_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.button,
    type: "submit",
    primary: true,
    isLoading: loading,
    disabled: isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Add Comment"))));
};
/* harmony default export */ __webpack_exports__["default"] = (AddComment);

/***/ }),

/***/ "./components/post/comment-list/comment-item/comment-item.module.css":
/*!***************************************************************************!*\
  !*** ./components/post/comment-list/comment-item/comment-item.module.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentContainer": "comment-item_commentContainer__1ce-y",
	"owner": "comment-item_owner__2ewyj",
	"dateText": "comment-item_dateText__qy-uB",
	"delete": "comment-item_delete__3NnEO"
};


/***/ }),

/***/ "./components/post/comment-list/comment-item/index.js":
/*!************************************************************!*\
  !*** ./components/post/comment-list/comment-item/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _comment_item_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-item.module.css */ "./components/post/comment-list/comment-item/comment-item.module.css");
/* harmony import */ var _comment_item_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comment_item_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "W:\\ClientAskem\\components\\post\\comment-list\\comment-item\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CommentItem = ({
  author,
  created,
  isOwner,
  answerId,
  questionId,
  commentId,
  setQuestion,
  children
}) => {
  var _authState$userInfo;
  const {
    authState,
    isAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  const {
    authAxios
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_4__["FetchContext"]);
  const handleDeleteComment = async () => {
    const res = window.confirm('Are you sure delete your comment?');
    if (res) {
      const {
        data
      } = await authAxios.delete(answerId ? `/comment/${questionId}/${answerId}/${commentId}` : `/comment/${questionId}/${commentId}`);
      setQuestion(data);
    }
  };
  return __jsx("div", {
    className: _comment_item_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.commentContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, children, " \u2013"), " \xA0", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/[user]",
    as: `/users/${author}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: isOwner ? _comment_item_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.owner : undefined,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, author)), "\xA0", __jsx("p", {
    className: _comment_item_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.dateText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, date_fns_format__WEBPACK_IMPORTED_MODULE_2___default()(new Date(created), "MMM dd'`'yy 'at' k':'mm"), ' '), (((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.username) === author || isAdmin()) && __jsx("a", {
    className: _comment_item_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.delete,
    onClick: () => handleDeleteComment(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "delete"));
};
/* harmony default export */ __webpack_exports__["default"] = (CommentItem);

/***/ }),

/***/ "./components/post/comment-list/comment-list.module.css":
/*!**************************************************************!*\
  !*** ./components/post/comment-list/comment-list.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentCell": "comment-list_commentCell__369F6",
	"animation": "comment-list_animation__rHsIw",
	"background-fade": "comment-list_background-fade__fZHu5",
	"addComment": "comment-list_addComment__2rHR8",
	"showMore": "comment-list_showMore__1QN6w"
};


/***/ }),

/***/ "./components/post/comment-list/index.js":
/*!***********************************************!*\
  !*** ./components/post/comment-list/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _add_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-comment */ "./components/post/add-comment/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _comment_list_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-list.module.css */ "./components/post/comment-list/comment-list.module.css");
/* harmony import */ var _comment_list_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_comment_list_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "W:\\ClientAskem\\components\\post\\comment-list\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CommentList = ({
  children,
  questionId,
  answerId,
  setQuestion
}) => {
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]);
  const {
    handleComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    0: showAddComment,
    1: setShowAddComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: visibleComments,
    1: setVisibleComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(children.slice(0, 3));
  const {
    0: difference,
    1: setDiffrence
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setVisibleComments(children.slice(0, 3));
  }, [children]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setDiffrence(children.length - visibleComments.length);
  }, [visibleComments]);
  return __jsx("div", {
    className: _comment_list_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.commentCell,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, visibleComments, difference > 0 ? __jsx("a", {
    className: _comment_list_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.showMore,
    onClick: () => setVisibleComments(children),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "show ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }
  }, difference), " more comments") : !showAddComment && __jsx("a", {
    className: _comment_list_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.addComment,
    onClick: () => isAuthenticated() ? setShowAddComment(true) : handleComponentVisible(true, 'signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Addcomment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), showAddComment && __jsx(_add_comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
    questionId: questionId,
    answerId: answerId,
    setShowAddComment: setShowAddComment,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ }),

/***/ "./components/post/post-summary/index.js":
/*!***********************************************!*\
  !*** ./components/post/post-summary/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ "date-fns/formatDistanceToNowStrict");
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tag */ "./components/tag/index.js");
/* harmony import */ var _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-summary.module.css */ "./components/post/post-summary/post-summary.module.css");
/* harmony import */ var _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_post_summary_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "W:\\ClientAskem\\components\\post\\post-summary\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const PostSummary = ({
  tags,
  author,
  created,
  questionId,
  answerId,
  setQuestion,
  children
}) => {
  var _authState$userInfo;
  const {
    authState,
    isAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);
  const {
    authAxios
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_6__["FetchContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const handleDeleteComment = async () => {
    const res = window.confirm('Are you sure delete your post?');
    if (res) {
      const {
        data
      } = await authAxios.delete(answerId ? `/answer/${questionId}/${answerId}` : `/question/${questionId}`);
      if (answerId) {
        setQuestion(data);
      } else {
        router.push('/');
      }
    }
  };
  return __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.postCell,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, children), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.tagContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, tags === null || tags === void 0 ? void 0 : tags.map(tag => __jsx(_tag__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: tag,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, tag))), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.userDetails,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/users/[user]",
    as: `/users/${author.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: `${author.profilePhoto}`,
    alt: author.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.info,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, tags ? 'asked' : 'answered', ' ', date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_3___default()(new Date(created), {
    addSuffix: true
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/users/[user]",
    as: `/users/${author.username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, author.username))))), (((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.id) === author.id || isAdmin()) && __jsx("div", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.row,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: _post_summary_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.delete,
    onClick: () => handleDeleteComment(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Delete"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (PostSummary);

/***/ }),

/***/ "./components/post/post-summary/post-summary.module.css":
/*!**************************************************************!*\
  !*** ./components/post/post-summary/post-summary.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"postCell": "post-summary_postCell__1oBZ0",
	"text": "post-summary_text__18Au_",
	"footer": "post-summary_footer__1H-y1",
	"row": "post-summary_row__ZOglb",
	"tagContainer": "post-summary_tagContainer__3H-7-",
	"userDetails": "post-summary_userDetails__3b4Vw",
	"info": "post-summary_info__3c04Z",
	"delete": "post-summary_delete__2WLyb"
};


/***/ }),

/***/ "./components/post/post-vote/index.js":
/*!********************************************!*\
  !*** ./components/post/post-vote/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/fetch */ "./store/fetch.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons */ "./components/icons/index.js");
/* harmony import */ var _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-vote.module.css */ "./components/post/post-vote/post-vote.module.css");
/* harmony import */ var _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_vote_module_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "W:\\ClientAskem\\components\\post\\post-vote\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const PostVote = ({
  score,
  votes,
  questionId,
  answerId,
  setQuestion
}) => {
  const {
    authState,
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_1__["AuthContext"]);
  const {
    authAxios
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_fetch__WEBPACK_IMPORTED_MODULE_2__["FetchContext"]);
  const {
    handleComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const isUpVoted = () => {
    var _votes$find;
    return ((_votes$find = votes.find(v => {
      var _authState$userInfo;
      return v.user === ((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.id);
    })) === null || _votes$find === void 0 ? void 0 : _votes$find.vote) === 1;
  };
  const isDownVoted = () => {
    var _votes$find2;
    return ((_votes$find2 = votes.find(v => {
      var _authState$userInfo2;
      return v.user === ((_authState$userInfo2 = authState.userInfo) === null || _authState$userInfo2 === void 0 ? void 0 : _authState$userInfo2.id);
    })) === null || _votes$find2 === void 0 ? void 0 : _votes$find2.vote) === -1;
  };
  const upVote = async () => {
    const {
      data
    } = await authAxios.get(`/votes/upvote/${questionId}/${answerId ? answerId : ''}`);
    setQuestion(data);
  };
  const downVote = async () => {
    const {
      data
    } = await authAxios.get(`/votes/downvote/${questionId}/${answerId ? answerId : ''}`);
    setQuestion(data);
  };
  const unVote = async () => {
    const {
      data
    } = await authAxios.get(`/votes/unvote/${questionId}/${answerId ? answerId : ''}`);
    setQuestion(data);
  };
  return __jsx("div", {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.voteCell,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.voteButton,
    onClick: () => isAuthenticated() ? isUpVoted() ? unVote() : upVote() : handleComponentVisible(true, 'signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["ArrowUp"], {
    className: isUpVoted() ? _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.voted : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.score,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, score), __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.voteButton,
    onClick: () => isAuthenticated() ? isDownVoted() ? unVote() : downVote() : handleComponentVisible(true, 'signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_5__["ArrowDown"], {
    className: isDownVoted() ? _post_vote_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.voted : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (PostVote);

/***/ }),

/***/ "./components/post/post-vote/post-vote.module.css":
/*!********************************************************!*\
  !*** ./components/post/post-vote/post-vote.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"voteCell": "post-vote_voteCell__1GCHp",
	"voteButton": "post-vote_voteButton__1PHsV",
	"voted": "post-vote_voted__2mE9z",
	"score": "post-vote_score__2te3m"
};


/***/ }),

/***/ "./components/post/post-wrapper.js":
/*!*****************************************!*\
  !*** ./components/post/post-wrapper.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-wrapper.module.css */ "./components/post/post-wrapper.module.css");
/* harmony import */ var _post_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "W:\\ClientAskem\\components\\post\\post-wrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostWrapper = ({
  borderBottom = true,
  children
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_post_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout, borderBottom && _post_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.borderBottom),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (PostWrapper);

/***/ }),

/***/ "./components/post/post-wrapper.module.css":
/*!*************************************************!*\
  !*** ./components/post/post-wrapper.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "post-wrapper_layout__bER9l",
	"borderBottom": "post-wrapper_borderBottom__3ei2Z"
};


/***/ }),

/***/ "./components/tag/index.js":
/*!*********************************!*\
  !*** ./components/tag/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag.module.css */ "./components/tag/tag.module.css");
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tag_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "W:\\ClientAskem\\components\\tag\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const Tag = _ref => {
  let {
      children,
      className,
      count
    } = _ref,
    props = _objectWithoutProperties(_ref, ["children", "className", "count"]);
  return count ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.taglayout, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), children)), __jsx("span", {
    className: _tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.count,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, count)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tag, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), children));
};
/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./components/tag/tag.module.css":
/*!***************************************!*\
  !*** ./components/tag/tag.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag": "tag_tag__2CMZ9",
	"multiplier": "tag_multiplier__C-g4G",
	"count": "tag_count__1ssWi",
	"taglayout": "tag_taglayout__bmjew"
};


/***/ }),

/***/ "./components/textarea/index.js":
/*!**************************************!*\
  !*** ./components/textarea/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _textarea_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textarea.module.css */ "./components/textarea/textarea.module.css");
/* harmony import */ var _textarea_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_textarea_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "W:\\ClientAskem\\components\\textarea\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }

// import dynamic from 'next/dynamic'


// const RichTextEditor = dynamic(() => import('../text-area-update'), {
//   ssr: false, // Tắt SSR
// })
const TextArea = _ref => {
  let {
      label,
      inputInfo,
      hasError,
      errorMessage,
      className
      // value,
      // setValue,
    } = _ref,
    props = _objectWithoutProperties(_ref, ["label", "inputInfo", "hasError", "errorMessage", "className"]);
  const {
    0: editorContent,
    1: setEditorContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx("div", {
    className: _textarea_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, label && __jsx("label", {
    className: _textarea_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, label), inputInfo && __jsx("p", {
    className: _textarea_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, inputInfo), __jsx("textarea", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_textarea_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textarea, className, hasError && _textarea_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hasError)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  })), hasError && __jsx("p", {
    className: _textarea_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.errorMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 20
    }
  }, errorMessage));
};
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./components/textarea/textarea.module.css":
/*!*************************************************!*\
  !*** ./components/textarea/textarea.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "textarea_container__u09m6",
	"textarea": "textarea_textarea__1_Q73",
	"hasError": "textarea_hasError__1Y7I-",
	"errorMessage": "textarea_errorMessage__1KI89",
	"label": "textarea_label__mSDaL",
	"inputInfo": "textarea_inputInfo__2dxbD"
};


/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  TABLET_SIZE: 980,
  MOBILE_SIZE: 640
});

/***/ }),

/***/ "./hooks/useComponentVisible.js":
/*!**************************************!*\
  !*** ./hooks/useComponentVisible.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useComponentVisible(initialIsVisible) {
  const {
    0: isComponentVisible,
    1: setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialIsVisible);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const toggleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const handleHide = event => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };
  const handleClickOutside = event => {
    var _toggleRef$current;
    if (ref.current && !ref.current.contains(event.target) && !(toggleRef !== null && toggleRef !== void 0 && (_toggleRef$current = toggleRef.current) !== null && _toggleRef$current !== void 0 && _toggleRef$current.contains(event.target))) {
      setIsComponentVisible(false);
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleHide, true);
    return () => {
      document.removeEventListener('keydown', handleHide, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  };
}
/* harmony default export */ __webpack_exports__["default"] = (useComponentVisible);

/***/ }),

/***/ "./hooks/useWindowSize.js":
/*!********************************!*\
  !*** ./hooks/useWindowSize.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  const isClient = false;
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/questions/[slug].js":
/*!***********************************!*\
  !*** ./pages/questions/[slug].js ***!
  \***********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_page_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/page-title */ "./components/page-title/index.js");
/* harmony import */ var _components_detail_page_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/detail-page-container */ "./components/detail-page-container/index.js");
/* harmony import */ var _components_post_post_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/post/post-wrapper */ "./components/post/post-wrapper.js");
/* harmony import */ var _components_post_post_vote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/post/post-vote */ "./components/post/post-vote/index.js");
/* harmony import */ var _components_post_post_summary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post/post-summary */ "./components/post/post-summary/index.js");
/* harmony import */ var _components_post_comment_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/post/comment-list */ "./components/post/comment-list/index.js");
/* harmony import */ var _components_post_comment_list_comment_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/post/comment-list/comment-item */ "./components/post/comment-list/comment-item/index.js");
/* harmony import */ var _components_answer_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/answer-container */ "./components/answer-container/index.js");
/* harmony import */ var _components_add_answer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/add-answer */ "./components/add-answer/index.js");
/* harmony import */ var _components_image_question__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/image-question */ "./components/image-question/index.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/icons */ "./components/icons/index.js");
/* harmony import */ var _styles_style_text_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/style_text.module.css */ "./styles/style_text.module.css");
/* harmony import */ var _styles_style_text_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_style_text_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "W:\\ClientAskem\\pages\\questions\\[slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













//




const QuestionDetail = ({
  questionId,
  title
}) => {
  const {
    0: question,
    1: setQuestion
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: answerSortType,
    1: setAnswersSortType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Votes');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchQuestion = async () => {
      const {
        data
      } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_2__["publicFetch"].get(`/question/${questionId}`);
      setQuestion(data);
    };
    fetchQuestion();
  }, []);
  const handleSorting = () => {
    switch (answerSortType) {
      case 'Votes':
        return (a, b) => b.score - a.score;
      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created);
      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created);
      default:
        break;
    }
  };
  const isClient = false;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extra: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, title), __jsx("link", {
    rel: "canonical",
    href: isClient && window.location.href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), __jsx(_components_page_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    button: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_detail_page_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, !question && __jsx("div", {
    className: "loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_14__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), question && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_post_post_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    borderBottom: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_components_post_post_vote__WEBPACK_IMPORTED_MODULE_7__["default"], {
    score: question.score,
    votes: question.votes,
    questionId: questionId,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx(_components_post_post_summary__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tags: question.tags,
    author: question.author,
    created: question.created,
    questionId: questionId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_style_text_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.container,
    dangerouslySetInnerHTML: {
      __html: question.text
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }), question.image && __jsx(_components_image_question__WEBPACK_IMPORTED_MODULE_13__["default"], {
    base64String: question.image,
    altText: "Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 36
    }
  })), __jsx(_components_post_comment_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    questionId: questionId,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, question.comments.map(({
    id,
    author,
    created,
    body
  }) => __jsx(_components_post_comment_list_comment_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: id,
    commentId: id,
    questionId: questionId,
    author: author.username,
    isOwner: author.username === question.author.username,
    created: created,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, body)))), question.answers.length > 0 && __jsx(_components_answer_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    answersCount: question.answers.length,
    answerSortType: answerSortType,
    setAnswerSortType: setAnswersSortType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, question.answers.sort(handleSorting()).map(answer => __jsx(_components_post_post_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: answer.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx(_components_post_post_vote__WEBPACK_IMPORTED_MODULE_7__["default"], {
    score: answer.score,
    votes: answer.votes,
    answerId: answer.id,
    questionId: questionId,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }), __jsx(_components_post_post_summary__WEBPACK_IMPORTED_MODULE_8__["default"], {
    author: answer.author,
    created: answer.created,
    questionId: questionId,
    answerId: answer.id,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, answer.text), __jsx(_components_post_comment_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    questionId: questionId,
    answerId: answer.id,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, answer.comments.map(({
    id,
    author,
    created,
    body
  }) => __jsx(_components_post_comment_list_comment_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: id,
    commentId: id,
    questionId: questionId,
    answerId: answer.id,
    author: author.username,
    isOwner: author.username === question.author.username,
    created: created,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, body)))))), __jsx(_components_add_answer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    tags: question.tags,
    id: questionId,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }))));
};
async function getServerSideProps(context) {
  const slug = context.params.slug;
  const questionId = slug.split('-').shift();
  const title = slug === null || slug === void 0 ? void 0 : slug.substr(slug.indexOf('-') + 1).split('-').join(' ');
  return {
    props: {
      questionId,
      title
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (QuestionDetail);

/***/ }),

/***/ "./store/auth.js":
/*!***********************!*\
  !*** ./store/auth.js ***!
  \***********************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\store\\auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const {
  Provider
} = AuthContext;
const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');
    setAuthState({
      token,
      expiresAt,
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    });
  }, []);
  const setAuthInfo = ({
    token,
    userInfo,
    expiresAt
  }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('expiresAt', expiresAt);
    setAuthState({
      token,
      userInfo,
      expiresAt
    });
  };
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    setAuthState({});
  };
  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }
    return new Date().getTime() / 1000 < authState.expiresAt;
  };
  const isAdmin = () => {
    var _authState$userInfo;
    return ((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.role) === 'admin';
  };
  return __jsx(Provider, {
    value: {
      authState,
      setAuthState: authInfo => setAuthInfo(authInfo),
      logout,
      isAuthenticated,
      isAdmin
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, children);
};


/***/ }),

/***/ "./store/fetch.js":
/*!************************!*\
  !*** ./store/fetch.js ***!
  \************************/
/*! exports provided: FetchContext, FetchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchContext", function() { return FetchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProvider", function() { return FetchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./store/auth.js");
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/fetcher */ "./util/fetcher.js");
var _jsxFileName = "W:\\ClientAskem\\store\\fetch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FetchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const {
  Provider
} = FetchContext;
const FetchProvider = ({
  children
}) => {
  const {
    authState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_auth__WEBPACK_IMPORTED_MODULE_2__["AuthContext"]);
  const authAxios = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["baseURL"]
  });
  authAxios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${authState.token}`;
    return config;
  }, error => {
    return Promise.reject(error);
  });
  authAxios.interceptors.response.use(response => {
    return response;
  }, error => {
    const code = error && error.response ? error.response.status : 0;
    if (code === 401 || code === 403) {
      console.log('error code', code);
    }
    return Promise.reject(error);
  });
  return __jsx(Provider, {
    value: {
      authAxios
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children);
};


/***/ }),

/***/ "./store/modal.js":
/*!************************!*\
  !*** ./store/modal.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (StoreContext);

/***/ }),

/***/ "./store/tag.js":
/*!**********************!*\
  !*** ./store/tag.js ***!
  \**********************/
/*! exports provided: TagContext, TagProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagContext", function() { return TagContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagProvider", function() { return TagProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/fetcher */ "./util/fetcher.js");
var _jsxFileName = "W:\\ClientAskem\\store\\tag.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TagContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const {
  Provider
} = TagContext;
const TagProvider = ({
  children
}) => {
  const {
    0: tagState,
    1: setTagState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchPopularTags = async () => {
      const {
        data
      } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_1__["publicFetch"].get('/tags/populertags');
      setTagState(data);
    };
    fetchPopularTags();
  }, []);
  return __jsx(Provider, {
    value: {
      tagState
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }, children);
};


/***/ }),

/***/ "./styles/style_text.module.css":
/*!**************************************!*\
  !*** ./styles/style_text.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "style_text_container__2h2QK"
};


/***/ }),

/***/ "./util/fetcher.js":
/*!*************************!*\
  !*** ./util/fetcher.js ***!
  \*************************/
/*! exports provided: publicFetch, baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicFetch", function() { return publicFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// const baseURL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:8081/api'
//     : `https://${process.env.SITE_NAME}/api`
// const baseURL = 'http://localhost:8081/api'
const baseURL = 'https://askem-server.onrender.com/api';
const publicFetch = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL
});


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "date-fns/formatDistanceToNowStrict":
/*!*****************************************************!*\
  !*** external "date-fns/formatDistanceToNowStrict" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/formatDistanceToNowStrict");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRkLWFuc3dlci9hZGQtYW5zd2VyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZGQtYW5zd2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5zd2VyLWNvbnRhaW5lci9hbnN3ZXItY29udGFpbmVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXItY29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2UtY29udGFpbmVyL2RldGFpbC1wYWdlLWNvbnRhaW5lci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2UtY29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQWRkY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0FkbWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9BcnJvd0Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9BcnJvd1VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2xvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9EZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1VzZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlLXF1ZXN0aW9uL2ltYWdlcXVlc3Rpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlLXF1ZXN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2V4dHJhL2V4dHJhLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZXh0cmEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3RlcnN0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9tYWluL21haW4ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcm9wZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJvcGRvd24vbmF2aWdhdGlvbi1kcm9wZG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2LWl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdi1pdGVtL25hdi1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvYWRkLWNvbW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L2NvbW1lbnQtbGlzdC9jb21tZW50LWl0ZW0vY29tbWVudC1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L2NvbW1lbnQtbGlzdC9jb21tZW50LWl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L2NvbW1lbnQtbGlzdC9jb21tZW50LWxpc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvY29tbWVudC1saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9wb3N0LXN1bW1hcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L3Bvc3Qtc3VtbWFyeS9wb3N0LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC12b3RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9wb3N0LXZvdGUvcG9zdC12b3RlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L3Bvc3Qtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC13cmFwcGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWcvdGFnLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0YXJlYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9xdWVzdGlvbnMvW3NsdWddLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdGFnLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zdHlsZV90ZXh0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9mZXRjaGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zL2Zvcm1hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJBZGRBbnN3ZXIiLCJpZCIsInRhZ3MiLCJzZXRRdWVzdGlvbiIsImF1dGhBeGlvcyIsInVzZUNvbnRleHQiLCJGZXRjaENvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJBdXRoQ29udGV4dCIsImhhbmRsZUNvbXBvbmVudFZpc2libGUiLCJNb2RhbENvbnRleHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiX19qc3giLCJGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidGV4dCIsIm9uU3VibWl0IiwidmFsdWVzIiwic2V0U3RhdHVzIiwicmVzZXRGb3JtIiwiZGF0YSIsInBvc3QiLCJlcnJvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1pbiIsIm1heCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZXJyb3JzIiwidG91Y2hlZCIsInN0YXR1cyIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVTdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJUZXh0QXJlYSIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIkJ1dHRvbiIsInR5cGUiLCJwcmltYXJ5IiwiaXNMb2FkaW5nIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwibWFwIiwidGFnIiwiVGFnIiwia2V5IiwiTGluayIsImhyZWYiLCJhcyIsIkFuc3dlckNvbnRhaW5lciIsImFuc3dlckNvdW50IiwiYW5zd2VyU29ydFR5cGUiLCJzZXRBbnN3ZXJTb3J0VHlwZSIsImNoaWxkcmVuIiwiaGVhZGVyIiwiZmlsbCIsIkJ1dHRvbkdyb3VwIiwiYnV0dG9ucyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJib3JkZXJCb3R0b20iLCJjbiIsImFjdGl2ZSIsIkxpbmtCdXR0b24iLCJfcmVmIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXh0ZW5kcyIsIkJhc2VCdXR0b24iLCJfcmVmMiIsIl9yZWYzIiwic2Vjb25kYXJ5IiwiZnVsbCIsIkNvbXAiLCJEZXRhaWxQYWdlQ29udGFpbmVyIiwic2l6ZSIsInVzZVdpbmRvd1NpemUiLCJNYWluIiwiYm9yZGVyIiwid2lkdGgiLCJDT05TVCIsIlRBQkxFVF9TSVpFIiwiRXh0cmEiLCJtYXJnaW5Ub3AiLCJBZGRjb21tZW50IiwiaGVpZ2h0Iiwidmlld0JveCIsImQiLCJzdHJva2UiLCJBZG1pbnMiLCJTdmdBbGVydCIsIlN2Z0Fycm93RG93biIsIlN2Z0Fycm93VXAiLCJTdmdDbG9zZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiRGVsZXRlIiwiR3JvdXBzIiwiU3ZnTG9nbyIsInhtbG5zIiwiU3ZnTWVudSIsIlN2Z1NlYXJjaCIsIlN2Z1NwaW5uZXIiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwieCIsInkiLCJyeCIsInJ5IiwiYXR0cmlidXRlTmFtZSIsImtleVRpbWVzIiwiZHVyIiwiYmVnaW4iLCJyZXBlYXRDb3VudCIsInRyYW5zZm9ybSIsIlRhZ3MiLCJVc2VycyIsIlN2Z1dvcmxkIiwiSW1hZ2VRdWVzdGlvbiIsImJhc2U2NFN0cmluZyIsImFsdFRleHQiLCJpbWFnZWNvbnRhaW5lciIsInNyYyIsImJhc2U2NGltYWdlIiwidGFnU3RhdGUiLCJUYWdDb250ZXh0IiwidGFnQ29udGFpbmVyIiwic3R5bGUiLCJTcGlubmVyIiwicG9wdWxhclRhZ3MiLCJfaWQiLCJjb3VudCIsIkZvb3RlciIsImZvb3RlciIsImxpbmtzIiwibGluayIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkhlYWRlciIsImF1dGhTdGF0ZSIsImxvZ291dCIsInJlZiIsInRvZ2dsZVJlZiIsImlzQ29tcG9uZW50VmlzaWJsZSIsInNldElzQ29tcG9uZW50VmlzaWJsZSIsInVzZUNvbXBvbmVudFZpc2libGUiLCJ1c2VFZmZlY3QiLCJNT0JJTEVfU0laRSIsIm1lbnVDb250YWluZXIiLCJtZW51IiwiaXNPcGVuIiwiQ2xvc2UiLCJNZW51IiwibG9nbyIsIkxvZ28iLCJmbGV4IiwidXNlckluZm8iLCJ1c2VybmFtZSIsImJ0bmxvZ291dCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJOYXZpZ2F0aW9uRHJvcGRvd24iLCJMYXlvdXQiLCJleHRyYSIsImxheW91dCIsImJvZHkiLCJtYWluIiwiU2lkZWJhciIsInNpZGViYXIiLCJOYXZpZ2F0aW9uIiwiZGlhbG9nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBZG1pbiIsIm5hdiIsIk5hdkl0ZW0iLCJwYXRobmFtZSIsInNwbGl0IiwiY29sb3IiLCJBZG1pbiIsIm5hdkl0ZW0iLCJuYXZJdGVtU2VsZWN0ZWQiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsImdyb3VwIiwiYXNrQnRuIiwiYWRtaW5CdG4iLCJidXR0b25Db250YWluZXIiLCJidG5kYXRjYXVob2kiLCJzdW1tYXJ5IiwiQWRkQ29tbWVudCIsInF1ZXN0aW9uSWQiLCJhbnN3ZXJJZCIsInNldFNob3dBZGRDb21tZW50IiwiY29tbWVudCIsIkNvbW1lbnRJdGVtIiwiYXV0aG9yIiwiY3JlYXRlZCIsImlzT3duZXIiLCJjb21tZW50SWQiLCJfYXV0aFN0YXRlJHVzZXJJbmZvIiwiaGFuZGxlRGVsZXRlQ29tbWVudCIsInJlcyIsIndpbmRvdyIsImNvbmZpcm0iLCJkZWxldGUiLCJjb21tZW50Q29udGFpbmVyIiwib3duZXIiLCJ1bmRlZmluZWQiLCJkYXRlVGV4dCIsImZvcm1hdCIsIkNvbW1lbnRMaXN0Iiwic2hvd0FkZENvbW1lbnQiLCJ2aXNpYmxlQ29tbWVudHMiLCJzZXRWaXNpYmxlQ29tbWVudHMiLCJzbGljZSIsImRpZmZlcmVuY2UiLCJzZXREaWZmcmVuY2UiLCJsZW5ndGgiLCJjb21tZW50Q2VsbCIsInNob3dNb3JlIiwiYWRkQ29tbWVudCIsIlBvc3RTdW1tYXJ5IiwicHVzaCIsInBvc3RDZWxsIiwicm93IiwidXNlckRldGFpbHMiLCJwcm9maWxlUGhvdG8iLCJhbHQiLCJpbmZvIiwiZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCIsImFkZFN1ZmZpeCIsIlBvc3RWb3RlIiwic2NvcmUiLCJ2b3RlcyIsImlzVXBWb3RlZCIsIl92b3RlcyRmaW5kIiwiZmluZCIsInYiLCJ1c2VyIiwidm90ZSIsImlzRG93blZvdGVkIiwiX3ZvdGVzJGZpbmQyIiwiX2F1dGhTdGF0ZSR1c2VySW5mbzIiLCJ1cFZvdGUiLCJnZXQiLCJkb3duVm90ZSIsInVuVm90ZSIsInZvdGVDZWxsIiwidm90ZUJ1dHRvbiIsIkFycm93VXAiLCJ2b3RlZCIsIkFycm93RG93biIsIlBvc3RXcmFwcGVyIiwicXVlcnkiLCJ0YWdsYXlvdXQiLCJsYWJlbCIsImlucHV0SW5mbyIsImVkaXRvckNvbnRlbnQiLCJzZXRFZGl0b3JDb250ZW50IiwiaW5pdGlhbElzVmlzaWJsZSIsInVzZVJlZiIsImhhbmRsZUhpZGUiLCJldmVudCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsIl90b2dnbGVSZWYkY3VycmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0NsaWVudCIsImdldFNpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsInByZWZldGNoIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJmb2N1cyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiUm91dGVyIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwib2siLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImxvY2FsZXMiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiZmlsdGVyIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsInBhZ2UiLCJmZXRjaENvbXBvbmVudCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsInJlcXVpcmUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIlF1ZXN0aW9uRGV0YWlsIiwicXVlc3Rpb24iLCJzZXRBbnN3ZXJzU29ydFR5cGUiLCJmZXRjaFF1ZXN0aW9uIiwicHVibGljRmV0Y2giLCJoYW5kbGVTb3J0aW5nIiwiYSIsImIiLCJIZWFkIiwicmVsIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJpbWFnZSIsIkltYWdlIiwiY29tbWVudHMiLCJhbnN3ZXJzIiwiYW5zd2Vyc0NvdW50Iiwic29ydCIsImFuc3dlciIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwic2hpZnQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZXIiLCJBdXRoUHJvdmlkZXIiLCJzZXRBdXRoU3RhdGUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJleHBpcmVzQXQiLCJKU09OIiwicGFyc2UiLCJzZXRBdXRoSW5mbyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwiZ2V0VGltZSIsInJvbGUiLCJhdXRoSW5mbyIsIkZldGNoUHJvdmlkZXIiLCJheGlvcyIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZWplY3QiLCJsb2ciLCJTdG9yZUNvbnRleHQiLCJUYWdQcm92aWRlciIsInNldFRhZ1N0YXRlIiwiZmV0Y2hQb3B1bGFyVGFncyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFD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LENBQUMsR0FBRyxNQUFNc3FCLHlEQUFXLENBQUNqYixHQUFHLENBQUMsbUJBQW1CLENBQUM7TUFDM0RrZSxXQUFXLENBQUN2dEIsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRHd0QixnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixPQUFPaHVCLEtBQUEsQ0FBQ2tzQixRQUFRO0lBQUM3cEIsS0FBSyxFQUFFO01BQUUrRjtJQUFTLENBQUU7SUFBQWxILE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFFc0MsUUFBbUIsQ0FBQztBQUM3RCxDQUFDOzs7Ozs7Ozs7Ozs7QUNuQkQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNdXBCLE9BQU8sR0FBRyx1Q0FBdUM7QUFDdkQsTUFBTXRDLFdBQVcsR0FBR3FDLDRDQUFLLENBQUM5VCxNQUFNLENBQUM7RUFDL0IrVDtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVEYsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvcXVlc3Rpb25zL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcXVlc3Rpb25zL1tzbHVnXS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiYWRkLWFuc3dlcl9jb250YWluZXJfX2EyVVRrXCIsXG5cdFwidGV4dGFyZWFcIjogXCJhZGQtYW5zd2VyX3RleHRhcmVhX18zdVNDMFwiLFxuXHRcInN0YXR1c1wiOiBcImFkZC1hbnN3ZXJfc3RhdHVzX18zUU02QVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xyXG5cclxuaW1wb3J0IHsgRmV0Y2hDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvZmV0Y2gnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aCdcclxuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9tb2RhbCdcclxuXHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi90ZXh0YXJlYSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXHJcbmltcG9ydCBUYWcgZnJvbSAnLi4vdGFnJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2FkZC1hbnN3ZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEFkZEFuc3dlciA9ICh7IGlkLCB0YWdzLCBzZXRRdWVzdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRoQXhpb3MgfSA9IHVzZUNvbnRleHQoRmV0Y2hDb250ZXh0KVxyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IHRleHQ6ICcnIH19XHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN0YXR1cywgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLnBvc3QoYC9hbnN3ZXIvJHtpZH1gLCB2YWx1ZXMpXHJcbiAgICAgICAgICBzZXRRdWVzdGlvbihkYXRhKVxyXG4gICAgICAgICAgcmVzZXRGb3JtKHt9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9fVxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcclxuICAgICAgICB0ZXh0OiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgIC5yZXF1aXJlZCgnQm9keSBpcyBtaXNzaW5nLicpXHJcbiAgICAgICAgICAubWluKDMwLCAnQm9keSBtdXN0IGJlIGF0IGxlYXN0IDMwIGNoYXJhY3RlcnMuJylcclxuICAgICAgICAgIC5tYXgoMzAwMDAsICdCb2R5IGNhbm5vdCBiZSBsb25nZXIgdGhhbiAzMDAwMCBjaGFyYWN0ZXJzLicpXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICB7KHtcclxuICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgIH0pID0+IChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGgyPllvdXIgYW5zd2VyPC9oMj5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGV4dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICBoYXNFcnJvcj17dG91Y2hlZC50ZXh0ICYmIGVycm9ycy50ZXh0fVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9ycy50ZXh0ICYmIGVycm9ycy50ZXh0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PntzdGF0dXN9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc0F1dGhlbnRpY2F0ZWQoKSAmJiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdzaWdudXAnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBvc3QgWW91ciBBbnN3ZXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgQnJvd3NlIG90aGVyIHF1ZXN0aW9ucyB0YWdnZWQgJm5ic3A7XHJcbiAgICAgICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+e3RhZ308L1RhZz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIG9yICZuYnNwO1xyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3F1ZXN0aW9ucy9hc2tcIiBhcz1cIi9xdWVzdGlvbnMvYXNrXCI+XHJcbiAgICAgICAgICAgICAgPGE+YXNrIHlvdXIgb3duIHF1ZXN0aW9uLjwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEFuc3dlclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJhbnN3ZXItY29udGFpbmVyX2NvbnRhaW5lcl9fMUpobkJcIixcblx0XCJoZWFkZXJcIjogXCJhbnN3ZXItY29udGFpbmVyX2hlYWRlcl9fMnhXeGtcIixcblx0XCJmaWxsXCI6IFwiYW5zd2VyLWNvbnRhaW5lcl9maWxsX18ybkVnblwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4uL2J1dHRvbi1ncm91cCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hbnN3ZXItY29udGFpbmVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBBbnN3ZXJDb250YWluZXIgPSAoe1xyXG4gIGFuc3dlckNvdW50LFxyXG4gIGFuc3dlclNvcnRUeXBlLFxyXG4gIHNldEFuc3dlclNvcnRUeXBlLFxyXG4gIGNoaWxkcmVuXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWxsfT5cclxuICAgICAgICAgIDxoMj57YW5zd2VyQ291bnR9IEFuc3dlcnM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25Hcm91cFxyXG4gICAgICAgICAgYnV0dG9ucz17WydWb3RlcycsICdOZXdlc3QnLCAnT2xkZXN0J119XHJcbiAgICAgICAgICBzZWxlY3RlZD17YW5zd2VyU29ydFR5cGV9XHJcbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0QW5zd2VyU29ydFR5cGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5zd2VyQ29udGFpbmVyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImJ1dHRvbi1ncm91cF9jb250YWluZXJfX0YwLUFBXCIsXG5cdFwiYWN0aXZlXCI6IFwiYnV0dG9uLWdyb3VwX2FjdGl2ZV9fM1kyTGZcIixcblx0XCJib3JkZXJCb3R0b21cIjogXCJidXR0b24tZ3JvdXBfYm9yZGVyQm90dG9tX18yV3U2cFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi1ncm91cC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQnV0dG9uR3JvdXAgPSAoe1xyXG4gIGJ1dHRvbnMsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgc2V0U2VsZWN0ZWQsXHJcbiAgYm9yZGVyQm90dG9tID0gZmFsc2VcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmNvbnRhaW5lciwgYm9yZGVyQm90dG9tICYmIHN0eWxlcy5ib3JkZXJCb3R0b20pfT5cclxuICAgICAge2J1dHRvbnMubWFwKChidXR0b24pID0+IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBrZXk9e2J1dHRvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IGJ1dHRvbiAmJiBzdHlsZXMuYWN0aXZlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWQoYnV0dG9uKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uR3JvdXBcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uX2J1dHRvbl9fMi0xaVFcIixcblx0XCJwcmltYXJ5XCI6IFwiYnV0dG9uX3ByaW1hcnlfXzFtR2RMXCIsXG5cdFwic2Vjb25kYXJ5XCI6IFwiYnV0dG9uX3NlY29uZGFyeV9fMXNnTUhcIixcblx0XCJmdWxsXCI6IFwiYnV0dG9uX2Z1bGxfXzFWRGtzXCIsXG5cdFwiaXNMb2FkaW5nXCI6IFwiYnV0dG9uX2lzTG9hZGluZ19fM2x0Mm9cIixcblx0XCJzcGluXCI6IFwiYnV0dG9uX3NwaW5fXzJ4RHZpXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBMaW5rQnV0dG9uID0gKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2hyZWZ9PlxyXG4gICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCYXNlQnV0dG9uID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgey4uLnByb3BzfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b24gPSAoe1xyXG4gIHByaW1hcnksXHJcbiAgc2Vjb25kYXJ5LFxyXG4gIGZ1bGwgPSBmYWxzZSxcclxuICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IENvbXAgPSBwcm9wcy5ocmVmID8gTGlua0J1dHRvbiA6IEJhc2VCdXR0b25cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBzdHlsZXMuYnV0dG9uLFxyXG4gICAgICAgIHByaW1hcnkgJiYgc3R5bGVzLnByaW1hcnksXHJcbiAgICAgICAgc2Vjb25kYXJ5ICYmIHN0eWxlcy5zZWNvbmRhcnksXHJcbiAgICAgICAgZnVsbCAmJiBzdHlsZXMuZnVsbCxcclxuICAgICAgICBpc0xvYWRpbmcgJiYgc3R5bGVzLmlzTG9hZGluZyxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiZGV0YWlsLXBhZ2UtY29udGFpbmVyX2NvbnRhaW5lcl9fM0JSdFRcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi9jb25zdGFudHMnXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnXHJcblxyXG5pbXBvcnQgRXh0cmEgZnJvbSAnLi4vbGF5b3V0L2V4dHJhJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9sYXlvdXQvbWFpbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9kZXRhaWwtcGFnZS1jb250YWluZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IERldGFpbFBhZ2VDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxNYWluIGJvcmRlcj17ZmFsc2V9PntjaGlsZHJlbn08L01haW4+XHJcbiAgICAgIHtzaXplLndpZHRoID4gQ09OU1QuVEFCTEVUX1NJWkUgJiYgPEV4dHJhIG1hcmdpblRvcD17MTZ9IC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQYWdlQ29udGFpbmVyXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQWRkY29tbWVudChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMmVtXCIgaGVpZ2h0PVwiMmVtXCIgdmlld0JveD1cIjAgMCAyMyAyM1wiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMiA4VjE0TTE1IDExSDlNMTIuMjg5NiAxNy45OTg0QzE4LjA5NjUgMTcuOTM0MyAyMSAxNS45MTg5IDIxIDExQzIxIDYgMTggNCAxMiA0QzYgNCAzIDYgMyAxMUMzIDE0LjA3NzEgNC4xMzYyMyAxNi4wMTggNi40MDg2OCAxNy4wNTU3TDUgMjFMMTIuMjg5NiAxNy45OTg0WlwiIHN0cm9rZT1cIiNmZmZmZmZcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRjb21tZW50XHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBBZG1pbnMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDIxIDIxXCIgZmlsbD1cIiNmY2QzOTRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZjZDM5NFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjAyNDgsOS45NzUyMSBMNS44MzAwOCwxNC4xNjk5IEM0LjcyNTUxLDE1LjI3NDUgMi45MzQ2NCwxNS4yNzQ1IDEuODMwMDgsMTQuMTY5OSBDMC43MjU1MDUsMTMuMDY1NCAwLjcyNTUwNiwxMS4yNzQ1IDEuODMwMDgsMTAuMTY5OSBMNi4wMjQ3OSw1Ljk3NTIxIEM2LjAwODQsNS44MTkwNCA2LDUuNjYwNSA2LDUuNSBDNiwzLjE4MDk2IDcuNzU0MiwxLjI3MTY0IDEwLjAwOCwxLjAyNjU4IEMxMC4xNjk2LDEuMDA5MDEgMTAuMzMzOCwxIDEwLjUsMSBDMTEuMTkwNiwxIDExLjg0NDgsMS4xNTU1NSAxMi40Mjk1LDEuNDMzNTEgTDEwLjI4NTEsMy41Nzc5NyBDOS42OTkzLDQuMTYzNzYgOS42OTkzLDUuMTEzNTEgMTAuMjg1MSw1LjY5OTI5IEMxMC44NzA5LDYuMjg1MDggMTEuODIwNiw2LjI4NTA4IDEyLjQwNjQsNS42OTkyOSBMMTQuNTU2NCwzLjU0OTMyIEMxNC44NDA3LDQuMTM5NDUgMTUsNC44MDExMiAxNSw1LjUgQzE1LDUuNjU0MjkgMTQuOTkyMiw1LjgwNjc2IDE0Ljk3NzEsNS45NTcwNSBDMTQuNzQ4LDguMjI3NjcgMTIuODMxLDEwIDEwLjUsMTAgQzEwLjMzOTUsMTAgMTAuMTgxLDkuOTkxNiAxMC4wMjQ4LDkuOTc1MjEgWiBNOS4yODQ5OSw3Ljg4NjU4IEw0LjQxNTg2LDEyLjc1NTcgQzQuMDkyMzQsMTMuMDc5MiAzLjU2NzgxLDEzLjA3OTIgMy4yNDQyOSwxMi43NTU3IEMyLjkyMDc3LDEyLjQzMjIgMi45MjA3NywxMS45MDc3IDMuMjQ0MjksMTEuNTg0MSBMOC4xMTM0Miw2LjcxNSBMOS4yODQ5OSw3Ljg4NjU4IFpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluc1xyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnQWxlcnQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04IDE2QTggOCAwIDExOCAwYTggOCAwIDAxMCAxNnpNNyAzdjZoMlYzSDd6bTAgOHYyaDJ2LTJIN3pcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdBbGVydFxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z0Fycm93RG93bihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cclxuICAgICAgPHBhdGggZD1cIk0yIDEwaDMyTDE4IDI2IDIgMTB6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z0Fycm93RG93blxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z0Fycm93VXAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMiAyNmgzMkwxOCAxMCAyIDI2elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd1VwXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnQ2xvc2UocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgY2xhc3NOYW1lPVwiY2xvc2Vfc3ZnX19mZWF0aGVyIGNsb3NlX3N2Z19fZmVhdGhlci14XCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTE4IDZMNiAxOE02IDZsMTIgMTJcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdDbG9zZVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMmVtXCIgaGVpZ2h0PVwiMmVtXCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAxMVYxN1wiIHN0cm9rZT1cIiNkMjE0MDRcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTE0IDExVjE3XCIgc3Ryb2tlPVwiI2QyMTQwNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNNCA3SDIwXCIgc3Ryb2tlPVwiI2QyMTQwNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNNiA3SDEySDE4VjE4QzE4IDE5LjY1NjkgMTYuNjU2OSAyMSAxNSAyMUg5QzcuMzQzMTUgMjEgNiAxOS42NTY5IDYgMThWN1pcIiBzdHJva2U9XCIjZDIxNDA0XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD4gPHBhdGggZD1cIk05IDVDOSAzLjg5NTQzIDkuODk1NDMgMyAxMSAzSDEzQzE0LjEwNDYgMyAxNSAzLjg5NTQzIDE1IDVWN0g5VjVaXCIgc3Ryb2tlPVwiI2QyMTQwNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZVxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gR3JvdXBzKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxLjI1ZW1cIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDIzIDIzXCIgZmlsbD1cIiNmY2QzOTRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI0LDEwYzAsMy4wMi0xLjM0LDUuNzEtMy40NSw3LjU1QzIyLjA3LDE1Ljc5LDIzLDEzLjUxLDIzLDExYzAtNS41Mi00LjQ4LTEwLTEwLTEwYy0yLjUxLDAtNC43OSwwLjkzLTYuNTUsMi40NSBDOC4yOSwxLjM0LDEwLjk4LDAsMTQsMEMxOS41MiwwLDI0LDQuNDgsMjQsMTB6IE0xMiwyQzguOTgsMiw2LjI5LDMuMzQsNC40NSw1LjQ1QzYuMjEsMy45Myw4LjQ5LDMsMTEsM2M1LjUyLDAsMTAsNC40OCwxMCwxMCBjMCwyLjUxLTAuOTMsNC43OS0yLjQ1LDYuNTVDMjAuNjYsMTcuNzEsMjIsMTUuMDIsMjIsMTJDMjIsNi40OCwxNy41MiwyLDEyLDJ6IE0yMCwxNGMwLDUuNTItNC40OCwxMC0xMCwxMFMwLDE5LjUyLDAsMTQgQzAsOC40OCw0LjQ4LDQsMTAsNFMyMCw4LjQ4LDIwLDE0eiBNMTYsMTMuMzJoLTUuM1Y4SDkuM3Y1LjMySDR2MS4zMWg1LjNWMjBoMS4zOXYtNS4zN0gxNlYxMy4zMnpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3Vwc1xyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5mdW5jdGlvbiBTdmdMb2dvKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTMuNTkgMTQuNjFcIj5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgLmIgeyBmaWxsOiAjZjRmMWYzOyB9XHJcbiAgICAgIC5jIHsgZmlsbDogI2UyYWQ4YzsgfVxyXG4gICAgICAuZCB7IGZpbGw6ICNlMWFhODg7IH1cclxuICAgICAgLmUgeyBmaWxsOiAjZjNmMWYyOyB9XHJcbiAgICAgIC5mIHsgZmlsbDogIzM1MzM4ZTsgfVxyXG4gICAgICAuZyB7IGZpbGw6ICMzNjM0OGU7IH1cclxuICAgICAgLmggeyBmaWxsOiAjZDdhNzg5OyB9XHJcbiAgICAgIC5pIHsgZmlsbDogI2ZkZDU5NDsgfVxyXG4gICAgICAuaiB7IGZpbGw6ICNlYWIyODg7IH1cclxuICAgICAgLmsgeyBmaWxsOiAjMzczNThlOyB9XHJcbiAgICAgIC5sIHsgZmlsbDogIzM4Mzc5MDsgfVxyXG4gICAgICAubSB7IGZpbGw6ICNmYmQzOTU7IH1cclxuICAgICAgLm4geyBmaWxsOiAjMzUzNDkwOyB9XHJcbiAgICAgIC5vIHsgZmlsbDogI2RmYTg4NzsgfVxyXG4gICAgICAucCB7IGZpbGw6ICNlM2FjODc7IH1cclxuICAgICAgLnEgeyBmaWxsOiAjZmNkMzk0OyB9XHJcbiAgICAgIC5yIHsgZmlsbDogI2Y5ZjhmOTsgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwiblwiIGQ9XCJNMy41OCwxMS40N2MtLjIzLS4wNi0uNDUtLjExLS42Ny0uMTktLjc0LS4yOC0xLjIyLS45OC0xLjIzLTEuNzcsMC0uNDYsMC0uOTEsMC0xLjM3LDAtLjE3LS4wNS0uMjUtLjIyLS4zMkMuNTUsNy40NywwLDYuNjgsMCw1LjczYzAtLjk3LC41NC0xLjc2LDEuNDgtMi4xMywuMTgtLjA3LC4yMS0uMTYsLjIxLS4zMywwLS40NCwwLS44OSwwLTEuMzNDMS42OSwuODYsMi41NCwwLDMuNjIsMCw1Ljc3LDAsNy45MSwwLDEwLjA1LDBjLjc4LDAsMS40MiwuMzYsMS43MiwxLjA4LC40MiwxLC43NCwyLjAzLDEuMSwzLjA1LC4yMSwuNjEsLjQyLDEuMjMsLjYzLDEuODQsLjI2LC43OC0uMDUsMS4zNC0uODUsMS41N3EtLjY3LC4xOS0uNjcsLjg5YzAsLjM0LDAsLjY4LDAsMS4wMywwLDEuMDYtLjc5LDEuOTEtMS44NSwxLjk1LS41LC4wMi0uNzksLjM3LTEuMTYsLjYtLjA1LC4wMy0uMDYsLjE0LS4wNiwuMjItLjE0LDEuMjMtLjc4LDIuMDYtMS43OCwyLjI5LTEuMTcsLjI4LTIuNDQtLjItMy4wMy0xLjIyLS4yNS0uNDQtLjM0LS45OC0uNDktMS40Ny0uMDQtLjEyLS4wMi0uMjUtLjA0LS4zN1pNLjkyLDUuMjRsLS4wNSwuMmMtLjIsMS4wMSwuNSwxLjc2LDEuNTYsMS42NywuMDIsLjEyLC4wNiwuMjQsLjA2LC4zNiwwLC42NiwwLDEuMzIsMCwxLjk4LDAsLjU0LC4zNSwuOTksLjgzLDEuMTIsLjI0LC4wNywuNDUsLjA3LC41LS4yNywuMDMtLjE4LC4xLS4zNSwuMTYtLjUyLC4xMy0uMjQsLjI0LS40OSwuNDEtLjcxLC41LS42NywxLjQ0LS41OSwxLjgzLC4xNSwuMDksLjE3LC4xOCwuMzUsLjI0LC41MywuMDcsLjIxLC4xOCwuMjUsLjM5LC4xOCwuNTgtLjE5LDEuMTgtLjM1LDEuNzYtLjUzLC42LS4xOSwxLjEyLS4xLDEuNTYsLjM2bC4yNSwuNzZjLjUzLS4xNSwuODEtLjU3LC43Ny0xLjEyLC4wMS0uNzYsLjAzLTEuNTMsLjA0LTIuMjksLjM1LS4xLC42OS0uMiwxLjA0LS4yOSwuNTgtLjE2LC42My0uMjYsLjM4LS44My0uNDktMS40NS0uOTctMi45MS0xLjQ3LTQuMzYtLjItLjU2LS42My0uODMtMS4yNC0uODItMiwuMDEtNCwwLTYuMDEsMC0uMTIsMC0uMjUsLjAyLS4zNywuMDNsLS4wNywuMDJoMGMtLjU3LC4wNy0uOTYsLjUtLjk3LDEuMTItLjAxLC43NywwLDEuNTUsMCwyLjMyLS4xNCwwLS4yNywwLS40MSwwLS41NSwuMDItMS4wMSwuMzktMS4xNiwuOTRoMFptOC4zNCw0LjkyYy0uMTUsMC0uMzItLjAxLS40NiwuMDMtLjc1LC4yMi0xLjUsLjQ2LTIuMjUsLjY4LS4zNywuMTEtLjUxLC4wMy0uNjYtLjMzLS4xMi0uMjgtLjIyLS41Ny0uMzYtLjg1LS4wNS0uMTEtLjE3LS4yMy0uMjgtLjI1LS4wNy0uMDItLjE3LC4xNC0uMjYsLjIybC0uMjYsLjU0Yy0uMDksLjI5LS4yMiwuNTgtLjI3LC44Ny0uMTQsLjczLDAsMS40MSwuNDYsMiwuNDksLjYyLDEuNDYsLjg5LDIuMiwuNiwuNjctLjI2LDEuMDQtLjk3LC45OC0xLjgyLDAtLjExLC4wNy0uMjgsLjE2LS4zNSwuMzQtLjI2LC43LS40NywxLjA0LS43MiwuMzMtLjI0LC4zMS0uNDctLjAzLS42M1pcIiAvPjxwYXRoIGNsYXNzTmFtZT1cInFcIiBkPVwiTTEwLjE0LDkuNzdjLS40NC0uNDctLjk2LS41Ni0xLjU2LS4zNi0uNTgsLjE5LTEuMTgsLjM1LTEuNzYsLjUzLS4yLC4wNi0uMzIsLjAzLS4zOS0uMTgtLjA2LS4xOC0uMTUtLjM2LS4yNC0uNTMtLjM4LS43NC0xLjMyLS44Mi0xLjgzLS4xNS0uMTYsLjIyLS4yNywuNDctLjQxLC43MS0uNTItLjA4LS43My0uMzEtLjczLS44NSwwLTEuNDksMC0yLjk5LDAtNC40OCwwLS43OS0uMDMtMS41OS0uMDUtMi4zOCwuMS0uMSwuMi0uMjEsLjMyLS4yOCwuMTgtLjEsLjM4LS4yNCwuNTctLjI0LDEuMzgtLjAyLDIuNzcsMCw0LjE1LDAtLjMsLjMtLjM2LC41NC0uMTcsLjczLC4yNiwuMjYsLjQ4LC4xLC43MS0uMDgsLjM0LS4yNywuOC0uMjQsMS4xNywuMDMsLjM3LC4yNywuNDgsLjI2LC43Ny0uMDdsMS4zNSwzLjkzYy0uMDksLjA0LS4xOCwuMDktLjI3LC4xMnEtLjY0LC4yMS0uNiwuOTFjLS4wMSwuNzYtLjAzLDEuNTMtLjA0LDIuMjktLjI5LC4yNS0uNjEsLjQyLTEuMDIsLjM2Wm0tMy4yNS00Ljc0bC0uMzQtLjY1Yy4wNy0uMDIsLjE4LS4wMywuMjItLjA4LC4wOS0uMTMsLjIzLS4yOSwuMjEtLjQxLS4wMi0uMTMtLjItLjMyLS4zMS0uMzMtLjUyLS4wNC0xLjA1LS4wNC0xLjU3LDAtLjEyLDAtLjMxLC4yMS0uMzEsLjMyLDAsLjE0LC4xMywuMywuMjQsLjQzLC4wNSwuMDYsLjE4LC4wNiwuMjQsLjA3LS4xMiwuMjYtLjI4LC40OS0uMzQsLjc0LS4xMiwuNTksLjQ3LDEuMzUsMS40LDEuMDYsLjA3LC4wMywuMTQsLjA4LC4yMSwuMDgsLjczLDAsMS40NiwwLDIuMTksMCwuMDcsMCwuMTQtLjA1LC4yMS0uMDgsLjg5LC4xOSwxLjQxLS4yMywxLjQxLTEuMTQsMC0uMywwLS41OSwwLS44OSwwLS42MS0uNDEtMS4wNC0uOTgtMS4wNS0uNTktLjAxLTEuMDEsLjQxLTEuMDMsMS4wMy0uMDEsLjI5LS4wMSwuNTktLjAyLC44OWgtMS40M1ptLjAxLDIuMzJjLjIzLS4xLC40LS4yMiwuMi0uNDYtLjIyLS4yNi0uNS0uMzUtLjgzLS4yNy0uMzIsLjA3LS41MywuMjgtLjU4LC42LS4wMiwuMDksLjExLC4yMywuMiwuMzIsLjA4LC4xLC4yNCwuMTUsLjI5LC4yNSwuMzIsLjY0LC45NywxLjAyLDEuNjQsLjk1LC4zNi0uMDQsLjU1LS4yLC41MS0uNDYtLjA0LS4zMi0uMjYtLjM4LS41NS0uMzYtLjQyLC4wMy0uNjktLjE1LS44Ny0uNTdaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJyXCIgZD1cIk0xMi4wNyw2LjA5Yy0uNDUtMS4zMS0uOS0yLjYyLTEuMzUtMy45MywuMDQtLjI4LS4xLS40Ny0uMzItLjYyLS43My0uNDktMS40NS0uNDMtMi4xNiwuMDEtMS4zOCwwLTIuNzctLjAxLTQuMTUsMC0uMTksMC0uMzksLjE0LS41NywuMjQtLjEyLC4wNy0uMjEsLjE5LS4zMiwuMjgsLjAyLS40MiwwLS44NSwuMjYtMS4yMWgwbC4wNy0uMDJjLjEyLDAsLjI1LS4wMywuMzctLjAzLDIsMCw0LDAsNi4wMSwwLC42MSwwLDEuMDQsLjI2LDEuMjQsLjgyLC41MSwxLjQ1LC45OCwyLjksMS40Nyw0LjM2bC0uNTUsLjFaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJjXCIgZD1cIk0zLjQ2LC44NmMtLjI3LC4zNy0uMjQsLjc5LS4yNiwxLjIxLC4wMiwuNzksLjA0LDEuNTksLjA1LDIuMzgsMCwxLjQ5LDAsMi45OSwwLDQuNDgsMCwuNTMsLjIxLC43NywuNzMsLjg1LS4wNSwuMTctLjEzLC4zNC0uMTYsLjUyLS4wNSwuMzMtLjI1LC4zMy0uNSwuMjctLjQ4LS4xMy0uODItLjU4LS44My0xLjEyLDAtLjY2LDAtMS4zMiwwLTEuOTgsMC0uMTItLjA0LS4yNC0uMDYtLjM2LC4wMi0uMTIsLjA3LS4yNCwuMDctLjM2LDAtLjY5LDAtMS4zOCwwLTIuMDZ2LS4zOWMwLS43Ny0uMDEtMS41NSwwLTIuMzIsMC0uNjIsLjM5LTEuMDUsLjk3LTEuMTJaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJpXCIgZD1cIk00LjczLDEwLjIxYy4wOS0uMTgsLjE3LS4zNiwuMjYtLjU0LC4wOSwuMTEsLjIsLjIsLjI1LC4zMiwuMTEsLjI3LC4xOCwuNTYsLjI4LC44NCwuMjMsLjU5LC40OSwuNywxLjA3LC40NywuNTQtLjIyLDEuMDctLjQ1LDEuNjEtLjY2LC4zNS0uMTMsLjcxLS4yMiwxLjA2LS4zMy0uMTIsLjExLS4yMSwuMjUtLjM1LC4zNC0uMzUsLjIyLS43MSwuNDEtMS4wNiwuNjEtLjIsLjExLS4zLC4yMy0uMjYsLjUxLC4wNywuNSwwLDEuMDMtLjQ1LDEuMzYtLjQ0LC4zMi0uOTIsLjI0LTEuMzgtLjAxLS41Ny0uMzItLjkyLS44Mi0xLjAxLTEuNDYtLjA3LS40OC0uMDItLjk3LS4wMy0xLjQ1WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwib1wiIGQ9XCJNNC43MywxMC4yMWMwLC40OC0uMDMsLjk3LC4wMywxLjQ1LC4wOSwuNjQsLjQzLDEuMTQsMS4wMSwxLjQ2LC40NiwuMjYsLjk0LC4zMywxLjM4LC4wMSwuNDUtLjMzLC41Mi0uODUsLjQ1LTEuMzYtLjA0LS4yOCwuMDYtLjQsLjI2LS41MSwuMzUtLjIsLjcyLS4zOSwxLjA2LS42MSwuMTMtLjA4LC4yMy0uMjIsLjM1LS4zNHYtLjE0Yy4zMywuMTYsLjM1LC4zOCwuMDIsLjYzLS4zNCwuMjUtLjcsLjQ3LTEuMDQsLjcyLS4wOSwuMDctLjE3LC4yMy0uMTYsLjM1LC4wNiwuODUtLjMxLDEuNTYtLjk4LDEuODItLjc0LC4yOS0xLjcxLC4wMi0yLjItLjYtLjQ3LS41OS0uNi0xLjI3LS40Ni0yLC4wNi0uMywuMTgtLjU4LC4yNy0uODdaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJtXCIgZD1cIk0yLjQ5LDQuNjljMCwuNjksMCwxLjM4LDAsMi4wNiwwLC4xMi0uMDQsLjI0LS4wNywuMzYtMS4wNiwuMDktMS43Ni0uNjYtMS41Ni0xLjY3bC4wNS0uMmgwYy40Ny0uMzMsLjk5LS41MiwxLjU3LS41NVptLS40OCwxLjA0YzAtLjA3LC4wMS0uMTQsMC0uMi0uMDMtLjEyLS4wOC0uMjMtLjEyLS4zNC0uMTIsLjA2LS4yNywuMS0uMzYsLjItLjA4LC4wOC0uMTEsLjIyLS4xMiwuMzQtLjAyLC4yNCwuMjIsLjU2LC40MSwuNTUsLjM2LS4wMiwuMTMtLjMxLC4yLS40NywwLS4wMiwwLS4wNCwwLS4wN1pcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImVcIiBkPVwiTTkuMjYsMTAuMTd2LjE0Yy0uMzUsLjExLS43MSwuMi0xLjA1LC4zMy0uNTQsLjItMS4wNywuNDQtMS42MSwuNjYtLjU5LC4yNC0uODUsLjEzLTEuMDctLjQ3LS4xLS4yOC0uMTctLjU3LS4yOC0uODQtLjA1LS4xMi0uMTctLjIyLS4yNS0uMzIsLjA5LS4wOCwuMTktLjIzLC4yNi0uMjIsLjExLC4wMiwuMjMsLjE0LC4yOCwuMjUsLjE0LC4yNywuMjQsLjU3LC4zNiwuODUsLjE1LC4zNiwuMywuNDQsLjY2LC4zMywuNzUtLjIzLDEuNS0uNDYsMi4yNS0uNjgsLjE0LS4wNCwuMzEtLjAyLC40Ni0uMDNaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJkXCIgZD1cIk0xMi4wNyw2LjA5bC41NS0uMWMuMjUsLjU3LC4yLC42Ny0uMzgsLjgzLS4zNSwuMS0uNjksLjItMS4wNCwuMjlxLS4wNC0uNywuNi0uOTFjLjA5LS4wMywuMTgtLjA4LC4yNy0uMTJaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJiXCIgZD1cIk0yLjQ5LDQuNjljLS41OCwuMDMtMS4xLC4yMi0xLjU3LC41NSwuMTUtLjU0LC42MS0uOTIsMS4xNi0uOTQsLjE0LDAsLjI3LDAsLjQxLDAsMCwuMTMsMCwuMjYsMCwuMzlaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJoXCIgZD1cIk0xMC4xNCw5Ljc3Yy40LC4wNiwuNzMtLjExLDEuMDItLjM2LC4wNCwuNTUtLjI0LC45Ni0uNzcsMS4xMmwtLjI1LS43NlpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImJcIiBkPVwiTS45Miw1LjI0bC0uMDUsLjIsLjA1LS4yWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiY1wiIGQ9XCJNMy41MywuODVsLS4wNywuMDIsLjA3LS4wMlpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImZcIiBkPVwiTTguMzIsNS4wNGMwLS4zLDAtLjU5LC4wMi0uODksLjAyLS42MiwuNDQtMS4wNSwxLjAzLTEuMDMsLjU3LC4wMSwuOTcsLjQ0LC45OCwxLjA1LDAsLjMsMCwuNTksMCwuODksMCwuOTEtLjUzLDEuMzMtMS40MSwxLjE0LS40My0uMjYtLjYxLS42Ni0uNjEtMS4xNVpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImdcIiBkPVwiTTYuMzIsNi4xOWMtLjkyLC4yOS0xLjUyLS40Ny0xLjQtMS4wNiwuMDUtLjI1LC4yMi0uNDgsLjM0LS43NC0uMDYtLjAyLS4xOS0uMDEtLjI0LS4wNy0uMTEtLjEyLS4yNS0uMjktLjI0LS40MywwLS4xMiwuMi0uMzIsLjMxLS4zMiwuNTItLjA0LDEuMDUtLjA0LDEuNTcsMCwuMTIsMCwuMywuMiwuMzEsLjMzLC4wMiwuMTMtLjEyLC4yOS0uMjEsLjQxLS4wNCwuMDUtLjE0LC4wNS0uMjIsLjA4bC4zNCwuNjVjLjA4LC41Mi0uMTUsLjg4LS41NywxLjE1WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwia1wiIGQ9XCJNNi45LDcuMzZjLjE4LC40MiwuNDQsLjYsLjg3LC41NywuMjktLjAyLC41MSwuMDQsLjU1LC4zNiwuMDQsLjI3LS4xNSwuNDMtLjUxLC40Ni0uNjcsLjA3LTEuMzItLjMyLTEuNjQtLjk1LS4wNS0uMTEtLjItLjE2LS4yOS0uMjUtLjA4LS4wOS0uMjEtLjIzLS4yLS4zMiwuMDUtLjMyLC4yNy0uNTIsLjU4LS42LC4zMy0uMDgsLjYxLDAsLjgzLC4yNywuMiwuMjQsLjA0LC4zNi0uMiwuNDZaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJsXCIgZD1cIk04LjIzLDEuNTVjLjcyLS40NSwxLjQ0LS41MSwyLjE2LS4wMSwuMjIsLjE1LC4zNiwuMzQsLjMyLC42Mi0uMywuMzMtLjQxLC4zNC0uNzcsLjA3LS4zNy0uMjctLjgyLS4zLTEuMTctLjAzLS4yMywuMTgtLjQ1LC4zNC0uNzEsLjA4LS4xOS0uMTktLjEzLS40MywuMTctLjczWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwicFwiIGQ9XCJNNi4zMiw2LjE5Yy40Mi0uMjcsLjY1LS42MywuNTctMS4xNWgxLjQzYzAsLjUsLjE4LC44OSwuNjEsMS4xNS0uMDcsLjAzLS4xNCwuMDgtLjIxLC4wOC0uNzMsMC0xLjQ2LDAtMi4xOSwwLS4wNywwLS4xNC0uMDUtLjIxLS4wOFpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImpcIiBkPVwiTTIuMDEsNS43M3MwLC4wNSwwLC4wN2MtLjA2LC4xNiwuMTYsLjQ1LS4yLC40Ny0uMTksLjAxLS40My0uMy0uNDEtLjU1LDAtLjEyLC4wNC0uMjYsLjEyLS4zNCwuMDktLjA5LC4yNC0uMTMsLjM2LS4yLC4wNCwuMTEsLjA5LC4yMywuMTIsLjM0LC4wMiwuMDYsMCwuMTQsMCwuMlpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnTG9nbztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdmdNZW51KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgIGNsYXNzTmFtZT1cIm1lbnVfc3ZnX19mZWF0aGVyIG1lbnVfc3ZnX19mZWF0aGVyLW1lbnVcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMyAxMmgxOE0zIDZoMThNMyAxOGgxOFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z01lbnVcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdmdTZWFyY2gocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xOCAxNi41bC01LjE0LTUuMThoLS4zNWE3IDcgMCAxMC0xLjE5IDEuMTl2LjM1TDE2LjUgMThsMS41LTEuNXpNMTIgN0E1IDUgMCAxMTIgN2E1IDUgMCAwMTEwIDB6XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnU2VhcmNoXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnU3Bpbm5lcihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuOTE2NjY2NjY2NjY2NjY2NnNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17NDd9XHJcbiAgICAgICAgeT17MjR9XHJcbiAgICAgICAgcng9ezN9XHJcbiAgICAgICAgcnk9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezZ9XHJcbiAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC44MzMzMzMzMzMzMzMzMzM0c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg2MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjc1c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjY2NjY2NjY2NjY2NjY2NjZzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDEyMCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjU4MzMzMzMzMzMzMzMzMzRzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE1MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjVzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjQxNjY2NjY2NjY2NjY2NjdzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDIxMCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjMzMzMzMzMzMzMzMzMzMzNzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDI0MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjI1c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC4xNjY2NjY2NjY2NjY2NjY2NnNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17NDd9XHJcbiAgICAgICAgeT17MjR9XHJcbiAgICAgICAgcng9ezN9XHJcbiAgICAgICAgcnk9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezZ9XHJcbiAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAwIDUwIDUwKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuMDgzMzMzMzMzMzMzMzMzMzNzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMzMCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdTcGlubmVyXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVGFncyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiBmaWxsPVwiI2ZjZDM5NFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yLjEyMjY0IDEyLjgxNkMyLjQxMDE4IDEzLjgxODYgMy4xODI5NSAxNC41OTE0IDQuNzI4NDggMTYuMTM2OUw2LjU1ODEyIDE3Ljk2NjVDOS4yNDcxMSAyMC42NTU1IDEwLjU5MTYgMjIgMTIuMjYyMyAyMkMxMy45MzMgMjIgMTUuMjc3NSAyMC42NTU1IDE3Ljk2NjUgMTcuOTY2NUMyMC42NTU1IDE1LjI3NzUgMjIgMTMuOTMzIDIyIDEyLjI2MjNDMjIgMTAuNTkxNiAyMC42NTU1IDkuMjQ3MTEgMTcuOTY2NSA2LjU1ODEyTDE2LjEzNjkgNC43Mjg0OEMxNC41OTE0IDMuMTgyOTUgMTMuODE4NiAyLjQxMDE4IDEyLjgxNiAyLjEyMjY0QzExLjgxMzQgMS44MzUwOSAxMC43NDg1IDIuMDgwODMgOC42MTg3NSAyLjU3MjMxTDcuMzkwNTcgMi44NTU3NEM1LjU5ODggMy4yNjkyMiA0LjcwMjkyIDMuNDc1OTcgNC4wODk0NCA0LjA4OTQ0QzMuNDc1OTcgNC43MDI5MiAzLjI2OTIyIDUuNTk4ODEgMi44NTU3NCA3LjM5MDU3TDIuNTcyMzEgOC42MTg3NUMyLjA4MDgzIDEwLjc0ODUgMS44MzUwOSAxMS44MTM0IDIuMTIyNjQgMTIuODE2Wk0xMC4xMjM0IDcuMjcwOThDMTAuOTExIDguMDU4NTYgMTAuOTExIDkuMzM1NDkgMTAuMTIzNCAxMC4xMjMxQzkuMzM1ODEgMTAuOTEwNyA4LjA1ODg4IDEwLjkxMDcgNy4yNzEyOSAxMC4xMjMxQzYuNDgzNzEgOS4zMzU0OSA2LjQ4MzcxIDguMDU4NTYgNy4yNzEyOSA3LjI3MDk4QzguMDU4ODggNi40ODMzOSA5LjMzNTgxIDYuNDgzMzkgMTAuMTIzNCA3LjI3MDk4Wk0xOS4wNTExIDEyLjA1MTFMMTIuMDcyMSAxOS4wMzAzQzExLjc3OTIgMTkuMzIzMiAxMS4zMDQzIDE5LjMyMzIgMTEuMDExNCAxOS4wMzAzQzEwLjcxODUgMTguNzM3NSAxMC43MTg1IDE4LjI2MjYgMTEuMDExNCAxNy45Njk3TDE3Ljk5MDQgMTAuOTkwNEMxOC4yODMzIDEwLjY5NzUgMTguNzU4MiAxMC42OTc1IDE5LjA1MTEgMTAuOTkwNEMxOS4zNDQgMTEuMjgzMyAxOS4zNDQgMTEuNzU4MiAxOS4wNTExIDEyLjA1MTFaXCIgZmlsbD1cIiNmY2QzOTRcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3NcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBVc2Vycyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiBmaWxsPVwiI2ZjZDM5NFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01IDkuNUM1IDcuMDE0NzIgNy4wMTQ3MiA1IDkuNSA1QzExLjk4NTMgNSAxNCA3LjAxNDcyIDE0IDkuNUMxNCAxMS45ODUzIDExLjk4NTMgMTQgOS41IDE0QzcuMDE0NzIgMTQgNSAxMS45ODUzIDUgOS41WlwiIGZpbGw9XCIjZmNkMzk0XCI+PC9wYXRoPiA8cGF0aCBkPVwiTTE0LjM2NzUgMTIuMDYzMkMxNC4zMjIgMTIuMTQ5NCAxNC4zNDEzIDEyLjI1NjkgMTQuNDE5NiAxMi4zMTQ5QzE1LjAwMTIgMTIuNzQ1NCAxNS43MjA5IDEzIDE2LjUgMTNDMTguNDMzIDEzIDIwIDExLjQzMyAyMCA5LjVDMjAgNy41NjcgMTguNDMzIDYgMTYuNSA2QzE1LjcyMDkgNiAxNS4wMDEyIDYuMjU0NiAxNC40MTk2IDYuNjg1MTNDMTQuMzQxMyA2Ljc0MzEzIDE0LjMyMiA2Ljg1MDU4IDE0LjM2NzUgNi45MzY3OUMxNC43NzE0IDcuNzAyMTkgMTUgOC41NzQ0IDE1IDkuNUMxNSAxMC40MjU2IDE0Ljc3MTQgMTEuMjk3OCAxNC4zNjc1IDEyLjA2MzJaXCIgZmlsbD1cIiNmY2QzOTRcIj48L3BhdGg+IDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjY0MTE1IDE1LjY5OTNDNS44NzM1MSAxNS4xNjQ0IDcuNDkwNDUgMTUgOS40OTk5NSAxNUMxMS41MTEyIDE1IDEzLjEyOTMgMTUuMTY0NyAxNC4zNjIxIDE1LjcwMDhDMTUuNzA1IDE2LjI4NDcgMTYuNTIxMiAxNy4yNzkzIDE2Ljk0OSAxOC42ODM2QzE3LjE0OTUgMTkuMzQxOCAxNi42NTUxIDIwIDE1Ljk3MzggMjBIMy4wMjgwMUMyLjM0NTg5IDIwIDEuODUwNDUgMTkuMzQwOCAyLjA1MTU3IDE4LjY4MTRDMi40Nzk5NCAxNy4yNzY5IDMuMjk3MzggMTYuMjgyNiA0LjY0MTE1IDE1LjY5OTNaXCIgZmlsbD1cIiNmY2QzOTRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNMTQuODE4NSAxNC4wMzY0QzE0LjQwNDUgMTQuMDYyMSAxNC4zODAyIDE0LjYxODMgMTQuNzYwNiAxNC43ODM3VjE0Ljc4MzdDMTUuODAzIDE1LjIzNyAxNi41ODc5IDE1LjkwNDMgMTcuMTUwOCAxNi43NTZDMTcuNjEyNyAxNy40NTQ5IDE4LjMzIDE4IDE5LjE2NzcgMThIMjAuOTQ4M0MyMS42NTU1IDE4IDIyLjE3MTUgMTcuMjk3MyAyMS45MjI3IDE2LjYxMDhDMjEuOTA4NCAxNi41NzEzIDIxLjg5MzUgMTYuNTMyMSAyMS44NzgxIDE2LjQ5MzJDMjEuNTM1NyAxNS42Mjg2IDIwLjk0ODggMTQuOTkyMSAyMC4wNzk4IDE0LjU4NjRDMTkuMjYzOSAxNC4yMDU1IDE4LjI0MjUgMTQuMDQ4MyAxNy4wMzkyIDE0LjAwMDhMMTcuMDE5NCAxNEgxNi45OTk3QzE2LjI5MDkgMTQgMTUuNTUwNiAxMy45OTA5IDE0LjgxODUgMTQuMDM2NFpcIiBmaWxsPVwiI2ZjZDM5NFwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNcclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z1dvcmxkKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNOCAwYTggOCAwIDEwMCAxNkE4IDggMCAwMDggMHpNNyAxNC4zMmE2LjQgNi40IDAgMDEtNS4yMy03Ljc1TDYgMTAuNjh2LjhjMCAuODguMTIgMS4zMiAxIDEuMzJ2MS41MnptNS43Mi0yYy0uMi0uNjYtMS0xLjMyLTEuNzItMS4zMmgtMVY5YzAtLjQ0LS41Ni0xLTEtMUg1VjZoMWMuNDQgMCAxLS41NiAxLTFWNGgyYy44OCAwIDEuNC0uNzIgMS40LTEuNnYtLjMzYTYuNCA2LjQgMCAwMTIuMzIgMTAuMjR2LjAxelwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z1dvcmxkXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICcuL0FsZXJ0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93RG93biB9IGZyb20gJy4vQXJyb3dEb3duJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93VXAgfSBmcm9tICcuL0Fycm93VXAnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2UgfSBmcm9tICcuL0Nsb3NlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudSB9IGZyb20gJy4vTWVudSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL1NlYXJjaCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmxkIH0gZnJvbSAnLi9Xb3JsZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWdzIH0gZnJvbSAnLi9UYWcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlcnMgfSBmcm9tICcuL1VzZXJzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyb3VwcyB9IGZyb20gJy4vR3JvdXAnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWRtaW4gfSBmcm9tICcuL0FkbWluJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlbGV0ZSB9IGZyb20gJy4vRGVsZXRlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFkZGNvbW1lbnQgfSBmcm9tICcuL0FkZGNvbW1lbnQnIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW1hZ2Vjb250YWluZXJcIjogXCJpbWFnZXF1ZXN0aW9uX2ltYWdlY29udGFpbmVyX18xOTRNbFwiLFxuXHRcImJhc2U2NGltYWdlXCI6IFwiaW1hZ2VxdWVzdGlvbl9iYXNlNjRpbWFnZV9fMjljSXlcIlxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbWFnZXF1ZXN0aW9uLm1vZHVsZS5jc3MnXHJcbmNvbnN0IEltYWdlUXVlc3Rpb24gPSAoeyBiYXNlNjRTdHJpbmcsIGFsdFRleHQgPSAnSW1hZ2UnIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2Vjb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YmFzZTY0U3RyaW5nfSBhbHRUZXh0PXthbHRUZXh0fSBjbGFzc05hbWU9e3N0eWxlcy5iYXNlNjRpbWFnZX0+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VRdWVzdGlvbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImV4dHJhX2NvbnRhaW5lcl9fMWxWcGdcIixcblx0XCJ0YWdDb250YWluZXJcIjogXCJleHRyYV90YWdDb250YWluZXJfXzFsZUp3XCIsXG5cdFwicG9wdWxhclRhZ3NcIjogXCJleHRyYV9wb3B1bGFyVGFnc19fM0NJMVhcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBUYWdDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdGFnJ1xyXG5cclxuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi90YWcnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9pY29ucydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9leHRyYS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRXh0cmEgPSAoeyBtYXJnaW5Ub3AgPSAyNCB9KSA9PiB7XHJcbiAgY29uc3QgeyB0YWdTdGF0ZSB9ID0gdXNlQ29udGV4dChUYWdDb250ZXh0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFnQ29udGFpbmVyfVxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogYCR7bWFyZ2luVG9wfXB4YCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgyPlBvcHVsYXIgVGFnczwvaDI+XHJcbiAgICAgICAgeyF0YWdTdGF0ZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1bGFyVGFnc30+XHJcbiAgICAgICAgICB7dGFnU3RhdGU/Lm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWcga2V5PXt0YWcuX2lkfSBjb3VudD17dGFnLmNvdW50fT5cclxuICAgICAgICAgICAgICB7dGFnLl9pZH1cclxuICAgICAgICAgICAgPC9UYWc+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dHJhXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcImZvb3RlcnN0eWxlX2Zvb3Rlcl9fMXlNaFBcIixcblx0XCJsaW5rc1wiOiBcImZvb3RlcnN0eWxlX2xpbmtzX18yUGdYOFwiLFxuXHRcImxpbmtcIjogXCJmb290ZXJzdHlsZV9saW5rX19KbDY4LVwiLFxuXHRcInRleHRcIjogXCJmb290ZXJzdHlsZV90ZXh0X18ydVhya1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Zvb3RlcnN0eWxlLm1vZHVsZS5jc3NcIjsgLy8gSW1wb3J0IENTUyBNb2R1bGVcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICB7LyogTGluayBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlByaXZhY3k8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFRleHQgU2VjdGlvbiAqL31cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+wqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQXNrZW0gY29tbXVuaXR5PC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyX2hlYWRlcl9fMXNWblNcIixcblx0XCJjb250YWluZXJcIjogXCJoZWFkZXJfY29udGFpbmVyX18zV0ZoWVwiLFxuXHRcIm1lbnVDb250YWluZXJcIjogXCJoZWFkZXJfbWVudUNvbnRhaW5lcl9fZG9JbUtcIixcblx0XCJtZW51XCI6IFwiaGVhZGVyX21lbnVfXzE1SkJrXCIsXG5cdFwibG9nb1wiOiBcImhlYWRlcl9sb2dvX18xMTFZSlwiLFxuXHRcImF1dGhcIjogXCJoZWFkZXJfYXV0aF9faVQzdGpcIixcblx0XCJ1c2VySW5mb1wiOiBcImhlYWRlcl91c2VySW5mb19fM0ZJZFpcIixcblx0XCJidG5sb2dvdXRcIjogXCJoZWFkZXJfYnRubG9nb3V0X18yUGJoNVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHVzZUNvbXBvbmVudFZpc2libGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ29tcG9uZW50VmlzaWJsZSdcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcclxuaW1wb3J0IENPTlNUIGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi8uLi9zdG9yZS9tb2RhbCdcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uRHJvcGRvd24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi1kcm9wZG93bidcclxuaW1wb3J0IHsgTWVudSwgQ2xvc2UsIExvZ28gfSBmcm9tICcuLi8uLi9pY29ucydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGF1dGhTdGF0ZSwgbG9nb3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWYsXHJcbiAgICB0b2dnbGVSZWYsXHJcbiAgICBpc0NvbXBvbmVudFZpc2libGUsXHJcbiAgICBzZXRJc0NvbXBvbmVudFZpc2libGVcclxuICB9ID0gdXNlQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2l6ZS53aWR0aCA+IENPTlNULk1PQklMRV9TSVpFKSB7XHJcbiAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuICB9LCBbc2l6ZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y24oc3R5bGVzLmhlYWRlciwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgcmVmPXt0b2dnbGVSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NvbXBvbmVudFZpc2libGUoKGlzT3BlbikgPT4gIWlzT3Blbil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0NvbXBvbmVudFZpc2libGUgPyA8Q2xvc2UgLz4gOiA8TWVudSAvPn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4+QXNrZW08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PjwvZGl2PlxyXG5cclxuICAgICAgICB7aXNBdXRoZW50aWNhdGVkKCkgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvfT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgV2VsY29tZXsnICd9XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCJcclxuICAgICAgICAgICAgICAgIGFzPXtgL3VzZXJzLyR7YXV0aFN0YXRlLnVzZXJJbmZvLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+e2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX0hPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRubG9nb3V0fSAvLyDEkOG6o20gYuG6o28gY2xhc3NOYW1lIMSRxrDhu6NjIGPhuq1wIG5o4bqtdFxyXG4gICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkxvZyBPdXQ8L3NwYW4+IHsvKiDEkOG6t3QgbuG7mWkgZHVuZyB0cm9uZyBt4buZdCBzcGFuIMSR4buDIMOhcCBk4bulbmcga2nhu4N1ICovfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRubG9nb3V0fVxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ2xvZ2luJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5sb2dvdXR9XHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHJlZj17cmVmfT57aXNDb21wb25lbnRWaXNpYmxlICYmIDxOYXZpZ2F0aW9uRHJvcGRvd24gLz59PC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4nXHJcbmltcG9ydCBFeHRyYSBmcm9tICcuL2V4dHJhJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgZXh0cmEgPSB0cnVlLCBjaGlsZHJlbiwgZm9vdGVyID0gZmFsc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmJvZHksICFleHRyYSAmJiBzdHlsZXMubWFpbil9PlxyXG4gICAgICAgICAge3NpemUud2lkdGggPiBDT05TVC5NT0JJTEVfU0laRSAmJiA8U2lkZWJhciAvPn1cclxuICAgICAgICAgIDxNYWluPntjaGlsZHJlbn08L01haW4+XHJcbiAgICAgICAgICB7c2l6ZS53aWR0aCA+IENPTlNULlRBQkxFVF9TSVpFICYmIGV4dHJhICYmIDxFeHRyYSAvPn1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Zm9vdGVyICYmICg8Rm9vdGVyPjwvRm9vdGVyPil9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5XCI6IFwibGF5b3V0X2JvZHlfXzJJWlJvXCIsXG5cdFwibWFpblwiOiBcImxheW91dF9tYWluX18zTzJhclwiLFxuXHRcImNvbnRhaW5lclwiOiBcImxheW91dF9jb250YWluZXJfXzJ5VDVvXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21haW4ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IE1haW4gPSAoeyBib3JkZXIgPSB0cnVlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubWFpbiwgYm9yZGVyICYmIHN0eWxlcy5ib3JkZXIpfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvcmRlclwiOiBcIm1haW5fYm9yZGVyX18zaGRyWlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uLy4uL25hdmlnYXRpb24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2lkZWJhci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17Y24oc3R5bGVzLnNpZGViYXIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZWJhclwiOiBcInNpZGViYXJfc2lkZWJhcl9fMVItX2pcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2aWdhdGlvbi1kcm9wZG93bi5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbkRyb3Bkb3duID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpYWxvZ30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25Ecm9wZG93blxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkaWFsb2dcIjogXCJuYXZpZ2F0aW9uLWRyb3Bkb3duX2RpYWxvZ19fM0RvVm5cIixcblx0XCJzaWRlYmFyXCI6IFwibmF2aWdhdGlvbi1kcm9wZG93bl9zaWRlYmFyX18xVnZ1cVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgTmF2SXRlbSBmcm9tICcuL25hdi1pdGVtJ1xyXG5pbXBvcnQgeyBXb3JsZCwgTG9nbywgVGFncywgVXNlcnMsIEdyb3VwcywgQWRtaW4gfSBmcm9tICcuLi9pY29ucydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoJ1xyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGlzQWRtaW4gfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuICAgICAgPE5hdkl0ZW1cclxuICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgc2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09ICcvJyB8fCByb3V0ZXIucGF0aG5hbWUuc3BsaXQoJy8nKVsxXSA9PSAncXVlc3Rpb25zJ1xyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29sb3J9PkFza2VtPC9zcGFuPlxyXG4gICAgICA8L05hdkl0ZW0+XHJcblxyXG4gICAgICA8TmF2SXRlbSBocmVmPVwiL3RhZ3NcIiBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09ICcvdGFncyd9PlxyXG4gICAgICAgIDxUYWdzIC8+XHJcbiAgICAgICAgPHNwYW4+VGFnczwvc3Bhbj5cclxuICAgICAgPC9OYXZJdGVtPlxyXG5cclxuICAgICAgPE5hdkl0ZW1cclxuICAgICAgICBocmVmPVwiL3VzZXJzXCJcclxuICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gPT0gJ3VzZXJzJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxVc2VycyAvPlxyXG4gICAgICAgIDxzcGFuPlVzZXJzPC9zcGFuPlxyXG4gICAgICA8L05hdkl0ZW0+XHJcbiAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgaHJlZj1cIi9ncm91cHNcIlxyXG4gICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9ncm91cHMnfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEdyb3VwcyAvPlxyXG4gICAgICAgIDxzcGFuPkdyb3Vwczwvc3Bhbj5cclxuICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICB7aXNBZG1pbigpICYmICg8TmF2SXRlbVxyXG4gICAgICAgIGhyZWY9XCIvYWRtaW5pc3RyYXRvclwiXHJcbiAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PSAnL2FkbWluaXN0cmF0b3InfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFkbWluIC8+XHJcbiAgICAgICAgPHNwYW4+QWRtaW5pc3RhdG9yPC9zcGFuPlxyXG4gICAgICA8L05hdkl0ZW0+KX1cclxuXHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdi1pdGVtLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBOYXZJdGVtID0gKHsgaHJlZiwgY2hpbGRyZW4sIHNlbGVjdGVkLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGFzPXtocmVmfT5cclxuICAgICAgPGFcclxuICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5uYXZJdGVtLCBzZWxlY3RlZCAmJiBzdHlsZXMubmF2SXRlbVNlbGVjdGVkKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2SXRlbVwiOiBcIm5hdi1pdGVtX25hdkl0ZW1fXzF6S0RWXCIsXG5cdFwibmF2SXRlbVNlbGVjdGVkXCI6IFwibmF2LWl0ZW1fbmF2SXRlbVNlbGVjdGVkX18yeVFXMlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwibmF2aWdhdGlvbl9uYXZfXzhudHotXCIsXG5cdFwiY29sb3JcIjogXCJuYXZpZ2F0aW9uX2NvbG9yX18zT3VEeFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGgnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLXRpdGxlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQYWdlVGl0bGUgPSAoeyB0aXRsZSwgYnV0dG9uLCBib3JkZXJCb3R0b20gPSB0cnVlLCBncm91cCA9IGZhbHNlLCBhc2tCdG4gPSBmYWxzZSwgYWRtaW5CdG4gPSBmYWxzZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5jb250YWluZXIsIGJvcmRlckJvdHRvbSAmJiBzdHlsZXMuYm9yZGVyQm90dG9tKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7YnV0dG9uICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGhyZWY9e2lzQXV0aGVudGljYXRlZCgpID8gJy9xdWVzdGlvbnMvYXNrJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuZGF0Y2F1aG9pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQXNrIFF1ZXN0aW9uXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtncm91cCAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBocmVmPXtpc0F1dGhlbnRpY2F0ZWQoKSA/ICcvZ3JvdXBzL2NyZWF0ZUdyb3VwJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuZGF0Y2F1aG9pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIGdyb3VwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthc2tCdG4gJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgaHJlZj17aXNBdXRoZW50aWNhdGVkKCkgPyAnL2dyb3Vwcy9hc2snIDogJy9hdXRoJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5kYXRjYXVob2l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBc2sgcXVlc3Rpb25cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2FkbWluQnRuICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGhyZWY9e2lzQXV0aGVudGljYXRlZCgpID8gJy9ncm91cHMvYWRtaW4nIDogJy9hdXRoJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5kYXRjYXVob2l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHcm91cCBtYW5hZ2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y2hpbGRyZW4gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+e2NoaWxkcmVufTwvcD59XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGl0bGVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicGFnZS10aXRsZV9jb250YWluZXJfXzJ5MFJPXCIsXG5cdFwiYm9yZGVyQm90dG9tXCI6IFwicGFnZS10aXRsZV9ib3JkZXJCb3R0b21fX2lqWXR3XCIsXG5cdFwidGl0bGVcIjogXCJwYWdlLXRpdGxlX3RpdGxlX190UklTeFwiLFxuXHRcInN1bW1hcnlcIjogXCJwYWdlLXRpdGxlX3N1bW1hcnlfXzN3YmU5XCIsXG5cdFwiYnV0dG9uQ29udGFpbmVyXCI6IFwicGFnZS10aXRsZV9idXR0b25Db250YWluZXJfXzEzdjZlXCIsXG5cdFwiYnRuZGF0Y2F1aG9pXCI6IFwicGFnZS10aXRsZV9idG5kYXRjYXVob2lfXzNadmpsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJhZGQtY29tbWVudF9jb250YWluZXJfXzFITEI1XCIsXG5cdFwiYnV0dG9uXCI6IFwiYWRkLWNvbW1lbnRfYnV0dG9uX18xQjZmdVwiLFxuXHRcInN0YXR1c1wiOiBcImFkZC1jb21tZW50X3N0YXR1c19fMTdrZzFcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcblxyXG5pbXBvcnQgeyBGZXRjaENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9mZXRjaCdcclxuXHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuLi8uLi90ZXh0YXJlYSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYWRkLWNvbW1lbnQubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEFkZENvbW1lbnQgPSAoe1xyXG4gIHF1ZXN0aW9uSWQsXHJcbiAgYW5zd2VySWQsXHJcbiAgc2V0U2hvd0FkZENvbW1lbnQsXHJcbiAgc2V0UXVlc3Rpb25cclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aEF4aW9zIH0gPSB1c2VDb250ZXh0KEZldGNoQ29udGV4dClcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgY29tbWVudDogJycgfX1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3RhdHVzLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhdXRoQXhpb3MucG9zdChcclxuICAgICAgICAgICAgYC9jb21tZW50LyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZCA/IGFuc3dlcklkIDogJyd9YCxcclxuICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgc2V0UXVlc3Rpb24oZGF0YSlcclxuXHJcbiAgICAgICAgICByZXNldEZvcm0oe30pXHJcbiAgICAgICAgICBzZXRTaG93QWRkQ29tbWVudChmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgc2V0U3RhdHVzKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfX1cclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XHJcbiAgICAgICAgY29tbWVudDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAucmVxdWlyZWQoJ0NvbW1lbnQgaXMgbWlzc2luZy4nKVxyXG4gICAgICAgICAgLm1pbig1LCAnQ29tbWVudCBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4nKVxyXG4gICAgICAgICAgLm1heCgxMDAwLCAnQ29tbWVudCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwMCBjaGFyYWN0ZXJzLicpXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICB7KHtcclxuICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICBpc1N1Ym1pdHRpbmdcclxuICAgICAgfSkgPT4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbW1lbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgaGFzRXJyb3I9e3RvdWNoZWQuY29tbWVudCAmJiBlcnJvcnMuY29tbWVudH1cclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnMuY29tbWVudCAmJiBlcnJvcnMuY29tbWVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PntzdGF0dXN9PC9wPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgQ29tbWVudFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkQ29tbWVudFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21tZW50Q29udGFpbmVyXCI6IFwiY29tbWVudC1pdGVtX2NvbW1lbnRDb250YWluZXJfXzFjZS15XCIsXG5cdFwib3duZXJcIjogXCJjb21tZW50LWl0ZW1fb3duZXJfXzJld3lqXCIsXG5cdFwiZGF0ZVRleHRcIjogXCJjb21tZW50LWl0ZW1fZGF0ZVRleHRfX3F5LXVCXCIsXG5cdFwiZGVsZXRlXCI6IFwiY29tbWVudC1pdGVtX2RlbGV0ZV9fM05uRU9cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnXHJcblxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCB7IEZldGNoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2ZldGNoJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbW1lbnQtaXRlbS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQ29tbWVudEl0ZW0gPSAoe1xyXG4gIGF1dGhvcixcclxuICBjcmVhdGVkLFxyXG4gIGlzT3duZXIsXHJcbiAgYW5zd2VySWQsXHJcbiAgcXVlc3Rpb25JZCxcclxuICBjb21tZW50SWQsXHJcbiAgc2V0UXVlc3Rpb24sXHJcbiAgY2hpbGRyZW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBpc0FkbWluIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGNvbnN0IHsgYXV0aEF4aW9zIH0gPSB1c2VDb250ZXh0KEZldGNoQ29udGV4dClcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgZGVsZXRlIHlvdXIgY29tbWVudD8nKVxyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5kZWxldGUoXHJcbiAgICAgICAgYW5zd2VySWRcclxuICAgICAgICAgID8gYC9jb21tZW50LyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZH0vJHtjb21tZW50SWR9YFxyXG4gICAgICAgICAgOiBgL2NvbW1lbnQvJHtxdWVzdGlvbklkfS8ke2NvbW1lbnRJZH1gXHJcbiAgICAgIClcclxuXHJcbiAgICAgIHNldFF1ZXN0aW9uKGRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q29udGFpbmVyfT5cclxuICAgICAgPHA+e2NoaWxkcmVufSDigJM8L3A+ICZuYnNwO1xyXG4gICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yfWB9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17aXNPd25lciA/IHN0eWxlcy5vd25lciA6IHVuZGVmaW5lZH0+e2F1dGhvcn08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgJm5ic3A7XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVUZXh0fT5cclxuICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGNyZWF0ZWQpLCBcIk1NTSBkZCdgJ3l5ICdhdCcgayc6J21tXCIpfXsnICd9XHJcbiAgICAgIDwvcD5cclxuICAgICAgeyhhdXRoU3RhdGUudXNlckluZm8/LnVzZXJuYW1lID09PSBhdXRob3IgfHwgaXNBZG1pbigpKSAmJiAoXHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb21tZW50KCl9PlxyXG4gICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50SXRlbVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21tZW50Q2VsbFwiOiBcImNvbW1lbnQtbGlzdF9jb21tZW50Q2VsbF9fMzY5RjZcIixcblx0XCJhbmltYXRpb25cIjogXCJjb21tZW50LWxpc3RfYW5pbWF0aW9uX19ySHNJd1wiLFxuXHRcImJhY2tncm91bmQtZmFkZVwiOiBcImNvbW1lbnQtbGlzdF9iYWNrZ3JvdW5kLWZhZGVfX2ZaSHU1XCIsXG5cdFwiYWRkQ29tbWVudFwiOiBcImNvbW1lbnQtbGlzdF9hZGRDb21tZW50X18yckhSOFwiLFxuXHRcInNob3dNb3JlXCI6IFwiY29tbWVudC1saXN0X3Nob3dNb3JlX18xUU42d1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcclxuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi8uLi9zdG9yZS9tb2RhbCdcclxuXHJcbmltcG9ydCBBZGRDb21tZW50IGZyb20gJy4uL2FkZC1jb21tZW50J1xyXG5pbXBvcnQgeyBBZGRjb21tZW50IH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb21tZW50LWxpc3QubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IENvbW1lbnRMaXN0ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBxdWVzdGlvbklkLFxyXG4gIGFuc3dlcklkLFxyXG4gIHNldFF1ZXN0aW9uLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgY29uc3QgeyBoYW5kbGVDb21wb25lbnRWaXNpYmxlIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dClcclxuXHJcbiAgY29uc3QgW3Nob3dBZGRDb21tZW50LCBzZXRTaG93QWRkQ29tbWVudF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdmlzaWJsZUNvbW1lbnRzLCBzZXRWaXNpYmxlQ29tbWVudHNdID0gdXNlU3RhdGUoY2hpbGRyZW4uc2xpY2UoMCwgMykpXHJcbiAgY29uc3QgW2RpZmZlcmVuY2UsIHNldERpZmZyZW5jZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZUNvbW1lbnRzKGNoaWxkcmVuLnNsaWNlKDAsIDMpKVxyXG4gIH0sIFtjaGlsZHJlbl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXREaWZmcmVuY2UoY2hpbGRyZW4ubGVuZ3RoIC0gdmlzaWJsZUNvbW1lbnRzLmxlbmd0aClcclxuICB9LCBbdmlzaWJsZUNvbW1lbnRzXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRDZWxsfT5cclxuICAgICAge3Zpc2libGVDb21tZW50c31cclxuXHJcbiAgICAgIHtkaWZmZXJlbmNlID4gMCA/IChcclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd01vcmV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlQ29tbWVudHMoY2hpbGRyZW4pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHNob3cgPGI+e2RpZmZlcmVuY2V9PC9iPiBtb3JlIGNvbW1lbnRzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICFzaG93QWRkQ29tbWVudCAmJiAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRDb21tZW50fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpc0F1dGhlbnRpY2F0ZWQoKSA/IHNldFNob3dBZGRDb21tZW50KHRydWUpIDogaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnc2lnbnVwJyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwgQWRkY29tbWVudCAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzaG93QWRkQ29tbWVudCAmJiAoXHJcbiAgICAgICAgPEFkZENvbW1lbnRcclxuICAgICAgICAgIHF1ZXN0aW9uSWQ9e3F1ZXN0aW9uSWR9XHJcbiAgICAgICAgICBhbnN3ZXJJZD17YW5zd2VySWR9XHJcbiAgICAgICAgICBzZXRTaG93QWRkQ29tbWVudD17c2V0U2hvd0FkZENvbW1lbnR9XHJcbiAgICAgICAgICBzZXRRdWVzdGlvbj17c2V0UXVlc3Rpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCdcclxuaW1wb3J0IHsgRGVsZXRlIH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcclxuaW1wb3J0IHsgRmV0Y2hDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvZmV0Y2gnXHJcblxyXG5pbXBvcnQgVGFnIGZyb20gJy4uLy4uL3RhZydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0LXN1bW1hcnkubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFBvc3RTdW1tYXJ5ID0gKHtcclxuICB0YWdzLFxyXG4gIGF1dGhvcixcclxuICBjcmVhdGVkLFxyXG4gIHF1ZXN0aW9uSWQsXHJcbiAgYW5zd2VySWQsXHJcbiAgc2V0UXVlc3Rpb24sXHJcbiAgY2hpbGRyZW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBpc0FkbWluIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGNvbnN0IHsgYXV0aEF4aW9zIH0gPSB1c2VDb250ZXh0KEZldGNoQ29udGV4dClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSBkZWxldGUgeW91ciBwb3N0PycpXHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLmRlbGV0ZShcclxuICAgICAgICBhbnN3ZXJJZFxyXG4gICAgICAgICAgPyBgL2Fuc3dlci8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWR9YFxyXG4gICAgICAgICAgOiBgL3F1ZXN0aW9uLyR7cXVlc3Rpb25JZH1gXHJcbiAgICAgIClcclxuXHJcbiAgICAgIGlmIChhbnN3ZXJJZCkge1xyXG4gICAgICAgIHNldFF1ZXN0aW9uKGRhdGEpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q2VsbH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7dGFncz8ubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICA8VGFnIGtleT17dGFnfT57dGFnfTwvVGFnPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyRGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW3VzZXJdXCIgYXM9e2AvdXNlcnMvJHthdXRob3IudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXV0aG9yLnByb2ZpbGVQaG90b31gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2F1dGhvci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7dGFncyA/ICdhc2tlZCcgOiAnYW5zd2VyZWQnfXsnICd9XHJcbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChuZXcgRGF0ZShjcmVhdGVkKSwge1xyXG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e2F1dGhvci51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsoYXV0aFN0YXRlLnVzZXJJbmZvPy5pZCA9PT0gYXV0aG9yLmlkIHx8IGlzQWRtaW4oKSkgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGV9IG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUNvbW1lbnQoKX0+XHJcbiAgICAgICAgICAgICAgPCBEZWxldGUgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RTdW1tYXJ5XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3RDZWxsXCI6IFwicG9zdC1zdW1tYXJ5X3Bvc3RDZWxsX18xb0JaMFwiLFxuXHRcInRleHRcIjogXCJwb3N0LXN1bW1hcnlfdGV4dF9fMThBdV9cIixcblx0XCJmb290ZXJcIjogXCJwb3N0LXN1bW1hcnlfZm9vdGVyX18xSC15MVwiLFxuXHRcInJvd1wiOiBcInBvc3Qtc3VtbWFyeV9yb3dfX1pPZ2xiXCIsXG5cdFwidGFnQ29udGFpbmVyXCI6IFwicG9zdC1zdW1tYXJ5X3RhZ0NvbnRhaW5lcl9fM0gtNy1cIixcblx0XCJ1c2VyRGV0YWlsc1wiOiBcInBvc3Qtc3VtbWFyeV91c2VyRGV0YWlsc19fM2I0VndcIixcblx0XCJpbmZvXCI6IFwicG9zdC1zdW1tYXJ5X2luZm9fXzNjMDRaXCIsXG5cdFwiZGVsZXRlXCI6IFwicG9zdC1zdW1tYXJ5X2RlbGV0ZV9fMldMeWJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCB7IEZldGNoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2ZldGNoJ1xyXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uLy4uLy4uL3N0b3JlL21vZGFsJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nXHJcbmltcG9ydCB7IEFycm93VXAsIEFycm93RG93biB9IGZyb20gJy4uLy4uL2ljb25zJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3Qtdm90ZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUG9zdFZvdGUgPSAoeyBzY29yZSwgdm90ZXMsIHF1ZXN0aW9uSWQsIGFuc3dlcklkLCBzZXRRdWVzdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRoU3RhdGUsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IGF1dGhBeGlvcyB9ID0gdXNlQ29udGV4dChGZXRjaENvbnRleHQpXHJcbiAgY29uc3QgeyBoYW5kbGVDb21wb25lbnRWaXNpYmxlIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dClcclxuXHJcbiAgY29uc3QgaXNVcFZvdGVkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHZvdGVzLmZpbmQoKHYpID0+IHYudXNlciA9PT0gYXV0aFN0YXRlLnVzZXJJbmZvPy5pZCk/LnZvdGUgPT09IDFcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzRG93blZvdGVkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHZvdGVzLmZpbmQoKHYpID0+IHYudXNlciA9PT0gYXV0aFN0YXRlLnVzZXJJbmZvPy5pZCk/LnZvdGUgPT09IC0xXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cFZvdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5nZXQoXHJcbiAgICAgIGAvdm90ZXMvdXB2b3RlLyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZCA/IGFuc3dlcklkIDogJyd9YFxyXG4gICAgKVxyXG4gICAgc2V0UXVlc3Rpb24oZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRvd25Wb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhdXRoQXhpb3MuZ2V0KFxyXG4gICAgICBgL3ZvdGVzL2Rvd252b3RlLyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZCA/IGFuc3dlcklkIDogJyd9YFxyXG4gICAgKVxyXG4gICAgc2V0UXVlc3Rpb24oZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuVm90ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLmdldChcclxuICAgICAgYC92b3Rlcy91bnZvdGUvJHtxdWVzdGlvbklkfS8ke2Fuc3dlcklkID8gYW5zd2VySWQgOiAnJ31gXHJcbiAgICApXHJcbiAgICBzZXRRdWVzdGlvbihkYXRhKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUNlbGx9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkKClcclxuICAgICAgICAgICAgPyBpc1VwVm90ZWQoKVxyXG4gICAgICAgICAgICAgID8gdW5Wb3RlKClcclxuICAgICAgICAgICAgICA6IHVwVm90ZSgpXHJcbiAgICAgICAgICAgIDogaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnc2lnbnVwJylcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8QXJyb3dVcCBjbGFzc05hbWU9e2lzVXBWb3RlZCgpID8gc3R5bGVzLnZvdGVkIDogJyd9IC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjb3JlfT57c2NvcmV9PC9kaXY+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52b3RlQnV0dG9ufVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoKVxyXG4gICAgICAgICAgICA/IGlzRG93blZvdGVkKClcclxuICAgICAgICAgICAgICA/IHVuVm90ZSgpXHJcbiAgICAgICAgICAgICAgOiBkb3duVm90ZSgpXHJcbiAgICAgICAgICAgIDogaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnc2lnbnVwJylcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8QXJyb3dEb3duIGNsYXNzTmFtZT17aXNEb3duVm90ZWQoKSA/IHN0eWxlcy52b3RlZCA6ICcnfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFZvdGVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidm90ZUNlbGxcIjogXCJwb3N0LXZvdGVfdm90ZUNlbGxfXzFHQ0hwXCIsXG5cdFwidm90ZUJ1dHRvblwiOiBcInBvc3Qtdm90ZV92b3RlQnV0dG9uX18xUEhzVlwiLFxuXHRcInZvdGVkXCI6IFwicG9zdC12b3RlX3ZvdGVkX18ybUU5elwiLFxuXHRcInNjb3JlXCI6IFwicG9zdC12b3RlX3Njb3JlX18ydGUzbVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0LXdyYXBwZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFBvc3RXcmFwcGVyID0gKHsgYm9yZGVyQm90dG9tID0gdHJ1ZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLmxheW91dCwgYm9yZGVyQm90dG9tICYmIHN0eWxlcy5ib3JkZXJCb3R0b20pfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0V3JhcHBlclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRcIjogXCJwb3N0LXdyYXBwZXJfbGF5b3V0X19iRVI5bFwiLFxuXHRcImJvcmRlckJvdHRvbVwiOiBcInBvc3Qtd3JhcHBlcl9ib3JkZXJCb3R0b21fXzNlaTJaXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGFnLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBUYWcgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjb3VudCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiBjb3VudCA/IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgdGFnOiBjaGlsZHJlbiB9IH19PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y24oc3R5bGVzLnRhZ2xheW91dCwgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm11bHRpcGxpZXJ9PsOXOjwvc3Bhbj4gXHJcbiAgICAgICZuYnNwOyAqL31cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY291bnR9Pntjb3VudH08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyB0YWc6IGNoaWxkcmVuIH0gfX0+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17Y24oc3R5bGVzLnRhZywgY2xhc3NOYW1lKX0gey4uLnByb3BzfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWdcIjogXCJ0YWdfdGFnX18yQ01aOVwiLFxuXHRcIm11bHRpcGxpZXJcIjogXCJ0YWdfbXVsdGlwbGllcl9fQy1nNEdcIixcblx0XCJjb3VudFwiOiBcInRhZ19jb3VudF9fMXNzV2lcIixcblx0XCJ0YWdsYXlvdXRcIjogXCJ0YWdfdGFnbGF5b3V0X19ibWpld1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90ZXh0YXJlYS5tb2R1bGUuY3NzJ1xyXG4vLyBjb25zdCBSaWNoVGV4dEVkaXRvciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi90ZXh0LWFyZWEtdXBkYXRlJyksIHtcclxuLy8gICBzc3I6IGZhbHNlLCAvLyBU4bqvdCBTU1JcclxuLy8gfSlcclxuY29uc3QgVGV4dEFyZWEgPSAoe1xyXG4gIGxhYmVsLFxyXG4gIGlucHV0SW5mbyxcclxuICBoYXNFcnJvcixcclxuICBlcnJvck1lc3NhZ2UsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIC8vIHZhbHVlLFxyXG4gIC8vIHNldFZhbHVlLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBbZWRpdG9yQ29udGVudCwgc2V0RWRpdG9yQ29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAge2xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e2xhYmVsfTwvbGFiZWw+fVxyXG4gICAgICB7aW5wdXRJbmZvICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0SW5mb30+e2lucHV0SW5mb308L3A+fVxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy50ZXh0YXJlYSwgY2xhc3NOYW1lLCBoYXNFcnJvciAmJiBzdHlsZXMuaGFzRXJyb3IpfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgICAgey8qIDxSaWNoVGV4dEVkaXRvciB2YWx1ZT17dmFsdWV9IHNldFZhbHVlPXtzZXRWYWx1ZX0+PC9SaWNoVGV4dEVkaXRvcj4gKi99XHJcbiAgICAgIHtoYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgIDwvZGl2ID5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInRleHRhcmVhX2NvbnRhaW5lcl9fdTA5bTZcIixcblx0XCJ0ZXh0YXJlYVwiOiBcInRleHRhcmVhX3RleHRhcmVhX18xX1E3M1wiLFxuXHRcImhhc0Vycm9yXCI6IFwidGV4dGFyZWFfaGFzRXJyb3JfXzFZN0ktXCIsXG5cdFwiZXJyb3JNZXNzYWdlXCI6IFwidGV4dGFyZWFfZXJyb3JNZXNzYWdlX18xS0k4OVwiLFxuXHRcImxhYmVsXCI6IFwidGV4dGFyZWFfbGFiZWxfX21TRGFMXCIsXG5cdFwiaW5wdXRJbmZvXCI6IFwidGV4dGFyZWFfaW5wdXRJbmZvX18yZHhiRFwiXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIFRBQkxFVF9TSVpFOiA5ODAsXHJcbiAgTU9CSUxFX1NJWkU6IDY0MFxyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gdXNlQ29tcG9uZW50VmlzaWJsZShpbml0aWFsSXNWaXNpYmxlKSB7XHJcbiAgY29uc3QgW2lzQ29tcG9uZW50VmlzaWJsZSwgc2V0SXNDb21wb25lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGluaXRpYWxJc1Zpc2libGUpXHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgdG9nZ2xlUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUhpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICByZWYuY3VycmVudCAmJlxyXG4gICAgICAhcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAhdG9nZ2xlUmVmPy5jdXJyZW50Py5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICApIHtcclxuICAgICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUhpZGUsIHRydWUpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlSGlkZSwgdHJ1ZSlcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHsgcmVmLCB0b2dnbGVSZWYsIGlzQ29tcG9uZW50VmlzaWJsZSwgc2V0SXNDb21wb25lbnRWaXNpYmxlIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ29tcG9uZW50VmlzaWJsZVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xyXG4gIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCdcclxuXHJcbiAgZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lcldpZHRoIDogdW5kZWZpbmVkLFxyXG4gICAgICBoZWlnaHQ6IGlzQ2xpZW50ID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShnZXRTaXplKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0NsaWVudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIHNldFdpbmRvd1NpemUoZ2V0U2l6ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcclxuICB9LCBbXSlcclxuICByZXR1cm4gd2luZG93U2l6ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgeyBwdWJsaWNGZXRjaCB9IGZyb20gJy4uLy4uL3V0aWwvZmV0Y2hlcidcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdlLXRpdGxlJ1xyXG5pbXBvcnQgRGV0YWlsUGFnZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RldGFpbC1wYWdlLWNvbnRhaW5lcidcclxuaW1wb3J0IFBvc3RXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9wb3N0LXdyYXBwZXInXHJcbmltcG9ydCBQb3N0Vm90ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvcG9zdC12b3RlJ1xyXG5pbXBvcnQgUG9zdFN1bW1hcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L3Bvc3Qtc3VtbWFyeSdcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9jb21tZW50LWxpc3QnXHJcbmltcG9ydCBDb21tZW50SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvY29tbWVudC1saXN0L2NvbW1lbnQtaXRlbSdcclxuaW1wb3J0IEFuc3dlckNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Fuc3dlci1jb250YWluZXInXHJcbmltcG9ydCBBZGRBbnN3ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZGQtYW5zd2VyJ1xyXG4vL1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1xdWVzdGlvbidcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWNvbnMnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVfdGV4dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xyXG5jb25zdCBRdWVzdGlvbkRldGFpbCA9ICh7IHF1ZXN0aW9uSWQsIHRpdGxlIH0pID0+IHtcclxuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Fuc3dlclNvcnRUeXBlLCBzZXRBbnN3ZXJzU29ydFR5cGVdID0gdXNlU3RhdGUoJ1ZvdGVzJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2guZ2V0KGAvcXVlc3Rpb24vJHtxdWVzdGlvbklkfWApXHJcbiAgICAgIHNldFF1ZXN0aW9uKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hRdWVzdGlvbigpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNvcnRpbmcgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFuc3dlclNvcnRUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ1ZvdGVzJzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlXHJcbiAgICAgIGNhc2UgJ05ld2VzdCc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWQpIC0gbmV3IERhdGUoYS5jcmVhdGVkKVxyXG4gICAgICBjYXNlICdPbGRlc3QnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gbmV3IERhdGUoYS5jcmVhdGVkKSAtIG5ldyBEYXRlKGIuY3JlYXRlZClcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0J1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGV4dHJhPXtmYWxzZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtpc0NsaWVudCAmJiB3aW5kb3cubG9jYXRpb24uaHJlZn0+PC9saW5rPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8UGFnZVRpdGxlIHRpdGxlPXt0aXRsZX0gYnV0dG9uIC8+XHJcblxyXG4gICAgICA8RGV0YWlsUGFnZUNvbnRhaW5lcj5cclxuICAgICAgICB7IXF1ZXN0aW9uICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3F1ZXN0aW9uICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQb3N0V3JhcHBlciBib3JkZXJCb3R0b209e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8UG9zdFZvdGVcclxuICAgICAgICAgICAgICAgIHNjb3JlPXtxdWVzdGlvbi5zY29yZX1cclxuICAgICAgICAgICAgICAgIHZvdGVzPXtxdWVzdGlvbi52b3Rlc31cclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uSWQ9e3F1ZXN0aW9uSWR9XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbj17c2V0UXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UG9zdFN1bW1hcnlcclxuICAgICAgICAgICAgICAgIHRhZ3M9e3F1ZXN0aW9uLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICBhdXRob3I9e3F1ZXN0aW9uLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e3F1ZXN0aW9uLmNyZWF0ZWR9XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbklkPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiB7cXVlc3Rpb24udGV4dH0gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHF1ZXN0aW9uLnRleHQgfX0gLz5cclxuICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5pbWFnZSAmJiA8SW1hZ2UgYmFzZTY0U3RyaW5nPXtxdWVzdGlvbi5pbWFnZX0gYWx0VGV4dD0nSW1hZ2UnIC8+fVxyXG4gICAgICAgICAgICAgIDwvUG9zdFN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgPENvbW1lbnRMaXN0IHF1ZXN0aW9uSWQ9e3F1ZXN0aW9uSWR9IHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7cXVlc3Rpb24uY29tbWVudHMubWFwKCh7IGlkLCBhdXRob3IsIGNyZWF0ZWQsIGJvZHkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2F1dGhvci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBpc093bmVyPXthdXRob3IudXNlcm5hbWUgPT09IHF1ZXN0aW9uLmF1dGhvci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkPXtjcmVhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgICAgICAgICA8L0NvbW1lbnRJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Db21tZW50TGlzdD5cclxuICAgICAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuXHJcbiAgICAgICAgICAgIHtxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbnN3ZXJDb250YWluZXJcclxuICAgICAgICAgICAgICAgIGFuc3dlcnNDb3VudD17cXVlc3Rpb24uYW5zd2Vycy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJTb3J0VHlwZT17YW5zd2VyU29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICBzZXRBbnN3ZXJTb3J0VHlwZT17c2V0QW5zd2Vyc1NvcnRUeXBlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbnN3ZXJzLnNvcnQoaGFuZGxlU29ydGluZygpKS5tYXAoKGFuc3dlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UG9zdFdyYXBwZXIga2V5PXthbnN3ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Vm90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2Fuc3dlci5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZvdGVzPXthbnN3ZXIudm90ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJZD17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0U3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXthbnN3ZXIuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZD17YW5zd2VyLmNyZWF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbklkPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VySWQ9e2Fuc3dlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YW5zd2VyLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3N0U3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSWQ9e3F1ZXN0aW9uSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJZD17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb249e3NldFF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHthbnN3ZXIuY29tbWVudHMubWFwKCh7IGlkLCBhdXRob3IsIGNyZWF0ZWQsIGJvZHkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJZD17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17YXV0aG9yLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3duZXI9e2F1dGhvci51c2VybmFtZSA9PT0gcXVlc3Rpb24uYXV0aG9yLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e2NyZWF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb249e3NldFF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tbWVudEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbW1lbnRMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9BbnN3ZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8QWRkQW5zd2VyXHJcbiAgICAgICAgICAgICAgdGFncz17cXVlc3Rpb24udGFnc31cclxuICAgICAgICAgICAgICBpZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICBzZXRRdWVzdGlvbj17c2V0UXVlc3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0RldGFpbFBhZ2VDb250YWluZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5zbHVnXHJcbiAgY29uc3QgcXVlc3Rpb25JZCA9IHNsdWcuc3BsaXQoJy0nKS5zaGlmdCgpXHJcbiAgY29uc3QgdGl0bGUgPSBzbHVnXHJcbiAgICA/LnN1YnN0cihzbHVnLmluZGV4T2YoJy0nKSArIDEpXHJcbiAgICAuc3BsaXQoJy0nKVxyXG4gICAgLmpvaW4oJyAnKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcXVlc3Rpb25JZCxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uRGV0YWlsXHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBBdXRoQ29udGV4dFxyXG5cclxuY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFthdXRoU3RhdGUsIHNldEF1dGhTdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICAgIGNvbnN0IHVzZXJJbmZvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbmZvJylcclxuICAgIGNvbnN0IGV4cGlyZXNBdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVzQXQnKVxyXG5cclxuICAgIHNldEF1dGhTdGF0ZSh7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBleHBpcmVzQXQsXHJcbiAgICAgIHVzZXJJbmZvOiB1c2VySW5mbyA/IEpTT04ucGFyc2UodXNlckluZm8pIDoge31cclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHNldEF1dGhJbmZvID0gKHsgdG9rZW4sIHVzZXJJbmZvLCBleHBpcmVzQXQgfSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeSh1c2VySW5mbykpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc0F0JywgZXhwaXJlc0F0KVxyXG5cclxuICAgIHNldEF1dGhTdGF0ZSh7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICB1c2VySW5mbyxcclxuICAgICAgZXhwaXJlc0F0XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySW5mbycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc0F0JylcclxuICAgIHNldEF1dGhTdGF0ZSh7fSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IHtcclxuICAgIGlmICghYXV0aFN0YXRlLnRva2VuIHx8ICFhdXRoU3RhdGUuZXhwaXJlc0F0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCA8IGF1dGhTdGF0ZS5leHBpcmVzQXRcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzQWRtaW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFN0YXRlLnVzZXJJbmZvPy5yb2xlID09PSAnYWRtaW4nXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgYXV0aFN0YXRlLFxyXG4gICAgICAgIHNldEF1dGhTdGF0ZTogKGF1dGhJbmZvKSA9PiBzZXRBdXRoSW5mbyhhdXRoSW5mbyksXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCxcclxuICAgICAgICBpc0FkbWluXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBBdXRoQ29udGV4dCwgQXV0aFByb3ZpZGVyIH1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vYXV0aCdcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3V0aWwvZmV0Y2hlcidcclxuXHJcbmNvbnN0IEZldGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBGZXRjaENvbnRleHRcclxuXHJcbmNvbnN0IEZldGNoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRoU3RhdGUgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcblxyXG4gIGNvbnN0IGF1dGhBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMXHJcbiAgfSlcclxuXHJcbiAgYXV0aEF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgIChjb25maWcpID0+IHtcclxuICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICByZXR1cm4gY29uZmlnXHJcbiAgICB9LFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH1cclxuICApXHJcblxyXG4gIGF1dGhBeGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSxcclxuICAgIChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zdCBjb2RlID0gZXJyb3IgJiYgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5zdGF0dXMgOiAwXHJcbiAgICAgIGlmIChjb2RlID09PSA0MDEgfHwgY29kZSA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvZGUnLCBjb2RlKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBhdXRoQXhpb3NcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IEZldGNoQ29udGV4dCwgRmV0Y2hQcm92aWRlciB9XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVDb250ZXh0XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwdWJsaWNGZXRjaCB9IGZyb20gJy4uL3V0aWwvZmV0Y2hlcidcclxuXHJcbmNvbnN0IFRhZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgeyBQcm92aWRlciB9ID0gVGFnQ29udGV4dFxyXG5cclxuY29uc3QgVGFnUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RhZ1N0YXRlLCBzZXRUYWdTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3B1bGFyVGFncyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoJy90YWdzL3BvcHVsZXJ0YWdzJylcclxuICAgICAgc2V0VGFnU3RhdGUoZGF0YSlcclxuICAgIH1cclxuICAgIGZldGNoUG9wdWxhclRhZ3MoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPFByb3ZpZGVyIHZhbHVlPXt7IHRhZ1N0YXRlIH19PntjaGlsZHJlbn08L1Byb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgeyBUYWdDb250ZXh0LCBUYWdQcm92aWRlciB9XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlX3RleHRfY29udGFpbmVyX18yaDJRS1wiXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4vLyBjb25zdCBiYXNlVVJMID1cclxuLy8gICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG4vLyAgICAgPyAnaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaSdcclxuLy8gICAgIDogYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5TSVRFX05BTUV9L2FwaWBcclxuLy8gY29uc3QgYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpJ1xyXG5jb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXNrZW0tc2VydmVyLm9ucmVuZGVyLmNvbS9hcGknXHJcbmNvbnN0IHB1YmxpY0ZldGNoID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMXHJcbn0pXHJcblxyXG5leHBvcnQgeyBwdWJsaWNGZXRjaCwgYmFzZVVSTCB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==