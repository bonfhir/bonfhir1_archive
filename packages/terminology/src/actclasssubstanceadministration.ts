/**
 * The act of introducing or otherwise applying a substance to the subject.

*Discussion:* The effect of the substance is typically established on a biochemical basis, however, that is not a requirement. For example, radiotherapy can largely be described in the same way, especially if it is a systemic therapy such as radio-iodine. This class also includes the application of chemical treatments to an area.

*Examples:* Chemotherapy protocol; Drug prescription; Vaccination record
 * http://terminology.hl7.org/ValueSet/v3-ActClassSubstanceAdministration
 */
export const ActClassSubstanceAdministrationCode = {
  /**
   * substance administration
   */
  substanceadministration: "SBADM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSubstanceAdministrationCode =
  typeof ActClassSubstanceAdministrationCode[keyof typeof ActClassSubstanceAdministrationCode];
