(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/uz-latn", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/uz-latn"] = factory();
	else
		root["i18n/uz-latn"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/uz-latn"],{

/***/ "./.build/i18n/uz-latn.js":
/*!********************************!*\
  !*** ./.build/i18n/uz-latn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Uzbek Latin [uz-latn]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('uz-latn', {
    monthNames: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
    monthShortNames: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
    dayNames: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
    dayShortNames: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan']
});



/***/ })

},
0,[["./.build/i18n/uz-latn.js","DateExtended"]]]).default;
});
//# sourceMappingURL=uz-latn.js.map