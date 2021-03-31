(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/br", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/br"] = factory();
	else
		root["i18n/br"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/br"],{

/***/ "./.build/i18n/br.js":
/*!***************************!*\
  !*** ./.build/i18n/br.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Breton [br]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('br', {
    monthNames: ['Genver', 'C\'hwevrer', 'Meurzh', 'Ebrel', 'Mae', 'Mezheven', 'Gouere', 'Eost', 'Gwengolo', 'Here', 'Du', 'Kerzu'],
    monthShortNames: ['Gen', 'C\'hwe', 'Meu', 'Ebr', 'Mae', 'Eve', 'Gou', 'Eos', 'Gwe', 'Her', 'Du', 'Ker'],
    dayNames: ['Sul', 'Lun', 'Meurzh', 'Merc\'her', 'Yaou', 'Gwener', 'Sadorn'],
    dayShortNames: ['Sul', 'Lun', 'Meu', 'Mer', 'Yao', 'Gwe', 'Sad']
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./.build/i18n/br.js"));
/******/ __webpack_exports__ = __webpack_exports__.default;
/******/ }
]);
});
//# sourceMappingURL=br.js.map