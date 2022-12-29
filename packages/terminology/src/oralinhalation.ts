/**
 * Inhalation, oral
 * http://terminology.hl7.org/ValueSet/v3-OralInhalation
 */
export const OralInhalationCode = {
  /**
   * Inhalation, respiratory
   */
  Inhalationrespiratory: "ORINHL",

  /**
   * Inhalation, oral intermittent flow
   */
  Inhalationoralintermittentflow: "ORIFINHL",

  /**
   * Inhalation, oral rebreather mask
   */
  Inhalationoralrebreathermask: "REBREATH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralInhalationCode =
  typeof OralInhalationCode[keyof typeof OralInhalationCode];
