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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+WX+":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "detail-page-container_container__3BRtT"
};


/***/ }),

/***/ "/Wiz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (StoreContext);

/***/ }),

/***/ "/eOx":
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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__("cDcd"));
var _router = __webpack_require__("nOHt");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (false) {}
  return WithRouterWrapper;
}

/***/ }),

/***/ "0IiK":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"voteCell": "post-vote_voteCell__1GCHp",
	"voteButton": "post-vote_voteButton__1PHsV",
	"voted": "post-vote_voted__2mE9z",
	"score": "post-vote_score__2te3m"
};


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1a8p");


/***/ }),

/***/ "1a8p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./util/fetcher.js
var fetcher = __webpack_require__("Qv+q");

// EXTERNAL MODULE: ./components/layout/index.js + 1 modules
var layout = __webpack_require__("okHz");

// EXTERNAL MODULE: ./components/page-title/index.js
var page_title = __webpack_require__("oVS1");

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__("v0uu");

// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// EXTERNAL MODULE: ./components/layout/extra/index.js
var extra = __webpack_require__("jCHi");

// EXTERNAL MODULE: ./components/layout/main/index.js
var main = __webpack_require__("thU0");

// EXTERNAL MODULE: ./components/detail-page-container/detail-page-container.module.css
var detail_page_container_module = __webpack_require__("+WX+");
var detail_page_container_module_default = /*#__PURE__*/__webpack_require__.n(detail_page_container_module);

// CONCATENATED MODULE: ./components/detail-page-container/index.js
var __jsx = external_react_default.a.createElement;






const DetailPageContainer = ({
  children
}) => {
  const size = Object(useWindowSize["a" /* default */])();
  return __jsx("div", {
    className: detail_page_container_module_default.a.container
  }, __jsx(main["a" /* default */], {
    border: false
  }, children), size.width > constants["a" /* default */].TABLET_SIZE && __jsx(extra["a" /* default */], {
    marginTop: 16
  }));
};
/* harmony default export */ var detail_page_container = (DetailPageContainer);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/post/post-wrapper.module.css
var post_wrapper_module = __webpack_require__("l4qj");
var post_wrapper_module_default = /*#__PURE__*/__webpack_require__.n(post_wrapper_module);

// CONCATENATED MODULE: ./components/post/post-wrapper.js
var post_wrapper_jsx = external_react_default.a.createElement;



const PostWrapper = ({
  borderBottom = true,
  children
}) => {
  return post_wrapper_jsx("div", {
    className: external_classnames_default()(post_wrapper_module_default.a.layout, borderBottom && post_wrapper_module_default.a.borderBottom)
  }, children);
};
/* harmony default export */ var post_wrapper = (PostWrapper);
// EXTERNAL MODULE: ./store/auth.js
var auth = __webpack_require__("LIAn");

// EXTERNAL MODULE: ./store/fetch.js
var fetch = __webpack_require__("OTcJ");

// EXTERNAL MODULE: ./store/modal.js
var modal = __webpack_require__("/Wiz");

// EXTERNAL MODULE: ./components/button/index.js
var components_button = __webpack_require__("HlVv");

// EXTERNAL MODULE: ./components/icons/index.js + 9 modules
var icons = __webpack_require__("dhEp");

// EXTERNAL MODULE: ./components/post/post-vote/post-vote.module.css
var post_vote_module = __webpack_require__("0IiK");
var post_vote_module_default = /*#__PURE__*/__webpack_require__.n(post_vote_module);

// CONCATENATED MODULE: ./components/post/post-vote/index.js
var post_vote_jsx = external_react_default.a.createElement;







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
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  const {
    authAxios
  } = Object(external_react_["useContext"])(fetch["a" /* FetchContext */]);
  const {
    handleComponentVisible
  } = Object(external_react_["useContext"])(modal["a" /* default */]);
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
  return post_vote_jsx("div", {
    className: post_vote_module_default.a.voteCell
  }, post_vote_jsx(components_button["a" /* default */], {
    className: post_vote_module_default.a.voteButton,
    onClick: () => isAuthenticated() ? isUpVoted() ? unVote() : upVote() : handleComponentVisible(true, 'signup')
  }, post_vote_jsx(icons["c" /* ArrowUp */], {
    className: isUpVoted() ? post_vote_module_default.a.voted : ''
  })), post_vote_jsx("div", {
    className: post_vote_module_default.a.score
  }, score), post_vote_jsx(components_button["a" /* default */], {
    className: post_vote_module_default.a.voteButton,
    onClick: () => isAuthenticated() ? isDownVoted() ? unVote() : downVote() : handleComponentVisible(true, 'signup')
  }, post_vote_jsx(icons["b" /* ArrowDown */], {
    className: isDownVoted() ? post_vote_module_default.a.voted : ''
  })));
};
/* harmony default export */ var post_vote = (PostVote);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "date-fns/formatDistanceToNowStrict"
var formatDistanceToNowStrict_ = __webpack_require__("GHpn");
var formatDistanceToNowStrict_default = /*#__PURE__*/__webpack_require__.n(formatDistanceToNowStrict_);

// EXTERNAL MODULE: ./components/tag/index.js
var components_tag = __webpack_require__("Z7cN");

// EXTERNAL MODULE: ./components/post/post-summary/post-summary.module.css
var post_summary_module = __webpack_require__("/eOx");
var post_summary_module_default = /*#__PURE__*/__webpack_require__.n(post_summary_module);

// CONCATENATED MODULE: ./components/post/post-summary/index.js
var post_summary_jsx = external_react_default.a.createElement;








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
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  const {
    authAxios
  } = Object(external_react_["useContext"])(fetch["a" /* FetchContext */]);
  const router = Object(router_["useRouter"])();
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
  return post_summary_jsx("div", {
    className: post_summary_module_default.a.postCell
  }, post_summary_jsx("div", {
    className: post_summary_module_default.a.text
  }, children), post_summary_jsx("div", {
    className: post_summary_module_default.a.footer
  }, post_summary_jsx("div", {
    className: post_summary_module_default.a.row
  }, post_summary_jsx("div", {
    className: post_summary_module_default.a.tagContainer
  }, tags === null || tags === void 0 ? void 0 : tags.map(tag => post_summary_jsx(components_tag["a" /* default */], {
    key: tag
  }, tag))), post_summary_jsx("div", {
    className: post_summary_module_default.a.userDetails
  }, post_summary_jsx(link_default.a, {
    href: "/users/[user]",
    as: `/users/${author.username}`
  }, post_summary_jsx("a", null, post_summary_jsx("img", {
    src: `${author.profilePhoto}`,
    alt: author.username
  }))), post_summary_jsx("div", {
    className: post_summary_module_default.a.info
  }, post_summary_jsx("span", null, tags ? 'asked' : 'answered', ' ', formatDistanceToNowStrict_default()(new Date(created), {
    addSuffix: true
  })), post_summary_jsx(link_default.a, {
    href: "/users/[user]",
    as: `/users/${author.username}`
  }, post_summary_jsx("a", null, author.username))))), (((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.id) === author.id || isAdmin()) && post_summary_jsx("div", {
    className: post_summary_module_default.a.row
  }, post_summary_jsx("a", {
    className: post_summary_module_default.a.delete,
    onClick: () => handleDeleteComment()
  }, "delete"))));
};
/* harmony default export */ var post_summary = (PostSummary);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: ./components/textarea/textarea.module.css
var textarea_module = __webpack_require__("Ldsk");
var textarea_module_default = /*#__PURE__*/__webpack_require__.n(textarea_module);

