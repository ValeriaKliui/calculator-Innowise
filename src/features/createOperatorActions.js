import { handleClear } from '../handlers/handleClear';
import { handleDigit } from '../handlers/handleDigit';
import { handleEquality } from '../handlers/handleEquality';
import { handleEqualityAndOperator } from '../handlers/handleEqualityAndOperator';
import { handleOperator } from '../handlers/handleOperator';
import { handleToggleSign } from '../handlers/handleToggleSign';

const valueInput = document.getElementById('value');

const createOperatorActions = (valueInput) => ({
	AC: () => handleClear(valueInput),
	'=': () => handleEquality(valueInput),
	'.': () => handleDigit(valueInput),
	'+/-': () => handleToggleSign(valueInput),
	'%': () => handleOperator(valueInput, '%'),
	'÷': () => handleEqualityAndOperator(valueInput, '÷'),
	'+': () => handleEqualityAndOperator(valueInput, '+'),
	'-': () => handleEqualityAndOperator(valueInput, '-'),
	'×': () => handleEqualityAndOperator(valueInput, '×'),
});

export const getOperatorActions = () => createOperatorActions(valueInput);
