/**
 * This value set includes all codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 442083009 (Anatomical or acquired body site (body structure)).
 * http://hl7.org/fhir/ValueSet/body-site
 */
export const SNOMEDCTBodyStructuresCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SNOMEDCTBodyStructuresCode =
  typeof SNOMEDCTBodyStructuresCode[keyof typeof SNOMEDCTBodyStructuresCode];
