(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("i18n/te", [], factory);
	else if(typeof exports === 'object')
		exports["i18n/te"] = factory();
	else
		root["i18n/te"] = factory();
})(window, function() {
return (window["webpackChunk_name_"] = window["webpackChunk_name_"] || []).push([["i18n/te"],{

/***/ "./.build/i18n/te.js":
/*!***************************!*\
  !*** ./.build/i18n/te.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date-extended */ "./.build/date-extended.js");
/**
 * Date-extensions locale Telugu [te]
 */

_date_extended__WEBPACK_IMPORTED_MODULE_0__.default.addLocale('te', {
    monthNames: ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'],
    monthShortNames: ['జన.', 'ఫిబ్ర.', 'మార్చి', 'ఏప్రి.', 'మే', 'జూన్', 'జూలై', 'ఆగ.', 'సెప్.', 'అక్టో.', 'నవ.', 'డిసె.'],
    dayNames: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
    dayShortNames: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని']
});



/***/ })

},
0,[["./.build/i18n/te.js","DateExtended"]]]).default;
});
//# sourceMappingURL=te.js.map