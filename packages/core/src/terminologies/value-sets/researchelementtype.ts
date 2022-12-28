/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 * http://hl7.org/fhir/ValueSet/research-element-type
 */
export const ResearchElementTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchElementTypeCode =
  typeof ResearchElementTypeCode[keyof typeof ResearchElementTypeCode];