// CONCATENATED MODULE: ./components/textarea/index.js
var textarea_jsx = external_react_default.a.createElement;
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
  } = Object(external_react_["useState"])('');
  return textarea_jsx("div", {
    className: textarea_module_default.a.container
  }, label && textarea_jsx("label", {
    className: textarea_module_default.a.label
  }, label), inputInfo && textarea_jsx("p", {
    className: textarea_module_default.a.inputInfo
  }, inputInfo), textarea_jsx("textarea", _extends({
    className: external_classnames_default()(textarea_module_default.a.textarea, className, hasError && textarea_module_default.a.hasError)
  }, props)), hasError && textarea_jsx("p", {
    className: textarea_module_default.a.errorMessage
  }, errorMessage));
};
/* harmony default export */ var components_textarea = (TextArea);
// EXTERNAL MODULE: ./components/post/add-comment/add-comment.module.css
var add_comment_module = __webpack_require__("tda2");
var add_comment_module_default = /*#__PURE__*/__webpack_require__.n(add_comment_module);

// CONCATENATED MODULE: ./components/post/add-comment/index.js
var add_comment_jsx = external_react_default.a.createElement;







const AddComment = ({
  questionId,
  answerId,
  setShowAddComment,
  setQuestion
}) => {
  const {
    authAxios
  } = Object(external_react_["useContext"])(fetch["a" /* FetchContext */]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  return add_comment_jsx(external_formik_["Formik"], {
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
    validationSchema: external_yup_["object"]({
      comment: external_yup_["string"]().required('Comment is missing.').min(5, 'Comment must be at least 5 characters.').max(1000, 'Comment cannot be longer than 1000 characters.')
    })
  }, ({
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => add_comment_jsx("form", {
    className: add_comment_module_default.a.container,
    onSubmit: handleSubmit
  }, add_comment_jsx(components_textarea, {
    name: "comment",
    autoComplete: "off",
    value: values.comment,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.comment && errors.comment,
    errorMessage: errors.comment && errors.comment
  }), add_comment_jsx("p", {
    className: add_comment_module_default.a.status
  }, status), add_comment_jsx("div", null, add_comment_jsx(components_button["a" /* default */], {
    className: add_comment_module_default.a.button,
    type: "submit",
    primary: true,
    isLoading: loading,
    disabled: isSubmitting
  }, "Add Comment"))));
};
/* harmony default export */ var add_comment = (AddComment);
// EXTERNAL MODULE: ./components/post/comment-list/comment-list.module.css
var comment_list_module = __webpack_require__("ID87");
var comment_list_module_default = /*#__PURE__*/__webpack_require__.n(comment_list_module);

// CONCATENATED MODULE: ./components/post/comment-list/index.js
var comment_list_jsx = external_react_default.a.createElement;





const CommentList = ({
  children,
  questionId,
  answerId,
  setQuestion
}) => {
  const {
    isAuthenticated
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  const {
    handleComponentVisible
  } = Object(external_react_["useContext"])(modal["a" /* default */]);
  const {
    0: showAddComment,
    1: setShowAddComment
  } = Object(external_react_["useState"])(false);
  const {
    0: visibleComments,
    1: setVisibleComments
  } = Object(external_react_["useState"])(children.slice(0, 3));
  const {
    0: difference,
    1: setDiffrence
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setVisibleComments(children.slice(0, 3));
  }, [children]);
  Object(external_react_["useEffect"])(() => {
    setDiffrence(children.length - visibleComments.length);
  }, [visibleComments]);
  return comment_list_jsx("div", {
    className: comment_list_module_default.a.commentCell
  }, visibleComments, difference > 0 ? comment_list_jsx("a", {
    className: comment_list_module_default.a.showMore,
    onClick: () => setVisibleComments(children)
  }, "show ", comment_list_jsx("b", null, difference), " more comments") : !showAddComment && comment_list_jsx("a", {
    className: comment_list_module_default.a.addComment,
    onClick: () => isAuthenticated() ? setShowAddComment(true) : handleComponentVisible(true, 'signup')
  }, "add comment"), showAddComment && comment_list_jsx(add_comment, {
    questionId: questionId,
    answerId: answerId,
    setShowAddComment: setShowAddComment,
    setQuestion: setQuestion
  }));
};
/* harmony default export */ var comment_list = (CommentList);
// EXTERNAL MODULE: external "date-fns/format"
var format_ = __webpack_require__("Skji");
var format_default = /*#__PURE__*/__webpack_require__.n(format_);

// EXTERNAL MODULE: ./components/post/comment-list/comment-item/comment-item.module.css
var comment_item_module = __webpack_require__("8Xn0");
var comment_item_module_default = /*#__PURE__*/__webpack_require__.n(comment_item_module);

// CONCATENATED MODULE: ./components/post/comment-list/comment-item/index.js
var comment_item_jsx = external_react_default.a.createElement;






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
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  const {
    authAxios
  } = Object(external_react_["useContext"])(fetch["a" /* FetchContext */]);
  const handleDeleteComment = async () => {
    const res = window.confirm('Are you sure delete your comment?');
    if (res) {
      const {
        data
      } = await authAxios.delete(answerId ? `/comment/${questionId}/${answerId}/${commentId}` : `/comment/${questionId}/${commentId}`);
      setQuestion(data);
    }
  };
  return comment_item_jsx("div", {
    className: comment_item_module_default.a.commentContainer
  }, comment_item_jsx("p", null, children, " \u2013"), " \xA0", comment_item_jsx(link_default.a, {
    href: "/users/[user]",
    as: `/users/${author}`
  }, comment_item_jsx("a", {
    className: isOwner ? comment_item_module_default.a.owner : undefined
  }, author)), "\xA0", comment_item_jsx("p", {
    className: comment_item_module_default.a.dateText
  }, format_default()(new Date(created), "MMM dd'`'yy 'at' k':'mm"), ' '), (((_authState$userInfo = authState.userInfo) === null || _authState$userInfo === void 0 ? void 0 : _authState$userInfo.username) === author || isAdmin()) && comment_item_jsx("a", {
    className: comment_item_module_default.a.delete,
    onClick: () => handleDeleteComment()
  }, "delete"));
};
/* harmony default export */ var comment_item = (CommentItem);
// EXTERNAL MODULE: ./components/button-group/index.js
var button_group = __webpack_require__("Abyp");

// EXTERNAL MODULE: ./components/answer-container/answer-container.module.css
var answer_container_module = __webpack_require__("JW02");
var answer_container_module_default = /*#__PURE__*/__webpack_require__.n(answer_container_module);

// CONCATENATED MODULE: ./components/answer-container/index.js
var answer_container_jsx = external_react_default.a.createElement;



const AnswerContainer = ({
  answerCount,
  answerSortType,
  setAnswerSortType,
  children
}) => {
  return answer_container_jsx("div", {
    className: answer_container_module_default.a.container
  }, answer_container_jsx("div", {
    className: answer_container_module_default.a.header
  }, answer_container_jsx("div", {
    className: answer_container_module_default.a.fill
  }, answer_container_jsx("h2", null, answerCount, " Answers")), answer_container_jsx(button_group["a" /* default */], {
    buttons: ['Votes', 'Newest', 'Oldest'],
    selected: answerSortType,
    setSelected: setAnswerSortType
  })), children);
};
/* harmony default export */ var answer_container = (AnswerContainer);
// EXTERNAL MODULE: ./components/add-answer/add-answer.module.css
var add_answer_module = __webpack_require__("R4uV");
var add_answer_module_default = /*#__PURE__*/__webpack_require__.n(add_answer_module);

// CONCATENATED MODULE: ./components/add-answer/index.js
var add_answer_jsx = external_react_default.a.createElement;











const AddAnswer = ({
  id,
  tags,
  setQuestion
}) => {
  const {
    authAxios
  } = Object(external_react_["useContext"])(fetch["a" /* FetchContext */]);
  const {
    isAuthenticated
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  const {
    handleComponentVisible
  } = Object(external_react_["useContext"])(modal["a" /* default */]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  return add_answer_jsx(external_formik_["Formik"], {
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
    validationSchema: external_yup_["object"]({
      text: external_yup_["string"]().required('Body is missing.').min(30, 'Body must be at least 30 characters.').max(30000, 'Body cannot be longer than 30000 characters.')
    })
  }, ({
    values,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => add_answer_jsx("form", {
    className: add_answer_module_default.a.container,
    onSubmit: handleSubmit
  }, add_answer_jsx("h2", null, "Your answer"), add_answer_jsx(components_textarea, {
    name: "text",
    autoComplete: "off",
    value: values.text,
    onChange: handleChange,
    onBlur: handleBlur,
    hasError: touched.text && errors.text,
    errorMessage: errors.text && errors.text,
    className: add_answer_module_default.a.textarea
  }), add_answer_jsx("p", {
    className: add_answer_module_default.a.status
  }, status), add_answer_jsx("div", {
    className: add_answer_module_default.a.button
  }, add_answer_jsx(components_button["a" /* default */], {
    type: "submit",
    primary: true,
    isLoading: loading,
    disabled: isSubmitting,
    onClick: () => !isAuthenticated() && handleComponentVisible(true, 'signup')
  }, "Post Your Answer")), add_answer_jsx("h3", null, "Browse other questions tagged \xA0", tags.map(tag => add_answer_jsx(components_tag["a" /* default */], {
    key: tag
  }, tag)), "or \xA0", add_answer_jsx(link_default.a, {
    href: "/questions/ask",
    as: "/questions/ask"
  }, add_answer_jsx("a", null, "ask your own question.")))));
};
/* harmony default export */ var add_answer = (AddAnswer);
// EXTERNAL MODULE: ./components/image-question/imagequestion.module.css
var imagequestion_module = __webpack_require__("blsj");
var imagequestion_module_default = /*#__PURE__*/__webpack_require__.n(imagequestion_module);

// CONCATENATED MODULE: ./components/image-question/index.js

var image_question_jsx = external_react_default.a.createElement;

const ImageQuestion = ({
  base64String,
  altText = 'Image'
}) => {
  return image_question_jsx("div", {
    className: imagequestion_module_default.a.imagecontainer
  }, image_question_jsx("img", {
    src: base64String,
    altText: altText,
    className: imagequestion_module_default.a.base64image
  }));
};
/* harmony default export */ var image_question = (ImageQuestion);
// CONCATENATED MODULE: ./pages/questions/[slug].js
var _slug_jsx = external_react_default.a.createElement;













//


const QuestionDetail = ({
  questionId,
  title
}) => {
  const {
    0: question,
    1: setQuestion
  } = Object(external_react_["useState"])(null);
  const {
    0: answerSortType,
    1: setAnswersSortType
  } = Object(external_react_["useState"])('Votes');
  Object(external_react_["useEffect"])(() => {
    const fetchQuestion = async () => {
      const {
        data
      } = await fetcher["b" /* publicFetch */].get(`/question/${questionId}`);
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
  return _slug_jsx(layout["a" /* default */], {
    extra: false
  }, _slug_jsx(head_default.a, null, _slug_jsx("title", null, title), _slug_jsx("link", {
    rel: "canonical",
    href: isClient && window.location.href
  })), _slug_jsx(page_title["a" /* default */], {
    title: title,
    button: true
  }), _slug_jsx(detail_page_container, null, !question && _slug_jsx("div", {
    className: "loading"
  }, _slug_jsx(icons["h" /* Spinner */], null)), question && _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(post_wrapper, {
    borderBottom: false
  }, _slug_jsx(post_vote, {
    score: question.score,
    votes: question.votes,
    questionId: questionId,
    setQuestion: setQuestion
  }), _slug_jsx(post_summary, {
    tags: question.tags,
    author: question.author,
    created: question.created,
    questionId: questionId
  }, _slug_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: question.text
    }
  }), question.image && _slug_jsx(image_question, {
    base64String: question.image,
    altText: "Image"
  })), _slug_jsx(comment_list, {
    questionId: questionId,
    setQuestion: setQuestion
  }, question.comments.map(({
    id,
    author,
    created,
    body
  }) => _slug_jsx(comment_item, {
    key: id,
    commentId: id,
    questionId: questionId,
    author: author.username,
    isOwner: author.username === question.author.username,
    created: created,
    setQuestion: setQuestion
  }, body)))), question.answers.length > 0 && _slug_jsx(answer_container, {
    answersCount: question.answers.length,
    answerSortType: answerSortType,
    setAnswerSortType: setAnswersSortType
  }, question.answers.sort(handleSorting()).map(answer => _slug_jsx(post_wrapper, {
    key: answer.id
  }, _slug_jsx(post_vote, {
    score: answer.score,
    votes: answer.votes,
    answerId: answer.id,
    questionId: questionId,
    setQuestion: setQuestion
  }), _slug_jsx(post_summary, {
    author: answer.author,
    created: answer.created,
    questionId: questionId,
    answerId: answer.id,
    setQuestion: setQuestion
  }, answer.text), _slug_jsx(comment_list, {
    questionId: questionId,
    answerId: answer.id,
    setQuestion: setQuestion
  }, answer.comments.map(({
    id,
    author,
    created,
    body
  }) => _slug_jsx(comment_item, {
    key: id,
    commentId: id,
    questionId: questionId,
    answerId: answer.id,
    author: author.username,
    isOwner: author.username === question.author.username,
    created: created,
    setQuestion: setQuestion
  }, body)))))), _slug_jsx(add_answer, {
    tags: question.tags,
    id: questionId,
    setQuestion: setQuestion
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
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (QuestionDetail);

/***/ }),

/***/ "2Zz9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "button-group_container__F0-AA",
	"active": "button-group_active__3Y2Lf",
	"borderBottom": "button-group_borderBottom__2Wu6p"
};


/***/ }),

/***/ "2hj0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TagProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Qv+q");
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
      } = await _util_fetcher__WEBPACK_IMPORTED_MODULE_1__[/* publicFetch */ "b"].get('/tags/populertags');
      setTagState(data);
    };
    fetchPopularTags();
  }, []);
  return __jsx(Provider, {
    value: {
      tagState
    }
  }, children);
};


