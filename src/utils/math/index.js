export const calculateSum = (numbers) =>
	numbers.reduce((acc, curr) => acc + Number(curr), 0);

export const calculateMultiply = (numbers) =>
	numbers.reduce((acc, curr) => acc * Number(curr), 1);

export const calculateDivision = ([n1, n2]) => {
	const dividend = Number(n1);
	const divisor = Number(n2);

	if (!divisor) return dividend;

	return divisor === 0 ? Infinity : dividend / divisor;
};

export const toggleLastSign = (numbers) => {
	if (!numbers.length) return '';

	const lastNumber = numbers.pop();
	numbers.push(lastNumber * -1);

	return numbers
		.map((num, index) => (Number(num) < 0 || index === 0 ? num : `+${num}`))
		.join('');
};

export const toggleSignOfOperation = (operation) =>
	operation.startsWith('-') ? operation.slice(1) : `-${operation}`;
