"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tasks/page",{

/***/ "(app-pages-browser)/./app/componants/FilterSelectDropDown.tsx":
/*!*************************************************!*\
  !*** ./app/componants/FilterSelectDropDown.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FilterSelectDropDown = (param)=>{\n    let { options, title, selectedValues, onChange } = param;\n    // const [selectedValues, setSelectedValues] = useState<(string | boolean)[]>(\n    //   []\n    // );\n    //Update to have selected values passed from filterBar\n    //Selected values should be updated when onChange is called\n    const handleCheckboxChange = (value)=>{\n        onChange(value);\n    // if (selectedValues?.includes(value)) {\n    //   setSelectedValues(\n    //     selectedValues.filter((oldValue) => oldValue !== value)\n    //   );\n    //   onChange(selectedValues.filter((oldValue) => oldValue !== value));\n    // } else {\n    //   setSelectedValues([...selectedValues, value]);\n    //   onChange([...selectedValues, value]);\n    // }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Root, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Trigger, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"outline\",\n                    size: \"1\",\n                    className: \"h-8 border-dashed\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Content, {\n                width: \"360px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                    gap: \"3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        flexGrow: \"1\",\n                        children: options.map((option)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                                gap: \"2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {\n                                        onCheckedChange: ()=>handleCheckboxChange(option.value),\n                                        \"aria-checked\": selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.includes(option.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                        children: option.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, option.value.toString(), true, {\n                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FilterSelectDropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterSelectDropDown);\nvar _c;\n$RefreshReg$(_c, \"FilterSelectDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25hbnRzL0ZpbHRlclNlbGVjdERyb3BEb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEU7QUFDdEM7QUFZeEMsTUFBTU8sdUJBQXVCO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFTO0lBQy9FLDhFQUE4RTtJQUM5RSxPQUFPO0lBQ1AsS0FBSztJQUVQLHNEQUFzRDtJQUN0RCwyREFBMkQ7SUFJekQsTUFBTUMsdUJBQXVCLENBQUNDO1FBQzVCRixTQUFTRTtJQUNULHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsOERBQThEO0lBQzlELE9BQU87SUFDUCx1RUFBdUU7SUFDdkUsV0FBVztJQUNYLG1EQUFtRDtJQUNuRCwwQ0FBMEM7SUFDMUMsSUFBSTtJQUNOO0lBRUEscUJBQ0UsOERBQUNWLDBEQUFZOzswQkFDWCw4REFBQ0EsNkRBQWU7MEJBQ2QsNEVBQUNILG9EQUFNQTtvQkFBQ2dCLFNBQVE7b0JBQVVDLE1BQUs7b0JBQUlDLFdBQVU7OEJBQzFDVDs7Ozs7Ozs7Ozs7MEJBSUwsOERBQUNOLDZEQUFlO2dCQUFDaUIsT0FBTTswQkFDckIsNEVBQUNsQixrREFBSUE7b0JBQUNtQixLQUFJOzhCQUNSLDRFQUFDcEIsaURBQUdBO3dCQUFDcUIsVUFBUztrQ0FDWGQsUUFBUWUsR0FBRyxDQUFDLENBQUNDOzRCQUNaLHFCQUNFLDhEQUFDdEIsa0RBQUlBO2dDQUErQm1CLEtBQUs7O2tEQUN2Qyw4REFBQ2hCLHNEQUFRQTt3Q0FDUG9CLGlCQUFpQixJQUFNYixxQkFBcUJZLE9BQU9YLEtBQUs7d0NBQ3hEYSxjQUFZLEVBQUVoQiwyQkFBQUEscUNBQUFBLGVBQWdCaUIsUUFBUSxDQUFDSCxPQUFPWCxLQUFLOzs7Ozs7a0RBRXJELDhEQUFDVCxrREFBSUE7a0RBQUVvQixPQUFPSSxLQUFLOzs7Ozs7OytCQUxWSixPQUFPWCxLQUFLLENBQUNnQixRQUFROzs7Ozt3QkFRcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtLQWxETXRCO0FBb0ROLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmFudHMvRmlsdGVyU2VsZWN0RHJvcERvd24udHN4PzdiYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBCb3gsIEZsZXgsIFBvcG92ZXIsIFRleHQsIENoZWNrYm94IH0gZnJvbSBcIkByYWRpeC11aS90aGVtZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuO1xyXG4gIH1bXTtcclxuICBzZWxlY3RlZFZhbHVlczogKHN0cmluZyB8IGJvb2xlYW4pW107XHJcbiAgb25DaGFuZ2U6IChzZWxlY3RlZFZhbHVlczogc3RyaW5nIHwgYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyU2VsZWN0RHJvcERvd24gPSAoeyBvcHRpb25zLCB0aXRsZSwgc2VsZWN0ZWRWYWx1ZXMsIG9uQ2hhbmdlIH06IFByb3BzKSA9PiB7XHJcbiAgLy8gY29uc3QgW3NlbGVjdGVkVmFsdWVzLCBzZXRTZWxlY3RlZFZhbHVlc10gPSB1c2VTdGF0ZTwoc3RyaW5nIHwgYm9vbGVhbilbXT4oXHJcbiAgLy8gICBbXVxyXG4gIC8vICk7XHJcblxyXG4vL1VwZGF0ZSB0byBoYXZlIHNlbGVjdGVkIHZhbHVlcyBwYXNzZWQgZnJvbSBmaWx0ZXJCYXJcclxuLy9TZWxlY3RlZCB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQgd2hlbiBvbkNoYW5nZSBpcyBjYWxsZWRcclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBvbkNoYW5nZSh2YWx1ZSlcclxuICAgIC8vIGlmIChzZWxlY3RlZFZhbHVlcz8uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAvLyAgIHNldFNlbGVjdGVkVmFsdWVzKFxyXG4gICAgLy8gICAgIHNlbGVjdGVkVmFsdWVzLmZpbHRlcigob2xkVmFsdWUpID0+IG9sZFZhbHVlICE9PSB2YWx1ZSlcclxuICAgIC8vICAgKTtcclxuICAgIC8vICAgb25DaGFuZ2Uoc2VsZWN0ZWRWYWx1ZXMuZmlsdGVyKChvbGRWYWx1ZSkgPT4gb2xkVmFsdWUgIT09IHZhbHVlKSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBzZXRTZWxlY3RlZFZhbHVlcyhbLi4uc2VsZWN0ZWRWYWx1ZXMsIHZhbHVlXSk7XHJcbiAgICAvLyAgIG9uQ2hhbmdlKFsuLi5zZWxlY3RlZFZhbHVlcywgdmFsdWVdKTtcclxuICAgIC8vIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvcG92ZXIuUm9vdD5cclxuICAgICAgPFBvcG92ZXIuVHJpZ2dlcj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cIjFcIiBjbGFzc05hbWU9XCJoLTggYm9yZGVyLWRhc2hlZFwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1BvcG92ZXIuVHJpZ2dlcj5cclxuXHJcbiAgICAgIDxQb3BvdmVyLkNvbnRlbnQgd2lkdGg9XCIzNjBweFwiPlxyXG4gICAgICAgIDxGbGV4IGdhcD1cIjNcIj5cclxuICAgICAgICAgIDxCb3ggZmxleEdyb3c9XCIxXCI+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxGbGV4IGtleT17b3B0aW9uLnZhbHVlLnRvU3RyaW5nKCl9IGdhcD17XCIyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKG9wdGlvbi52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jaGVja2VkPXtzZWxlY3RlZFZhbHVlcz8uaW5jbHVkZXMob3B0aW9uLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+e29wdGlvbi5sYWJlbH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvUG9wb3Zlci5Db250ZW50PlxyXG4gICAgPC9Qb3BvdmVyLlJvb3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlclNlbGVjdERyb3BEb3duO1xyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQm94IiwiRmxleCIsIlBvcG92ZXIiLCJUZXh0IiwiQ2hlY2tib3giLCJSZWFjdCIsIkZpbHRlclNlbGVjdERyb3BEb3duIiwib3B0aW9ucyIsInRpdGxlIiwic2VsZWN0ZWRWYWx1ZXMiLCJvbkNoYW5nZSIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwidmFsdWUiLCJSb290IiwiVHJpZ2dlciIsInZhcmlhbnQiLCJzaXplIiwiY2xhc3NOYW1lIiwiQ29udGVudCIsIndpZHRoIiwiZ2FwIiwiZmxleEdyb3ciLCJtYXAiLCJvcHRpb24iLCJvbkNoZWNrZWRDaGFuZ2UiLCJhcmlhLWNoZWNrZWQiLCJpbmNsdWRlcyIsImxhYmVsIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/componants/FilterSelectDropDown.tsx\n"));

/***/ })

});