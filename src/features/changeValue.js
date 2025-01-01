import { REGEX_VALID_CALCULATOR_SYMBOLS } from '../constants/regex';

let lastValidValue = '';

export const changeValue = (event) => {
	const { value } = event.target;

	const isValid = REGEX_VALID_CALCULATOR_SYMBOLS.test(value);

	if (isValid) lastValidValue = value;
	else event.target.value = lastValidValue;
};
