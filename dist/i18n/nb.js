(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/nb", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/nb"] = factory();
	else
		root["i18n/nb"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/nb"],{

/***/ "./.build/i18n/nb.js":
/*!***************************!*\
  !*** ./.build/i18n/nb.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Norwegian Bokmål [nb]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('nb', {
    monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
    monthShortNames: ['Jan.', 'Feb.', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Des.'],
    dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
    dayShortNames: ['Sø.', 'Ma.', 'Ti.', 'On.', 'To.', 'Fr.', 'Lø.']
});



/***/ })

},
0,[["./.build/i18n/nb.js","DateExtended"]]]).default;
});
//# sourceMappingURL=nb.js.map