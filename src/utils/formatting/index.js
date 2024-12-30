export const appendOperator = (string, operator) => {
	const endsWithNumber = !isNaN(string.at(-1));

	return endsWithNumber ? string + operator : string.slice(0, -1) + operator;
};
