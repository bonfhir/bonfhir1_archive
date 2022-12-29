/**
 * Code specifying observations related to living situation for a person in a private residence.
 * http://terminology.hl7.org/ValueSet/v3-ObservationLivingSituationValue
 */
export const ObservationLivingSituationValueCode = {
  /**
   * living situation
   */
  livingsituation: "LIVSIT",

  /**
   * alone
   */
  alone: "ALONE",

  /**
   * dependent children
   */
  dependentchildren: "DEPCHD",

  /**
   * dependent spouse
   */
  dependentspouse: "DEPSPS",

  /**
   * dependent young children
   */
  dependentyoungchildren: "DEPYGCHD",

  /**
   * live with family
   */
  livewithfamily: "FAM",

  /**
   * relative
   */
  relative: "RELAT",

  /**
   * spouse only
   */
  spouseonly: "SPS",

  /**
   * unrelated person
   */
  unrelatedperson: "UNREL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationLivingSituationValueCode =
  typeof ObservationLivingSituationValueCode[keyof typeof ObservationLivingSituationValueCode];
