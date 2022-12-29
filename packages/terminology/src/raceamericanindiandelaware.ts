/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianDelaware
 */
export const RaceAmericanIndianDelawareCode = {
  /**
   * Delaware
   */
  Delaware: "1214-6",

  /**
   * Eastern Delaware
   */
  EasternDelaware: "1215-3",

  /**
   * Lenni-Lenape
   */
  LenniLenape: "1216-1",

  /**
   * Munsee
   */
  Munsee: "1217-9",

  /**
   * Oklahoma Delaware
   */
  OklahomaDelaware: "1218-7",

  /**
   * Rampough Mountain
   */
  RampoughMountain: "1219-5",

  /**
   * Sand Hill
   */
  SandHill: "1220-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianDelawareCode =
  typeof RaceAmericanIndianDelawareCode[keyof typeof RaceAmericanIndianDelawareCode];
