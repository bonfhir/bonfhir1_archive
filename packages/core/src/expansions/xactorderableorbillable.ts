/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActOrderableOrBillable
 */
export const XActOrderableOrBillableCode = {
  /**
   * accommodation
   */
  ACCM: "ACCM",

  /**
   * encounter
   */
  ENC: "ENC",

  /**
   * care provision
   */
  PCPR: "PCPR",

  /**
   * substance administration
   */
  SBADM: "SBADM",

  /**
   * transportation
   */
  TRNS: "TRNS",

  /**
   * observation
   */
  OBS: "OBS",

  /**
   * ActClassROI
   */
  _ActClassROI: "_ActClassROI",

  /**
   * bounded ROI
   */
  ROIBND: "ROIBND",

  /**
   * overlay ROI
   */
  ROIOVL: "ROIOVL",

  /**
   * subject physical position
   */
  _SubjectPhysicalPosition: "_SubjectPhysicalPosition",

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

  /**
   * detected issue
   */
  ALRT: "ALRT",

  /**
   * battery
   */
  BATTERY: "BATTERY",

  /**
   * clinical trial
   */
  CLNTRL: "CLNTRL",

  /**
   * Condition Node
   */
  CNOD: "CNOD",

  /**
   * Condition
   */
  COND: "COND",

  /**
   * public health case
   */
  CASE: "CASE",

  /**
   * outbreak
   */
  OUTB: "OUTB",

  /**
   * diagnostic image
   */
  DGIMG: "DGIMG",

  /**
   * genomic observation
   */
  GEN: "GEN",

  /**
   * determinant peptide
   */
  DETPOL: "DETPOL",

  /**
   * expression level
   */
  EXP: "EXP",

  /**
   * locus
   */
  LOC: "LOC",

  /**
   * phenotype
   */
  PHN: "PHN",

  /**
   * polypeptide
   */
  POL: "POL",

  /**
   * bio sequence
   */
  SEQ: "SEQ",

  /**
   * bio sequence variation
   */
  SEQVAR: "SEQVAR",

  /**
   * investigation
   */
  INVSTG: "INVSTG",

  /**
   * observation series
   */
  OBSSER: "OBSSER",

  /**
   * correlated observation sequences
   */
  OBSCOR: "OBSCOR",

  /**
   * position
   */
  POS: "POS",

  /**
   * position accuracy
   */
  POSACC: "POSACC",

  /**
   * position coordinate
   */
  POSCOORD: "POSCOORD",

  /**
   * specimen observation
   */
  SPCOBS: "SPCOBS",

  /**
   * Verification
   */
  VERIF: "VERIF",

  /**
   * procedure
   */
  PROC: "PROC",

  /**
   * Substance Extraction
   */
  SBEXT: "SBEXT",

  /**
   * Specimen Collection
   */
  SPECCOLLECT: "SPECCOLLECT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActOrderableOrBillableCode =
  typeof XActOrderableOrBillableCode[keyof typeof XActOrderableOrBillableCode];
