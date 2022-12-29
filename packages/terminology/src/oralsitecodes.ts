/**
 * This value set includes a smattering of FDI oral site codes.
 * http://terminology.hl7.org/ValueSet/tooth
 */
export const OralSiteCodesCode = {
  /**
   * Oral cavity
   */
  Oralcavity: "0",

  /**
   * 1
   */
  One: "1",

  /**
   * 2
   */
  Two: "2",

  /**
   * 3
   */
  Three: "3",

  /**
   * 4
   */
  Four: "4",

  /**
   * 5
   */
  Five: "5",

  /**
   * 6
   */
  Six: "6",

  /**
   * 7
   */
  Seven: "7",

  /**
   * 8
   */
  Eight: "8",

  /**
   * 11
   */
  Eleven: "11",

  /**
   * 12
   */
  Twelve: "12",

  /**
   * 13
   */
  Thirteen: "13",

  /**
   * 14
   */
  Fourteen: "14",

  /**
   * 15
   */
  Fifteen: "15",

  /**
   * 16
   */
  Sixteen: "16",

  /**
   * 17
   */
  Seventeen: "17",

  /**
   * 18
   */
  Eighteen: "18",

  /**
   * 21
   */
  TwentyOne: "21",

  /**
   * 22
   */
  TwentyTwo: "22",

  /**
   * 23
   */
  TwentyThree: "23",

  /**
   * 24
   */
  TwentyFour: "24",

  /**
   * 25
   */
  TwentyFive: "25",

  /**
   * 26
   */
  TwentySix: "26",

  /**
   * 27
   */
  TwentySeven: "27",

  /**
   * 28
   */
  TwentyEight: "28",

  /**
   * 31
   */
  ThirtyOne: "31",

  /**
   * 32
   */
  ThirtyTwo: "32",

  /**
   * 33
   */
  ThirtyThree: "33",

  /**
   * 34
   */
  ThirtyFour: "34",

  /**
   * 35
   */
  ThirtyFive: "35",

  /**
   * 36
   */
  ThirtySix: "36",

  /**
   * 37
   */
  ThirtySeven: "37",

  /**
   * 38
   */
  ThirtyEight: "38",

  /**
   * 41
   */
  FortyOne: "41",

  /**
   * 42
   */
  FortyTwo: "42",

  /**
   * 43
   */
  FortyThree: "43",

  /**
   * 44
   */
  FortyFour: "44",

  /**
   * 45
   */
  FortyFive: "45",

  /**
   * 46
   */
  FortySix: "46",

  /**
   * 47
   */
  FortySeven: "47",

  /**
   * 48
   */
  FortyEight: "48",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralSiteCodesCode =
  typeof OralSiteCodesCode[keyof typeof OralSiteCodesCode];
