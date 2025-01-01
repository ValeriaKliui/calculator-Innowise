import { calculateMultiply } from '../utils/math';
import { handleOperation } from './handleOperation';

export const handleMultiply = (inputElement) =>
	handleOperation(inputElement, calculateMultiply);
