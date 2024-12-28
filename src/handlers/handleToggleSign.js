import { extractNumbers, toggleLastSign } from '../utils/utils';

export const handleToggleSign = (inputElement) => {
	const allNumbers = extractNumbers(inputElement.value);
	const toggledSignStr = toggleLastSign(allNumbers);

	inputElement.value = toggledSignStr;
};