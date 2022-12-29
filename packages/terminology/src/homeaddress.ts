/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HomeAddress
 */
export const HomeAddressCode = {
  /**
   * home address
   */
  homeaddress: "H",

  /**
   * primary home
   */
  primaryhome: "HP",

  /**
   * vacation home
   */
  vacationhome: "HV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HomeAddressCode =
  typeof HomeAddressCode[keyof typeof HomeAddressCode];
