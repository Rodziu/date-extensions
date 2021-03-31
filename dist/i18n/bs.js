(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/bs", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/bs"] = factory();
	else
		root["i18n/bs"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/bs"],{

/***/ "./.build/i18n/bs.js":
/*!***************************!*\
  !*** ./.build/i18n/bs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Bosnian [bs]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('bs', {
    monthNames: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'August', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
    monthShortNames: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'Maj.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dec.'],
    dayNames: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'četvrtak', 'Petak', 'Subota'],
    dayShortNames: ['Ned.', 'Pon.', 'Uto.', 'Sri.', 'čet.', 'Pet.', 'Sub.']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/bs.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=bs.js.map