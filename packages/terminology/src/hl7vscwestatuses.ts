/**
 * Concepts that represent an exception identifier code; that is, a code that is not defined in the value set (either model or site-extended).  These are occationsally referred to a 'flavors of null' although this set of concepts is specific to the CWE datatype used in Version 2 messaging, and the codes may be used in the 'identifier' component of the 'triplets' in that datatype.
 * http://terminology.hl7.org/ValueSet/v2-0353
 */
export const Hl7VSCweStatusesCode = {
  /**
   * Unknown
   */
  Unknown: "U",

  /**
   * Asked but Unknown
   */
  AskedbutUnknown: "UASK",

  /**
   * Not available
   */
  Notavailable: "NAV",

  /**
   * Not applicable
   */
  Notapplicable: "NA",

  /**
   * Not asked
   */
  Notasked: "NASK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCweStatusesCode =
  typeof Hl7VSCweStatusesCode[keyof typeof Hl7VSCweStatusesCode];
