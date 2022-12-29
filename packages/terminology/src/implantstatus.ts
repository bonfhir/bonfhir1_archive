/**
 * A set codes that define the functional status of an implanted device.
 * http://terminology.hl7.org/ValueSet/implantStatus
 */
export const ImplantStatusCode = {
  /**
   * Functional
   */
  Functional: "functional",

  /**
   * Non-Functional
   */
  NonFunctional: "non-functional",

  /**
   * Disabled
   */
  Disabled: "disabled",

  /**
   * Unknown
   */
  Unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImplantStatusCode =
  typeof ImplantStatusCode[keyof typeof ImplantStatusCode];
