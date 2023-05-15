export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');

	// No numbers to square - return empty array
	if (nums.length === 0) return [];

	// Square each number in array and return resulting array
	return nums.map((n) => n * n);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');

	// For each word in array, format appropriately and add to camelCase string
	let camelCase = '';

	words.forEach((word, index) => {
		if (index === 0) {
			// First word should be lowercase
			camelCase += word.toLowerCase();
		} else {
			// Remaining words are capitalised first letter and rest as lowercase
			camelCase += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
		}
	});

	return camelCase;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');

	let totalSubjects = 0;

	// Count the number of subjects for each person and add to total
	people.forEach((person) => (totalSubjects += person.subjects.length));

	return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
}
