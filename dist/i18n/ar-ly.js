(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ar-ly", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ar-ly"] = factory();
	else
		root["i18n/ar-ly"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ar-ly"],{

/***/ "./.build/i18n/ar-ly.js":
/*!******************************!*\
  !*** ./.build/i18n/ar-ly.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Arabic (Lybia) [ar-ly]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ar-ly', {
    monthNames: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthShortNames: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    dayNames: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayShortNames: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
});



/***/ })

},
0,[["./.build/i18n/ar-ly.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ar-ly.js.map