/**
 * Sender asks addressee to do something depending on the focal Act of the payload. An example is "fulfill this order". Addressee has responsibilities to either reject the message or to act on it in an appropriate way (specified by the specific receiver responsibilities for the interaction).
 * http://terminology.hl7.org/ValueSet/v3-ActClassAction
 */
export const ActClassActionCode = {
  /**
   * action
   */
  ACTN: "ACTN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassActionCode =
  typeof ActClassActionCode[keyof typeof ActClassActionCode];
