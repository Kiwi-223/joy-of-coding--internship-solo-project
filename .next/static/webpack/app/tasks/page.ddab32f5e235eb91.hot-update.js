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

/***/ "(app-pages-browser)/./app/componants/Task.tsx":
/*!*********************************!*\
  !*** ./app/componants/Task.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var _FilterBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBar */ \"(app-pages-browser)/./app/componants/FilterBar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Task = (param)=>{\n    let { tasks } = param;\n    _s();\n    const [filteredTasks, setFilteredTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tasks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setFilteredTasks: (newTasks)=>setFilteredTasks(newTasks),\n                allTasks: tasks\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Root, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.ColumnHeaderCell, {\n                                    maxWidth: \"25px\",\n                                    children: \"Completed\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.ColumnHeaderCell, {\n                                    maxWidth: \"25px\",\n                                    children: \"Priority\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.ColumnHeaderCell, {\n                                    maxWidth: \"56px\",\n                                    children: \"Task\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.ColumnHeaderCell, {\n                                    maxWidth: \"288px\",\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.ColumnHeaderCell, {\n                                    maxWidth: \"25px\",\n                                    children: \"DueDate\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Body, {\n                        children: filteredTasks.map((task)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Row, {\n                                align: \"start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {\n                                        maxWidth: \"25px\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                                            checked: task.completed,\n                                            \"aria-readonly\": true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {\n                                        maxWidth: \"25px\",\n                                        children: task.priority\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.ColumnHeaderCell, {\n                                        maxWidth: \"56px\",\n                                        children: task.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {\n                                        maxWidth: \"288px\",\n                                        children: task.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Table.Cell, {\n                                        maxWidth: \"25px\",\n                                        children: task.dueDate\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, task.id, true, {\n                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\Task.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Task, \"lGS+f5WRlS6z8zhPKSkEZ85CtmA=\");\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25hbnRzL1Rhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBVWQ7QUFDVTtBQU1wQyxNQUFNSyxPQUFPO1FBQUMsRUFBRUMsS0FBSyxFQUFTOztJQUM1QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBYUs7SUFJL0QscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0wsa0RBQVNBO2dCQUNSSSxrQkFBa0IsQ0FBQ0UsV0FBYUYsaUJBQWlCRTtnQkFDakRDLFVBQVVMOzs7Ozs7MEJBRVosOERBQUNILHdEQUFVOztrQ0FDVCw4REFBQ0EsMERBQVk7a0NBQ1gsNEVBQUNBLHVEQUFTOzs4Q0FDUiw4REFBQ0Esb0VBQXNCO29DQUFDYSxVQUFTOzhDQUFPOzs7Ozs7OENBR3hDLDhEQUFDYixvRUFBc0I7b0NBQUNhLFVBQVM7OENBQU87Ozs7Ozs4Q0FHeEMsOERBQUNiLG9FQUFzQjtvQ0FBQ2EsVUFBUzs4Q0FBTzs7Ozs7OzhDQUd4Qyw4REFBQ2Isb0VBQXNCO29DQUFDYSxVQUFTOzhDQUFROzs7Ozs7OENBR3pDLDhEQUFDYixvRUFBc0I7b0NBQUNhLFVBQVM7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUs1Qyw4REFBQ2Isd0RBQVU7a0NBQ1JJLGNBQWNXLEdBQUcsQ0FBQyxDQUFDQzs0QkFDbEIscUJBQ0UsOERBQUNoQix1REFBUztnQ0FBQ2lCLE9BQU07O2tEQUNmLDhEQUFDakIsd0RBQVU7d0NBQUNhLFVBQVM7a0RBQ25CLDRFQUFDZCxzREFBUUE7NENBQUNvQixTQUFTSCxLQUFLSSxTQUFTOzRDQUFFQyxlQUFhOzs7Ozs7Ozs7OztrREFFbEQsOERBQUNyQix3REFBVTt3Q0FBQ2EsVUFBUztrREFBUUcsS0FBS00sUUFBUTs7Ozs7O2tEQUMxQyw4REFBQ3RCLG9FQUFzQjt3Q0FBQ2EsVUFBUztrREFDOUJHLEtBQUtPLEtBQUs7Ozs7OztrREFFYiw4REFBQ3ZCLHdEQUFVO3dDQUFDYSxVQUFTO2tEQUFTRyxLQUFLUSxXQUFXOzs7Ozs7a0RBQzlDLDhEQUFDeEIsd0RBQVU7d0NBQUNhLFVBQVM7a0RBQVFHLEtBQUtTLE9BQU87Ozs7Ozs7K0JBVGJULEtBQUtVLEVBQUU7Ozs7O3dCQVl6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0FuRE14QjtLQUFBQTtBQXFETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uYW50cy9UYXNrLnRzeD81YTYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFza1R5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZCxcclxuICBDaGVja2JveCxcclxuICBGbGV4LFxyXG4gIEhlYWRpbmcsXHJcbiAgVGFibGUsXHJcbiAgVGV4dCxcclxufSBmcm9tIFwiQHJhZGl4LXVpL3RoZW1lc1wiO1xyXG5pbXBvcnQgRmlsdGVyQmFyIGZyb20gXCIuL0ZpbHRlckJhclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0YXNrczogVGFza1R5cGVbXTtcclxufVxyXG5cclxuY29uc3QgVGFzayA9ICh7IHRhc2tzIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2ZpbHRlcmVkVGFza3MsIHNldEZpbHRlcmVkVGFza3NdID0gdXNlU3RhdGU8VGFza1R5cGVbXT4odGFza3MpO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGaWx0ZXJCYXJcclxuICAgICAgICBzZXRGaWx0ZXJlZFRhc2tzPXsobmV3VGFza3MpID0+IHNldEZpbHRlcmVkVGFza3MobmV3VGFza3MpfVxyXG4gICAgICAgIGFsbFRhc2tzPXt0YXNrc31cclxuICAgICAgLz5cclxuICAgICAgPFRhYmxlLlJvb3Q+XHJcbiAgICAgICAgPFRhYmxlLkhlYWRlcj5cclxuICAgICAgICAgIDxUYWJsZS5Sb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZS5Db2x1bW5IZWFkZXJDZWxsIG1heFdpZHRoPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgIENvbXBsZXRlZFxyXG4gICAgICAgICAgICA8L1RhYmxlLkNvbHVtbkhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZS5Db2x1bW5IZWFkZXJDZWxsIG1heFdpZHRoPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgIFByaW9yaXR5XHJcbiAgICAgICAgICAgIDwvVGFibGUuQ29sdW1uSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlLkNvbHVtbkhlYWRlckNlbGwgbWF4V2lkdGg9XCI1NnB4XCI+XHJcbiAgICAgICAgICAgICAgVGFza1xyXG4gICAgICAgICAgICA8L1RhYmxlLkNvbHVtbkhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZS5Db2x1bW5IZWFkZXJDZWxsIG1heFdpZHRoPVwiMjg4cHhcIj5cclxuICAgICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICA8L1RhYmxlLkNvbHVtbkhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZS5Db2x1bW5IZWFkZXJDZWxsIG1heFdpZHRoPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgIER1ZURhdGVcclxuICAgICAgICAgICAgPC9UYWJsZS5Db2x1bW5IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XHJcbiAgICAgICAgPC9UYWJsZS5IZWFkZXI+XHJcbiAgICAgICAgPFRhYmxlLkJvZHk+XHJcbiAgICAgICAgICB7ZmlsdGVyZWRUYXNrcy5tYXAoKHRhc2s6IFRhc2tUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFRhYmxlLlJvdyBhbGlnbj1cInN0YXJ0XCIga2V5PXt0YXNrLmlkfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIG1heFdpZHRoPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17dGFzay5jb21wbGV0ZWR9IGFyaWEtcmVhZG9ubHkgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIG1heFdpZHRoPVwiMjVweFwiPnt0YXNrLnByaW9yaXR5fTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZS5Db2x1bW5IZWFkZXJDZWxsIG1heFdpZHRoPVwiNTZweFwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGUuQ29sdW1uSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsIG1heFdpZHRoPVwiMjg4cHhcIj57dGFzay5kZXNjcmlwdGlvbn08L1RhYmxlLkNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbCBtYXhXaWR0aD1cIjI1cHhcIj57dGFzay5kdWVEYXRlfTwvVGFibGUuQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVGFibGUuQm9keT5cclxuICAgICAgPC9UYWJsZS5Sb290PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hlY2tib3giLCJUYWJsZSIsIkZpbHRlckJhciIsIlRhc2siLCJ0YXNrcyIsImZpbHRlcmVkVGFza3MiLCJzZXRGaWx0ZXJlZFRhc2tzIiwiZGl2IiwibmV3VGFza3MiLCJhbGxUYXNrcyIsIlJvb3QiLCJIZWFkZXIiLCJSb3ciLCJDb2x1bW5IZWFkZXJDZWxsIiwibWF4V2lkdGgiLCJCb2R5IiwibWFwIiwidGFzayIsImFsaWduIiwiQ2VsbCIsImNoZWNrZWQiLCJjb21wbGV0ZWQiLCJhcmlhLXJlYWRvbmx5IiwicHJpb3JpdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/componants/Task.tsx\n"));

/***/ })

});