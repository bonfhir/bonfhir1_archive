/**
 * An example value set of SNOMED CT concepts that can classify a requested service
 * http://hl7.org/fhir/ValueSet/servicerequest-category
 */
export const ServiceRequestCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceRequestCategoryCodesCode =
  typeof ServiceRequestCategoryCodesCode[keyof typeof ServiceRequestCategoryCodesCode];
