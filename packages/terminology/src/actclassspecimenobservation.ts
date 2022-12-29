/**
 * An observation on a specimen in a laboratory environment that may affect processing, analysis or result interpretation
 * http://terminology.hl7.org/ValueSet/v3-ActClassSpecimenObservation
 */
export const ActClassSpecimenObservationCode = {
  /**
   * specimen observation
   */
  specimenobservation: "SPCOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSpecimenObservationCode =
  typeof ActClassSpecimenObservationCode[keyof typeof ActClassSpecimenObservationCode];
