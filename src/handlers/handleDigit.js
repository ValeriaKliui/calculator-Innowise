import { appendOperator } from '../utils/string';
import { extractNumbers } from '../utils/string';

export const handleDigit = (inputElement) => {
	const { value } = inputElement;
	const numbers = extractNumbers(value);
	const lastNumber = numbers.at(-1);
	const endsWithDot = String(lastNumber).includes('.');

	if (!endsWithDot) inputElement.value = appendOperator(value, '.');
};
