/**
 * Concepts that specify a body site from which a specimen is obtained.
 * http://terminology.hl7.org/ValueSet/v2-0163
 */
export const Hl7VSAdministriveSiteCode = {
  /**
   * Nebulized
   */
  Nebulized: "LNB",

  /**
   * Left Vastus Lateralis
   */
  LeftVastusLateralis: "LV",

  /**
   * Bilateral Ears
   */
  BilateralEars: "BE",

  /**
   * Bilateral Eyes
   */
  BilateralEyes: "OU",

  /**
   * Bilateral Nares
   */
  BilateralNares: "BN",

  /**
   * Buttock
   */
  Buttock: "BU",

  /**
   * Chest Tube
   */
  ChestTube: "CT",

  /**
   * Left Arm
   */
  LeftArm: "LA",

  /**
   * Left Anterior Chest
   */
  LeftAnteriorChest: "LAC",

  /**
   * Left Antecubital Fossa
   */
  LeftAntecubitalFossa: "LACF",

  /**
   * Left Deltoid
   */
  LeftDeltoid: "LD",

  /**
   * Left Ear
   */
  LeftEar: "LE",

  /**
   * Left External Jugular
   */
  LeftExternalJugular: "LEJ",

  /**
   * Left Eye
   */
  LeftEye: "OS",

  /**
   * Left Foot
   */
  LeftFoot: "LF",

  /**
   * Left Gluteus Medius
   */
  LeftGluteusMedius: "LG",

  /**
   * Left Hand
   */
  LeftHand: "LH",

  /**
   * Left Internal Jugular
   */
  LeftInternalJugular: "LIJ",

  /**
   * Left Lower Abd Quadrant
   */
  LeftLowerAbdQuadrant: "LLAQ",

  /**
   * Left Lower Forearm
   */
  LeftLowerForearm: "LLFA",

  /**
   * Left Mid Forearm
   */
  LeftMidForearm: "LMFA",

  /**
   * Left Naris
   */
  LeftNaris: "LN",

  /**
   * Left Posterior Chest
   */
  LeftPosteriorChest: "LPC",

  /**
   * Left Subclavian
   */
  LeftSubclavian: "LSC",

  /**
   * Left Thigh
   */
  LeftThigh: "LT",

  /**
   * Left Upper Arm
   */
  LeftUpperArm: "LUA",

  /**
   * Left Upper Abd Quadrant
   */
  LeftUpperAbdQuadrant: "LUAQ",

  /**
   * Left Upper Forearm
   */
  LeftUpperForearm: "LUFA",

  /**
   * Left Ventragluteal
   */
  LeftVentragluteal: "LVG",

  /**
   * Left Vastus Lateralis
   */
  LeftVastusLateralis: "LVL",

  /**
   * Nebulized
   */
  Nebulized: "NB",

  /**
   * Perianal
   */
  Perianal: "PA",

  /**
   * Perineal
   */
  Perineal: "PERIN",

  /**
   * Right Arm
   */
  RightArm: "RA",

  /**
   * Right Anterior Chest
   */
  RightAnteriorChest: "RAC",

  /**
   * Right Antecubital Fossa
   */
  RightAntecubitalFossa: "RACF",

  /**
   * Right Deltoid
   */
  RightDeltoid: "RD",

  /**
   * Right Ear
   */
  RightEar: "RE",

  /**
   * Right External Jugular
   */
  RightExternalJugular: "REJ",

  /**
   * Right Eye
   */
  RightEye: "OD",

  /**
   * Right Foot
   */
  RightFoot: "RF",

  /**
   * Right Gluteus Medius
   */
  RightGluteusMedius: "RG",

  /**
   * Right Hand
   */
  RightHand: "RH",

  /**
   * Right Internal Jugular
   */
  RightInternalJugular: "RIJ",

  /**
   * Rt Lower Abd Quadrant
   */
  RtLowerAbdQuadrant: "RLAQ",

  /**
   * Right Lower Forearm
   */
  RightLowerForearm: "RLFA",

  /**
   * Right Mid Forearm
   */
  RightMidForearm: "RMFA",

  /**
   * Right Naris
   */
  RightNaris: "RN",

  /**
   * Right Posterior Chest
   */
  RightPosteriorChest: "RPC",

  /**
   * Right Subclavian
   */
  RightSubclavian: "RSC",

  /**
   * Right Thigh
   */
  RightThigh: "RT",

  /**
   * Right Upper Arm
   */
  RightUpperArm: "RUA",

  /**
   * Right Upper Abd Quadrant
   */
  RightUpperAbdQuadrant: "RUAQ",

  /**
   * Right Upper Forearm
   */
  RightUpperForearm: "RUFA",

  /**
   * Right Vastus Lateralis
   */
  RightVastusLateralis: "RVL",

  /**
   * Right Ventragluteal
   */
  RightVentragluteal: "RVG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdministriveSiteCode =
  typeof Hl7VSAdministriveSiteCode[keyof typeof Hl7VSAdministriveSiteCode];
