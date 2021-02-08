(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/pl", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/pl"] = factory();
	else
		root["i18n/pl"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/pl"],{

/***/ "./.build/i18n/pl.js":
/*!***************************!*\
  !*** ./.build/i18n/pl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Polish [pl]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('pl', {
    monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    monthShortNames: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
    dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
    dayShortNames: ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob']
});



/***/ })

},
0,[["./.build/i18n/pl.js","DateExtended"]]]).default;
});
//# sourceMappingURL=pl.js.map