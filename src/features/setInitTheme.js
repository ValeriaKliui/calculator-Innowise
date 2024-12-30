import { setTheme } from '../utils/data';

export const setInitTheme = () => {
	const themeToggler = document.querySelector('.theme-toggler__checkbox');
	const initTheme = localStorage.getItem('theme');

	themeToggler.checked = initTheme === 'dark';
	setTheme(initTheme);
};
