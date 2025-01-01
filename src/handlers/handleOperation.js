import { roundNumber } from '../utils/math';
import { extractNumbers } from '../utils/string';

export const handleOperation = (inputElement, operationFunc) => {
	const { value } = inputElement;
	const numbers = extractNumbers(value);

	inputElement.value = roundNumber(operationFunc(numbers));
};
