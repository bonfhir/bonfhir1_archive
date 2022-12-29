/**
 * The set of Act class codes allowed for the ACT class clone in the CDA Clinical Statement model. The scope of this value set are those Act class codes not otherwise covered by specific classes in the CDA Clinical Statement model and required to enable representation of Clinical Statement in CDA.
 * http://terminology.hl7.org/ValueSet/v3-xActClassDocumentEntryAct
 */
export const XActClassDocumentEntryActCode = {
  /**
   * accommodation
   */
  accommodation: "ACCM",

  /**
   * accession
   */
  accession: "ACSN",

  /**
   * act
   */
  act: "ACT",

  /**
   * acquisition exposure
   */
  acquisitionexposure: "AEXPOS",

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
   * incident
   */
  incident: "INC",

  /**
   * inform
   */
  inform: "INFRM",

  /**
   * working list
   */
  workinglist: "LIST",

  /**
   * monitoring program
   */
  monitoringprogram: "MPROT",

  /**
   * care provision
   */
  careprovision: "PCPR",

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
   * storage
   */
  storage: "STORE",

  /**
   * transmission exposure
   */
  transmissionexposure: "TEXPOS",

  /**
   * transfer
   */
  transfer: "TRFR",

  /**
   * transportation
   */
  transportation: "TRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActClassDocumentEntryActCode =
  typeof XActClassDocumentEntryActCode[keyof typeof XActClassDocumentEntryActCode];
