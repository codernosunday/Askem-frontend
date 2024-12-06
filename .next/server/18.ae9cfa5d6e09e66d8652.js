exports.ids = [18];
exports.modules = {

/***/ "91UR":
/***/ (function(module, exports) {



/***/ }),

/***/ "Hhma":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("iyzg");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("91UR");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const RichTextEditor = ({
  value,
  setValue
}) => {
  const handleContentChange = value => {
    setValue(value);
  };
  const modules = {
    toolbar: [[{
      'font': []
    }, {
      'size': []
    }], ['bold', 'italic', 'underline', 'strike'], [{
      'color': []
    }, {
      'background': []
    }], [{
      'script': 'sub'
    }, {
      'script': 'super'
    }], ['blockquote', 'code-block'], [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }], [{
      'align': []
    }], ['link', 'clean']]
  };
  return __jsx("div", null, __jsx(react_quill__WEBPACK_IMPORTED_MODULE_1___default.a, {
    value: value,
    onChange: handleContentChange,
    modules: modules,
    placeholder: "Type your text here..."
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ })

};;