exports.ids = [0];
exports.modules = {

/***/ "./components/text-area-update/richtexteditor/index.js":
/*!*************************************************************!*\
  !*** ./components/text-area-update/richtexteditor/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _richtext_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./richtext.module.css */ "./components/text-area-update/richtexteditor/richtext.module.css");
/* harmony import */ var _richtext_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_richtext_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "W:\\ClientAskem\\components\\text-area-update\\richtexteditor\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-quill */ "react-quill", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-quill */ "react-quill")],
    modules: ['react-quill']
  }
});
const RichTextEditor = ({
  value,
  setValue
}) => {
  const handleContentChange = content => {
    setValue(content);
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
  const formats = ['font', 'size', 'bold', 'italic', 'underline', 'strike', 'color', 'background', 'script', 'blockquote', 'code-block', 'list', 'bullet', 'align', 'link'];
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(ReactQuill, {
    value: value,
    onChange: handleContentChange,
    modules: modules,
    formats: formats,
    placeholder: "Type your text here...",
    className: _richtext_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['ql-editor'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (RichTextEditor);

/***/ }),

/***/ "./components/text-area-update/richtexteditor/richtext.module.css":
/*!************************************************************************!*\
  !*** ./components/text-area-update/richtexteditor/richtext.module.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"containter": "richtext_containter__2u4sw",
	"ql-toolbar": "richtext_ql-toolbar__1xugb",
	"ql-editor": "richtext_ql-editor__1ArFE"
};


/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHQtYXJlYS11cGRhdGUvcmljaHRleHRlZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0LWFyZWEtdXBkYXRlL3JpY2h0ZXh0ZWRpdG9yL3JpY2h0ZXh0Lm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiUmVhY3RRdWlsbCIsImR5bmFtaWMiLCJzc3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsIndlYnBhY2siLCJyZXF1aXJlIiwibW9kdWxlcyIsIlJpY2hUZXh0RWRpdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNvbnRlbnRDaGFuZ2UiLCJjb250ZW50IiwidG9vbGJhciIsImZvcm1hdHMiLCJfX2pzeCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNMO0FBQ007QUFDRTtBQUMzQyxNQUFNQSxVQUFVLEdBQUdDLG1EQUFPLENBQUMsTUFBTSw0R0FBcUIsRUFBRTtFQUFFQyxHQUFHLEVBQUUsS0FBSztFQUFBQyxpQkFBQTtJQUFBQyxPQUFBLEVBQUFBLENBQUEsTUFBQUMsbUJBQUEsQ0FBNUIsZ0NBQWE7SUFBQUMsT0FBQSxHQUFiLGFBQWE7RUFBQTtBQUFnQixDQUFDLENBQUM7QUFFdkUsTUFBTUMsY0FBYyxHQUFHQSxDQUFDO0VBQUVDLEtBQUs7RUFBRUM7QUFBUyxDQUFDLEtBQUs7RUFDNUMsTUFBTUMsbUJBQW1CLEdBQUlDLE9BQU8sSUFBSztJQUNyQ0YsUUFBUSxDQUFDRSxPQUFPLENBQUM7RUFDckIsQ0FBQztFQUNELE1BQU1MLE9BQU8sR0FBRztJQUNaTSxPQUFPLEVBQUUsQ0FDTCxDQUFDO01BQUUsTUFBTSxFQUFFO0lBQUcsQ0FBQyxFQUFFO01BQUUsTUFBTSxFQUFFO0lBQUcsQ0FBQyxDQUFDLEVBQ2hDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQ3pDLENBQUM7TUFBRSxPQUFPLEVBQUU7SUFBRyxDQUFDLEVBQUU7TUFBRSxZQUFZLEVBQUU7SUFBRyxDQUFDLENBQUMsRUFDdkMsQ0FBQztNQUFFLFFBQVEsRUFBRTtJQUFNLENBQUMsRUFBRTtNQUFFLFFBQVEsRUFBRTtJQUFRLENBQUMsQ0FBQyxFQUM1QyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsRUFDNUIsQ0FBQztNQUFFLE1BQU0sRUFBRTtJQUFVLENBQUMsRUFBRTtNQUFFLE1BQU0sRUFBRTtJQUFTLENBQUMsQ0FBQyxFQUM3QyxDQUFDO01BQUUsT0FBTyxFQUFFO0lBQUcsQ0FBQyxDQUFDLEVBQ2pCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztFQUV6QixDQUFDO0VBQ0QsTUFBTUMsT0FBTyxHQUFHLENBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQ3JCLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUNwQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFDekIsTUFBTSxDQUNUO0VBRUQsT0FDSUMsS0FBQTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSU4sS0FBQSxDQUFDZCxVQUFVO0lBQ1BRLEtBQUssRUFBRUEsS0FBTTtJQUNiYSxRQUFRLEVBQUVYLG1CQUFvQjtJQUM5QkosT0FBTyxFQUFFQSxPQUFRO0lBQ2pCTyxPQUFPLEVBQUVBLE9BQVE7SUFDakJTLFdBQVcsRUFBQyx3QkFBd0I7SUFDcENDLFNBQVMsRUFBRUMsMkRBQU0sQ0FBQyxXQUFXLENBQUU7SUFBQVQsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2xDLENBQ0EsQ0FBQztBQUVkLENBQUM7QUFFY2IsNkVBQWMsRTs7Ozs7Ozs7Ozs7QUM3QzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmljaHRleHQubW9kdWxlLmNzcyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5cclxuY29uc3QgUmljaFRleHRFZGl0b3IgPSAoeyB2YWx1ZSwgc2V0VmFsdWUgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ29udGVudENoYW5nZSA9IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoY29udGVudCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW9kdWxlcyA9IHtcclxuICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgIFt7ICdmb250JzogW10gfSwgeyAnc2l6ZSc6IFtdIH1dLFxyXG4gICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdzdHJpa2UnXSxcclxuICAgICAgICAgICAgW3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLFxyXG4gICAgICAgICAgICBbeyAnc2NyaXB0JzogJ3N1YicgfSwgeyAnc2NyaXB0JzogJ3N1cGVyJyB9XSxcclxuICAgICAgICAgICAgWydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snXSxcclxuICAgICAgICAgICAgW3sgJ2xpc3QnOiAnb3JkZXJlZCcgfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxyXG4gICAgICAgICAgICBbeyAnYWxpZ24nOiBbXSB9XSxcclxuICAgICAgICAgICAgWydsaW5rJywgJ2NsZWFuJ10sXHJcbiAgICAgICAgXSxcclxuICAgIH07XHJcbiAgICBjb25zdCBmb3JtYXRzID0gW1xyXG4gICAgICAgICdmb250JywgJ3NpemUnLFxyXG4gICAgICAgICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJyxcclxuICAgICAgICAnY29sb3InLCAnYmFja2dyb3VuZCcsXHJcbiAgICAgICAgJ3NjcmlwdCcsICdibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snLFxyXG4gICAgICAgICdsaXN0JywgJ2J1bGxldCcsICdhbGlnbicsXHJcbiAgICAgICAgJ2xpbmsnLFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSZWFjdFF1aWxsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29udGVudENoYW5nZX1cclxuICAgICAgICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRzPXtmb3JtYXRzfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgdGV4dCBoZXJlLi4uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydxbC1lZGl0b3InXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dEVkaXRvcjtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbnRlclwiOiBcInJpY2h0ZXh0X2NvbnRhaW50ZXJfXzJ1NHN3XCIsXG5cdFwicWwtdG9vbGJhclwiOiBcInJpY2h0ZXh0X3FsLXRvb2xiYXJfXzF4dWdiXCIsXG5cdFwicWwtZWRpdG9yXCI6IFwicmljaHRleHRfcWwtZWRpdG9yX18xQXJGRVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==