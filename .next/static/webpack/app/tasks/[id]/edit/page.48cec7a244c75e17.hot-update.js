"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tasks/[id]/edit/page",{

/***/ "(app-pages-browser)/./app/actions.ts":
/*!************************!*\
  !*** ./app/actions.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllTasks: function() { return /* binding */ getAllTasks; },\n/* harmony export */   getSingleTask: function() { return /* binding */ getSingleTask; },\n/* harmony export */   updateTask: function() { return /* binding */ updateTask; }\n/* harmony export */ });\n/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ \"(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js\");\n/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ \"(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js\");\n\n\n\nfunction __build_action__(action, args) {\n  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)\n}\n\n/* __next_internal_action_entry_do_not_use__ {\"2faf9f3d04d7279a361b684ee1c7c8af2a937696\":\"getAllTasks\",\"6ebeac863cf1803f2eafba3299aeed3bd5a1c42d\":\"updateTask\",\"8433c7d3b81e4a37df4b167585d367e9b4054bdf\":\"getSingleTask\"} */ var updateTask = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)(\"6ebeac863cf1803f2eafba3299aeed3bd5a1c42d\");\n\nvar getAllTasks = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)(\"2faf9f3d04d7279a361b684ee1c7c8af2a937696\");\nvar getSingleTask = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)(\"8433c7d3b81e4a37df4b167585d367e9b4054bdf\");\n // axios.patch(url[, data[, config]])\n // const updateUser = await prisma.user.update({\n //     where: {\n //       email: 'viola@prisma.io',\n //     },\n //     data: {\n //       name: 'Viola the Magnificent',\n //     },\n //   })\n // Make a request for a user with a given ID\n // axios.get('/user?ID=12345')\n //   .then(function (response) {\n //     // handle success\n //     console.log(response);\n //   })\n //   .catch(function (error) {\n //     // handle error\n //     console.log(error);\n //   })\n //   .finally(function () {\n //     // always executed\n //   });\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY3Rpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Q0EwQ0EsdUdBQXFDO0NBQ3JDOztDQUVBLGtDQUFrQztBQUN6QjtBQUNULFFBQWM7QUFDZCxpSEFBdUM7Q0FDdkMsU0FBUztDQUNULE9BQU87Q0FFUDtDQUNBLDhCQUE4QjtDQUM5QjtDQUNBO0NBQ0EsNkJBQTZCO0NBQzdCLE9BQU87Q0FDUDtDQUNBLHNCQUFzQjtDQUN0QiwwQkFBMEI7Q0FDMUIsT0FBTztDQUNQO0NBQ0EseUJBQXlCO0NBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hY3Rpb25zLnRzPzU4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVGFza1R5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuY29uc3QgYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Rhc2tzLydcclxuXHJcbi8vZ2V0QWxsVGFza3NcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNlVVJMKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTsgLy8gQXhpb3MgYXV0b21hdGljYWxseSBwYXJzZXMgdGhlIEpTT05cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdGFza3MnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9HZXQgc2luZ2xlIHRhc2tcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZVRhc2soaWQ6c3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Rhc2tzLzEnKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTsgLy8gQXhpb3MgYXV0b21hdGljYWxseSBwYXJzZXMgdGhlIEpTT05cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdGFzaycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy91cGRhdGUgdGFza1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVGFzayh0YXNrOiBUYXNrVHlwZSkge1xyXG4gICAgY29uc3QgdGFza1VSTCA9IGJhc2VVUkwgKyB0YXNrLmlkLnRvU3RyaW5nKClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaCh0YXNrVVJMLCB0YXNrKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHVwZGF0ZSB0YXNrJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gYXhpb3MucGF0Y2godXJsWywgZGF0YVssIGNvbmZpZ11dKVxyXG4vLyBjb25zdCB1cGRhdGVVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcclxuLy8gICAgIHdoZXJlOiB7XHJcbi8vICAgICAgIGVtYWlsOiAndmlvbGFAcHJpc21hLmlvJyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBkYXRhOiB7XHJcbi8vICAgICAgIG5hbWU6ICdWaW9sYSB0aGUgTWFnbmlmaWNlbnQnLFxyXG4vLyAgICAgfSxcclxuLy8gICB9KVxyXG5cclxuLy8gTWFrZSBhIHJlcXVlc3QgZm9yIGEgdXNlciB3aXRoIGEgZ2l2ZW4gSURcclxuLy8gYXhpb3MuZ2V0KCcvdXNlcj9JRD0xMjM0NScpXHJcbi8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4vLyAgIH0pXHJcbi8vICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4vLyAgICAgLy8gaGFuZGxlIGVycm9yXHJcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgfSlcclxuLy8gICAuZmluYWxseShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAvLyBhbHdheXMgZXhlY3V0ZWRcclxuLy8gICB9KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/actions.ts\n"));

/***/ })

});