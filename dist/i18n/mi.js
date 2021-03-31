(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/mi", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/mi"] = factory();
	else
		root["i18n/mi"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/mi"],{

/***/ "./.build/i18n/mi.js":
/*!***************************!*\
  !*** ./.build/i18n/mi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Maori [mi]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('mi', {
    monthNames: ['Kohi-tāte', 'Hui-tanguru', 'Poutū-te-rangi', 'Paenga-whāwhā', 'Haratua', 'Pipiri', 'Hōngoingoi', 'Here-turi-kōkā', 'Mahuru', 'Whiringa-ā-nuku', 'Whiringa-ā-rangi', 'Hakihea'],
    monthShortNames: ['Kohi', 'Hui', 'Pou', 'Pae', 'Hara', 'Pipi', 'Hōngoi', 'Here', 'Mahu', 'Whi-nu', 'Whi-ra', 'Haki'],
    dayNames: ['Rātapu', 'Mane', 'Tūrei', 'Wenerei', 'Tāite', 'Paraire', 'Hātarei'],
    dayShortNames: ['Ta', 'Ma', 'Tū', 'We', 'Tāi', 'Pa', 'Hā']
});



/***/ })

},
0,[["./.build/i18n/mi.js","DateExtended"]]]).default;
});
//# sourceMappingURL=mi.js.map