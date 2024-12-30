import { calculateSum, extractNumbers } from '../utils/utils';

export const handleSum = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);

	inputElement.value = calculateSum(allNumbers);
};