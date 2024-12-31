import { REGEX_SIGNED_NUMBER } from '../../constants/regex';

export const extractNumbers = (string) =>
	string.match(REGEX_SIGNED_NUMBER) || [];
