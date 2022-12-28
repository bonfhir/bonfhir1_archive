/**
 * A procedure or treatment performed on a specimen to prepare it for analysis
 * http://terminology.hl7.org/ValueSet/v3-ActClassSpecimenTreatment
 */
export const ActClassSpecimenTreatmentCode = {
  /**
   * specimen treatment
   */
  SPCTRT: "SPCTRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSpecimenTreatmentCode =
  typeof ActClassSpecimenTreatmentCode[keyof typeof ActClassSpecimenTreatmentCode];
