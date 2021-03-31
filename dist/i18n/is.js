(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/is", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/is"] = factory();
	else
		root["i18n/is"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/is"],{

/***/ "./.build/i18n/is.js":
/*!***************************!*\
  !*** ./.build/i18n/is.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Icelandic [is]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('is', {
    monthNames: ['Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Júlí', 'ágúst', 'September', 'Október', 'Nóvember', 'Desember'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Maí', 'Jún', 'Júl', 'ágú', 'Sep', 'Okt', 'Nóv', 'Des'],
    dayNames: ['Sunnudagur', 'Mánudagur', 'þriðjudagur', 'Miðvikudagur', 'Fimmtudagur', 'Föstudagur', 'Laugardagur'],
    dayShortNames: ['Sun', 'Mán', 'þri', 'Mið', 'Fim', 'Fös', 'Lau']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/is.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=is.js.map