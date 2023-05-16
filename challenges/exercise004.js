export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	// Return an array of numbers that are less than 1
	return nums.filter((n) => n < 1);
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	// Return an array of names that begin with the specified character
	return names.filter((n) => n[0] === char);
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
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