/***/ }),

/***/ "3Qbe":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "extra_container__1lVpg",
	"tagContainer": "extra_tagContainer__1leJw",
	"popularTags": "extra_popularTags__3CI1X"
};


/***/ }),

/***/ "3WeD":
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));
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

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "8Xn0":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentContainer": "comment-item_commentContainer__1ce-y",
	"owner": "comment-item_owner__2ewyj",
	"dateText": "comment-item_dateText__qy-uB",
	"delete": "comment-item_delete__3NnEO"
};


/***/ }),

/***/ "Abyp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HlVv");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2Zz9");
/* harmony import */ var _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ButtonGroup = ({
  buttons,
  selected,
  setSelected,
  borderBottom = false
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container, borderBottom && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderBottom)
  }, buttons.map(button => __jsx(_button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    key: button,
    className: selected === button && _button_group_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,
    onClick: () => setSelected(button)
  }, button)));
};
/* harmony default export */ __webpack_exports__["a"] = (ButtonGroup);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
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

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "GHpn":
/***/ (function(module, exports) {

module.exports = require("date-fns/formatDistanceToNowStrict");

/***/ }),

/***/ "GtVp":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"border": "main_border__3hdrZ"
};


/***/ }),

/***/ "HcwM":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dialog": "navigation-dropdown_dialog__3DoVn",
	"sidebar": "navigation-dropdown_sidebar__1Vvuq"
};


