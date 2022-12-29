/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActOrderableOrBillable
 */
export const XActOrderableOrBillableCode = {
  /**
   * accommodation
   */
  accommodation: "ACCM",

  /**
   * encounter
   */
  encounter: "ENC",

  /**
   * care provision
   */
  careprovision: "PCPR",

  /**
   * substance administration
   */
  substanceadministration: "SBADM",

  /**
   * transportation
   */
  transportation: "TRNS",

  /**
   * observation
   */
  observation: "OBS",

  /**
   * ActClassROI
   */
  ActClassROI: "_ActClassROI",

  /**
   * bounded ROI
   */
  boundedROI: "ROIBND",

  /**
   * overlay ROI
   */
  overlayROI: "ROIOVL",

  /**
   * subject physical position
   */
  subjectphysicalposition: "_SubjectPhysicalPosition",

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

  /**
   * detected issue
   */
  detectedissue: "ALRT",

  /**
   * battery
   */
  battery: "BATTERY",

  /**
   * clinical trial
   */
  clinicaltrial: "CLNTRL",

  /**
   * Condition Node
   */
  ConditionNode: "CNOD",

  /**
   * Condition
   */
  Condition: "COND",

  /**
   * public health case
   */
  publichealthcase: "CASE",

  /**
   * outbreak
   */
  outbreak: "OUTB",

  /**
   * diagnostic image
   */
  diagnosticimage: "DGIMG",

  /**
   * genomic observation
   */
  genomicobservation: "GEN",

  /**
   * determinant peptide
   */
  determinantpeptide: "DETPOL",

  /**
   * expression level
   */
  expressionlevel: "EXP",

  /**
   * locus
   */
  locus: "LOC",

  /**
   * phenotype
   */
  phenotype: "PHN",

  /**
   * polypeptide
   */
  polypeptide: "POL",

  /**
   * bio sequence
   */
  biosequence: "SEQ",

  /**
   * bio sequence variation
   */
  biosequencevariation: "SEQVAR",

  /**
   * investigation
   */
  investigation: "INVSTG",

  /**
   * observation series
   */
  observationseries: "OBSSER",

  /**
   * correlated observation sequences
   */
  correlatedobservationsequences: "OBSCOR",

  /**
   * position
   */
  position: "POS",

  /**
   * position accuracy
   */
  positionaccuracy: "POSACC",

  /**
   * position coordinate
   */
  positioncoordinate: "POSCOORD",

  /**
   * specimen observation
   */
  specimenobservation: "SPCOBS",

  /**
   * Verification
   */
  Verification: "VERIF",

  /**
   * procedure
   */
  procedure: "PROC",

  /**
   * Substance Extraction
   */
  SubstanceExtraction: "SBEXT",

  /**
   * Specimen Collection
   */
  SpecimenCollection: "SPECCOLLECT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActOrderableOrBillableCode =
  typeof XActOrderableOrBillableCode[keyof typeof XActOrderableOrBillableCode];
