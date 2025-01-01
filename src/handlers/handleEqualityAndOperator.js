import { handleEquality } from './handleEquality';
import { handleOperator } from './handleOperator';

export const handleEqualityAndOperator = (valueInput, operator) => {
	handleEquality(valueInput);
	handleOperator(valueInput, operator);
};
