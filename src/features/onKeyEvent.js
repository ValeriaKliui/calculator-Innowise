import { REGEX_VALID_CALCULATOR_SYMBOLS } from '../constants/regex';
import { replaceDivisionAndMultiplicationSymbols } from '../utils/string';
import { handleEquality } from '../handlers/handleEquality';

const valueInput = document.getElementById('value');

export const onKeyEvent = (event) => {
	const value = event.key;
	const replacedWithValidSymbols =
		replaceDivisionAndMultiplicationSymbols(value);

	if (
		replacedWithValidSymbols === 'Backspace' ||
		REGEX_VALID_CALCULATOR_SYMBOLS.test(replacedWithValidSymbols)
	) {
		valueInput.focus();
	} else if (replacedWithValidSymbols === 'Enter') {
		handleEquality(valueInput);
	}
};
