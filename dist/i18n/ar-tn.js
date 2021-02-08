(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ar-tn", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ar-tn"] = factory();
	else
		root["i18n/ar-tn"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ar-tn"],{

/***/ "./.build/i18n/ar-tn.js":
/*!******************************!*\
  !*** ./.build/i18n/ar-tn.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Arabic (Tunisia) [ar-tn]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ar-tn', {
    monthNames: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthShortNames: ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    dayNames: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    dayShortNames: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
});



/***/ })

},
0,[["./.build/i18n/ar-tn.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ar-tn.js.map