/**
 * Checks on the patient prior specimen collection. All SNOMED CT concepts descendants of 703763000 |Precondition value (qualifier value)|
 * http://hl7.org/fhir/ValueSet/prepare-patient-prior-specimen-collection
 */
export const PreparePatientCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PreparePatientCode =
  typeof PreparePatientCode[keyof typeof PreparePatientCode];
