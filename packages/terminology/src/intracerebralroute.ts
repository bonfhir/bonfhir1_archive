/**
 * Intracerebral
 * http://terminology.hl7.org/ValueSet/v3-IntracerebralRoute
 */
export const IntracerebralRouteCode = {
  /**
   * Injection, intracerebral
   */
  ICEREBINJ: "ICEREBINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracerebralRouteCode =
  typeof IntracerebralRouteCode[keyof typeof IntracerebralRouteCode];
