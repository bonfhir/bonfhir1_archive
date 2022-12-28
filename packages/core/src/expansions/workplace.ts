/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-WorkPlace
 */
export const WorkPlaceCode = {
  /**
   * work place
   */
  WP: "WP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WorkPlaceCode = typeof WorkPlaceCode[keyof typeof WorkPlaceCode];
