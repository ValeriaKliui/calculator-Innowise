import { appendOperator } from '../utils/formatting';

export const handleOperator = (inputElement, operator) => {
	console.log('handleOperator', inputElement.value, operator);
	inputElement.value = appendOperator(inputElement.value, operator);
};
