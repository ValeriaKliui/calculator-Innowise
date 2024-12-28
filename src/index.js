import { handleEquality } from './handlers/handleEquality';
import { handleOperator } from './handlers/handleOperator';
import { handleClear } from './handlers/handleClear';
import { handleToggleSign } from './handlers/handleToggleSign';
import { handleNumber } from './handlers/handleNumber';

const calculatorActions = document.getElementById('calculator_actions');

const valueInput = document.getElementById('value');

const calculate = function (event) {
	let target = event.target;
	const value = target.getAttribute('data-value');

	if (!value) return;

	const operatorActions = {
		AC: () => handleClear(valueInput),
		'+/-': () => handleToggleSign(valueInput),
		'%': () => handleOperator(valueInput, '%'),
		'÷': () => handleOperator(valueInput, '÷'),
		'.': () => handleOperator(valueInput, '.'),
		'+': () => handleOperator(valueInput, '+'),
		'-': () => handleOperator(valueInput, '-'),
		'×': () => handleOperator(valueInput, '×'),
		'=': () => handleEquality(valueInput),
	};

	if (operatorActions[value]) {
		operatorActions[value]();
	} else handleNumber(valueInput, value);
};

let lastValidValue = '';

const handleChange = (event) => {
	const regexAllowedSymbols = /^[0-9×+\-.%÷]*$/;
	const value = event.target.value;

	if (!regexAllowedSymbols.test(value)) event.target.value = lastValidValue;
	else lastValidValue = value;
};

calculatorActions.addEventListener('click', calculate);
valueInput.addEventListener('input', handleChange);