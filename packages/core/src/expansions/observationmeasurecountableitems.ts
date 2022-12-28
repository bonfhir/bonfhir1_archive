/**
 * A collection of items that can be counted by a quality measure (e.g., patients, encounters, procedures, etc.) for Observation.value used in the HQMF R2 MeasureAttribute class.
 * http://terminology.hl7.org/ValueSet/v3-ObservationMeasureCountableItems
 */
export const ObservationMeasureCountableItemsCode = {
  /**
   * Procedure
   */
  "71388002": "71388002",

  /**
   * Device
   */
  "49062001": "49062001",

  /**
   * Person
   */
  "125676002": "125676002",

  /**
   * Group (social concept)
   */
  "389109008": "389109008",

  /**
   * Events
   */
  "272379006": "272379006",

  /**
   * Non-SI unit of time
   */
  "258700003": "258700003",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMeasureCountableItemsCode =
  typeof ObservationMeasureCountableItemsCode[keyof typeof ObservationMeasureCountableItemsCode];
