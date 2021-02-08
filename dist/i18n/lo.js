(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/lo", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/lo"] = factory();
	else
		root["i18n/lo"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/lo"],{

/***/ "./.build/i18n/lo.js":
/*!***************************!*\
  !*** ./.build/i18n/lo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Lao [lo]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('lo', {
    monthNames: ['ມັງກອນ', 'ກຸມພາ', 'ມີນາ', 'ເມສາ', 'ພຶດສະພາ', 'ມິຖຸນາ', 'ກໍລະກົດ', 'ສິງຫາ', 'ກັນຍາ', 'ຕຸລາ', 'ພະຈິກ', 'ທັນວາ'],
    monthShortNames: ['ມັງກອນ', 'ກຸມພາ', 'ມີນາ', 'ເມສາ', 'ພຶດສະພາ', 'ມິຖຸນາ', 'ກໍລະກົດ', 'ສິງຫາ', 'ກັນຍາ', 'ຕຸລາ', 'ພະຈິກ', 'ທັນວາ'],
    dayNames: ['ອາທິດ', 'ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ'],
    dayShortNames: ['ທິດ', 'ຈັນ', 'ອັງຄານ', 'ພຸດ', 'ພະຫັດ', 'ສຸກ', 'ເສົາ']
});



/***/ })

},
0,[["./.build/i18n/lo.js","DateExtended"]]]).default;
});
//# sourceMappingURL=lo.js.map