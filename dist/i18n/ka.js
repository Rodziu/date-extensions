(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/ka", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/ka"] = factory();
	else
		root["i18n/ka"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/ka"],{

/***/ "./.build/i18n/ka.js":
/*!***************************!*\
  !*** ./.build/i18n/ka.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Georgian [ka]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('ka', {
    monthNames: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
    monthShortNames: ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
    dayNames: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'],
    dayShortNames: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ']
});



/***/ })

},
0,[["./.build/i18n/ka.js","DateExtended"]]]).default;
});
//# sourceMappingURL=ka.js.map