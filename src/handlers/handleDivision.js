import { calculateDivision } from '../utils/math';
import { handleOperation } from './handleOperation';

export const handleDivision = (inputElement) =>
	handleOperation(inputElement, calculateDivision);
