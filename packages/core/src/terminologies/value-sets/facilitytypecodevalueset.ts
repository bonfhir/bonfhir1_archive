/**
 * This is the code representing the type of organizational setting where the clinical encounter, service, interaction, or treatment occurred. The value set used for Healthcare Facility Type has been defined by HITSP to be the value set reproduced from HITSP C80 Table 2-147.
 * http://hl7.org/fhir/ValueSet/c80-facilitycodes
 */
export const FacilityTypeCodeValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FacilityTypeCodeValueSetCode =
  typeof FacilityTypeCodeValueSetCode[keyof typeof FacilityTypeCodeValueSetCode];
