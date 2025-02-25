"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/templates/[templateId]/edit/route";
exports.ids = ["app/api/templates/[templateId]/edit/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&page=%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute.ts&appDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&page=%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute.ts&appDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_jaymecarey_Desktop_esigner_esigner_src_app_api_templates_templateId_edit_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/templates/[templateId]/edit/route.ts */ \"(rsc)/./src/app/api/templates/[templateId]/edit/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/templates/[templateId]/edit/route\",\n        pathname: \"/api/templates/[templateId]/edit\",\n        filename: \"route\",\n        bundlePath: \"app/api/templates/[templateId]/edit/route\"\n    },\n    resolvedPagePath: \"/Users/jaymecarey/Desktop/esigner/esigner/src/app/api/templates/[templateId]/edit/route.ts\",\n    nextConfigOutput,\n    userland: _Users_jaymecarey_Desktop_esigner_esigner_src_app_api_templates_templateId_edit_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/templates/[templateId]/edit/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0ZW1wbGF0ZXMlMkYlNUJ0ZW1wbGF0ZUlkJTVEJTJGZWRpdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGVtcGxhdGVzJTJGJTVCdGVtcGxhdGVJZCU1RCUyRmVkaXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0ZW1wbGF0ZXMlMkYlNUJ0ZW1wbGF0ZUlkJTVEJTJGZWRpdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmpheW1lY2FyZXklMkZEZXNrdG9wJTJGZXNpZ25lciUyRmVzaWduZXIlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGamF5bWVjYXJleSUyRkRlc2t0b3AlMkZlc2lnbmVyJTJGZXNpZ25lciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEM7QUFDdkg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlZm9yZ2UtYXBwLz8yZTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9qYXltZWNhcmV5L0Rlc2t0b3AvZXNpZ25lci9lc2lnbmVyL3NyYy9hcHAvYXBpL3RlbXBsYXRlcy9bdGVtcGxhdGVJZF0vZWRpdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGVtcGxhdGVzL1t0ZW1wbGF0ZUlkXS9lZGl0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdGVtcGxhdGVzL1t0ZW1wbGF0ZUlkXS9lZGl0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90ZW1wbGF0ZXMvW3RlbXBsYXRlSWRdL2VkaXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvamF5bWVjYXJleS9EZXNrdG9wL2VzaWduZXIvZXNpZ25lci9zcmMvYXBwL2FwaS90ZW1wbGF0ZXMvW3RlbXBsYXRlSWRdL2VkaXQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3RlbXBsYXRlcy9bdGVtcGxhdGVJZF0vZWRpdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&page=%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute.ts&appDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/templates/[templateId]/edit/route.ts":
/*!**********************************************************!*\
  !*** ./src/app/api/templates/[templateId]/edit/route.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function GET(request, { params }) {\n    const API_KEY = process.env.DOCUSEAL_API_KEY;\n    const templateId = params.templateId;\n    if (!API_KEY) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"DOCUSEAL_API_KEY not configured\"\n        }, {\n            status: 500\n        });\n    }\n    try {\n        // Generate JWT token with template_id for editing\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n            user_email: process.env.DOCUSEAL_ADMIN_EMAIL,\n            integration_email: \"user@example.com\",\n            external_id: templateId,\n            mode: \"edit\",\n            template_id: templateId\n        }, API_KEY);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            jwt: token\n        });\n    } catch (error) {\n        console.error(\"Error getting edit token:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to get edit token\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90ZW1wbGF0ZXMvW3RlbXBsYXRlSWRdL2VkaXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNaO0FBRXhCLGVBQWVFLElBQ3BCQyxPQUFnQixFQUNoQixFQUFFQyxNQUFNLEVBQXNDO0lBRTlDLE1BQU1DLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0lBQzVDLE1BQU1DLGFBQWFMLE9BQU9LLFVBQVU7SUFFcEMsSUFBSSxDQUFDSixTQUFTO1FBQ1osT0FBT0wscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWtDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3ZGO0lBRUEsSUFBSTtRQUNGLGtEQUFrRDtRQUNsRCxNQUFNQyxRQUFRWix3REFBUSxDQUFDO1lBQ3JCYyxZQUFZVCxRQUFRQyxHQUFHLENBQUNTLG9CQUFvQjtZQUM1Q0MsbUJBQW1CO1lBQ25CQyxhQUFhVDtZQUNiVSxNQUFNO1lBQ05DLGFBQWFYO1FBQ2YsR0FBR0o7UUFFSCxPQUFPTCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVULEtBQUtZO1FBQU07SUFDeEMsRUFBRSxPQUFPRixPQUFPO1FBQ2RVLFFBQVFWLEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE9BQU9YLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEyQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNoRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlmZWZvcmdlLWFwcC8uL3NyYy9hcHAvYXBpL3RlbXBsYXRlcy9bdGVtcGxhdGVJZF0vZWRpdC9yb3V0ZS50cz8yYTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgdGVtcGxhdGVJZDogc3RyaW5nIH0gfVxuKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ET0NVU0VBTF9BUElfS0VZO1xuICBjb25zdCB0ZW1wbGF0ZUlkID0gcGFyYW1zLnRlbXBsYXRlSWQ7XG5cbiAgaWYgKCFBUElfS0VZKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdET0NVU0VBTF9BUElfS0VZIG5vdCBjb25maWd1cmVkJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBKV1QgdG9rZW4gd2l0aCB0ZW1wbGF0ZV9pZCBmb3IgZWRpdGluZ1xuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oe1xuICAgICAgdXNlcl9lbWFpbDogcHJvY2Vzcy5lbnYuRE9DVVNFQUxfQURNSU5fRU1BSUwsXG4gICAgICBpbnRlZ3JhdGlvbl9lbWFpbDogJ3VzZXJAZXhhbXBsZS5jb20nLFxuICAgICAgZXh0ZXJuYWxfaWQ6IHRlbXBsYXRlSWQsXG4gICAgICBtb2RlOiAnZWRpdCcsXG4gICAgICB0ZW1wbGF0ZV9pZDogdGVtcGxhdGVJZFxuICAgIH0sIEFQSV9LRVkpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgand0OiB0b2tlbiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGVkaXQgdG9rZW46JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGdldCBlZGl0IHRva2VuJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiand0IiwiR0VUIiwicmVxdWVzdCIsInBhcmFtcyIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiRE9DVVNFQUxfQVBJX0tFWSIsInRlbXBsYXRlSWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0b2tlbiIsInNpZ24iLCJ1c2VyX2VtYWlsIiwiRE9DVVNFQUxfQURNSU5fRU1BSUwiLCJpbnRlZ3JhdGlvbl9lbWFpbCIsImV4dGVybmFsX2lkIiwibW9kZSIsInRlbXBsYXRlX2lkIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/templates/[templateId]/edit/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&page=%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftemplates%2F%5BtemplateId%5D%2Fedit%2Froute.ts&appDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaymecarey%2FDesktop%2Fesigner%2Fesigner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();