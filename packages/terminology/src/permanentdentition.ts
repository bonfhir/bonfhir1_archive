/**
 * Permanent dentition, the natural teeth of adulthood that replace or are added to the deciduous teeth
 * http://terminology.hl7.org/ValueSet/v3-PermanentDentition
 */
export const PermanentDentitionCode = {
  /**
   * 1
   */
  One: "TID1",

  /**
   * 10
   */
  Ten: "TID10",

  /**
   * 11
   */
  Eleven: "TID11",

  /**
   * 12
   */
  Twelve: "TID12",

  /**
   * 13
   */
  Thirteen: "TID13",

  /**
   * 14
   */
  Fourteen: "TID14",

  /**
   * 15
   */
  Fifteen: "TID15",

  /**
   * 16
   */
  Sixteen: "TID16",

  /**
   * 17
   */
  Seventeen: "TID17",

  /**
   * 17d
   */
  Seventeend: "TID17d",

  /**
   * 17m
   */
  Seventeenm: "TID17m",

  /**
   * 18
   */
  Eighteen: "TID18",

  /**
   * 18d
   */
  Eighteend: "TID18d",

  /**
   * 18m
   */
  Eighteenm: "TID18m",

  /**
   * 19
   */
  Nineteen: "TID19",

  /**
   * 19d
   */
  Nineteend: "TID19d",

  /**
   * 19m
   */
  Nineteenm: "TID19m",

  /**
   * 2
   */
  Two: "TID2",

  /**
   * 20
   */
  Twenty: "TID20",

  /**
   * 21
   */
  TwentyOne: "TID21",

  /**
   * 22
   */
  TwentyTwo: "TID22",

  /**
   * 23
   */
  TwentyThree: "TID23",

  /**
   * 24
   */
  TwentyFour: "TID24",

  /**
   * 25
   */
  TwentyFive: "TID25",

  /**
   * 26
   */
  TwentySix: "TID26",

  /**
   * 27
   */
  TwentySeven: "TID27",

  /**
   * 28
   */
  TwentyEight: "TID28",

  /**
   * 29
   */
  TwentyNine: "TID29",

  /**
   * 3
   */
  Three: "TID3",

  /**
   * 30
   */
  Thirty: "TID30",

  /**
   * 30d
   */
  Thirtyd: "TID30d",

  /**
   * 30m
   */
  Thirtym: "TID30m",

  /**
   * 31
   */
  ThirtyOne: "TID31",

  /**
   * 31d
   */
  ThirtyOned: "TID31d",

  /**
   * 31m
   */
  ThirtyOnem: "TID31m",

  /**
   * 32
   */
  ThirtyTwo: "TID32",

  /**
   * 32d
   */
  ThirtyTwod: "TID32d",

  /**
   * 32m
   */
  ThirtyTwom: "TID32m",

  /**
   * 4
   */
  Four: "TID4",

  /**
   * 5
   */
  Five: "TID5",

  /**
   * 6
   */
  Six: "TID6",

  /**
   * 7
   */
  Seven: "TID7",

  /**
   * 8
   */
  Eight: "TID8",

  /**
   * 9
   */
  Nine: "TID9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PermanentDentitionCode =
  typeof PermanentDentitionCode[keyof typeof PermanentDentitionCode];
