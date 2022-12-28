/**
 * Extra measures defined for a Medicinal Product, such as heightened reporting requirements.
 * http://hl7.org/fhir/ValueSet/medicinal-product-pediatric-use
 */
export const PediatricUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PediatricUseCode =
  typeof PediatricUseCode[keyof typeof PediatricUseCode];
