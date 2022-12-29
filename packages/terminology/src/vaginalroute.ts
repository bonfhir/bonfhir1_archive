/**
 * Vaginal
 * http://terminology.hl7.org/ValueSet/v3-VaginalRoute
 */
export const VaginalRouteCode = {
  /**
   * Douche, vaginal
   */
  Douchevaginal: "DOUCHE",

  /**
   * Insertion, vaginal
   */
  Insertionvaginal: "VAGINSI",

  /**
   * Topical application, vaginal
   */
  Topicalapplicationvaginal: "VAGINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaginalRouteCode =
  typeof VaginalRouteCode[keyof typeof VaginalRouteCode];
