(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ro", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ro"] = factory();
	else
		root["i18n/ro"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ro"],{

/***/ "./.build/i18n/ro.js":
/*!***************************!*\
  !*** ./.build/i18n/ro.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Romanian [ro]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ro', {
    monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
    monthShortNames: ['Ian.', 'Febr.', 'Mart.', 'Apr.', 'Mai', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
    dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
    dayShortNames: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm']
});



/***/ })

},
0,[["./.build/i18n/ro.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ro.js.map