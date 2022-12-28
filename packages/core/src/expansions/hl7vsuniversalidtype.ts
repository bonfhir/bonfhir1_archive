/**
 * Types of UID (Universal Identifiers).
 * http://terminology.hl7.org/ValueSet/v2-0301
 */
export const Hl7VSUniversalIdTypeCode = {
  /**
   * College of American Pathologist Accreditation Number
   */
  CAP: "CAP",

  /**
   * Clinical Laboratory Improvement Amendments
   */
  CLIA: "CLIA",

  /**
   * Clinical laboratory Improvement Program
   */
  CLIP: "CLIP",

  /**
   * Domain Name System
   */
  DNS: "DNS",

  /**
   * IEEE 64-bit Extended Unique Identifier
   */
  EUI64: "EUI64",

  /**
   * globally unique identifier
   */
  GUID: "GUID",

  /**
   * CEN Healthcare Coding Identifier
   */
  HCD: "HCD",

  /**
   * HL7 registration schemes
   */
  HL7: "HL7",

  /**
   * ISO Object Identifier
   */
  ISO: "ISO",

  /**
   * Local
   */
  L: "L",

  /**
   * Local
   */
  "L,M,N": "L,M,N",

  /**
   * Local
   */
  M: "M",

  /**
   * Local
   */
  N: "N",

  /**
   * US National Provider Identifier
   */
  NPI: "NPI",

  /**
   * Random
   */
  Random: "Random",

  /**
   * Uniform Resource Identifier
   */
  URI: "URI",

  /**
   * Universal Unique Identifier
   */
  UUID: "UUID",

  /**
   * X.400 MHS identifier
   */
  x400: "x400",

  /**
   * X500 directory Name
   */
  x500: "x500",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSUniversalIdTypeCode =
  typeof Hl7VSUniversalIdTypeCode[keyof typeof Hl7VSUniversalIdTypeCode];
