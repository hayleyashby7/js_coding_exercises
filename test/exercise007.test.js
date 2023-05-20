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
});
