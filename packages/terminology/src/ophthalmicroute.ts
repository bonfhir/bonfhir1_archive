/**
 * Ophthalmic
 * http://terminology.hl7.org/ValueSet/v3-OphthalmicRoute
 */
export const OphthalmicRouteCode = {
  /**
   * Topical application, ophthalmic
   */
  Topicalapplicationophthalmic: "OPTHALTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OphthalmicRouteCode =
  typeof OphthalmicRouteCode[keyof typeof OphthalmicRouteCode];
