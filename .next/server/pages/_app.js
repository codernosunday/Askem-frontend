module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./components/auth-forms/auth-forms.module.css":
/*!*****************************************************!*\
  !*** ./components/auth-forms/auth-forms.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"authModal": "auth-forms_authModal__10tal",
	"logo": "auth-forms_logo__1pJ7M",
	"authSwichMessage": "auth-forms_authSwichMessage__3LfUc"
};


/***/ }),

/***/ "./components/auth-forms/index.js":
/*!****************************************!*\
  !*** ./components/auth-forms/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _login_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form */ "./components/auth-forms/login-form/index.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-form */ "./components/auth-forms/signup-form/index.js");
/* harmony import */ var _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-forms.module.css */ "./components/auth-forms/auth-forms.module.css");
/* harmony import */ var _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "W:\\ClientAskem\\components\\auth-forms\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AuthForms = ({
  screen = 'signup'
}) => {
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(screen);
  return __jsx("div", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, form == 'login' ? 'Log In' : 'Sign Up', " - Askem")), __jsx("div", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), form === 'login' ? __jsx(_login_form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 27
    }
  }) : __jsx(_signup_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 43
    }
  }), form === 'login' ? __jsx("p", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authSwichMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Don\u2019t have an account?", ' ', __jsx("a", {
    onClick: () => setForm('signup'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Sign up")) : __jsx("p", {
    className: _auth_forms_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.authSwichMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Already have an account?", ' ', __jsx("a", {
    onClick: () => setForm('login'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Log in")));
};
/* harmony default export */ __webpack_exports__["default"] = (AuthForms);

/***/ }),

/***/ "./components/auth-forms/login-form/index.js":
/*!***************************************************!*\
  !*** ./components/auth-forms/login-form/index.js ***!
  \***************************************************/
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
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form-input */ "./components/form-input/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _login_form_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form.module.css */ "./components/auth-forms/login-form/login-form.module.css");
/* harmony import */ var _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_login_form_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "W:\\ClientAskem\\components\\auth-forms\\login-form\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const LoginForm = () => {
  const {
    setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const {
    setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values, {
      setStatus,
      resetForm
    }) => {
      setLoading(true);
      try {
        const {
          data
        } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].post('authenticate', values);
        const {
          token,
          expiresAt,
          userInfo
        } = data;
        setAuthState({
          token,
          expiresAt,
          userInfo
        });
        resetForm({});
        setIsComponentVisible(false);
      } catch (error) {
        setStatus(error.response.data.message);
      }
      setLoading(false);
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').max(16, 'Must be at most 16 characters long').matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
      password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').min(6, 'Must be at least 6 characters long').max(50, 'Must be at most 50 characters long')
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
    onSubmit: handleSubmit,
    className: _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Username",
    type: "text",
    name: "username",
    autoComplete: "off",
    value: values.username,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.username && errors.username,
    errorMessage: errors.username && errors.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Password",
    type: "password",
    name: "password",
    autoComplete: "off",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.password && errors.password,
    errorMessage: errors.password && errors.password,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, status), __jsx(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: true,
    full: true,
    className: _login_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.submitButton,
    type: "submit",
    isLoading: loading,
    disabled: isSubmitting,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "Log in")));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/auth-forms/login-form/login-form.module.css":
/*!****************************************************************!*\
  !*** ./components/auth-forms/login-form/login-form.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"submitButton": "login-form_submitButton__2jZxK",
	"form": "login-form_form__3HLmP",
	"status": "login-form_status__173pi"
};


/***/ }),

/***/ "./components/auth-forms/signup-form/index.js":
/*!****************************************************!*\
  !*** ./components/auth-forms/signup-form/index.js ***!
  \****************************************************/
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
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/fetcher */ "./util/fetcher.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/auth */ "./store/auth.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/modal */ "./store/modal.js");
/* harmony import */ var _form_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form-input */ "./components/form-input/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");
/* harmony import */ var _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup-form.module.css */ "./components/auth-forms/signup-form/signup-form.module.css");
/* harmony import */ var _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_signup_form_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "W:\\ClientAskem\\components\\auth-forms\\signup-form\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const SignupForm = () => {
  const {
    setAuthState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const {
    setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: ''
    },
    onSubmit: async (values, {
      setStatus,
      resetForm
    }) => {
      setLoading(true);
      try {
        const {
          data
        } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_3__["publicFetch"].post('signup', values);
        const {
          token,
          expiresAt,
          userInfo
        } = data;
        setAuthState({
          token,
          expiresAt,
          userInfo
        });
        resetForm({});
        setIsComponentVisible(false);
      } catch (error) {
        setStatus(error.response.data.message);
      }
      setLoading(false);
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').max(16, 'Must be at most 16 characters long').matches(/^[a-zA-Z0-9_-]+$/, 'Contains invalid characters'),
      password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('Required').min(6, 'Must be at least 6 characters long').matches(/[A-Z]/, 'Password must contain at least one uppercase letter').matches(/[a-z]/, 'Password must contain at least one lowercase letter').matches(/[0-9]/, 'Password must contain at least one digit').matches(/[@$!%*?&]/, 'Password must contain at least one special character').max(50, 'Must be at most 50 characters long'),
      passwordConfirmation: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_2__["ref"]('password'), null], 'Passwords must match')
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
    onSubmit: handleSubmit,
    className: _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Username",
    type: "text",
    name: "username",
    autoComplete: "off",
    value: values.username,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.username && errors.username,
    errorMessage: errors.username && errors.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Password",
    type: "password",
    name: "password",
    autoComplete: "off",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.password && errors.password,
    errorMessage: errors.password && errors.password,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx(_form_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Password Confirm",
    type: "password",
    name: "passwordConfirmation",
    autoComplete: "off",
    value: values.passwordConfirmation,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.passwordConfirmation && errors.passwordConfirmation,
    errorMessage: errors.passwordConfirmation && errors.passwordConfirmation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, status), __jsx(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    primary: true,
    full: true,
    className: _signup_form_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.submitButton,
    disabled: isSubmitting,
    isLoading: loading,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Sign up")));
};
/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./components/auth-forms/signup-form/signup-form.module.css":
/*!******************************************************************!*\
  !*** ./components/auth-forms/signup-form/signup-form.module.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"submitButton": "signup-form_submitButton__zkKhu",
	"form": "signup-form_form__33svz",
	"status": "signup-form_status__1dmtU"
};


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

/***/ "./components/form-input/form-input.module.css":
/*!*****************************************************!*\
  !*** ./components/form-input/form-input.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "form-input_container__11zdg",
	"label": "form-input_label__2LiRg",
	"inputMessage": "form-input_inputMessage__11D7D",
	"inputContainer": "form-input_inputContainer__2X5G4",
	"input": "form-input_input__vFphl",
	"hasError": "form-input_hasError__3vYdN",
	"alert": "form-input_alert__37sqK",
	"inputInfo": "form-input_inputInfo__WypA7"
};


/***/ }),

/***/ "./components/form-input/index.js":
/*!****************************************!*\
  !*** ./components/form-input/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _form_input_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-input.module.css */ "./components/form-input/form-input.module.css");
/* harmony import */ var _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_input_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "W:\\ClientAskem\\components\\form-input\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const FormInput = _ref => {
  let {
      label,
      inputInfo,
      hasError = false,
      errorMessage
    } = _ref,
    props = _objectWithoutProperties(_ref, ["label", "inputInfo", "hasError", "errorMessage"]);
  return __jsx("div", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("label", {
    id: label,
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, label, inputInfo && __jsx("p", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, inputInfo), __jsx("div", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("input", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input, hasError && _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hasError),
    htmlFor: label
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), hasError && __jsx(_icons__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.alert,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 24
    }
  }))), hasError && __jsx("p", {
    className: _form_input_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 20
    }
  }, errorMessage));
};
/* harmony default export */ __webpack_exports__["default"] = (FormInput);

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

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/modal */ "./store/modal.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.module.css */ "./components/modal/modal.module.css");
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "W:\\ClientAskem\\components\\modal\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }






const Modal = _ref => {
  let {
      children,
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, ["children", "className"]);
  const {
    ref,
    setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_modal__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modal, className)
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: ref,
    className: _modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.modalDialog,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _modal_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.closeButton,
    onClick: () => setIsComponentVisible(isOpen => !isOpen),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["Close"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), children)));
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/modal/modal.module.css":
/*!*******************************************!*\
  !*** ./components/modal/modal.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "modal_modal__2Z3RA",
	"modalDialog": "modal_modalDialog__2PAua",
	"closeButton": "modal_closeButton__2OM9w"
};


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

/***/ "./node_modules/react-tagsinput/react-tagsinput.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-tagsinput/react-tagsinput.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useComponentVisible */ "./hooks/useComponentVisible.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/modal */ "./store/modal.js");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/auth */ "./store/auth.js");
/* harmony import */ var _store_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/fetch */ "./store/fetch.js");
/* harmony import */ var _store_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/tag */ "./store/tag.js");
/* harmony import */ var _store_groupauth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/groupauth */ "./store/groupauth.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modal */ "./components/modal/index.js");
/* harmony import */ var _components_auth_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/auth-forms */ "./components/auth-forms/index.js");
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/variables.css */ "./styles/variables.css");
/* harmony import */ var _styles_variables_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_variables_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/nprogress.css */ "./styles/nprogress.css");
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-tagsinput/react-tagsinput.css */ "./node_modules/react-tagsinput/react-tagsinput.css");
/* harmony import */ var react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_tagsinput_react_tagsinput_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/app.css */ "./styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "W:\\ClientAskem\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }















next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());
function MyApp({
  Component,
  pageProps
}) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  const {
    0: authScreen,
    1: setAuthScreen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const handleComponentVisible = (componentVisible, authScreen) => {
    setIsComponentVisible(componentVisible);
    setAuthScreen(authScreen);
  };
  return __jsx(_store_modal__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      ref,
      handleComponentVisible,
      setIsComponentVisible
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_store_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_store_fetch__WEBPACK_IMPORTED_MODULE_6__["FetchProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_store_groupauth__WEBPACK_IMPORTED_MODULE_8__["GroupAuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_store_tag__WEBPACK_IMPORTED_MODULE_7__["TagProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })), isComponentVisible && __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(_components_auth_forms__WEBPACK_IMPORTED_MODULE_10__["default"], {
    screen: authScreen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  })))))));
}
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ "./store/groupauth.js":
/*!****************************!*\
  !*** ./store/groupauth.js ***!
  \****************************/
