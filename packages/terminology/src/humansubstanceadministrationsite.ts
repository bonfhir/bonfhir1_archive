/**
 * The set of body locations to or through which a drug product may be administered.
 * http://terminology.hl7.org/ValueSet/v3-HumanSubstanceAdministrationSite
 */
export const HumanSubstanceAdministrationSiteCode = {
  /**
   * HumanSubstanceAdministrationSite
   */
  _HumanSubstanceAdministrationSite: "_HumanSubstanceAdministrationSite",

  /**
   * bilateral ears
   */
  BE: "BE",

  /**
   * bilateral nares
   */
  BN: "BN",

  /**
   * buttock
   */
  BU: "BU",

  /**
   * left arm
   */
  LA: "LA",

  /**
   * left anterior chest
   */
  LAC: "LAC",

  /**
   * left antecubital fossa
   */
  LACF: "LACF",

  /**
   * left deltoid
   */
  LD: "LD",

  /**
   * left ear
   */
  LE: "LE",

  /**
   * left external jugular
   */
  LEJ: "LEJ",

  /**
   * left foot
   */
  LF: "LF",

  /**
   * left gluteus medius
   */
  LG: "LG",

  /**
   * left hand
   */
  LH: "LH",

  /**
   * left internal jugular
   */
  LIJ: "LIJ",

  /**
   * left lower abd quadrant
   */
  LLAQ: "LLAQ",

  /**
   * left lower forearm
   */
  LLFA: "LLFA",

  /**
   * left mid forearm
   */
  LMFA: "LMFA",

  /**
   * left naris
   */
  LN: "LN",

  /**
   * left posterior chest
   */
  LPC: "LPC",

  /**
   * left subclavian
   */
  LSC: "LSC",

  /**
   * left thigh
   */
  LT: "LT",

  /**
   * left upper arm
   */
  LUA: "LUA",

  /**
   * left upper abd quadrant
   */
  LUAQ: "LUAQ",

  /**
   * left upper forearm
   */
  LUFA: "LUFA",

  /**
   * left ventragluteal
   */
  LVG: "LVG",

  /**
   * left vastus lateralis
   */
  LVL: "LVL",

  /**
   * right eye
   */
  OD: "OD",

  /**
   * left eye
   */
  OS: "OS",

  /**
   * bilateral eyes
   */
  OU: "OU",

  /**
   * perianal
   */
  PA: "PA",

  /**
   * perineal
   */
  PERIN: "PERIN",

  /**
   * right arm
   */
  RA: "RA",

  /**
   * right anterior chest
   */
  RAC: "RAC",

  /**
   * right antecubital fossa
   */
  RACF: "RACF",

  /**
   * right deltoid
   */
  RD: "RD",

  /**
   * right ear
   */
  RE: "RE",

  /**
   * right external jugular
   */
  REJ: "REJ",

  /**
   * right foot
   */
  RF: "RF",

  /**
   * right gluteus medius
   */
  RG: "RG",

  /**
   * right hand
   */
  RH: "RH",

  /**
   * right internal jugular
   */
  RIJ: "RIJ",

  /**
   * right lower abd quadrant
   */
  RLAQ: "RLAQ",

  /**
   * right lower forearm
   */
  RLFA: "RLFA",

  /**
   * right mid forearm
   */
  RMFA: "RMFA",

  /**
   * right naris
   */
  RN: "RN",

  /**
   * right posterior chest
   */
  RPC: "RPC",

  /**
   * right subclavian
   */
  RSC: "RSC",

  /**
   * right thigh
   */
  RT: "RT",

  /**
   * right upper arm
   */
  RUA: "RUA",

  /**
   * right upper abd quadrant
   */
  RUAQ: "RUAQ",

  /**
   * right upper forearm
   */
  RUFA: "RUFA",

  /**
   * right ventragluteal
   */
  RVG: "RVG",

  /**
   * right vastus lateralis
   */
  RVL: "RVL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HumanSubstanceAdministrationSiteCode =
  typeof HumanSubstanceAdministrationSiteCode[keyof typeof HumanSubstanceAdministrationSiteCode];
