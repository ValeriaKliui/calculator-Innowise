export const handleSymbolDelete = (inputElement) => {
	const { value } = inputElement;

	inputElement.value = value.slice(0, -1);
};
