/**
 * The spatial relationship of a subject whether human, other animal, or plant, to a frame of reference such as gravity or a collection device.
 * http://terminology.hl7.org/ValueSet/v3-ActClassSubjectPhysicalPosition
 */
export const ActClassSubjectPhysicalPositionCode = {
  /**
   * subject body position
   */
  _SubjectBodyPosition: "_SubjectBodyPosition",

  /**
   * left lateral decubitus
   */
  LLD: "LLD",

  /**
   * prone
   */
  PRN: "PRN",

  /**
   * right lateral decubitus
   */
  RLD: "RLD",

  /**
   * Semi-Fowler's
   */
  SFWL: "SFWL",

  /**
   * sitting
   */
  SIT: "SIT",

  /**
   * standing
   */
  STN: "STN",

  /**
   * supine
   */
  SUP: "SUP",

  /**
   * reverse trendelenburg
   */
  RTRD: "RTRD",

  /**
   * trendelenburg
   */
  TRD: "TRD",

  /**
   * imaging subject orientation
   */
  _ImagingSubjectOrientation: "_ImagingSubjectOrientation",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSubjectPhysicalPositionCode =
  typeof ActClassSubjectPhysicalPositionCode[keyof typeof ActClassSubjectPhysicalPositionCode];
