import { handleClear } from '../handlers/handleClear';
import { handleDigit } from '../handlers/handleDigit';
import { handleEquality } from '../handlers/handleEquality';
import { handleNumber } from '../handlers/handleNumber';
import { handleOperator } from '../handlers/handleOperator';
import { handleToggleSign } from '../handlers/handleToggleSign';

const valueInput = document.getElementById('value');

function performOperatorAction(operator) {
	handleEquality(valueInput);
	handleOperator(valueInput, operator);
}

const operatorActions = {
	AC: () => handleClear(valueInput),
	'+/-': () => handleToggleSign(valueInput),
	'%': () => handleOperator(valueInput, '%'),
	'÷': () => performOperatorAction('÷'),
	'.': () => handleDigit(valueInput),
	'+': () => performOperatorAction('+'),
	'-': () => performOperatorAction('-'),
	'×': () => performOperatorAction('×'),
	'=': () => handleEquality(valueInput),
};

export const calculateValue = (event) => {
	const target = event.target;
	const value = target.getAttribute('data-value');

	if (!value) return;

	const action = operatorActions[value];
	if (action) {
		action();
	} else {
		handleNumber(valueInput, value);
	}
};
