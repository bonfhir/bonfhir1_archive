/**
 * A symptom, disease or procedure.
 * http://hl7.org/fhir/ValueSet/disease-symptom-procedure
 */
export const DiseaseSymptomProcedureCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiseaseSymptomProcedureCode =
  typeof DiseaseSymptomProcedureCode[keyof typeof DiseaseSymptomProcedureCode];
