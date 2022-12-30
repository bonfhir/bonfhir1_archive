/**
 * Rinse
 * http://terminology.hl7.org/ValueSet/v3-Rinse
 */
export const RinseCode = {
  /**
   * Rinse, dental
   */
  DENRINSE: "DENRINSE",

  /**
   * Rinse, oral
   */
  ORRINSE: "ORRINSE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RinseCode = typeof RinseCode[keyof typeof RinseCode];
