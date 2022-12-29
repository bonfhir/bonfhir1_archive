/**
 * Identifies the type of observation that is made about a specimen that may affect its processing, analysis or further result interpretation
 * http://terminology.hl7.org/ValueSet/v3-ActSpecObsCode
 */
export const ActSpecObsCodeCode = {
  /**
   * ActSpecObsArtBldCode
   */
  ActSpecObsArtBldCode: "ARTBLD",

  /**
   * ActSpecObsDilutionCode
   */
  ActSpecObsDilutionCode: "DILUTION",

  /**
   * Auto-High Dilution
   */
  AutoHighDilution: "AUTO-HIGH",

  /**
   * Auto-Low Dilution
   */
  AutoLowDilution: "AUTO-LOW",

  /**
   * Pre-Dilution
   */
  PreDilution: "PRE",

  /**
   * Rerun Dilution
   */
  RerunDilution: "RERUN",

  /**
   * ActSpecObsEvntfctsCode
   */
  ActSpecObsEvntfctsCode: "EVNFCTS",

  /**
   * ActSpecObsInterferenceCode
   */
  ActSpecObsInterferenceCode: "INTFR",

  /**
   * Fibrin
   */
  Fibrin: "FIBRIN",

  /**
   * Hemolysis
   */
  Hemolysis: "HEMOLYSIS",

  /**
   * Icterus
   */
  Icterus: "ICTERUS",

  /**
   * Lipemia
   */
  Lipemia: "LIPEMIA",

  /**
   * ActSpecObsVolumeCode
   */
  ActSpecObsVolumeCode: "VOLUME",

  /**
   * Available Volume
   */
  AvailableVolume: "AVAILABLE",

  /**
   * Consumption Volume
   */
  ConsumptionVolume: "CONSUMPTION",

  /**
   * Current Volume
   */
  CurrentVolume: "CURRENT",

  /**
   * Initial Volume
   */
  InitialVolume: "INITIAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecObsCodeCode =
  typeof ActSpecObsCodeCode[keyof typeof ActSpecObsCodeCode];
