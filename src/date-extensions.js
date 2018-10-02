/**
 * JavaScript Date extensions.
 * (c) 2016-2018 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
/**
 * Number of microseconds in one day.
 * @type {number}
 */
Date.prototype.oneDay = 1000 * 60 * 60 * 24;
if(typeof Date.prototype.dayNames === 'undefined'){
	/**
	 * @type {string[]}
	 */
	Date.prototype.dayNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
}
if(typeof Date.prototype.dayShortNames === 'undefined'){
	/**
	 * @type {string[]}
	 */
	Date.prototype.dayShortNames = ['Nd', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb'];
}
if(typeof Date.prototype.monthNames === 'undefined'){
	/**
	 * @type {string[]}
	 */
	Date.prototype.monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
}
if(typeof Date.prototype.monthShortNames === 'undefined'){
	/**
	 * @type {string[]}
	 */
	Date.prototype.monthShortNames = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
}
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
 * Subtract a number (amount) of `type` interval from date.
 * @param {number} amount
 * @param {string} [type] - day|week|month|year|hour|minute|second
 * @returns {Date}
 */
Date.prototype.sub = function(amount, type){
	if(typeof type === 'undefined'){
		type = 'day';
	}
	switch(type){
		case 'day':
			this.setDate(this.getDate() - amount);
			break;
		case 'week':
			this.setDate(this.getDate() - (amount * 7));
			break;
		case 'month':
			this.setMonth(this.getMonth() - amount);
			break;
		case 'year':
			this.setFullYear(this.getFullYear() - amount);
			break;
		case 'hour':
			this.setHours(this.getHours() - amount);
			break;
		case 'minute':
			this.setMinutes(this.getMinutes() - amount);
			break;
		case 'second':
			this.setSeconds(this.getSeconds() - amount);
			break;
		default:
			throw new Error("Invalid interval type");
	}
	return this;
};
// noinspection JSUnusedGlobalSymbols
/**
 * Add a number (amount) of `type` interval from date.
 * @param {number} amount
 * @param {string} [type] - day|week|month|year|hour|minute|second
 * @returns {Date}
 */
Date.prototype.add = function(amount, type){
	this.sub(-amount, type);
	return this;
};
/**
 * Format date by given char (PHP style formats).
 * @param {string} format
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
			const d = this.getDay();
			if(d === 0){
				return '7';
			}
			return d;
		case 'w':
			return this.getDay();
		case 'z':
			const ys = new Date(this.getFullYear() + '-01-01'),
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
			return this.getFullYear() - (Math.floor(this.getFullYear() / 4) * 4) === 0 ? 1 : 0;
		case 'Y':
			return this.getFullYear();
		case 'y':
			return this.getFullYear().toString().substr(2);
		case 'g':
			const g = this.getHours();
			if(g > 12){
				return g - 12;
			}else if(g === 0){
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
 * @param {string} format
 * @returns {string}
 */
Date.prototype.format = function(format){
	const cache = {};
	let result = "",
		cur;
	for(let i = 0; i < format.length; i++){
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
 * Return a new Date instance with same values as current Date.
 * @returns {Date}
 */
Date.prototype.clone = function(){
	return new Date(this.getTime());
};
/**
 * Check if this instance of Date is valid.
 * @returns {boolean}
 */
Date.prototype.isValid = function(){
	return !isNaN(this.getTime());
};
/**
 * Parses a date string according to a specified format
 *
 * @param {string} format - The format that the passed in string should be in.
 * @param {string} date - String representing the date
 * @returns {Date}
 */
Date.prototype.createFromFormat = function(format, date){
	for(let i = 0; i < format.length; i++){
		let match = null;
		switch(format[i]){
			case 'd':
			case 'j':
				match = date.match(
					format[i] === 'd' ? /^[0-9]{2}/ : /^[0-9]{1,2}/
				);
				if(match !== null){
					match = match[0];
					if(match > 0 && match < 32){
						this.setDate(parseInt(match));
					}else{
						match = null;
					}
				}
				break;
			case 'F':
			case 'M':
				const array = format[i] === 'F' ? this.monthNames : this.monthShortNames;
				for(let m = 0; m < array.length; m++){
					match = date.match(new RegExp("^" + array[m]));
					if(match !== null){
						match = match[0];
						this.setMonth(m);
						break;
					}
				}
				break;
			case 'm':
			case 'n':
				match = date.match(
					format[i] === 'm' ? /^[0-9]{2}/ : /^[0-9]{1,2}/
				);
				if(match !== null){
					match = match[0];
					if(match > 0 && match < 13){
						this.setMonth(match - 1);
					}else{
						match = null;
					}
				}
				break;
			case 'Y':
			case 'y':
				match = date.match(
					format[i] === 'Y' ? /^[0-9]{4}/ : /^[0-9]{2}/
				);
				if(match !== null){
					match = match[0];
					this.setFullYear(parseInt(format[i] === 'Y' ? match : '20' + match));
				}
				break;
			case 'g':
			case 'G':
			case 'h':
			case 'H':
				match = date.match(format[i] === 'h' || format[i] === 'H' ? /^[0-9]{2}/ : /^[0-9]{1,2}/);
				if(match !== null){
					match = match[0];
					if(
						match >= 0
						&& (
							((format[i] === 'g' || format[i] === 'h') && match < 13)
							|| ((format[i] === 'G' || format[i] === 'H') && match < 24)
						)
					){
						this.setHours(parseInt(match));
					}else{
						match = null;
					}
				}
				break;
			case 'i':
			case 's':
				match = date.match(/^[0-9]{2}/);
				if(match !== null){
					match = match[0];
					if(match > 0 && match < 60){
						if(format[i] === 'i'){
							this.setMinutes(parseInt(match));
						}else{
							this.setSeconds(parseInt(match));
						}
					}
				}
				break;
			default:
				match = format[i];
				break;
		}
		if(match === null){
			// noinspection JSCheckFunctionSignatures
			this.setTime('a'); // make it an invalid date
			break;
		}
		date = date.replace(match, '');
	}
	return this;
};