/**
 * Concepts declaring the general type of media data that is encoded.
 * http://terminology.hl7.org/ValueSet/v2-0191
 */
export const Hl7VSTypeOfDataCode = {
  /**
   * Other application data, typically uninterpreted binary data (HL7 V2.3 and later)
   */
  OtherapplicationdatatypicallyuninterpretedbinarydataHL7V23andlater: "AP",

  /**
   * Audio data (HL7 V2.3 and later)
   */
  AudiodataHL7V23andlater: "AU",

  /**
   * Formatted text (HL7 V2.2 only)
   */
  FormattedtextHL7V22only: "FT",

  /**
   * Image data (HL7 V2.3 and later)
   */
  ImagedataHL7V23andlater: "IM",

  /**
   * MIME multipart package
   */
  MIMEmultipartpackage: "multipart",

  /**
   * Non-scanned image (HL7 V2.2 only)
   */
  NonscannedimageHL7V22only: "NS",

  /**
   * Scanned document (HL7 V2.2 only)
   */
  ScanneddocumentHL7V22only: "SD",

  /**
   * Scanned image (HL7 V2.2 only)
   */
  ScannedimageHL7V22only: "SI",

  /**
   * Image data  (HL7 V2.3 and later)
   */
  ImagedataHL7V23andlater: "Image",

  /**
   * Machine readable text document (HL7 V2.3.1 and later)
   */
  MachinereadabletextdocumentHL7V231andlater: "TEXT",

  /**
   * Audio data  (HL7 V2.3 and later)
   */
  AudiodataHL7V23andlater: "Audio",

  /**
   * Machine readable text document (HL7 V2.2 only)
   */
  MachinereadabletextdocumentHL7V22only: "TX",

  /**
   * Other application data, typically uninterpreted binary data  (HL7 V2.3 and later)
   */
  OtherapplicationdatatypicallyuninterpretedbinarydataHL7V23andlater:
    "Application",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTypeOfDataCode =
  typeof Hl7VSTypeOfDataCode[keyof typeof Hl7VSTypeOfDataCode];
