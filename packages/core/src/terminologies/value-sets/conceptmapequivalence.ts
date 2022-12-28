/**
 * The degree of equivalence between concepts.
 * http://hl7.org/fhir/ValueSet/concept-map-equivalence
 */
export const ConceptMapEquivalenceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConceptMapEquivalenceCode =
  typeof ConceptMapEquivalenceCode[keyof typeof ConceptMapEquivalenceCode];
