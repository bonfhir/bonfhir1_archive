/**
 * Insertion
 * http://terminology.hl7.org/ValueSet/v3-Insertion
 */
export const InsertionCode = {
  /**
   * Insertion, cervical (uterine)
   */
  Insertioncervicaluterine: "CERVINS",

  /**
   * Insertion, intraocular, surgical
   */
  Insertionintraocularsurgical: "IOSURGINS",

  /**
   * Insertion, intrauterine
   */
  Insertionintrauterine: "IU",

  /**
   * Insertion, lacrimal puncta
   */
  Insertionlacrimalpuncta: "LPINS",

  /**
   * Insertion, rectal
   */
  Insertionrectal: "PR",

  /**
   * Insertion, subcutaneous, surgical
   */
  Insertionsubcutaneoussurgical: "SQSURGINS",

  /**
   * Insertion, urethral
   */
  Insertionurethral: "URETHINS",

  /**
   * Insertion, vaginal
   */
  Insertionvaginal: "VAGINSI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InsertionCode = typeof InsertionCode[keyof typeof InsertionCode];
