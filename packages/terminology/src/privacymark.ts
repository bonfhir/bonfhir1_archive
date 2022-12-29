/**
 * Codes used for human readable marks indicating, e.g., the level of confidentiality protection, an authorized compartment, the integrity, or the handling instruction required by applicable policy. Such markings must be displayed as directed by applicable policy on electronically rendered information content and any electronic transmittal envelope or container; or on hardcopy information and any physical transmittal envelope or container.

Purpose: Supports the selection of the entire PrivacyMark value set with head code for e.g., rules engine policy set purposes.
 * http://terminology.hl7.org/ValueSet/v3-PrivacyMark
 */
export const PrivacyMarkCode = {
  /**
   * privacy mark
   */
  privacymark: "PrivacyMark",

  /**
   * ControlledUnclassifiedInformation
   */
  ControlledUnclassifiedInformation: "ControlledUnclassifiedInformation",

  /**
   * CONTROLLED
   */
  CONTROLLED: "CONTROLLED",

  /**
   * CUI
   */
  CUI: "CUI",

  /**
   * CUI//HLTH
   */
  CUIHLTH: "CUIHLTH",

  /**
   * (CUI//HLTH)
   */
  CUIHLTH: "CUIHLTHP",

  /**
   * (CUI)
   */
  CUI: "CUIP",

  /**
   * CUI//PRVCY
   */
  CUIPRVCY: "CUIPRVCY",

  /**
   * (CUI//PRVCY)
   */
  CUIPRVCY: "CUIPRVCYP",

  /**
   * CUI//SP-HLTH
   */
  CUISPHLTH: "CUISP-HLTH",

  /**
   * (CUI//SP-HLTH)
   */
  CUISPHLTH: "CUISP-HLTHP",

  /**
   * CUI//SP-PRVCY
   */
  CUISPPRVCY: "CUISP-PRVCY",

  /**
   * (CUI//SP-PRVCY)
   */
  CUISPPRVCY: "CUISP-PRVCYP",

  /**
   * (U)
   */
  U: "UUI",

  /**
   * Security Label Mark
   */
  SecurityLabelMark: "SecurityLabelMark",

  /**
   * confidential mark
   */
  confidentialmark: "ConfidentialMark",

  /**
   * copy of original mark
   */
  copyoforiginalmark: "COPYMark",

  /**
   * deliver only to addressee mark
   */
  deliveronlytoaddresseemark: "DeliverToAddresseeOnlyMark",

  /**
   * prohibition against redisclosure mark
   */
  prohibitionagainstredisclosuremark: "RedisclosureProhibitionMark",

  /**
   * restricted confidentiality mark
   */
  restrictedconfidentialitymark: "RestrictedConfidentialityMark",

  /**
   * Draft Mark
   */
  DraftMark: "DRAFTMark",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PrivacyMarkCode =
  typeof PrivacyMarkCode[keyof typeof PrivacyMarkCode];
