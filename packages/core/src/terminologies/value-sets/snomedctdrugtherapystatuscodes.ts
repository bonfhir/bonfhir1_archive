/**
 * This value set includes some taken and not taken reason codes from SNOMED CT - provided as an exemplar
 * http://hl7.org/fhir/ValueSet/reason-medication-status-codes
 */
export const SNOMEDCTDrugTherapyStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTDrugTherapyStatusCodesCode =
  typeof SNOMEDCTDrugTherapyStatusCodesCode[keyof typeof SNOMEDCTDrugTherapyStatusCodesCode];
