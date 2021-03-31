(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ar-ma", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ar-ma"] = factory();
	else
		root["i18n/ar-ma"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ar-ma"],{

/***/ "./.build/i18n/ar-ma.js":
/*!******************************!*\
  !*** ./.build/i18n/ar-ma.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Arabic (Morocco) [ar-ma]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ar-ma', {
    monthNames: ['يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو', 'يوليوز', 'غشت', 'شتنبر', 'أكتوبر', 'نونبر', 'دجنبر'],
    monthShortNames: ['يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو', 'يوليوز', 'غشت', 'شتنبر', 'أكتوبر', 'نونبر', 'دجنبر'],
    dayNames: ['الأحد', 'الإتنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayShortNames: ['احد', 'اتنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت']
});



/***/ })

},
0,[["./.build/i18n/ar-ma.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ar-ma.js.map