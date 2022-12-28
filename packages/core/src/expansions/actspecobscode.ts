/**
 * Identifies the type of observation that is made about a specimen that may affect its processing, analysis or further result interpretation
 * http://terminology.hl7.org/ValueSet/v3-ActSpecObsCode
 */
export const ActSpecObsCodeCode = {
  /**
   * ActSpecObsArtBldCode
   */
  ARTBLD: "ARTBLD",

  /**
   * ActSpecObsDilutionCode
   */
  DILUTION: "DILUTION",

  /**
   * Auto-High Dilution
   */
  "AUTO-HIGH": "AUTO-HIGH",

  /**
   * Auto-Low Dilution
   */
  "AUTO-LOW": "AUTO-LOW",

  /**
   * Pre-Dilution
   */
  PRE: "PRE",

  /**
   * Rerun Dilution
   */
  RERUN: "RERUN",

  /**
   * ActSpecObsEvntfctsCode
   */
  EVNFCTS: "EVNFCTS",

  /**
   * ActSpecObsInterferenceCode
   */
  INTFR: "INTFR",

  /**
   * Fibrin
   */
  FIBRIN: "FIBRIN",

  /**
   * Hemolysis
   */
  HEMOLYSIS: "HEMOLYSIS",

  /**
   * Icterus
   */
  ICTERUS: "ICTERUS",

  /**
   * Lipemia
   */
  LIPEMIA: "LIPEMIA",

  /**
   * ActSpecObsVolumeCode
   */
  VOLUME: "VOLUME",

  /**
   * Available Volume
   */
  AVAILABLE: "AVAILABLE",

  /**
   * Consumption Volume
   */
  CONSUMPTION: "CONSUMPTION",

  /**
   * Current Volume
   */
  CURRENT: "CURRENT",

  /**
   * Initial Volume
   */
  INITIAL: "INITIAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecObsCodeCode =
  typeof ActSpecObsCodeCode[keyof typeof ActSpecObsCodeCode];