/***/ }),

/***/ "HlVv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XRbw");
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_3__);
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
    as: href
  }, __jsx("a", props, children));
};
const BaseButton = _ref2 => {
  let {
      children
    } = _ref2,
    props = _objectWithoutProperties(_ref2, ["children"]);
  return __jsx("button", _extends({
    type: "button"
  }, props), children);
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
  }, props), children);
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "ID87":
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

/***/ "JW02":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "answer-container_container__1JhnB",
	"header": "answer-container_header__2xWxk",
	"fill": "answer-container_fill__2nEgn"
};


/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "LIAn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    }
  }, children);
};


/***/ }),

/***/ "Ldsk":
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

/***/ "MhZx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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
/* harmony default export */ __webpack_exports__["a"] = (useWindowSize);

/***/ }),

/***/ "NuWV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav": "navigation_nav__8ntz-"
};


/***/ }),

/***/ "OTcJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FetchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LIAn");
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Qv+q");
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_auth__WEBPACK_IMPORTED_MODULE_2__[/* AuthContext */ "a"]);
  const authAxios = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _util_fetcher__WEBPACK_IMPORTED_MODULE_3__[/* baseURL */ "a"]
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
    }
  }, children);
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Qv+q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return publicFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// const baseURL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:8081/api'
//     : `https://${process.env.SITE_NAME}/api`
const baseURL = 'https://askem-server.onrender.com/api';
const publicFetch = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL
});


/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "R4uV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "add-answer_container__a2UTk",
	"textarea": "add-answer_textarea__3uSC0",
	"status": "add-answer_status__3QM6A"
};


/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "VgF2":
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

/***/ "X24+":
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

/***/ "XRbw":
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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "Z7cN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("be6m");
/* harmony import */ var _tag_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tag_module_css__WEBPACK_IMPORTED_MODULE_3__);
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
  return count ? __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.taglayout, className)
  }, props), children)), __jsx("span", {
    className: _tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.count
  }, count)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/',
      query: {
        tag: children
      }
    }
  }, __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_tag_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tag, className)
  }, props), children));
};
/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),

/***/ "Zaxt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/navigation/nav-item/nav-item.module.css
var nav_item_module = __webpack_require__("fm5W");
var nav_item_module_default = /*#__PURE__*/__webpack_require__.n(nav_item_module);

// CONCATENATED MODULE: ./components/navigation/nav-item/index.js
var __jsx = external_react_default.a.createElement;
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
  return __jsx(link_default.a, {
    href: href,
    as: href
  }, __jsx("a", _extends({
    className: external_classnames_default()(nav_item_module_default.a.navItem, selected && nav_item_module_default.a.navItemSelected)
  }, props), children));
};
/* harmony default export */ var nav_item = (NavItem);
// EXTERNAL MODULE: ./components/icons/index.js + 9 modules
var icons = __webpack_require__("dhEp");

// EXTERNAL MODULE: ./components/navigation/navigation.module.css
var navigation_module = __webpack_require__("NuWV");
var navigation_module_default = /*#__PURE__*/__webpack_require__.n(navigation_module);

// EXTERNAL MODULE: ./store/auth.js
var auth = __webpack_require__("LIAn");

// CONCATENATED MODULE: ./components/navigation/index.js
var navigation_jsx = external_react_default.a.createElement;






const Navigation = () => {
  const router = Object(router_["useRouter"])();
  const {
    authState,
    isAdmin
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  return navigation_jsx("nav", {
    className: navigation_module_default.a.nav
  }, navigation_jsx(nav_item, {
    href: "/",
    selected: router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
  }, navigation_jsx(icons["i" /* World */], null), navigation_jsx("span", null, "Askem")), navigation_jsx(nav_item, {
    href: "/tags",
    selected: router.pathname == '/tags'
  }, navigation_jsx("span", null, "Tags")), navigation_jsx(nav_item, {
    href: "/users",
    selected: router.pathname.split('/')[1] == 'users'
  }, navigation_jsx("span", null, "Users")), navigation_jsx(nav_item, {
    href: "/groups",
    selected: router.pathname == '/groups'
  }, navigation_jsx("span", null, "Groups")), isAdmin() && navigation_jsx(nav_item, {
    href: "/administrator",
    selected: router.pathname == '/administrator'
  }, navigation_jsx("span", null, "Administator")));
};
/* harmony default export */ var navigation = __webpack_exports__["a"] = (Navigation);

/***/ }),

/***/ "be6m":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag": "tag_tag__2CMZ9",
	"multiplier": "tag_multiplier__C-g4G",
	"count": "tag_count__1ssWi",
	"taglayout": "tag_taglayout__bmjew"
};


/***/ }),

/***/ "blsj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"imagecontainer": "imagequestion_imagecontainer__194Ml",
	"base64image": "imagequestion_base64image__29cIy"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__("cDcd"));
var _router = __webpack_require__("elyg");
var _router2 = __webpack_require__("nOHt");
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
    if (false) {}
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
  if (false) {}
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

/***/ "dZ6Y":
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

