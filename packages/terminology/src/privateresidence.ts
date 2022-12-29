/**
 * **Definition:**  A living arrangement within a private residence for single family.
 * http://terminology.hl7.org/ValueSet/v3-PrivateResidence
 */
export const PrivateResidenceCode = {
  /**
   * private residence
   */
  privateresidence: "PR",

  /**
   * Independent Household
   */
  IndependentHousehold: "H",

  /**
   * Retirement Community
   */
  RetirementCommunity: "R",

  /**
   * supported living
   */
  supportedliving: "SL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PrivateResidenceCode =
  typeof PrivateResidenceCode[keyof typeof PrivateResidenceCode];
