/**
 * Test methods designed to determine a microorganismaTMs susceptibility to being killed by an antibiotic.
 * http://terminology.hl7.org/ValueSet/v3-tst0280
 */
export const Tst0280Code = {
  /**
   * Susceptibility Testing
   */
  "0280": "0280",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Tst0280Code = typeof Tst0280Code[keyof typeof Tst0280Code];
