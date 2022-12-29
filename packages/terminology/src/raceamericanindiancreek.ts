/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCreek
 */
export const RaceAmericanIndianCreekCode = {
  /**
   * Creek
   */
  Creek: "1193-2",

  /**
   * Alabama Creek
   */
  AlabamaCreek: "1194-0",

  /**
   * Alabama Quassarte
   */
  AlabamaQuassarte: "1195-7",

  /**
   * Eastern Creek
   */
  EasternCreek: "1196-5",

  /**
   * Eastern Muscogee
   */
  EasternMuscogee: "1197-3",

  /**
   * Kialegee
   */
  Kialegee: "1198-1",

  /**
   * Lower Muscogee
   */
  LowerMuscogee: "1199-9",

  /**
   * Machis Lower Creek Indian
   */
  MachisLowerCreekIndian: "1200-5",

  /**
   * Poarch Band
   */
  PoarchBand: "1201-3",

  /**
   * Principal Creek Indian Nation
   */
  PrincipalCreekIndianNation: "1202-1",

  /**
   * Star Clan of Muscogee Creeks
   */
  StarClanofMuscogeeCreeks: "1203-9",

  /**
   * Thlopthlocco
   */
  Thlopthlocco: "1204-7",

  /**
   * Tuckabachee
   */
  Tuckabachee: "1205-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCreekCode =
  typeof RaceAmericanIndianCreekCode[keyof typeof RaceAmericanIndianCreekCode];
