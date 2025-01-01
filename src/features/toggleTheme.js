import { setTheme } from '../utils/ui';

export const toggleTheme = ({ target }) =>
	setTheme(target.checked ? 'dark' : 'light');
