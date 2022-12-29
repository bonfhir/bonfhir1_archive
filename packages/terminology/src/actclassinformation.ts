/**
 * Sender sends payload to addressee as information. Addressee does not have responsibilities beyond serving addressee's own interest (i.e., read and memorize if you see fit). This is equivalent to an FYI on a memo.
 * http://terminology.hl7.org/ValueSet/v3-ActClassInformation
 */
export const ActClassInformationCode = {
  /**
   * information
   */
  information: "INFO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassInformationCode =
  typeof ActClassInformationCode[keyof typeof ActClassInformationCode];
