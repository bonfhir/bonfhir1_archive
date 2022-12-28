/**
 * **Description:**Cancelled, nullified and obsolete .
 * http://terminology.hl7.org/ValueSet/v3-xActStatusPrevious
 */
export const XActStatusPreviousCode = {
  /**
   * cancelled
   */
  cancelled: "cancelled",

  /**
   * nullified
   */
  nullified: "nullified",

  /**
   * obsolete
   */
  obsolete: "obsolete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActStatusPreviousCode =
  typeof XActStatusPreviousCode[keyof typeof XActStatusPreviousCode];
