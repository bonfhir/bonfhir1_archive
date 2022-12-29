/**
 * Types of UID (Universal Identifiers).
 * http://terminology.hl7.org/ValueSet/v2-0301
 */
export const Hl7VSUniversalIdTypeCode = {
  /**
   * College of American Pathologist Accreditation Number
   */
  CollegeofAmericanPathologistAccreditationNumber: "CAP",

  /**
   * Clinical Laboratory Improvement Amendments
   */
  ClinicalLaboratoryImprovementAmendments: "CLIA",

  /**
   * Clinical laboratory Improvement Program
   */
  ClinicallaboratoryImprovementProgram: "CLIP",

  /**
   * Domain Name System
   */
  DomainNameSystem: "DNS",

  /**
   * IEEE 64-bit Extended Unique Identifier
   */
  IEEE64bitExtendedUniqueIdentifier: "EUI64",

  /**
   * globally unique identifier
   */
  globallyuniqueidentifier: "GUID",

  /**
   * CEN Healthcare Coding Identifier
   */
  CENHealthcareCodingIdentifier: "HCD",

  /**
   * HL7 registration schemes
   */
  HL7registrationschemes: "HL7",

  /**
   * ISO Object Identifier
   */
  ISOObjectIdentifier: "ISO",

  /**
   * Local
   */
  Local: "L",

  /**
   * Local
   */
  Local: "L,M,N",

  /**
   * Local
   */
  Local: "M",

  /**
   * Local
   */
  Local: "N",

  /**
   * US National Provider Identifier
   */
  USNationalProviderIdentifier: "NPI",

  /**
   * Random
   */
  Random: "Random",

  /**
   * Uniform Resource Identifier
   */
  UniformResourceIdentifier: "URI",

  /**
   * Universal Unique Identifier
   */
  UniversalUniqueIdentifier: "UUID",

  /**
   * X.400 MHS identifier
   */
  X400MHSidentifier: "x400",

  /**
   * X500 directory Name
   */
  X500directoryName: "x500",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSUniversalIdTypeCode =
  typeof Hl7VSUniversalIdTypeCode[keyof typeof Hl7VSUniversalIdTypeCode];
