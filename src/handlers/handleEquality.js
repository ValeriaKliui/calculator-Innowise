
import { calculateSum, extractNumbers } from '../utils/utils';

export const handleEquality = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);

	inputElement.value = calculateSum(allNumbers);
};
