export const extractNumbers = (string) => {
	return string.match(/([+-]?\d*\.?\d+)/g) || [];
};

export const toggleLastSign = (numbers) => {
	if (numbers.length === 0) return '';

	const lastNumber = numbers.pop();
	numbers.push(lastNumber * -1);

	return numbers
		.map((num, index) => {
			const currentNumber = Number(num);
			return currentNumber < 0 || index === 0 ? currentNumber : `+${currentNumber}`;
		})
		.join('');
};

export const appendOperator = (string, operator) => {
	const isNumeric = (str) => typeof str === 'string' && !isNaN(str) && !isNaN(parseFloat(str));

	const endsWithNumber = isNumeric(string.at(-1));

	return endsWithNumber ? string + operator : `${string.slice(0, -1)}${operator}`;
};

export const calculateSum = (number) => number.reduce((acc, curr) => acc + Number(curr), 0);