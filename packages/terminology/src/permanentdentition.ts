/**
 * Permanent dentition, the natural teeth of adulthood that replace or are added to the deciduous teeth
 * http://terminology.hl7.org/ValueSet/v3-PermanentDentition
 */
export const PermanentDentitionCode = {
  /**
   * 1
   */
  TID1: "TID1",

  /**
   * 10
   */
  TID10: "TID10",

  /**
   * 11
   */
  TID11: "TID11",

  /**
   * 12
   */
  TID12: "TID12",

  /**
   * 13
   */
  TID13: "TID13",

  /**
   * 14
   */
  TID14: "TID14",

  /**
   * 15
   */
  TID15: "TID15",

  /**
   * 16
   */
  TID16: "TID16",

  /**
   * 17
   */
  TID17: "TID17",

  /**
   * 17d
   */
  TID17d: "TID17d",

  /**
   * 17m
   */
  TID17m: "TID17m",

  /**
   * 18
   */
  TID18: "TID18",

  /**
   * 18d
   */
  TID18d: "TID18d",

  /**
   * 18m
   */
  TID18m: "TID18m",

  /**
   * 19
   */
  TID19: "TID19",

  /**
   * 19d
   */
  TID19d: "TID19d",

  /**
   * 19m
   */
  TID19m: "TID19m",

  /**
   * 2
   */
  TID2: "TID2",

  /**
   * 20
   */
  TID20: "TID20",

  /**
   * 21
   */
  TID21: "TID21",

  /**
   * 22
   */
  TID22: "TID22",

  /**
   * 23
   */
  TID23: "TID23",

  /**
   * 24
   */
  TID24: "TID24",

  /**
   * 25
   */
  TID25: "TID25",

  /**
   * 26
   */
  TID26: "TID26",

  /**
   * 27
   */
  TID27: "TID27",

  /**
   * 28
   */
  TID28: "TID28",

  /**
   * 29
   */
  TID29: "TID29",

  /**
   * 3
   */
  TID3: "TID3",

  /**
   * 30
   */
  TID30: "TID30",

  /**
   * 30d
   */
  TID30d: "TID30d",

  /**
   * 30m
   */
  TID30m: "TID30m",

  /**
   * 31
   */
  TID31: "TID31",

  /**
   * 31d
   */
  TID31d: "TID31d",

  /**
   * 31m
   */
  TID31m: "TID31m",

  /**
   * 32
   */
  TID32: "TID32",

  /**
   * 32d
   */
  TID32d: "TID32d",

  /**
   * 32m
   */
  TID32m: "TID32m",

  /**
   * 4
   */
  TID4: "TID4",

  /**
   * 5
   */
  TID5: "TID5",

  /**
   * 6
   */
  TID6: "TID6",

  /**
   * 7
   */
  TID7: "TID7",

  /**
   * 8
   */
  TID8: "TID8",

  /**
   * 9
   */
  TID9: "TID9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PermanentDentitionCode =
  typeof PermanentDentitionCode[keyof typeof PermanentDentitionCode];
