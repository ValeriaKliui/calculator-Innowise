import { CALCULATOR_OPERATORS } from '../constants/calculator';
import { appendOperator } from '../utils/string';
import { extractNumbers } from '../utils/string';

export const handleDigit = (inputElement) => {
	const { value } = inputElement;
	const lastNumber = extractNumbers(value).at(-1);
	const { digit } = CALCULATOR_OPERATORS;

	const endsWithDot = String(lastNumber).includes(digit);

	if (!endsWithDot) inputElement.value = appendOperator(value, digit);
};
