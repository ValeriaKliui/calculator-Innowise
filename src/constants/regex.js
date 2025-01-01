export const REGEX_VALID_CALCULATOR_SYMBOLS = /^[0-9×+\-.%÷=]*$/;

export const REGEX_NUMERIC_WITH_SIGN_AND_DECIMAL = /^[0-9+\-.]*$/;

export const REGEX_SIGNED_NUMBER = /([+-]?\d*\.?\d+)/g;

export const REGEX_NUMBERS_WITH_OPERATORS = /(\d*\.?\d+)|([+-])|(\d+)%/g;

export const REGEX_NUMBERS = /^\d+$/;

export const REGEX_MULTIPLICATION_DIVISION_PERCENTS =
	/([+-]?\d*\.?\d+%?|[×÷])/g;
