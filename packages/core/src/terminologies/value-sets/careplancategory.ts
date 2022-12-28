/**
 * Example codes indicating the category a care plan falls within.  Note that these are in no way complete and might not even be appropriate for some uses.
 * http://hl7.org/fhir/ValueSet/care-plan-category
 */
export const CarePlanCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CarePlanCategoryCode =
  typeof CarePlanCategoryCode[keyof typeof CarePlanCategoryCode];
