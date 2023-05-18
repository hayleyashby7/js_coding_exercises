import { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } from '../src/exercise006.js';

describe('sumMultiples', () => {
	test('returns the sum of any numbers which are a multiple of 3 or 5', () => {
		// Arrange
		const expected = 8;

		// Act
		const result = sumMultiples([1, 3, 5]);

		// Assert
		expect(result).toBe(expected);
	});
});
