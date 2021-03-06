(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/nl", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/nl"] = factory();
	else
		root["i18n/nl"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/nl"],{

/***/ "./.build/i18n/nl.js":
/*!***************************!*\
  !*** ./.build/i18n/nl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Dutch [nl]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('nl', {
    monthNames: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
    monthShortNames: ['Jan.', 'Feb.', 'Mrt.', 'Apr.', 'Mei', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dec.'],
    dayNames: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    dayShortNames: ['Zo.', 'Ma.', 'Di.', 'Wo.', 'Do.', 'Vr.', 'Za.']
});



/***/ })

},
0,[["./.build/i18n/nl.js","DateExtended"]]]).default;
});
//# sourceMappingURL=nl.js.map