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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst FilterSelectDropDown = (param)=>{\n    let { options, title, onChange } = param;\n    _s();\n    const [selectedValues, setSelectedValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleCheckboxChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((value)=>{\n        setSelectedValues((prevSelectedValues)=>{\n            const newSelectedValues = prevSelectedValues.includes(value) ? prevSelectedValues.filter((oldValue)=>oldValue !== value) : [\n                ...prevSelectedValues,\n                value\n            ];\n            onChange(newSelectedValues);\n            return newSelectedValues;\n        });\n    }, [\n        onChange\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Root, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Trigger, {\n                as: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"outline\",\n                    size: \"1\",\n                    className: \"h-8 border-dashed\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Content, {\n                width: \"360px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                    gap: \"3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        flexGrow: \"1\",\n                        children: options.map((option)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                                gap: \"2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {\n                                        checked: selectedValues.includes(option.value),\n                                        onCheckedChange: ()=>handleCheckboxChange(option.value),\n                                        \"aria-checked\": selectedValues.includes(option.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                        children: option.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, option.value.toString(), true, {\n                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterSelectDropDown, \"joJpIwt4TpSHKS4ojyzP8sTUzoE=\");\n_c = FilterSelectDropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterSelectDropDown);\nvar _c;\n$RefreshReg$(_c, \"FilterSelectDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25hbnRzL0ZpbHRlclNlbGVjdERyb3BEb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThFO0FBQ3pCO0FBV3JELE1BQU1TLHVCQUF1QjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQVM7O0lBQy9ELE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQ2xELEVBQUU7SUFHSixNQUFNUSx1QkFBdUJQLGtEQUFXQSxDQUFFLENBQUNRO1FBQ3pDRixrQkFBa0IsQ0FBQ0c7WUFDakIsTUFBTUMsb0JBQW9CRCxtQkFBbUJFLFFBQVEsQ0FBQ0gsU0FDbERDLG1CQUFtQkcsTUFBTSxDQUFDLENBQUNDLFdBQWFBLGFBQWFMLFNBQ3JEO21CQUFJQztnQkFBb0JEO2FBQU07WUFDbENKLFNBQVNNO1lBQ1QsT0FBT0E7UUFDVDtJQUNGLEdBQ0E7UUFBQ047S0FBUztJQUdWLHFCQUNFLDhEQUFDVCwwREFBWTs7MEJBQ1gsOERBQUNBLDZEQUFlO2dCQUFDcUIsRUFBRTswQkFDakIsNEVBQUN4QixvREFBTUE7b0JBQUN5QixTQUFRO29CQUFVQyxNQUFLO29CQUFJQyxXQUFVOzhCQUMxQ2hCOzs7Ozs7Ozs7OzswQkFJTCw4REFBQ1IsNkRBQWU7Z0JBQUMwQixPQUFNOzBCQUNyQiw0RUFBQzNCLGtEQUFJQTtvQkFBQzRCLEtBQUk7OEJBQ1IsNEVBQUM3QixpREFBR0E7d0JBQUM4QixVQUFTO2tDQUNYckIsUUFBUXNCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDWixxQkFDRSw4REFBQy9CLGtEQUFJQTtnQ0FBK0I0QixLQUFLOztrREFDdkMsOERBQUN6QixzREFBUUE7d0NBQ1A2QixTQUFTckIsZUFBZU0sUUFBUSxDQUFDYyxPQUFPakIsS0FBSzt3Q0FDN0NtQixpQkFBaUIsSUFBTXBCLHFCQUFxQmtCLE9BQU9qQixLQUFLO3dDQUN4RG9CLGdCQUFjdkIsZUFBZU0sUUFBUSxDQUFDYyxPQUFPakIsS0FBSzs7Ozs7O2tEQUVwRCw4REFBQ1osa0RBQUlBO2tEQUFFNkIsT0FBT0ksS0FBSzs7Ozs7OzsrQkFOVkosT0FBT2pCLEtBQUssQ0FBQ3NCLFFBQVE7Ozs7O3dCQVNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBN0NNN0I7S0FBQUE7QUErQ04sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uYW50cy9GaWx0ZXJTZWxlY3REcm9wRG93bi50c3g/N2JjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEJveCwgRmxleCwgUG9wb3ZlciwgVGV4dCwgQ2hlY2tib3ggfSBmcm9tIFwiQHJhZGl4LXVpL3RoZW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuO1xyXG4gIH1bXTtcclxuICBvbkNoYW5nZTogKHNlbGVjdGVkVmFsdWVzOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyU2VsZWN0RHJvcERvd24gPSAoeyBvcHRpb25zLCB0aXRsZSwgb25DaGFuZ2UgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZXMsIHNldFNlbGVjdGVkVmFsdWVzXSA9IHVzZVN0YXRlPChzdHJpbmcgfCBib29sZWFuKVtdPihcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSB1c2VDYWxsYmFjayggKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFZhbHVlcygocHJldlNlbGVjdGVkVmFsdWVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkVmFsdWVzID0gcHJldlNlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKVxyXG4gICAgICAgID8gcHJldlNlbGVjdGVkVmFsdWVzLmZpbHRlcigob2xkVmFsdWUpID0+IG9sZFZhbHVlICE9PSB2YWx1ZSlcclxuICAgICAgICA6IFsuLi5wcmV2U2VsZWN0ZWRWYWx1ZXMsIHZhbHVlXTtcclxuICAgICAgb25DaGFuZ2UobmV3U2VsZWN0ZWRWYWx1ZXMpO1xyXG4gICAgICByZXR1cm4gbmV3U2VsZWN0ZWRWYWx1ZXM7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIFtvbkNoYW5nZV1cclxuKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQb3BvdmVyLlJvb3Q+XHJcbiAgICAgIDxQb3BvdmVyLlRyaWdnZXIgYXM+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCIxXCIgY2xhc3NOYW1lPVwiaC04IGJvcmRlci1kYXNoZWRcIj5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Qb3BvdmVyLlRyaWdnZXI+XHJcblxyXG4gICAgICA8UG9wb3Zlci5Db250ZW50IHdpZHRoPVwiMzYwcHhcIj5cclxuICAgICAgICA8RmxleCBnYXA9XCIzXCI+XHJcbiAgICAgICAgICA8Qm94IGZsZXhHcm93PVwiMVwiPlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8RmxleCBrZXk9e29wdGlvbi52YWx1ZS50b1N0cmluZygpfSBnYXA9e1wiMlwifT5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWRDaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKG9wdGlvbi52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jaGVja2VkPXtzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD57b3B0aW9uLmxhYmVsfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Qb3BvdmVyLkNvbnRlbnQ+XHJcbiAgICA8L1BvcG92ZXIuUm9vdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyU2VsZWN0RHJvcERvd247XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCb3giLCJGbGV4IiwiUG9wb3ZlciIsIlRleHQiLCJDaGVja2JveCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIkZpbHRlclNlbGVjdERyb3BEb3duIiwib3B0aW9ucyIsInRpdGxlIiwib25DaGFuZ2UiLCJzZWxlY3RlZFZhbHVlcyIsInNldFNlbGVjdGVkVmFsdWVzIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJ2YWx1ZSIsInByZXZTZWxlY3RlZFZhbHVlcyIsIm5ld1NlbGVjdGVkVmFsdWVzIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJvbGRWYWx1ZSIsIlJvb3QiLCJUcmlnZ2VyIiwiYXMiLCJ2YXJpYW50Iiwic2l6ZSIsImNsYXNzTmFtZSIsIkNvbnRlbnQiLCJ3aWR0aCIsImdhcCIsImZsZXhHcm93IiwibWFwIiwib3B0aW9uIiwiY2hlY2tlZCIsIm9uQ2hlY2tlZENoYW5nZSIsImFyaWEtY2hlY2tlZCIsImxhYmVsIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/componants/FilterSelectDropDown.tsx\n"));

/***/ })

});