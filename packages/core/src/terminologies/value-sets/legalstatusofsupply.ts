/**
 * The prescription supply types appropriate to a medicinal product
 * http://hl7.org/fhir/ValueSet/legal-status-of-supply
 */
export const LegalStatusOfSupplyCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LegalStatusOfSupplyCode =
  typeof LegalStatusOfSupplyCode[keyof typeof LegalStatusOfSupplyCode];
