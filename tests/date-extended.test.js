describe('Date tests', function() {

    describe('get month and day names', function() {
        it('monthNames', function() {
            expect(DateExtended.getMonthNames()).toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
        });

        it('monthShortNames', function() {
            expect(DateExtended.getMonthShortNames())
                .toEqual(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
        });

        it('dayNames', function() {
            expect(DateExtended.getDayNames())
                .toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
        });

        it('dayShortNames', function() {
            expect(DateExtended.getDayShortNames())
                .toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
        });

        it('should return a copy of array', function() {
            DateExtended.getMonthNames().splice(0, 3);
            expect(DateExtended.getMonthNames()).toEqual(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
        })
    });

    describe('locale', function() {
        it('forbids to set an undefined locale', function() {
            expect(() => {
                DateExtended.setDefaultLocale('test');
            }).toThrowError();
            expect(() => {
                new DateExtended().setLocale('test');
            }).toThrowError();
        });

        it('allows one to change locale', function() {
            DateExtended.addLocale('pl', {
                monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                monthShortNames: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
                dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
                dayShortNames: ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob']
            });
            DateExtended.setDefaultLocale('pl');
            expect(new DateExtended('2019-01-01').format('F')).toBe('Styczeń');
            expect(DateExtended.getDefaultLocale()).toBe('pl');
            DateExtended.setDefaultLocale('en-us');
            expect(new DateExtended('2019-01-01').format('F')).toBe('January');
            expect(new DateExtended('2019-01-01').setLocale('pl').format('F')).toBe('Styczeń');
        })
    });

    describe('Create from date', function() {
        it('should create DateExtended object out of Date object', function() {
            const date = DateExtended.createFromDate(new Date());
            expect(date instanceof DateExtended).toBeTruthy();
        });
    });

    describe('createFromFormat', function() {
        const date = new DateExtended(),
            invalidDate = (new DateExtended('0000-00-00')).format('Y-m-d H:i:s'),
            testData = [
                [['d', 'a'], invalidDate],
                [['d', '12'], date.format('Y-m-12 H:i:s')],
                [['j', '1'], date.format('Y-m-01 H:i:s')],
                [['F j', 'September 1'], date.format('Y-09-01 H:i:s')],
                [['M j', 'Sep 1'], date.format('Y-09-01 H:i:s')],
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
                [['j F Y', '3 November 2017'], date.format('2017-11-03 H:i:s')],
                [['H:i:s j F Y', '12:59:03 4 November 2017'], date.format('2017-11-04 12:59:03')],
            ];
        for (let k in testData) {
            if (testData.hasOwnProperty(k)) {
                (function(t) {
                    it('Testing with: ' + testData[t], function() {
                        expect(DateExtended.createFromFormat(testData[t][0][0], testData[t][0][1])
                            .format('Y-m-d H:i:s'))
                            .toEqual(testData[t][1]);
                    });
                })(k);
            }
        }
    });

    describe('Date sub', function() {
        let date;
        beforeEach(function() {
            date = new DateExtended('2016-08-07 15:01:12');
        });
        it('Should subtract 8 days from date', function() {
            expect(date.sub(8, 'day').format('Y-m-d')).toBe('2016-07-30');
        });
        it('Should subtract 2 weeks from date', function() {
            expect(date.sub(2, 'week').format('Y-m-d')).toBe('2016-07-24');
        });
        it('Should subtract 9 months from date', function() {
            expect(date.sub(9, 'month').format('Y-m-d')).toBe('2015-11-07');
        });
        it('Should subtract 1 year from date', function() {
            expect(date.sub(1, 'year').format('Y-m-d')).toBe('2015-08-07');
        });
        it('Should subtract 24 hours from date', function() {
            expect(date.sub(24, 'hour').format('Y-m-d H:i:s')).toBe('2016-08-06 15:01:12');
        });
        it('Should subtract 24 minutes from date', function() {
            expect(date.sub(24, 'minute').format('Y-m-d H:i:s')).toBe('2016-08-07 14:37:12');
        });
        it('Should subtract 24 seconds from date', function() {
            expect(date.sub(24, 'second').format('Y-m-d H:i:s')).toBe('2016-08-07 15:00:48');
        });
        it('should properly change months', function() {
            expect((new DateExtended('2021-03-31')).sub(1, 'month').format('Y-m-d')).toBe('2021-02-28');
        });
        it('Should throw an exception', function() {
            expect(function() {
                date.sub(1, '');
            }).toThrow(new Error('Invalid interval type'));
        });
    });

    describe('Date add', function() {
        let date;
        beforeEach(function() {
            date = new DateExtended('2016-08-07 15:01:12');
        });
        it('Should add 8 days to date', function() {
            expect(date.add(8, 'day').format('Y-m-d')).toBe('2016-08-15');
        });
        it('Should add 2 weeks to date', function() {
            expect(date.add(2, 'week').format('Y-m-d')).toBe('2016-08-21');
        });
        it('Should add 9 months to date', function() {
            expect(date.add(9, 'month').format('Y-m-d')).toBe('2017-05-07');
        });
        it('Should add 1 year to date', function() {
            expect(date.add(1, 'year').format('Y-m-d')).toBe('2017-08-07');
        });
        it('Should add 24 hours to date', function() {
            expect(date.add(24, 'hour').format('Y-m-d H:i:s')).toBe('2016-08-08 15:01:12');
        });
        it('Should add 24 minutes to date', function() {
            expect(date.add(24, 'minute').format('Y-m-d H:i:s')).toBe('2016-08-07 15:25:12');
        });
        it('Should add 24 seconds to date', function() {
            expect(date.add(24, 'second').format('Y-m-d H:i:s')).toBe('2016-08-07 15:01:36');
        });
        it('should properly change months', function() {
            expect((new DateExtended('2021-03-31')).add(1, 'month').format('Y-m-d')).toBe('2021-04-30');
        });
        it('Should throw an exception', function() {
            expect(function() {
                date.sub(1, '');
            }).toThrow(new Error('Invalid interval type'));
        });
    });

    describe('Date format', function() {
        const date = new DateExtended('2016-08-07 15:01:12.123456'),
            testData = {
                d: '07',
                D: 'Sun',
                j: '7',
                l: 'Sunday',
                N: '7',
                S: 'th',
                w: '0',
                z: '219',
                W: '31',
                F: 'August',
                m: '08',
                M: 'Aug',
                n: '8',
                t: '31',
                L: '1',
                o: '2016',
                Y: '2016',
                y: '16',
                a: 'pm',
                A: 'PM',
                B: '584',
                g: '3',
                G: '15',
                h: '03',
                H: '15',
                i: '01',
                s: '12',
                u: 'u',
                v: '123',
                e: 'e',
                I: 'I',
                O: '+0200',
                P: '+02:00',
                T: 'T',
                Z: '7200',
                c: '2016-08-07T15:01:12+02:00',
                r: 'Sun, 07 Aug 2016 15:01:12 +0200',
                U: '1470574872'
            };
        for (let k in testData) {
            if (testData.hasOwnProperty(k)) {
                (function(t) {
                    it('Testing with ' + k + ': ' + testData[t], function() {
                        expect(date.format(t)).toBe(testData[t]);
                    });
                })(k);
            }
        }
    });

    describe('Date clone', function() {
        it('Should create another instance of Date', function() {
            const date = new DateExtended();
            expect(date.clone()).toEqual(date);
            expect(date.clone() === date).toBeFalsy();
        });
    });

    describe('IsValid', function() {
        it('Should be a valid instance of Date', function() {
            const date = new DateExtended();
            expect(date.isValid()).toBeTruthy();
        });
        it('Should be an invalid instance of Date', function() {
            const date = new DateExtended('123');
            expect(date.isValid()).toBeFalsy();
        });
    });
});
