(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/tet", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/tet"] = factory();
	else
		root["i18n/tet"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/tet"],{

/***/ "./.build/i18n/tet.js":
/*!****************************!*\
  !*** ./.build/i18n/tet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Tetun Dili (East Timor) [tet]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('tet', {
    monthNames: ['Janeiru', 'Fevereiru', 'Marsu', 'Abril', 'Maiu', 'Juniu', 'Juliu', 'Augustu', 'Setembru', 'Outubru', 'Novembru', 'Dezembru'],
    monthShortNames: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingu', 'Segunda', 'Tersa', 'Kuarta', 'Kinta', 'Sexta', 'Sabadu'],
    dayShortNames: ['Dom', 'Seg', 'Ters', 'Kua', 'Kint', 'Sext', 'Sab']
});



/***/ })

},
0,[["./.build/i18n/tet.js","DateExtended"]]]).default;
});
//# sourceMappingURL=tet.js.map