import './styles/global.scss';
import './styles/calculator.scss';
import './styles/theme-toggler.scss';

import { onClickCalculateValue } from './features/onClickCalculateValue';
import { onChangeValue } from './features/onChangeValue';
import { setInitTheme } from './features/setInitTheme';
import { toggleTheme } from './features/toggleTheme';
import { onKeyEvent } from './features/onKeyEvent';

const calculatorActions = document.getElementById('calculator_buttons');
calculatorActions.addEventListener('click', onClickCalculateValue);

const valueInput = document.getElementById('value');
valueInput.addEventListener('input', onChangeValue);

document.addEventListener('DOMContentLoaded', setInitTheme);

const themeToggler = document.getElementById('theme-toggler');
themeToggler.addEventListener('change', toggleTheme);

document.addEventListener('keydown', onKeyEvent);
