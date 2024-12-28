import { appendOperator } from '../utils/utils';

export const handleOperator = (inputElement, operator) =>
	(inputElement.value = appendOperator(inputElement.value, operator));