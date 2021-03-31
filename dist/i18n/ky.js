(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ky", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ky"] = factory();
	else
		root["i18n/ky"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ky"],{

/***/ "./.build/i18n/ky.js":
/*!***************************!*\
  !*** ./.build/i18n/ky.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Kyrgyz [ky]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ky', {
    monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
    monthShortNames: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    dayNames: ['Жекшемби', 'Дүйшөмбү', 'Шейшемби', 'Шаршемби', 'Бейшемби', 'Жума', 'Ишемби'],
    dayShortNames: ['Жек', 'Дүй', 'Шей', 'Шар', 'Бей', 'Жум', 'Ише']
});



/***/ })

},
0,[["./.build/i18n/ky.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ky.js.map