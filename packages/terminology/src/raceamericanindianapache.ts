/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianApache
 */
export const RaceAmericanIndianApacheCode = {
  /**
   * Apache
   */
  Apache: "1010-8",

  /**
   * Chiricahua
   */
  Chiricahua: "1011-6",

  /**
   * Fort Sill Apache
   */
  FortSillApache: "1012-4",

  /**
   * Jicarilla Apache
   */
  JicarillaApache: "1013-2",

  /**
   * Lipan Apache
   */
  LipanApache: "1014-0",

  /**
   * Mescalero Apache
   */
  MescaleroApache: "1015-7",

  /**
   * Oklahoma Apache
   */
  OklahomaApache: "1016-5",

  /**
   * Payson Apache
   */
  PaysonApache: "1017-3",

  /**
   * San Carlos Apache
   */
  SanCarlosApache: "1018-1",

  /**
   * White Mountain Apache
   */
  WhiteMountainApache: "1019-9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianApacheCode =
  typeof RaceAmericanIndianApacheCode[keyof typeof RaceAmericanIndianApacheCode];
