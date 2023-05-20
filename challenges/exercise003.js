export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');

	if (nums.length === 0) return [];
	return nums.map((n) => n * n);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');

	let camelCase = '';

	words.forEach((word, index) => {
		if (index === 0) {
			camelCase += word.toLowerCase();
		} else {
			camelCase += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
		}
	});

	return camelCase;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');

	let totalSubjects = 0;

	people.forEach((person) => (totalSubjects += person.subjects.length));

	return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');

	return menu.some((item) => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');

	const duplicates = arr1.filter((n) => arr2.includes(n));

	return [...new Set(duplicates)].sort();
}
