/**
 * Vaginal
 * http://terminology.hl7.org/ValueSet/v3-VaginalRoute
 */
export const VaginalRouteCode = {
  /**
   * Douche, vaginal
   */
  DOUCHE: "DOUCHE",

  /**
   * Insertion, vaginal
   */
  VAGINSI: "VAGINSI",

  /**
   * Topical application, vaginal
   */
  VAGINS: "VAGINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaginalRouteCode =
  typeof VaginalRouteCode[keyof typeof VaginalRouteCode];
