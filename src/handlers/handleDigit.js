import { appendOperator } from '../utils/string';
import { extractNumbers } from '../utils/string';

export const handleDigit = (inputElement) => {
	const { value } = inputElement;
	const lastNumber = extractNumbers(value).at(-1);
	const endsWithDot = String(lastNumber).includes('.');

	if (!endsWithDot) inputElement.value = appendOperator(value, '.');
};
