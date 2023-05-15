export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');

	if (person.city === 'Manchester') {
		return true;
	} else return false;
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');

	// Max 40 people per bus so want to round up
	return Math.ceil(people / 40);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	let numSheep = 0;

	// Iterate through array and count number of sheep
	arr.forEach((element) => {
		if (element === 'sheep') numSheep++;
	});

	return numSheep;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}
