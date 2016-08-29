describe('Date format', function(){
	var date = new Date('2016-08-07 15:01:12'),
		testData = {
			d: '07',
			D: 'Nd',
			j: '7',
			l: 'Niedziela',
			N: '7',
			w: '0',
			z: '219',
			F: 'Sierpień',
			m: '08',
			M: 'Sie',
			n: '8',
			t: '31',
			L: '1',
			Y: '2016',
			y: '16',
			g: '3',
			G: '15',
			h: '03',
			H: '15',
			i: '01',
			s: '12'
		};
	for(var k in testData){
		if(testData.hasOwnProperty(k)){
			(function(t){
				it('Testing with ' + k + ': ' + testData[t], function(){
					expect(date.format(t)).toBe(testData[t]);
				});
			})(k);
		}
	}

});