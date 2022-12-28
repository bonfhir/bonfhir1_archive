/**
 * Overall categorization of the event, e.g. product-related or situational.
 * http://hl7.org/fhir/ValueSet/adverse-event-category
 */
export const AdverseEventCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCategoryCode =
  typeof AdverseEventCategoryCode[keyof typeof AdverseEventCategoryCode];
