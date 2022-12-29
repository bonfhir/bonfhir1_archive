/**
 * An inpatient encounter is an encounter in which the patient is admitted to a hospital or equivalent facility.
 * http://terminology.hl7.org/ValueSet/v3-ActInpatientEncounterCode
 */
export const ActInpatientEncounterCodeCode = {
  /**
   * inpatient encounter
   */
  inpatientencounter: "IMP",

  /**
   * inpatient acute
   */
  inpatientacute: "ACUTE",

  /**
   * inpatient non-acute
   */
  inpatientnonacute: "NONAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInpatientEncounterCodeCode =
  typeof ActInpatientEncounterCodeCode[keyof typeof ActInpatientEncounterCodeCode];
