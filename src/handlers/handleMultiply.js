import { calculateMultiply } from '../utils/math';
import { extractNumbers } from '../utils/string';

export const handleMultiply = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);

	inputElement.value = calculateMultiply(allNumbers);
};
