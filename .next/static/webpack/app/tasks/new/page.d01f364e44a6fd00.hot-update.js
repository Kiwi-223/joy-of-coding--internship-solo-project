"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tasks/new/page",{

/***/ "(app-pages-browser)/./app/tasks/new/page.tsx":
/*!********************************!*\
  !*** ./app/tasks/new/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst newTask = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-9\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.TextField.Root, {\n                placeholder: \"Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.TextArea, {\n                placeholder: \"Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (newTask); // .content {\n //   display: flex;\n //   flex-wrap: wrap; /* Allows items to wrap to the next line */\n //   gap: 20px; /* Adjust the space between cards */\n //   row-gap: 20px;\n //   padding: 20px; /* Padding around the entire grid */\n //   justify-content: center; /* Center item in the container */\n //   background-color: lightgrey;\n // }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90YXNrcy9uZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRXVEO0FBQzdCO0FBRTFCLE1BQU1HLFVBQVU7SUFDZCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNKLDREQUFjO2dCQUFDTSxhQUFZOzs7Ozs7MEJBQzVCLDhEQUFDUCxzREFBUUE7Z0JBQUNPLGFBQVk7Ozs7Ozs7Ozs7OztBQUc1QjtBQUVBLCtEQUFlSixPQUFPQSxFQUFDLENBRXZCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUVBQWlFO0NBQ2pFLG9EQUFvRDtDQUNwRCxtQkFBbUI7Q0FDbkIsd0RBQXdEO0NBQ3hELGdFQUFnRTtDQUNoRSxpQ0FBaUM7Q0FDakMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdGFza3MvbmV3L3BhZ2UudHN4PzRlZWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBUZXh0QXJlYSwgVGV4dEZpZWxkIH0gZnJvbSBcIkByYWRpeC11aS90aGVtZXNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgbmV3VGFzayA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3B4LTknID5cclxuICAgICAgPFRleHRGaWVsZC5Sb290IHBsYWNlaG9sZGVyPVwiVGl0bGVcIj48L1RleHRGaWVsZC5Sb290PlxyXG4gICAgICA8VGV4dEFyZWEgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvVGV4dEFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3VGFzaztcclxuXHJcbi8vIC5jb250ZW50IHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3dzIGl0ZW1zIHRvIHdyYXAgdG8gdGhlIG5leHQgbGluZSAqL1xyXG4vLyAgIGdhcDogMjBweDsgLyogQWRqdXN0IHRoZSBzcGFjZSBiZXR3ZWVuIGNhcmRzICovXHJcbi8vICAgcm93LWdhcDogMjBweDtcclxuLy8gICBwYWRkaW5nOiAyMHB4OyAvKiBQYWRkaW5nIGFyb3VuZCB0aGUgZW50aXJlIGdyaWQgKi9cclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW0gaW4gdGhlIGNvbnRhaW5lciAqL1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuLy8gfSJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIlRleHRGaWVsZCIsIlJlYWN0IiwibmV3VGFzayIsImRpdiIsImNsYXNzTmFtZSIsIlJvb3QiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/tasks/new/page.tsx\n"));

/***/ })

});