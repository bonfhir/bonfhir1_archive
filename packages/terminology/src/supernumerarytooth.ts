/**
 * Supernumerary tooth, any tooth in addition to the normal permanent and primary dentition
 * http://terminology.hl7.org/ValueSet/v3-SupernumeraryTooth
 */
export const SupernumeraryToothCode = {
  /**
   * 10s
   */
  Tens: "TID10s",

  /**
   * 11s
   */
  Elevens: "TID11s",

  /**
   * 12s
   */
  Twelves: "TID12s",

  /**
   * 13s
   */
  Thirteens: "TID13s",

  /**
   * 14s
   */
  Fourteens: "TID14s",

  /**
   * 15s
   */
  Fifteens: "TID15s",

  /**
   * 16s
   */
  Sixteens: "TID16s",

  /**
   * 17s
   */
  Seventeens: "TID17s",

  /**
   * 18s
   */
  Eighteens: "TID18s",

  /**
   * 19s
   */
  Nineteens: "TID19s",

  /**
   * 1s
   */
  Ones: "TID1s",

  /**
   * 20s
   */
  Twentys: "TID20s",

  /**
   * 21s
   */
  TwentyOnes: "TID21s",

  /**
   * 22s
   */
  TwentyTwos: "TID22s",

  /**
   * 23s
   */
  TwentyThrees: "TID23s",

  /**
   * 24s
   */
  TwentyFours: "TID24s",

  /**
   * 25s
   */
  TwentyFives: "TID25s",

  /**
   * 26s
   */
  TwentySixs: "TID26s",

  /**
   * 27s
   */
  TwentySevens: "TID27s",

  /**
   * 28s
   */
  TwentyEights: "TID28s",

  /**
   * 29s
   */
  TwentyNines: "TID29s",

  /**
   * 2s
   */
  Twos: "TID2s",

  /**
   * 30s
   */
  Thirtys: "TID30s",

  /**
   * 31s
   */
  ThirtyOnes: "TID31s",

  /**
   * 32s
   */
  ThirtyTwos: "TID32s",

  /**
   * 3s
   */
  Threes: "TID3s",

  /**
   * 4s
   */
  Fours: "TID4s",

  /**
   * 5s
   */
  Fives: "TID5s",

  /**
   * 6s
   */
  Sixs: "TID6s",

  /**
   * 7s
   */
  Sevens: "TID7s",

  /**
   * 8s
   */
  Eights: "TID8s",

  /**
   * 9s
   */
  Nines: "TID9s",

  /**
   * As
   */
  As: "TIDAs",

  /**
   * Bs
   */
  Bs: "TIDBs",

  /**
   * Cs
   */
  Cs: "TIDCs",

  /**
   * Ds
   */
  Ds: "TIDDs",

  /**
   * Es
   */
  Es: "TIDEs",

  /**
   * Fs
   */
  Fs: "TIDFs",

  /**
   * Gs
   */
  Gs: "TIDGs",

  /**
   * Hs
   */
  Hs: "TIDHs",

  /**
   * Is
   */
  Is: "TIDIs",

  /**
   * Js
   */
  Js: "TIDJs",

  /**
   * Ks
   */
  Ks: "TIDKs",

  /**
   * Ls
   */
  Ls: "TIDLs",

  /**
   * Ms
   */
  Ms: "TIDMs",

  /**
   * Ns
   */
  Ns: "TIDNs",

  /**
   * Os
   */
  Os: "TIDOs",

  /**
   * Ps
   */
  Ps: "TIDPs",

  /**
   * Qs
   */
  Qs: "TIDQs",

  /**
   * Rs
   */
  Rs: "TIDRs",

  /**
   * Ss
   */
  Ss: "TIDSs",

  /**
   * Ts
   */
  Ts: "TIDTs",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupernumeraryToothCode =
  typeof SupernumeraryToothCode[keyof typeof SupernumeraryToothCode];
