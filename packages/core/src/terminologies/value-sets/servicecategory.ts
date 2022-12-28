/**
 * This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 * http://hl7.org/fhir/ValueSet/service-category
 */
export const ServiceCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ServiceCategoryCode =
  typeof ServiceCategoryCode[keyof typeof ServiceCategoryCode];
