import {
	CALCULATOR_OPERATORS,
	ROUNDING_DIGIT,
} from '../../constants/calculator';
import { REGEX_NUMBERS_WITH_OPERATORS } from '../../constants/regex';
import { extractNumbers, replacePercentages } from '../string';

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
	const { multiply, division } = CALCULATOR_OPERATORS;
	const [firstNumber, ...remainingNumbers] = extractNumbers(valueString);

	if (remainingNumbers.length === 0) return getPercentOf(firstNumber);

	if (valueString.includes(multiply))
		return processOperation(valueString, calculateMultiply);
	if (valueString.includes(division))
		return processOperation(valueString, calculateDivision);

	return calculatePercentAdditionOrSubtraction(valueString);
};

export const roundNumber = (number, digit = ROUNDING_DIGIT) => {
	const roundedNumber = number.toFixed(digit);

	return parseFloat(roundedNumber);
};
