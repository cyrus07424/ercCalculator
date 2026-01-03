/**
 * ERC (Emergency Radio Code) Calculator
 * Algorithm ported from: https://github.com/Berks/python_erc
 * Original C# implementation: https://github.com/alexeyfadeev/erc-calculator
 */

/**
 * Reverses the bits of a 32-bit integer
 */
function getReverse(x: number): number {
  let reverseSecondPart = 0;

  for (let i = 0; i < 32; i++) {
    let temp = x >>> (31 - i); // Use unsigned right shift
    temp &= 1;
    temp = temp << i;
    reverseSecondPart |= temp;
  }

  return reverseSecondPart;
}

/**
 * Pads a string with leading zeros to reach the specified count
 */
function getFullBinary(str: string, count: number): string {
  while (str.length < count) {
    str = "0" + str;
  }
  return str;
}

/**
 * Calculates the unlock code from a 16-digit ERC code
 * @param inputErc - 16-character hexadecimal ERC code
 * @returns 8-character hexadecimal unlock code
 */
export function calculateERC(inputErc: string): string {
  // Remove spaces and hyphens, convert to uppercase
  const erc = inputErc.replace(/[\s-]/g, "").toUpperCase();

  if (erc.length !== 16) {
    throw new Error("Invalid number of characters. ERC code must be 16 characters.");
  }

  // Validate hex characters
  if (!/^[0-9A-F]{16}$/i.test(erc)) {
    throw new Error("Invalid characters. ERC code must contain only hexadecimal characters (0-9, A-F).");
  }

  // Split the string into two 8-character strings
  const firstPart = erc.substring(0, 8);
  const secondPart = erc.substring(8, 16);

  // Convert hex strings to integers
  const fpInt = parseInt(firstPart, 16);
  const spInt = parseInt(secondPart, 16);

  // Reverse the bits of the second part
  const reverseSecondPart = getReverse(spInt);

  // XOR first part with reversed second part
  const xor = fpInt ^ reverseSecondPart;

  // Subtract the magic number and handle overflow
  // JavaScript uses 32-bit integers for bitwise operations
  const result = (xor - 0xE010A11) >>> 0; // Convert to unsigned 32-bit integer

  // Format as hex and pad to 8 characters
  const hexResult = result.toString(16).toUpperCase();
  return getFullBinary(hexResult, 8);
}
