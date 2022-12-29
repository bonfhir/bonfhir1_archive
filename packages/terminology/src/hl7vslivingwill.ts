/**
 * Value Set of codes that specify whether or not the patient has a living will and, if so, whether a copy fo the living will is on file at the healthcare facility.  If the patient does not have a living will, the value of this field indicates whether the
 * http://terminology.hl7.org/ValueSet/v2-0315
 */
export const Hl7VSLivingWillCode = {
  /**
   * Yes, patient has a living will
   */
  Yespatienthasalivingwill: "Y",

  /**
   * Yes, patient has a living will but it is not on file
   */
  Yespatienthasalivingwillbutitisnotonfile: "F",

  /**
   * No, patient does not have a living will and no information was provided
   */
  Nopatientdoesnothavealivingwillandnoinformationwasprovided: "N",

  /**
   * No, patient does not have a living will but information was provided
   */
  Nopatientdoesnothavealivingwillbutinformationwasprovided: "I",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLivingWillCode =
  typeof Hl7VSLivingWillCode[keyof typeof Hl7VSLivingWillCode];
