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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ \"(app-pages-browser)/./app/types.ts\");\n/* harmony import */ var _barrel_optimize_names_LuX_react_icons_lu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=LuX!=!react-icons/lu */ \"(app-pages-browser)/./node_modules/react-icons/lu/index.mjs\");\n/* harmony import */ var _FilterSelectDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterSelectDropDown */ \"(app-pages-browser)/./app/componants/FilterSelectDropDown.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FilterBar = (param)=>{\n    let { allTasks, setFilteredTasks } = param;\n    _s();\n    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isFiltered, setIsFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let filteredTasks = allTasks;\n        if (priority.length > 0) {\n            filteredTasks = filteredTasks.filter((task)=>priority.includes(task.priority));\n        }\n        if (status.length > 0) {\n            filteredTasks = filteredTasks.filter((task)=>status.includes(task.completed));\n        }\n        setFilteredTasks(filteredTasks);\n        setIsFiltered(priority.length > 0 || status.length > 0);\n    }, [\n        priority,\n        status,\n        allTasks,\n        setFilteredTasks\n    ]);\n    const handlePriority = (selectedPriority)=>{\n        setPriority(selectedPriority);\n    };\n    const handleStatus = (selectedStatus)=>{\n        setStatus(selectedStatus);\n    };\n    const handleReset = ()=>{\n        setPriority([]);\n        setStatus([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n            gap: \"2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    children: \"Filters:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterSelectDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Status\",\n                    options: _types__WEBPACK_IMPORTED_MODULE_3__.statusFilter,\n                    onChange: handleStatus\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterSelectDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Priority\",\n                    options: _types__WEBPACK_IMPORTED_MODULE_3__.priorities,\n                    onChange: handlePriority\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                isFiltered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"ghost\",\n                    onClick: handleReset,\n                    children: [\n                        \"Clear Filters \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuX_react_icons_lu__WEBPACK_IMPORTED_MODULE_5__.LuX, {\n                            className: \"ml-2 h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 27\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterBar.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBar, \"RzRA37s/2f7oCKT1pePSB08LnNI=\");\n_c = FilterBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBar);\nvar _c;\n$RefreshReg$(_c, \"FilterBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25hbnRzL0ZpbHRlckJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNRO0FBQ0c7QUFDekI7QUFDcUI7QUFPMUQsTUFBTVcsWUFBWTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsZ0JBQWdCLEVBQVM7O0lBQ3RELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQVksRUFBRTtJQUNsRCxNQUFNLENBQUNpQixZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUU3Q0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJa0IsZ0JBQWdCUjtRQUVwQixJQUFJRSxTQUFTTyxNQUFNLEdBQUcsR0FBRztZQUN2QkQsZ0JBQWdCQSxjQUFjRSxNQUFNLENBQUMsQ0FBQ0MsT0FDcENULFNBQVNVLFFBQVEsQ0FBQ0QsS0FBS1QsUUFBUTtRQUVuQztRQUVBLElBQUlFLE9BQU9LLE1BQU0sR0FBRyxHQUFHO1lBQ3JCRCxnQkFBZ0JBLGNBQWNFLE1BQU0sQ0FBQyxDQUFDQyxPQUNwQ1AsT0FBT1EsUUFBUSxDQUFDRCxLQUFLRSxTQUFTO1FBRWxDO1FBRUFaLGlCQUFpQk87UUFDakJELGNBQWNMLFNBQVNPLE1BQU0sR0FBRyxLQUFLTCxPQUFPSyxNQUFNLEdBQUc7SUFDdkQsR0FBRztRQUFDUDtRQUFVRTtRQUFRSjtRQUFVQztLQUFpQjtJQUVqRCxNQUFNYSxpQkFBaUIsQ0FBQ0M7UUFDdEJaLFlBQVlZO0lBQ2Q7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCWixVQUFVWTtJQUNaO0lBRUEsTUFBTUMsY0FBYztRQUNsQmYsWUFBWSxFQUFFO1FBQ2RFLFVBQVUsRUFBRTtJQUNkO0lBRUEscUJBQ0UsOERBQUNkLGlEQUFHQTtrQkFDRiw0RUFBQ0Usa0RBQUlBO1lBQUMwQixLQUFJOzs4QkFDUiw4REFBQ3pCLGtEQUFJQTs4QkFBQzs7Ozs7OzhCQUNOLDhEQUFDSSw2REFBb0JBO29CQUNuQnNCLE9BQU07b0JBQ05DLFNBQVMxQixnREFBWUE7b0JBQ3JCMkIsVUFBVU47Ozs7Ozs4QkFHWiw4REFBQ2xCLDZEQUFvQkE7b0JBQ25Cc0IsT0FBTTtvQkFDTkMsU0FBU3pCLDhDQUFVQTtvQkFDbkIwQixVQUFVUjs7Ozs7O2dCQUVYUiw0QkFDQyw4REFBQ2Qsb0RBQU1BO29CQUFDK0IsU0FBUTtvQkFBUUMsU0FBU047O3dCQUFhO3NDQUM5Qiw4REFBQ3JCLDBFQUFHQTs0QkFBQzRCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0dBNURNMUI7S0FBQUE7QUE4RE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmFudHMvRmlsdGVyQmFyLnRzeD84YzQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgVGV4dCB9IGZyb20gXCJAcmFkaXgtdWkvdGhlbWVzXCI7XHJcbmltcG9ydCB7IHN0YXR1c0ZpbHRlciwgcHJpb3JpdGllcywgVGFza1R5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgTHVYIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCI7XHJcbmltcG9ydCBGaWx0ZXJTZWxlY3REcm9wRG93biBmcm9tIFwiLi9GaWx0ZXJTZWxlY3REcm9wRG93blwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhbGxUYXNrczogVGFza1R5cGVbXTtcclxuICBzZXRGaWx0ZXJlZFRhc2tzOiAodGFza3M6IFRhc2tUeXBlW10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEZpbHRlckJhciA9ICh7IGFsbFRhc2tzLCBzZXRGaWx0ZXJlZFRhc2tzIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3ByaW9yaXR5LCBzZXRQcmlvcml0eV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxib29sZWFuW10+KFtdKTtcclxuICBjb25zdCBbaXNGaWx0ZXJlZCwgc2V0SXNGaWx0ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzO1xyXG5cclxuICAgIGlmIChwcmlvcml0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZpbHRlcmVkVGFza3MgPSBmaWx0ZXJlZFRhc2tzLmZpbHRlcigodGFzaykgPT5cclxuICAgICAgICBwcmlvcml0eS5pbmNsdWRlcyh0YXNrLnByaW9yaXR5KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmaWx0ZXJlZFRhc2tzID0gZmlsdGVyZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+XHJcbiAgICAgICAgc3RhdHVzLmluY2x1ZGVzKHRhc2suY29tcGxldGVkKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpbHRlcmVkVGFza3MoZmlsdGVyZWRUYXNrcyk7XHJcbiAgICBzZXRJc0ZpbHRlcmVkKHByaW9yaXR5Lmxlbmd0aCA+IDAgfHwgc3RhdHVzLmxlbmd0aCA+IDApO1xyXG4gIH0sIFtwcmlvcml0eSwgc3RhdHVzLCBhbGxUYXNrcywgc2V0RmlsdGVyZWRUYXNrc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmlvcml0eSA9IChzZWxlY3RlZFByaW9yaXR5OiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgc2V0UHJpb3JpdHkoc2VsZWN0ZWRQcmlvcml0eSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdHVzID0gKHNlbGVjdGVkU3RhdHVzOiBib29sZWFuW10pID0+IHtcclxuICAgIHNldFN0YXR1cyhzZWxlY3RlZFN0YXR1cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRQcmlvcml0eShbXSk7XHJcbiAgICBzZXRTdGF0dXMoW10pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8RmxleCBnYXA9XCIyXCI+XHJcbiAgICAgICAgPFRleHQ+RmlsdGVyczo8L1RleHQ+XHJcbiAgICAgICAgPEZpbHRlclNlbGVjdERyb3BEb3duXHJcbiAgICAgICAgICB0aXRsZT1cIlN0YXR1c1wiXHJcbiAgICAgICAgICBvcHRpb25zPXtzdGF0dXNGaWx0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdHVzfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxGaWx0ZXJTZWxlY3REcm9wRG93blxyXG4gICAgICAgICAgdGl0bGU9XCJQcmlvcml0eVwiXHJcbiAgICAgICAgICBvcHRpb25zPXtwcmlvcml0aWVzfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByaW9yaXR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2lzRmlsdGVyZWQgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+XHJcbiAgICAgICAgICAgIENsZWFyIEZpbHRlcnMgPEx1WCBjbGFzc05hbWU9XCJtbC0yIGgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJCdXR0b24iLCJGbGV4IiwiVGV4dCIsInN0YXR1c0ZpbHRlciIsInByaW9yaXRpZXMiLCJMdVgiLCJGaWx0ZXJTZWxlY3REcm9wRG93biIsIkZpbHRlckJhciIsImFsbFRhc2tzIiwic2V0RmlsdGVyZWRUYXNrcyIsInByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJpc0ZpbHRlcmVkIiwic2V0SXNGaWx0ZXJlZCIsImZpbHRlcmVkVGFza3MiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ0YXNrIiwiaW5jbHVkZXMiLCJjb21wbGV0ZWQiLCJoYW5kbGVQcmlvcml0eSIsInNlbGVjdGVkUHJpb3JpdHkiLCJoYW5kbGVTdGF0dXMiLCJzZWxlY3RlZFN0YXR1cyIsImhhbmRsZVJlc2V0IiwiZ2FwIiwidGl0bGUiLCJvcHRpb25zIiwib25DaGFuZ2UiLCJ2YXJpYW50Iiwib25DbGljayIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/componants/FilterBar.tsx\n"));

/***/ })

});