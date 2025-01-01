import { calculatePercent, roundNumber } from '../utils/math';

export const handlePercent = (inputElement) => {
	const { value } = inputElement;

	inputElement.value = roundNumber(calculatePercent(value));
};
