/**
 * A politically organized body of people bonded by territory and known as a nation.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassNation
 */
export const EntityClassNationCode = {
  /**
   * Nation
   */
  Nation: "NAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassNationCode =
  typeof EntityClassNationCode[keyof typeof EntityClassNationCode];
