/**
 * Code specifying observations related to living situation for a person in a private residence.
 * http://terminology.hl7.org/ValueSet/v3-ObservationLivingSituationValue
 */
export const ObservationLivingSituationValueCode = {
  /**
   * living situation
   */
  LIVSIT: "LIVSIT",

  /**
   * alone
   */
  ALONE: "ALONE",

  /**
   * dependent children
   */
  DEPCHD: "DEPCHD",

  /**
   * dependent spouse
   */
  DEPSPS: "DEPSPS",

  /**
   * dependent young children
   */
  DEPYGCHD: "DEPYGCHD",

  /**
   * live with family
   */
  FAM: "FAM",

  /**
   * relative
   */
  RELAT: "RELAT",

  /**
   * spouse only
   */
  SPS: "SPS",

  /**
   * unrelated person
   */
  UNREL: "UNREL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationLivingSituationValueCode =
  typeof ObservationLivingSituationValueCode[keyof typeof ObservationLivingSituationValueCode];
