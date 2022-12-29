/**
 * The set of body locations to or through which a drug product may be administered.
 * http://terminology.hl7.org/ValueSet/v3-HumanSubstanceAdministrationSite
 */
export const HumanSubstanceAdministrationSiteCode = {
  /**
   * HumanSubstanceAdministrationSite
   */
  HumanSubstanceAdministrationSite: "_HumanSubstanceAdministrationSite",

  /**
   * bilateral ears
   */
  bilateralears: "BE",

  /**
   * bilateral nares
   */
  bilateralnares: "BN",

  /**
   * buttock
   */
  buttock: "BU",

  /**
   * left arm
   */
  leftarm: "LA",

  /**
   * left anterior chest
   */
  leftanteriorchest: "LAC",

  /**
   * left antecubital fossa
   */
  leftantecubitalfossa: "LACF",

  /**
   * left deltoid
   */
  leftdeltoid: "LD",

  /**
   * left ear
   */
  leftear: "LE",

  /**
   * left external jugular
   */
  leftexternaljugular: "LEJ",

  /**
   * left foot
   */
  leftfoot: "LF",

  /**
   * left gluteus medius
   */
  leftgluteusmedius: "LG",

  /**
   * left hand
   */
  lefthand: "LH",

  /**
   * left internal jugular
   */
  leftinternaljugular: "LIJ",

  /**
   * left lower abd quadrant
   */
  leftlowerabdquadrant: "LLAQ",

  /**
   * left lower forearm
   */
  leftlowerforearm: "LLFA",

  /**
   * left mid forearm
   */
  leftmidforearm: "LMFA",

  /**
   * left naris
   */
  leftnaris: "LN",

  /**
   * left posterior chest
   */
  leftposteriorchest: "LPC",

  /**
   * left subclavian
   */
  leftsubclavian: "LSC",

  /**
   * left thigh
   */
  leftthigh: "LT",

  /**
   * left upper arm
   */
  leftupperarm: "LUA",

  /**
   * left upper abd quadrant
   */
  leftupperabdquadrant: "LUAQ",

  /**
   * left upper forearm
   */
  leftupperforearm: "LUFA",

  /**
   * left ventragluteal
   */
  leftventragluteal: "LVG",

  /**
   * left vastus lateralis
   */
  leftvastuslateralis: "LVL",

  /**
   * right eye
   */
  righteye: "OD",

  /**
   * left eye
   */
  lefteye: "OS",

  /**
   * bilateral eyes
   */
  bilateraleyes: "OU",

  /**
   * perianal
   */
  perianal: "PA",

  /**
   * perineal
   */
  perineal: "PERIN",

  /**
   * right arm
   */
  rightarm: "RA",

  /**
   * right anterior chest
   */
  rightanteriorchest: "RAC",

  /**
   * right antecubital fossa
   */
  rightantecubitalfossa: "RACF",

  /**
   * right deltoid
   */
  rightdeltoid: "RD",

  /**
   * right ear
   */
  rightear: "RE",

  /**
   * right external jugular
   */
  rightexternaljugular: "REJ",

  /**
   * right foot
   */
  rightfoot: "RF",

  /**
   * right gluteus medius
   */
  rightgluteusmedius: "RG",

  /**
   * right hand
   */
  righthand: "RH",

  /**
   * right internal jugular
   */
  rightinternaljugular: "RIJ",

  /**
   * right lower abd quadrant
   */
  rightlowerabdquadrant: "RLAQ",

  /**
   * right lower forearm
   */
  rightlowerforearm: "RLFA",

  /**
   * right mid forearm
   */
  rightmidforearm: "RMFA",

  /**
   * right naris
   */
  rightnaris: "RN",

  /**
   * right posterior chest
   */
  rightposteriorchest: "RPC",

  /**
   * right subclavian
   */
  rightsubclavian: "RSC",

  /**
   * right thigh
   */
  rightthigh: "RT",

  /**
   * right upper arm
   */
  rightupperarm: "RUA",

  /**
   * right upper abd quadrant
   */
  rightupperabdquadrant: "RUAQ",

  /**
   * right upper forearm
   */
  rightupperforearm: "RUFA",

  /**
   * right ventragluteal
   */
  rightventragluteal: "RVG",

  /**
   * right vastus lateralis
   */
  rightvastuslateralis: "RVL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HumanSubstanceAdministrationSiteCode =
  typeof HumanSubstanceAdministrationSiteCode[keyof typeof HumanSubstanceAdministrationSiteCode];
