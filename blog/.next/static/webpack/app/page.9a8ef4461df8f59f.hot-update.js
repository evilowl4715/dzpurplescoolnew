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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Like: function() { return /* binding */ Like; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Like_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Like.module.css */ \"(app-pages-browser)/./components/Like/Like.module.css\");\n/* harmony import */ var _Like_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Like_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_like_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/like.svg */ \"(app-pages-browser)/./public/like.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Like = (param)=>{\n    let { children, isActive = false, count = 0, className, ...props } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [likeCount, setLikeCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const clickLike = ()=>{\n        setA;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Like_module_css__WEBPACK_IMPORTED_MODULE_1___default().like), className, {\n            [(_Like_module_css__WEBPACK_IMPORTED_MODULE_1___default().active)]: isActive\n        }),\n        ...props,\n        onClick: clickLike,\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_like_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\work dev\\\\dzpurplescoolnew\\\\blog\\\\components\\\\Like\\\\Like.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\work dev\\\\dzpurplescoolnew\\\\blog\\\\components\\\\Like\\\\Like.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Like, \"y0NxyNgQiXX90x4xTpJvqVAz6C0=\");\n_c = Like;\nvar _c;\n$RefreshReg$(_c, \"Like\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGlrZS9MaWtlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVYO0FBQ2lCO0FBQ0Q7QUFFckMsTUFBTUksT0FBTztRQUFDLEVBQ3BCQyxRQUFRLEVBQ1JDLFdBQVcsS0FBSyxFQUNoQkMsUUFBUSxDQUFDLEVBQ1RDLFNBQVMsRUFDVCxHQUFHQyxPQUNROztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBVTtJQUM5QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQVM7SUFFbkQsTUFBTVcsWUFBWTtRQUNqQkM7SUFDRDtJQUVBLHFCQUNDLDhEQUFDQztRQUNBUixXQUFXUCxpREFBRUEsQ0FBQ0QsOERBQVcsRUFBRVEsV0FBVztZQUNyQyxDQUFDUixnRUFBYSxDQUFDLEVBQUVNO1FBQ2xCO1FBQ0MsR0FBR0csS0FBSztRQUNUUyxTQUFTSjs7WUFFUlQ7MEJBQ0QsOERBQUNILHdEQUFRQTs7Ozs7Ozs7Ozs7QUFHWixFQUFFO0dBMUJXRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpa2UvTGlrZS50c3g/YmQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlrZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IExpa2VQcm9wcyB9IGZyb20gJy4vTGlrZS5wcm9wcyc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTGlrZUljb24gZnJvbSAnLi4vLi4vcHVibGljL2xpa2Uuc3ZnJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBMaWtlID0gKHtcblx0Y2hpbGRyZW4sXG5cdGlzQWN0aXZlID0gZmFsc2UsXG5cdGNvdW50ID0gMCxcblx0Y2xhc3NOYW1lLFxuXHQuLi5wcm9wc1xufTogTGlrZVByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXHRjb25zdCBbbGlrZUNvdW50LCBzZXRMaWtlQ291bnRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuXHRjb25zdCBjbGlja0xpa2UgPSAoKSA9PiB7XG5cdFx0c2V0QVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMubGlrZSwgY2xhc3NOYW1lLCB7XG5cdFx0XHRcdFtzdHlsZXMuYWN0aXZlXTogaXNBY3RpdmVcblx0XHRcdH0pfVxuXHRcdFx0ey4uLnByb3BzfVxuXHRcdFx0b25DbGljaz17Y2xpY2tMaWtlfVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDxMaWtlSWNvbiAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjbiIsIkxpa2VJY29uIiwidXNlU3RhdGUiLCJMaWtlIiwiY2hpbGRyZW4iLCJpc0FjdGl2ZSIsImNvdW50IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJsaWtlQ291bnQiLCJzZXRMaWtlQ291bnQiLCJjbGlja0xpa2UiLCJzZXRBIiwiZGl2IiwibGlrZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Like/Like.tsx\n"));

/***/ })

});