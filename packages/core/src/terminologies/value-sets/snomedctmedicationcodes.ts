/**
 * This value set includes all drug or medicament substance codes and all pharmaceutical/biologic products from SNOMED CT - provided as an exemplar value set.
 * http://hl7.org/fhir/ValueSet/medication-codes
 */
export const SNOMEDCTMedicationCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTMedicationCodesCode =
  typeof SNOMEDCTMedicationCodesCode[keyof typeof SNOMEDCTMedicationCodesCode];
