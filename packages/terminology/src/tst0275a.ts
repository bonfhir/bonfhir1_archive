/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-tst0275a
 */
export const Tst0275aCode = {
  /**
   * Minimum Lethal Concentration (MLC)
   */
  "0275a": "0275a",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Tst0275aCode = typeof Tst0275aCode[keyof typeof Tst0275aCode];
