(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/kk", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/kk"] = factory();
	else
		root["i18n/kk"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/kk"],{

/***/ "./.build/i18n/kk.js":
/*!***************************!*\
  !*** ./.build/i18n/kk.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Kazakh [kk]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('kk', {
    monthNames: ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
    monthShortNames: ['қаң', 'ақп', 'нау', 'сәу', 'мам', 'мау', 'шіл', 'там', 'қыр', 'қаз', 'қар', 'жел'],
    dayNames: ['жексенбі', 'дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі'],
    dayShortNames: ['жек', 'дүй', 'сей', 'сәр', 'бей', 'жұм', 'сен']
});



/***/ })

},
0,[["./.build/i18n/kk.js","DateExtended"]]]).default;
});
//# sourceMappingURL=kk.js.map