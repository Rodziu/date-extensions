(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/fy", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/fy"] = factory();
	else
		root["i18n/fy"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/fy"],{

/***/ "./.build/i18n/fy.js":
/*!***************************!*\
  !*** ./.build/i18n/fy.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Frisian [fy]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('fy', {
    monthNames: ['Jannewaris', 'Febrewaris', 'Maart', 'April', 'Maaie', 'Juny', 'July', 'Augustus', 'Septimber', 'Oktober', 'Novimber', 'Desimber'],
    monthShortNames: ['Jan.', 'Feb.', 'Mrt.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Des.'],
    dayNames: ['Snein', 'Moandei', 'Tiisdei', 'Woansdei', 'Tongersdei', 'Freed', 'Sneon'],
    dayShortNames: ['Si.', 'Mo.', 'Ti.', 'Wo.', 'To.', 'Fr.', 'So.']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/fy.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=fy.js.map