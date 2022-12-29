/**
 * Used in the diagnosis of the indicated disease.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSymptomaticRelief
 */
export const ActRelationshipSymptomaticReliefCode = {
  /**
   * symptomatic relief
   */
  symptomaticrelief: "SYMP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSymptomaticReliefCode =
  typeof ActRelationshipSymptomaticReliefCode[keyof typeof ActRelationshipSymptomaticReliefCode];
