/**
 * Value Set of codes that define the action taken as a result of an event related to a product issue.
 * http://terminology.hl7.org/ValueSet/v2-0251
 */
export const Hl7VSActionTakenInResponseToTheEventCode = {
  /**
   * Product withdrawn permanently
   */
  Productwithdrawnpermanently: "WP",

  /**
   * Product withdrawn temporarily
   */
  Productwithdrawntemporarily: "WT",

  /**
   * Product dose or frequency of use reduced
   */
  Productdoseorfrequencyofusereduced: "DR",

  /**
   * Product dose or frequency of use increased
   */
  Productdoseorfrequencyofuseincreased: "DI",

  /**
   * Other
   */
  Other: "OT",

  /**
   * None
   */
  None: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSActionTakenInResponseToTheEventCode =
  typeof Hl7VSActionTakenInResponseToTheEventCode[keyof typeof Hl7VSActionTakenInResponseToTheEventCode];
