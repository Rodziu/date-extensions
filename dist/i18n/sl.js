(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/sl", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/sl"] = factory();
	else
		root["i18n/sl"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/sl"],{

/***/ "./.build/i18n/sl.js":
/*!***************************!*\
  !*** ./.build/i18n/sl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Slovenian [sl]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('sl', {
    monthNames: ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
    monthShortNames: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'Maj.', 'Jun.', 'Jul.', 'Avg.', 'Sep.', 'Okt.', 'Nov.', 'Dec.'],
    dayNames: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'četrtek', 'Petek', 'Sobota'],
    dayShortNames: ['Ned.', 'Pon.', 'Tor.', 'Sre.', 'čet.', 'Pet.', 'Sob.']
});



/***/ })

},
0,[["./.build/i18n/sl.js","DateExtended"]]]).default;
});
//# sourceMappingURL=sl.js.map