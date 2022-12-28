/**
 * Code specifying eligibility indicators used to assess or establish eligibility for coverage under a policy or program eligibility status, e.g., certificates of creditable coverage; student enrollment; adoption, marriage or birth certificate.
 * http://terminology.hl7.org/ValueSet/v3-ObservationEligibilityIndicatorValue
 */
export const ObservationEligibilityIndicatorValueCode = {
  /**
   * eligibility indicator
   */
  ELSTAT: "ELSTAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationEligibilityIndicatorValueCode =
  typeof ObservationEligibilityIndicatorValueCode[keyof typeof ObservationEligibilityIndicatorValueCode];
