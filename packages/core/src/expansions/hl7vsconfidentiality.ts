/**
 * Value Set of codes specifying the confidentiality for a shipment.
 * http://terminology.hl7.org/ValueSet/v2-0907
 */
export const Hl7VSConfidentialityCode = {
  /**
   * Business - Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.  However, no patient related inf
   */
  B: "B",

  /**
   * Clinician - Only clinicians may see this item, billing and administration persons can not access this item without special permission.
   */
  D: "D",

  /**
   * Individual - Access only to individual persons who are mentioned explicitly as actors of this service and whose actor type warrants that access (cf. to actor typed code).
   */
  I: "I",

  /**
   * Low - No patient record item can be of low confidentiality.  However, some service objects are not patient related and therefore may have low confidentiality.
   */
  L: "L",

  /**
   * Normal - Normal confidentiality rules (according to good health care practice) apply, that is, only authorized individuals with a legitimate medical or business need may access this item.
   */
  N: "N",

  /**
   * Restricted - Restricted access, e.g. only to providers having a current care relationship to the patient.
   */
  R: "R",

  /**
   * Very restricted - Very restricted access as declared by the Privacy Officer of the record holder.
   */
  V: "V",

  /**
   * Substance abuse related - Alcohol/drug-abuse related item
   */
  ETH: "ETH",

  /**
   * HIV Related - HIV and AIDS related item
   */
  HIV: "HIV",

  /**
   * Psychiatry related - Psychiatry related item
   */
  PSY: "PSY",

  /**
   * Sexual and domestic violence related - Sexual assault / domestic violence related item
   */
  SDV: "SDV",

  /**
   * Celebrity - Celebrities are people of public interest (VIP) including employees, whose information require special protection.
   */
  C: "C",

  /**
   * Sensitive - Information for which the patient seeks heightened confidentiality.  Sensitive information is not to be shared with family members.  Information reported by the patient about family members is sensitive by default.  Flag can be set or cleared
   */
  S: "S",

  /**
   * Taboo - Information not to be disclosed or discussed with patient except through physician assigned to patient in this case.  This is usually a temporary constraint only; example use is a new fatal diagnosis or finding, such as malignancy or HIV.
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConfidentialityCode =
  typeof Hl7VSConfidentialityCode[keyof typeof Hl7VSConfidentialityCode];
