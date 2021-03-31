(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/hr", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/hr"] = factory();
	else
		root["i18n/hr"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/hr"],{

/***/ "./.build/i18n/hr.js":
/*!***************************!*\
  !*** ./.build/i18n/hr.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Croatian [hr]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('hr', {
    monthNames: ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'],
    monthShortNames: ['Sij.', 'Velj.', 'Ožu.', 'Tra.', 'Svi.', 'Lip.', 'Srp.', 'Kol.', 'Ruj.', 'Lis.', 'Stu.', 'Pro.'],
    dayNames: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'četvrtak', 'Petak', 'Subota'],
    dayShortNames: ['Ned.', 'Pon.', 'Uto.', 'Sri.', 'čet.', 'Pet.', 'Sub.']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/hr.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=hr.js.map