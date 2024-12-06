webpackHotUpdate_N_E("pages/_error",{

/***/ "./components/errorpage/ErrorPage.module.css":
/*!***************************************************!*\
  !*** ./components/errorpage/ErrorPage.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ErrorPage.module.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/errorpage/ErrorPage.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ErrorPage.module.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/errorpage/ErrorPage.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ErrorPage.module.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/errorpage/ErrorPage.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/errorpage/index.js":
/*!***************************************!*\
  !*** ./components/errorpage/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorPage.module.css */ "./components/errorpage/ErrorPage.module.css");
/* harmony import */ var _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
  _jsxFileName = "W:\\ClientAskem\\components\\errorpage\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// pages/_error.js


 // Optional: Import custom styles for your error page

var ErrorPage = function ErrorPage(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx("div", {
    className: _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.errorContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.errorTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, statusCode ? "Error ".concat(statusCode) : 'An error occurred'), __jsx("p", {
    className: _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.errorMessage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, statusCode ? "An error ".concat(statusCode, " occurred on the server.") : 'An error occurred on the client.'), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: _ErrorPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.homeLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Go back to Home")));
};
_c = ErrorPage;
ErrorPage.getInitialProps = function (_ref2) {
  var res = _ref2.res,
    err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);
var _c;
$RefreshReg$(_c, "ErrorPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=W%3A%5CClientAskem%5Cpages%5C_error.js!./":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=W%3A%5CClientAskem%5Cpages%5C_error.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/errorpage/ErrorPage.module.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/errorpage/ErrorPage.module.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* pages/ErrorPage.module.css */\r\n.ErrorPage_errorContainer__2jlel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    background-color: var(--BlackBG-100);\r\n    text-align: center;\r\n}\r\n\r\n.ErrorPage_errorTitle__3OyEt {\r\n    font-size: 3rem;\r\n    color: #ff5555;\r\n    font-weight: bolder;\r\n}\r\n\r\n.ErrorPage_errorMessage__3ZoIY {\r\n    margin: 1rem 0;\r\n    font-size: 1.6rem;\r\n    color: var(--TextWhite-200);\r\n}\r\n\r\n.ErrorPage_homeLink__3TJyV {\r\n    font-size: 1rem;\r\n    color: var(--TextWhite-200);\r\n    text-decoration: none;\r\n}\r\n\r\n.ErrorPage_homeLink__3TJyV:hover {\r\n\r\n    color: var(--blue-500);\r\n}", "",{"version":3,"sources":["webpack://components/errorpage/ErrorPage.module.css"],"names":[],"mappings":"AAAA,+BAA+B;AAC/B;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;;IAEI,sBAAsB;AAC1B","sourcesContent":["/* pages/ErrorPage.module.css */\r\n.errorContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    background-color: var(--BlackBG-100);\r\n    text-align: center;\r\n}\r\n\r\n.errorTitle {\r\n    font-size: 3rem;\r\n    color: #ff5555;\r\n    font-weight: bolder;\r\n}\r\n\r\n.errorMessage {\r\n    margin: 1rem 0;\r\n    font-size: 1.6rem;\r\n    color: var(--TextWhite-200);\r\n}\r\n\r\n.homeLink {\r\n    font-size: 1rem;\r\n    color: var(--TextWhite-200);\r\n    text-decoration: none;\r\n}\r\n\r\n.homeLink:hover {\r\n\r\n    color: var(--blue-500);\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"errorContainer": "ErrorPage_errorContainer__2jlel",
	"errorTitle": "ErrorPage_errorTitle__3OyEt",
	"errorMessage": "ErrorPage_errorMessage__3ZoIY",
	"homeLink": "ErrorPage_homeLink__3TJyV"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_errorpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/errorpage */ "./components/errorpage/index.js");
var _this = undefined,
  _jsxFileName = "W:\\ClientAskem\\pages\\_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ErrorPage = function ErrorPage(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(_components_errorpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    statusCode: statusCode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  });
};
_c = ErrorPage;
ErrorPage.getInitialProps = function (_ref2) {
  var res = _ref2.res,
    err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);
var _c;
$RefreshReg$(_c, "ErrorPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lcnJvcnBhZ2UvRXJyb3JQYWdlLm1vZHVsZS5jc3M/NTAxOSIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lcnJvcnBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lcnJvcnBhZ2UvRXJyb3JQYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvclBhZ2UiLCJfcmVmIiwic3RhdHVzQ29kZSIsIl9fanN4IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiZXJyb3JDb250YWluZXIiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZXJyb3JUaXRsZSIsImNvbmNhdCIsImVycm9yTWVzc2FnZSIsIkxpbmsiLCJocmVmIiwiaG9tZUxpbmsiLCJfYyIsImdldEluaXRpYWxQcm9wcyIsIl9yZWYyIiwicmVzIiwiZXJyIiwiJFJlZnJlc2hSZWckIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMscVZBQXdMOztBQUUxTjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxxVkFBd0w7QUFDOUw7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxxVkFBd0w7O0FBRWxOOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDMEI7QUFDRztBQUNlLENBQUM7O0FBRTdDLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQXVCO0VBQUEsSUFBakJDLFVBQVUsR0FBQUQsSUFBQSxDQUFWQyxVQUFVO0VBQzNCLE9BQ0lDLEtBQUE7SUFBS0MsU0FBUyxFQUFFQyw0REFBTSxDQUFDQyxjQUFlO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2xDVixLQUFBO0lBQUlDLFNBQVMsRUFBRUMsNERBQU0sQ0FBQ1MsVUFBVztJQUFBUCxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM1QlgsVUFBVSxZQUFBYSxNQUFBLENBQVliLFVBQVUsSUFBSyxtQkFDdEMsQ0FBQyxFQUNMQyxLQUFBO0lBQUdDLFNBQVMsRUFBRUMsNERBQU0sQ0FBQ1csWUFBYTtJQUFBVCxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3QlgsVUFBVSxlQUFBYSxNQUFBLENBQ09iLFVBQVUsZ0NBQ3RCLGtDQUNQLENBQUMsRUFDSkMsS0FBQSxDQUFDYyxnREFBSTtJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFBWCxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNWVixLQUFBO0lBQUdDLFNBQVMsRUFBRUMsNERBQU0sQ0FBQ2MsUUFBUztJQUFBWixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDLGlCQUFrQixDQUMvQyxDQUNMLENBQUM7QUFFZCxDQUFDO0FBQUNPLEVBQUEsR0FoQklwQixTQUFTO0FBa0JmQSxTQUFTLENBQUNxQixlQUFlLEdBQUcsVUFBQUMsS0FBQSxFQUFrQjtFQUFBLElBQWZDLEdBQUcsR0FBQUQsS0FBQSxDQUFIQyxHQUFHO0lBQUVDLEdBQUcsR0FBQUYsS0FBQSxDQUFIRSxHQUFHO0VBQ25DLElBQU10QixVQUFVLEdBQUdxQixHQUFHLEdBQUdBLEdBQUcsQ0FBQ3JCLFVBQVUsR0FBR3NCLEdBQUcsR0FBR0EsR0FBRyxDQUFDdEIsVUFBVSxHQUFHLEdBQUc7RUFDcEUsT0FBTztJQUFFQSxVQUFVLEVBQVZBO0VBQVcsQ0FBQztBQUN6QixDQUFDO0FBRWNGLHdFQUFTLEVBQUM7QUFBQSxJQUFBb0IsRUFBQTtBQUFBSyxZQUFBLENBQUFMLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCekI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQztBQUMxRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDRJQUFxRTtBQUMvRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMseUVBQXlFLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQyxzQkFBc0IsNkNBQTZDLDJCQUEyQixLQUFLLHNDQUFzQyx3QkFBd0IsdUJBQXVCLDRCQUE0QixLQUFLLHdDQUF3Qyx1QkFBdUIsMEJBQTBCLG9DQUFvQyxLQUFLLG9DQUFvQyx3QkFBd0Isb0NBQW9DLDhCQUE4QixLQUFLLDBDQUEwQyxtQ0FBbUMsS0FBSyxPQUFPLGlIQUFpSCxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksK0VBQStFLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQyxzQkFBc0IsNkNBQTZDLDJCQUEyQixLQUFLLHFCQUFxQix3QkFBd0IsdUJBQXVCLDRCQUE0QixLQUFLLHVCQUF1Qix1QkFBdUIsMEJBQTBCLG9DQUFvQyxLQUFLLG1CQUFtQix3QkFBd0Isb0NBQW9DLDhCQUE4QixLQUFLLHlCQUF5QixtQ0FBbUMsS0FBSyxtQkFBbUI7QUFDcjBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjBCO0FBQ2lCO0FBRTNDLElBQU1wQixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUF1QjtFQUFBLElBQWpCQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtFQUMzQixPQUNJQyxLQUFBLENBQUN1Qiw2REFBSztJQUFDeEIsVUFBVSxFQUFFQSxVQUFXO0lBQUFLLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQVEsQ0FBQztBQUUvQyxDQUFDO0FBQUNPLEVBQUEsR0FKSXBCLFNBQVM7QUFNZkEsU0FBUyxDQUFDcUIsZUFBZSxHQUFHLFVBQUFDLEtBQUEsRUFBa0I7RUFBQSxJQUFmQyxHQUFHLEdBQUFELEtBQUEsQ0FBSEMsR0FBRztJQUFFQyxHQUFHLEdBQUFGLEtBQUEsQ0FBSEUsR0FBRztFQUNuQyxJQUFNdEIsVUFBVSxHQUFHcUIsR0FBRyxHQUFHQSxHQUFHLENBQUNyQixVQUFVLEdBQUdzQixHQUFHLEdBQUdBLEdBQUcsQ0FBQ3RCLFVBQVUsR0FBRyxHQUFHO0VBQ3BFLE9BQU87SUFBRUEsVUFBVSxFQUFWQTtFQUFXLENBQUM7QUFDekIsQ0FBQztBQUVjRix3RUFBUyxFQUFDO0FBQUEsSUFBQW9CLEVBQUE7QUFBQUssWUFBQSxDQUFBTCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci5iYTQ2OTNmZDFiYTA3Nzg4NDFhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vRXJyb3JQYWdlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9FcnJvclBhZ2UubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL0Vycm9yUGFnZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIHBhZ2VzL19lcnJvci5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRXJyb3JQYWdlLm1vZHVsZS5jc3MnOyAvLyBPcHRpb25hbDogSW1wb3J0IGN1c3RvbSBzdHlsZXMgZm9yIHlvdXIgZXJyb3IgcGFnZVxyXG5cclxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzQ29kZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7c3RhdHVzQ29kZSA/IGBFcnJvciAke3N0YXR1c0NvZGV9YCA6ICdBbiBlcnJvciBvY2N1cnJlZCd9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICB7c3RhdHVzQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgID8gYEFuIGVycm9yICR7c3RhdHVzQ29kZX0gb2NjdXJyZWQgb24gdGhlIHNlcnZlci5gXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIGNsaWVudC4nfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5ob21lTGlua30+R28gYmFjayB0byBIb21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuRXJyb3JQYWdlLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcywgZXJyIH0pID0+IHtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xyXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xyXG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIlc6XFxcXENsaWVudEFza2VtXFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcGFnZXMvRXJyb3JQYWdlLm1vZHVsZS5jc3MgKi9cXHJcXG4uRXJyb3JQYWdlX2Vycm9yQ29udGFpbmVyX18yamxlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFja0JHLTEwMCk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkVycm9yUGFnZV9lcnJvclRpdGxlX18zT3lFdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZjU1NTU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcblxcclxcbi5FcnJvclBhZ2VfZXJyb3JNZXNzYWdlX18zWm9JWSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLVRleHRXaGl0ZS0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uRXJyb3JQYWdlX2hvbWVMaW5rX18zVEp5ViB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLVRleHRXaGl0ZS0yMDApO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5FcnJvclBhZ2VfaG9tZUxpbmtfXzNUSnlWOmhvdmVyIHtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLWJsdWUtNTAwKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvZXJyb3JwYWdlL0Vycm9yUGFnZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtCQUErQjtBQUMvQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogcGFnZXMvRXJyb3JQYWdlLm1vZHVsZS5jc3MgKi9cXHJcXG4uZXJyb3JDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmxhY2tCRy0xMDApO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lcnJvclRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBjb2xvcjogI2ZmNTU1NTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yTWVzc2FnZSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLVRleHRXaGl0ZS0yMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZUxpbmsge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1UZXh0V2hpdGUtMjAwKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZUxpbms6aG92ZXIge1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS01MDApO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJlcnJvckNvbnRhaW5lclwiOiBcIkVycm9yUGFnZV9lcnJvckNvbnRhaW5lcl9fMmpsZWxcIixcblx0XCJlcnJvclRpdGxlXCI6IFwiRXJyb3JQYWdlX2Vycm9yVGl0bGVfXzNPeUV0XCIsXG5cdFwiZXJyb3JNZXNzYWdlXCI6IFwiRXJyb3JQYWdlX2Vycm9yTWVzc2FnZV9fM1pvSVlcIixcblx0XCJob21lTGlua1wiOiBcIkVycm9yUGFnZV9ob21lTGlua19fM1RKeVZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvcnBhZ2UnXHJcblxyXG5jb25zdCBFcnJvclBhZ2UgPSAoeyBzdGF0dXNDb2RlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9PjwvRXJyb3I+XHJcbiAgICApO1xyXG59O1xyXG5cclxuRXJyb3JQYWdlLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcywgZXJyIH0pID0+IHtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xyXG4gICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9