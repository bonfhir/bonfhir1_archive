/**
 * Concepts that specify a body site from which a specimen is obtained.
 * http://terminology.hl7.org/ValueSet/v2-0163
 */
export const Hl7VSAdministriveSiteCode = {
  /**
   * Nebulized
   */
  LNB: "LNB",

  /**
   * Left Vastus Lateralis
   */
  LV: "LV",

  /**
   * Bilateral Ears
   */
  BE: "BE",

  /**
   * Bilateral Eyes
   */
  OU: "OU",

  /**
   * Bilateral Nares
   */
  BN: "BN",

  /**
   * Buttock
   */
  BU: "BU",

  /**
   * Chest Tube
   */
  CT: "CT",

  /**
   * Left Arm
   */
  LA: "LA",

  /**
   * Left Anterior Chest
   */
  LAC: "LAC",

  /**
   * Left Antecubital Fossa
   */
  LACF: "LACF",

  /**
   * Left Deltoid
   */
  LD: "LD",

  /**
   * Left Ear
   */
  LE: "LE",

  /**
   * Left External Jugular
   */
  LEJ: "LEJ",

  /**
   * Left Eye
   */
  OS: "OS",

  /**
   * Left Foot
   */
  LF: "LF",

  /**
   * Left Gluteus Medius
   */
  LG: "LG",

  /**
   * Left Hand
   */
  LH: "LH",

  /**
   * Left Internal Jugular
   */
  LIJ: "LIJ",

  /**
   * Left Lower Abd Quadrant
   */
  LLAQ: "LLAQ",

  /**
   * Left Lower Forearm
   */
  LLFA: "LLFA",

  /**
   * Left Mid Forearm
   */
  LMFA: "LMFA",

  /**
   * Left Naris
   */
  LN: "LN",

  /**
   * Left Posterior Chest
   */
  LPC: "LPC",

  /**
   * Left Subclavian
   */
  LSC: "LSC",

  /**
   * Left Thigh
   */
  LT: "LT",

  /**
   * Left Upper Arm
   */
  LUA: "LUA",

  /**
   * Left Upper Abd Quadrant
   */
  LUAQ: "LUAQ",

  /**
   * Left Upper Forearm
   */
  LUFA: "LUFA",

  /**
   * Left Ventragluteal
   */
  LVG: "LVG",

  /**
   * Left Vastus Lateralis
   */
  LVL: "LVL",

  /**
   * Nebulized
   */
  NB: "NB",

  /**
   * Perianal
   */
  PA: "PA",

  /**
   * Perineal
   */
  PERIN: "PERIN",

  /**
   * Right Arm
   */
  RA: "RA",

  /**
   * Right Anterior Chest
   */
  RAC: "RAC",

  /**
   * Right Antecubital Fossa
   */
  RACF: "RACF",

  /**
   * Right Deltoid
   */
  RD: "RD",

  /**
   * Right Ear
   */
  RE: "RE",

  /**
   * Right External Jugular
   */
  REJ: "REJ",

  /**
   * Right Eye
   */
  OD: "OD",

  /**
   * Right Foot
   */
  RF: "RF",

  /**
   * Right Gluteus Medius
   */
  RG: "RG",

  /**
   * Right Hand
   */
  RH: "RH",

  /**
   * Right Internal Jugular
   */
  RIJ: "RIJ",

  /**
   * Rt Lower Abd Quadrant
   */
  RLAQ: "RLAQ",

  /**
   * Right Lower Forearm
   */
  RLFA: "RLFA",

  /**
   * Right Mid Forearm
   */
  RMFA: "RMFA",

  /**
   * Right Naris
   */
  RN: "RN",

  /**
   * Right Posterior Chest
   */
  RPC: "RPC",

  /**
   * Right Subclavian
   */
  RSC: "RSC",

  /**
   * Right Thigh
   */
  RT: "RT",

  /**
   * Right Upper Arm
   */
  RUA: "RUA",

  /**
   * Right Upper Abd Quadrant
   */
  RUAQ: "RUAQ",

  /**
   * Right Upper Forearm
   */
  RUFA: "RUFA",

  /**
   * Right Vastus Lateralis
   */
  RVL: "RVL",

  /**
   * Right Ventragluteal
   */
  RVG: "RVG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdministriveSiteCode =
  typeof Hl7VSAdministriveSiteCode[keyof typeof Hl7VSAdministriveSiteCode];
