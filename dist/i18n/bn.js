(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/bn", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/bn"] = factory();
	else
		root["i18n/bn"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/bn"],{

/***/ "./.build/i18n/bn.js":
/*!***************************!*\
  !*** ./.build/i18n/bn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Bengali [bn]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('bn', {
    monthNames: ['জানুয়ারী', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
    monthShortNames: ['জানু', 'ফেব', 'মার্চ', 'এপ্র', 'মে', 'জুন', 'জুল', 'আগ', 'সেপ্ট', 'অক্টো', 'নভে', 'ডিসে'],
    dayNames: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
    dayShortNames: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি']
});



/***/ })

},
0,[["./.build/i18n/bn.js","DateExtended"]]]).default;
});
//# sourceMappingURL=bn.js.map