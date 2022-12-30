/**
 * An observation that relates to factors that may potentially cause interference with the observation
 * http://terminology.hl7.org/ValueSet/v3-ActSpecObsInterferenceCode
 */
export const ActSpecObsInterferenceCodeCode = {
  /**
   * ActSpecObsInterferenceCode
   */
  INTFR: "INTFR",

  /**
   * Fibrin
   */
  FIBRIN: "FIBRIN",

  /**
   * Hemolysis
   */
  HEMOLYSIS: "HEMOLYSIS",

  /**
   * Icterus
   */
  ICTERUS: "ICTERUS",

  /**
   * Lipemia
   */
  LIPEMIA: "LIPEMIA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecObsInterferenceCodeCode =
  typeof ActSpecObsInterferenceCodeCode[keyof typeof ActSpecObsInterferenceCodeCode];
