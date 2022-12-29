/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 * http://terminology.hl7.org/ValueSet/message-reason-encounter
 */
export const ExampleMessageReasonCodesCode = {
  /**
   * Admit
   */
  Admit: "admit",

  /**
   * Discharge
   */
  Discharge: "discharge",

  /**
   * Absent
   */
  Absent: "absent",

  /**
   * Returned
   */
  Returned: "return",

  /**
   * Moved
   */
  Moved: "moved",

  /**
   * Edit
   */
  Edit: "edit",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleMessageReasonCodesCode =
  typeof ExampleMessageReasonCodesCode[keyof typeof ExampleMessageReasonCodesCode];
