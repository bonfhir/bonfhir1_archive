/**
 * Example value set for investigation type.
 * http://hl7.org/fhir/ValueSet/investigation-sets
 */
export const InvestigationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvestigationTypeCode =
  typeof InvestigationTypeCode[keyof typeof InvestigationTypeCode];
