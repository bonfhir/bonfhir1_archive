/**
 * The verification status to support or decline the clinical status of the allergy or intolerance.
 * http://terminology.hl7.org/ValueSet/allergyintolerance-verification
 */
export const AllergyIntoleranceVerificationStatusCode = {
  /**
   * Unconfirmed
   */
  Unconfirmed: "unconfirmed",

  /**
   * Presumed
   */
  Presumed: "presumed",

  /**
   * Confirmed
   */
  Confirmed: "confirmed",

  /**
   * Refuted
   */
  Refuted: "refuted",

  /**
   * Entered in Error
   */
  EnteredinError: "entered-in-error",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceVerificationStatusCode =
  typeof AllergyIntoleranceVerificationStatusCode[keyof typeof AllergyIntoleranceVerificationStatusCode];