/***/ "dhEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Alert; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ ArrowDown; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ ArrowUp; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Close; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Logo; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Menu; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Search; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Spinner; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ World; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/icons/Alert.js
var __jsx = external_react_["createElement"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgAlert(props) {
  return __jsx("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none"
  }, props), __jsx("path", {
    d: "M8 16A8 8 0 118 0a8 8 0 010 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z",
    fill: "currentColor"
  }));
}
/* harmony default export */ var Alert = (SvgAlert);
// CONCATENATED MODULE: ./components/icons/ArrowDown.js
var ArrowDown_jsx = external_react_["createElement"];
function ArrowDown_extends() { return ArrowDown_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, ArrowDown_extends.apply(null, arguments); }

function SvgArrowDown(props) {
  return ArrowDown_jsx("svg", ArrowDown_extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none"
  }, props), ArrowDown_jsx("path", {
    d: "M2 10h32L18 26 2 10z",
    fill: "currentColor"
  }));
}
/* harmony default export */ var ArrowDown = (SvgArrowDown);
// CONCATENATED MODULE: ./components/icons/ArrowUp.js
var ArrowUp_jsx = external_react_["createElement"];
function ArrowUp_extends() { return ArrowUp_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, ArrowUp_extends.apply(null, arguments); }

function SvgArrowUp(props) {
  return ArrowUp_jsx("svg", ArrowUp_extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 36 36",
    fill: "none"
  }, props), ArrowUp_jsx("path", {
    d: "M2 26h32L18 10 2 26z",
    fill: "currentColor"
  }));
}
/* harmony default export */ var ArrowUp = (SvgArrowUp);
// CONCATENATED MODULE: ./components/icons/Close.js
var Close_jsx = external_react_["createElement"];
function Close_extends() { return Close_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Close_extends.apply(null, arguments); }

function SvgClose(props) {
  return Close_jsx("svg", Close_extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "close_svg__feather close_svg__feather-x"
  }, props), Close_jsx("path", {
    d: "M18 6L6 18M6 6l12 12"
  }));
}
/* harmony default export */ var Close = (SvgClose);
// CONCATENATED MODULE: ./components/icons/Logo.js
var Logo_jsx = external_react_["createElement"];

