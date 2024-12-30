import { calculateDivision } from '../utils/math';
import { extractNumbers } from '../utils/string';

export const handleDivision = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);

	inputElement.value = calculateDivision(allNumbers);
};
