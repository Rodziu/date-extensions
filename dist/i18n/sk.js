(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/sk", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/sk"] = factory();
	else
		root["i18n/sk"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/sk"],{

/***/ "./.build/i18n/sk.js":
/*!***************************!*\
  !*** ./.build/i18n/sk.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Slovak [sk]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('sk', {
    monthNames: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'štvrtok', 'Piatok', 'Sobota'],
    dayShortNames: ['Ne', 'Po', 'Ut', 'St', 'št', 'Pi', 'So']
});



/***/ })

},
0,[["./.build/i18n/sk.js","DateExtended"]]]).default;
});
//# sourceMappingURL=sk.js.map