import { calculateSum } from '../utils/math';
import { extractNumbers } from '../utils/string';

export const handleSum = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);

	inputElement.value = calculateSum(allNumbers);
};
