/**
 * The territory of a state, province, department or other division of a sovereign country.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassStateOrProvince
 */
export const EntityClassStateOrProvinceCode = {
  /**
   * state or province
   */
  PROVINCE: "PROVINCE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassStateOrProvinceCode =
  typeof EntityClassStateOrProvinceCode[keyof typeof EntityClassStateOrProvinceCode];
