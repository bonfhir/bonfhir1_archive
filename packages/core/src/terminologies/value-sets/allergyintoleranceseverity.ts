/**
 * Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.
 * http://hl7.org/fhir/ValueSet/reaction-event-severity
 */
export const AllergyIntoleranceSeverityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceSeverityCode =
  typeof AllergyIntoleranceSeverityCode[keyof typeof AllergyIntoleranceSeverityCode];
