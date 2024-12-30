export const handleToggleSign = (inputElement) => {
	const regexOnlySum = /^[0-9+\-.]*$/;

	if (!regexOnlySum.test(inputElement.value)) {
		inputElement.value = inputElement.value.startsWith('-')
			? inputElement.value.slice(1)
			: `-${inputElement.value}`;
	} else {
		const allNumbers = extractNumbers(inputElement.value);
		const toggledSignStr = toggleLastSign(allNumbers);

		inputElement.value = toggledSignStr;
	}
};
