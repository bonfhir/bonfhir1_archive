/**
 * The technique that is used to perform the process or preserve the specimen.
 * http://hl7.org/fhir/ValueSet/specimen-processing-procedure
 */
export const SpecimenProcessingProcedureCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenProcessingProcedureCode =
  typeof SpecimenProcessingProcedureCode[keyof typeof SpecimenProcessingProcedureCode];
