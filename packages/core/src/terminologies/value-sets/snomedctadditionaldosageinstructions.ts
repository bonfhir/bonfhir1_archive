/**
 * This value set includes all SNOMED CT Additional Dosage Instructions.
 * http://hl7.org/fhir/ValueSet/additional-instruction-codes
 */
export const SNOMEDCTAdditionalDosageInstructionsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTAdditionalDosageInstructionsCode =
  typeof SNOMEDCTAdditionalDosageInstructionsCode[keyof typeof SNOMEDCTAdditionalDosageInstructionsCode];