function SvgLogo(props) {
  return Logo_jsx("svg", {
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13.59 14.61"
  }, Logo_jsx("defs", null, Logo_jsx("style", null, `
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
      `)), Logo_jsx("path", {
    class: "n",
    d: "M3.58,11.47c-.23-.06-.45-.11-.67-.19-.74-.28-1.22-.98-1.23-1.77,0-.46,0-.91,0-1.37,0-.17-.05-.25-.22-.32C.55,7.47,0,6.68,0,5.73c0-.97,.54-1.76,1.48-2.13,.18-.07,.21-.16,.21-.33,0-.44,0-.89,0-1.33C1.69,.86,2.54,0,3.62,0,5.77,0,7.91,0,10.05,0c.78,0,1.42,.36,1.72,1.08,.42,1,.74,2.03,1.1,3.05,.21,.61,.42,1.23,.63,1.84,.26,.78-.05,1.34-.85,1.57q-.67,.19-.67,.89c0,.34,0,.68,0,1.03,0,1.06-.79,1.91-1.85,1.95-.5,.02-.79,.37-1.16,.6-.05,.03-.06,.14-.06,.22-.14,1.23-.78,2.06-1.78,2.29-1.17,.28-2.44-.2-3.03-1.22-.25-.44-.34-.98-.49-1.47-.04-.12-.02-.25-.04-.37ZM.92,5.24l-.05,.2c-.2,1.01,.5,1.76,1.56,1.67,.02,.12,.06,.24,.06,.36,0,.66,0,1.32,0,1.98,0,.54,.35,.99,.83,1.12,.24,.07,.45,.07,.5-.27,.03-.18,.1-.35,.16-.52,.13-.24,.24-.49,.41-.71,.5-.67,1.44-.59,1.83,.15,.09,.17,.18,.35,.24,.53,.07,.21,.18,.25,.39,.18,.58-.19,1.18-.35,1.76-.53,.6-.19,1.12-.1,1.56,.36l.25,.76c.53-.15,.81-.57,.77-1.12,.01-.76,.03-1.53,.04-2.29,.35-.1,.69-.2,1.04-.29,.58-.16,.63-.26,.38-.83-.49-1.45-.97-2.91-1.47-4.36-.2-.56-.63-.83-1.24-.82-2,.01-4,0-6.01,0-.12,0-.25,.02-.37,.03l-.07,.02h0c-.57,.07-.96,.5-.97,1.12-.01,.77,0,1.55,0,2.32-.14,0-.27,0-.41,0-.55,.02-1.01,.39-1.16,.94h0Zm8.34,4.92c-.15,0-.32-.01-.46,.03-.75,.22-1.5,.46-2.25,.68-.37,.11-.51,.03-.66-.33-.12-.28-.22-.57-.36-.85-.05-.11-.17-.23-.28-.25-.07-.02-.17,.14-.26,.22l-.26,.54c-.09,.29-.22,.58-.27,.87-.14,.73,0,1.41,.46,2,.49,.62,1.46,.89,2.2,.6,.67-.26,1.04-.97,.98-1.82,0-.11,.07-.28,.16-.35,.34-.26,.7-.47,1.04-.72,.33-.24,.31-.47-.03-.63Z"
  }), Logo_jsx("path", {
    class: "q",
    d: "M10.14,9.77c-.44-.47-.96-.56-1.56-.36-.58,.19-1.18,.35-1.76,.53-.2,.06-.32,.03-.39-.18-.06-.18-.15-.36-.24-.53-.38-.74-1.32-.82-1.83-.15-.16,.22-.27,.47-.41,.71-.52-.08-.73-.31-.73-.85,0-1.49,0-2.99,0-4.48,0-.79-.03-1.59-.05-2.38,.1-.1,.2-.21,.32-.28,.18-.1,.38-.24,.57-.24,1.38-.02,2.77,0,4.15,0-.3,.3-.36,.54-.17,.73,.26,.26,.48,.1,.71-.08,.34-.27,.8-.24,1.17,.03,.37,.27,.48,.26,.77-.07l1.35,3.93c-.09,.04-.18,.09-.27,.12q-.64,.21-.6,.91c-.01,.76-.03,1.53-.04,2.29-.29,.25-.61,.42-1.02,.36Zm-3.25-4.74l-.34-.65c.07-.02,.18-.03,.22-.08,.09-.13,.23-.29,.21-.41-.02-.13-.2-.32-.31-.33-.52-.04-1.05-.04-1.57,0-.12,0-.31,.21-.31,.32,0,.14,.13,.3,.24,.43,.05,.06,.18,.06,.24,.07-.12,.26-.28,.49-.34,.74-.12,.59,.47,1.35,1.4,1.06,.07,.03,.14,.08,.21,.08,.73,0,1.46,0,2.19,0,.07,0,.14-.05,.21-.08,.89,.19,1.41-.23,1.41-1.14,0-.3,0-.59,0-.89,0-.61-.41-1.04-.98-1.05-.59-.01-1.01,.41-1.03,1.03-.01,.29-.01,.59-.02,.89h-1.43Zm.01,2.32c.23-.1,.4-.22,.2-.46-.22-.26-.5-.35-.83-.27-.32,.07-.53,.28-.58,.6-.02,.09,.11,.23,.2,.32,.08,.1,.24,.15,.29,.25,.32,.64,.97,1.02,1.64,.95,.36-.04,.55-.2,.51-.46-.04-.32-.26-.38-.55-.36-.42,.03-.69-.15-.87-.57Z"
  }), Logo_jsx("path", {
    class: "r",
    d: "M12.07,6.09c-.45-1.31-.9-2.62-1.35-3.93,.04-.28-.1-.47-.32-.62-.73-.49-1.45-.43-2.16,.01-1.38,0-2.77-.01-4.15,0-.19,0-.39,.14-.57,.24-.12,.07-.21,.19-.32,.28,.02-.42,0-.85,.26-1.21h0l.07-.02c.12,0,.25-.03,.37-.03,2,0,4,0,6.01,0,.61,0,1.04,.26,1.24,.82,.51,1.45,.98,2.9,1.47,4.36l-.55,.1Z"
  }), Logo_jsx("path", {
    class: "c",
    d: "M3.46,.86c-.27,.37-.24,.79-.26,1.21,.02,.79,.04,1.59,.05,2.38,0,1.49,0,2.99,0,4.48,0,.53,.21,.77,.73,.85-.05,.17-.13,.34-.16,.52-.05,.33-.25,.33-.5,.27-.48-.13-.82-.58-.83-1.12,0-.66,0-1.32,0-1.98,0-.12-.04-.24-.06-.36,.02-.12,.07-.24,.07-.36,0-.69,0-1.38,0-2.06v-.39c0-.77-.01-1.55,0-2.32,0-.62,.39-1.05,.97-1.12Z"
  }), Logo_jsx("path", {
    class: "i",
    d: "M4.73,10.21c.09-.18,.17-.36,.26-.54,.09,.11,.2,.2,.25,.32,.11,.27,.18,.56,.28,.84,.23,.59,.49,.7,1.07,.47,.54-.22,1.07-.45,1.61-.66,.35-.13,.71-.22,1.06-.33-.12,.11-.21,.25-.35,.34-.35,.22-.71,.41-1.06,.61-.2,.11-.3,.23-.26,.51,.07,.5,0,1.03-.45,1.36-.44,.32-.92,.24-1.38-.01-.57-.32-.92-.82-1.01-1.46-.07-.48-.02-.97-.03-1.45Z"
  }), Logo_jsx("path", {
    class: "o",
    d: "M4.73,10.21c0,.48-.03,.97,.03,1.45,.09,.64,.43,1.14,1.01,1.46,.46,.26,.94,.33,1.38,.01,.45-.33,.52-.85,.45-1.36-.04-.28,.06-.4,.26-.51,.35-.2,.72-.39,1.06-.61,.13-.08,.23-.22,.35-.34v-.14c.33,.16,.35,.38,.02,.63-.34,.25-.7,.47-1.04,.72-.09,.07-.17,.23-.16,.35,.06,.85-.31,1.56-.98,1.82-.74,.29-1.71,.02-2.2-.6-.47-.59-.6-1.27-.46-2,.06-.3,.18-.58,.27-.87Z"
  }), Logo_jsx("path", {
    class: "m",
    d: "M2.49,4.69c0,.69,0,1.38,0,2.06,0,.12-.04,.24-.07,.36-1.06,.09-1.76-.66-1.56-1.67l.05-.2h0c.47-.33,.99-.52,1.57-.55Zm-.48,1.04c0-.07,.01-.14,0-.2-.03-.12-.08-.23-.12-.34-.12,.06-.27,.1-.36,.2-.08,.08-.11,.22-.12,.34-.02,.24,.22,.56,.41,.55,.36-.02,.13-.31,.2-.47,0-.02,0-.04,0-.07Z"
  }), Logo_jsx("path", {
    class: "e",
    d: "M9.26,10.17v.14c-.35,.11-.71,.2-1.05,.33-.54,.2-1.07,.44-1.61,.66-.59,.24-.85,.13-1.07-.47-.1-.28-.17-.57-.28-.84-.05-.12-.17-.22-.25-.32,.09-.08,.19-.23,.26-.22,.11,.02,.23,.14,.28,.25,.14,.27,.24,.57,.36,.85,.15,.36,.3,.44,.66,.33,.75-.23,1.5-.46,2.25-.68,.14-.04,.31-.02,.46-.03Z"
  }), Logo_jsx("path", {
    class: "d",
    d: "M12.07,6.09l.55-.1c.25,.57,.2,.67-.38,.83-.35,.1-.69,.2-1.04,.29q-.04-.7,.6-.91c.09-.03,.18-.08,.27-.12Z"
  }), Logo_jsx("path", {
    class: "b",
    d: "M2.49,4.69c-.58,.03-1.1,.22-1.57,.55,.15-.54,.61-.92,1.16-.94,.14,0,.27,0,.41,0,0,.13,0,.26,0,.39Z"
  }), Logo_jsx("path", {
    class: "h",
    d: "M10.14,9.77c.4,.06,.73-.11,1.02-.36,.04,.55-.24,.96-.77,1.12l-.25-.76Z"
  }), Logo_jsx("path", {
    class: "b",
    d: "M.92,5.24l-.05,.2,.05-.2Z"
  }), Logo_jsx("path", {
    class: "c",
    d: "M3.53,.85l-.07,.02,.07-.02Z"
  }), Logo_jsx("path", {
    class: "f",
    d: "M8.32,5.04c0-.3,0-.59,.02-.89,.02-.62,.44-1.05,1.03-1.03,.57,.01,.97,.44,.98,1.05,0,.3,0,.59,0,.89,0,.91-.53,1.33-1.41,1.14-.43-.26-.61-.66-.61-1.15Z"
  }), Logo_jsx("path", {
    class: "g",
    d: "M6.32,6.19c-.92,.29-1.52-.47-1.4-1.06,.05-.25,.22-.48,.34-.74-.06-.02-.19-.01-.24-.07-.11-.12-.25-.29-.24-.43,0-.12,.2-.32,.31-.32,.52-.04,1.05-.04,1.57,0,.12,0,.3,.2,.31,.33,.02,.13-.12,.29-.21,.41-.04,.05-.14,.05-.22,.08l.34,.65c.08,.52-.15,.88-.57,1.15Z"
  }), Logo_jsx("path", {
    class: "k",
    d: "M6.9,7.36c.18,.42,.44,.6,.87,.57,.29-.02,.51,.04,.55,.36,.04,.27-.15,.43-.51,.46-.67,.07-1.32-.32-1.64-.95-.05-.11-.2-.16-.29-.25-.08-.09-.21-.23-.2-.32,.05-.32,.27-.52,.58-.6,.33-.08,.61,0,.83,.27,.2,.24,.04,.36-.2,.46Z"
  }), Logo_jsx("path", {
    class: "l",
    d: "M8.23,1.55c.72-.45,1.44-.51,2.16-.01,.22,.15,.36,.34,.32,.62-.3,.33-.41,.34-.77,.07-.37-.27-.82-.3-1.17-.03-.23,.18-.45,.34-.71,.08-.19-.19-.13-.43,.17-.73Z"
  }), Logo_jsx("path", {
    class: "p",
    d: "M6.32,6.19c.42-.27,.65-.63,.57-1.15h1.43c0,.5,.18,.89,.61,1.15-.07,.03-.14,.08-.21,.08-.73,0-1.46,0-2.19,0-.07,0-.14-.05-.21-.08Z"
  }), Logo_jsx("path", {
    class: "j",
    d: "M2.01,5.73s0,.05,0,.07c-.06,.16,.16,.45-.2,.47-.19,.01-.43-.3-.41-.55,0-.12,.04-.26,.12-.34,.09-.09,.24-.13,.36-.2,.04,.11,.09,.23,.12,.34,.02,.06,0,.14,0,.2Z"
  }));
}
/* harmony default export */ var Logo = (SvgLogo);
// CONCATENATED MODULE: ./components/icons/Menu.js
var Menu_jsx = external_react_["createElement"];
function Menu_extends() { return Menu_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Menu_extends.apply(null, arguments); }

