/**
 * Code specifying observations related to living situation for a person in a private residence.
 * http://terminology.hl7.org/ValueSet/v3-ObservationLivingSituationValue
 */
export const ObservationLivingSituationValueCode = {
  /**
   * living situation
   */
  LIVSIT: "LIVSIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationLivingSituationValueCode =
  typeof ObservationLivingSituationValueCode[keyof typeof ObservationLivingSituationValueCode];
