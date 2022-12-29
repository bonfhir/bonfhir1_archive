/**
 * The spatial relationship of a subject whether human, other animal, or plant, to a frame of reference such as gravity or a collection device.
 * http://terminology.hl7.org/ValueSet/v3-ActClassSubjectPhysicalPosition
 */
export const ActClassSubjectPhysicalPositionCode = {
  /**
   * subject body position
   */
  subjectbodyposition: "_SubjectBodyPosition",

  /**
   * left lateral decubitus
   */
  leftlateraldecubitus: "LLD",

  /**
   * prone
   */
  prone: "PRN",

  /**
   * right lateral decubitus
   */
  rightlateraldecubitus: "RLD",

  /**
   * Semi-Fowler's
   */
  SemiFowlers: "SFWL",

  /**
   * sitting
   */
  sitting: "SIT",

  /**
   * standing
   */
  standing: "STN",

  /**
   * supine
   */
  supine: "SUP",

  /**
   * reverse trendelenburg
   */
  reversetrendelenburg: "RTRD",

  /**
   * trendelenburg
   */
  trendelenburg: "TRD",

  /**
   * imaging subject orientation
   */
  imagingsubjectorientation: "_ImagingSubjectOrientation",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSubjectPhysicalPositionCode =
  typeof ActClassSubjectPhysicalPositionCode[keyof typeof ActClassSubjectPhysicalPositionCode];
