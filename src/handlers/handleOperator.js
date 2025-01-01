import { appendOperator } from '../utils/string';

export const handleOperator = (inputElement, operator) => {
	const { value } = inputElement;

	inputElement.value = appendOperator(value, operator);
};
