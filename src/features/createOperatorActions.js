import { CALCULATOR_OPERATORS } from '../constants/calculator';
import { handleClear } from '../handlers/handleClear';
import { handleDigit } from '../handlers/handleDigit';
import { handleEquality } from '../handlers/handleEquality';
import { handleEqualityAndOperator } from '../handlers/handleEqualityAndOperator';
import { handleOperator } from '../handlers/handleOperator';
import { handleToggleSign } from '../handlers/handleToggleSign';

const valueInput = document.getElementById('value');

const createOperatorActions = (valueInput) => {
	const {
		decrement,
		multiply,
		increment,
		division,
		percent,
		toggleSign,
		digit,
		equal,
		clear,
	} = CALCULATOR_OPERATORS;

	return {
		[clear]: () => handleClear(valueInput),
		[equal]: () => handleEquality(valueInput),
		[digit]: () => handleDigit(valueInput),
		[toggleSign]: () => handleToggleSign(valueInput),
		[percent]: () => handleOperator(valueInput, percent),
		[division]: () => handleEqualityAndOperator(valueInput, division),
		[increment]: () => handleEqualityAndOperator(valueInput, increment),
		[decrement]: () => handleEqualityAndOperator(valueInput, decrement),
		[multiply]: () => handleEqualityAndOperator(valueInput, multiply),
	};
};

export const getOperatorActions = () => createOperatorActions(valueInput);
