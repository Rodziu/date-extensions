(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/sw", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/sw"] = factory();
	else
		root["i18n/sw"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/sw"],{

/***/ "./.build/i18n/sw.js":
/*!***************************!*\
  !*** ./.build/i18n/sw.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Swahili [sw]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('sw', {
    monthNames: ['Januari', 'Februari', 'Machi', 'Aprili', 'Mei', 'Juni', 'Julai', 'Agosti', 'Septemba', 'Oktoba', 'Novemba', 'Desemba'],
    monthShortNames: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Des'],
    dayNames: ['Jumapili', 'Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi'],
    dayShortNames: ['Jpl', 'Jtat', 'Jnne', 'Jtan', 'Alh', 'Ijm', 'Jmos']
});



/***/ })

},
0,[["./.build/i18n/sw.js","DateExtended"]]]).default;
});
//# sourceMappingURL=sw.js.map