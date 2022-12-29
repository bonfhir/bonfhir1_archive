/**
 * Value Set of codes that specify the status of the practitioner's speciality certification.
 * http://terminology.hl7.org/ValueSet/v2-0337
 */
export const Hl7VSCertificationStatusCode = {
  /**
   * Certified
   */
  Certified: "C",

  /**
   * Eligible
   */
  Eligible: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCertificationStatusCode =
  typeof Hl7VSCertificationStatusCode[keyof typeof Hl7VSCertificationStatusCode];
