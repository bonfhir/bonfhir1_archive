/**
 * A semisolid preparation intended for external application to the skin or mucous membranes.
 * http://terminology.hl7.org/ValueSet/v3-OintmentDrugForm
 */
export const OintmentDrugFormCode = {
  /**
   * Ointment
   */
  OINT: "OINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OintmentDrugFormCode =
  typeof OintmentDrugFormCode[keyof typeof OintmentDrugFormCode];
