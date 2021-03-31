(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/lt", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/lt"] = factory();
	else
		root["i18n/lt"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/lt"],{

/***/ "./.build/i18n/lt.js":
/*!***************************!*\
  !*** ./.build/i18n/lt.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Lithuanian [lt]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('lt', {
    monthNames: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
    monthShortNames: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spa', 'Lap', 'Grd'],
    dayNames: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'šeštadienis'],
    dayShortNames: ['Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš']
});



/***/ })

},
0,[["./.build/i18n/lt.js","DateExtended"]]]).default;
});
//# sourceMappingURL=lt.js.map