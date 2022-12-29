/**
 * Instillation
 * http://terminology.hl7.org/ValueSet/v3-Instillation
 */
export const InstillationCode = {
  /**
   * Instillation, cecostomy
   */
  Instillationcecostomy: "CECINSTL",

  /**
   * Instillation, enteral feeding tube
   */
  Instillationenteralfeedingtube: "EFT",

  /**
   * Instillation, enteral
   */
  Instillationenteral: "ENTINSTL",

  /**
   * Instillation, gastrostomy tube
   */
  Instillationgastrostomytube: "GT",

  /**
   * Instillation, nasogastric tube
   */
  Instillationnasogastrictube: "NGT",

  /**
   * Instillation, orogastric tube
   */
  Instillationorogastrictube: "OGT",

  /**
   * Instillation, urinary catheter
   */
  Instillationurinarycatheter: "BLADINSTL",

  /**
   * Instillation, continuous ambulatory peritoneal dialysis port
   */
  Instillationcontinuousambulatoryperitonealdialysisport: "CAPDINSTL",

  /**
   * Instillation, chest tube
   */
  Instillationchesttube: "CTINSTL",

  /**
   * Instillation, endotracheal tube
   */
  Instillationendotrachealtube: "ETINSTL",

  /**
   * Instillation, gastro-jejunostomy tube
   */
  Instillationgastrojejunostomytube: "GJT",

  /**
   * Instillation, intrabronchial
   */
  Instillationintrabronchial: "IBRONCHINSTIL",

  /**
   * Instillation, intraduodenal
   */
  Instillationintraduodenal: "IDUODINSTIL",

  /**
   * Instillation, intraesophageal
   */
  Instillationintraesophageal: "IESOPHINSTIL",

  /**
   * Instillation, intragastric
   */
  Instillationintragastric: "IGASTINSTIL",

  /**
   * Instillation, intraileal
   */
  Instillationintraileal: "IILEALINJ",

  /**
   * Instillation, intraocular
   */
  Instillationintraocular: "IOINSTL",

  /**
   * Instillation, intrasinal
   */
  Instillationintrasinal: "ISININSTIL",

  /**
   * Instillation, intratracheal
   */
  Instillationintratracheal: "ITRACHINSTIL",

  /**
   * Instillation, intrauterine
   */
  Instillationintrauterine: "IUINSTL",

  /**
   * Instillation, jejunostomy tube
   */
  Instillationjejunostomytube: "JJTINSTL",

  /**
   * Instillation, laryngeal
   */
  Instillationlaryngeal: "LARYNGINSTIL",

  /**
   * Instillation, nasal
   */
  Instillationnasal: "NASALINSTIL",

  /**
   * Instillation, nasogastric
   */
  Instillationnasogastric: "NASOGASINSTIL",

  /**
   * Instillation, nasotracheal tube
   */
  Instillationnasotrachealtube: "NTT",

  /**
   * Instillation, orojejunum tube
   */
  Instillationorojejunumtube: "OJJ",

  /**
   * Instillation, otic
   */
  Instillationotic: "OT",

  /**
   * Instillation, peritoneal dialysis port
   */
  Instillationperitonealdialysisport: "PDPINSTL",

  /**
   * Instillation, paranasal sinuses
   */
  Instillationparanasalsinuses: "PNSINSTL",

  /**
   * Instillation, rectal
   */
  Instillationrectal: "RECINSTL",

  /**
   * Instillation, rectal tube
   */
  Instillationrectaltube: "RECTINSTL",

  /**
   * Instillation, sinus, unspecified
   */
  Instillationsinusunspecified: "SININSTIL",

  /**
   * Instillation, soft tissue
   */
  Instillationsofttissue: "SOFTISINSTIL",

  /**
   * Instillation, tracheostomy
   */
  Instillationtracheostomy: "TRACHINSTL",

  /**
   * Instillation, transtympanic
   */
  Instillationtranstympanic: "TRTYMPINSTIL",

  /**
   * instillation, urethral
   */
  instillationurethral: "URETHINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InstillationCode =
  typeof InstillationCode[keyof typeof InstillationCode];
