(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/sr", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/sr"] = factory();
	else
		root["i18n/sr"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/sr"],{

/***/ "./.build/i18n/sr.js":
/*!***************************!*\
  !*** ./.build/i18n/sr.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Serbian [sr]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('sr', {
    monthNames: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
    monthShortNames: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'Maj', 'Jun', 'Jul', 'Avg.', 'Sep.', 'Okt.', 'Nov.', 'Dec.'],
    dayNames: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'četvrtak', 'Petak', 'Subota'],
    dayShortNames: ['Ned.', 'Pon.', 'Uto.', 'Sre.', 'čet.', 'Pet.', 'Sub.']
});



/***/ })

},
0,[["./.build/i18n/sr.js","DateExtended"]]]).default;
});
//# sourceMappingURL=sr.js.map