import { REGEX_VALID_CALCULATOR_SYMBOLS } from '../constants/regex';
import { replaceWithValidSymbols } from '../utils/string';
import { getOperatorActions } from './createOperatorActions';

let lastValidValue = '';

export const onChangeValue = (event) => {
	const { value } = event.target;

	const replacedWithValidSymbols = replaceWithValidSymbols(value);

	if (REGEX_VALID_CALCULATOR_SYMBOLS.test(replacedWithValidSymbols)) {
		lastValidValue = replacedWithValidSymbols;
		const latestSymbol = replacedWithValidSymbols.at(-1);

		const operatorActions = getOperatorActions();
		const operatorAction = operatorActions[latestSymbol];

		if (operatorAction) {
			operatorAction();
		}
	} else {
		event.target.value = lastValidValue;
	}
};
