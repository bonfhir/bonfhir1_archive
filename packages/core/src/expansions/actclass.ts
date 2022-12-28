/**
 * A code specifying the major type of Act that this Act-instance represents.

*Constraints:* The classCode domain is a tightly controlled vocabulary, not an external or user-defined vocabulary.

Every Act-instance must have a classCode. If the act class is not further specified, the most general Act.classCode (ACT) is used.

The Act.classCode must be a generalization of the specific Act concept (e.g., as expressed in Act.code), in other words, the Act concepts conveyed in an Act must be specializations of the Act.classCode. Especially, Act.code is not a "modifier" that can alter the meaning of a class code. (See Act.code for contrast.)
 * http://terminology.hl7.org/ValueSet/v3-ActClass
 */
export const ActClassCode = {
  /**
   * act
   */
  ACT: "ACT",

  /**
   * record organizer
   */
  _ActClassRecordOrganizer: "_ActClassRecordOrganizer",

  /**
   * composition
   */
  COMPOSITION: "COMPOSITION",

  /**
   * document
   */
  DOC: "DOC",

  /**
   * clinical document
   */
  DOCCLIN: "DOCCLIN",

  /**
   * CDA Level One clinical document
   */
  CDALVLONE: "CDALVLONE",

  /**
   * record container
   */
  CONTAINER: "CONTAINER",

  /**
   * category
   */
  CATEGORY: "CATEGORY",

  /**
   * document body
   */
  DOCBODY: "DOCBODY",

  /**
   * document section
   */
  DOCSECT: "DOCSECT",

  /**
   * topic
   */
  TOPIC: "TOPIC",

  /**
   * extract
   */
  EXTRACT: "EXTRACT",

  /**
   * electronic health record
   */
  EHR: "EHR",

  /**
   * folder
   */
  FOLDER: "FOLDER",

  /**
   * grouper
   */
  GROUPER: "GROUPER",

  /**
   * Cluster
   */
  CLUSTER: "CLUSTER",

  /**
   * accommodation
   */
  ACCM: "ACCM",

  /**
   * account
   */
  ACCT: "ACCT",

  /**
   * accession
   */
  ACSN: "ACSN",

  /**
   * financial adjudication
   */
  ADJUD: "ADJUD",

  /**
   * control act
   */
  CACT: "CACT",

  /**
   * action
   */
  ACTN: "ACTN",

  /**
   * information
   */
  INFO: "INFO",

  /**
   * state transition control
   */
  STC: "STC",

  /**
   * contract
   */
  CNTRCT: "CNTRCT",

  /**
   * financial contract
   */
  FCNTRCT: "FCNTRCT",

  /**
   * coverage
   */
  COV: "COV",

  /**
   * concern
   */
  CONC: "CONC",

  /**
   * public health case
   */
  HCASE: "HCASE",

  /**
   * outbreak
   */
  OUTBR: "OUTBR",

  /**
   * consent
   */
  CONS: "CONS",

  /**
   * container registration
   */
  CONTREG: "CONTREG",

  /**
   * clinical trial timepoint event
   */
  CTTEVENT: "CTTEVENT",

  /**
   * disciplinary action
   */
  DISPACT: "DISPACT",

  /**
   * exposure
   */
  EXPOS: "EXPOS",

  /**
   * acquisition exposure
   */
  AEXPOS: "AEXPOS",

  /**
   * transmission exposure
   */
  TEXPOS: "TEXPOS",

  /**
   * incident
   */
  INC: "INC",

  /**
   * inform
   */
  INFRM: "INFRM",

  /**
   * invoice element
   */
  INVE: "INVE",

  /**
   * working list
   */
  LIST: "LIST",

  /**
   * monitoring program
   */
  MPROT: "MPROT",

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
   * care provision
   */
  PCPR: "PCPR",

  /**
   * encounter
   */
  ENC: "ENC",

  /**
   * policy
   */
  POLICY: "POLICY",

  /**
   * jurisdictional policy
   */
  JURISPOL: "JURISPOL",

  /**
   * organizational policy
   */
  ORGPOL: "ORGPOL",

  /**
   * scope of practice policy
   */
  SCOPOL: "SCOPOL",

  /**
   * standard of practice policy
   */
  STDPOL: "STDPOL",

  /**
   * procedure
   */
  PROC: "PROC",

  /**
   * substance administration
   */
  SBADM: "SBADM",

  /**
   * Substance Extraction
   */
  SBEXT: "SBEXT",

  /**
   * Specimen Collection
   */
  SPECCOLLECT: "SPECCOLLECT",

  /**
   * registration
   */
  REG: "REG",

  /**
   * review
   */
  REV: "REV",

  /**
   * specimen treatment
   */
  SPCTRT: "SPCTRT",

  /**
   * supply
   */
  SPLY: "SPLY",

  /**
   * diet
   */
  DIET: "DIET",

  /**
   * storage
   */
  STORE: "STORE",

  /**
   * Substitution
   */
  SUBST: "SUBST",

  /**
   * transfer
   */
  TRFR: "TRFR",

  /**
   * transportation
   */
  TRNS: "TRNS",

  /**
   * financial transaction
   */
  XACT: "XACT",

  /**
   * ActClassContainer
   */
  _ActClassContainer: "_ActClassContainer",

  /**
   * entry
   */
  ENTRY: "ENTRY",

  /**
   * organizer
   */
  ORGANIZER: "ORGANIZER",

  /**
   * ActClassContainer
   */
  _ActContainer: "_ActContainer",

  /**
   *
   */
  DOCCNTNT: "DOCCNTNT",

  /**
   *
   */
  DOCLIST: "DOCLIST",

  /**
   *
   */
  DOCLSTITM: "DOCLSTITM",

  /**
   *
   */
  DOCPARA: "DOCPARA",

  /**
   *
   */
  DOCTBL: "DOCTBL",

  /**
   *
   */
  LINKHTML: "LINKHTML",

  /**
   *
   */
  LOCALATTR: "LOCALATTR",

  /**
   *
   */
  LOCALMRKP: "LOCALMRKP",

  /**
   *
   */
  ordered: "ordered",

  /**
   *
   */
  REFR: "REFR",

  /**
   *
   */
  TBLCOL: "TBLCOL",

  /**
   *
   */
  TBLCOLGP: "TBLCOLGP",

  /**
   *
   */
  TBLDATA: "TBLDATA",

  /**
   *
   */
  TBLHDR: "TBLHDR",

  /**
   *
   */
  TBLROW: "TBLROW",

  /**
   *
   */
  tbody: "tbody",

  /**
   *
   */
  tfoot: "tfoot",

  /**
   *
   */
  thead: "thead",

  /**
   *
   */
  unordered: "unordered",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCode = typeof ActClassCode[keyof typeof ActClassCode];
