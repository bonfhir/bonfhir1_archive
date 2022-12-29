/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianPaiute
 */
export const RaceAmericanIndianPaiuteCode = {
  /**
   * Paiute
   */
  Paiute: "1416-7",

  /**
   * Bishop
   */
  Bishop: "1417-5",

  /**
   * Bridgeport
   */
  Bridgeport: "1418-3",

  /**
   * Burns Paiute
   */
  BurnsPaiute: "1419-1",

  /**
   * Cedarville
   */
  Cedarville: "1420-9",

  /**
   * Fort Bidwell
   */
  FortBidwell: "1421-7",

  /**
   * Fort Independence
   */
  FortIndependence: "1422-5",

  /**
   * Kaibab
   */
  Kaibab: "1423-3",

  /**
   * Las Vegas
   */
  LasVegas: "1424-1",

  /**
   * Lone Pine
   */
  LonePine: "1425-8",

  /**
   * Lovelock
   */
  Lovelock: "1426-6",

  /**
   * Malheur Paiute
   */
  MalheurPaiute: "1427-4",

  /**
   * Moapa
   */
  Moapa: "1428-2",

  /**
   * Northern Paiute
   */
  NorthernPaiute: "1429-0",

  /**
   * Owens Valley
   */
  OwensValley: "1430-8",

  /**
   * Pyramid Lake
   */
  PyramidLake: "1431-6",

  /**
   * San Juan Southern Paiute
   */
  SanJuanSouthernPaiute: "1432-4",

  /**
   * Southern Paiute
   */
  SouthernPaiute: "1433-2",

  /**
   * Summit Lake
   */
  SummitLake: "1434-0",

  /**
   * Utu Utu Gwaitu Paiute
   */
  UtuUtuGwaituPaiute: "1435-7",

  /**
   * Walker River
   */
  WalkerRiver: "1436-5",

  /**
   * Yerington Paiute
   */
  YeringtonPaiute: "1437-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianPaiuteCode =
  typeof RaceAmericanIndianPaiuteCode[keyof typeof RaceAmericanIndianPaiuteCode];
