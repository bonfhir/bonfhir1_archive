/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianChippewa
 */
export const RaceAmericanIndianChippewaCode = {
  /**
   * Chippewa
   */
  Chippewa: "1123-9",

  /**
   * Bad River
   */
  BadRiver: "1124-7",

  /**
   * Bay Mills Chippewa
   */
  BayMillsChippewa: "1125-4",

  /**
   * Bois Forte
   */
  BoisForte: "1126-2",

  /**
   * Burt Lake Chippewa
   */
  BurtLakeChippewa: "1127-0",

  /**
   * Fond du Lac
   */
  FondduLac: "1128-8",

  /**
   * Grand Portage
   */
  GrandPortage: "1129-6",

  /**
   * Grand Traverse Band of Ottawa-Chippewa
   */
  GrandTraverseBandofOttawaChippewa: "1130-4",

  /**
   * Keweenaw
   */
  Keweenaw: "1131-2",

  /**
   * Lac Courte Oreilles
   */
  LacCourteOreilles: "1132-0",

  /**
   * Lac du Flambeau
   */
  LacduFlambeau: "1133-8",

  /**
   * Lac Vieux Desert Chippewa
   */
  LacVieuxDesertChippewa: "1134-6",

  /**
   * Lake Superior
   */
  LakeSuperior: "1135-3",

  /**
   * Leech Lake
   */
  LeechLake: "1136-1",

  /**
   * Little Shell Chippewa
   */
  LittleShellChippewa: "1137-9",

  /**
   * Mille Lacs
   */
  MilleLacs: "1138-7",

  /**
   * Minnesota Chippewa
   */
  MinnesotaChippewa: "1139-5",

  /**
   * Ontonagon
   */
  Ontonagon: "1140-3",

  /**
   * Red Cliff Chippewa
   */
  RedCliffChippewa: "1141-1",

  /**
   * Red Lake Chippewa
   */
  RedLakeChippewa: "1142-9",

  /**
   * Saginaw Chippewa
   */
  SaginawChippewa: "1143-7",

  /**
   * St. Croix Chippewa
   */
  StCroixChippewa: "1144-5",

  /**
   * Sault Ste. Marie Chippewa
   */
  SaultSteMarieChippewa: "1145-2",

  /**
   * Sokoagon Chippewa
   */
  SokoagonChippewa: "1146-0",

  /**
   * Turtle Mountain
   */
  TurtleMountain: "1147-8",

  /**
   * White Earth
   */
  WhiteEarth: "1148-6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianChippewaCode =
  typeof RaceAmericanIndianChippewaCode[keyof typeof RaceAmericanIndianChippewaCode];
