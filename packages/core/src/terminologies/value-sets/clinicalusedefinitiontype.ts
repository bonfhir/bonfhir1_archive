/**
 * Overall defining type of this clinical use definition.
 * http://hl7.org/fhir/ValueSet/clinical-use-definition-type
 */
export const ClinicalUseDefinitionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalUseDefinitionTypeCode =
  typeof ClinicalUseDefinitionTypeCode[keyof typeof ClinicalUseDefinitionTypeCode];
