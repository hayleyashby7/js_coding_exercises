export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	// Return an array of numbers that are less than 1
	return nums.filter((n) => n < 1);
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	// Return an array of names that begin with the specified character
	return names.filter((name) => name.startsWith(char));
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	// Return an array of verbs (begin with 'to ')
	return words.filter((word) => word.startsWith('to '));
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	// Return an array of integers
	return nums.filter((n) => Number.isInteger(n));
}

export function getCities(users) {
	if (!users) throw new Error('users is required');

	// Return an array of user cities
	return users.map((user) => user.data.city.displayName);
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
