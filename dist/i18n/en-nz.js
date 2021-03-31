(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/en-nz", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/en-nz"] = factory();
	else
		root["i18n/en-nz"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/en-nz"],{

/***/ "./.build/i18n/en-nz.js":
/*!******************************!*\
  !*** ./.build/i18n/en-nz.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale English (New Zealand) [en-nz]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('en-nz', {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayShortNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
});



/***/ })

},
0,[["./.build/i18n/en-nz.js","DateExtended"]]]).default;
});
//# sourceMappingURL=en-nz.js.map