/*! exports provided: GroupAuthContext, GroupAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAuthContext", function() { return GroupAuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAuthProvider", function() { return GroupAuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "W:\\ClientAskem\\store\\groupauth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GroupAuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const {
  Provider
} = GroupAuthContext;
const GroupAuthProvider = ({
  children
}) => {
  const {
    0: valueGroup,
    1: setValueGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('defaultValue');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Kiểm tra nếu đang ở phía client
    if (false) {}
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (false) {}
  }, [valueGroup]);
  return __jsx(Provider, {
    value: {
      valueGroup,
      setValueGroup
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
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

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/variables.css":
/*!******************************!*\
  !*** ./styles/variables.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC1mb3Jtcy9hdXRoLWZvcm1zLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLWZvcm1zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC1mb3Jtcy9sb2dpbi1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC1mb3Jtcy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgtZm9ybXMvc2lnbnVwLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLWZvcm1zL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb3JtLWlucHV0L2Zvcm0taW5wdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0taW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9BZGRjb21tZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Fycm93RG93bi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Fycm93VXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9DbG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0dyb3VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9TcGlubmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvVGFnLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUNvbXBvbmVudFZpc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2dyb3VwYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90YWcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9mZXRjaGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkF1dGhGb3JtcyIsInNjcmVlbiIsImZvcm0iLCJzZXRGb3JtIiwidXNlU3RhdGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsInN0eWxlcyIsImF1dGhNb2RhbCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSGVhZCIsImxvZ28iLCJMb2dvIiwiTG9naW5Gb3JtIiwiU2lnblVwRm9ybSIsImF1dGhTd2ljaE1lc3NhZ2UiLCJvbkNsaWNrIiwic2V0QXV0aFN0YXRlIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic2V0SXNDb21wb25lbnRWaXNpYmxlIiwiTW9kYWxDb250ZXh0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm9uU3VibWl0IiwidmFsdWVzIiwic2V0U3RhdHVzIiwicmVzZXRGb3JtIiwiZGF0YSIsInB1YmxpY0ZldGNoIiwicG9zdCIsInRva2VuIiwiZXhwaXJlc0F0IiwidXNlckluZm8iLCJlcnJvciIsInJlc3BvbnNlIiwibWVzc2FnZSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJyZXF1aXJlZCIsIm1heCIsIm1hdGNoZXMiLCJtaW4iLCJlcnJvcnMiLCJ0b3VjaGVkIiwic3RhdHVzIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyIsIkZvcm1JbnB1dCIsImxhYmVsIiwidHlwZSIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25CbHVyIiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJCdXR0b24iLCJwcmltYXJ5IiwiZnVsbCIsInN1Ym1pdEJ1dHRvbiIsImlzTG9hZGluZyIsImRpc2FibGVkIiwiU2lnbnVwRm9ybSIsInBhc3N3b3JkQ29uZmlybWF0aW9uIiwib25lT2YiLCJMaW5rQnV0dG9uIiwiX3JlZiIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiTGluayIsImFzIiwiX2V4dGVuZHMiLCJCYXNlQnV0dG9uIiwiX3JlZjIiLCJfcmVmMyIsInNlY29uZGFyeSIsIkNvbXAiLCJjbiIsImJ1dHRvbiIsImlucHV0SW5mbyIsImNvbnRhaW5lciIsImlkIiwiaW5wdXRDb250YWluZXIiLCJpbnB1dCIsImh0bWxGb3IiLCJBbGVydCIsImFsZXJ0IiwiaW5wdXRNZXNzYWdlIiwiQWRkY29tbWVudCIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJkIiwic3Ryb2tlIiwiQWRtaW5zIiwiU3ZnQWxlcnQiLCJTdmdBcnJvd0Rvd24iLCJTdmdBcnJvd1VwIiwiU3ZnQ2xvc2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsIkRlbGV0ZSIsIkdyb3VwcyIsIlN2Z0xvZ28iLCJ4bWxucyIsIlN2Z01lbnUiLCJTdmdTZWFyY2giLCJTdmdTcGlubmVyIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIngiLCJ5IiwicngiLCJyeSIsImF0dHJpYnV0ZU5hbWUiLCJrZXlUaW1lcyIsImR1ciIsImJlZ2luIiwicmVwZWF0Q291bnQiLCJ0cmFuc2Zvcm0iLCJUYWdzIiwiVXNlcnMiLCJTdmdXb3JsZCIsIk1vZGFsIiwicmVmIiwiUmVhY3QiLCJGcmFnbWVudCIsIm1vZGFsIiwibW9kYWxEaWFsb2ciLCJjbG9zZUJ1dHRvbiIsImlzT3BlbiIsIkNsb3NlIiwidXNlQ29tcG9uZW50VmlzaWJsZSIsImluaXRpYWxJc1Zpc2libGUiLCJpc0NvbXBvbmVudFZpc2libGUiLCJ1c2VSZWYiLCJ0b2dnbGVSZWYiLCJoYW5kbGVIaWRlIiwiZXZlbnQiLCJrZXkiLCJoYW5kbGVDbGlja091dHNpZGUiLCJfdG9nZ2xlUmVmJGN1cnJlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJvcHRpb25zIiwiY2F0Y2giLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImJvZHkiLCJmb2N1cyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsIlJvdXRlciIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VSb3V0ZXIiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwibWFwIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsInNlYXJjaFBhcmFtcyIsImhhc2giLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiYXV0aFNjcmVlbiIsInNldEF1dGhTY3JlZW4iLCJoYW5kbGVDb21wb25lbnRWaXNpYmxlIiwiY29tcG9uZW50VmlzaWJsZSIsIlByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwiRmV0Y2hQcm92aWRlciIsIkdyb3VwQXV0aFByb3ZpZGVyIiwiVGFnUHJvdmlkZXIiLCJjcmVhdGVDb250ZXh0IiwiYXV0aFN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEF1dGhJbmZvIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJpc0F1dGhlbnRpY2F0ZWQiLCJEYXRlIiwiZ2V0VGltZSIsImlzQWRtaW4iLCJfYXV0aFN0YXRlJHVzZXJJbmZvIiwicm9sZSIsImF1dGhJbmZvIiwiRmV0Y2hDb250ZXh0IiwiYXV0aEF4aW9zIiwiYXhpb3MiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVqZWN0IiwibG9nIiwiR3JvdXBBdXRoQ29udGV4dCIsInZhbHVlR3JvdXAiLCJzZXRWYWx1ZUdyb3VwIiwiU3RvcmVDb250ZXh0IiwiVGFnQ29udGV4dCIsInRhZ1N0YXRlIiwic2V0VGFnU3RhdGUiLCJmZXRjaFBvcHVsYXJUYWdzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUE7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bkcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUFBVCxLQUFBO0lBQU1DLFNBQVMsRUFBQyxHQUFHO0lBQUNzRyxDQUFDLEVBQUMsNFRBQTRUO0lBQUFuRyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQUFULEtBQUE7SUFBTUMsU0FBUyxFQUFDLEdBQUc7SUFBQ3NHLENBQUMsRUFBQyx5VUFBeVU7SUFBQW5HLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFBQVQsS0FBQTtJQUFNQyxTQUFTLEVBQUMsR0FBRztJQUFDc0csQ0FBQyxFQUFDLHFXQUFxVztJQUFBbkcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUFBVCxLQUFBO0lBQU1DLFNBQVMsRUFBQyxHQUFHO0lBQUNzRyxDQUFDLEVBQUMsMFJBQTBSO0lBQUFuRyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQUFULEtBQUE7SUFBTUMsU0FBUyxFQUFDLEdBQUc7SUFBQ3NHLENBQUMsRUFBQyw0UkFBNFI7SUFBQW5HLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFBQVQsS0FBQTtJQUFNQyxTQUFTLEVBQUMsR0FBRztJQUFDc0csQ0FBQyxFQUFDLDBHQUEwRztJQUFBbkcsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtN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bkMsTUFBTTtRQUFFNWtCO01BQUssQ0FBQyxHQUFHLE1BQU1DLHlEQUFXLENBQUM0SSxHQUFHLENBQUMsbUJBQW1CLENBQUM7TUFDM0Q4YixXQUFXLENBQUMza0IsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRDRrQixnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixPQUFPNW1CLEtBQUEsQ0FBQ2trQixRQUFRO0lBQUN2Z0IsS0FBSyxFQUFFO01BQUUraUI7SUFBUyxDQUFFO0lBQUF0bUIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUVtRSxRQUFtQixDQUFDO0FBQzdELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTWdoQixPQUFPLEdBQUcsdUNBQXVDO0FBQ3ZELE1BQU0zakIsV0FBVyxHQUFHMGpCLDRDQUFLLENBQUM1VCxNQUFNLENBQUM7RUFDL0I2VDtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEYsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXV0aE1vZGFsXCI6IFwiYXV0aC1mb3Jtc19hdXRoTW9kYWxfXzEwdGFsXCIsXG5cdFwibG9nb1wiOiBcImF1dGgtZm9ybXNfbG9nb19fMXBKN01cIixcblx0XCJhdXRoU3dpY2hNZXNzYWdlXCI6IFwiYXV0aC1mb3Jtc19hdXRoU3dpY2hNZXNzYWdlX18zTGZVY1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuLi9pY29ucydcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL2xvZ2luLWZvcm0nXHJcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4vc2lnbnVwLWZvcm0nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXV0aC1mb3Jtcy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQXV0aEZvcm1zID0gKHsgc2NyZWVuID0gJ3NpZ251cCcgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHNjcmVlbilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aE1vZGFsfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPntmb3JtID09ICdsb2dpbicgPyAnTG9nIEluJyA6ICdTaWduIFVwJ30gLSBBc2tlbTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICA8TG9nbyAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICB7Zm9ybSA9PT0gJ2xvZ2luJyA/IDxMb2dpbkZvcm0gLz4gOiA8U2lnblVwRm9ybSAvPn1cclxuXHJcbiAgICAgIHtmb3JtID09PSAnbG9naW4nID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhTd2ljaE1lc3NhZ2V9PlxyXG4gICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/eycgJ31cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldEZvcm0oJ3NpZ251cCcpfT5TaWduIHVwPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hdXRoU3dpY2hNZXNzYWdlfT5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3snICd9XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtKCdsb2dpbicpfT5Mb2cgaW48L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybXNcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuXHJcbmltcG9ydCB7IHB1YmxpY0ZldGNoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9mZXRjaGVyJ1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2F1dGgnXHJcbmltcG9ydCBNb2RhbENvbnRleHQgZnJvbSAnLi4vLi4vLi4vc3RvcmUvbW9kYWwnXHJcblxyXG5pbXBvcnQgRm9ybUlucHV0IGZyb20gJy4uLy4uL2Zvcm0taW5wdXQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvZ2luLWZvcm0ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldEF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IHNldElzQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH19XHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldFN0YXR1cywgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHVibGljRmV0Y2gucG9zdCgnYXV0aGVudGljYXRlJywgdmFsdWVzKVxyXG4gICAgICAgICAgY29uc3QgeyB0b2tlbiwgZXhwaXJlc0F0LCB1c2VySW5mbyB9ID0gZGF0YVxyXG4gICAgICAgICAgc2V0QXV0aFN0YXRlKHsgdG9rZW4sIGV4cGlyZXNBdCwgdXNlckluZm8gfSlcclxuICAgICAgICAgIHJlc2V0Rm9ybSh7fSlcclxuICAgICAgICAgIHNldElzQ29tcG9uZW50VmlzaWJsZShmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgc2V0U3RhdHVzKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfX1cclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgLnJlcXVpcmVkKCdSZXF1aXJlZCcpXHJcbiAgICAgICAgICAubWF4KDE2LCAnTXVzdCBiZSBhdCBtb3N0IDE2IGNoYXJhY3RlcnMgbG9uZycpXHJcbiAgICAgICAgICAubWF0Y2hlcygvXlthLXpBLVowLTlfLV0rJC8sICdDb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMnKSxcclxuICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcclxuICAgICAgICAgIC5taW4oNiwgJ011c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcnKVxyXG4gICAgICAgICAgLm1heCg1MCwgJ011c3QgYmUgYXQgbW9zdCA1MCBjaGFyYWN0ZXJzIGxvbmcnKVxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgeyh7XHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIGVycm9ycyxcclxuICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nXHJcbiAgICAgIH0pID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICBoYXNFcnJvcj17dG91Y2hlZC51c2VybmFtZSAmJiBlcnJvcnMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JzLnVzZXJuYW1lICYmIGVycm9ycy51c2VybmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUlucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgIGhhc0Vycm9yPXt0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+e3N0YXR1c308L3A+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgZnVsbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC9Gb3JtaWs+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3VibWl0QnV0dG9uXCI6IFwibG9naW4tZm9ybV9zdWJtaXRCdXR0b25fXzJqWnhLXCIsXG5cdFwiZm9ybVwiOiBcImxvZ2luLWZvcm1fZm9ybV9fM0hMbVBcIixcblx0XCJzdGF0dXNcIjogXCJsb2dpbi1mb3JtX3N0YXR1c19fMTczcGlcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcblxyXG5pbXBvcnQgeyBwdWJsaWNGZXRjaCB9IGZyb20gJy4uLy4uLy4uL3V0aWwvZmV0Y2hlcidcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hdXRoJ1xyXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uLy4uLy4uL3N0b3JlL21vZGFsJ1xyXG5cclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9mb3JtLWlucHV0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zaWdudXAtZm9ybS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgU2lnbnVwRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldEF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCB7IHNldElzQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnLCBwYXNzd29yZENvbmZpcm1hdGlvbjogJycgfX1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3RhdHVzLCByZXNldEZvcm0gfSkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5wb3N0KCdzaWdudXAnLCB2YWx1ZXMpXHJcbiAgICAgICAgICBjb25zdCB7IHRva2VuLCBleHBpcmVzQXQsIHVzZXJJbmZvIH0gPSBkYXRhXHJcbiAgICAgICAgICBzZXRBdXRoU3RhdGUoeyB0b2tlbiwgZXhwaXJlc0F0LCB1c2VySW5mbyB9KVxyXG4gICAgICAgICAgcmVzZXRGb3JtKHt9KVxyXG4gICAgICAgICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzZXRTdGF0dXMoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9fVxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtZdXAub2JqZWN0KHtcclxuICAgICAgICB1c2VybmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAgICAgICAucmVxdWlyZWQoJ1JlcXVpcmVkJylcclxuICAgICAgICAgIC5tYXgoMTYsICdNdXN0IGJlIGF0IG1vc3QgMTYgY2hhcmFjdGVycyBsb25nJylcclxuICAgICAgICAgIC5tYXRjaGVzKC9eW2EtekEtWjAtOV8tXSskLywgJ0NvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycycpLFxyXG4gICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKClcclxuICAgICAgICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKVxyXG4gICAgICAgICAgLm1pbig2LCAnTXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZycpXHJcbiAgICAgICAgICAubWF0Y2hlcygvW0EtWl0vLCAnUGFzc3dvcmQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyJylcclxuICAgICAgICAgIC5tYXRjaGVzKC9bYS16XS8sICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGxvd2VyY2FzZSBsZXR0ZXInKVxyXG4gICAgICAgICAgLm1hdGNoZXMoL1swLTldLywgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgZGlnaXQnKVxyXG4gICAgICAgICAgLm1hdGNoZXMoL1tAJCElKj8mXS8sICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHNwZWNpYWwgY2hhcmFjdGVyJylcclxuICAgICAgICAgIC5tYXgoNTAsICdNdXN0IGJlIGF0IG1vc3QgNTAgY2hhcmFjdGVycyBsb25nJyksXHJcbiAgICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246IFl1cC5zdHJpbmcoKS5vbmVPZihcclxuICAgICAgICAgIFtZdXAucmVmKCdwYXNzd29yZCcpLCBudWxsXSxcclxuICAgICAgICAgICdQYXNzd29yZHMgbXVzdCBtYXRjaCdcclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICB7KHtcclxuICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICBpc1N1Ym1pdHRpbmdcclxuICAgICAgfSkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgPEZvcm1JbnB1dFxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgIGhhc0Vycm9yPXt0b3VjaGVkLnVzZXJuYW1lICYmIGVycm9ycy51c2VybmFtZX1cclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvcnMudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgaGFzRXJyb3I9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9ycy5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZCBDb25maXJtXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkQ29uZmlybWF0aW9uXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZENvbmZpcm1hdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICBoYXNFcnJvcj17XHJcbiAgICAgICAgICAgICAgdG91Y2hlZC5wYXNzd29yZENvbmZpcm1hdGlvbiAmJiBlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e1xyXG4gICAgICAgICAgICAgIGVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbiAmJiBlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+e3N0YXR1c308L3A+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgZnVsbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJtaXRCdXR0b25cIjogXCJzaWdudXAtZm9ybV9zdWJtaXRCdXR0b25fX3prS2h1XCIsXG5cdFwiZm9ybVwiOiBcInNpZ251cC1mb3JtX2Zvcm1fXzMzc3Z6XCIsXG5cdFwic3RhdHVzXCI6IFwic2lnbnVwLWZvcm1fc3RhdHVzX18xZG10VVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uX2J1dHRvbl9fMi0xaVFcIixcblx0XCJwcmltYXJ5XCI6IFwiYnV0dG9uX3ByaW1hcnlfXzFtR2RMXCIsXG5cdFwic2Vjb25kYXJ5XCI6IFwiYnV0dG9uX3NlY29uZGFyeV9fMXNnTUhcIixcblx0XCJmdWxsXCI6IFwiYnV0dG9uX2Z1bGxfXzFWRGtzXCIsXG5cdFwiaXNMb2FkaW5nXCI6IFwiYnV0dG9uX2lzTG9hZGluZ19fM2x0Mm9cIixcblx0XCJzcGluXCI6IFwiYnV0dG9uX3NwaW5fXzJ4RHZpXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBMaW5rQnV0dG9uID0gKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2hyZWZ9PlxyXG4gICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCYXNlQnV0dG9uID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgey4uLnByb3BzfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b24gPSAoe1xyXG4gIHByaW1hcnksXHJcbiAgc2Vjb25kYXJ5LFxyXG4gIGZ1bGwgPSBmYWxzZSxcclxuICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICBjaGlsZHJlbixcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IENvbXAgPSBwcm9wcy5ocmVmID8gTGlua0J1dHRvbiA6IEJhc2VCdXR0b25cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBzdHlsZXMuYnV0dG9uLFxyXG4gICAgICAgIHByaW1hcnkgJiYgc3R5bGVzLnByaW1hcnksXHJcbiAgICAgICAgc2Vjb25kYXJ5ICYmIHN0eWxlcy5zZWNvbmRhcnksXHJcbiAgICAgICAgZnVsbCAmJiBzdHlsZXMuZnVsbCxcclxuICAgICAgICBpc0xvYWRpbmcgJiYgc3R5bGVzLmlzTG9hZGluZyxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiZm9ybS1pbnB1dF9jb250YWluZXJfXzExemRnXCIsXG5cdFwibGFiZWxcIjogXCJmb3JtLWlucHV0X2xhYmVsX18yTGlSZ1wiLFxuXHRcImlucHV0TWVzc2FnZVwiOiBcImZvcm0taW5wdXRfaW5wdXRNZXNzYWdlX18xMUQ3RFwiLFxuXHRcImlucHV0Q29udGFpbmVyXCI6IFwiZm9ybS1pbnB1dF9pbnB1dENvbnRhaW5lcl9fMlg1RzRcIixcblx0XCJpbnB1dFwiOiBcImZvcm0taW5wdXRfaW5wdXRfX3ZGcGhsXCIsXG5cdFwiaGFzRXJyb3JcIjogXCJmb3JtLWlucHV0X2hhc0Vycm9yX18zdllkTlwiLFxuXHRcImFsZXJ0XCI6IFwiZm9ybS1pbnB1dF9hbGVydF9fMzdzcUtcIixcblx0XCJpbnB1dEluZm9cIjogXCJmb3JtLWlucHV0X2lucHV0SW5mb19fV3lwQTdcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJy4uL2ljb25zJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvcm0taW5wdXQubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEZvcm1JbnB1dCA9ICh7XHJcbiAgbGFiZWwsXHJcbiAgaW5wdXRJbmZvLFxyXG4gIGhhc0Vycm9yID0gZmFsc2UsXHJcbiAgZXJyb3JNZXNzYWdlLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8bGFiZWwgaWQ9e2xhYmVsfSBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAge2xhYmVsfVxyXG4gICAgICAgIHtpbnB1dEluZm8gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRJbmZvfT57aW5wdXRJbmZvfTwvcD59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihzdHlsZXMuaW5wdXQsIGhhc0Vycm9yICYmIHN0eWxlcy5oYXNFcnJvcil9XHJcbiAgICAgICAgICAgIGh0bWxGb3I9e2xhYmVsfVxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2hhc0Vycm9yICYmIDxBbGVydCBjbGFzc05hbWU9e3N0eWxlcy5hbGVydH0gLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIHtoYXNFcnJvciAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dE1lc3NhZ2V9PntlcnJvck1lc3NhZ2V9PC9wPn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUlucHV0XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQWRkY29tbWVudChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMmVtXCIgaGVpZ2h0PVwiMmVtXCIgdmlld0JveD1cIjAgMCAyMyAyM1wiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMiA4VjE0TTE1IDExSDlNMTIuMjg5NiAxNy45OTg0QzE4LjA5NjUgMTcuOTM0MyAyMSAxNS45MTg5IDIxIDExQzIxIDYgMTggNCAxMiA0QzYgNCAzIDYgMyAxMUMzIDE0LjA3NzEgNC4xMzYyMyAxNi4wMTggNi40MDg2OCAxNy4wNTU3TDUgMjFMMTIuMjg5NiAxNy45OTg0WlwiIHN0cm9rZT1cIiNmZmZmZmZcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRjb21tZW50XHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBBZG1pbnMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDIxIDIxXCIgZmlsbD1cIiNmY2QzOTRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZjZDM5NFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjAyNDgsOS45NzUyMSBMNS44MzAwOCwxNC4xNjk5IEM0LjcyNTUxLDE1LjI3NDUgMi45MzQ2NCwxNS4yNzQ1IDEuODMwMDgsMTQuMTY5OSBDMC43MjU1MDUsMTMuMDY1NCAwLjcyNTUwNiwxMS4yNzQ1IDEuODMwMDgsMTAuMTY5OSBMNi4wMjQ3OSw1Ljk3NTIxIEM2LjAwODQsNS44MTkwNCA2LDUuNjYwNSA2LDUuNSBDNiwzLjE4MDk2IDcuNzU0MiwxLjI3MTY0IDEwLjAwOCwxLjAyNjU4IEMxMC4xNjk2LDEuMDA5MDEgMTAuMzMzOCwxIDEwLjUsMSBDMTEuMTkwNiwxIDExLjg0NDgsMS4xNTU1NSAxMi40Mjk1LDEuNDMzNTEgTDEwLjI4NTEsMy41Nzc5NyBDOS42OTkzLDQuMTYzNzYgOS42OTkzLDUuMTEzNTEgMTAuMjg1MSw1LjY5OTI5IEMxMC44NzA5LDYuMjg1MDggMTEuODIwNiw2LjI4NTA4IDEyLjQwNjQsNS42OTkyOSBMMTQuNTU2NCwzLjU0OTMyIEMxNC44NDA3LDQuMTM5NDUgMTUsNC44MDExMiAxNSw1LjUgQzE1LDUuNjU0MjkgMTQuOTkyMiw1LjgwNjc2IDE0Ljk3NzEsNS45NTcwNSBDMTQuNzQ4LDguMjI3NjcgMTIuODMxLDEwIDEwLjUsMTAgQzEwLjMzOTUsMTAgMTAuMTgxLDkuOTkxNiAxMC4wMjQ4LDkuOTc1MjEgWiBNOS4yODQ5OSw3Ljg4NjU4IEw0LjQxNTg2LDEyLjc1NTcgQzQuMDkyMzQsMTMuMDc5MiAzLjU2NzgxLDEzLjA3OTIgMy4yNDQyOSwxMi43NTU3IEMyLjkyMDc3LDEyLjQzMjIgMi45MjA3NywxMS45MDc3IDMuMjQ0MjksMTEuNTg0MSBMOC4xMTM0Miw2LjcxNSBMOS4yODQ5OSw3Ljg4NjU4IFpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluc1xyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnQWxlcnQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk04IDE2QTggOCAwIDExOCAwYTggOCAwIDAxMCAxNnpNNyAzdjZoMlYzSDd6bTAgOHYyaDJ2LTJIN3pcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdBbGVydFxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z0Fycm93RG93bihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cclxuICAgICAgPHBhdGggZD1cIk0yIDEwaDMyTDE4IDI2IDIgMTB6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z0Fycm93RG93blxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z0Fycm93VXAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMiAyNmgzMkwxOCAxMCAyIDI2elwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdBcnJvd1VwXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnQ2xvc2UocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgY2xhc3NOYW1lPVwiY2xvc2Vfc3ZnX19mZWF0aGVyIGNsb3NlX3N2Z19fZmVhdGhlci14XCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTE4IDZMNiAxOE02IDZsMTIgMTJcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdDbG9zZVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMmVtXCIgaGVpZ2h0PVwiMmVtXCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAxMVYxN1wiIHN0cm9rZT1cIiNkMjE0MDRcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9wYXRoPiA8cGF0aCBkPVwiTTE0IDExVjE3XCIgc3Ryb2tlPVwiI2QyMTQwNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNNCA3SDIwXCIgc3Ryb2tlPVwiI2QyMTQwNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNNiA3SDEySDE4VjE4QzE4IDE5LjY1NjkgMTYuNjU2OSAyMSAxNSAyMUg5QzcuMzQzMTUgMjEgNiAxOS42NTY5IDYgMThWN1pcIiBzdHJva2U9XCIjZDIxNDA0XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvcGF0aD4gPHBhdGggZD1cIk05IDVDOSAzLjg5NTQzIDkuODk1NDMgMyAxMSAzSDEzQzE0LjEwNDYgMyAxNSAzLjg5NTQzIDE1IDVWN0g5VjVaXCIgc3Ryb2tlPVwiI2QyMTQwNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZVxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gR3JvdXBzKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxLjI1ZW1cIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDIzIDIzXCIgZmlsbD1cIiNmY2QzOTRcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI0LDEwYzAsMy4wMi0xLjM0LDUuNzEtMy40NSw3LjU1QzIyLjA3LDE1Ljc5LDIzLDEzLjUxLDIzLDExYzAtNS41Mi00LjQ4LTEwLTEwLTEwYy0yLjUxLDAtNC43OSwwLjkzLTYuNTUsMi40NSBDOC4yOSwxLjM0LDEwLjk4LDAsMTQsMEMxOS41MiwwLDI0LDQuNDgsMjQsMTB6IE0xMiwyQzguOTgsMiw2LjI5LDMuMzQsNC40NSw1LjQ1QzYuMjEsMy45Myw4LjQ5LDMsMTEsM2M1LjUyLDAsMTAsNC40OCwxMCwxMCBjMCwyLjUxLTAuOTMsNC43OS0yLjQ1LDYuNTVDMjAuNjYsMTcuNzEsMjIsMTUuMDIsMjIsMTJDMjIsNi40OCwxNy41MiwyLDEyLDJ6IE0yMCwxNGMwLDUuNTItNC40OCwxMC0xMCwxMFMwLDE5LjUyLDAsMTQgQzAsOC40OCw0LjQ4LDQsMTAsNFMyMCw4LjQ4LDIwLDE0eiBNMTYsMTMuMzJoLTUuM1Y4SDkuM3Y1LjMySDR2MS4zMWg1LjNWMjBoMS4zOXYtNS4zN0gxNlYxMy4zMnpcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3Vwc1xyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5mdW5jdGlvbiBTdmdMb2dvKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTMuNTkgMTQuNjFcIj5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgLmIgeyBmaWxsOiAjZjRmMWYzOyB9XHJcbiAgICAgIC5jIHsgZmlsbDogI2UyYWQ4YzsgfVxyXG4gICAgICAuZCB7IGZpbGw6ICNlMWFhODg7IH1cclxuICAgICAgLmUgeyBmaWxsOiAjZjNmMWYyOyB9XHJcbiAgICAgIC5mIHsgZmlsbDogIzM1MzM4ZTsgfVxyXG4gICAgICAuZyB7IGZpbGw6ICMzNjM0OGU7IH1cclxuICAgICAgLmggeyBmaWxsOiAjZDdhNzg5OyB9XHJcbiAgICAgIC5pIHsgZmlsbDogI2ZkZDU5NDsgfVxyXG4gICAgICAuaiB7IGZpbGw6ICNlYWIyODg7IH1cclxuICAgICAgLmsgeyBmaWxsOiAjMzczNThlOyB9XHJcbiAgICAgIC5sIHsgZmlsbDogIzM4Mzc5MDsgfVxyXG4gICAgICAubSB7IGZpbGw6ICNmYmQzOTU7IH1cclxuICAgICAgLm4geyBmaWxsOiAjMzUzNDkwOyB9XHJcbiAgICAgIC5vIHsgZmlsbDogI2RmYTg4NzsgfVxyXG4gICAgICAucCB7IGZpbGw6ICNlM2FjODc7IH1cclxuICAgICAgLnEgeyBmaWxsOiAjZmNkMzk0OyB9XHJcbiAgICAgIC5yIHsgZmlsbDogI2Y5ZjhmOTsgfVxyXG4gICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPHBhdGggY2xhc3NOYW1lPVwiblwiIGQ9XCJNMy41OCwxMS40N2MtLjIzLS4wNi0uNDUtLjExLS42Ny0uMTktLjc0LS4yOC0xLjIyLS45OC0xLjIzLTEuNzcsMC0uNDYsMC0uOTEsMC0xLjM3LDAtLjE3LS4wNS0uMjUtLjIyLS4zMkMuNTUsNy40NywwLDYuNjgsMCw1LjczYzAtLjk3LC41NC0xLjc2LDEuNDgtMi4xMywuMTgtLjA3LC4yMS0uMTYsLjIxLS4zMywwLS40NCwwLS44OSwwLTEuMzNDMS42OSwuODYsMi41NCwwLDMuNjIsMCw1Ljc3LDAsNy45MSwwLDEwLjA1LDBjLjc4LDAsMS40MiwuMzYsMS43MiwxLjA4LC40MiwxLC43NCwyLjAzLDEuMSwzLjA1LC4yMSwuNjEsLjQyLDEuMjMsLjYzLDEuODQsLjI2LC43OC0uMDUsMS4zNC0uODUsMS41N3EtLjY3LC4xOS0uNjcsLjg5YzAsLjM0LDAsLjY4LDAsMS4wMywwLDEuMDYtLjc5LDEuOTEtMS44NSwxLjk1LS41LC4wMi0uNzksLjM3LTEuMTYsLjYtLjA1LC4wMy0uMDYsLjE0LS4wNiwuMjItLjE0LDEuMjMtLjc4LDIuMDYtMS43OCwyLjI5LTEuMTcsLjI4LTIuNDQtLjItMy4wMy0xLjIyLS4yNS0uNDQtLjM0LS45OC0uNDktMS40Ny0uMDQtLjEyLS4wMi0uMjUtLjA0LS4zN1pNLjkyLDUuMjRsLS4wNSwuMmMtLjIsMS4wMSwuNSwxLjc2LDEuNTYsMS42NywuMDIsLjEyLC4wNiwuMjQsLjA2LC4zNiwwLC42NiwwLDEuMzIsMCwxLjk4LDAsLjU0LC4zNSwuOTksLjgzLDEuMTIsLjI0LC4wNywuNDUsLjA3LC41LS4yNywuMDMtLjE4LC4xLS4zNSwuMTYtLjUyLC4xMy0uMjQsLjI0LS40OSwuNDEtLjcxLC41LS42NywxLjQ0LS41OSwxLjgzLC4xNSwuMDksLjE3LC4xOCwuMzUsLjI0LC41MywuMDcsLjIxLC4xOCwuMjUsLjM5LC4xOCwuNTgtLjE5LDEuMTgtLjM1LDEuNzYtLjUzLC42LS4xOSwxLjEyLS4xLDEuNTYsLjM2bC4yNSwuNzZjLjUzLS4xNSwuODEtLjU3LC43Ny0xLjEyLC4wMS0uNzYsLjAzLTEuNTMsLjA0LTIuMjksLjM1LS4xLC42OS0uMiwxLjA0LS4yOSwuNTgtLjE2LC42My0uMjYsLjM4LS44My0uNDktMS40NS0uOTctMi45MS0xLjQ3LTQuMzYtLjItLjU2LS42My0uODMtMS4yNC0uODItMiwuMDEtNCwwLTYuMDEsMC0uMTIsMC0uMjUsLjAyLS4zNywuMDNsLS4wNywuMDJoMGMtLjU3LC4wNy0uOTYsLjUtLjk3LDEuMTItLjAxLC43NywwLDEuNTUsMCwyLjMyLS4xNCwwLS4yNywwLS40MSwwLS41NSwuMDItMS4wMSwuMzktMS4xNiwuOTRoMFptOC4zNCw0LjkyYy0uMTUsMC0uMzItLjAxLS40NiwuMDMtLjc1LC4yMi0xLjUsLjQ2LTIuMjUsLjY4LS4zNywuMTEtLjUxLC4wMy0uNjYtLjMzLS4xMi0uMjgtLjIyLS41Ny0uMzYtLjg1LS4wNS0uMTEtLjE3LS4yMy0uMjgtLjI1LS4wNy0uMDItLjE3LC4xNC0uMjYsLjIybC0uMjYsLjU0Yy0uMDksLjI5LS4yMiwuNTgtLjI3LC44Ny0uMTQsLjczLDAsMS40MSwuNDYsMiwuNDksLjYyLDEuNDYsLjg5LDIuMiwuNiwuNjctLjI2LDEuMDQtLjk3LC45OC0xLjgyLDAtLjExLC4wNy0uMjgsLjE2LS4zNSwuMzQtLjI2LC43LS40NywxLjA0LS43MiwuMzMtLjI0LC4zMS0uNDctLjAzLS42M1pcIiAvPjxwYXRoIGNsYXNzTmFtZT1cInFcIiBkPVwiTTEwLjE0LDkuNzdjLS40NC0uNDctLjk2LS41Ni0xLjU2LS4zNi0uNTgsLjE5LTEuMTgsLjM1LTEuNzYsLjUzLS4yLC4wNi0uMzIsLjAzLS4zOS0uMTgtLjA2LS4xOC0uMTUtLjM2LS4yNC0uNTMtLjM4LS43NC0xLjMyLS44Mi0xLjgzLS4xNS0uMTYsLjIyLS4yNywuNDctLjQxLC43MS0uNTItLjA4LS43My0uMzEtLjczLS44NSwwLTEuNDksMC0yLjk5LDAtNC40OCwwLS43OS0uMDMtMS41OS0uMDUtMi4zOCwuMS0uMSwuMi0uMjEsLjMyLS4yOCwuMTgtLjEsLjM4LS4yNCwuNTctLjI0LDEuMzgtLjAyLDIuNzcsMCw0LjE1LDAtLjMsLjMtLjM2LC41NC0uMTcsLjczLC4yNiwuMjYsLjQ4LC4xLC43MS0uMDgsLjM0LS4yNywuOC0uMjQsMS4xNywuMDMsLjM3LC4yNywuNDgsLjI2LC43Ny0uMDdsMS4zNSwzLjkzYy0uMDksLjA0LS4xOCwuMDktLjI3LC4xMnEtLjY0LC4yMS0uNiwuOTFjLS4wMSwuNzYtLjAzLDEuNTMtLjA0LDIuMjktLjI5LC4yNS0uNjEsLjQyLTEuMDIsLjM2Wm0tMy4yNS00Ljc0bC0uMzQtLjY1Yy4wNy0uMDIsLjE4LS4wMywuMjItLjA4LC4wOS0uMTMsLjIzLS4yOSwuMjEtLjQxLS4wMi0uMTMtLjItLjMyLS4zMS0uMzMtLjUyLS4wNC0xLjA1LS4wNC0xLjU3LDAtLjEyLDAtLjMxLC4yMS0uMzEsLjMyLDAsLjE0LC4xMywuMywuMjQsLjQzLC4wNSwuMDYsLjE4LC4wNiwuMjQsLjA3LS4xMiwuMjYtLjI4LC40OS0uMzQsLjc0LS4xMiwuNTksLjQ3LDEuMzUsMS40LDEuMDYsLjA3LC4wMywuMTQsLjA4LC4yMSwuMDgsLjczLDAsMS40NiwwLDIuMTksMCwuMDcsMCwuMTQtLjA1LC4yMS0uMDgsLjg5LC4xOSwxLjQxLS4yMywxLjQxLTEuMTQsMC0uMywwLS41OSwwLS44OSwwLS42MS0uNDEtMS4wNC0uOTgtMS4wNS0uNTktLjAxLTEuMDEsLjQxLTEuMDMsMS4wMy0uMDEsLjI5LS4wMSwuNTktLjAyLC44OWgtMS40M1ptLjAxLDIuMzJjLjIzLS4xLC40LS4yMiwuMi0uNDYtLjIyLS4yNi0uNS0uMzUtLjgzLS4yNy0uMzIsLjA3LS41MywuMjgtLjU4LC42LS4wMiwuMDksLjExLC4yMywuMiwuMzIsLjA4LC4xLC4yNCwuMTUsLjI5LC4yNSwuMzIsLjY0LC45NywxLjAyLDEuNjQsLjk1LC4zNi0uMDQsLjU1LS4yLC41MS0uNDYtLjA0LS4zMi0uMjYtLjM4LS41NS0uMzYtLjQyLC4wMy0uNjktLjE1LS44Ny0uNTdaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJyXCIgZD1cIk0xMi4wNyw2LjA5Yy0uNDUtMS4zMS0uOS0yLjYyLTEuMzUtMy45MywuMDQtLjI4LS4xLS40Ny0uMzItLjYyLS43My0uNDktMS40NS0uNDMtMi4xNiwuMDEtMS4zOCwwLTIuNzctLjAxLTQuMTUsMC0uMTksMC0uMzksLjE0LS41NywuMjQtLjEyLC4wNy0uMjEsLjE5LS4zMiwuMjgsLjAyLS40MiwwLS44NSwuMjYtMS4yMWgwbC4wNy0uMDJjLjEyLDAsLjI1LS4wMywuMzctLjAzLDIsMCw0LDAsNi4wMSwwLC42MSwwLDEuMDQsLjI2LDEuMjQsLjgyLC41MSwxLjQ1LC45OCwyLjksMS40Nyw0LjM2bC0uNTUsLjFaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJjXCIgZD1cIk0zLjQ2LC44NmMtLjI3LC4zNy0uMjQsLjc5LS4yNiwxLjIxLC4wMiwuNzksLjA0LDEuNTksLjA1LDIuMzgsMCwxLjQ5LDAsMi45OSwwLDQuNDgsMCwuNTMsLjIxLC43NywuNzMsLjg1LS4wNSwuMTctLjEzLC4zNC0uMTYsLjUyLS4wNSwuMzMtLjI1LC4zMy0uNSwuMjctLjQ4LS4xMy0uODItLjU4LS44My0xLjEyLDAtLjY2LDAtMS4zMiwwLTEuOTgsMC0uMTItLjA0LS4yNC0uMDYtLjM2LC4wMi0uMTIsLjA3LS4yNCwuMDctLjM2LDAtLjY5LDAtMS4zOCwwLTIuMDZ2LS4zOWMwLS43Ny0uMDEtMS41NSwwLTIuMzIsMC0uNjIsLjM5LTEuMDUsLjk3LTEuMTJaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJpXCIgZD1cIk00LjczLDEwLjIxYy4wOS0uMTgsLjE3LS4zNiwuMjYtLjU0LC4wOSwuMTEsLjIsLjIsLjI1LC4zMiwuMTEsLjI3LC4xOCwuNTYsLjI4LC44NCwuMjMsLjU5LC40OSwuNywxLjA3LC40NywuNTQtLjIyLDEuMDctLjQ1LDEuNjEtLjY2LC4zNS0uMTMsLjcxLS4yMiwxLjA2LS4zMy0uMTIsLjExLS4yMSwuMjUtLjM1LC4zNC0uMzUsLjIyLS43MSwuNDEtMS4wNiwuNjEtLjIsLjExLS4zLC4yMy0uMjYsLjUxLC4wNywuNSwwLDEuMDMtLjQ1LDEuMzYtLjQ0LC4zMi0uOTIsLjI0LTEuMzgtLjAxLS41Ny0uMzItLjkyLS44Mi0xLjAxLTEuNDYtLjA3LS40OC0uMDItLjk3LS4wMy0xLjQ1WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwib1wiIGQ9XCJNNC43MywxMC4yMWMwLC40OC0uMDMsLjk3LC4wMywxLjQ1LC4wOSwuNjQsLjQzLDEuMTQsMS4wMSwxLjQ2LC40NiwuMjYsLjk0LC4zMywxLjM4LC4wMSwuNDUtLjMzLC41Mi0uODUsLjQ1LTEuMzYtLjA0LS4yOCwuMDYtLjQsLjI2LS41MSwuMzUtLjIsLjcyLS4zOSwxLjA2LS42MSwuMTMtLjA4LC4yMy0uMjIsLjM1LS4zNHYtLjE0Yy4zMywuMTYsLjM1LC4zOCwuMDIsLjYzLS4zNCwuMjUtLjcsLjQ3LTEuMDQsLjcyLS4wOSwuMDctLjE3LC4yMy0uMTYsLjM1LC4wNiwuODUtLjMxLDEuNTYtLjk4LDEuODItLjc0LC4yOS0xLjcxLC4wMi0yLjItLjYtLjQ3LS41OS0uNi0xLjI3LS40Ni0yLC4wNi0uMywuMTgtLjU4LC4yNy0uODdaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJtXCIgZD1cIk0yLjQ5LDQuNjljMCwuNjksMCwxLjM4LDAsMi4wNiwwLC4xMi0uMDQsLjI0LS4wNywuMzYtMS4wNiwuMDktMS43Ni0uNjYtMS41Ni0xLjY3bC4wNS0uMmgwYy40Ny0uMzMsLjk5LS41MiwxLjU3LS41NVptLS40OCwxLjA0YzAtLjA3LC4wMS0uMTQsMC0uMi0uMDMtLjEyLS4wOC0uMjMtLjEyLS4zNC0uMTIsLjA2LS4yNywuMS0uMzYsLjItLjA4LC4wOC0uMTEsLjIyLS4xMiwuMzQtLjAyLC4yNCwuMjIsLjU2LC40MSwuNTUsLjM2LS4wMiwuMTMtLjMxLC4yLS40NywwLS4wMiwwLS4wNCwwLS4wN1pcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImVcIiBkPVwiTTkuMjYsMTAuMTd2LjE0Yy0uMzUsLjExLS43MSwuMi0xLjA1LC4zMy0uNTQsLjItMS4wNywuNDQtMS42MSwuNjYtLjU5LC4yNC0uODUsLjEzLTEuMDctLjQ3LS4xLS4yOC0uMTctLjU3LS4yOC0uODQtLjA1LS4xMi0uMTctLjIyLS4yNS0uMzIsLjA5LS4wOCwuMTktLjIzLC4yNi0uMjIsLjExLC4wMiwuMjMsLjE0LC4yOCwuMjUsLjE0LC4yNywuMjQsLjU3LC4zNiwuODUsLjE1LC4zNiwuMywuNDQsLjY2LC4zMywuNzUtLjIzLDEuNS0uNDYsMi4yNS0uNjgsLjE0LS4wNCwuMzEtLjAyLC40Ni0uMDNaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJkXCIgZD1cIk0xMi4wNyw2LjA5bC41NS0uMWMuMjUsLjU3LC4yLC42Ny0uMzgsLjgzLS4zNSwuMS0uNjksLjItMS4wNCwuMjlxLS4wNC0uNywuNi0uOTFjLjA5LS4wMywuMTgtLjA4LC4yNy0uMTJaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJiXCIgZD1cIk0yLjQ5LDQuNjljLS41OCwuMDMtMS4xLC4yMi0xLjU3LC41NSwuMTUtLjU0LC42MS0uOTIsMS4xNi0uOTQsLjE0LDAsLjI3LDAsLjQxLDAsMCwuMTMsMCwuMjYsMCwuMzlaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJoXCIgZD1cIk0xMC4xNCw5Ljc3Yy40LC4wNiwuNzMtLjExLDEuMDItLjM2LC4wNCwuNTUtLjI0LC45Ni0uNzcsMS4xMmwtLjI1LS43NlpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImJcIiBkPVwiTS45Miw1LjI0bC0uMDUsLjIsLjA1LS4yWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwiY1wiIGQ9XCJNMy41MywuODVsLS4wNywuMDIsLjA3LS4wMlpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImZcIiBkPVwiTTguMzIsNS4wNGMwLS4zLDAtLjU5LC4wMi0uODksLjAyLS42MiwuNDQtMS4wNSwxLjAzLTEuMDMsLjU3LC4wMSwuOTcsLjQ0LC45OCwxLjA1LDAsLjMsMCwuNTksMCwuODksMCwuOTEtLjUzLDEuMzMtMS40MSwxLjE0LS40My0uMjYtLjYxLS42Ni0uNjEtMS4xNVpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImdcIiBkPVwiTTYuMzIsNi4xOWMtLjkyLC4yOS0xLjUyLS40Ny0xLjQtMS4wNiwuMDUtLjI1LC4yMi0uNDgsLjM0LS43NC0uMDYtLjAyLS4xOS0uMDEtLjI0LS4wNy0uMTEtLjEyLS4yNS0uMjktLjI0LS40MywwLS4xMiwuMi0uMzIsLjMxLS4zMiwuNTItLjA0LDEuMDUtLjA0LDEuNTcsMCwuMTIsMCwuMywuMiwuMzEsLjMzLC4wMiwuMTMtLjEyLC4yOS0uMjEsLjQxLS4wNCwuMDUtLjE0LC4wNS0uMjIsLjA4bC4zNCwuNjVjLjA4LC41Mi0uMTUsLjg4LS41NywxLjE1WlwiIC8+PHBhdGggY2xhc3NOYW1lPVwia1wiIGQ9XCJNNi45LDcuMzZjLjE4LC40MiwuNDQsLjYsLjg3LC41NywuMjktLjAyLC41MSwuMDQsLjU1LC4zNiwuMDQsLjI3LS4xNSwuNDMtLjUxLC40Ni0uNjcsLjA3LTEuMzItLjMyLTEuNjQtLjk1LS4wNS0uMTEtLjItLjE2LS4yOS0uMjUtLjA4LS4wOS0uMjEtLjIzLS4yLS4zMiwuMDUtLjMyLC4yNy0uNTIsLjU4LS42LC4zMy0uMDgsLjYxLDAsLjgzLC4yNywuMiwuMjQsLjA0LC4zNi0uMiwuNDZaXCIgLz48cGF0aCBjbGFzc05hbWU9XCJsXCIgZD1cIk04LjIzLDEuNTVjLjcyLS40NSwxLjQ0LS41MSwyLjE2LS4wMSwuMjIsLjE1LC4zNiwuMzQsLjMyLC42Mi0uMywuMzMtLjQxLC4zNC0uNzcsLjA3LS4zNy0uMjctLjgyLS4zLTEuMTctLjAzLS4yMywuMTgtLjQ1LC4zNC0uNzEsLjA4LS4xOS0uMTktLjEzLS40MywuMTctLjczWlwiIC8+PHBhdGggY2xhc3NOYW1lPVwicFwiIGQ9XCJNNi4zMiw2LjE5Yy40Mi0uMjcsLjY1LS42MywuNTctMS4xNWgxLjQzYzAsLjUsLjE4LC44OSwuNjEsMS4xNS0uMDcsLjAzLS4xNCwuMDgtLjIxLC4wOC0uNzMsMC0xLjQ2LDAtMi4xOSwwLS4wNywwLS4xNC0uMDUtLjIxLS4wOFpcIiAvPjxwYXRoIGNsYXNzTmFtZT1cImpcIiBkPVwiTTIuMDEsNS43M3MwLC4wNSwwLC4wN2MtLjA2LC4xNiwuMTYsLjQ1LS4yLC40Ny0uMTksLjAxLS40My0uMy0uNDEtLjU1LDAtLjEyLC4wNC0uMjYsLjEyLS4zNCwuMDktLjA5LC4yNC0uMTMsLjM2LS4yLC4wNCwuMTEsLjA5LC4yMywuMTIsLjM0LC4wMiwuMDYsMCwuMTQsMCwuMlpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnTG9nbztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdmdNZW51KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgIGNsYXNzTmFtZT1cIm1lbnVfc3ZnX19mZWF0aGVyIG1lbnVfc3ZnX19mZWF0aGVyLW1lbnVcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMyAxMmgxOE0zIDZoMThNMyAxOGgxOFwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z01lbnVcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBTdmdTZWFyY2gocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTggMThcIiBmaWxsPVwibm9uZVwiIHsuLi5wcm9wc30+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xOCAxNi41bC01LjE0LTUuMThoLS4zNWE3IDcgMCAxMC0xLjE5IDEuMTl2LjM1TDE2LjUgMThsMS41LTEuNXpNMTIgN0E1IDUgMCAxMTIgN2E1IDUgMCAwMTEwIDB6XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnU2VhcmNoXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gU3ZnU3Bpbm5lcihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuOTE2NjY2NjY2NjY2NjY2NnNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17NDd9XHJcbiAgICAgICAgeT17MjR9XHJcbiAgICAgICAgcng9ezN9XHJcbiAgICAgICAgcnk9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezZ9XHJcbiAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC44MzMzMzMzMzMzMzMzMzM0c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg2MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjc1c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjY2NjY2NjY2NjY2NjY2NjZzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDEyMCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjU4MzMzMzMzMzMzMzMzMzRzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE1MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjVzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjQxNjY2NjY2NjY2NjY2NjdzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDIxMCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjMzMzMzMzMzMzMzMzMzMzNzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDI0MCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjI1c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgICAgPHJlY3RcclxuICAgICAgICB4PXs0N31cclxuICAgICAgICB5PXsyNH1cclxuICAgICAgICByeD17M31cclxuICAgICAgICByeT17Nn1cclxuICAgICAgICB3aWR0aD17Nn1cclxuICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAgNTAgNTApXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC4xNjY2NjY2NjY2NjY2NjY2NnNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICAgIDxyZWN0XHJcbiAgICAgICAgeD17NDd9XHJcbiAgICAgICAgeT17MjR9XHJcbiAgICAgICAgcng9ezN9XHJcbiAgICAgICAgcnk9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezZ9XHJcbiAgICAgICAgaGVpZ2h0PXsxMn1cclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJyb3RhdGUoMzAwIDUwIDUwKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuMDgzMzMzMzMzMzMzMzMzMzNzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgICA8cmVjdFxyXG4gICAgICAgIHg9ezQ3fVxyXG4gICAgICAgIHk9ezI0fVxyXG4gICAgICAgIHJ4PXszfVxyXG4gICAgICAgIHJ5PXs2fVxyXG4gICAgICAgIHdpZHRoPXs2fVxyXG4gICAgICAgIGhlaWdodD17MTJ9XHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwicm90YXRlKDMzMCA1MCA1MClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdTcGlubmVyXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVGFncyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiBmaWxsPVwiI2ZjZDM5NFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yLjEyMjY0IDEyLjgxNkMyLjQxMDE4IDEzLjgxODYgMy4xODI5NSAxNC41OTE0IDQuNzI4NDggMTYuMTM2OUw2LjU1ODEyIDE3Ljk2NjVDOS4yNDcxMSAyMC42NTU1IDEwLjU5MTYgMjIgMTIuMjYyMyAyMkMxMy45MzMgMjIgMTUuMjc3NSAyMC42NTU1IDE3Ljk2NjUgMTcuOTY2NUMyMC42NTU1IDE1LjI3NzUgMjIgMTMuOTMzIDIyIDEyLjI2MjNDMjIgMTAuNTkxNiAyMC42NTU1IDkuMjQ3MTEgMTcuOTY2NSA2LjU1ODEyTDE2LjEzNjkgNC43Mjg0OEMxNC41OTE0IDMuMTgyOTUgMTMuODE4NiAyLjQxMDE4IDEyLjgxNiAyLjEyMjY0QzExLjgxMzQgMS44MzUwOSAxMC43NDg1IDIuMDgwODMgOC42MTg3NSAyLjU3MjMxTDcuMzkwNTcgMi44NTU3NEM1LjU5ODggMy4yNjkyMiA0LjcwMjkyIDMuNDc1OTcgNC4wODk0NCA0LjA4OTQ0QzMuNDc1OTcgNC43MDI5MiAzLjI2OTIyIDUuNTk4ODEgMi44NTU3NCA3LjM5MDU3TDIuNTcyMzEgOC42MTg3NUMyLjA4MDgzIDEwLjc0ODUgMS44MzUwOSAxMS44MTM0IDIuMTIyNjQgMTIuODE2Wk0xMC4xMjM0IDcuMjcwOThDMTAuOTExIDguMDU4NTYgMTAuOTExIDkuMzM1NDkgMTAuMTIzNCAxMC4xMjMxQzkuMzM1ODEgMTAuOTEwNyA4LjA1ODg4IDEwLjkxMDcgNy4yNzEyOSAxMC4xMjMxQzYuNDgzNzEgOS4zMzU0OSA2LjQ4MzcxIDguMDU4NTYgNy4yNzEyOSA3LjI3MDk4QzguMDU4ODggNi40ODMzOSA5LjMzNTgxIDYuNDgzMzkgMTAuMTIzNCA3LjI3MDk4Wk0xOS4wNTExIDEyLjA1MTFMMTIuMDcyMSAxOS4wMzAzQzExLjc3OTIgMTkuMzIzMiAxMS4zMDQzIDE5LjMyMzIgMTEuMDExNCAxOS4wMzAzQzEwLjcxODUgMTguNzM3NSAxMC43MTg1IDE4LjI2MjYgMTEuMDExNCAxNy45Njk3TDE3Ljk5MDQgMTAuOTkwNEMxOC4yODMzIDEwLjY5NzUgMTguNzU4MiAxMC42OTc1IDE5LjA1MTEgMTAuOTkwNEMxOS4zNDQgMTEuMjgzMyAxOS4zNDQgMTEuNzU4MiAxOS4wNTExIDEyLjA1MTFaXCIgZmlsbD1cIiNmY2QzOTRcIj48L3BhdGg+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3NcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBVc2Vycyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMjIgMjJcIiBmaWxsPVwiI2ZjZDM5NFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01IDkuNUM1IDcuMDE0NzIgNy4wMTQ3MiA1IDkuNSA1QzExLjk4NTMgNSAxNCA3LjAxNDcyIDE0IDkuNUMxNCAxMS45ODUzIDExLjk4NTMgMTQgOS41IDE0QzcuMDE0NzIgMTQgNSAxMS45ODUzIDUgOS41WlwiIGZpbGw9XCIjZmNkMzk0XCI+PC9wYXRoPiA8cGF0aCBkPVwiTTE0LjM2NzUgMTIuMDYzMkMxNC4zMjIgMTIuMTQ5NCAxNC4zNDEzIDEyLjI1NjkgMTQuNDE5NiAxMi4zMTQ5QzE1LjAwMTIgMTIuNzQ1NCAxNS43MjA5IDEzIDE2LjUgMTNDMTguNDMzIDEzIDIwIDExLjQzMyAyMCA5LjVDMjAgNy41NjcgMTguNDMzIDYgMTYuNSA2QzE1LjcyMDkgNiAxNS4wMDEyIDYuMjU0NiAxNC40MTk2IDYuNjg1MTNDMTQuMzQxMyA2Ljc0MzEzIDE0LjMyMiA2Ljg1MDU4IDE0LjM2NzUgNi45MzY3OUMxNC43NzE0IDcuNzAyMTkgMTUgOC41NzQ0IDE1IDkuNUMxNSAxMC40MjU2IDE0Ljc3MTQgMTEuMjk3OCAxNC4zNjc1IDEyLjA2MzJaXCIgZmlsbD1cIiNmY2QzOTRcIj48L3BhdGg+IDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk00LjY0MTE1IDE1LjY5OTNDNS44NzM1MSAxNS4xNjQ0IDcuNDkwNDUgMTUgOS40OTk5NSAxNUMxMS41MTEyIDE1IDEzLjEyOTMgMTUuMTY0NyAxNC4zNjIxIDE1LjcwMDhDMTUuNzA1IDE2LjI4NDcgMTYuNTIxMiAxNy4yNzkzIDE2Ljk0OSAxOC42ODM2QzE3LjE0OTUgMTkuMzQxOCAxNi42NTUxIDIwIDE1Ljk3MzggMjBIMy4wMjgwMUMyLjM0NTg5IDIwIDEuODUwNDUgMTkuMzQwOCAyLjA1MTU3IDE4LjY4MTRDMi40Nzk5NCAxNy4yNzY5IDMuMjk3MzggMTYuMjgyNiA0LjY0MTE1IDE1LjY5OTNaXCIgZmlsbD1cIiNmY2QzOTRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNMTQuODE4NSAxNC4wMzY0QzE0LjQwNDUgMTQuMDYyMSAxNC4zODAyIDE0LjYxODMgMTQuNzYwNiAxNC43ODM3VjE0Ljc4MzdDMTUuODAzIDE1LjIzNyAxNi41ODc5IDE1LjkwNDMgMTcuMTUwOCAxNi43NTZDMTcuNjEyNyAxNy40NTQ5IDE4LjMzIDE4IDE5LjE2NzcgMThIMjAuOTQ4M0MyMS42NTU1IDE4IDIyLjE3MTUgMTcuMjk3MyAyMS45MjI3IDE2LjYxMDhDMjEuOTA4NCAxNi41NzEzIDIxLjg5MzUgMTYuNTMyMSAyMS44NzgxIDE2LjQ5MzJDMjEuNTM1NyAxNS42Mjg2IDIwLjk0ODggMTQuOTkyMSAyMC4wNzk4IDE0LjU4NjRDMTkuMjYzOSAxNC4yMDU1IDE4LjI0MjUgMTQuMDQ4MyAxNy4wMzkyIDE0LjAwMDhMMTcuMDE5NCAxNEgxNi45OTk3QzE2LjI5MDkgMTQgMTUuNTUwNiAxMy45OTA5IDE0LjgxODUgMTQuMDM2NFpcIiBmaWxsPVwiI2ZjZDM5NFwiPjwvcGF0aD5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNcclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFN2Z1dvcmxkKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNOCAwYTggOCAwIDEwMCAxNkE4IDggMCAwMDggMHpNNyAxNC4zMmE2LjQgNi40IDAgMDEtNS4yMy03Ljc1TDYgMTAuNjh2LjhjMCAuODguMTIgMS4zMiAxIDEuMzJ2MS41MnptNS43Mi0yYy0uMi0uNjYtMS0xLjMyLTEuNzItMS4zMmgtMVY5YzAtLjQ0LS41Ni0xLTEtMUg1VjZoMWMuNDQgMCAxLS41NiAxLTFWNGgyYy44OCAwIDEuNC0uNzIgMS40LTEuNnYtLjMzYTYuNCA2LjQgMCAwMTIuMzIgMTAuMjR2LjAxelwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z1dvcmxkXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICcuL0FsZXJ0J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93RG93biB9IGZyb20gJy4vQXJyb3dEb3duJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93VXAgfSBmcm9tICcuL0Fycm93VXAnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2UgfSBmcm9tICcuL0Nsb3NlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tICcuL0xvZ28nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWVudSB9IGZyb20gJy4vTWVudSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL1NlYXJjaCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmxkIH0gZnJvbSAnLi9Xb3JsZCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWdzIH0gZnJvbSAnLi9UYWcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlcnMgfSBmcm9tICcuL1VzZXJzJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyb3VwcyB9IGZyb20gJy4vR3JvdXAnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWRtaW4gfSBmcm9tICcuL0FkbWluJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlbGV0ZSB9IGZyb20gJy4vRGVsZXRlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFkZGNvbW1lbnQgfSBmcm9tICcuL0FkZGNvbW1lbnQnIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL21vZGFsJ1xyXG5pbXBvcnQgeyBDbG9zZSB9IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2RhbC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTW9kYWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgeyByZWYsIHNldElzQ29tcG9uZW50VmlzaWJsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzdHlsZXMubW9kYWwsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxEaWFsb2d9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0SXNDb21wb25lbnRWaXNpYmxlKChpc09wZW4pID0+ICFpc09wZW4pfT5cclxuICAgICAgICAgICAgPENsb3NlIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsXCI6IFwibW9kYWxfbW9kYWxfXzJaM1JBXCIsXG5cdFwibW9kYWxEaWFsb2dcIjogXCJtb2RhbF9tb2RhbERpYWxvZ19fMlBBdWFcIixcblx0XCJjbG9zZUJ1dHRvblwiOiBcIm1vZGFsX2Nsb3NlQnV0dG9uX18yT005d1wiXG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiB1c2VDb21wb25lbnRWaXNpYmxlKGluaXRpYWxJc1Zpc2libGUpIHtcclxuICBjb25zdCBbaXNDb21wb25lbnRWaXNpYmxlLCBzZXRJc0NvbXBvbmVudFZpc2libGVdID0gdXNlU3RhdGUoaW5pdGlhbElzVmlzaWJsZSlcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCB0b2dnbGVSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlSGlkZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHJlZi5jdXJyZW50ICYmXHJcbiAgICAgICFyZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICF0b2dnbGVSZWY/LmN1cnJlbnQ/LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICkge1xyXG4gICAgICBzZXRJc0NvbXBvbmVudFZpc2libGUoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUsIHRydWUpXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlSGlkZSwgdHJ1ZSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVIaWRlLCB0cnVlKVxyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSwgdHJ1ZSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4geyByZWYsIHRvZ2dsZVJlZiwgaXNDb21wb25lbnRWaXNpYmxlLCBzZXRJc0NvbXBvbmVudFZpc2libGUgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDb21wb25lbnRWaXNpYmxlXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXHJcblxyXG5pbXBvcnQgdXNlQ29tcG9uZW50VmlzaWJsZSBmcm9tICcuLi9ob29rcy91c2VDb21wb25lbnRWaXNpYmxlJ1xyXG5pbXBvcnQgTW9kYWxDb250ZXh0IGZyb20gJy4uL3N0b3JlL21vZGFsJ1xyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9zdG9yZS9hdXRoJ1xyXG5pbXBvcnQgeyBGZXRjaFByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvZmV0Y2gnXHJcbmltcG9ydCB7IFRhZ1Byb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvdGFnJ1xyXG5pbXBvcnQgeyBHcm91cEF1dGhQcm92aWRlciB9IGZyb20gJy4uL3N0b3JlL2dyb3VwYXV0aCdcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnXHJcbmltcG9ydCBBdXRoRm9ybXMgZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoLWZvcm1zJ1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZXMvdmFyaWFibGVzLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvbnByb2dyZXNzLmNzcydcclxuaW1wb3J0ICdyZWFjdC10YWdzaW5wdXQvcmVhY3QtdGFnc2lucHV0LmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvYXBwLmNzcydcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSlcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVmLFxyXG4gICAgaXNDb21wb25lbnRWaXNpYmxlLFxyXG4gICAgc2V0SXNDb21wb25lbnRWaXNpYmxlXHJcbiAgfSA9IHVzZUNvbXBvbmVudFZpc2libGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IFthdXRoU2NyZWVuLCBzZXRBdXRoU2NyZWVuXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbXBvbmVudFZpc2libGUgPSAoY29tcG9uZW50VmlzaWJsZSwgYXV0aFNjcmVlbikgPT4ge1xyXG4gICAgc2V0SXNDb21wb25lbnRWaXNpYmxlKGNvbXBvbmVudFZpc2libGUpXHJcbiAgICBzZXRBdXRoU2NyZWVuKGF1dGhTY3JlZW4pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyByZWYsIGhhbmRsZUNvbXBvbmVudFZpc2libGUsIHNldElzQ29tcG9uZW50VmlzaWJsZSB9fVxyXG4gICAgPlxyXG4gICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIDxGZXRjaFByb3ZpZGVyPlxyXG4gICAgICAgICAgPEdyb3VwQXV0aFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8VGFnUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgIHtpc0NvbXBvbmVudFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPE1vZGFsPlxyXG4gICAgICAgICAgICAgICAgICA8QXV0aEZvcm1zIHNjcmVlbj17YXV0aFNjcmVlbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UYWdQcm92aWRlcj5cclxuICAgICAgICAgIDwvR3JvdXBBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPC9GZXRjaFByb3ZpZGVyPlxyXG4gICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IEF1dGhDb250ZXh0XHJcblxyXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2F1dGhTdGF0ZSwgc2V0QXV0aFN0YXRlXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgY29uc3QgdXNlckluZm8gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKVxyXG4gICAgY29uc3QgZXhwaXJlc0F0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V4cGlyZXNBdCcpXHJcblxyXG4gICAgc2V0QXV0aFN0YXRlKHtcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIGV4cGlyZXNBdCxcclxuICAgICAgdXNlckluZm86IHVzZXJJbmZvID8gSlNPTi5wYXJzZSh1c2VySW5mbykgOiB7fVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgc2V0QXV0aEluZm8gPSAoeyB0b2tlbiwgdXNlckluZm8sIGV4cGlyZXNBdCB9KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVzQXQnLCBleHBpcmVzQXQpXHJcblxyXG4gICAgc2V0QXV0aFN0YXRlKHtcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHVzZXJJbmZvLFxyXG4gICAgICBleHBpcmVzQXRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJbmZvJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdleHBpcmVzQXQnKVxyXG4gICAgc2V0QXV0aFN0YXRlKHt9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xyXG4gICAgaWYgKCFhdXRoU3RhdGUudG9rZW4gfHwgIWF1dGhTdGF0ZS5leHBpcmVzQXQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwIDwgYXV0aFN0YXRlLmV4cGlyZXNBdFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNBZG1pbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBhdXRoU3RhdGUudXNlckluZm8/LnJvbGUgPT09ICdhZG1pbidcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBhdXRoU3RhdGUsXHJcbiAgICAgICAgc2V0QXV0aFN0YXRlOiAoYXV0aEluZm8pID0+IHNldEF1dGhJbmZvKGF1dGhJbmZvKSxcclxuICAgICAgICBsb2dvdXQsXHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxyXG4gICAgICAgIGlzQWRtaW5cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IEF1dGhDb250ZXh0LCBBdXRoUHJvdmlkZXIgfVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9hdXRoJ1xyXG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vdXRpbC9mZXRjaGVyJ1xyXG5cclxuY29uc3QgRmV0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IEZldGNoQ29udGV4dFxyXG5cclxuY29uc3QgRmV0Y2hQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGF1dGhTdGF0ZSB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuXHJcbiAgY29uc3QgYXV0aEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkxcclxuICB9KVxyXG5cclxuICBhdXRoQXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgKGNvbmZpZykgPT4ge1xyXG4gICAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gXHJcbiAgICAgIHJldHVybiBjb25maWdcclxuICAgIH0sXHJcbiAgICAoZXJyb3IpID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgYXV0aEF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvZGUgPSBlcnJvciAmJiBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA6IDBcclxuICAgICAgaWYgKGNvZGUgPT09IDQwMSB8fCBjb2RlID09PSA0MDMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgY29kZScsIGNvZGUpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGF1dGhBeGlvc1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgRmV0Y2hDb250ZXh0LCBGZXRjaFByb3ZpZGVyIH1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHcm91cEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBHcm91cEF1dGhDb250ZXh0O1xyXG5cclxuY29uc3QgR3JvdXBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVHcm91cCwgc2V0VmFsdWVHcm91cF0gPSB1c2VTdGF0ZSgnZGVmYXVsdFZhbHVlJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBLaeG7g20gdHJhIG7hur91IMSRYW5nIOG7nyBwaMOtYSBjbGllbnRcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnR3JvdXBOYW1lJyk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlR3JvdXAoc3RvcmVkVmFsdWUgPyBKU09OLnBhcnNlKHN0b3JlZFZhbHVlKSA6ICdkZWZhdWx0VmFsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0dyb3VwTmFtZScsIEpTT04uc3RyaW5naWZ5KHZhbHVlR3JvdXApKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdmFsdWVHcm91cF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHZhbHVlPXt7IHZhbHVlR3JvdXAsIHNldFZhbHVlR3JvdXAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEdyb3VwQXV0aENvbnRleHQsIEdyb3VwQXV0aFByb3ZpZGVyIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVDb250ZXh0XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBwdWJsaWNGZXRjaCB9IGZyb20gJy4uL3V0aWwvZmV0Y2hlcidcclxuXHJcbmNvbnN0IFRhZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgeyBQcm92aWRlciB9ID0gVGFnQ29udGV4dFxyXG5cclxuY29uc3QgVGFnUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RhZ1N0YXRlLCBzZXRUYWdTdGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3B1bGFyVGFncyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwdWJsaWNGZXRjaC5nZXQoJy90YWdzL3BvcHVsZXJ0YWdzJylcclxuICAgICAgc2V0VGFnU3RhdGUoZGF0YSlcclxuICAgIH1cclxuICAgIGZldGNoUG9wdWxhclRhZ3MoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPFByb3ZpZGVyIHZhbHVlPXt7IHRhZ1N0YXRlIH19PntjaGlsZHJlbn08L1Byb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgeyBUYWdDb250ZXh0LCBUYWdQcm92aWRlciB9XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuLy8gY29uc3QgYmFzZVVSTCA9XHJcbi8vICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxuLy8gICAgID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGknXHJcbi8vICAgICA6IGBodHRwczovLyR7cHJvY2Vzcy5lbnYuU0lURV9OQU1FfS9hcGlgXHJcbi8vIGNvbnN0IGJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaSdcclxuY29uc3QgYmFzZVVSTCA9ICdodHRwczovL2Fza2VtLXNlcnZlci5vbnJlbmRlci5jb20vYXBpJ1xyXG5jb25zdCBwdWJsaWNGZXRjaCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTFxyXG59KVxyXG5cclxuZXhwb3J0IHsgcHVibGljRmV0Y2gsIGJhc2VVUkwgfVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9