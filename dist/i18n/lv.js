(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/lv", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/lv"] = factory();
	else
		root["i18n/lv"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/lv"],{

/***/ "./.build/i18n/lv.js":
/*!***************************!*\
  !*** ./.build/i18n/lv.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Latvian [lv]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('lv', {
    monthNames: ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn', 'Jūl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena'],
    dayShortNames: ['Sv', 'P', 'O', 'T', 'C', 'Pk', 'S']
});



/***/ })

},
0,[["./.build/i18n/lv.js","DateExtended"]]]).default;
});
//# sourceMappingURL=lv.js.map