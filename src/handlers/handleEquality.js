import { CALCULATOR_OPERATORS } from '../constants/calculator';
import { handleDivision } from './handleDivision';
import { handleMultiply } from './handleMultiply';
import { handlePercent } from './handlePercent';
import { handleSum } from './handleSum';

export const handleEquality = (inputElement) => {
	const { value } = inputElement;
	const { percent, multiply, division } = CALCULATOR_OPERATORS;

	if (!value) return;

	if (value.includes(percent)) handlePercent(inputElement);
	else if (value.includes(multiply)) handleMultiply(inputElement);
	else if (value.includes(division)) handleDivision(inputElement);
	else handleSum(inputElement);
};
