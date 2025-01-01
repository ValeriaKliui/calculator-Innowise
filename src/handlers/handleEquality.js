import { handleDivision } from './handleDivision';
import { handleMultiply } from './handleMultiply';
import { handlePercent } from './handlePercent';
import { handleSum } from './handleSum';

export const handleEquality = (inputElement) => {
	const { value } = inputElement;

	if (!value) return;

	if (value.includes('%')) handlePercent(inputElement);
	else if (value.includes('×')) handleMultiply(inputElement);
	else if (value.includes('÷')) handleDivision(inputElement);
	else handleSum(inputElement);
};
