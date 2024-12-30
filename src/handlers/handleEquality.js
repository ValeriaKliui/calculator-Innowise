import { handleDivision } from './handleDivision';
import { handleMultiply } from './handleMultiply';
import { handleProcent } from './handleProcent';
import { handleSum } from './handleSum';

export const handleEquality = (inputElement) => {
	const inputValue = inputElement.value;

	if (!inputValue) return;

	if (inputValue.includes('×')) handleMultiply(inputElement);
	else if (inputValue.includes('÷')) handleDivision(inputElement);
	else if (inputValue.includes('%')) handleProcent(inputElement);
	else handleSum(inputElement);
};
