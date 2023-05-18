export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');

	const index = nums.indexOf(n);

	// Return null if n is not found or is the last number in the array
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
	// Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
