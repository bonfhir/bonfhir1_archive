/**
 * Technical exceptions resulting in the inability to provide an interpretation. At most one allowed. Does not imply normality or severity.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationExceptions
 */
export const ObservationInterpretationExceptionsCode = {
  /**
   * Off scale low
   */
  "<": "<",

  /**
   * Off scale high
   */
  ">": ">",

  /**
   * Anti-complementary substances present
   */
  AC: "AC",

  /**
   * Insufficient evidence
   */
  IE: "IE",

  /**
   * Quality control failure
   */
  QCF: "QCF",

  /**
   * Cytotoxic substance present
   */
  TOX: "TOX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationExceptionsCode =
  typeof ObservationInterpretationExceptionsCode[keyof typeof ObservationInterpretationExceptionsCode];
