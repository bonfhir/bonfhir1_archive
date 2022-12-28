/**
 * Value Set of codes that identify the level of privacy a patient will be afforded when assigned to this location definition.
 * http://terminology.hl7.org/ValueSet/v2-0262
 */
export const Hl7VSPrivacyLevelCode = {
  /**
   * Isolation
   */
  F: "F",

  /**
   * Private room
   */
  P: "P",

  /**
   * Private room - medically justified
   */
  J: "J",

  /**
   * Private room - due to overflow
   */
  Q: "Q",

  /**
   * Semi-private room
   */
  S: "S",

  /**
   * Ward
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrivacyLevelCode =
  typeof Hl7VSPrivacyLevelCode[keyof typeof Hl7VSPrivacyLevelCode];
