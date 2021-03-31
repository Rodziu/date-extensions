(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/af", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/af"] = factory();
	else
		root["i18n/af"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/af"],{

/***/ "./.build/i18n/af.js":
/*!***************************!*\
  !*** ./.build/i18n/af.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Afrikaans [af]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('af', {
    monthNames: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
    monthShortNames: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
    dayNames: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
    dayShortNames: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat']
});



/***/ })

},
0,[["./.build/i18n/af.js","DateExtended"]]]).default;
});
//# sourceMappingURL=af.js.map