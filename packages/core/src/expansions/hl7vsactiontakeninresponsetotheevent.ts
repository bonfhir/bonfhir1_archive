/**
 * Value Set of codes that define the action taken as a result of an event related to a product issue.
 * http://terminology.hl7.org/ValueSet/v2-0251
 */
export const Hl7VSActionTakenInResponseToTheEventCode = {
  /**
   * Product withdrawn permanently
   */
  WP: "WP",

  /**
   * Product withdrawn temporarily
   */
  WT: "WT",

  /**
   * Product dose or frequency of use reduced
   */
  DR: "DR",

  /**
   * Product dose or frequency of use increased
   */
  DI: "DI",

  /**
   * Other
   */
  OT: "OT",

  /**
   * None
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSActionTakenInResponseToTheEventCode =
  typeof Hl7VSActionTakenInResponseToTheEventCode[keyof typeof Hl7VSActionTakenInResponseToTheEventCode];
