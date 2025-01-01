import { handleNumber } from '../handlers/handleNumber';
import { getOperatorActions } from './createOperatorActions';

const valueInput = document.getElementById('value');

export const onClickCalculateValue = (event) => {
	const target = event.target;
	const value = target.getAttribute('data-value');

	if (!value) return;

	const operatorActions = getOperatorActions();
	const operatorAction = operatorActions[value];

	if (operatorAction) {
		operatorAction();
	} else {
		handleNumber(valueInput, value);
	}
};
