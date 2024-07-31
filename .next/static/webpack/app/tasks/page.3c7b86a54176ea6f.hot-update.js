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

/***/ "(app-pages-browser)/./app/componants/FilterBar.tsx":
/*!**************************************!*\
  !*** ./app/componants/FilterBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ \"(app-pages-browser)/./app/types.ts\");\n/* harmony import */ var _barrel_optimize_names_LuX_react_icons_lu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LuX!=!react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.mjs\");\n/* harmony import */ var _FilterSelectDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterSelectDropDown */ \"(app-pages-browser)/./app/componants/FilterSelectDropDown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FilterBar = (param)=>{\n    let { allTasks, setFilteredTasks } = param;\n    _s();\n    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isFiltered, setIsFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const filteredTasks = useMemo(()=>{\n        let tasks = allTasks;\n        if (priority.length > 0) {\n            tasks = tasks.filter((task)=>priority.includes(task.priority));\n        }\n        if (status.length > 0) {\n            tasks = tasks.filter((task)=>status.includes(task.completed));\n        }\n        setFilteredTasks(tasks);\n        setIsFiltered(priority.length > 0 || status.length > 0);\n        return tasks;\n    }, [\n        priority,\n        status,\n        allTasks,\n        setFilteredTasks\n    ]);\n    const handlePriority = (selectedPriority)=>{\n        setPriority(selectedPriority);\n    };\n    const handleStatus = (selectedStatus)=>{\n        setStatus(selectedStatus);\n    };\n    const handleReset = ()=>{\n        setPriority([]);\n        setStatus([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n            gap: \"2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    children: \"Filters:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterSelectDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Status\",\n                    options: _types__WEBPACK_IMPORTED_MODULE_3__.statusFilter,\n                    onChange: handleStatus\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterSelectDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Priority\",\n                    options: _types__WEBPACK_IMPORTED_MODULE_3__.priorities,\n                    onChange: handlePriority\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                isFiltered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"ghost\",\n                    onClick: handleReset,\n                    children: [\n                        \"Clear Filters \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuX_react_icons_lu__WEBPACK_IMPORTED_MODULE_5__.LuX, {\n                            className: \"ml-2 h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 27\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBar, \"kEdyAQruvPrxvdZRgU/DN2yFsmY=\");\n_c = FilterBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBar);\nvar _c;\n$RefreshReg$(_c, \"FilterBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25hbnRzL0ZpbHRlckJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNtQjtBQUNHO0FBQ3pCO0FBQ3FCO0FBTzFELE1BQU1VLFlBQVk7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLGdCQUFnQixFQUFTOztJQUN0RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQVcsRUFBRTtJQUNyRCxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQVksRUFBRTtJQUNsRCxNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNa0IsZ0JBQWdCQyxRQUFRO1FBQzVCLElBQUlDLFFBQVFWO1FBRVosSUFBSUUsU0FBU1MsTUFBTSxHQUFHLEdBQUc7WUFDdkJELFFBQVFBLE1BQU1FLE1BQU0sQ0FBQyxDQUFDQyxPQUFTWCxTQUFTWSxRQUFRLENBQUNELEtBQUtYLFFBQVE7UUFDaEU7UUFFQSxJQUFJRSxPQUFPTyxNQUFNLEdBQUcsR0FBRztZQUNyQkQsUUFBUUEsTUFBTUUsTUFBTSxDQUFDLENBQUNDLE9BQVNULE9BQU9VLFFBQVEsQ0FBQ0QsS0FBS0UsU0FBUztRQUMvRDtRQUVBZCxpQkFBaUJTO1FBQ2pCSCxjQUFjTCxTQUFTUyxNQUFNLEdBQUcsS0FBS1AsT0FBT08sTUFBTSxHQUFHO1FBRXJELE9BQU9EO0lBQ1QsR0FBRztRQUFDUjtRQUFVRTtRQUFRSjtRQUFVQztLQUFpQjtJQUVoRCxNQUFNZSxpQkFBaUIsQ0FBQ0M7UUFDdkJkLFlBQVljO0lBQ2Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCZCxVQUFVYztJQUNaO0lBRUEsTUFBTUMsY0FBYztRQUNsQmpCLFlBQVksRUFBRTtRQUNkRSxVQUFVLEVBQUU7SUFDZDtJQUVBLHFCQUNFLDhEQUFDZCxpREFBR0E7a0JBQ0YsNEVBQUNFLGtEQUFJQTtZQUFDNEIsS0FBSTs7OEJBQ1IsOERBQUMzQixrREFBSUE7OEJBQUM7Ozs7Ozs4QkFDTiw4REFBQ0ksNkRBQW9CQTtvQkFDbkJ3QixPQUFNO29CQUNOQyxTQUFTNUIsZ0RBQVlBO29CQUNyQjZCLFVBQVVOOzs7Ozs7OEJBR1osOERBQUNwQiw2REFBb0JBO29CQUNuQndCLE9BQU07b0JBQ05DLFNBQVMzQiw4Q0FBVUE7b0JBQ25CNEIsVUFBVVI7Ozs7OztnQkFFWFYsNEJBQ0MsOERBQUNkLG9EQUFNQTtvQkFBQ2lDLFNBQVE7b0JBQVFDLFNBQVNOOzt3QkFBYTtzQ0FDOUIsOERBQUN2QiwwRUFBR0E7NEJBQUM4QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QztHQTFETTVCO0tBQUFBO0FBNEROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25hbnRzL0ZpbHRlckJhci50c3g/OGM0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBUZXh0IH0gZnJvbSBcIkByYWRpeC11aS90aGVtZXNcIjtcclxuaW1wb3J0IHsgc3RhdHVzRmlsdGVyLCBwcmlvcml0aWVzLCBUYXNrVHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBMdVggfSBmcm9tIFwicmVhY3QtaWNvbnMvbHVcIjtcclxuaW1wb3J0IEZpbHRlclNlbGVjdERyb3BEb3duIGZyb20gXCIuL0ZpbHRlclNlbGVjdERyb3BEb3duXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFsbFRhc2tzOiBUYXNrVHlwZVtdO1xyXG4gIHNldEZpbHRlcmVkVGFza3M6ICh0YXNrczogVGFza1R5cGVbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyQmFyID0gKHsgYWxsVGFza3MsIHNldEZpbHRlcmVkVGFza3MgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbcHJpb3JpdHksIHNldFByaW9yaXR5XSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPGJvb2xlYW5bXT4oW10pO1xyXG4gIGNvbnN0IFtpc0ZpbHRlcmVkLCBzZXRJc0ZpbHRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tzID0gYWxsVGFza3M7XHJcblxyXG4gICAgaWYgKHByaW9yaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHByaW9yaXR5LmluY2x1ZGVzKHRhc2sucHJpb3JpdHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHN0YXR1cy5pbmNsdWRlcyh0YXNrLmNvbXBsZXRlZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpbHRlcmVkVGFza3ModGFza3MpO1xyXG4gICAgc2V0SXNGaWx0ZXJlZChwcmlvcml0eS5sZW5ndGggPiAwIHx8IHN0YXR1cy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICByZXR1cm4gdGFza3M7XHJcbiAgfSwgW3ByaW9yaXR5LCBzdGF0dXMsIGFsbFRhc2tzLCBzZXRGaWx0ZXJlZFRhc2tzXSk7XHJcblxyXG4gICBjb25zdCBoYW5kbGVQcmlvcml0eSA9IChzZWxlY3RlZFByaW9yaXR5OiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgc2V0UHJpb3JpdHkoc2VsZWN0ZWRQcmlvcml0eSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdHVzID0gKHNlbGVjdGVkU3RhdHVzOiBib29sZWFuW10pID0+IHtcclxuICAgIHNldFN0YXR1cyhzZWxlY3RlZFN0YXR1cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmlvcml0eShbXSk7XHJcbiAgICBzZXRTdGF0dXMoW10pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8RmxleCBnYXA9XCIyXCI+XHJcbiAgICAgICAgPFRleHQ+RmlsdGVyczo8L1RleHQ+XHJcbiAgICAgICAgPEZpbHRlclNlbGVjdERyb3BEb3duXHJcbiAgICAgICAgICB0aXRsZT1cIlN0YXR1c1wiXHJcbiAgICAgICAgICBvcHRpb25zPXtzdGF0dXNGaWx0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdHVzfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxGaWx0ZXJTZWxlY3REcm9wRG93blxyXG4gICAgICAgICAgdGl0bGU9XCJQcmlvcml0eVwiXHJcbiAgICAgICAgICBvcHRpb25zPXtwcmlvcml0aWVzfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByaW9yaXR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2lzRmlsdGVyZWQgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+XHJcbiAgICAgICAgICAgIENsZWFyIEZpbHRlcnMgPEx1WCBjbGFzc05hbWU9XCJtbC0yIGgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b24iLCJGbGV4IiwiVGV4dCIsInN0YXR1c0ZpbHRlciIsInByaW9yaXRpZXMiLCJMdVgiLCJGaWx0ZXJTZWxlY3REcm9wRG93biIsIkZpbHRlckJhciIsImFsbFRhc2tzIiwic2V0RmlsdGVyZWRUYXNrcyIsInByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc0ZpbHRlcmVkIiwic2V0SXNGaWx0ZXJlZCIsImZpbHRlcmVkVGFza3MiLCJ1c2VNZW1vIiwidGFza3MiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0YXNrIiwiaW5jbHVkZXMiLCJjb21wbGV0ZWQiLCJoYW5kbGVQcmlvcml0eSIsInNlbGVjdGVkUHJpb3JpdHkiLCJoYW5kbGVTdGF0dXMiLCJzZWxlY3RlZFN0YXR1cyIsImhhbmRsZVJlc2V0IiwiZ2FwIiwidGl0bGUiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJ2YXJpYW50Iiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/componants/FilterBar.tsx\n"));

/***/ })

});