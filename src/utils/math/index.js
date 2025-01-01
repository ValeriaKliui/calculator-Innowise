// function round(num) {
// 	const integerPart = num | 0; // Get the integer part (truncation)
// 	const decimalPart = num - integerPart; // Get the fractional part

import { REGEX_NUMBERS_WITH_OPERATORS } from '../../constants/regex';
import { extractNumbers, replacePercentages } from '../string';

// 	// If the decimal part is 0.5 or more, round up
// 	return decimalPart >= 0.5 ? integerPart + 1 : integerPart;
// }

// export const calculateSum = (numbers) => {
// 	const precision = numbers.reduce((maxDigit, currNumber) => {
// 		let currDigit = String(currNumber).includes('.')
// 			? String(currNumber).split('.')[1].length
// 			: 0;

// 		return currDigit > maxDigit ? currDigit : maxDigit;
// 	}, 0);

// 	let scale = 10 ** precision;
// 	console.log(scale);

// 	return round(numbers.reduce((acc, curr) => acc + curr, 0) * scale) / scale;
// };

export const calculateSum = (numbers) =>
	numbers.reduce((acc, curr) => acc + curr, 0);

export const calculateMultiply = (numbers) =>
	numbers.reduce((acc, curr) => acc * curr, 1);

export const calculateDivision = ([dividend, divisor]) => {
	if (divisor === 0) return Infinity;
	if (!dividend) return 0;

	return divisor ? dividend / divisor : dividend;
};

export const getPercentOf = (percent, total = 1) => (percent / 100) * total;

export const calculatePercentAdditionOrSubtraction = (valueString) => {
	const [number, operator, percentValue] = valueString.match(
		REGEX_NUMBERS_WITH_OPERATORS,
	);

	const percentageOfNumber = getPercentOf(percentValue, number);
	const calculatedPercentString = `${number}${operator}${percentageOfNumber}`;

	return calculateSum(extractNumbers(calculatedPercentString));
};

export const processOperation = (valueString, operationFunc) => {
	const processedString = replacePercentages(valueString);

	return operationFunc(extractNumbers(processedString));
};

export const calculatePercent = (valueString) => {
	const [firstNumber, ...remainingNumbers] = extractNumbers(valueString);

	if (remainingNumbers.length === 0) return getPercentOf(firstNumber);

	if (valueString.includes('×'))
		return processOperation(valueString, calculateMultiply);
	if (valueString.includes('÷'))
		return processOperation(valueString, calculateDivision);

	return calculatePercentAdditionOrSubtraction(valueString);
};