function SvgMenu(props) {
  return Menu_jsx("svg", Menu_extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "menu_svg__feather menu_svg__feather-menu"
  }, props), Menu_jsx("path", {
    d: "M3 12h18M3 6h18M3 18h18"
  }));
}
/* harmony default export */ var Menu = (SvgMenu);
// CONCATENATED MODULE: ./components/icons/Search.js
var Search_jsx = external_react_["createElement"];
function Search_extends() { return Search_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Search_extends.apply(null, arguments); }

function SvgSearch(props) {
  return Search_jsx("svg", Search_extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none"
  }, props), Search_jsx("path", {
    d: "M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z",
    fill: "currentColor"
  }));
}
/* harmony default export */ var Search = (SvgSearch);
// CONCATENATED MODULE: ./components/icons/Spinner.js
var Spinner_jsx = external_react_["createElement"];
function Spinner_extends() { return Spinner_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Spinner_extends.apply(null, arguments); }

function SvgSpinner(props) {
  return Spinner_jsx("svg", Spinner_extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, props), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.9166666666666666s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(30 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.8333333333333334s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(60 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.75s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(90 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.6666666666666666s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(120 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5833333333333334s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(150 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(180 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.4166666666666667s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(210 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.3333333333333333s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(240 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.25s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(270 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.16666666666666666s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(300 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.08333333333333333s",
    repeatCount: "indefinite"
  })), Spinner_jsx("rect", {
    x: 47,
    y: 24,
    rx: 3,
    ry: 6,
    width: 6,
    height: 12,
    fill: "currentColor",
    transform: "rotate(330 50 50)"
  }, Spinner_jsx("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  })));
}
/* harmony default export */ var Spinner = (SvgSpinner);
// CONCATENATED MODULE: ./components/icons/World.js
var World_jsx = external_react_["createElement"];
function World_extends() { return World_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, World_extends.apply(null, arguments); }

function SvgWorld(props) {
  return World_jsx("svg", World_extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    fill: "none"
  }, props), World_jsx("path", {
    d: "M8 0a8 8 0 100 16A8 8 0 008 0zM7 14.32a6.4 6.4 0 01-5.23-7.75L6 10.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1V9c0-.44-.56-1-1-1H5V6h1c.44 0 1-.56 1-1V4h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z",
    fill: "currentColor"
  }));
}
/* harmony default export */ var World = (SvgWorld);
// CONCATENATED MODULE: ./components/icons/index.js










/***/ }),

/***/ "elyg":
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
var _normalizeTrailingSlash = __webpack_require__("X24+");
var _denormalizePagePath = __webpack_require__("wkBG");
var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));
var _utils = __webpack_require__("g/15");
var _isDynamic = __webpack_require__("/jkW");
var _parseRelativeUrl = __webpack_require__("hS4m");
var _querystring = __webpack_require__("3WeD");
var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));
var _routeMatcher = __webpack_require__("gguc");
var _routeRegex = __webpack_require__("YTqd");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));
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
    if (false) {}
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
          if (false) {}
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
      if (false) {}
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
    if (false) {}
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
      if (false) {}
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
    if (false) {}
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
    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }
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

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "fm5W":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navItem": "nav-item_navItem__1zKDV",
	"navItemSelected": "nav-item_navItemSelected__2yQW2"
};


/***/ }),

/***/ "fs4T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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
/* harmony default export */ __webpack_exports__["a"] = (useComponentVisible);

/***/ }),

/***/ "g/15":
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
var _formatUrl = __webpack_require__("6D7l"); /**
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`
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
  if (false) {}
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (false) {}
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__("g/15");
var _querystring = __webpack_require__("3WeD");
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

/***/ "jCHi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2hj0");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Z7cN");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dhEp");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3Qbe");
/* harmony import */ var _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_extra_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Extra = ({
  marginTop = 24
}) => {
  const {
    tagState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_tag__WEBPACK_IMPORTED_MODULE_1__[/* TagContext */ "a"]);
  return __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container
  }, __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.tagContainer,
    style: {
      marginTop: `${marginTop}px`
    }
  }, __jsx("h2", null, "Popular Tags"), !tagState && __jsx("div", {
    className: "loading"
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__[/* Spinner */ "h"], null)), __jsx("div", {
    className: _extra_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.popularTags
  }, tagState === null || tagState === void 0 ? void 0 : tagState.map(tag => __jsx(_tag__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    key: tag._id,
    count: tag.count
  }, tag._id)))));
};
/* harmony default export */ __webpack_exports__["a"] = (Extra);

/***/ }),

/***/ "jS2O":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "layout_body__2IZRo",
	"main": "layout_main__3O2ar",
	"container": "layout_container__2yT5o"
};


/***/ }),

/***/ "l4qj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "post-wrapper_layout__bER9l",
	"borderBottom": "post-wrapper_borderBottom__3ei2Z"
};


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");
var _interopRequireDefault = __webpack_require__("AroE");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__("cDcd"));
var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__("Osoz");
var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));
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

/***/ "oVS1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LIAn");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HlVv");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sXwS");
/* harmony import */ var _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4__);
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_auth__WEBPACK_IMPORTED_MODULE_2__[/* AuthContext */ "a"]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container, borderBottom && _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderBottom)
  }, __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title
  }, __jsx("h1", null, title), __jsx("div", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer
  }, button && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: isAuthenticated() ? '/questions/ask' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi
  }, "Ask Question"), group && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: isAuthenticated() ? '/groups/createGroup' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi
  }, "Create group"), askBtn && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: isAuthenticated() ? '/groups/ask' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi
  }, "Ask question"), adminBtn && __jsx(_button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: isAuthenticated() ? '/groups/admin' : '/auth',
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btndatcauhoi
  }, "Group manage"))), children && __jsx("p", {
    className: _page_title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.summary
  }, children));
};
/* harmony default export */ __webpack_exports__["a"] = (PageTitle);

