export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');

	const index = nums.indexOf(n);

	if (index === -1 || index === nums.length - 1) return null;
	else return nums[index + 1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');

	const totalCounts = {
		1: 0,
		0: 0,
	};

	[...str].forEach((char) => (totalCounts[char] += 1));

	return totalCounts;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');

	return parseInt(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');

	return arrs.flat().reduce((totalSum, n) => totalSum + n, 0);
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	if (arr.length >= 2) [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');

	const haystackValues = Object.values(haystack);

	return haystackValues.some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()));
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');

	// Clean up string first so easier to work with
	const cleanString = str
		.replace(/[^a-zA-Z ]/g, '')
		.toLowerCase()
		.split(' ');

	const wordFrequencies = {};

	cleanString.forEach((word) => {
		if (wordFrequencies[word]) wordFrequencies[word] += 1;
		else wordFrequencies[word] = 1;
	});

	return wordFrequencies;
};
