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
  act: "ACT",

  /**
   * record organizer
   */
  recordorganizer: "_ActClassRecordOrganizer",

  /**
   * composition
   */
  composition: "COMPOSITION",

  /**
   * document
   */
  document: "DOC",

  /**
   * clinical document
   */
  clinicaldocument: "DOCCLIN",

  /**
   * CDA Level One clinical document
   */
  CDALevelOneclinicaldocument: "CDALVLONE",

  /**
   * record container
   */
  recordcontainer: "CONTAINER",

  /**
   * category
   */
  category: "CATEGORY",

  /**
   * document body
   */
  documentbody: "DOCBODY",

  /**
   * document section
   */
  documentsection: "DOCSECT",

  /**
   * topic
   */
  topic: "TOPIC",

  /**
   * extract
   */
  extract: "EXTRACT",

  /**
   * electronic health record
   */
  electronichealthrecord: "EHR",

  /**
   * folder
   */
  folder: "FOLDER",

  /**
   * grouper
   */
  grouper: "GROUPER",

  /**
   * Cluster
   */
  Cluster: "CLUSTER",

  /**
   * accommodation
   */
  accommodation: "ACCM",

  /**
   * account
   */
  account: "ACCT",

  /**
   * accession
   */
  accession: "ACSN",

  /**
   * financial adjudication
   */
  financialadjudication: "ADJUD",

  /**
   * control act
   */
  controlact: "CACT",

  /**
   * action
   */
  action: "ACTN",

  /**
   * information
   */
  information: "INFO",

  /**
   * state transition control
   */
  statetransitioncontrol: "STC",

  /**
   * contract
   */
  contract: "CNTRCT",

  /**
   * financial contract
   */
  financialcontract: "FCNTRCT",

  /**
   * coverage
   */
  coverage: "COV",

  /**
   * concern
   */
  concern: "CONC",

  /**
   * public health case
   */
  publichealthcase: "HCASE",

  /**
   * outbreak
   */
  outbreak: "OUTBR",

  /**
   * consent
   */
  consent: "CONS",

  /**
   * container registration
   */
  containerregistration: "CONTREG",

  /**
   * clinical trial timepoint event
   */
  clinicaltrialtimepointevent: "CTTEVENT",

  /**
   * disciplinary action
   */
  disciplinaryaction: "DISPACT",

  /**
   * exposure
   */
  exposure: "EXPOS",

  /**
   * acquisition exposure
   */
  acquisitionexposure: "AEXPOS",

  /**
   * transmission exposure
   */
  transmissionexposure: "TEXPOS",

  /**
   * incident
   */
  incident: "INC",

  /**
   * inform
   */
  inform: "INFRM",

  /**
   * invoice element
   */
  invoiceelement: "INVE",

  /**
   * working list
   */
  workinglist: "LIST",

  /**
   * monitoring program
   */
  monitoringprogram: "MPROT",

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
   * care provision
   */
  careprovision: "PCPR",

  /**
   * encounter
   */
  encounter: "ENC",

  /**
   * policy
   */
  policy: "POLICY",

  /**
   * jurisdictional policy
   */
  jurisdictionalpolicy: "JURISPOL",

  /**
   * organizational policy
   */
  organizationalpolicy: "ORGPOL",

  /**
   * scope of practice policy
   */
  scopeofpracticepolicy: "SCOPOL",

  /**
   * standard of practice policy
   */
  standardofpracticepolicy: "STDPOL",

  /**
   * procedure
   */
  procedure: "PROC",

  /**
   * substance administration
   */
  substanceadministration: "SBADM",

  /**
   * Substance Extraction
   */
  SubstanceExtraction: "SBEXT",

  /**
   * Specimen Collection
   */
  SpecimenCollection: "SPECCOLLECT",

  /**
   * registration
   */
  registration: "REG",

  /**
   * review
   */
  review: "REV",

  /**
   * specimen treatment
   */
  specimentreatment: "SPCTRT",

  /**
   * supply
   */
  supply: "SPLY",

  /**
   * diet
   */
  diet: "DIET",

  /**
   * storage
   */
  storage: "STORE",

  /**
   * Substitution
   */
  Substitution: "SUBST",

  /**
   * transfer
   */
  transfer: "TRFR",

  /**
   * transportation
   */
  transportation: "TRNS",

  /**
   * financial transaction
   */
  financialtransaction: "XACT",

  /**
   * ActClassContainer
   */
  ActClassContainer: "_ActClassContainer",

  /**
   * entry
   */
  entry: "ENTRY",

  /**
   * organizer
   */
  organizer: "ORGANIZER",

  /**
   * ActClassContainer
   */
  ActClassContainer: "_ActContainer",

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
