import { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } from '../challenges/exercise007-optional';

describe('sumDigits', () => {
	test('takes number and returns sum of digits', () => {
		// Arrange
		const num = 123;
		const expected = 6;

		// Act
		const result = sumDigits(num);

		// Assert
		expect(result).toBe(expected);
	});

	test('takes a single digit number and returns the number', () => {
		// Arrange
		const num = 5;
		const expected = 5;

		// Act
		const result = sumDigits(num);

		// Assert
		expect(result).toBe(expected);
	});

	test('takes a very large number and returns the sum of its digits', () => {
		// Arrange
		const num = 123456789;
		const expected = 45;

		// Act
		const result = sumDigits(num);

		// Assert
		expect(result).toBe(expected);
	});

	test('throws an error if no number is provided', () => {
		// Arrange
		const expected = 'n is required';

		// Act
		const result = () => {
			sumDigits();
		};

		// Assert
		expect(result).toThrow(expected);
	});

	test('throws an error if a non-number is provided', () => {
		// Arrange
		const expected = 'n must be a number';

		// Act
		const result = () => {
			sumDigits('123');
		};

		// Assert
		expect(result).toThrow(expected);
	});

	test('returns the number if a negative number is provided', () => {
		// Arrange
		const num = -123;
		const expected = -123;

		// Act
		const result = sumDigits(num);

		// Assert
		expect(result).toBe(expected);
	});
});

describe('createRange', () => {
	test('takes start, end and step parameters and returns an array of numbers', () => {
		// Arrange
		const start = 3;
		const end = 11;
		const step = 2;
		const expected = [3, 5, 7, 9, 11];

		// Act
		const result = createRange(start, end, step);

		// Assert
		expect(result).toEqual(expected);
	});

	test('defaults optional step parameter to 1', () => {
		// Arrange
		const start = 3;
		const end = 11;
		const expected = [3, 4, 5, 6, 7, 8, 9, 10, 11];

		// Act
		const result = createRange(start, end);

		// Assert
		expect(result).toEqual(expected);
	});

	test('throws an error if no start parameter is provided', () => {
		// Arrange
		const start = undefined;
		const end = 11;
		const expected = 'start is required';

		// Act
		const result = () => {
			createRange(start, end);
		};

		// Assert
		expect(result).toThrow(expected);
	});

	test('throws an error if no end parameter is provided', () => {
		// Arrange
		const start = 3;
		const expected = 'end is required';

		// Act
		const result = () => {
			createRange(start);
		};

		// Assert
		expect(result).toThrow(expected);
	});

	test('throws an error if start is greater than end', () => {
		// Arrange
		const start = 11;
		const end = 3;
		const expected = 'start must be less than end';

		// Act
		const result = () => {
			createRange(start, end);
		};

		// Assert
		expect(result).toThrow(expected);
	});
});

describe('getScreentimeAlertList', () => {
	test('returns an array of usernames who have used more than 100 minutes of screentime for a given date', () => {
		// Arrange
		const users = [
			{
				username: 'beth_1234',
				name: 'Beth Smith',
				screenTime: [
					{ date: '2019-05-01', usage: { twitter: 34, instagram: 22, facebook: 40 } },
					{ date: '2019-05-02', usage: { twitter: 56, instagram: 40, facebook: 31 } },
					{ date: '2019-05-03', usage: { twitter: 12, instagram: 15, facebook: 19 } },
					{ date: '2019-05-04', usage: { twitter: 10, instagram: 56, facebook: 61 } },
				],
			},
			{
				username: 'sam_j_1989',
				name: 'Sam Jones',
				screenTime: [
					{ date: '2019-05-04', usage: { twitter: 100, instagram: 60, facebook: 101 } },
					{ date: '2019-06-11', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
					{ date: '2019-06-13', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
					{ date: '2019-06-14', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
				],
			},
		];
		const date = '2019-05-04';
		const expected = ['beth_1234', 'sam_j_1989'];

		// Act
		const result = getScreentimeAlertList(users, date);

		// Assert
		expect(result).toEqual(expected);
	});

	test('returns an empty array if no users have used more than 100 minutes of screentime for a given date', () => {
		// Arrange
		const users = [
			{
				username: 'beth_1234',
				name: 'Beth Smith',
				screenTime: [
					{ date: '2019-05-01', usage: { twitter: 3, instagram: 2, facebook: 4 } },
					{ date: '2019-05-02', usage: { twitter: 5, instagram: 4, facebook: 3 } },
					{ date: '2019-05-03', usage: { twitter: 1, instagram: 1, facebook: 1 } },
					{ date: '2019-05-04', usage: { twitter: 1, instagram: 5, facebook: 6 } },
				],
			},
			{
				username: 'sam_j_1989',
				name: 'Sam Jones',
				screenTime: [
					{ date: '2019-06-11', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 1 } },
					{ date: '2019-06-13', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 1 } },
					{ date: '2019-06-14', usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 3 } },
				],
			},
		];
		const date = '2019-05-04';
		const expected = [];

		// Act
		const result = getScreentimeAlertList(users, date);

		// Assert
		expect(result).toEqual(expected);
	});
});
