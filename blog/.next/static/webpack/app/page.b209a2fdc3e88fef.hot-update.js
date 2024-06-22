"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Like/Like.tsx":
/*!**********************************!*\
  !*** ./components/Like/Like.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Like: function() { return /* binding */ Like; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Like_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Like.module.css */ \"(app-pages-browser)/./components/Like/Like.module.css\");\n/* harmony import */ var _Like_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Like_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_like_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/like.svg */ \"(app-pages-browser)/./public/like.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Like auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Like = (param)=>{\n    let { children, isActive = false, count = 0, setLike, className, ...props } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(isActive);\n    const [likeCount, setLikeCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(count);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setActive(isActive);\n        setLikeCount(count);\n    }, [\n        isActive,\n        count\n    ]);\n    const clickLike = ()=>{\n        const newActive = !active;\n        const newCount = newActive ? likeCount + 1 : likeCount - 1;\n        set;\n        setLikeCount(newCount);\n        if (setLike) {\n            setLike(!active, likeCount);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Like_module_css__WEBPACK_IMPORTED_MODULE_1___default().like), className, {\n            [(_Like_module_css__WEBPACK_IMPORTED_MODULE_1___default().active)]: isActive\n        }),\n        ...props,\n        onClick: clickLike,\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_like_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\work dev\\\\dzpurplescoolnew\\\\blog\\\\components\\\\Like\\\\Like.tsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\work dev\\\\dzpurplescoolnew\\\\blog\\\\components\\\\Like\\\\Like.tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Like, \"PYjd7SnpZmuH3c6YK0wrcnwxlwo=\");\n_c = Like;\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlrZS9MaWtlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN1QztBQUVYO0FBQ2lCO0FBQ0Q7QUFFckMsTUFBTUssT0FBTztRQUFDLEVBQ3BCQyxRQUFRLEVBQ1JDLFdBQVcsS0FBSyxFQUNoQkMsUUFBUSxDQUFDLEVBQ1RDLE9BQU8sRUFDUEMsU0FBUyxFQUNULEdBQUdDLE9BQ1E7O0lBQ1gsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFVRztJQUM5QyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQVNJO0lBRW5ETCxnREFBU0EsQ0FBQztRQUNUVSxVQUFVTjtRQUNWUSxhQUFhUDtJQUNkLEdBQUc7UUFBQ0Q7UUFBVUM7S0FBTTtJQUVwQixNQUFNUSxZQUFZO1FBQ2pCLE1BQU1DLFlBQVksQ0FBQ0w7UUFDbkIsTUFBTU0sV0FBV0QsWUFBWUgsWUFBWSxJQUFJQSxZQUFZO1FBQ3pESztRQUNBSixhQUFhRztRQUNiLElBQUlULFNBQVM7WUFDWkEsUUFBUSxDQUFDRyxRQUFRRTtRQUNsQjtJQUNEO0lBRUEscUJBQ0MsOERBQUNNO1FBQ0FWLFdBQVdULGlEQUFFQSxDQUFDRCw4REFBVyxFQUFFVSxXQUFXO1lBQ3JDLENBQUNWLGdFQUFhLENBQUMsRUFBRU87UUFDbEI7UUFDQyxHQUFHSSxLQUFLO1FBQ1RXLFNBQVNOOztZQUVSVjswQkFDRCw4REFBQ0osd0RBQVFBOzs7Ozs7Ozs7OztBQUdaLEVBQUU7R0F0Q1dHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlrZS9MaWtlLnRzeD9iZDJhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaWtlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgTGlrZVByb3BzIH0gZnJvbSAnLi9MaWtlLnByb3BzJztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaWtlSWNvbiBmcm9tICcuLi8uLi9wdWJsaWMvbGlrZS5zdmcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IExpa2UgPSAoe1xuXHRjaGlsZHJlbixcblx0aXNBY3RpdmUgPSBmYWxzZSxcblx0Y291bnQgPSAwLFxuXHRzZXRMaWtlLFxuXHRjbGFzc05hbWUsXG5cdC4uLnByb3BzXG59OiBMaWtlUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihpc0FjdGl2ZSk7XG5cdGNvbnN0IFtsaWtlQ291bnQsIHNldExpa2VDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KGNvdW50KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEFjdGl2ZShpc0FjdGl2ZSk7XG5cdFx0c2V0TGlrZUNvdW50KGNvdW50KTtcblx0fSwgW2lzQWN0aXZlLCBjb3VudF0pO1xuXG5cdGNvbnN0IGNsaWNrTGlrZSA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdBY3RpdmUgPSAhYWN0aXZlO1xuXHRcdGNvbnN0IG5ld0NvdW50ID0gbmV3QWN0aXZlID8gbGlrZUNvdW50ICsgMSA6IGxpa2VDb3VudCAtIDE7XG5cdFx0c2V0XG5cdFx0c2V0TGlrZUNvdW50KG5ld0NvdW50KTtcblx0XHRpZiAoc2V0TGlrZSkge1xuXHRcdFx0c2V0TGlrZSghYWN0aXZlLCBsaWtlQ291bnQpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLmxpa2UsIGNsYXNzTmFtZSwge1xuXHRcdFx0XHRbc3R5bGVzLmFjdGl2ZV06IGlzQWN0aXZlXG5cdFx0XHR9KX1cblx0XHRcdHsuLi5wcm9wc31cblx0XHRcdG9uQ2xpY2s9e2NsaWNrTGlrZX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8TGlrZUljb24gLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY24iLCJMaWtlSWNvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlrZSIsImNoaWxkcmVuIiwiaXNBY3RpdmUiLCJjb3VudCIsInNldExpa2UiLCJjbGFzc05hbWUiLCJwcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImxpa2VDb3VudCIsInNldExpa2VDb3VudCIsImNsaWNrTGlrZSIsIm5ld0FjdGl2ZSIsIm5ld0NvdW50Iiwic2V0IiwiZGl2IiwibGlrZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Like/Like.tsx\n"));

/***/ })

});