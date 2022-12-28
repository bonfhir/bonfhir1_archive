/**
 * This is an example value set that includes all the LOINC codes for serum/plasma cholesterol from v2.36.
 * http://hl7.org/fhir/ValueSet/example-expansion
 */
export const LOINCCodesforCholesterolinSerumPlasmaCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LOINCCodesforCholesterolinSerumPlasmaCode =
  typeof LOINCCodesforCholesterolinSerumPlasmaCode[keyof typeof LOINCCodesforCholesterolinSerumPlasmaCode];
