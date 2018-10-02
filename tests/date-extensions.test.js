describe('Date tests', function(){
	describe('Date format', function(){
		const date = new Date('2016-08-07 15:01:12'),
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
		for(let k in testData){
			if(testData.hasOwnProperty(k)){
				(function(t){
					it('Testing with ' + k + ': ' + testData[t], function(){
						expect(date.format(t)).toBe(testData[t]);
					});
				})(k);
			}
		}
	});
	describe('Date sub', function(){
		let date;
		beforeEach(function(){
			date = new Date('2016-08-07 15:01:12');
		});
		it("Should subtract 8 days from date", function(){
			expect(date.sub(8, 'day').format('Y-m-d')).toBe('2016-07-30');
		});
		it("Should subtract 2 weeks from date", function(){
			expect(date.sub(2, 'week').format('Y-m-d')).toBe('2016-07-24');
		});
		it("Should subtract 9 months from date", function(){
			expect(date.sub(9, 'month').format('Y-m-d')).toBe('2015-11-07');
		});
		it("Should subtract 1 year from date", function(){
			expect(date.sub(1, 'year').format('Y-m-d')).toBe('2015-08-07');
		});
		it("Should subtract 24 hours from date", function(){
			expect(date.sub(24, 'hour').format('Y-m-d H:i:s')).toBe('2016-08-06 15:01:12');
		});
		it("Should subtract 24 minutes from date", function(){
			expect(date.sub(24, 'minute').format('Y-m-d H:i:s')).toBe('2016-08-07 14:37:12');
		});
		it("Should subtract 24 seconds from date", function(){
			expect(date.sub(24, 'second').format('Y-m-d H:i:s')).toBe('2016-08-07 15:00:48');
		});
		it("Should throw an exception", function(){
			expect(function(){
				date.sub(1, '');
			}).toThrow(new Error("Invalid interval type"));
		});
	});
	describe('Date add', function(){
		let date;
		beforeEach(function(){
			date = new Date('2016-08-07 15:01:12');
		});
		it("Should add 8 days to date", function(){
			expect(date.add(8, 'day').format('Y-m-d')).toBe('2016-08-15');
		});
		it("Should add 2 weeks to date", function(){
			expect(date.add(2, 'week').format('Y-m-d')).toBe('2016-08-21');
		});
		it("Should add 9 months to date", function(){
			expect(date.add(9, 'month').format('Y-m-d')).toBe('2017-05-07');
		});
		it("Should add 1 year to date", function(){
			expect(date.add(1, 'year').format('Y-m-d')).toBe('2017-08-07');
		});
		it("Should add 24 hours to date", function(){
			expect(date.add(24, 'hour').format('Y-m-d H:i:s')).toBe('2016-08-08 15:01:12');
		});
		it("Should add 24 minutes to date", function(){
			expect(date.add(24, 'minute').format('Y-m-d H:i:s')).toBe('2016-08-07 15:25:12');
		});
		it("Should add 24 seconds to date", function(){
			expect(date.add(24, 'second').format('Y-m-d H:i:s')).toBe('2016-08-07 15:01:36');
		});
		it("Should throw an exception", function(){
			expect(function(){
				date.sub(1, '');
			}).toThrow(new Error("Invalid interval type"));
		});
	});
	describe("Date clone", function(){
		it("Should create another instance of Date", function(){
			const date = new Date();
			expect(date.clone()).toEqual(date);
			expect(date.clone() === date).toBeFalsy();
		});
	});
	describe("IsValid", function(){
		it("Should be a valid instance of Date", function(){
			const date = new Date();
			expect(date.isValid()).toBeTruthy();
		});
		it("Should be an invalid instance of Date", function(){
			const date = new Date("123");
			expect(date.isValid()).toBeFalsy();
		});
	});
	describe('createFromFormat', function(){
		const date = new Date(),
			invalidDate = (new Date('0000-00-00')).format('Y-m-d H:i:s'),
			testData = [
				[['d', 'a'], invalidDate],
				[['d', '12'], date.format('Y-m-12 H:i:s')],
				[['j', '1'], date.format('Y-m-01 H:i:s')],
				[['F', 'Wrzesień'], date.format('Y-09-d H:i:s')],
				[['M', 'Wrz'], date.format('Y-09-d H:i:s')],
				[['m', '12'], date.format('Y-12-d H:i:s')],
				[['n', '1'], date.format('Y-01-d H:i:s')],
				[['n', '14'], invalidDate],
				[['Y', '1999'], date.format('1999-m-d H:i:s')],
				[['y', '99'], date.format('2099-m-d H:i:s')],
				[['g', '1'], date.format('Y-m-d 01:i:s')],
				[['g', '23'], invalidDate],
				[['G', '23'], date.format('Y-m-d 23:i:s')],
				[['h', '01'], date.format('Y-m-d 01:i:s')],
				[['h', '23'], invalidDate],
				[['H', '23'], date.format('Y-m-d 23:i:s')],
				[['i', '09'], date.format('Y-m-d H:09:s')],
				[['s', '09'], date.format('Y-m-d H:i:09')],
				[['j F Y', '3 Listopad 2017'], date.format('2017-11-03 H:i:s')],
				[['H:i:s j F Y', '12:59:03 4 Listopad 2017'], date.format('2017-11-04 12:59:03')],
			];
		for(let k in testData){
			if(testData.hasOwnProperty(k)){
				(function(t){
					it('Testing with: ' + testData[t], function(){
						expect(date.clone().createFromFormat(testData[t][0][0], testData[t][0][1])
							.format('Y-m-d H:i:s'))
							.toEqual(testData[t][1]);
					});
				})(k);
			}
		}
	});
});