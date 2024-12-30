import { calculateDivision, extractNumbers } from '../utils/utils';

export const handleDivision = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);

	inputElement.value = calculateDivision(allNumbers);
};