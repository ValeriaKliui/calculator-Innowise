import { calculateMultiply, extractNumbers } from '../utils/utils';

export const handleMultiply = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);

	inputElement.value = calculateMultiply(allNumbers);
};