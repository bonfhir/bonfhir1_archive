/**
 * Topical application
 * http://terminology.hl7.org/ValueSet/v3-TopicalApplication
 */
export const TopicalApplicationCode = {
  /**
   * Topical application, soaked dressing
   */
  DRESS: "DRESS",

  /**
   * Topical application, iontophoresis
   */
  IONTO: "IONTO",

  /**
   * Topical application, swab
   */
  SWAB: "SWAB",

  /**
   * Topical
   */
  TOPICAL: "TOPICAL",

  /**
   * Topical application, buccal
   */
  BUC: "BUC",

  /**
   * Topical application, cervical
   */
  CERV: "CERV",

  /**
   * Topical application, dental
   */
  DEN: "DEN",

  /**
   * Topical application, gingival
   */
  GIN: "GIN",

  /**
   * Topical application, hair
   */
  HAIR: "HAIR",

  /**
   * Topical application, intracorneal
   */
  ICORNTA: "ICORNTA",

  /**
   * Topical application, intracoronal (dental)
   */
  ICORONTA: "ICORONTA",

  /**
   * Topical application, intraesophageal
   */
  IESOPHTA: "IESOPHTA",

  /**
   * Topical application, intraileal
   */
  IILEALTA: "IILEALTA",

  /**
   * Topical application, intralesional
   */
  ILTOP: "ILTOP",

  /**
   * Topical application, intraluminal
   */
  ILUMTA: "ILUMTA",

  /**
   * Topical application, intraocular
   */
  IOTOP: "IOTOP",

  /**
   * Topical application, laryngeal
   */
  LARYNGTA: "LARYNGTA",

  /**
   * Topical application, mucous membrane
   */
  MUC: "MUC",

  /**
   * Topical application, nail
   */
  NAIL: "NAIL",

  /**
   * Topical application, nasal
   */
  NASAL: "NASAL",

  /**
   * Topical application, ophthalmic
   */
  OPTHALTA: "OPTHALTA",

  /**
   * Topical application, oral
   */
  ORALTA: "ORALTA",

  /**
   * Topical application, oromucosal
   */
  ORMUC: "ORMUC",

  /**
   * Topical application, oropharyngeal
   */
  OROPHARTA: "OROPHARTA",

  /**
   * Topical application, perianal
   */
  PERIANAL: "PERIANAL",

  /**
   * Topical application, perineal
   */
  PERINEAL: "PERINEAL",

  /**
   * Topical application, periodontal
   */
  PDONTTA: "PDONTTA",

  /**
   * Topical application, rectal
   */
  RECTAL: "RECTAL",

  /**
   * Topical application, scalp
   */
  SCALP: "SCALP",

  /**
   * Occlusive dressing technique
   */
  OCDRESTA: "OCDRESTA",

  /**
   * Topical application, skin
   */
  SKIN: "SKIN",

  /**
   * Subconjunctival
   */
  SUBCONJTA: "SUBCONJTA",

  /**
   * Topical application, transmucosal
   */
  TMUCTA: "TMUCTA",

  /**
   * Topical application, vaginal
   */
  VAGINS: "VAGINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TopicalApplicationCode =
  typeof TopicalApplicationCode[keyof typeof TopicalApplicationCode];
