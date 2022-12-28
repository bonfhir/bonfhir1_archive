/**
 * This value set includes [SNOMED CT](http://snomed.info/sct) where concept is-a 105590001 (Substance (substance)) or  concept is-a 260787004 (Physical object)  and provided as an example value set.
 * http://hl7.org/fhir/ValueSet/supply-item
 */
export const SNOMEDCTSupplyItemCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTSupplyItemCode =
  typeof SNOMEDCTSupplyItemCode[keyof typeof SNOMEDCTSupplyItemCode];
