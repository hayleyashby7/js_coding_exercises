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

	test('throws an error if str is not defined', () => {
		// Arrange
		const expected = 'str is required';

		// Act
		function result() {
			getComplementaryDNA();
		}

		// Assert
		expect(result).toThrow(expected);
	});
});

describe('isItPrime', () => {
	test('returns true if the number is a prime number', () => {
		// Arrange
		const expected = true;

		// Act
		const result = isItPrime(3);

		// Assert
		expect(result).toBe(expected);
	});

	test('returns false if the number is not a prime number', () => {
		// Arrange
		const expected = false;

		// Act
		const result = isItPrime(6);

		// Assert
		expect(result).toBe(expected);
	});

	test('edge cases where the number is not a prime number', () => {
		// Arrange
		const expected = false;

		// Act
		const result = isItPrime(0);
		const result2 = isItPrime(1);
		const result3 = isItPrime(4);
		const result4 = isItPrime(0.25);
		const result5 = isItPrime(-1);

		// Assert
		expect(result).toBe(expected);
		expect(result2).toBe(expected);
		expect(result3).toBe(expected);
		expect(result4).toBe(expected);
		expect(result5).toBe(expected);
	});

	test('edge cases where the number is a prime number', () => {
		// Arrange
		const expected = true;

		// Act
		const result = isItPrime(2);
		const result2 = isItPrime(3);
		const result3 = isItPrime(5);

		// Assert
		expect(result).toBe(expected);
		expect(result2).toBe(expected);
		expect(result3).toBe(expected);
	});

	test('throws an error if n is not defined', () => {
		// Arrange
		const expected = 'n is required';

		// Act
		function result() {
			isItPrime();
		}

		// Assert
		expect(result).toThrow(expected);
	});
});

describe('createMatrix', () => {
	test(' returns a matrix array of n * n populated with the value of fill', () => {
		// Arrange
		const expected = [
			['foo', 'foo', 'foo'],
			['foo', 'foo', 'foo'],
			['foo', 'foo', 'foo'],
		];

		// Act
		const result = createMatrix(3, 'foo');

		// Assert
		expect(result).toEqual(expected);
	});

	test('throws an error if n is not defined', () => {
		// Arrange
		const expected = 'n is required';

		// Act
		function result() {
			createMatrix();
		}

		// Assert
		expect(result).toThrow(expected);
	});

	test('throws an error if fill is not defined', () => {
		// Arrange
		const expected = 'fill is required';

		// Act
		function result() {
			createMatrix(6);
		}

		// Assert
		expect(result).toThrow(expected);
	});

	test('returns a 1d array if n is 1', () => {
		// Arrange
		const expected = [['foo']];

		// Act
		const result = createMatrix(1, 'foo');

		// Assert
		expect(result).toEqual(expected);
	});

	test('returns a blank array if n is 0', () => {
		// Arrange
		const expected = [];

		// Act
		const result = createMatrix(0, 'foo');

		// Assert
		expect(result).toEqual(expected);
	});

	test('returns a matrix array of n * n with fill being an array', () => {
		// Arrange
		const expected = [
			[
				['fizz', 'buzz'],
				['fizz', 'buzz'],
				['fizz', 'buzz'],
			],
			[
				['fizz', 'buzz'],
				['fizz', 'buzz'],
				['fizz', 'buzz'],
			],
			[
				['fizz', 'buzz'],
				['fizz', 'buzz'],
				['fizz', 'buzz'],
			],
		];

		// Act
		const result = createMatrix(3, ['fizz', 'buzz']);

		// Assert
		expect(result).toEqual(expected);
	});

	test('returns a matrix array of n * n with fill being a number', () => { 
		// Arrange
		const expected = [
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1],
		];

		// Act
		const result = createMatrix(3, 1);

		// Assert
		expect(result).toEqual(expected);
	});
});
