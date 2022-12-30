/**
 *
 * http://terminology.hl7.org/ValueSet/v3-ActClassCompositeOrder
 */
export const ActClassCompositeOrderCode = {
  /**
   * supply
   */
  SPLY: "SPLY",

  /**
   * diet
   */
  DIET: "DIET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCompositeOrderCode =
  typeof ActClassCompositeOrderCode[keyof typeof ActClassCompositeOrderCode];
