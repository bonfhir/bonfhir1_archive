/**
 * This value set represents codes for food nutrients and is provided as a suggestive example.  It include codes from [SNOMED CT](http://snomed.info/sct) where concept has a parent of 406455002 Allergen class (substance).
 * http://hl7.org/fhir/ValueSet/allergen-class
 */
export const CodesforAllergenClassesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodesforAllergenClassesCode =
  typeof CodesforAllergenClassesCode[keyof typeof CodesforAllergenClassesCode];
