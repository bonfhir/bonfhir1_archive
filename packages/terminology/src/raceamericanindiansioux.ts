/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianSioux
 */
export const RaceAmericanIndianSiouxCode = {
  /**
   * Sioux
   */
  Sioux: "1609-7",

  /**
   * Blackfoot Sioux
   */
  BlackfootSioux: "1610-5",

  /**
   * Brule Sioux
   */
  BruleSioux: "1611-3",

  /**
   * Cheyenne River Sioux
   */
  CheyenneRiverSioux: "1612-1",

  /**
   * Crow Creek Sioux
   */
  CrowCreekSioux: "1613-9",

  /**
   * Dakota Sioux
   */
  DakotaSioux: "1614-7",

  /**
   * Flandreau Santee
   */
  FlandreauSantee: "1615-4",

  /**
   * Fort Peck
   */
  FortPeck: "1616-2",

  /**
   * Lake Traverse Sioux
   */
  LakeTraverseSioux: "1617-0",

  /**
   * Lower Brule Sioux
   */
  LowerBruleSioux: "1618-8",

  /**
   * Lower Sioux
   */
  LowerSioux: "1619-6",

  /**
   * Mdewakanton Sioux
   */
  MdewakantonSioux: "1620-4",

  /**
   * Miniconjou
   */
  Miniconjou: "1621-2",

  /**
   * Oglala Sioux
   */
  OglalaSioux: "1622-0",

  /**
   * Pine Ridge Sioux
   */
  PineRidgeSioux: "1623-8",

  /**
   * Pipestone Sioux
   */
  PipestoneSioux: "1624-6",

  /**
   * Prairie Island Sioux
   */
  PrairieIslandSioux: "1625-3",

  /**
   * Prior Lake Sioux
   */
  PriorLakeSioux: "1626-1",

  /**
   * Rosebud Sioux
   */
  RosebudSioux: "1627-9",

  /**
   * Sans Arc Sioux
   */
  SansArcSioux: "1628-7",

  /**
   * Santee Sioux
   */
  SanteeSioux: "1629-5",

  /**
   * Sisseton-Wahpeton
   */
  SissetonWahpeton: "1630-3",

  /**
   * Sisseton Sioux
   */
  SissetonSioux: "1631-1",

  /**
   * Spirit Lake Sioux
   */
  SpiritLakeSioux: "1632-9",

  /**
   * Standing Rock Sioux
   */
  StandingRockSioux: "1633-7",

  /**
   * Teton Sioux
   */
  TetonSioux: "1634-5",

  /**
   * Two Kettle Sioux
   */
  TwoKettleSioux: "1635-2",

  /**
   * Upper Sioux
   */
  UpperSioux: "1636-0",

  /**
   * Wahpekute Sioux
   */
  WahpekuteSioux: "1637-8",

  /**
   * Wahpeton Sioux
   */
  WahpetonSioux: "1638-6",

  /**
   * Wazhaza Sioux
   */
  WazhazaSioux: "1639-4",

  /**
   * Yankton Sioux
   */
  YanktonSioux: "1640-2",

  /**
   * Yanktonai Sioux
   */
  YanktonaiSioux: "1641-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianSiouxCode =
  typeof RaceAmericanIndianSiouxCode[keyof typeof RaceAmericanIndianSiouxCode];
