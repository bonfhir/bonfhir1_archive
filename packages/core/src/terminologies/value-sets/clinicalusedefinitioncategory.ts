/**
 * A categorisation for a clinical use information item.
 * http://hl7.org/fhir/ValueSet/clinical-use-definition-category
 */
export const ClinicalUseDefinitionCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinicalUseDefinitionCategoryCode =
  typeof ClinicalUseDefinitionCategoryCode[keyof typeof ClinicalUseDefinitionCategoryCode];
