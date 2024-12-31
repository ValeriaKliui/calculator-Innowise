import { appendOperator } from '../utils/formatting';
import { extractNumbers } from '../utils/string';

export const handleDigit = (inputElement) => {
	const numbers = extractNumbers(inputElement.value);
	const lastNumber = numbers.at(-1);

	if (!lastNumber.includes('.'))
		inputElement.value = appendOperator(inputElement.value, '.');
};
