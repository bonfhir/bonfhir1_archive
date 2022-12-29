/**
 * Value Set of codes specifying the status of a phlebotomy.
 * http://terminology.hl7.org/ValueSet/v2-0926
 */
export const Hl7VSPhlebotomyStatusCode = {
  /**
   * Successful
   */
  Successful: "SUC",

  /**
   * Not Drawn
   */
  NotDrawn: "NDR",

  /**
   * Unsuccessful Less than 50 ml drawn
   */
  UnsuccessfulLessthan50mldrawn: "UL5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPhlebotomyStatusCode =
  typeof Hl7VSPhlebotomyStatusCode[keyof typeof Hl7VSPhlebotomyStatusCode];
