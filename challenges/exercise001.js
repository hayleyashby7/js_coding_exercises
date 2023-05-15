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

	// Calculate VAT
	const VAT = (originalPrice / 100) * vatRate;

	// Round to 2 decimal places if required
	return Math.round((originalPrice + VAT) * 100) / 100;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined) throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');

	// Calculate reduction
	const reductionAmount = (originalPrice / 100) * reduction;

	// Round to 2 decimal places if required
	return Math.round((originalPrice - reductionAmount) * 100) / 100;
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');

	// Get middle character
	const middleChar = str.length / 2;

	// Check has odd or even number of characters
	if (str.length % 2 !== 0) {
		// Odd, return middle character
		return str.charAt(middleChar);
	} else {
		// Even, return middle 2 characters
		return str.charAt(middleChar - 1) + str.charAt(middleChar);
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');

	// Split the string into an array
	const splitString = word.split('');

	// Reverse the array
	const reverseArray = splitString.reverse();

	// Return the reversed array as a string
	return reverseArray.join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Iterate through array and reverse each word
	return words.map((word) => reverseWord(word));
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');

	let linuxUsers = 0;

	// Loop through users array and count Linux users
	users.forEach((user) => {
		if (user.type === 'Linux') linuxUsers++;
	});

	return linuxUsers;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
}
