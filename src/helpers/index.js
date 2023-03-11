const DEFAULT_MAX_OPERAND_NUMBER = 10;

export function getOperand(maxOperandNumber = DEFAULT_MAX_OPERAND_NUMBER) {
  return Math.ceil(Math.random() * maxOperandNumber);
}
