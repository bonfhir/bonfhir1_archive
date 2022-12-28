/**
 * The set of Act class codes allowed for the ACT class clone in the CDA Clinical Statement model. The scope of this value set are those Act class codes not otherwise covered by specific classes in the CDA Clinical Statement model and required to enable representation of Clinical Statement in CDA.
 * http://terminology.hl7.org/ValueSet/v3-xActClassDocumentEntryAct
 */
export const XActClassDocumentEntryActCode = {
  /**
   * accommodation
   */
  ACCM: "ACCM",

  /**
   * accession
   */
  ACSN: "ACSN",

  /**
   * act
   */
  ACT: "ACT",

  /**
   * acquisition exposure
   */
  AEXPOS: "AEXPOS",

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
   * incident
   */
  INC: "INC",

  /**
   * inform
   */
  INFRM: "INFRM",

  /**
   * working list
   */
  LIST: "LIST",

  /**
   * monitoring program
   */
  MPROT: "MPROT",

  /**
   * care provision
   */
  PCPR: "PCPR",

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
   * storage
   */
  STORE: "STORE",

  /**
   * transmission exposure
   */
  TEXPOS: "TEXPOS",

  /**
   * transfer
   */
  TRFR: "TRFR",

  /**
   * transportation
   */
  TRNS: "TRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActClassDocumentEntryActCode =
  typeof XActClassDocumentEntryActCode[keyof typeof XActClassDocumentEntryActCode];
