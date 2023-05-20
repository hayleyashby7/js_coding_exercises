/* 
	👉 These exercises are a great extra challenge to push your JavaScript skills. Go for it!
*/

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
	if (n === undefined) throw new Error('n is required');
	if (typeof n !== 'number') throw new Error('n must be a number');

	//  Either single digit already or negative number which complicates sums beyond scope of this
	if (n < 10) return n;

	return [...n.toString()].reduce((a, b) => parseInt(a) + parseInt(b));
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
	if (start === undefined) throw new Error('start is required');
	if (end === undefined) throw new Error('end is required');
	if (start > end) throw new Error('start must be less than end');

	const range = [];

	for (let i = start; i <= end; i += step) {
		range.push(i);
	}

	return range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
	if (users === undefined) throw new Error('users is required');
	if (date === undefined) throw new Error('date is required');

	const userNames = [];

	users.forEach((user) => {
		const screenTimeOnDay = user.screenTime.find((day) => day.date === date);

		if (screenTimeOnDay) {
			const usageTotal = Object.values(screenTimeOnDay.usage).reduce((a, b) => a + b);
			if (usageTotal > 100) userNames.push(user.username);
		}
	});

	return userNames;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
	if (hexStr === undefined) throw new Error('hexStr is required');

	const hexRegEx = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
	if (!hexRegEx.test(hexStr)) throw new Error('hexStr must be a valid hex colour code');

	// Clean and slice hex to make it easier to work with
	const hex = hexStr.replace('#', '');

	// Need to account for 3 or 6 digit hex codes
	const short = hex.length === 3;

	const hexR = short ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2);
	const hexG = short ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4);
	const hexB = short ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6);

	const R = parseInt(hexR, 16);
	const G = parseInt(hexG, 16);
	const B = parseInt(hexB, 16);

	return `rgb(${R},${G},${B})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
	if (board === undefined) throw new Error('board is required');
	const dimensions = board.length;
	let winner = null;

	// Check rows
	board.forEach((row) => {
		const rowWinner = row.every((cell) => cell === row[0]);
		if (rowWinner) return (winner = row[0]);
	});

	// Check columns
	for (let i = 0; i < dimensions; i++) {
		const column = board.map((row) => row[i]);
		const columnWinner = column.every((cell) => cell === column[0]);
		if (columnWinner) return (winner = column[0]);
	}

	// Check left diagonal
	const leftDiagonal = board.map((row, i) => row[i]);
	const leftDiagonalWinner = leftDiagonal.every((cell) => cell === leftDiagonal[0]);
	if (leftDiagonalWinner) return (winner = leftDiagonal[0]);

	// Check right diagonal
	const rightDiagonal = board.map((row, i) => row[dimensions - 1 - i]);
	const rightDiagonalWinner = rightDiagonal.every((cell) => cell === rightDiagonal[0]);
	if (rightDiagonalWinner) return (winner = rightDiagonal[0]);

	return winner;
};
