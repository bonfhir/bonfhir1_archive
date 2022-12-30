/**
 * Instillation
 * http://terminology.hl7.org/ValueSet/v3-Instillation
 */
export const InstillationCode = {
  /**
   * Instillation, cecostomy
   */
  CECINSTL: "CECINSTL",

  /**
   * Instillation, enteral feeding tube
   */
  EFT: "EFT",

  /**
   * Instillation, enteral
   */
  ENTINSTL: "ENTINSTL",

  /**
   * Instillation, gastrostomy tube
   */
  GT: "GT",

  /**
   * Instillation, nasogastric tube
   */
  NGT: "NGT",

  /**
   * Instillation, orogastric tube
   */
  OGT: "OGT",

  /**
   * Instillation, urinary catheter
   */
  BLADINSTL: "BLADINSTL",

  /**
   * Instillation, continuous ambulatory peritoneal dialysis port
   */
  CAPDINSTL: "CAPDINSTL",

  /**
   * Instillation, chest tube
   */
  CTINSTL: "CTINSTL",

  /**
   * Instillation, endotracheal tube
   */
  ETINSTL: "ETINSTL",

  /**
   * Instillation, gastro-jejunostomy tube
   */
  GJT: "GJT",

  /**
   * Instillation, intrabronchial
   */
  IBRONCHINSTIL: "IBRONCHINSTIL",

  /**
   * Instillation, intraduodenal
   */
  IDUODINSTIL: "IDUODINSTIL",

  /**
   * Instillation, intraesophageal
   */
  IESOPHINSTIL: "IESOPHINSTIL",

  /**
   * Instillation, intragastric
   */
  IGASTINSTIL: "IGASTINSTIL",

  /**
   * Instillation, intraileal
   */
  IILEALINJ: "IILEALINJ",

  /**
   * Instillation, intraocular
   */
  IOINSTL: "IOINSTL",

  /**
   * Instillation, intrasinal
   */
  ISININSTIL: "ISININSTIL",

  /**
   * Instillation, intratracheal
   */
  ITRACHINSTIL: "ITRACHINSTIL",

  /**
   * Instillation, intrauterine
   */
  IUINSTL: "IUINSTL",

  /**
   * Instillation, jejunostomy tube
   */
  JJTINSTL: "JJTINSTL",

  /**
   * Instillation, laryngeal
   */
  LARYNGINSTIL: "LARYNGINSTIL",

  /**
   * Instillation, nasal
   */
  NASALINSTIL: "NASALINSTIL",

  /**
   * Instillation, nasogastric
   */
  NASOGASINSTIL: "NASOGASINSTIL",

  /**
   * Instillation, nasotracheal tube
   */
  NTT: "NTT",

  /**
   * Instillation, orojejunum tube
   */
  OJJ: "OJJ",

  /**
   * Instillation, otic
   */
  OT: "OT",

  /**
   * Instillation, peritoneal dialysis port
   */
  PDPINSTL: "PDPINSTL",

  /**
   * Instillation, paranasal sinuses
   */
  PNSINSTL: "PNSINSTL",

  /**
   * Instillation, rectal
   */
  RECINSTL: "RECINSTL",

  /**
   * Instillation, rectal tube
   */
  RECTINSTL: "RECTINSTL",

  /**
   * Instillation, sinus, unspecified
   */
  SININSTIL: "SININSTIL",

  /**
   * Instillation, soft tissue
   */
  SOFTISINSTIL: "SOFTISINSTIL",

  /**
   * Instillation, tracheostomy
   */
  TRACHINSTL: "TRACHINSTL",

  /**
   * Instillation, transtympanic
   */
  TRTYMPINSTIL: "TRTYMPINSTIL",

  /**
   * instillation, urethral
   */
  URETHINSTL: "URETHINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InstillationCode =
  typeof InstillationCode[keyof typeof InstillationCode];
