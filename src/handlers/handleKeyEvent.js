// import { REGEX_NUMBERS } from '../constants/regex';
// import { handleEquality } from '../handlers/handleEquality';
// import { handleOperator } from '../handlers/handleOperator';

// const valueInput = document.getElementById('value');

// function performOperatorAction(operator) {
// 	handleEquality(valueInput);
// 	handleOperator(valueInput, operator);
// }

// export const handleKeyEvent = (event) => {
// 	console.log(event.key);
// 	if (event.key === 'Enter') {
// 		handleEquality(valueInput);
// 	} else if (REGEX_NUMBERS.test(event.key)) {
// 		valueInput.value += event.key;
// 	} else if (['+', '-', '*', '_', '/'].includes(event.key)) {
// 		console.log('j');
// 		// valueInput.value += event.key;
// 		performOperatorAction('+');
// 	}
// };
