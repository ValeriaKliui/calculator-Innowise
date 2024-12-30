import { appendOperator, extractNumbers } from '../utils/utils';

export const handleDigit = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);
	const lastNumber = allNumbers.at(-1);

	if (!lastNumber.includes('.')) inputElement.value = appendOperator(inputElement.value, '.');
};