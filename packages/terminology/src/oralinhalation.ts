/**
 * Inhalation, oral
 * http://terminology.hl7.org/ValueSet/v3-OralInhalation
 */
export const OralInhalationCode = {
  /**
   * Inhalation, respiratory
   */
  ORINHL: "ORINHL",

  /**
   * Inhalation, oral intermittent flow
   */
  ORIFINHL: "ORIFINHL",

  /**
   * Inhalation, oral rebreather mask
   */
  REBREATH: "REBREATH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralInhalationCode =
  typeof OralInhalationCode[keyof typeof OralInhalationCode];
