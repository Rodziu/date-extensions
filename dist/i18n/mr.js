(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/mr", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/mr"] = factory();
	else
		root["i18n/mr"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/mr"],{

/***/ "./.build/i18n/mr.js":
/*!***************************!*\
  !*** ./.build/i18n/mr.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Marathi [mr]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('mr', {
    monthNames: ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'],
    monthShortNames: ['जाने.', 'फेब्रु.', 'मार्च.', 'एप्रि.', 'मे.', 'जून.', 'जुलै.', 'ऑग.', 'सप्टें.', 'ऑक्टो.', 'नोव्हें.', 'डिसें.'],
    dayNames: ['रविवार', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार'],
    dayShortNames: ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरू', 'शुक्र', 'शनि']
});



/***/ })

},
0,[["./.build/i18n/mr.js","DateExtended"]]]).default;
});
//# sourceMappingURL=mr.js.map