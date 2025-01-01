import { calculateSum } from '../utils/math';
import { handleOperation } from './handleOperation';

export const handleSum = (inputElement) =>
	handleOperation(inputElement, calculateSum);
