/**
 * Intraventricular
 * http://terminology.hl7.org/ValueSet/v3-IntraventricularRoute
 */
export const IntraventricularRouteCode = {
  /**
   * Injection, intraventricular (heart)
   */
  Injectionintraventricularheart: "IVENTINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraventricularRouteCode =
  typeof IntraventricularRouteCode[keyof typeof IntraventricularRouteCode];
