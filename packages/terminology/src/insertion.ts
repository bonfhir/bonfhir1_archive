/**
 * Insertion
 * http://terminology.hl7.org/ValueSet/v3-Insertion
 */
export const InsertionCode = {
  /**
   * Insertion, cervical (uterine)
   */
  CERVINS: "CERVINS",

  /**
   * Insertion, intraocular, surgical
   */
  IOSURGINS: "IOSURGINS",

  /**
   * Insertion, intrauterine
   */
  IU: "IU",

  /**
   * Insertion, lacrimal puncta
   */
  LPINS: "LPINS",

  /**
   * Insertion, rectal
   */
  PR: "PR",

  /**
   * Insertion, subcutaneous, surgical
   */
  SQSURGINS: "SQSURGINS",

  /**
   * Insertion, urethral
   */
  URETHINS: "URETHINS",

  /**
   * Insertion, vaginal
   */
  VAGINSI: "VAGINSI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InsertionCode = typeof InsertionCode[keyof typeof InsertionCode];
