/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassConcern
 */
export const ActClassConcernCode = {
  /**
   * concern
   */
  CONC: "CONC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassConcernCode =
  typeof ActClassConcernCode[keyof typeof ActClassConcernCode];
