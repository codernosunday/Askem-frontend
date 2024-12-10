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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, title), __jsx("link", {
    rel: "canonical",
    href: isClient && window.location.href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx(_components_page_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    button: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_components_detail_page_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, !question && __jsx("div", {
    className: "loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_14__["Spinner"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })), question && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_post_post_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    borderBottom: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
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
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: question.text
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), question.image && __jsx(_components_image_question__WEBPACK_IMPORTED_MODULE_13__["default"], {
    base64String: question.image,
    altText: "Image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 36
    }
  })), __jsx(_components_post_comment_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    questionId: questionId,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 84,
      columnNumber: 19
    }
  }, body)))), question.answers.length > 0 && __jsx(_components_answer_container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    answersCount: question.answers.length,
    answerSortType: answerSortType,
    setAnswerSortType: setAnswersSortType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, question.answers.sort(handleSorting()).map(answer => __jsx(_components_post_post_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: answer.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
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
      lineNumber: 114,
      columnNumber: 21
    }
  }, answer.text), __jsx(_components_post_comment_list__WEBPACK_IMPORTED_MODULE_9__["default"], {
    questionId: questionId,
    answerId: answer.id,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 129,
      columnNumber: 25
    }
  }, body)))))), __jsx(_components_add_answer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    tags: question.tags,
    id: questionId,
    setQuestion: setQuestion,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 20,
      columnNumber: 10
    }
  }, children);
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
const baseURL = 'http://localhost:8081/api';
// const baseURL = 'https://askem-server.onrender.com/api'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRkLWFuc3dlci9hZGQtYW5zd2VyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZGQtYW5zd2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5zd2VyLWNvbnRhaW5lci9hbnN3ZXItY29udGFpbmVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbnN3ZXItY29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2UtY29udGFpbmVyL2RldGFpbC1wYWdlLWNvbnRhaW5lci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGV0YWlsLXBhZ2UtY29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQWRkY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0FkbWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9BcnJvd0Rvd24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9BcnJvd1VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2xvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9EZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1VzZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlLXF1ZXN0aW9uL2ltYWdlcXVlc3Rpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ltYWdlLXF1ZXN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2V4dHJhL2V4dHJhLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZXh0cmEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3RlcnN0eWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9tYWluL21haW4ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGViYXIvc2lkZWJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcm9wZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJvcGRvd24vbmF2aWdhdGlvbi1kcm9wZG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2LWl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdi1pdGVtL25hdi1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UtdGl0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvYWRkLWNvbW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L2NvbW1lbnQtbGlzdC9jb21tZW50LWl0ZW0vY29tbWVudC1pdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L2NvbW1lbnQtbGlzdC9jb21tZW50LWl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L2NvbW1lbnQtbGlzdC9jb21tZW50LWxpc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvY29tbWVudC1saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9wb3N0LXN1bW1hcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L3Bvc3Qtc3VtbWFyeS9wb3N0LXN1bW1hcnkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC12b3RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC9wb3N0LXZvdGUvcG9zdC12b3RlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0L3Bvc3Qtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QvcG9zdC13cmFwcGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWcvdGFnLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0YXJlYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9xdWVzdGlvbnMvW3NsdWddLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdGFnLmpzIiwid2VicGFjazovLy8uL3V0aWwvZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9mb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiQWRkQW5zd2VyIiwiaWQiLCJ0YWdzIiwic2V0UXVlc3Rpb24iLCJhdXRoQXhpb3MiLCJ1c2VDb250ZXh0IiwiRmV0Y2hDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiQXV0aENvbnRleHQiLCJoYW5kbGVDb21wb25lbnRWaXNpYmxlIiwiTW9kYWxDb250ZXh0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsIl9fanN4IiwiRm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsInRleHQiLCJvblN1Ym1pdCIsInZhbHVlcyIsInNldFN0YXR1cyIsInJlc2V0Rm9ybSIsImRhdGEiLCJwb3N0IiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJtaW4iLCJtYXgiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImVycm9ycyIsInRvdWNoZWQiLCJzdGF0dXMiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiVGV4dEFyZWEiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm9uQmx1ciIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwidGV4dGFyZWEiLCJidXR0b24iLCJCdXR0b24iLCJ0eXBlIiwicHJpbWFyeSIsImlzTG9hZGluZyIsImRpc2FibGVkIiwib25DbGljayIsIm1hcCIsInRhZyIsIlRhZyIsImtleSIsIkxpbmsiLCJocmVmIiwiYXMiLCJBbnN3ZXJDb250YWluZXIiLCJhbnN3ZXJDb3VudCIsImFuc3dlclNvcnRUeXBlIiwic2V0QW5zd2VyU29ydFR5cGUiLCJjaGlsZHJlbiIsImhlYWRlciIsImZpbGwiLCJCdXR0b25Hcm91cCIsImJ1dHRvbnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiYm9yZGVyQm90dG9tIiwiY24iLCJhY3RpdmUiLCJMaW5rQnV0dG9uIiwiX3JlZiIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4dGVuZHMiLCJCYXNlQnV0dG9uIiwiX3JlZjIiLCJfcmVmMyIsInNlY29uZGFyeSIsImZ1bGwiLCJDb21wIiwiRGV0YWlsUGFnZUNvbnRhaW5lciIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwiTWFpbiIsImJvcmRlciIsIndpZHRoIiwiQ09OU1QiLCJUQUJMRVRfU0laRSIsIkV4dHJhIiwibWFyZ2luVG9wIiwiQWRkY29tbWVudCIsImhlaWdodCIsInZpZXdCb3giLCJkIiwic3Ryb2tlIiwiQWRtaW5zIiwiU3ZnQWxlcnQiLCJTdmdBcnJvd0Rvd24iLCJTdmdBcnJvd1VwIiwiU3ZnQ2xvc2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsIkRlbGV0ZSIsIkdyb3VwcyIsIlN2Z0xvZ28iLCJ4bWxucyIsIlN2Z01lbnUiLCJTdmdTZWFyY2giLCJTdmdTcGlubmVyIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIngiLCJ5IiwicngiLCJyeSIsImF0dHJpYnV0ZU5hbWUiLCJrZXlUaW1lcyIsImR1ciIsImJlZ2luIiwicmVwZWF0Q291bnQiLCJ0cmFuc2Zvcm0iLCJUYWdzIiwiVXNlcnMiLCJTdmdXb3JsZCIsIkltYWdlUXVlc3Rpb24iLCJiYXNlNjRTdHJpbmciLCJhbHRUZXh0IiwiaW1hZ2Vjb250YWluZXIiLCJzcmMiLCJiYXNlNjRpbWFnZSIsInRhZ1N0YXRlIiwiVGFnQ29udGV4dCIsInRhZ0NvbnRhaW5lciIsInN0eWxlIiwiU3Bpbm5lciIsInBvcHVsYXJUYWdzIiwiX2lkIiwiY291bnQiLCJGb290ZXIiLCJmb290ZXIiLCJsaW5rcyIsImxpbmsiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJIZWFkZXIiLCJhdXRoU3RhdGUiLCJsb2dvdXQiLCJyZWYiLCJ0b2dnbGVSZWYiLCJpc0NvbXBvbmVudFZpc2libGUiLCJzZXRJc0NvbXBvbmVudFZpc2libGUiLCJ1c2VDb21wb25lbnRWaXNpYmxlIiwidXNlRWZmZWN0IiwiTU9CSUxFX1NJWkUiLCJtZW51Q29udGFpbmVyIiwibWVudSIsImlzT3BlbiIsIkNsb3NlIiwiTWVudSIsImxvZ28iLCJMb2dvIiwiZmxleCIsInVzZXJJbmZvIiwidXNlcm5hbWUiLCJidG5sb2dvdXQiLCJSZWFjdCIsIkZyYWdtZW50IiwiTmF2aWdhdGlvbkRyb3Bkb3duIiwiTGF5b3V0IiwiZXh0cmEiLCJsYXlvdXQiLCJib2R5IiwibWFpbiIsIlNpZGViYXIiLCJzaWRlYmFyIiwiTmF2aWdhdGlvbiIsImRpYWxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzQWRtaW4iLCJuYXYiLCJOYXZJdGVtIiwicGF0aG5hbWUiLCJzcGxpdCIsImNvbG9yIiwiQWRtaW4iLCJuYXZJdGVtIiwibmF2SXRlbVNlbGVjdGVkIiwiUGFnZVRpdGxlIiwidGl0bGUiLCJncm91cCIsImFza0J0biIsImFkbWluQnRuIiwiYnV0dG9uQ29udGFpbmVyIiwiYnRuZGF0Y2F1aG9pIiwic3VtbWFyeSIsIkFkZENvbW1lbnQiLCJxdWVzdGlvbklkIiwiYW5zd2VySWQiLCJzZXRTaG93QWRkQ29tbWVudCIsImNvbW1lbnQiLCJDb21tZW50SXRlbSIsImF1dGhvciIsImNyZWF0ZWQiLCJpc093bmVyIiwiY29tbWVudElkIiwiX2F1dGhTdGF0ZSR1c2VySW5mbyIsImhhbmRsZURlbGV0ZUNvbW1lbnQiLCJyZXMiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlIiwiY29tbWVudENvbnRhaW5lciIsIm93bmVyIiwidW5kZWZpbmVkIiwiZGF0ZVRleHQiLCJmb3JtYXQiLCJDb21tZW50TGlzdCIsInNob3dBZGRDb21tZW50IiwidmlzaWJsZUNvbW1lbnRzIiwic2V0VmlzaWJsZUNvbW1lbnRzIiwic2xpY2UiLCJkaWZmZXJlbmNlIiwic2V0RGlmZnJlbmNlIiwibGVuZ3RoIiwiY29tbWVudENlbGwiLCJzaG93TW9yZSIsImFkZENvbW1lbnQiLCJQb3N0U3VtbWFyeSIsInB1c2giLCJwb3N0Q2VsbCIsInJvdyIsInVzZXJEZXRhaWxzIiwicHJvZmlsZVBob3RvIiwiYWx0IiwiaW5mbyIsImZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QiLCJhZGRTdWZmaXgiLCJQb3N0Vm90ZSIsInNjb3JlIiwidm90ZXMiLCJpc1VwVm90ZWQiLCJfdm90ZXMkZmluZCIsImZpbmQiLCJ2IiwidXNlciIsInZvdGUiLCJpc0Rvd25Wb3RlZCIsIl92b3RlcyRmaW5kMiIsIl9hdXRoU3RhdGUkdXNlckluZm8yIiwidXBWb3RlIiwiZ2V0IiwiZG93blZvdGUiLCJ1blZvdGUiLCJ2b3RlQ2VsbCIsInZvdGVCdXR0b24iLCJBcnJvd1VwIiwidm90ZWQiLCJBcnJvd0Rvd24iLCJQb3N0V3JhcHBlciIsInF1ZXJ5IiwidGFnbGF5b3V0IiwibGFiZWwiLCJpbnB1dEluZm8iLCJlZGl0b3JDb250ZW50Iiwic2V0RWRpdG9yQ29udGVudCIsImluaXRpYWxJc1Zpc2libGUiLCJ1c2VSZWYiLCJoYW5kbGVIaWRlIiwiZXZlbnQiLCJoYW5kbGVDbGlja091dHNpZGUiLCJfdG9nZ2xlUmVmJGN1cnJlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNDbGllbnQiLCJnZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJoYW5kbGVSZXNpemUiLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJwcmVmZXRjaCIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZm9jdXMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsIlJvdXRlciIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsInNlYXJjaFBhcmFtcyIsImhhc2giLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsIm9rIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwic29tZSIsInJlIiwidGVzdCIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXNvbHZlUmV3cml0ZXMiLCJyZXdyaXRlIiwic291cmNlIiwiZGVzdFJlcyIsImdldFJvdXRlTWF0Y2hlciIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJRdWVzdGlvbkRldGFpbCIsInF1ZXN0aW9uIiwic2V0QW5zd2Vyc1NvcnRUeXBlIiwiZmV0Y2hRdWVzdGlvbiIsInB1YmxpY0ZldGNoIiwiaGFuZGxlU29ydGluZyIsImEiLCJiIiwiSGVhZCIsInJlbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaW1hZ2UiLCJJbWFnZSIsImNvbW1lbnRzIiwiYW5zd2VycyIsImFuc3dlcnNDb3VudCIsInNvcnQiLCJhbnN3ZXIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInNoaWZ0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwic2V0QXV0aFN0YXRlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZXhwaXJlc0F0IiwiSlNPTiIsInBhcnNlIiwic2V0QXV0aEluZm8iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImdldFRpbWUiLCJyb2xlIiwiYXV0aEluZm8iLCJGZXRjaFByb3ZpZGVyIiwiYXhpb3MiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVqZWN0IiwibG9nIiwiU3RvcmVDb250ZXh0IiwiVGFnUHJvdmlkZXIiLCJzZXRUYWdTdGF0ZSIsImZldGNoUG9wdWxhclRhZ3MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FB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QUFnQixDQUFDLENBQUM7RUFDcEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLE9BQU9odUIsS0FBQSxDQUFDa3NCLFFBQVE7SUFBQzdwQixLQUFLLEVBQUU7TUFBRStGO0lBQVMsQ0FBRTtJQUFBbEgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUVzQyxRQUFtQixDQUFDO0FBQzdELENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU11cEIsT0FBTyxHQUFHLDJCQUEyQjtBQUMzQztBQUNBLE1BQU10QyxXQUFXLEdBQUdxQyw0Q0FBSyxDQUFDOVQsTUFBTSxDQUFDO0VBQy9CK1Q7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ1RGLGtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InBhZ2VzL3F1ZXN0aW9ucy9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3F1ZXN0aW9ucy9bc2x1Z10uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImFkZC1hbnN3ZXJfY29udGFpbmVyX19hMlVUa1wiLFxuXHRcInRleHRhcmVhXCI6IFwiYWRkLWFuc3dlcl90ZXh0YXJlYV9fM3VTQzBcIixcblx0XCJzdGF0dXNcIjogXCJhZGQtYW5zd2VyX3N0YXR1c19fM1FNNkFcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuXHJcbmltcG9ydCB7IEZldGNoQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL2ZldGNoJ1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vc3RvcmUvbW9kYWwnXHJcblxyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vdGV4dGFyZWEnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xyXG5pbXBvcnQgVGFnIGZyb20gJy4uL3RhZydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hZGQtYW5zd2VyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBBZGRBbnN3ZXIgPSAoeyBpZCwgdGFncywgc2V0UXVlc3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aEF4aW9zIH0gPSB1c2VDb250ZXh0KEZldGNoQ29udGV4dClcclxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IGhhbmRsZUNvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgaW5pdGlhbFZhbHVlcz17eyB0ZXh0OiAnJyB9fVxyXG4gICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdGF0dXMsIHJlc2V0Rm9ybSB9KSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5wb3N0KGAvYW5zd2VyLyR7aWR9YCwgdmFsdWVzKVxyXG4gICAgICAgICAgc2V0UXVlc3Rpb24oZGF0YSlcclxuICAgICAgICAgIHJlc2V0Rm9ybSh7fSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgc2V0U3RhdHVzKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfX1cclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XHJcbiAgICAgICAgdGV4dDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAucmVxdWlyZWQoJ0JvZHkgaXMgbWlzc2luZy4nKVxyXG4gICAgICAgICAgLm1pbigzMCwgJ0JvZHkgbXVzdCBiZSBhdCBsZWFzdCAzMCBjaGFyYWN0ZXJzLicpXHJcbiAgICAgICAgICAubWF4KDMwMDAwLCAnQm9keSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMzAwMDAgY2hhcmFjdGVycy4nKVxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgeyh7XHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIGVycm9ycyxcclxuICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICB9KSA9PiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxoMj5Zb3VyIGFuc3dlcjwvaDI+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgbmFtZT1cInRleHRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgaGFzRXJyb3I9e3RvdWNoZWQudGV4dCAmJiBlcnJvcnMudGV4dH1cclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnMudGV4dCAmJiBlcnJvcnMudGV4dH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT57c3RhdHVzfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNBdXRoZW50aWNhdGVkKCkgJiYgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSh0cnVlLCAnc2lnbnVwJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3N0IFlvdXIgQW5zd2VyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgIEJyb3dzZSBvdGhlciBxdWVzdGlvbnMgdGFnZ2VkICZuYnNwO1xyXG4gICAgICAgICAgICB7dGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9Pnt0YWd9PC9UYWc+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBvciAmbmJzcDtcclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9xdWVzdGlvbnMvYXNrXCIgYXM9XCIvcXVlc3Rpb25zL2Fza1wiPlxyXG4gICAgICAgICAgICAgIDxhPmFzayB5b3VyIG93biBxdWVzdGlvbi48L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtaWs+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRBbnN3ZXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiYW5zd2VyLWNvbnRhaW5lcl9jb250YWluZXJfXzFKaG5CXCIsXG5cdFwiaGVhZGVyXCI6IFwiYW5zd2VyLWNvbnRhaW5lcl9oZWFkZXJfXzJ4V3hrXCIsXG5cdFwiZmlsbFwiOiBcImFuc3dlci1jb250YWluZXJfZmlsbF9fMm5FZ25cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuLi9idXR0b24tZ3JvdXAnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYW5zd2VyLWNvbnRhaW5lci5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQW5zd2VyQ29udGFpbmVyID0gKHtcclxuICBhbnN3ZXJDb3VudCxcclxuICBhbnN3ZXJTb3J0VHlwZSxcclxuICBzZXRBbnN3ZXJTb3J0VHlwZSxcclxuICBjaGlsZHJlblxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsbH0+XHJcbiAgICAgICAgICA8aDI+e2Fuc3dlckNvdW50fSBBbnN3ZXJzPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uR3JvdXBcclxuICAgICAgICAgIGJ1dHRvbnM9e1snVm90ZXMnLCAnTmV3ZXN0JywgJ09sZGVzdCddfVxyXG4gICAgICAgICAgc2VsZWN0ZWQ9e2Fuc3dlclNvcnRUeXBlfVxyXG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldEFuc3dlclNvcnRUeXBlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuc3dlckNvbnRhaW5lclxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJidXR0b24tZ3JvdXBfY29udGFpbmVyX19GMC1BQVwiLFxuXHRcImFjdGl2ZVwiOiBcImJ1dHRvbi1ncm91cF9hY3RpdmVfXzNZMkxmXCIsXG5cdFwiYm9yZGVyQm90dG9tXCI6IFwiYnV0dG9uLWdyb3VwX2JvcmRlckJvdHRvbV9fMld1NnBcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24tZ3JvdXAubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwID0gKHtcclxuICBidXR0b25zLFxyXG4gIHNlbGVjdGVkLFxyXG4gIHNldFNlbGVjdGVkLFxyXG4gIGJvcmRlckJvdHRvbSA9IGZhbHNlXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5jb250YWluZXIsIGJvcmRlckJvdHRvbSAmJiBzdHlsZXMuYm9yZGVyQm90dG9tKX0+XHJcbiAgICAgIHtidXR0b25zLm1hcCgoYnV0dG9uKSA9PiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAga2V5PXtidXR0b259XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkID09PSBidXR0b24gJiYgc3R5bGVzLmFjdGl2ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKGJ1dHRvbil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkdyb3VwXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl9idXR0b25fXzItMWlRXCIsXG5cdFwicHJpbWFyeVwiOiBcImJ1dHRvbl9wcmltYXJ5X18xbUdkTFwiLFxuXHRcInNlY29uZGFyeVwiOiBcImJ1dHRvbl9zZWNvbmRhcnlfXzFzZ01IXCIsXG5cdFwiZnVsbFwiOiBcImJ1dHRvbl9mdWxsX18xVkRrc1wiLFxuXHRcImlzTG9hZGluZ1wiOiBcImJ1dHRvbl9pc0xvYWRpbmdfXzNsdDJvXCIsXG5cdFwic3BpblwiOiBcImJ1dHRvbl9zcGluX18yeER2aVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTGlua0J1dHRvbiA9ICh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGFzPXtocmVmfT5cclxuICAgICAgPGEgey4uLnByb3BzfT57Y2hpbGRyZW59PC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQmFzZUJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHsuLi5wcm9wc30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gKHtcclxuICBwcmltYXJ5LFxyXG4gIHNlY29uZGFyeSxcclxuICBmdWxsID0gZmFsc2UsXHJcbiAgaXNMb2FkaW5nID0gZmFsc2UsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBDb21wID0gcHJvcHMuaHJlZiA/IExpbmtCdXR0b24gOiBCYXNlQnV0dG9uXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgc3R5bGVzLmJ1dHRvbixcclxuICAgICAgICBwcmltYXJ5ICYmIHN0eWxlcy5wcmltYXJ5LFxyXG4gICAgICAgIHNlY29uZGFyeSAmJiBzdHlsZXMuc2Vjb25kYXJ5LFxyXG4gICAgICAgIGZ1bGwgJiYgc3R5bGVzLmZ1bGwsXHJcbiAgICAgICAgaXNMb2FkaW5nICYmIHN0eWxlcy5pc0xvYWRpbmcsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db21wPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImRldGFpbC1wYWdlLWNvbnRhaW5lcl9jb250YWluZXJfXzNCUnRUXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplJ1xyXG5cclxuaW1wb3J0IEV4dHJhIGZyb20gJy4uL2xheW91dC9leHRyYSdcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vbGF5b3V0L21haW4nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZGV0YWlsLXBhZ2UtY29udGFpbmVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBEZXRhaWxQYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8TWFpbiBib3JkZXI9e2ZhbHNlfT57Y2hpbGRyZW59PC9NYWluPlxyXG4gICAgICB7c2l6ZS53aWR0aCA+IENPTlNULlRBQkxFVF9TSVpFICYmIDxFeHRyYSBtYXJnaW5Ub3A9ezE2fSAvPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUGFnZUNvbnRhaW5lclxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEFkZGNvbW1lbnQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjJlbVwiIGhlaWdodD1cIjJlbVwiIHZpZXdCb3g9XCIwIDAgMjMgMjNcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgOFYxNE0xNSAxMUg5TTEyLjI4OTYgMTcuOTk4NEMxOC4wOTY1IDE3LjkzNDMgMjEgMTUuOTE4OSAyMSAxMUMyMSA2IDE4IDQgMTIgNEM2IDQgMyA2IDMgMTFDMyAxNC4wNzcxIDQuMTM2MjMgMTYuMDE4IDYuNDA4NjggMTcuMDU1N0w1IDIxTDEyLjI4OTYgMTcuOTk4NFpcIiBzdHJva2U9XCIjZmZmZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkY29tbWVudFxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQWRtaW5zKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIGZpbGw9XCIjZmNkMzk0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmY2QzOTRcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMC4wMjQ4LDkuOTc1MjEgTDUuODMwMDgsMTQuMTY5OSBDNC43MjU1MSwxNS4yNzQ1IDIuOTM0NjQsMTUuMjc0NSAxLjgzMDA4LDE0LjE2OTkgQzAuNzI1NTA1LDEzLjA2NTQgMC43MjU1MDYsMTEuMjc0NSAxLjgzMDA4LDEwLjE2OTkgTDYuMDI0NzksNS45NzUyMSBDNi4wMDg0LDUuODE5MDQgNiw1LjY2MDUgNiw1LjUgQzYsMy4xODA5NiA3Ljc1NDIsMS4yNzE2NCAxMC4wMDgsMS4wMjY1OCBDMTAuMTY5NiwxLjAwOTAxIDEwLjMzMzgsMSAxMC41LDEgQzExLjE5MDYsMSAxMS44NDQ4LDEuMTU1NTUgMTIuNDI5NSwxLjQzMzUxIEwxMC4yODUxLDMuNTc3OTcgQzkuNjk5Myw0LjE2Mzc2IDkuNjk5Myw1LjExMzUxIDEwLjI4NTEsNS42OTkyOSBDMTAuODcwOSw2LjI4NTA4IDExLjgyMDYsNi4yODUwOCAxMi40MDY0LDUuNjk5MjkgTDE0LjU1NjQsMy41NDkzMiBDMTQuODQwNyw0LjEzOTQ1IDE1LDQuODAxMTIgMTUsNS41IEMxNSw1LjY1NDI5IDE0Ljk5MjIsNS44MDY3NiAxNC45NzcxLDUuOTU3MDUgQzE0Ljc0OCw4LjIyNzY3IDEyLjgzMSwxMCAxMC41LDEwIEMxMC4zMzk1LDEwIDEwLjE4MSw5Ljk5MTYgMTAuMDI0OCw5Ljk3NTIxIFogTTkuMjg0OTksNy44ODY1OCBMNC40MTU4NiwxMi43NTU3IEM0LjA5MjM0LDEzLjA3OTIgMy41Njc4MSwxMy4wNzkyIDMuMjQ0MjksMTIuNzU1NyBDMi45MjA3NywxMi40MzIyIDIuOTIwNzcsMTEuOTA3NyAzLjI0NDI5LDExLjU4NDEgTDguMTEzNDIsNi43MTUgTDkuMjg0OTksNy44ODY1OCBaXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbnNcclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z0FsZXJ0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNOCAxNkE4IDggMCAxMTggMGE4IDggMCAwMTAgMTZ6TTcgM3Y2aDJWM0g3em0wIDh2Mmgydi0ySDd6XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnQWxlcnRcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdmdBcnJvd0Rvd24ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMiAxMGgzMkwxOCAyNiAyIDEwelwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd0Rvd25cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdmdBcnJvd1VwKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aCBkPVwiTTIgMjZoMzJMMTggMTAgMiAyNnpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnQXJyb3dVcFxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z0Nsb3NlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImNsb3NlX3N2Z19fZmVhdGhlciBjbG9zZV9zdmdfX2ZlYXRoZXIteFwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0xOCA2TDYgMThNNiA2bDEyIDEyXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2xvc2VcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBEZWxldGUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjJlbVwiIGhlaWdodD1cIjJlbVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMTFWMTdcIiBzdHJva2U9XCIjZDIxNDA0XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD4gPHBhdGggZD1cIk0xNCAxMVYxN1wiIHN0cm9rZT1cIiNkMjE0MDRcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTQgN0gyMFwiIHN0cm9rZT1cIiNkMjE0MDRcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTYgN0gxMkgxOFYxOEMxOCAxOS42NTY5IDE2LjY1NjkgMjEgMTUgMjFIOUM3LjM0MzE1IDIxIDYgMTkuNjU2OSA2IDE4VjdaXCIgc3Ryb2tlPVwiI2QyMTQwNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNOSA1QzkgMy44OTU0MyA5Ljg5NTQzIDMgMTEgM0gxM0MxNC4xMDQ2IDMgMTUgMy44OTU0MyAxNSA1VjdIOVY1WlwiIHN0cm9rZT1cIiNkMjE0MDRcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGVcclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEdyb3Vwcyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMS4yNWVtXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAyMyAyM1wiIGZpbGw9XCIjZmNkMzk0XCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0yNCwxMGMwLDMuMDItMS4zNCw1LjcxLTMuNDUsNy41NUMyMi4wNywxNS43OSwyMywxMy41MSwyMywxMWMwLTUuNTItNC40OC0xMC0xMC0xMGMtMi41MSwwLTQuNzksMC45My02LjU1LDIuNDUgQzguMjksMS4zNCwxMC45OCwwLDE0LDBDMTkuNTIsMCwyNCw0LjQ4LDI0LDEweiBNMTIsMkM4Ljk4LDIsNi4yOSwzLjM0LDQuNDUsNS40NUM2LjIxLDMuOTMsOC40OSwzLDExLDNjNS41MiwwLDEwLDQuNDgsMTAsMTAgYzAsMi41MS0wLjkzLDQuNzktMi40NSw2LjU1QzIwLjY2LDE3LjcxLDIyLDE1LjAyLDIyLDEyQzIyLDYuNDgsMTcuNTIsMiwxMiwyeiBNMjAsMTRjMCw1LjUyLTQuNDgsMTAtMTAsMTBTMCwxOS41MiwwLDE0IEMwLDguNDgsNC40OCw0LDEwLDRTMjAsOC40OCwyMCwxNHogTTE2LDEzLjMyaC01LjNWOEg5LjN2NS4zMkg0djEuMzFoNS4zVjIwaDEuMzl2LTUuMzdIMTZWMTMuMzJ6XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcm91cHNcclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuZnVuY3Rpb24gU3ZnTG9nbyhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEzLjU5IDE0LjYxXCI+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgIC5iIHsgZmlsbDogI2Y0ZjFmMzsgfVxyXG4gICAgICAuYyB7IGZpbGw6ICNlMmFkOGM7IH1cclxuICAgICAgLmQgeyBmaWxsOiAjZTFhYTg4OyB9XHJcbiAgICAgIC5lIHsgZmlsbDogI2YzZjFmMjsgfVxyXG4gICAgICAuZiB7IGZpbGw6ICMzNTMzOGU7IH1cclxuICAgICAgLmcgeyBmaWxsOiAjMzYzNDhlOyB9XHJcbiAgICAgIC5oIHsgZmlsbDogI2Q3YTc4OTsgfVxyXG4gICAgICAuaSB7IGZpbGw6ICNmZGQ1OTQ7IH1cclxuICAgICAgLmogeyBmaWxsOiAjZWFiMjg4OyB9XHJcbiAgICAgIC5rIHsgZmlsbDogIzM3MzU4ZTsgfVxyXG4gICAgICAubCB7IGZpbGw6ICMzODM3OTA7IH1cclxuICAgICAgLm0geyBmaWxsOiAjZmJkMzk1OyB9XHJcbiAgICAgIC5uIHsgZmlsbDogIzM1MzQ5MDsgfVxyXG4gICAgICAubyB7IGZpbGw6ICNkZmE4ODc7IH1cclxuICAgICAgLnAgeyBmaWxsOiAjZTNhYzg3OyB9XHJcbiAgICAgIC5xIHsgZmlsbDogI2ZjZDM5NDsgfVxyXG4gICAgICAuciB7IGZpbGw6ICNmOWY4Zjk7IH1cclxuICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxwYXRoIGNsYXNzTmFtZT1cIm5cIiBkPVwiTTMuNTgsMTEuNDdjLS4yMy0uMDYtLjQ1LS4xMS0uNjctLjE5LS43NC0uMjgtMS4yMi0uOTgtMS4yMy0xLjc3LDAtLjQ2LDAtLjkxLDAtMS4zNywwLS4xNy0uMDUtLjI1LS4yMi0uMzJDLjU1LDcuNDcsMCw2LjY4LDAsNS43M2MwLS45NywuNTQtMS43NiwxLjQ4LTIuMTMsLjE4LS4wNywuMjEtLjE2LC4yMS0uMzMsMC0uNDQsMC0uODksMC0xLjMzQzEuNjksLjg2LDIuNTQsMCwzLjYyLDAsNS43NywwLDcuOTEsMCwxMC4wNSwwYy43OCwwLDEuNDIsLjM2LDEuNzIsMS4wOCwuNDIsMSwuNzQsMi4wMywxLjEsMy4wNSwuMjEsLjYxLC40MiwxLjIzLC42MywxLjg0LC4yNiwuNzgtLjA1LDEuMzQtLjg1LDEuNTdxLS42NywuMTktLjY3LC44OWMwLC4zNCwwLC42OCwwLDEuMDMsMCwxLjA2LS43OSwxLjkxLTEuODUsMS45NS0uNSwuMDItLjc5LC4zNy0xLjE2LC42LS4wNSwuMDMtLjA2LC4xNC0uMDYsLjIyLS4xNCwxLjIzLS43OCwyLjA2LTEuNzgsMi4yOS0xLjE3LC4yOC0yLjQ0LS4yLTMuMDMtMS4yMi0uMjUtLjQ0LS4zNC0uOTgtLjQ5LTEuNDctLjA0LS4xMi0uMDItLjI1LS4wNC0uMzdaTS45Miw1LjI0bC0uMDUsLjJjLS4yLDEuMDEsLjUsMS43NiwxLjU2LDEuNjcsLjAyLC4xMiwuMDYsLjI0LC4wNiwuMzYsMCwuNjYsMCwxLjMyLDAsMS45OCwwLC41NCwuMzUsLjk5LC44MywxLjEyLC4yNCwuMDcsLjQ1LC4wNywuNS0uMjcsLjAzLS4xOCwuMS0uMzUsLjE2LS41MiwuMTMtLjI0LC4yNC0uNDksLjQxLS43MSwuNS0uNjcsMS40NC0uNTksMS44MywuMTUsLjA5LC4xNywuMTgsLjM1LC4yNCwuNTMsLjA3LC4yMSwuMTgsLjI1LC4zOSwuMTgsLjU4LS4xOSwxLjE4LS4zNSwxLjc2LS41MywuNi0uMTksMS4xMi0uMSwxLjU2LC4zNmwuMjUsLjc2Yy41My0uMTUsLjgxLS41NywuNzctMS4xMiwuMDEtLjc2LC4wMy0xLjUzLC4wNC0yLjI5LC4zNS0uMSwuNjktLjIsMS4wNC0uMjksLjU4LS4xNiwuNjMtLjI2LC4zOC0uODMtLjQ5LTEuNDUtLjk3LTIuOTEtMS40Ny00LjM2LS4yLS41Ni0uNjMtLjgzLTEuMjQtLjgyLTIsLjAxLTQsMC02LjAxLDAtLjEyLDAtLjI1LC4wMi0uMzcsLjAzbC0uMDcsLjAyaDBjLS41NywuMDctLjk2LC41LS45NywxLjEyLS4wMSwuNzcsMCwxLjU1LDAsMi4zMi0uMTQsMC0uMjcsMC0uNDEsMC0uNTUsLjAyLTEuMDEsLjM5LTEuMTYsLjk0aDBabTguMzQsNC45MmMtLjE1LDAtLjMyLS4wMS0uNDYsLjAzLS43NSwuMjItMS41LC40Ni0yLjI1LC42OC0uMzcsLjExLS41MSwuMDMtLjY2LS4zMy0uMTItLjI4LS4yMi0uNTctLjM2LS44NS0uMDUtLjExLS4xNy0uMjMtLjI4LS4yNS0uMDctLjAyLS4xNywuMTQtLjI2LC4yMmwtLjI2LC41NGMtLjA5LC4yOS0uMjIsLjU4LS4yNywuODctLjE0LC43MywwLDEuNDEsLjQ2LDIsLjQ5LC42MiwxLjQ2LC44OSwyLjIsLjYsLjY3LS4yNiwxLjA0LS45NywuOTgtMS44MiwwLS4xMSwuMDctLjI4LC4xNi0uMzUsLjM0LS4yNiwuNy0uNDcsMS4wNC0uNzIsLjMzLS4yNCwuMzEtLjQ3LS4wMy0uNjNaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJxXCIgZD1cIk0xMC4xNCw5Ljc3Yy0uNDQtLjQ3LS45Ni0uNTYtMS41Ni0uMzYtLjU4LC4xOS0xLjE4LC4zNS0xLjc2LC41My0uMiwuMDYtLjMyLC4wMy0uMzktLjE4LS4wNi0uMTgtLjE1LS4zNi0uMjQtLjUzLS4zOC0uNzQtMS4zMi0uODItMS44My0uMTUtLjE2LC4yMi0uMjcsLjQ3LS40MSwuNzEtLjUyLS4wOC0uNzMtLjMxLS43My0uODUsMC0xLjQ5LDAtMi45OSwwLTQuNDgsMC0uNzktLjAzLTEuNTktLjA1LTIuMzgsLjEtLjEsLjItLjIxLC4zMi0uMjgsLjE4LS4xLC4zOC0uMjQsLjU3LS4yNCwxLjM4LS4wMiwyLjc3LDAsNC4xNSwwLS4zLC4zLS4zNiwuNTQtLjE3LC43MywuMjYsLjI2LC40OCwuMSwuNzEtLjA4LC4zNC0uMjcsLjgtLjI0LDEuMTcsLjAzLC4zNywuMjcsLjQ4LC4yNiwuNzctLjA3bDEuMzUsMy45M2MtLjA5LC4wNC0uMTgsLjA5LS4yNywuMTJxLS42NCwuMjEtLjYsLjkxYy0uMDEsLjc2LS4wMywxLjUzLS4wNCwyLjI5LS4yOSwuMjUtLjYxLC40Mi0xLjAyLC4zNlptLTMuMjUtNC43NGwtLjM0LS42NWMuMDctLjAyLC4xOC0uMDMsLjIyLS4wOCwuMDktLjEzLC4yMy0uMjksLjIxLS40MS0uMDItLjEzLS4yLS4zMi0uMzEtLjMzLS41Mi0uMDQtMS4wNS0uMDQtMS41NywwLS4xMiwwLS4zMSwuMjEtLjMxLC4zMiwwLC4xNCwuMTMsLjMsLjI0LC40MywuMDUsLjA2LC4xOCwuMDYsLjI0LC4wNy0uMTIsLjI2LS4yOCwuNDktLjM0LC43NC0uMTIsLjU5LC40NywxLjM1LDEuNCwxLjA2LC4wNywuMDMsLjE0LC4wOCwuMjEsLjA4LC43MywwLDEuNDYsMCwyLjE5LDAsLjA3LDAsLjE0LS4wNSwuMjEtLjA4LC44OSwuMTksMS40MS0uMjMsMS40MS0xLjE0LDAtLjMsMC0uNTksMC0uODksMC0uNjEtLjQxLTEuMDQtLjk4LTEuMDUtLjU5LS4wMS0xLjAxLC40MS0xLjAzLDEuMDMtLjAxLC4yOS0uMDEsLjU5LS4wMiwuODloLTEuNDNabS4wMSwyLjMyYy4yMy0uMSwuNC0uMjIsLjItLjQ2LS4yMi0uMjYtLjUtLjM1LS44My0uMjctLjMyLC4wNy0uNTMsLjI4LS41OCwuNi0uMDIsLjA5LC4xMSwuMjMsLjIsLjMyLC4wOCwuMSwuMjQsLjE1LC4yOSwuMjUsLjMyLC42NCwuOTcsMS4wMiwxLjY0LC45NSwuMzYtLjA0LC41NS0uMiwuNTEtLjQ2LS4wNC0uMzItLjI2LS4zOC0uNTUtLjM2LS40MiwuMDMtLjY5LS4xNS0uODctLjU3WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiclwiIGQ9XCJNMTIuMDcsNi4wOWMtLjQ1LTEuMzEtLjktMi42Mi0xLjM1LTMuOTMsLjA0LS4yOC0uMS0uNDctLjMyLS42Mi0uNzMtLjQ5LTEuNDUtLjQzLTIuMTYsLjAxLTEuMzgsMC0yLjc3LS4wMS00LjE1LDAtLjE5LDAtLjM5LC4xNC0uNTcsLjI0LS4xMiwuMDctLjIxLC4xOS0uMzIsLjI4LC4wMi0uNDIsMC0uODUsLjI2LTEuMjFoMGwuMDctLjAyYy4xMiwwLC4yNS0uMDMsLjM3LS4wMywyLDAsNCwwLDYuMDEsMCwuNjEsMCwxLjA0LC4yNiwxLjI0LC44MiwuNTEsMS40NSwuOTgsMi45LDEuNDcsNC4zNmwtLjU1LC4xWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiY1wiIGQ9XCJNMy40NiwuODZjLS4yNywuMzctLjI0LC43OS0uMjYsMS4yMSwuMDIsLjc5LC4wNCwxLjU5LC4wNSwyLjM4LDAsMS40OSwwLDIuOTksMCw0LjQ4LDAsLjUzLC4yMSwuNzcsLjczLC44NS0uMDUsLjE3LS4xMywuMzQtLjE2LC41Mi0uMDUsLjMzLS4yNSwuMzMtLjUsLjI3LS40OC0uMTMtLjgyLS41OC0uODMtMS4xMiwwLS42NiwwLTEuMzIsMC0xLjk4LDAtLjEyLS4wNC0uMjQtLjA2LS4zNiwuMDItLjEyLC4wNy0uMjQsLjA3LS4zNiwwLS42OSwwLTEuMzgsMC0yLjA2di0uMzljMC0uNzctLjAxLTEuNTUsMC0yLjMyLDAtLjYyLC4zOS0xLjA1LC45Ny0xLjEyWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiaVwiIGQ9XCJNNC43MywxMC4yMWMuMDktLjE4LC4xNy0uMzYsLjI2LS41NCwuMDksLjExLC4yLC4yLC4yNSwuMzIsLjExLC4yNywuMTgsLjU2LC4yOCwuODQsLjIzLC41OSwuNDksLjcsMS4wNywuNDcsLjU0LS4yMiwxLjA3LS40NSwxLjYxLS42NiwuMzUtLjEzLC43MS0uMjIsMS4wNi0uMzMtLjEyLC4xMS0uMjEsLjI1LS4zNSwuMzQtLjM1LC4yMi0uNzEsLjQxLTEuMDYsLjYxLS4yLC4xMS0uMywuMjMtLjI2LC41MSwuMDcsLjUsMCwxLjAzLS40NSwxLjM2LS40NCwuMzItLjkyLC4yNC0xLjM4LS4wMS0uNTctLjMyLS45Mi0uODItMS4wMS0xLjQ2LS4wNy0uNDgtLjAyLS45Ny0uMDMtMS40NVpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cIm9cIiBkPVwiTTQuNzMsMTAuMjFjMCwuNDgtLjAzLC45NywuMDMsMS40NSwuMDksLjY0LC40MywxLjE0LDEuMDEsMS40NiwuNDYsLjI2LC45NCwuMzMsMS4zOCwuMDEsLjQ1LS4zMywuNTItLjg1LC40NS0xLjM2LS4wNC0uMjgsLjA2LS40LC4yNi0uNTEsLjM1LS4yLC43Mi0uMzksMS4wNi0uNjEsLjEzLS4wOCwuMjMtLjIyLC4zNS0uMzR2LS4xNGMuMzMsLjE2LC4zNSwuMzgsLjAyLC42My0uMzQsLjI1LS43LC40Ny0xLjA0LC43Mi0uMDksLjA3LS4xNywuMjMtLjE2LC4zNSwuMDYsLjg1LS4zMSwxLjU2LS45OCwxLjgyLS43NCwuMjktMS43MSwuMDItMi4yLS42LS40Ny0uNTktLjYtMS4yNy0uNDYtMiwuMDYtLjMsLjE4LS41OCwuMjctLjg3WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwibVwiIGQ9XCJNMi40OSw0LjY5YzAsLjY5LDAsMS4zOCwwLDIuMDYsMCwuMTItLjA0LC4yNC0uMDcsLjM2LTEuMDYsLjA5LTEuNzYtLjY2LTEuNTYtMS42N2wuMDUtLjJoMGMuNDctLjMzLC45OS0uNTIsMS41Ny0uNTVabS0uNDgsMS4wNGMwLS4wNywuMDEtLjE0LDAtLjItLjAzLS4xMi0uMDgtLjIzLS4xMi0uMzQtLjEyLC4wNi0uMjcsLjEtLjM2LC4yLS4wOCwuMDgtLjExLC4yMi0uMTIsLjM0LS4wMiwuMjQsLjIyLC41NiwuNDEsLjU1LC4zNi0uMDIsLjEzLS4zMSwuMi0uNDcsMC0uMDIsMC0uMDQsMC0uMDdaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJlXCIgZD1cIk05LjI2LDEwLjE3di4xNGMtLjM1LC4xMS0uNzEsLjItMS4wNSwuMzMtLjU0LC4yLTEuMDcsLjQ0LTEuNjEsLjY2LS41OSwuMjQtLjg1LC4xMy0xLjA3LS40Ny0uMS0uMjgtLjE3LS41Ny0uMjgtLjg0LS4wNS0uMTItLjE3LS4yMi0uMjUtLjMyLC4wOS0uMDgsLjE5LS4yMywuMjYtLjIyLC4xMSwuMDIsLjIzLC4xNCwuMjgsLjI1LC4xNCwuMjcsLjI0LC41NywuMzYsLjg1LC4xNSwuMzYsLjMsLjQ0LC42NiwuMzMsLjc1LS4yMywxLjUtLjQ2LDIuMjUtLjY4LC4xNC0uMDQsLjMxLS4wMiwuNDYtLjAzWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiZFwiIGQ9XCJNMTIuMDcsNi4wOWwuNTUtLjFjLjI1LC41NywuMiwuNjctLjM4LC44My0uMzUsLjEtLjY5LC4yLTEuMDQsLjI5cS0uMDQtLjcsLjYtLjkxYy4wOS0uMDMsLjE4LS4wOCwuMjctLjEyWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiYlwiIGQ9XCJNMi40OSw0LjY5Yy0uNTgsLjAzLTEuMSwuMjItMS41NywuNTUsLjE1LS41NCwuNjEtLjkyLDEuMTYtLjk0LC4xNCwwLC4yNywwLC40MSwwLDAsLjEzLDAsLjI2LDAsLjM5WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiaFwiIGQ9XCJNMTAuMTQsOS43N2MuNCwuMDYsLjczLS4xMSwxLjAyLS4zNiwuMDQsLjU1LS4yNCwuOTYtLjc3LDEuMTJsLS4yNS0uNzZaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJiXCIgZD1cIk0uOTIsNS4yNGwtLjA1LC4yLC4wNS0uMlpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImNcIiBkPVwiTTMuNTMsLjg1bC0uMDcsLjAyLC4wNy0uMDJaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJmXCIgZD1cIk04LjMyLDUuMDRjMC0uMywwLS41OSwuMDItLjg5LC4wMi0uNjIsLjQ0LTEuMDUsMS4wMy0xLjAzLC41NywuMDEsLjk3LC40NCwuOTgsMS4wNSwwLC4zLDAsLjU5LDAsLjg5LDAsLjkxLS41MywxLjMzLTEuNDEsMS4xNC0uNDMtLjI2LS42MS0uNjYtLjYxLTEuMTVaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJnXCIgZD1cIk02LjMyLDYuMTljLS45MiwuMjktMS41Mi0uNDctMS40LTEuMDYsLjA1LS4yNSwuMjItLjQ4LC4zNC0uNzQtLjA2LS4wMi0uMTktLjAxLS4yNC0uMDctLjExLS4xMi0uMjUtLjI5LS4yNC0uNDMsMC0uMTIsLjItLjMyLC4zMS0uMzIsLjUyLS4wNCwxLjA1LS4wNCwxLjU3LDAsLjEyLDAsLjMsLjIsLjMxLC4zMywuMDIsLjEzLS4xMiwuMjktLjIxLC40MS0uMDQsLjA1LS4xNCwuMDUtLjIyLC4wOGwuMzQsLjY1Yy4wOCwuNTItLjE1LC44OC0uNTcsMS4xNVpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImtcIiBkPVwiTTYuOSw3LjM2Yy4xOCwuNDIsLjQ0LC42LC44NywuNTcsLjI5LS4wMiwuNTEsLjA0LC41NSwuMzYsLjA0LC4yNy0uMTUsLjQzLS41MSwuNDYtLjY3LC4wNy0xLjMyLS4zMi0xLjY0LS45NS0uMDUtLjExLS4yLS4xNi0uMjktLjI1LS4wOC0uMDktLjIxLS4yMy0uMi0uMzIsLjA1LS4zMiwuMjctLjUyLC41OC0uNiwuMzMtLjA4LC42MSwwLC44MywuMjcsLjIsLjI0LC4wNCwuMzYtLjIsLjQ2WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwibFwiIGQ9XCJNOC4yMywxLjU1Yy43Mi0uNDUsMS40NC0uNTEsMi4xNi0uMDEsLjIyLC4xNSwuMzYsLjM0LC4zMiwuNjItLjMsLjMzLS40MSwuMzQtLjc3LC4wNy0uMzctLjI3LS44Mi0uMy0xLjE3LS4wMy0uMjMsLjE4LS40NSwuMzQtLjcxLC4wOC0uMTktLjE5LS4xMy0uNDMsLjE3LS43M1pcIiAvPjxwYXRoIGNsYXNzTmFtZT1cInBcIiBkPVwiTTYuMzIsNi4xOWMuNDItLjI3LC42NS0uNjMsLjU3LTEuMTVoMS40M2MwLC41LC4xOCwuODksLjYxLDEuMTUtLjA3LC4wMy0uMTQsLjA4LS4yMSwuMDgtLjczLDAtMS40NiwwLTIuMTksMC0uMDcsMC0uMTQtLjA1LS4yMS0uMDhaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJqXCIgZD1cIk0yLjAxLDUuNzNzMCwuMDUsMCwuMDdjLS4wNiwuMTYsLjE2LC40NS0uMiwuNDctLjE5LC4wMS0uNDMtLjMtLjQxLS41NSwwLS4xMiwuMDQtLjI2LC4xMi0uMzQsLjA5LS4wOSwuMjQtLjEzLC4zNi0uMiwuMDQsLjExLC4wOSwuMjMsLjEyLC4zNCwuMDIsLjA2LDAsLjE0LDAsLjJaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z0xvZ287XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnTWVudShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICBjbGFzc05hbWU9XCJtZW51X3N2Z19fZmVhdGhlciBtZW51X3N2Z19fZmVhdGhlci1tZW51XCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTMgMTJoMThNMyA2aDE4TTMgMThoMThcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdNZW51XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnU2VhcmNoKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE4IDE4XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTggMTYuNWwtNS4xNC01LjE4aC0uMzVhNyA3IDAgMTAtMS4xOSAxLjE5di4zNUwxNi41IDE4bDEuNS0xLjV6TTEyIDdBNSA1IDAgMTEyIDdhNSA1IDAgMDExMCAwelwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z1NlYXJjaFxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z1NwaW5uZXIocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXHJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjkxNjY2NjY2NjY2NjY2NjZzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMwIDUwIDUwKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuODMzMzMzMzMzMzMzMzMzNHNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17NDd9XHJcbiAgICAgICAgeT17MjR9XHJcbiAgICAgICAgcng9ezN9XHJcbiAgICAgICAgcnk9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezZ9XHJcbiAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoNjAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC43NXNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17NDd9XHJcbiAgICAgICAgeT17MjR9XHJcbiAgICAgICAgcng9ezN9XHJcbiAgICAgICAgcnk9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezZ9XHJcbiAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoOTAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC42NjY2NjY2NjY2NjY2NjY2c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxMjAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC41ODMzMzMzMzMzMzMzMzM0c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxNTAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC41c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgxODAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC40MTY2NjY2NjY2NjY2NjY3c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyMTAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC4zMzMzMzMzMzMzMzMzMzMzc1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyNDAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC4yNXNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17NDd9XHJcbiAgICAgICAgeT17MjR9XHJcbiAgICAgICAgcng9ezN9XHJcbiAgICAgICAgcnk9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezZ9XHJcbiAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMjcwIDUwIDUwKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuMTY2NjY2NjY2NjY2NjY2NjZzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMwMCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjA4MzMzMzMzMzMzMzMzMzMzc1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgzMzAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCIwc1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnU3Bpbm5lclxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFRhZ3MocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDIyIDIyXCIgZmlsbD1cIiNmY2QzOTRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMi4xMjI2NCAxMi44MTZDMi40MTAxOCAxMy44MTg2IDMuMTgyOTUgMTQuNTkxNCA0LjcyODQ4IDE2LjEzNjlMNi41NTgxMiAxNy45NjY1QzkuMjQ3MTEgMjAuNjU1NSAxMC41OTE2IDIyIDEyLjI2MjMgMjJDMTMuOTMzIDIyIDE1LjI3NzUgMjAuNjU1NSAxNy45NjY1IDE3Ljk2NjVDMjAuNjU1NSAxNS4yNzc1IDIyIDEzLjkzMyAyMiAxMi4yNjIzQzIyIDEwLjU5MTYgMjAuNjU1NSA5LjI0NzExIDE3Ljk2NjUgNi41NTgxMkwxNi4xMzY5IDQuNzI4NDhDMTQuNTkxNCAzLjE4Mjk1IDEzLjgxODYgMi40MTAxOCAxMi44MTYgMi4xMjI2NEMxMS44MTM0IDEuODM1MDkgMTAuNzQ4NSAyLjA4MDgzIDguNjE4NzUgMi41NzIzMUw3LjM5MDU3IDIuODU1NzRDNS41OTg4IDMuMjY5MjIgNC43MDI5MiAzLjQ3NTk3IDQuMDg5NDQgNC4wODk0NEMzLjQ3NTk3IDQuNzAyOTIgMy4yNjkyMiA1LjU5ODgxIDIuODU1NzQgNy4zOTA1N0wyLjU3MjMxIDguNjE4NzVDMi4wODA4MyAxMC43NDg1IDEuODM1MDkgMTEuODEzNCAyLjEyMjY0IDEyLjgxNlpNMTAuMTIzNCA3LjI3MDk4QzEwLjkxMSA4LjA1ODU2IDEwLjkxMSA5LjMzNTQ5IDEwLjEyMzQgMTAuMTIzMUM5LjMzNTgxIDEwLjkxMDcgOC4wNTg4OCAxMC45MTA3IDcuMjcxMjkgMTAuMTIzMUM2LjQ4MzcxIDkuMzM1NDkgNi40ODM3MSA4LjA1ODU2IDcuMjcxMjkgNy4yNzA5OEM4LjA1ODg4IDYuNDgzMzkgOS4zMzU4MSA2LjQ4MzM5IDEwLjEyMzQgNy4yNzA5OFpNMTkuMDUxMSAxMi4wNTExTDEyLjA3MjEgMTkuMDMwM0MxMS43NzkyIDE5LjMyMzIgMTEuMzA0MyAxOS4zMjMyIDExLjAxMTQgMTkuMDMwM0MxMC43MTg1IDE4LjczNzUgMTAuNzE4NSAxOC4yNjI2IDExLjAxMTQgMTcuOTY5N0wxNy45OTA0IDEwLjk5MDRDMTguMjgzMyAxMC42OTc1IDE4Ljc1ODIgMTAuNjk3NSAxOS4wNTExIDEwLjk5MDRDMTkuMzQ0IDExLjI4MzMgMTkuMzQ0IDExLjc1ODIgMTkuMDUxMSAxMi4wNTExWlwiIGZpbGw9XCIjZmNkMzk0XCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVXNlcnMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDIyIDIyXCIgZmlsbD1cIiNmY2QzOTRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNSA5LjVDNSA3LjAxNDcyIDcuMDE0NzIgNSA5LjUgNUMxMS45ODUzIDUgMTQgNy4wMTQ3MiAxNCA5LjVDMTQgMTEuOTg1MyAxMS45ODUzIDE0IDkuNSAxNEM3LjAxNDcyIDE0IDUgMTEuOTg1MyA1IDkuNVpcIiBmaWxsPVwiI2ZjZDM5NFwiPjwvcGF0aD4gPHBhdGggZD1cIk0xNC4zNjc1IDEyLjA2MzJDMTQuMzIyIDEyLjE0OTQgMTQuMzQxMyAxMi4yNTY5IDE0LjQxOTYgMTIuMzE0OUMxNS4wMDEyIDEyLjc0NTQgMTUuNzIwOSAxMyAxNi41IDEzQzE4LjQzMyAxMyAyMCAxMS40MzMgMjAgOS41QzIwIDcuNTY3IDE4LjQzMyA2IDE2LjUgNkMxNS43MjA5IDYgMTUuMDAxMiA2LjI1NDYgMTQuNDE5NiA2LjY4NTEzQzE0LjM0MTMgNi43NDMxMyAxNC4zMjIgNi44NTA1OCAxNC4zNjc1IDYuOTM2NzlDMTQuNzcxNCA3LjcwMjE5IDE1IDguNTc0NCAxNSA5LjVDMTUgMTAuNDI1NiAxNC43NzE0IDExLjI5NzggMTQuMzY3NSAxMi4wNjMyWlwiIGZpbGw9XCIjZmNkMzk0XCI+PC9wYXRoPiA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNC42NDExNSAxNS42OTkzQzUuODczNTEgMTUuMTY0NCA3LjQ5MDQ1IDE1IDkuNDk5OTUgMTVDMTEuNTExMiAxNSAxMy4xMjkzIDE1LjE2NDcgMTQuMzYyMSAxNS43MDA4QzE1LjcwNSAxNi4yODQ3IDE2LjUyMTIgMTcuMjc5MyAxNi45NDkgMTguNjgzNkMxNy4xNDk1IDE5LjM0MTggMTYuNjU1MSAyMCAxNS45NzM4IDIwSDMuMDI4MDFDMi4zNDU4OSAyMCAxLjg1MDQ1IDE5LjM0MDggMi4wNTE1NyAxOC42ODE0QzIuNDc5OTQgMTcuMjc2OSAzLjI5NzM4IDE2LjI4MjYgNC42NDExNSAxNS42OTkzWlwiIGZpbGw9XCIjZmNkMzk0XCI+PC9wYXRoPiA8cGF0aCBkPVwiTTE0LjgxODUgMTQuMDM2NEMxNC40MDQ1IDE0LjA2MjEgMTQuMzgwMiAxNC42MTgzIDE0Ljc2MDYgMTQuNzgzN1YxNC43ODM3QzE1LjgwMyAxNS4yMzcgMTYuNTg3OSAxNS45MDQzIDE3LjE1MDggMTYuNzU2QzE3LjYxMjcgMTcuNDU0OSAxOC4zMyAxOCAxOS4xNjc3IDE4SDIwLjk0ODNDMjEuNjU1NSAxOCAyMi4xNzE1IDE3LjI5NzMgMjEuOTIyNyAxNi42MTA4QzIxLjkwODQgMTYuNTcxMyAyMS44OTM1IDE2LjUzMjEgMjEuODc4MSAxNi40OTMyQzIxLjUzNTcgMTUuNjI4NiAyMC45NDg4IDE0Ljk5MjEgMjAuMDc5OCAxNC41ODY0QzE5LjI2MzkgMTQuMjA1NSAxOC4yNDI1IDE0LjA0ODMgMTcuMDM5MiAxNC4wMDA4TDE3LjAxOTQgMTRIMTYuOTk5N0MxNi4yOTA5IDE0IDE1LjU1MDYgMTMuOTkwOSAxNC44MTg1IDE0LjAzNjRaXCIgZmlsbD1cIiNmY2QzOTRcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdmdXb3JsZChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTggMGE4IDggMCAxMDAgMTZBOCA4IDAgMDA4IDB6TTcgMTQuMzJhNi40IDYuNCAwIDAxLTUuMjMtNy43NUw2IDEwLjY4di44YzAgLjg4LjEyIDEuMzIgMSAxLjMydjEuNTJ6bTUuNzItMmMtLjItLjY2LTEtMS4zMi0xLjcyLTEuMzJoLTFWOWMwLS40NC0uNTYtMS0xLTFINVY2aDFjLjQ0IDAgMS0uNTYgMS0xVjRoMmMuODggMCAxLjQtLjcyIDEuNC0xLjZ2LS4zM2E2LjQgNi40IDAgMDEyLjMyIDEwLjI0di4wMXpcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdXb3JsZFxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFsZXJ0IH0gZnJvbSAnLi9BbGVydCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd0Rvd24gfSBmcm9tICcuL0Fycm93RG93bidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcnJvd1VwIH0gZnJvbSAnLi9BcnJvd1VwJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlIH0gZnJvbSAnLi9DbG9zZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSAnLi9Mb2dvJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbnUgfSBmcm9tICcuL01lbnUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoIH0gZnJvbSAnLi9TZWFyY2gnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lcidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JsZCB9IGZyb20gJy4vV29ybGQnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFncyB9IGZyb20gJy4vVGFnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJzIH0gZnJvbSAnLi9Vc2VycydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcm91cHMgfSBmcm9tICcuL0dyb3VwJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFkbWluIH0gZnJvbSAnLi9BZG1pbidcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZWxldGUgfSBmcm9tICcuL0RlbGV0ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBZGRjb21tZW50IH0gZnJvbSAnLi9BZGRjb21tZW50JyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImltYWdlY29udGFpbmVyXCI6IFwiaW1hZ2VxdWVzdGlvbl9pbWFnZWNvbnRhaW5lcl9fMTk0TWxcIixcblx0XCJiYXNlNjRpbWFnZVwiOiBcImltYWdlcXVlc3Rpb25fYmFzZTY0aW1hZ2VfXzI5Y0l5XCJcbn07XG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1hZ2VxdWVzdGlvbi5tb2R1bGUuY3NzJ1xyXG5jb25zdCBJbWFnZVF1ZXN0aW9uID0gKHsgYmFzZTY0U3RyaW5nLCBhbHRUZXh0ID0gJ0ltYWdlJyB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Jhc2U2NFN0cmluZ30gYWx0VGV4dD17YWx0VGV4dH0gY2xhc3NOYW1lPXtzdHlsZXMuYmFzZTY0aW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlUXVlc3Rpb24iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJleHRyYV9jb250YWluZXJfXzFsVnBnXCIsXG5cdFwidGFnQ29udGFpbmVyXCI6IFwiZXh0cmFfdGFnQ29udGFpbmVyX18xbGVKd1wiLFxuXHRcInBvcHVsYXJUYWdzXCI6IFwiZXh0cmFfcG9wdWxhclRhZ3NfXzNDSTFYXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgVGFnQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3RhZydcclxuXHJcbmltcG9ydCBUYWcgZnJvbSAnLi4vLi4vdGFnJ1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXh0cmEubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEV4dHJhID0gKHsgbWFyZ2luVG9wID0gMjQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdGFnU3RhdGUgfSA9IHVzZUNvbnRleHQoVGFnQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ0NvbnRhaW5lcn1cclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IGAke21hcmdpblRvcH1weGAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMj5Qb3B1bGFyIFRhZ3M8L2gyPlxyXG4gICAgICAgIHshdGFnU3RhdGUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdWxhclRhZ3N9PlxyXG4gICAgICAgICAge3RhZ1N0YXRlPy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnLl9pZH0gY291bnQ9e3RhZy5jb3VudH0+XHJcbiAgICAgICAgICAgICAge3RhZy5faWR9XHJcbiAgICAgICAgICAgIDwvVGFnPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRyYVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJzdHlsZV9mb290ZXJfXzF5TWhQXCIsXG5cdFwibGlua3NcIjogXCJmb290ZXJzdHlsZV9saW5rc19fMlBnWDhcIixcblx0XCJsaW5rXCI6IFwiZm9vdGVyc3R5bGVfbGlua19fSmw2OC1cIixcblx0XCJ0ZXh0XCI6IFwiZm9vdGVyc3R5bGVfdGV4dF9fMnVYcmtcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9mb290ZXJzdHlsZS5tb2R1bGUuY3NzXCI7IC8vIEltcG9ydCBDU1MgTW9kdWxlXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgey8qIExpbmsgU2VjdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Qcml2YWN5PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUZXh0IFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PsKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEFza2VtIGNvbW11bml0eTwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzFzVm5TXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiaGVhZGVyX2NvbnRhaW5lcl9fM1dGaFlcIixcblx0XCJtZW51Q29udGFpbmVyXCI6IFwiaGVhZGVyX21lbnVDb250YWluZXJfX2RvSW1LXCIsXG5cdFwibWVudVwiOiBcImhlYWRlcl9tZW51X18xNUpCa1wiLFxuXHRcImxvZ29cIjogXCJoZWFkZXJfbG9nb19fMTExWUpcIixcblx0XCJhdXRoXCI6IFwiaGVhZGVyX2F1dGhfX2lUM3RqXCIsXG5cdFwidXNlckluZm9cIjogXCJoZWFkZXJfdXNlckluZm9fXzNGSWRaXCIsXG5cdFwiYnRubG9nb3V0XCI6IFwiaGVhZGVyX2J0bmxvZ291dF9fMlBiaDVcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCB1c2VDb21wb25lbnRWaXNpYmxlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUnXHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemUnXHJcbmltcG9ydCBDT05TVCBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXHJcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvbW9kYWwnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXV0aCdcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkRyb3Bkb3duIGZyb20gJy4uLy4uL25hdmlnYXRpb24tZHJvcGRvd24nXHJcbmltcG9ydCB7IE1lbnUsIENsb3NlLCBMb2dvIH0gZnJvbSAnLi4vLi4vaWNvbnMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCB7IGhhbmRsZUNvbXBvbmVudFZpc2libGUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KVxyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBhdXRoU3RhdGUsIGxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcmVmLFxyXG4gICAgdG9nZ2xlUmVmLFxyXG4gICAgaXNDb21wb25lbnRWaXNpYmxlLFxyXG4gICAgc2V0SXNDb21wb25lbnRWaXNpYmxlXHJcbiAgfSA9IHVzZUNvbXBvbmVudFZpc2libGUoZmFsc2UpXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpemUud2lkdGggPiBDT05TVC5NT0JJTEVfU0laRSkge1xyXG4gICAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW3NpemVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NuKHN0eWxlcy5oZWFkZXIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IHJlZj17dG9nZ2xlUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDb21wb25lbnRWaXNpYmxlKChpc09wZW4pID0+ICFpc09wZW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNDb21wb25lbnRWaXNpYmxlID8gPENsb3NlIC8+IDogPE1lbnUgLz59XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuPkFza2VtPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT48L2Rpdj5cclxuXHJcbiAgICAgICAge2lzQXV0aGVudGljYXRlZCgpID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFdlbGNvbWV7JyAnfVxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3VzZXJzL1t1c2VyXVwiXHJcbiAgICAgICAgICAgICAgICBhcz17YC91c2Vycy8ke2F1dGhTdGF0ZS51c2VySW5mby51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPnthdXRoU3RhdGUudXNlckluZm8udXNlcm5hbWV9ITwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bmxvZ291dH0gLy8gxJDhuqNtIGLhuqNvIGNsYXNzTmFtZSDEkcaw4bujYyBj4bqtcCBuaOG6rXRcclxuICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj5Mb2cgT3V0PC9zcGFuPiB7LyogxJDhurd0IG7hu5lpIGR1bmcgdHJvbmcgbeG7mXQgc3BhbiDEkeG7gyDDoXAgZOG7pW5nIGtp4buDdSAqL31cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bmxvZ291dH1cclxuICAgICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdsb2dpbicpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRubG9nb3V0fVxyXG4gICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wb25lbnRWaXNpYmxlKHRydWUsICdzaWdudXAnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiByZWY9e3JlZn0+e2lzQ29tcG9uZW50VmlzaWJsZSAmJiA8TmF2aWdhdGlvbkRyb3Bkb3duIC8+fTwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IENPTlNUIGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZSdcclxuXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluJ1xyXG5pbXBvcnQgRXh0cmEgZnJvbSAnLi9leHRyYSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGV4dHJhID0gdHJ1ZSwgY2hpbGRyZW4sIGZvb3RlciA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0fT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5ib2R5LCAhZXh0cmEgJiYgc3R5bGVzLm1haW4pfT5cclxuICAgICAgICAgIHtzaXplLndpZHRoID4gQ09OU1QuTU9CSUxFX1NJWkUgJiYgPFNpZGViYXIgLz59XHJcbiAgICAgICAgICA8TWFpbj57Y2hpbGRyZW59PC9NYWluPlxyXG4gICAgICAgICAge3NpemUud2lkdGggPiBDT05TVC5UQUJMRVRfU0laRSAmJiBleHRyYSAmJiA8RXh0cmEgLz59XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2Zvb3RlciAmJiAoPEZvb3Rlcj48L0Zvb3Rlcj4pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9keVwiOiBcImxheW91dF9ib2R5X18ySVpSb1wiLFxuXHRcIm1haW5cIjogXCJsYXlvdXRfbWFpbl9fM08yYXJcIixcblx0XCJjb250YWluZXJcIjogXCJsYXlvdXRfY29udGFpbmVyX18yeVQ1b1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYWluLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBNYWluID0gKHsgYm9yZGVyID0gdHJ1ZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGVzLm1haW4sIGJvcmRlciAmJiBzdHlsZXMuYm9yZGVyKX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib3JkZXJcIjogXCJtYWluX2JvcmRlcl9fM2hkclpcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NpZGViYXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5zaWRlYmFyLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpZGViYXJcIjogXCJzaWRlYmFyX3NpZGViYXJfXzFSLV9qXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9uYXZpZ2F0aW9uJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmlnYXRpb24tZHJvcGRvd24ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25Ecm9wZG93biA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaWFsb2d9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uRHJvcGRvd25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGlhbG9nXCI6IFwibmF2aWdhdGlvbi1kcm9wZG93bl9kaWFsb2dfXzNEb1ZuXCIsXG5cdFwic2lkZWJhclwiOiBcIm5hdmlnYXRpb24tZHJvcGRvd25fc2lkZWJhcl9fMVZ2dXFcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9uYXYtaXRlbSdcclxuaW1wb3J0IHsgV29ybGQsIExvZ28sIFRhZ3MsIFVzZXJzLCBHcm91cHMsIEFkbWluIH0gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aCdcclxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBpc0FkbWluIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMV0gPT0gJ3F1ZXN0aW9ucydcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbG9yfT5Bc2tlbTwvc3Bhbj5cclxuICAgICAgPC9OYXZJdGVtPlxyXG5cclxuICAgICAgPE5hdkl0ZW0gaHJlZj1cIi90YWdzXCIgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZSA9PSAnL3RhZ3MnfT5cclxuICAgICAgICA8VGFncyAvPlxyXG4gICAgICAgIDxzcGFuPlRhZ3M8L3NwYW4+XHJcbiAgICAgIDwvTmF2SXRlbT5cclxuXHJcbiAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgaHJlZj1cIi91c2Vyc1wiXHJcbiAgICAgICAgc2VsZWN0ZWQ9e3JvdXRlci5wYXRobmFtZS5zcGxpdCgnLycpWzFdID09ICd1c2Vycyd9XHJcbiAgICAgID5cclxuICAgICAgICA8VXNlcnMgLz5cclxuICAgICAgICA8c3Bhbj5Vc2Vyczwvc3Bhbj5cclxuICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICA8TmF2SXRlbVxyXG4gICAgICAgIGhyZWY9XCIvZ3JvdXBzXCJcclxuICAgICAgICBzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09ICcvZ3JvdXBzJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxHcm91cHMgLz5cclxuICAgICAgICA8c3Bhbj5Hcm91cHM8L3NwYW4+XHJcbiAgICAgIDwvTmF2SXRlbT5cclxuICAgICAge2lzQWRtaW4oKSAmJiAoPE5hdkl0ZW1cclxuICAgICAgICBocmVmPVwiL2FkbWluaXN0cmF0b3JcIlxyXG4gICAgICAgIHNlbGVjdGVkPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9hZG1pbmlzdHJhdG9yJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxBZG1pbiAvPlxyXG4gICAgICAgIDxzcGFuPkFkbWluaXN0YXRvcjwvc3Bhbj5cclxuICAgICAgPC9OYXZJdGVtPil9XHJcblxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXYtaXRlbS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTmF2SXRlbSA9ICh7IGhyZWYsIGNoaWxkcmVuLCBzZWxlY3RlZCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfSBhcz17aHJlZn0+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMubmF2SXRlbSwgc2VsZWN0ZWQgJiYgc3R5bGVzLm5hdkl0ZW1TZWxlY3RlZCl9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdkl0ZW1cIjogXCJuYXYtaXRlbV9uYXZJdGVtX18xektEVlwiLFxuXHRcIm5hdkl0ZW1TZWxlY3RlZFwiOiBcIm5hdi1pdGVtX25hdkl0ZW1TZWxlY3RlZF9fMnlRVzJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdlwiOiBcIm5hdmlnYXRpb25fbmF2X184bnR6LVwiLFxuXHRcImNvbG9yXCI6IFwibmF2aWdhdGlvbl9jb2xvcl9fM091RHhcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS10aXRsZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUGFnZVRpdGxlID0gKHsgdGl0bGUsIGJ1dHRvbiwgYm9yZGVyQm90dG9tID0gdHJ1ZSwgZ3JvdXAgPSBmYWxzZSwgYXNrQnRuID0gZmFsc2UsIGFkbWluQnRuID0gZmFsc2UsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMuY29udGFpbmVyLCBib3JkZXJCb3R0b20gJiYgc3R5bGVzLmJvcmRlckJvdHRvbSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxyXG4gICAgICAgICAge2J1dHRvbiAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBocmVmPXtpc0F1dGhlbnRpY2F0ZWQoKSA/ICcvcXVlc3Rpb25zL2FzaycgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bmRhdGNhdWhvaX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFzayBRdWVzdGlvblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Z3JvdXAgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgaHJlZj17aXNBdXRoZW50aWNhdGVkKCkgPyAnL2dyb3Vwcy9jcmVhdGVHcm91cCcgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bmRhdGNhdWhvaX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyZWF0ZSBncm91cFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7YXNrQnRuICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGhyZWY9e2lzQXV0aGVudGljYXRlZCgpID8gJy9ncm91cHMvYXNrJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuZGF0Y2F1aG9pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQXNrIHF1ZXN0aW9uXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHthZG1pbkJ0biAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBocmVmPXtpc0F1dGhlbnRpY2F0ZWQoKSA/ICcvZ3JvdXBzL2FkbWluJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuZGF0Y2F1aG9pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR3JvdXAgbWFuYWdlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVuICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PntjaGlsZHJlbn08L3A+fVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpdGxlXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBhZ2UtdGl0bGVfY29udGFpbmVyX18yeTBST1wiLFxuXHRcImJvcmRlckJvdHRvbVwiOiBcInBhZ2UtdGl0bGVfYm9yZGVyQm90dG9tX19pall0d1wiLFxuXHRcInRpdGxlXCI6IFwicGFnZS10aXRsZV90aXRsZV9fdFJJU3hcIixcblx0XCJzdW1tYXJ5XCI6IFwicGFnZS10aXRsZV9zdW1tYXJ5X18zd2JlOVwiLFxuXHRcImJ1dHRvbkNvbnRhaW5lclwiOiBcInBhZ2UtdGl0bGVfYnV0dG9uQ29udGFpbmVyX18xM3Y2ZVwiLFxuXHRcImJ0bmRhdGNhdWhvaVwiOiBcInBhZ2UtdGl0bGVfYnRuZGF0Y2F1aG9pX18zWnZqbFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiYWRkLWNvbW1lbnRfY29udGFpbmVyX18xSExCNVwiLFxuXHRcImJ1dHRvblwiOiBcImFkZC1jb21tZW50X2J1dHRvbl9fMUI2ZnVcIixcblx0XCJzdGF0dXNcIjogXCJhZGQtY29tbWVudF9zdGF0dXNfXzE3a2cxXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xyXG5cclxuaW1wb3J0IHsgRmV0Y2hDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvZmV0Y2gnXHJcblxyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vLi4vdGV4dGFyZWEnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2FkZC1jb21tZW50Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBBZGRDb21tZW50ID0gKHtcclxuICBxdWVzdGlvbklkLFxyXG4gIGFuc3dlcklkLFxyXG4gIHNldFNob3dBZGRDb21tZW50LFxyXG4gIHNldFF1ZXN0aW9uXHJcbn0pID0+IHtcclxuICBjb25zdCB7IGF1dGhBeGlvcyB9ID0gdXNlQ29udGV4dChGZXRjaENvbnRleHQpXHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IGNvbW1lbnQ6ICcnIH19XHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN0YXR1cywgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIGAvY29tbWVudC8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWQgPyBhbnN3ZXJJZCA6ICcnfWAsXHJcbiAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgKVxyXG5cclxuICAgICAgICAgIHNldFF1ZXN0aW9uKGRhdGEpXHJcblxyXG4gICAgICAgICAgcmVzZXRGb3JtKHt9KVxyXG4gICAgICAgICAgc2V0U2hvd0FkZENvbW1lbnQoZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHNldFN0YXR1cyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH19XHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xyXG4gICAgICAgIGNvbW1lbnQ6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgLnJlcXVpcmVkKCdDb21tZW50IGlzIG1pc3NpbmcuJylcclxuICAgICAgICAgIC5taW4oNSwgJ0NvbW1lbnQgbXVzdCBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMuJylcclxuICAgICAgICAgIC5tYXgoMTAwMCwgJ0NvbW1lbnQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMDAgY2hhcmFjdGVycy4nKVxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgeyh7XHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIGVycm9ycyxcclxuICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nXHJcbiAgICAgIH0pID0+IChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb21tZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgIGhhc0Vycm9yPXt0b3VjaGVkLmNvbW1lbnQgJiYgZXJyb3JzLmNvbW1lbnR9XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JzLmNvbW1lbnQgJiYgZXJyb3JzLmNvbW1lbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzfT57c3RhdHVzfTwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIENvbW1lbnRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICl9XHJcbiAgICA8L0Zvcm1paz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENvbW1lbnRcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29tbWVudENvbnRhaW5lclwiOiBcImNvbW1lbnQtaXRlbV9jb21tZW50Q29udGFpbmVyX18xY2UteVwiLFxuXHRcIm93bmVyXCI6IFwiY29tbWVudC1pdGVtX293bmVyX18yZXd5alwiLFxuXHRcImRhdGVUZXh0XCI6IFwiY29tbWVudC1pdGVtX2RhdGVUZXh0X19xeS11QlwiLFxuXHRcImRlbGV0ZVwiOiBcImNvbW1lbnQtaXRlbV9kZWxldGVfXzNObkVPXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xyXG5cclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hdXRoJ1xyXG5pbXBvcnQgeyBGZXRjaENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9mZXRjaCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb21tZW50LWl0ZW0ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IENvbW1lbnRJdGVtID0gKHtcclxuICBhdXRob3IsXHJcbiAgY3JlYXRlZCxcclxuICBpc093bmVyLFxyXG4gIGFuc3dlcklkLFxyXG4gIHF1ZXN0aW9uSWQsXHJcbiAgY29tbWVudElkLFxyXG4gIHNldFF1ZXN0aW9uLFxyXG4gIGNoaWxkcmVuXHJcbn0pID0+IHtcclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgaXNBZG1pbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IGF1dGhBeGlvcyB9ID0gdXNlQ29udGV4dChGZXRjaENvbnRleHQpXHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIGRlbGV0ZSB5b3VyIGNvbW1lbnQ/JylcclxuICAgIGlmIChyZXMpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhdXRoQXhpb3MuZGVsZXRlKFxyXG4gICAgICAgIGFuc3dlcklkXHJcbiAgICAgICAgICA/IGAvY29tbWVudC8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWR9LyR7Y29tbWVudElkfWBcclxuICAgICAgICAgIDogYC9jb21tZW50LyR7cXVlc3Rpb25JZH0vJHtjb21tZW50SWR9YFxyXG4gICAgICApXHJcblxyXG4gICAgICBzZXRRdWVzdGlvbihkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudENvbnRhaW5lcn0+XHJcbiAgICAgIDxwPntjaGlsZHJlbn0g4oCTPC9wPiAmbmJzcDtcclxuICAgICAgPExpbmsgaHJlZj1cIi91c2Vycy9bdXNlcl1cIiBhcz17YC91c2Vycy8ke2F1dGhvcn1gfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2lzT3duZXIgPyBzdHlsZXMub3duZXIgOiB1bmRlZmluZWR9PnthdXRob3J9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICZuYnNwO1xyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlVGV4dH0+XHJcbiAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShjcmVhdGVkKSwgXCJNTU0gZGQnYCd5eSAnYXQnIGsnOidtbVwiKX17JyAnfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIHsoYXV0aFN0YXRlLnVzZXJJbmZvPy51c2VybmFtZSA9PT0gYXV0aG9yIHx8IGlzQWRtaW4oKSkgJiYgKFxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZX0gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ29tbWVudCgpfT5cclxuICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEl0ZW1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29tbWVudENlbGxcIjogXCJjb21tZW50LWxpc3RfY29tbWVudENlbGxfXzM2OUY2XCIsXG5cdFwiYW5pbWF0aW9uXCI6IFwiY29tbWVudC1saXN0X2FuaW1hdGlvbl9fckhzSXdcIixcblx0XCJiYWNrZ3JvdW5kLWZhZGVcIjogXCJjb21tZW50LWxpc3RfYmFja2dyb3VuZC1mYWRlX19mWkh1NVwiLFxuXHRcImFkZENvbW1lbnRcIjogXCJjb21tZW50LWxpc3RfYWRkQ29tbWVudF9fMnJIUjhcIixcblx0XCJzaG93TW9yZVwiOiBcImNvbW1lbnQtbGlzdF9zaG93TW9yZV9fMVFONndcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvbW9kYWwnXHJcblxyXG5pbXBvcnQgQWRkQ29tbWVudCBmcm9tICcuLi9hZGQtY29tbWVudCdcclxuaW1wb3J0IHsgQWRkY29tbWVudCB9IGZyb20gJy4uLy4uL2ljb25zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29tbWVudC1saXN0Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBDb21tZW50TGlzdCA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgcXVlc3Rpb25JZCxcclxuICBhbnN3ZXJJZCxcclxuICBzZXRRdWVzdGlvbixcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcblxyXG4gIGNvbnN0IFtzaG93QWRkQ29tbWVudCwgc2V0U2hvd0FkZENvbW1lbnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Zpc2libGVDb21tZW50cywgc2V0VmlzaWJsZUNvbW1lbnRzXSA9IHVzZVN0YXRlKGNoaWxkcmVuLnNsaWNlKDAsIDMpKVxyXG4gIGNvbnN0IFtkaWZmZXJlbmNlLCBzZXREaWZmcmVuY2VdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZpc2libGVDb21tZW50cyhjaGlsZHJlbi5zbGljZSgwLCAzKSlcclxuICB9LCBbY2hpbGRyZW5dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGlmZnJlbmNlKGNoaWxkcmVuLmxlbmd0aCAtIHZpc2libGVDb21tZW50cy5sZW5ndGgpXHJcbiAgfSwgW3Zpc2libGVDb21tZW50c10pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50Q2VsbH0+XHJcbiAgICAgIHt2aXNpYmxlQ29tbWVudHN9XHJcblxyXG4gICAgICB7ZGlmZmVyZW5jZSA+IDAgPyAoXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNob3dNb3JlfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZUNvbW1lbnRzKGNoaWxkcmVuKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBzaG93IDxiPntkaWZmZXJlbmNlfTwvYj4gbW9yZSBjb21tZW50c1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgKSA6IChcclxuICAgICAgICAhc2hvd0FkZENvbW1lbnQgJiYgKFxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQ29tbWVudH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNBdXRoZW50aWNhdGVkKCkgPyBzZXRTaG93QWRkQ29tbWVudCh0cnVlKSA6IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8IEFkZGNvbW1lbnQgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7c2hvd0FkZENvbW1lbnQgJiYgKFxyXG4gICAgICAgIDxBZGRDb21tZW50XHJcbiAgICAgICAgICBxdWVzdGlvbklkPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgYW5zd2VySWQ9e2Fuc3dlcklkfVxyXG4gICAgICAgICAgc2V0U2hvd0FkZENvbW1lbnQ9e3NldFNob3dBZGRDb21tZW50fVxyXG4gICAgICAgICAgc2V0UXVlc3Rpb249e3NldFF1ZXN0aW9ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QnXHJcbmltcG9ydCB7IERlbGV0ZSB9IGZyb20gJy4uLy4uL2ljb25zJ1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCB7IEZldGNoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2ZldGNoJ1xyXG5cclxuaW1wb3J0IFRhZyBmcm9tICcuLi8uLi90YWcnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC1zdW1tYXJ5Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQb3N0U3VtbWFyeSA9ICh7XHJcbiAgdGFncyxcclxuICBhdXRob3IsXHJcbiAgY3JlYXRlZCxcclxuICBxdWVzdGlvbklkLFxyXG4gIGFuc3dlcklkLFxyXG4gIHNldFF1ZXN0aW9uLFxyXG4gIGNoaWxkcmVuXHJcbn0pID0+IHtcclxuICBjb25zdCB7IGF1dGhTdGF0ZSwgaXNBZG1pbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IGF1dGhBeGlvcyB9ID0gdXNlQ29udGV4dChGZXRjaENvbnRleHQpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgZGVsZXRlIHlvdXIgcG9zdD8nKVxyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5kZWxldGUoXHJcbiAgICAgICAgYW5zd2VySWRcclxuICAgICAgICAgID8gYC9hbnN3ZXIvJHtxdWVzdGlvbklkfS8ke2Fuc3dlcklkfWBcclxuICAgICAgICAgIDogYC9xdWVzdGlvbi8ke3F1ZXN0aW9uSWR9YFxyXG4gICAgICApXHJcblxyXG4gICAgICBpZiAoYW5zd2VySWQpIHtcclxuICAgICAgICBzZXRRdWVzdGlvbihkYXRhKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENlbGx9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnQ29udGFpbmVyfT5cclxuICAgICAgICAgICAge3RhZ3M/Lm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+e3RhZ308L1RhZz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckRldGFpbHN9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1t1c2VyXVwiIGFzPXtgL3VzZXJzLyR7YXV0aG9yLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2F1dGhvci5wcm9maWxlUGhvdG99YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXthdXRob3IudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge3RhZ3MgPyAnYXNrZWQnIDogJ2Fuc3dlcmVkJ317JyAnfVxyXG4gICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoY3JlYXRlZCksIHtcclxuICAgICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vycy9bdXNlcl1cIiBhcz17YC91c2Vycy8ke2F1dGhvci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhPnthdXRob3IudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7KGF1dGhTdGF0ZS51c2VySW5mbz8uaWQgPT09IGF1dGhvci5pZCB8fCBpc0FkbWluKCkpICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb21tZW50KCl9PlxyXG4gICAgICAgICAgICAgIDwgRGVsZXRlIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0U3VtbWFyeVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0Q2VsbFwiOiBcInBvc3Qtc3VtbWFyeV9wb3N0Q2VsbF9fMW9CWjBcIixcblx0XCJ0ZXh0XCI6IFwicG9zdC1zdW1tYXJ5X3RleHRfXzE4QXVfXCIsXG5cdFwiZm9vdGVyXCI6IFwicG9zdC1zdW1tYXJ5X2Zvb3Rlcl9fMUgteTFcIixcblx0XCJyb3dcIjogXCJwb3N0LXN1bW1hcnlfcm93X19aT2dsYlwiLFxuXHRcInRhZ0NvbnRhaW5lclwiOiBcInBvc3Qtc3VtbWFyeV90YWdDb250YWluZXJfXzNILTctXCIsXG5cdFwidXNlckRldGFpbHNcIjogXCJwb3N0LXN1bW1hcnlfdXNlckRldGFpbHNfXzNiNFZ3XCIsXG5cdFwiaW5mb1wiOiBcInBvc3Qtc3VtbWFyeV9pbmZvX18zYzA0WlwiLFxuXHRcImRlbGV0ZVwiOiBcInBvc3Qtc3VtbWFyeV9kZWxldGVfXzJXTHliXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xyXG5pbXBvcnQgeyBGZXRjaENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9mZXRjaCdcclxuaW1wb3J0IE1vZGFsQ29udGV4dCBmcm9tICcuLi8uLi8uLi9zdG9yZS9tb2RhbCdcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJ1xyXG5pbXBvcnQgeyBBcnJvd1VwLCBBcnJvd0Rvd24gfSBmcm9tICcuLi8uLi9pY29ucydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0LXZvdGUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFBvc3RWb3RlID0gKHsgc2NvcmUsIHZvdGVzLCBxdWVzdGlvbklkLCBhbnN3ZXJJZCwgc2V0UXVlc3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aFN0YXRlLCBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgY29uc3QgeyBhdXRoQXhpb3MgfSA9IHVzZUNvbnRleHQoRmV0Y2hDb250ZXh0KVxyXG4gIGNvbnN0IHsgaGFuZGxlQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcblxyXG4gIGNvbnN0IGlzVXBWb3RlZCA9ICgpID0+IHtcclxuICAgIHJldHVybiB2b3Rlcy5maW5kKCh2KSA9PiB2LnVzZXIgPT09IGF1dGhTdGF0ZS51c2VySW5mbz8uaWQpPy52b3RlID09PSAxXHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0Rvd25Wb3RlZCA9ICgpID0+IHtcclxuICAgIHJldHVybiB2b3Rlcy5maW5kKCh2KSA9PiB2LnVzZXIgPT09IGF1dGhTdGF0ZS51c2VySW5mbz8uaWQpPy52b3RlID09PSAtMVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBWb3RlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhdXRoQXhpb3MuZ2V0KFxyXG4gICAgICBgL3ZvdGVzL3Vwdm90ZS8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWQgPyBhbnN3ZXJJZCA6ICcnfWBcclxuICAgIClcclxuICAgIHNldFF1ZXN0aW9uKGRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBkb3duVm90ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXV0aEF4aW9zLmdldChcclxuICAgICAgYC92b3Rlcy9kb3dudm90ZS8ke3F1ZXN0aW9uSWR9LyR7YW5zd2VySWQgPyBhbnN3ZXJJZCA6ICcnfWBcclxuICAgIClcclxuICAgIHNldFF1ZXN0aW9uKGRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCB1blZvdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF1dGhBeGlvcy5nZXQoXHJcbiAgICAgIGAvdm90ZXMvdW52b3RlLyR7cXVlc3Rpb25JZH0vJHthbnN3ZXJJZCA/IGFuc3dlcklkIDogJyd9YFxyXG4gICAgKVxyXG4gICAgc2V0UXVlc3Rpb24oZGF0YSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGVDZWxsfT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZvdGVCdXR0b259XHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZCgpXHJcbiAgICAgICAgICAgID8gaXNVcFZvdGVkKClcclxuICAgICAgICAgICAgICA/IHVuVm90ZSgpXHJcbiAgICAgICAgICAgICAgOiB1cFZvdGUoKVxyXG4gICAgICAgICAgICA6IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFycm93VXAgY2xhc3NOYW1lPXtpc1VwVm90ZWQoKSA/IHN0eWxlcy52b3RlZCA6ICcnfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY29yZX0+e3Njb3JlfTwvZGl2PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudm90ZUJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkKClcclxuICAgICAgICAgICAgPyBpc0Rvd25Wb3RlZCgpXHJcbiAgICAgICAgICAgICAgPyB1blZvdGUoKVxyXG4gICAgICAgICAgICAgIDogZG93blZvdGUoKVxyXG4gICAgICAgICAgICA6IGhhbmRsZUNvbXBvbmVudFZpc2libGUodHJ1ZSwgJ3NpZ251cCcpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFycm93RG93biBjbGFzc05hbWU9e2lzRG93blZvdGVkKCkgPyBzdHlsZXMudm90ZWQgOiAnJ30gLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RWb3RlXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZvdGVDZWxsXCI6IFwicG9zdC12b3RlX3ZvdGVDZWxsX18xR0NIcFwiLFxuXHRcInZvdGVCdXR0b25cIjogXCJwb3N0LXZvdGVfdm90ZUJ1dHRvbl9fMVBIc1ZcIixcblx0XCJ2b3RlZFwiOiBcInBvc3Qtdm90ZV92b3RlZF9fMm1FOXpcIixcblx0XCJzY29yZVwiOiBcInBvc3Qtdm90ZV9zY29yZV9fMnRlM21cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC13cmFwcGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9ICh7IGJvcmRlckJvdHRvbSA9IHRydWUsIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlcy5sYXlvdXQsIGJvcmRlckJvdHRvbSAmJiBzdHlsZXMuYm9yZGVyQm90dG9tKX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFdyYXBwZXJcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0XCI6IFwicG9zdC13cmFwcGVyX2xheW91dF9fYkVSOWxcIixcblx0XCJib3JkZXJCb3R0b21cIjogXCJwb3N0LXdyYXBwZXJfYm9yZGVyQm90dG9tX18zZWkyWlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhZy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgVGFnID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY291bnQsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gY291bnQgPyAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnLycsIHF1ZXJ5OiB7IHRhZzogY2hpbGRyZW4gfSB9fT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2NuKHN0eWxlcy50YWdsYXlvdXQsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tdWx0aXBsaWVyfT7Dlzo8L3NwYW4+IFxyXG4gICAgICAmbmJzcDsgKi99XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT57Y291bnR9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvJywgcXVlcnk6IHsgdGFnOiBjaGlsZHJlbiB9IH19PlxyXG4gICAgICA8YSBjbGFzc05hbWU9e2NuKHN0eWxlcy50YWcsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFnXCI6IFwidGFnX3RhZ19fMkNNWjlcIixcblx0XCJtdWx0aXBsaWVyXCI6IFwidGFnX211bHRpcGxpZXJfX0MtZzRHXCIsXG5cdFwiY291bnRcIjogXCJ0YWdfY291bnRfXzFzc1dpXCIsXG5cdFwidGFnbGF5b3V0XCI6IFwidGFnX3RhZ2xheW91dF9fYm1qZXdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGV4dGFyZWEubW9kdWxlLmNzcydcclxuLy8gY29uc3QgUmljaFRleHRFZGl0b3IgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vdGV4dC1hcmVhLXVwZGF0ZScpLCB7XHJcbi8vICAgc3NyOiBmYWxzZSwgLy8gVOG6r3QgU1NSXHJcbi8vIH0pXHJcbmNvbnN0IFRleHRBcmVhID0gKHtcclxuICBsYWJlbCxcclxuICBpbnB1dEluZm8sXHJcbiAgaGFzRXJyb3IsXHJcbiAgZXJyb3JNZXNzYWdlLFxyXG4gIGNsYXNzTmFtZSxcclxuICAvLyB2YWx1ZSxcclxuICAvLyBzZXRWYWx1ZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2VkaXRvckNvbnRlbnQsIHNldEVkaXRvckNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtsYWJlbCAmJiA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntsYWJlbH08L2xhYmVsPn1cclxuICAgICAge2lucHV0SW5mbyAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEluZm99PntpbnB1dEluZm99PC9wPn1cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMudGV4dGFyZWEsIGNsYXNzTmFtZSwgaGFzRXJyb3IgJiYgc3R5bGVzLmhhc0Vycm9yKX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiA8UmljaFRleHRFZGl0b3IgdmFsdWU9e3ZhbHVlfSBzZXRWYWx1ZT17c2V0VmFsdWV9PjwvUmljaFRleHRFZGl0b3I+ICovfVxyXG4gICAgICB7aGFzRXJyb3IgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3JNZXNzYWdlfTwvcD59XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJ0ZXh0YXJlYV9jb250YWluZXJfX3UwOW02XCIsXG5cdFwidGV4dGFyZWFcIjogXCJ0ZXh0YXJlYV90ZXh0YXJlYV9fMV9RNzNcIixcblx0XCJoYXNFcnJvclwiOiBcInRleHRhcmVhX2hhc0Vycm9yX18xWTdJLVwiLFxuXHRcImVycm9yTWVzc2FnZVwiOiBcInRleHRhcmVhX2Vycm9yTWVzc2FnZV9fMUtJODlcIixcblx0XCJsYWJlbFwiOiBcInRleHRhcmVhX2xhYmVsX19tU0RhTFwiLFxuXHRcImlucHV0SW5mb1wiOiBcInRleHRhcmVhX2lucHV0SW5mb19fMmR4YkRcIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBUQUJMRVRfU0laRTogOTgwLFxyXG4gIE1PQklMRV9TSVpFOiA2NDBcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIHVzZUNvbXBvbmVudFZpc2libGUoaW5pdGlhbElzVmlzaWJsZSkge1xyXG4gIGNvbnN0IFtpc0NvbXBvbmVudFZpc2libGUsIHNldElzQ29tcG9uZW50VmlzaWJsZV0gPSB1c2VTdGF0ZShpbml0aWFsSXNWaXNpYmxlKVxyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxyXG4gIGNvbnN0IHRvZ2dsZVJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVIaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgcmVmLmN1cnJlbnQgJiZcclxuICAgICAgIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgIXRvZ2dsZVJlZj8uY3VycmVudD8uY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgKSB7XHJcbiAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSwgdHJ1ZSlcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVIaWRlLCB0cnVlKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUhpZGUsIHRydWUpXHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlLCB0cnVlKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7IHJlZiwgdG9nZ2xlUmVmLCBpc0NvbXBvbmVudFZpc2libGUsIHNldElzQ29tcG9uZW50VmlzaWJsZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUNvbXBvbmVudFZpc2libGVcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnXHJcblxyXG4gIGZ1bmN0aW9uIGdldFNpemUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcclxuICAgICAgaGVpZ2h0OiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoZ2V0U2l6ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNDbGllbnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICBzZXRXaW5kb3dTaXplKGdldFNpemUoKSlcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIHdpbmRvd1NpemVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICcuLi8uLi91dGlsL2ZldGNoZXInXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFnZS10aXRsZSdcclxuaW1wb3J0IERldGFpbFBhZ2VDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZXRhaWwtcGFnZS1jb250YWluZXInXHJcbmltcG9ydCBQb3N0V3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvcG9zdC13cmFwcGVyJ1xyXG5pbXBvcnQgUG9zdFZvdGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L3Bvc3Qtdm90ZSdcclxuaW1wb3J0IFBvc3RTdW1tYXJ5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC9wb3N0LXN1bW1hcnknXHJcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QvY29tbWVudC1saXN0J1xyXG5pbXBvcnQgQ29tbWVudEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wb3N0L2NvbW1lbnQtbGlzdC9jb21tZW50LWl0ZW0nXHJcbmltcG9ydCBBbnN3ZXJDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hbnN3ZXItY29udGFpbmVyJ1xyXG5pbXBvcnQgQWRkQW5zd2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWRkLWFuc3dlcidcclxuLy9cclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UtcXVlc3Rpb24nXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ljb25zJ1xyXG5cclxuY29uc3QgUXVlc3Rpb25EZXRhaWwgPSAoeyBxdWVzdGlvbklkLCB0aXRsZSB9KSA9PiB7XHJcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFthbnN3ZXJTb3J0VHlwZSwgc2V0QW5zd2Vyc1NvcnRUeXBlXSA9IHVzZVN0YXRlKCdWb3RlcycpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFF1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHB1YmxpY0ZldGNoLmdldChgL3F1ZXN0aW9uLyR7cXVlc3Rpb25JZH1gKVxyXG4gICAgICBzZXRRdWVzdGlvbihkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoUXVlc3Rpb24oKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVTb3J0aW5nID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoIChhbnN3ZXJTb3J0VHlwZSkge1xyXG4gICAgICBjYXNlICdWb3Rlcyc6XHJcbiAgICAgICAgcmV0dXJuIChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZVxyXG4gICAgICBjYXNlICdOZXdlc3QnOlxyXG4gICAgICAgIHJldHVybiAoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkKSAtIG5ldyBEYXRlKGEuY3JlYXRlZClcclxuICAgICAgY2FzZSAnT2xkZXN0JzpcclxuICAgICAgICByZXR1cm4gKGEsIGIpID0+IG5ldyBEYXRlKGEuY3JlYXRlZCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWQpXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCdcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBleHRyYT17ZmFsc2V9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17aXNDbGllbnQgJiYgd2luZG93LmxvY2F0aW9uLmhyZWZ9PjwvbGluaz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17dGl0bGV9IGJ1dHRvbiAvPlxyXG5cclxuICAgICAgPERldGFpbFBhZ2VDb250YWluZXI+XHJcbiAgICAgICAgeyFxdWVzdGlvbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtxdWVzdGlvbiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8UG9zdFdyYXBwZXIgYm9yZGVyQm90dG9tPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgPFBvc3RWb3RlXHJcbiAgICAgICAgICAgICAgICBzY29yZT17cXVlc3Rpb24uc2NvcmV9XHJcbiAgICAgICAgICAgICAgICB2b3Rlcz17cXVlc3Rpb24udm90ZXN9XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbklkPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgc2V0UXVlc3Rpb249e3NldFF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBvc3RTdW1tYXJ5XHJcbiAgICAgICAgICAgICAgICB0YWdzPXtxdWVzdGlvbi50YWdzfVxyXG4gICAgICAgICAgICAgICAgYXV0aG9yPXtxdWVzdGlvbi5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkPXtxdWVzdGlvbi5jcmVhdGVkfVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Lyoge3F1ZXN0aW9uLnRleHR9ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHF1ZXN0aW9uLnRleHQgfX0gLz5cclxuICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5pbWFnZSAmJiA8SW1hZ2UgYmFzZTY0U3RyaW5nPXtxdWVzdGlvbi5pbWFnZX0gYWx0VGV4dD0nSW1hZ2UnIC8+fVxyXG4gICAgICAgICAgICAgIDwvUG9zdFN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgPENvbW1lbnRMaXN0IHF1ZXN0aW9uSWQ9e3F1ZXN0aW9uSWR9IHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn0+XHJcbiAgICAgICAgICAgICAgICB7cXVlc3Rpb24uY29tbWVudHMubWFwKCh7IGlkLCBhdXRob3IsIGNyZWF0ZWQsIGJvZHkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2F1dGhvci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBpc093bmVyPXthdXRob3IudXNlcm5hbWUgPT09IHF1ZXN0aW9uLmF1dGhvci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkPXtjcmVhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgICAgICAgICAgICA8L0NvbW1lbnRJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Db21tZW50TGlzdD5cclxuICAgICAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuXHJcbiAgICAgICAgICAgIHtxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxBbnN3ZXJDb250YWluZXJcclxuICAgICAgICAgICAgICAgIGFuc3dlcnNDb3VudD17cXVlc3Rpb24uYW5zd2Vycy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJTb3J0VHlwZT17YW5zd2VyU29ydFR5cGV9XHJcbiAgICAgICAgICAgICAgICBzZXRBbnN3ZXJTb3J0VHlwZT17c2V0QW5zd2Vyc1NvcnRUeXBlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5hbnN3ZXJzLnNvcnQoaGFuZGxlU29ydGluZygpKS5tYXAoKGFuc3dlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UG9zdFdyYXBwZXIga2V5PXthbnN3ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Vm90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcmU9e2Fuc3dlci5zY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZvdGVzPXthbnN3ZXIudm90ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJZD17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0U3VtbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXthbnN3ZXIuYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZD17YW5zd2VyLmNyZWF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbklkPXtxdWVzdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VySWQ9e2Fuc3dlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uPXtzZXRRdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YW5zd2VyLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3N0U3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSWQ9e3F1ZXN0aW9uSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJZD17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb249e3NldFF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHthbnN3ZXIuY29tbWVudHMubWFwKCh7IGlkLCBhdXRob3IsIGNyZWF0ZWQsIGJvZHkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25JZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJZD17YW5zd2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17YXV0aG9yLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3duZXI9e2F1dGhvci51c2VybmFtZSA9PT0gcXVlc3Rpb24uYXV0aG9yLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e2NyZWF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb249e3NldFF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tbWVudEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbW1lbnRMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8L1Bvc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9BbnN3ZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8QWRkQW5zd2VyXHJcbiAgICAgICAgICAgICAgdGFncz17cXVlc3Rpb24udGFnc31cclxuICAgICAgICAgICAgICBpZD17cXVlc3Rpb25JZH1cclxuICAgICAgICAgICAgICBzZXRRdWVzdGlvbj17c2V0UXVlc3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0RldGFpbFBhZ2VDb250YWluZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5zbHVnXHJcbiAgY29uc3QgcXVlc3Rpb25JZCA9IHNsdWcuc3BsaXQoJy0nKS5zaGlmdCgpXHJcbiAgY29uc3QgdGl0bGUgPSBzbHVnXHJcbiAgICA/LnN1YnN0cihzbHVnLmluZGV4T2YoJy0nKSArIDEpXHJcbiAgICAuc3BsaXQoJy0nKVxyXG4gICAgLmpvaW4oJyAnKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcXVlc3Rpb25JZCxcclxuICAgICAgdGl0bGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uRGV0YWlsXHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBBdXRoQ29udGV4dFxyXG5cclxuY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFthdXRoU3RhdGUsIHNldEF1dGhTdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcclxuICAgIGNvbnN0IHVzZXJJbmZvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbmZvJylcclxuICAgIGNvbnN0IGV4cGlyZXNBdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVzQXQnKVxyXG5cclxuICAgIHNldEF1dGhTdGF0ZSh7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBleHBpcmVzQXQsXHJcbiAgICAgIHVzZXJJbmZvOiB1c2VySW5mbyA/IEpTT04ucGFyc2UodXNlckluZm8pIDoge31cclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHNldEF1dGhJbmZvID0gKHsgdG9rZW4sIHVzZXJJbmZvLCBleHBpcmVzQXQgfSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeSh1c2VySW5mbykpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc0F0JywgZXhwaXJlc0F0KVxyXG5cclxuICAgIHNldEF1dGhTdGF0ZSh7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICB1c2VySW5mbyxcclxuICAgICAgZXhwaXJlc0F0XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySW5mbycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc0F0JylcclxuICAgIHNldEF1dGhTdGF0ZSh7fSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpID0+IHtcclxuICAgIGlmICghYXV0aFN0YXRlLnRva2VuIHx8ICFhdXRoU3RhdGUuZXhwaXJlc0F0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCA8IGF1dGhTdGF0ZS5leHBpcmVzQXRcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzQWRtaW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXV0aFN0YXRlLnVzZXJJbmZvPy5yb2xlID09PSAnYWRtaW4nXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgYXV0aFN0YXRlLFxyXG4gICAgICAgIHNldEF1dGhTdGF0ZTogKGF1dGhJbmZvKSA9PiBzZXRBdXRoSW5mbyhhdXRoSW5mbyksXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCxcclxuICAgICAgICBpc0FkbWluXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgeyBBdXRoQ29udGV4dCwgQXV0aFByb3ZpZGVyIH1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vYXV0aCdcclxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3V0aWwvZmV0Y2hlcidcclxuXHJcbmNvbnN0IEZldGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBGZXRjaENvbnRleHRcclxuXHJcbmNvbnN0IEZldGNoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRoU3RhdGUgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcblxyXG4gIGNvbnN0IGF1dGhBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMXHJcbiAgfSlcclxuXHJcbiAgYXV0aEF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgIChjb25maWcpID0+IHtcclxuICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YFxyXG4gICAgICByZXR1cm4gY29uZmlnXHJcbiAgICB9LFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH1cclxuICApXHJcblxyXG4gIGF1dGhBeGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSxcclxuICAgIChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zdCBjb2RlID0gZXJyb3IgJiYgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5zdGF0dXMgOiAwXHJcbiAgICAgIGlmIChjb2RlID09PSA0MDEgfHwgY29kZSA9PT0gNDAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvZGUnLCBjb2RlKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBhdXRoQXhpb3NcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IEZldGNoQ29udGV4dCwgRmV0Y2hQcm92aWRlciB9XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVDb250ZXh0XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwdWJsaWNGZXRjaCB9IGZyb20gJy4uL3V0aWwvZmV0Y2hlcidcclxuXHJcbmNvbnN0IFRhZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgeyBQcm92aWRlciB9ID0gVGFnQ29udGV4dFxyXG5cclxuY29uc3QgVGFnUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RhZ1N0YXRlLCBzZXRUYWdTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3B1bGFyVGFncyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoJy90YWdzL3BvcHVsZXJ0YWdzJylcclxuICAgICAgc2V0VGFnU3RhdGUoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFBvcHVsYXJUYWdzKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxQcm92aWRlciB2YWx1ZT17eyB0YWdTdGF0ZSB9fT57Y2hpbGRyZW59PC9Qcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IHsgVGFnQ29udGV4dCwgVGFnUHJvdmlkZXIgfVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbi8vIGNvbnN0IGJhc2VVUkwgPVxyXG4vLyAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbi8vICAgICA/ICdodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpJ1xyXG4vLyAgICAgOiBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlNJVEVfTkFNRX0vYXBpYFxyXG5jb25zdCBiYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGknXHJcbi8vIGNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9hc2tlbS1zZXJ2ZXIub25yZW5kZXIuY29tL2FwaSdcclxuY29uc3QgcHVibGljRmV0Y2ggPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkxcclxufSlcclxuXHJcbmV4cG9ydCB7IHB1YmxpY0ZldGNoLCBiYXNlVVJMIH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZucy9mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9