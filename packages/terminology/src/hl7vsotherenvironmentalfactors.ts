/**
 * Value Set of codes that identify the other environmental factors associated with the specimen in a specific container, e.g., atmospheric exposure.
 * http://terminology.hl7.org/ValueSet/v2-0377
 */
export const Hl7VSOtherEnvironmentalFactorsCode = {
  /**
   * Opened container, atmosphere and duration unspecified
   */
  Openedcontaineratmosphereanddurationunspecified: "ATM",

  /**
   * Opened container, indoor atmosphere, 60 minutes duration
   */
  Openedcontainerindooratmosphere60minutesduration: "A60",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOtherEnvironmentalFactorsCode =
  typeof Hl7VSOtherEnvironmentalFactorsCode[keyof typeof Hl7VSOtherEnvironmentalFactorsCode];
