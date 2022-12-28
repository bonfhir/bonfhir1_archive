/**
 * Ability of the primary source to push updates/alerts
 * http://terminology.hl7.org/ValueSet/verificationresult-can-push-updates
 */
export const Can_push_updatesCode = {
  /**
   * Yes
   */
  yes: "yes",

  /**
   * No
   */
  no: "no",

  /**
   * Undetermined
   */
  undetermined: "undetermined",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Can_push_updatesCode =
  typeof Can_push_updatesCode[keyof typeof Can_push_updatesCode];
