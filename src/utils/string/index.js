import {
	REGEX_MULTIPLICATION_DIVISION_PERCENTS,
	REGEX_SIGNED_NUMBER,
} from '../../constants/regex';
import { getPercentOf } from '../math';

export const extractNumbers = (string = '') => {
	const matches = string.match(REGEX_SIGNED_NUMBER);
	return matches ? matches.map(Number) : [];
};

export const trimOperator = (string = '') => string.slice(0, -1);

export const replacePercentage = (expression) => {
	if (expression.includes('%')) {
		const number = Number(trimOperator(expression));
		return getPercentOf(number);
	}
	return expression;
};

export const replacePercentages = (valueString = '') => {
	const numbersWithPercents = valueString.match(
		REGEX_MULTIPLICATION_DIVISION_PERCENTS,
	);
	if (!numbersWithPercents) return valueString;

	return numbersWithPercents.map(replacePercentage).join('');
};

export const appendOperator = (string, operator) => {
	const endsWithNumber = !isNaN(string.at(-1));

	return endsWithNumber ? string + operator : trimOperator(string) + operator;
};

export const toggleSignOfOperation = (operation = '') =>
	operation.startsWith('-') ? operation.slice(1) : `-${operation}`;

export const toggleLastSign = (numbers) => {
	if (!numbers.length) return '';

	const lastNumber = numbers.pop();
	numbers.push(lastNumber * -1);

	return numbers
		.map((num, index) => (num < 0 || index === 0 ? num : `+${num}`))
		.join('');
};
