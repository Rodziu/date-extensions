Date.prototype.datePad = function(v){
	return v < 10 ? '0' + v : v;
};
Date.prototype.getRealDay = function(){
	return this.datePad(this.getDate());
};
Date.prototype.getRealMonth = function(){
	return this.datePad(this.getMonth() + 1);
};
//noinspection JSUnusedGlobalSymbols
Date.prototype.getDateString = function(){
	var m = this.getRealMonth(),
		d = this.getRealDay();
	return this.getFullYear() + '-' + m + '-' + d;
};
//noinspection JSUnusedGlobalSymbols
Date.prototype.getDayName = function(){
	return ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'][this.getDay()];
};
//noinspection JSUnusedGlobalSymbols
Date.prototype.getMonthName = function(){
	return ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'][this.getMonth()];
};