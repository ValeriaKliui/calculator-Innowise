import { calculatePercent } from '../utils/math';

export const handlePercent = (inputElement) => {
	const { value } = inputElement;

	inputElement.value = calculatePercent(value);
};
