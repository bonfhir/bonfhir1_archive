/**
 * SupplementType :  Codes for nutritional supplements to be provided to the patient. This value set is composed of SNOMED CT (US Extension) Concepts from SCTID 470581016 (Enteral+supplement feeds hierarchy (product)) and is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/supplement-type
 */
export const SupplementTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplementTypeCodesCode =
  typeof SupplementTypeCodesCode[keyof typeof SupplementTypeCodesCode];
