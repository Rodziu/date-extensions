(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/gd", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/gd"] = factory();
	else
		root["i18n/gd"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/gd"],{

/***/ "./.build/i18n/gd.js":
/*!***************************!*\
  !*** ./.build/i18n/gd.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Scottish Gaelic [gd]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('gd', {
    monthNames: ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'],
    monthShortNames: ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
    dayNames: ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'],
    dayShortNames: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis']
});



/***/ })

},
0,[["./.build/i18n/gd.js","DateExtended"]]]).default;
});
//# sourceMappingURL=gd.js.map