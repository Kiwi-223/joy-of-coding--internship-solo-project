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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_componants_PriorityDropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/componants/PriorityDropDown */ \"(app-pages-browser)/./app/componants/PriorityDropDown.tsx\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst newTask = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [priorityLevel, setPriorityLevel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Low\");\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Date());\n    const { register, control, handleSubmit, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        defaultValues: {\n            dueDate: startDate,\n            priority: priorityLevel\n        }\n    });\n    const handleDateSelect = (date)=>{\n        setValue(\"dueDate\", date);\n        setStartDate(date);\n    };\n    const handleCancel = ()=>{\n        router.push(\"/tasks\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"w-3/4 h-fit\",\n        onSubmit: handleSubmit(async (data)=>{\n            await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/tasks\", data);\n            router.push(\"/tasks\");\n        }),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            size: \"2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                direction: \"column\",\n                gap: \"3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        gap: \"1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                as: \"div\",\n                                weight: \"bold\",\n                                size: \"2\",\n                                mb: \"1\",\n                                children: \"New Task\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                className: \"gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.TextField.Root, {\n                                        className: \"w-1/2\",\n                                        placeholder: \"Title\",\n                                        ...register(\"title\")\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_componants_PriorityDropDown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        onChange: (priorityLevel)=>{\n                                            console.log(pri);\n                                            setValue(\"priority\", priorityLevel);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        className: \"gap-1\",\n                                        children: [\n                                            \"Due Date:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                ...register(\"dueDate\"),\n                                                selected: startDate,\n                                                onChange: (date)=>handleDateSelect(date)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.TextArea, {\n                                className: \"h-72\",\n                                placeholder: \"Description\",\n                                ...register(\"description\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        columns: \"2\",\n                        gap: \"2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\tasks\\\\new\\\\page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(newTask, \"RStta1YdwU96whNQ++DkJ9i5BK8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (newTask);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90YXNrcy9uZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFaUU7QUFVdkM7QUFDYztBQUNFO0FBQ1k7QUFDRjtBQUMxQjtBQUNrQjtBQVU1QyxNQUFNYyxVQUFVOztJQUNkLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUMsSUFBSVc7SUFDL0MsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUUsR0FBR2Isd0RBQU9BLENBQVc7UUFDdEVjLGVBQWU7WUFBRUMsU0FBU1I7WUFBV1MsVUFBVVg7UUFBYztJQUMvRDtJQUVBLE1BQU1ZLG1CQUFtQixDQUFDQztRQUN4QkwsU0FBUyxXQUFXSztRQUNwQlYsYUFBYVU7SUFDZjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJmLE9BQU9nQixJQUFJLENBQUM7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLFVBQVVYLGFBQWEsT0FBT1k7WUFDNUIsTUFBTXZCLDZDQUFLQSxDQUFDd0IsSUFBSSxDQUFDLGNBQWNEO1lBQy9CcEIsT0FBT2dCLElBQUksQ0FBQztRQUNkO2tCQUVBLDRFQUFDOUIsa0RBQUlBO1lBQUNvQyxNQUFLO3NCQUNULDRFQUFDbkMsa0RBQUlBO2dCQUFDb0MsV0FBVTtnQkFBU0MsS0FBSTs7a0NBQzNCLDhEQUFDcEMsa0RBQUlBO3dCQUFDb0MsS0FBSTs7MENBQ1IsOERBQUNuQyxrREFBSUE7Z0NBQUNvQyxJQUFHO2dDQUFNQyxRQUFPO2dDQUFPSixNQUFLO2dDQUFJSyxJQUFHOzBDQUFJOzs7Ozs7MENBRzdDLDhEQUFDeEMsa0RBQUlBO2dDQUFDK0IsV0FBVTs7a0RBQ2QsOERBQUMxQiw0REFBYzt3Q0FDYjBCLFdBQVU7d0NBQ1ZXLGFBQVk7d0NBQ1gsR0FBR3ZCLFNBQVMsUUFBUTs7Ozs7O2tEQUV2Qiw4REFBQ3JCLHdFQUFnQkE7d0NBQ2Y2QyxVQUFVLENBQUM3Qjs0Q0FDVDhCLFFBQVFDLEdBQUcsQ0FBQ0M7NENBQ1p4QixTQUFTLFlBQVlSO3dDQUN2Qjs7Ozs7O2tEQUdGLDhEQUFDWixrREFBSUE7d0NBQUM2QixXQUFVOzs0Q0FBUTswREFFdEIsOERBQUN2Qix5REFBVUE7Z0RBQ1IsR0FBR1csU0FBUyxVQUFVO2dEQUN2QjRCLFVBQVUvQjtnREFDVjJCLFVBQVUsQ0FBQ2hCLE9BQVNELGlCQUFpQkM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJM0MsOERBQUN2QixzREFBUUE7Z0NBQ1AyQixXQUFVO2dDQUNWVyxhQUFZO2dDQUNYLEdBQUd2QixTQUFTLGNBQWM7Ozs7Ozs7Ozs7OztrQ0FHL0IsOERBQUNsQixrREFBSUE7d0JBQUMrQyxTQUFRO3dCQUFJWCxLQUFJO2tDQUVwQiw0RUFBQ2xDLG9EQUFNQTtzQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBbEVNUzs7UUFDV0Qsc0RBQVNBO1FBRzhCRixvREFBT0E7OztBQWdFL0QsK0RBQWVHLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Rhc2tzL25ldy9wYWdlLnRzeD80ZWVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFByaW9yaXR5RHJvcERvd24gZnJvbSBcIkAvYXBwL2NvbXBvbmFudHMvUHJpb3JpdHlEcm9wRG93blwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkLFxyXG4gIEZsZXgsXHJcbiAgR3JpZCxcclxuICBUZXh0LFxyXG4gIEJ1dHRvbixcclxuICBUZXh0QXJlYSxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSBcIkByYWRpeC11aS90aGVtZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgcHJpb3JpdGllcyB9IGZyb20gXCJAL2FwcC90eXBlc1wiO1xyXG5cclxuaW50ZXJmYWNlIFRhc2tGb3JtIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpb3JpdHk6IHN0cmluZztcclxuICBkdWVEYXRlOiBEYXRlO1xyXG59XHJcblxyXG5jb25zdCBuZXdUYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtwcmlvcml0eUxldmVsLCBzZXRQcmlvcml0eUxldmVsXSA9IHVzZVN0YXRlKFwiTG93XCIpO1xyXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBjb250cm9sLCBoYW5kbGVTdWJtaXQsIHNldFZhbHVlIH0gPSB1c2VGb3JtPFRhc2tGb3JtPih7XHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7IGR1ZURhdGU6IHN0YXJ0RGF0ZSwgcHJpb3JpdHk6IHByaW9yaXR5TGV2ZWwgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGF0ZVNlbGVjdCA9IChkYXRlOiBEYXRlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShcImR1ZURhdGVcIiwgZGF0ZSk7XHJcbiAgICBzZXRTdGFydERhdGUoZGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvdGFza3NcIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm1cclxuICAgICAgY2xhc3NOYW1lPVwidy0zLzQgaC1maXRcIlxyXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvdGFza3NcIiwgZGF0YSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvdGFza3NcIik7XHJcbiAgICAgIH0pfVxyXG4gICAgPlxyXG4gICAgICA8Q2FyZCBzaXplPVwiMlwiPlxyXG4gICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cIjNcIj5cclxuICAgICAgICAgIDxHcmlkIGdhcD1cIjFcIj5cclxuICAgICAgICAgICAgPFRleHQgYXM9XCJkaXZcIiB3ZWlnaHQ9XCJib2xkXCIgc2l6ZT1cIjJcIiBtYj1cIjFcIj5cclxuICAgICAgICAgICAgICBOZXcgVGFza1xyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cImdhcC01XCI+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZC5Sb290XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMlwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInRpdGxlXCIpfVxyXG4gICAgICAgICAgICAgID48L1RleHRGaWVsZC5Sb290PlxyXG4gICAgICAgICAgICAgIDxQcmlvcml0eURyb3BEb3duXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHByaW9yaXR5TGV2ZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmkpXHJcbiAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwicHJpb3JpdHlcIiwgcHJpb3JpdHlMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImdhcC0xXCI+XHJcbiAgICAgICAgICAgICAgICBEdWUgRGF0ZTpcclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImR1ZURhdGVcIil9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlRGF0ZVNlbGVjdChkYXRlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNzJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgY29sdW1ucz1cIjJcIiBnYXA9XCIyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJzdXJmYWNlXCIgb25DaGFuZ2U9e2hhbmRsZUNhbmNlbH0+Q2FuY2VsPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICA8QnV0dG9uPlNhdmU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3VGFzaztcclxuIl0sIm5hbWVzIjpbIlByaW9yaXR5RHJvcERvd24iLCJDYXJkIiwiRmxleCIsIkdyaWQiLCJUZXh0IiwiQnV0dG9uIiwiVGV4dEFyZWEiLCJUZXh0RmllbGQiLCJSZWFjdCIsInVzZVN0YXRlIiwiRGF0ZVBpY2tlciIsInVzZUZvcm0iLCJheGlvcyIsInVzZVJvdXRlciIsIm5ld1Rhc2siLCJyb3V0ZXIiLCJwcmlvcml0eUxldmVsIiwic2V0UHJpb3JpdHlMZXZlbCIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsIkRhdGUiLCJyZWdpc3RlciIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZXMiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJoYW5kbGVEYXRlU2VsZWN0IiwiZGF0ZSIsImhhbmRsZUNhbmNlbCIsInB1c2giLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkYXRhIiwicG9zdCIsInNpemUiLCJkaXJlY3Rpb24iLCJnYXAiLCJhcyIsIndlaWdodCIsIm1iIiwiUm9vdCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwicHJpIiwic2VsZWN0ZWQiLCJjb2x1bW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/tasks/new/page.tsx\n"));

/***/ })

});