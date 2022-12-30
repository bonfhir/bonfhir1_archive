/**
 * An intent to perform a service that has the strength of a commitment, i.e., other parties may rely on the originator of such promise that said originator will see to it that the promised act will be fulfilled. A promise can be either solicited or unsolicited.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodPromise
 */
export const ActMoodPromiseCode = {
  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * appointment
   */
  APT: "APT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodPromiseCode =
  typeof ActMoodPromiseCode[keyof typeof ActMoodPromiseCode];
