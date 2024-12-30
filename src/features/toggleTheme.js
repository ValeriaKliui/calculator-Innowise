import { setTheme } from '../utils/data';

export const toggleTheme = ({ target }) => {
	if (target.checked) {
		setTheme('dark');
	} else {
		setTheme('light');
	}
};
