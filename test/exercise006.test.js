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

	test('throws an error if arr is not defined', () => {
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

	test('returns true if the string contains C, G, T or A in any order', () => {
		// Arrange
		const expected = true;

		// Act
		const alphabetical = isValidDNA('ACGT');
		const reverseAlphabetical = isValidDNA('TGCA');
		const random = isValidDNA('GATC');

		// Assert
		expect(alphabetical).toBe(expected);
		expect(reverseAlphabetical).toBe(expected);
		expect(random).toBe(expected);
	});

	test('returns true if the string contains C, G, T or A multiple times', () => {
		// Arrange
		const expected = true;

		// Act
		const result = isValidDNA('CGTACGTAGATCCGTACGTTGCAACGT');

		// Assert
		expect(result).toBe(expected);
	});

	test('returns false if the string contains any other characters', () => {
		// Arrange
		const expected = false;

		// Act
		const result = isValidDNA('CGTACGTAGATCCABCDEFGHIJKLMNOPQRSTUVWXYZGTACGTTGCAACGT');

		// Assert
		expect(result).toBe(expected);
	});

	test('returns true if the string contains C, G, T or A in lower case', () => {
		// Arrange
		const expected = true;

		// Act
		const result = isValidDNA('cgat');

		// Assert
		expect(result).toBe(expected);
	});

	test('throws an error if string is not defined', () => {
		// Arrange
		const expected = 'str is required';

		// Act
		function result() {
			isValidDNA();
		}

		// Assert
		expect(result).toThrow(expected);
	});
});

describe('getComplementaryDNA', () => {
	test('returns the complementary base pairs', () => {
		// Arrange
		const expected = 'invalid DNA string';

		// Act
		function result() {
			getComplementaryDNA('oops!');
		}

		// Assert
		expect(result).toThrow(expected);
	});

	test('throws error if the provided string is not valid', () => {
		// Arrange
		const expected = 'TGAC';

		// Act
		const result = getComplementaryDNA('ACTG');

		// Assert
		expect(result).toBe(expected);
	});

	test('returns the complementary base pairs for single character DNA string', () => {
		// Arrange
		const expected = 'A';

		// Act
		const result = getComplementaryDNA('T');

		// Assert
		expect(result).toBe(expected);
	});

	test('returns the complementary base pairs for very long DNA string', () => {
		// Arrange
		const expected = 'ATTAGTGCGCGCGTATTTAATCACGCGCGCATAATAATCACGCGCGCATAAATTAGTGCGCGCGTATT';

		// Act
		const result = getComplementaryDNA('TAATCACGCGCGCATAAATTAGTGCGCGCGTATTATTAGTGCGCGCGTATTTAATCACGCGCGCATAA');

		// Assert
		expect(result).toBe(expected);
	});

	test('returns the complementary base pairs for DNA string with lower case characters', () => {
		// Arrange
		const expected = 'ATTAGTGCGCGCGTATTTAATCACGCGCGCATAATAATCACGCGCGCATAAATTAGTGCGCGCGTATT';

		// Act
		const result = getComplementaryDNA('taatcacgcgcgcataaattagtgcgcgcgtattattagtgcgcgcgtatttaatcacgcgcgcataa');

		// Assert
		expect(result).toBe(expected);


	});
});