/***/ }),

/***/ "okHz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__("v0uu");

// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// EXTERNAL MODULE: ./components/navigation/index.js + 1 modules
var navigation = __webpack_require__("Zaxt");

// EXTERNAL MODULE: ./components/layout/sidebar/sidebar.module.css
var sidebar_module = __webpack_require__("pJVE");
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);

// CONCATENATED MODULE: ./components/layout/sidebar/index.js
var __jsx = external_react_default.a.createElement;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




const Sidebar = _ref => {
  let {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className"]);
  return __jsx("nav", _extends({
    className: external_classnames_default()(sidebar_module_default.a.sidebar, className)
  }, props), __jsx(navigation["a" /* default */], null));
};
/* harmony default export */ var sidebar = (Sidebar);
// EXTERNAL MODULE: ./components/layout/main/index.js
var main = __webpack_require__("thU0");

// EXTERNAL MODULE: ./components/layout/extra/index.js
var layout_extra = __webpack_require__("jCHi");

// EXTERNAL MODULE: ./components/layout/header/index.js + 1 modules
var header = __webpack_require__("v878");

// EXTERNAL MODULE: ./components/layout/layout.module.css
var layout_module = __webpack_require__("jS2O");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// CONCATENATED MODULE: ./components/layout/index.js
var layout_jsx = external_react_default.a.createElement;









const Layout = ({
  extra = true,
  children
}) => {
  const size = Object(useWindowSize["a" /* default */])();
  return layout_jsx("div", {
    className: layout_module_default.a.layout
  }, layout_jsx(header["a" /* default */], null), layout_jsx("div", {
    className: layout_module_default.a.container
  }, layout_jsx("div", {
    className: external_classnames_default()(layout_module_default.a.body, !extra && layout_module_default.a.main)
  }, size.width > constants["a" /* default */].MOBILE_SIZE && layout_jsx(sidebar, null), layout_jsx(main["a" /* default */], null, children), size.width > constants["a" /* default */].TABLET_SIZE && extra && layout_jsx(layout_extra["a" /* default */], null))));
};
/* harmony default export */ var layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "pJVE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "sidebar_sidebar__1R-_j"
};


/***/ }),

/***/ "sXwS":
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

/***/ "tda2":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "add-comment_container__1HLB5",
	"button": "add-comment_button__1B6fu",
	"status": "add-comment_status__17kg1"
};


/***/ }),

/***/ "thU0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GtVp");
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Main = ({
  border = true,
  children
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_main_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main, border && _main_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.border)
  }, children);
};
/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ "v0uu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  TABLET_SIZE: 980,
  MOBILE_SIZE: 640
});

/***/ }),

/***/ "v878":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./hooks/useComponentVisible.js
var useComponentVisible = __webpack_require__("fs4T");

// EXTERNAL MODULE: ./hooks/useWindowSize.js
var useWindowSize = __webpack_require__("MhZx");

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__("v0uu");

// EXTERNAL MODULE: ./store/modal.js
var modal = __webpack_require__("/Wiz");

// EXTERNAL MODULE: ./store/auth.js
var auth = __webpack_require__("LIAn");

// EXTERNAL MODULE: ./components/button/index.js
var components_button = __webpack_require__("HlVv");

// EXTERNAL MODULE: ./components/navigation/index.js + 1 modules
var navigation = __webpack_require__("Zaxt");

// EXTERNAL MODULE: ./components/navigation-dropdown/navigation-dropdown.module.css
var navigation_dropdown_module = __webpack_require__("HcwM");
var navigation_dropdown_module_default = /*#__PURE__*/__webpack_require__.n(navigation_dropdown_module);

// CONCATENATED MODULE: ./components/navigation-dropdown/index.js
var __jsx = external_react_default.a.createElement;



const NavigationDropdown = () => {
  return __jsx("div", {
    className: navigation_dropdown_module_default.a.dialog
  }, __jsx("div", {
    className: navigation_dropdown_module_default.a.sidebar
  }, __jsx(navigation["a" /* default */], null)));
};
/* harmony default export */ var navigation_dropdown = (NavigationDropdown);
// EXTERNAL MODULE: ./components/icons/index.js + 9 modules
var icons = __webpack_require__("dhEp");

// EXTERNAL MODULE: ./components/layout/header/header.module.css
var header_module = __webpack_require__("VgF2");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./components/layout/header/index.js
var header_jsx = external_react_default.a.createElement;
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
  } = Object(external_react_["useContext"])(modal["a" /* default */]);
  const {
    isAuthenticated,
    authState,
    logout
  } = Object(external_react_["useContext"])(auth["a" /* AuthContext */]);
  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = Object(useComponentVisible["a" /* default */])(false);
  const size = Object(useWindowSize["a" /* default */])();
  Object(external_react_["useEffect"])(() => {
    if (size.width > constants["a" /* default */].MOBILE_SIZE) {
      setIsComponentVisible(false);
    }
  }, [size]);
  return header_jsx("header", _extends({
    className: external_classnames_default()(header_module_default.a.header, className)
  }, props), header_jsx("div", {
    className: header_module_default.a.container
  }, header_jsx("div", {
    ref: toggleRef,
    className: header_module_default.a.menuContainer
  }, header_jsx(components_button["a" /* default */], {
    className: header_module_default.a.menu,
    onClick: () => setIsComponentVisible(isOpen => !isOpen)
  }, isComponentVisible ? header_jsx(icons["d" /* Close */], null) : header_jsx(icons["f" /* Menu */], null))), header_jsx(components_button["a" /* default */], {
    className: header_module_default.a.logo,
    href: "/"
  }, header_jsx(icons["e" /* Logo */], null), header_jsx("p", null, header_jsx("span", null, "Askem"))), header_jsx("div", {
    style: {
      flex: 1
    }
  }), isAuthenticated() ? header_jsx("div", {
    className: header_module_default.a.userInfo
  }, header_jsx("p", null, "Welcome", ' ', header_jsx(link_default.a, {
    href: "/users/[user]",
    as: `/users/${authState.userInfo.username}`
  }, header_jsx("a", null, authState.userInfo.username, "!"))), header_jsx(components_button["a" /* default */], {
    className: header_module_default.a.btnlogout // Đảm bảo className được cập nhật
    ,
    primary: true,
    onClick: () => logout()
  }, header_jsx("span", null, "Log Out"), " ")) : header_jsx(external_react_default.a.Fragment, null, header_jsx(components_button["a" /* default */], {
    className: header_module_default.a.btnlogout,
    secondary: true,
    onClick: () => handleComponentVisible(true, 'login')
  }, "Log in"), header_jsx(components_button["a" /* default */], {
    className: header_module_default.a.btnlogout,
    primary: true,
    onClick: () => handleComponentVisible(true, 'signup')
  }, "Sign up"))), header_jsx("div", {
    ref: ref
  }, isComponentVisible && header_jsx(navigation_dropdown, null)));
};
/* harmony default export */ var header = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });