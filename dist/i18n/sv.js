(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/sv", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/sv"] = factory();
	else
		root["i18n/sv"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/sv"],{

/***/ "./.build/i18n/sv.js":
/*!***************************!*\
  !*** ./.build/i18n/sv.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Swedish [sv]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('sv', {
    monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
    dayShortNames: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
});



/***/ })

},
0,[["./.build/i18n/sv.js","DateExtended"]]]).default;
});
//# sourceMappingURL=sv.js.map