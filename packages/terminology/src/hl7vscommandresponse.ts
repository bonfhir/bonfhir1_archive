/**
 * Value Set of codes identifying the response of the previously issued command.
 * http://terminology.hl7.org/ValueSet/v2-0387
 */
export const Hl7VSCommandResponseCode = {
  /**
   * Command completed successfully
   */
  Commandcompletedsuccessfully: "OK",

  /**
   * Command cannot be completed within requested completion time
   */
  Commandcannotbecompletedwithinrequestedcompletiontime: "TI",

  /**
   * Command cannot be completed because of error condition
   */
  Commandcannotbecompletedbecauseoferrorcondition: "ER",

  /**
   * Command cannot be completed because of the status of the requested equipment
   */
  Commandcannotbecompletedbecauseofthestatusoftherequestedequipment: "ST",

  /**
   * Command cannot be completed for unknown reasons
   */
  Commandcannotbecompletedforunknownreasons: "UN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCommandResponseCode =
  typeof Hl7VSCommandResponseCode[keyof typeof Hl7VSCommandResponseCode];
