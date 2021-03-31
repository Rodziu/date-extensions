(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ne", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ne"] = factory();
	else
		root["i18n/ne"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ne"],{

/***/ "./.build/i18n/ne.js":
/*!***************************!*\
  !*** ./.build/i18n/ne.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Nepalese [ne]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ne', {
    monthNames: ['जनवरी', 'फेब्रुवरी', 'मार्च', 'अप्रिल', 'मई', 'जुन', 'जुलाई', 'अगष्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर', 'डिसेम्बर'],
    monthShortNames: ['जन.', 'फेब्रु.', 'मार्च', 'अप्रि.', 'मई', 'जुन', 'जुलाई.', 'अग.', 'सेप्ट.', 'अक्टो.', 'नोभे.', 'डिसे.'],
    dayNames: ['आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'],
    dayShortNames: ['आइत.', 'सोम.', 'मङ्गल.', 'बुध.', 'बिहि.', 'शुक्र.', 'शनि.']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/ne.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=ne.js.map