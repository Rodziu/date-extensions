(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ca", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ca"] = factory();
	else
		root["i18n/ca"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ca"],{

/***/ "./.build/i18n/ca.js":
/*!***************************!*\
  !*** ./.build/i18n/ca.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Catalan [ca]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ca', {
    monthNames: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
    monthShortNames: ['Gen.', 'Febr.', 'Març', 'Abr.', 'Maig', 'Juny', 'Jul.', 'Ag.', 'Set.', 'Oct.', 'Nov.', 'Des.'],
    dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
    dayShortNames: ['Dg.', 'Dl.', 'Dt.', 'Dc.', 'Dj.', 'Dv.', 'Ds.']
});



/***/ })

},
0,[["./.build/i18n/ca.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ca.js.map