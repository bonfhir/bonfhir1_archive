/**
 * Observation Method codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 272394005 (Technique (qualifier value)) or is-a 129264002 (Action (qualifier value)) or is-a 386053000 (Evaluation procedure(procedure))
 * http://hl7.org/fhir/ValueSet/observation-methods
 */
export const ObservationMethodsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMethodsCode =
  typeof ObservationMethodsCode[keyof typeof ObservationMethodsCode];
