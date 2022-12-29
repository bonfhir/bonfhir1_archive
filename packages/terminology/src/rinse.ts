/**
 * Rinse
 * http://terminology.hl7.org/ValueSet/v3-Rinse
 */
export const RinseCode = {
  /**
   * Rinse, dental
   */
  Rinsedental: "DENRINSE",

  /**
   * Rinse, oral
   */
  Rinseoral: "ORRINSE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RinseCode = typeof RinseCode[keyof typeof RinseCode];
