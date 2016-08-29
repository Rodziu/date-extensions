/**
 * Number of microseconds in one day.
 * @type {number}
 */
Date.prototype.oneDay = 1000 * 60 * 60 * 24;
/**
 * PL day names.
 * @type {string[]}
 */
Date.prototype.dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
/**
 * PL short day names.
 * @type {string[]}
 */
Date.prototype.dayShortNames = ['Nd', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb'];
/**
 * PL month names.
 * @type {string[]}
 */
Date.prototype.monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
/**
 * PL month short names.
 * @type {string[]}
 */
Date.prototype.monthShortNames = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
/**
 * Add leading zero if v is less than 10
 * @param v
 * @returns {string}
 */
Date.prototype.datePad = function(v){
	return v < 10 ? '0' + v : v;
};
/**
 * Get day number in month (starting from 1).
 *
 * @returns {string}
 */
Date.prototype.getRealDay = function(){
	return this.datePad(this.getDate());
};
/**
 * Get month number in year (starting from 1).
 * @returns {string}
 */
Date.prototype.getRealMonth = function(){
	return this.datePad(this.getMonth() + 1);
};
/**
 * Get date string in Y-m-d format.
 * @returns {string}
 */
Date.prototype.getDateString = function(){
	return this.getFullYear() + '-' + this.getRealMonth() + '-' + this.getRealDay();
};
/**
 * Format date by given char (PHP style formats).
 * @param format
 * @returns {*}
 */
Date.prototype.formatOne = function(format){
	switch(format){
		case 'd':
			return this.getRealDay();
		case 'D':
			return this.getDayShortName();
		case 'j':
			return this.getDate();
		case 'l':
			return this.getDayName();
		case 'N':
			var d = this.getDay();
			if(d == '0'){
				return '7';
			}
			return d;
		case 'w':
			return this.getDay();
		case 'z':
			var ys = new Date(this.getFullYear() + '-01-01'),
				cmp = new Date(this.getDateString());
			return ((cmp - ys) / this.oneDay);
		case 'F':
			return this.getMonthName();
		case 'm':
			return this.getRealMonth();
		case 'M':
			return this.getMonthShortName();
		case 'n':
			return this.getMonth() + 1;
		case 't':
			return (new Date(this.getFullYear(), this.getMonth() + 1, 0)).getRealDay();
		case 'L':
			return this.getFullYear() - (Math.floor(this.getFullYear() / 4) * 4) == 0 ? 1 : 0;
		case 'Y':
			return this.getFullYear();
		case 'y':
			return this.getFullYear().toString().substr(2);
		case 'g':
			var g = this.getHours();
			if(g > 12){
				return g - 12;
			}else if(g == 0){
				return 12;
			}
			return g;
		case 'G':
			return this.getHours();
		case 'h':
			return this.datePad(this.formatOne('g'));
		case 'H':
			return this.datePad(this.getHours());
		case 'i':
			return this.datePad(this.getMinutes());
		case 's':
			return this.datePad(this.getSeconds());
	}
	return format;
};
/**
 * Return date formatted by given format (PHP style formats).
 * @param format
 * @returns {string}
 */
Date.prototype.format = function(format){
	var cache = {}, result = "", cur;
	for(var i = 0; i < format.length; i++){
		if(format[i] in cache){
			cur = cache[format[i]];
		}else{
			cur = this.formatOne(format[i]);
		}
		result += cur;
		cache[format[i]] = cur;
	}
	return result;
};
/**
 * Get name of day.
 * @returns {string}
 */
Date.prototype.getDayName = function(){
	return this.dayNames[this.getDay()];
};
/**
 * Get short name of day.
 * @returns {string}
 */
Date.prototype.getDayShortName = function(){
	return this.dayShortNames[this.getDay()];
};
/**
 * Get name of month.
 * @returns {string}
 */
Date.prototype.getMonthName = function(){
	return this.monthNames[this.getMonth()];
};
/**
 * Get short name of month.
 * @returns {string}
 */
Date.prototype.getMonthShortName = function(){
	return this.monthShortNames[this.getMonth()];
};