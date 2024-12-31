import './styles/global.scss';
import './styles/calculator.scss';
import './styles/theme-toggler.scss';

import { calculateValue } from './features/calculateValue';
import { changeValue } from './features/changeValue';
import { setInitTheme } from './features/setInitTheme';
import { toggleTheme } from './features/toggleTheme';

const calculatorActions = document.getElementById('calculator_buttons');
calculatorActions.addEventListener('click', calculateValue);

const valueInput = document.getElementById('value');
valueInput.addEventListener('input', changeValue);

document.addEventListener('DOMContentLoaded', setInitTheme);

const themeToggler = document.getElementById('theme-toggler');
themeToggler.addEventListener('change', toggleTheme);

// document.addEventListener('keydown', handleKeyEvent);
