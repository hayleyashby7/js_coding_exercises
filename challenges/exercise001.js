// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	const firstChar = word.slice(0, 1).toUpperCase();
	const remainingString = word.slice(1);
	return firstChar + remainingString;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	const firstInitial = firstName.slice(0, 1).toUpperCase();
	const lastInitial = lastName.slice(0, 1).toUpperCase();
	return firstInitial + '.' + lastInitial;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined) throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');

	const VAT = (originalPrice / 100) * vatRate;

	// Round to 2 decimal places as currency
	return Math.round((originalPrice + VAT) * 100) / 100;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined) throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');

	const reductionAmount = (originalPrice / 100) * reduction;

	// Round to 2 decimal places as currency
	return Math.round((originalPrice - reductionAmount) * 100) / 100;
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');

	// Get middle character
	const middleChar = str.length / 2;

	if (str.length % 2 !== 0) {
		return str.charAt(middleChar);
	} else {
		return str.charAt(middleChar - 1) + str.charAt(middleChar);
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');

	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');

	return words.map((word) => reverseWord(word));
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');

	let linuxUsers = 0;

	users.forEach((user) => {
		if (user.type === 'Linux') linuxUsers++;
	});

	return linuxUsers;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');

	const mean = scores.reduce((a, b) => a + b, 0) / scores.length;

	return Math.round(mean * 100) / 100;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');

	switch (true) {
		case n % 3 === 0 && n % 5 === 0:
			return 'fizzbuzz';
		case n % 3 === 0:
			return 'fizz';
		case n % 5 === 0:
			return 'buzz';
		default:
			return n;
	}
}
