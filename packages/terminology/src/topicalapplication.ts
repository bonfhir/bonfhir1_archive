/**
 * Topical application
 * http://terminology.hl7.org/ValueSet/v3-TopicalApplication
 */
export const TopicalApplicationCode = {
  /**
   * Topical application, soaked dressing
   */
  Topicalapplicationsoakeddressing: "DRESS",

  /**
   * Topical application, iontophoresis
   */
  Topicalapplicationiontophoresis: "IONTO",

  /**
   * Topical application, swab
   */
  Topicalapplicationswab: "SWAB",

  /**
   * Topical
   */
  Topical: "TOPICAL",

  /**
   * Topical application, buccal
   */
  Topicalapplicationbuccal: "BUC",

  /**
   * Topical application, cervical
   */
  Topicalapplicationcervical: "CERV",

  /**
   * Topical application, dental
   */
  Topicalapplicationdental: "DEN",

  /**
   * Topical application, gingival
   */
  Topicalapplicationgingival: "GIN",

  /**
   * Topical application, hair
   */
  Topicalapplicationhair: "HAIR",

  /**
   * Topical application, intracorneal
   */
  Topicalapplicationintracorneal: "ICORNTA",

  /**
   * Topical application, intracoronal (dental)
   */
  Topicalapplicationintracoronaldental: "ICORONTA",

  /**
   * Topical application, intraesophageal
   */
  Topicalapplicationintraesophageal: "IESOPHTA",

  /**
   * Topical application, intraileal
   */
  Topicalapplicationintraileal: "IILEALTA",

  /**
   * Topical application, intralesional
   */
  Topicalapplicationintralesional: "ILTOP",

  /**
   * Topical application, intraluminal
   */
  Topicalapplicationintraluminal: "ILUMTA",

  /**
   * Topical application, intraocular
   */
  Topicalapplicationintraocular: "IOTOP",

  /**
   * Topical application, laryngeal
   */
  Topicalapplicationlaryngeal: "LARYNGTA",

  /**
   * Topical application, mucous membrane
   */
  Topicalapplicationmucousmembrane: "MUC",

  /**
   * Topical application, nail
   */
  Topicalapplicationnail: "NAIL",

  /**
   * Topical application, nasal
   */
  Topicalapplicationnasal: "NASAL",

  /**
   * Topical application, ophthalmic
   */
  Topicalapplicationophthalmic: "OPTHALTA",

  /**
   * Topical application, oral
   */
  Topicalapplicationoral: "ORALTA",

  /**
   * Topical application, oromucosal
   */
  Topicalapplicationoromucosal: "ORMUC",

  /**
   * Topical application, oropharyngeal
   */
  Topicalapplicationoropharyngeal: "OROPHARTA",

  /**
   * Topical application, perianal
   */
  Topicalapplicationperianal: "PERIANAL",

  /**
   * Topical application, perineal
   */
  Topicalapplicationperineal: "PERINEAL",

  /**
   * Topical application, periodontal
   */
  Topicalapplicationperiodontal: "PDONTTA",

  /**
   * Topical application, rectal
   */
  Topicalapplicationrectal: "RECTAL",

  /**
   * Topical application, scalp
   */
  Topicalapplicationscalp: "SCALP",

  /**
   * Occlusive dressing technique
   */
  Occlusivedressingtechnique: "OCDRESTA",

  /**
   * Topical application, skin
   */
  Topicalapplicationskin: "SKIN",

  /**
   * Subconjunctival
   */
  Subconjunctival: "SUBCONJTA",

  /**
   * Topical application, transmucosal
   */
  Topicalapplicationtransmucosal: "TMUCTA",

  /**
   * Topical application, vaginal
   */
  Topicalapplicationvaginal: "VAGINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TopicalApplicationCode =
  typeof TopicalApplicationCode[keyof typeof TopicalApplicationCode];
