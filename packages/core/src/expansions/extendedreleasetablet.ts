/**
 * A solid dosage form containing a drug which allows at least a reduction in dosing frequency as compared to that drug presented in conventional dosage form.
 * http://terminology.hl7.org/ValueSet/v3-ExtendedReleaseTablet
 */
export const ExtendedReleaseTabletCode = {
  /**
   * Extended Release Tablet
   */
  ERTAB: "ERTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExtendedReleaseTabletCode =
  typeof ExtendedReleaseTabletCode[keyof typeof ExtendedReleaseTabletCode];
