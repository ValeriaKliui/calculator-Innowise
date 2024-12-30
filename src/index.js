import './styles/global.scss';
import './styles/calculator.scss';
import './styles/theme-toggler.scss';

import { handleClear } from './handlers/handleClear';
import { handleDigit } from './handlers/handleDigit';
import { handleEquality } from './handlers/handleEquality';
import { handleNumber } from './handlers/handleNumber';
import { handleOperator } from './handlers/handleOperator';
import { handleToggleSign } from './handlers/handleToggleSign';
import { handleInput } from './handlers/handleInput';

const calculatorActions = document.getElementById('calculator_buttons');

const valueInput = document.getElementById('value');

const calculate = function (event) {
	let target = event.target;
	const value = target.getAttribute('data-value');

	if (!value) return;

	const operatorActions = {
		AC: () => handleClear(valueInput),
		'+/-': () => handleToggleSign(valueInput),
		'%': () => handleOperator(valueInput, '%'),
		'÷': () => {
			handleEquality(valueInput);
			handleOperator(valueInput, '÷');
		},
		'.': () => handleDigit(valueInput),
		'+': () => {
			handleEquality(valueInput);
			handleOperator(valueInput, '+');
		},
		'-': () => {
			handleEquality(valueInput);
			handleOperator(valueInput, '-');
		},
		'×': () => {
			handleEquality(valueInput);
			handleOperator(valueInput, '×');
		},
		'=': () => handleEquality(valueInput),
	};

	if (operatorActions[value]) {
		operatorActions[value]();
	} else handleNumber(valueInput, value);
};

calculatorActions.addEventListener('click', calculate);
valueInput.addEventListener('input', handleInput);

var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

input.addEventListener('change', function () {
	if (this.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
});
