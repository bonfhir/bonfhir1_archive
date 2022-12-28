/**
 * This value set includes all the "Clinical finding" [SNOMED CT](http://snomed.info/sct) codes - concepts where concept is-a 404684003 (Clinical finding (finding)).
 * http://hl7.org/fhir/ValueSet/clinical-findings
 */
export const SNOMEDCTClinicalFindingsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTClinicalFindingsCode =
  typeof SNOMEDCTClinicalFindingsCode[keyof typeof SNOMEDCTClinicalFindingsCode];
