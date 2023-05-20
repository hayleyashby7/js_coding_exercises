import { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } from '../challenges/exercise006';

describe('sumMultiples', () => {
	test('returns the sum of any numbers which are a multiple of 3 or 5', () => {
		// Arrange
		const expected = 8;

		// Act
		const result = sumMultiples([1, 3, 5]);

		// Assert
		expect(result).toBe(expected);
	});

	test('returns 0 if no numbers are a multiple of 3 or 5', () => {
		// Arrange
		const expected = 0;

		// Act
		const result = sumMultiples([1, 2, 4]);

		// Assert
		expect(result).toBe(expected);
	});

	test('returns 0 if the array is empty', () => {
		// Arrange
		const expected = 0;

		// Act
		const result = sumMultiples([]);

		// Assert
		expect(result).toBe(expected);
	});

	test('throws an error if arr is not undefined', () => {
		// Arrange
		const expected = 'arr is required';

		// Act
		function result() {
			sumMultiples();
		}

		// Assert
		expect(result).toThrow(expected);
	});
});

describe('isValidDNA', () => {
	test('returns true if the string contains C, G, T or A only', () => {
		// Arrange
		const expected = true;

		// Act
		const result = isValidDNA('CGTA');

		// Assert
		expect(result).toBe(expected);
	});
});
