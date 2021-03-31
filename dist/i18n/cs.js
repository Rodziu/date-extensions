(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/cs", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/cs"] = factory();
	else
		root["i18n/cs"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/cs"],{

/***/ "./.build/i18n/cs.js":
/*!***************************!*\
  !*** ./.build/i18n/cs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Czech [cs]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('cs', {
    monthNames: ['Leden', 'únor', 'Březen', 'Duben', 'Květen', 'červen', 'červenec', 'Srpen', 'Září', 'říjen', 'Listopad', 'Prosinec'],
    monthShortNames: ['Led', 'úno', 'Bře', 'Dub', 'Kvě', 'čvn', 'čvc', 'Srp', 'Zář', 'říj', 'Lis', 'Pro'],
    dayNames: ['Neděle', 'Pondělí', 'úterý', 'Středa', 'čtvrtek', 'Pátek', 'Sobota'],
    dayShortNames: ['Ne', 'Po', 'út', 'St', 'čt', 'Pá', 'So']
});



/***/ })

},
0,[["./.build/i18n/cs.js","DateExtended"]]]).default;
});
//# sourceMappingURL=cs.js.map