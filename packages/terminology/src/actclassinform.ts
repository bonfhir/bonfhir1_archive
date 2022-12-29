/**
 * The act of transmitting information and understanding about a topic to a subject where the participation association must be SBJ.

**Discussion:** This act may be used to request that a patient or provider be informed about an Act, or to indicate that a person was informed about a particular act.
 * http://terminology.hl7.org/ValueSet/v3-ActClassInform
 */
export const ActClassInformCode = {
  /**
   * inform
   */
  inform: "INFRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassInformCode =
  typeof ActClassInformCode[keyof typeof ActClassInformCode];
