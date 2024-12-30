import { appendOperator } from '../utils/formatting';

export const handleOperator = (inputElement, operator) =>
	(inputElement.value = appendOperator(inputElement.value, operator));
