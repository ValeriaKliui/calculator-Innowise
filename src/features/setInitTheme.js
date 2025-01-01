import { setTheme } from '../utils/ui';

export const setInitTheme = () => {
	const initTheme = localStorage.getItem('theme') || 'light';
	const themeToggler = document.querySelector('.theme-toggler__checkbox');

	themeToggler.checked = initTheme === 'dark';
	setTheme(initTheme);
};
