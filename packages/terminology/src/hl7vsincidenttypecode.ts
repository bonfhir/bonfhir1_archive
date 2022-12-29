/**
 * Value Set of codes specifying a classification of the incident type.
 * http://terminology.hl7.org/ValueSet/v2-0428
 */
export const Hl7VSIncidentTypeCodeCode = {
  /**
   * Preventable
   */
  Preventable: "P",

  /**
   * User Error
   */
  UserError: "U",

  /**
   * Other
   */
  Other: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSIncidentTypeCodeCode =
  typeof Hl7VSIncidentTypeCodeCode[keyof typeof Hl7VSIncidentTypeCodeCode];
