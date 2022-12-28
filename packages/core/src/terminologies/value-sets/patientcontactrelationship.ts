/**
 * The nature of the relationship between the patient and the contact person.
 * http://hl7.org/fhir/ValueSet/patient-contactrelationship
 */
export const PatientContactRelationshipCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientContactRelationshipCode =
  typeof PatientContactRelationshipCode[keyof typeof PatientContactRelationshipCode];
