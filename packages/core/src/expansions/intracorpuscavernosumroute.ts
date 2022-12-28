/**
 * Intracorpus cavernosum
 * http://terminology.hl7.org/ValueSet/v3-IntracorpusCavernosumRoute
 */
export const IntracorpusCavernosumRouteCode = {
  /**
   * Injection, intracorpus cavernosum
   */
  ICORPCAVINJ: "ICORPCAVINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracorpusCavernosumRouteCode =
  typeof IntracorpusCavernosumRouteCode[keyof typeof IntracorpusCavernosumRouteCode];
