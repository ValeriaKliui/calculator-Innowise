import { REGEX_NUMERIC_WITH_SIGN_AND_DECIMAL } from '../constants/regex';
import {
	extractNumbers,
	toggleLastSign,
	toggleSignOfOperation,
} from '../utils/string';

export const handleToggleSign = (inputElement) => {
	const { value } = inputElement;

	const isNumeric = REGEX_NUMERIC_WITH_SIGN_AND_DECIMAL.test(value);

	if (isNumeric) {
		inputElement.value = toggleLastSign(extractNumbers(value));
	} else {
		inputElement.value = toggleSignOfOperation(value);
	}
};
