(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/hu", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/hu"] = factory();
	else
		root["i18n/hu"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/hu"],{

/***/ "./.build/i18n/hu.js":
/*!***************************!*\
  !*** ./.build/i18n/hu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Hungarian [hu]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('hu', {
    monthNames: ['Január', 'Február', 'Március', 'április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
    monthShortNames: ['Jan', 'Feb', 'Márc', 'ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szept', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
    dayShortNames: ['Vas', 'Hét', 'Kedd', 'Sze', 'Csüt', 'Pén', 'Szo']
});



/***/ })

},
0,[["./.build/i18n/hu.js","DateExtended"]]]).default;
});
//# sourceMappingURL=hu.js.map