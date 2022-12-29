/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActStatusActiveComplete
 */
export const XActStatusActiveCompleteCode = {
  /**
   * active
   */
  active: "active",

  /**
   * completed
   */
  completed: "completed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActStatusActiveCompleteCode =
  typeof XActStatusActiveCompleteCode[keyof typeof XActStatusActiveCompleteCode];
