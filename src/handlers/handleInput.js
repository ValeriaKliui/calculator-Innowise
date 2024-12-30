import { extractNumbers } from '../utils/utils';

let lastValidValue = '';

export const handleInput = (event) => {
	const regexAllowedSymbols = /^[0-9×+\-.%÷]*$/;
	const value = event.target.value;

	const freezeInputValue =
		!regexAllowedSymbols.test(value) ||
		extractNumbers(event.target.value).filter((number) => number.startsWith('.')).length !== 0;

	if (freezeInputValue) event.target.value = lastValidValue;
	else lastValidValue = value;
};