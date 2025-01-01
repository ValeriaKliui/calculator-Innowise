import { REGEX_NUMBERS } from '../constants/regex';
import { getOperatorActions } from '../features/createOperatorActions';
import { replaceWithValidSymbols } from '../utils/string';
import { handleEquality } from './handleEquality';
import { handleNumber } from './handleNumber';

const valueInput = document.getElementById('value');

export const handleKeyEvent = (event) => {
	const value = event.key;
	const replacedWithValidSymbols = replaceWithValidSymbols(value);

	if (replacedWithValidSymbols === 'Enter') {
		handleEquality(valueInput);
	} else if (REGEX_NUMBERS.test(value)) {
		handleNumber(valueInput, replacedWithValidSymbols);
	} else {
		const operatorActions = getOperatorActions();
		const operatorAction = operatorActions[replacedWithValidSymbols];

		if (operatorAction) {
			operatorAction();
		}
	}
};
