/**
 * Supernumerary tooth, any tooth in addition to the normal permanent and primary dentition
 * http://terminology.hl7.org/ValueSet/v3-SupernumeraryTooth
 */
export const SupernumeraryToothCode = {
  /**
   * 10s
   */
  TID10s: "TID10s",

  /**
   * 11s
   */
  TID11s: "TID11s",

  /**
   * 12s
   */
  TID12s: "TID12s",

  /**
   * 13s
   */
  TID13s: "TID13s",

  /**
   * 14s
   */
  TID14s: "TID14s",

  /**
   * 15s
   */
  TID15s: "TID15s",

  /**
   * 16s
   */
  TID16s: "TID16s",

  /**
   * 17s
   */
  TID17s: "TID17s",

  /**
   * 18s
   */
  TID18s: "TID18s",

  /**
   * 19s
   */
  TID19s: "TID19s",

  /**
   * 1s
   */
  TID1s: "TID1s",

  /**
   * 20s
   */
  TID20s: "TID20s",

  /**
   * 21s
   */
  TID21s: "TID21s",

  /**
   * 22s
   */
  TID22s: "TID22s",

  /**
   * 23s
   */
  TID23s: "TID23s",

  /**
   * 24s
   */
  TID24s: "TID24s",

  /**
   * 25s
   */
  TID25s: "TID25s",

  /**
   * 26s
   */
  TID26s: "TID26s",

  /**
   * 27s
   */
  TID27s: "TID27s",

  /**
   * 28s
   */
  TID28s: "TID28s",

  /**
   * 29s
   */
  TID29s: "TID29s",

  /**
   * 2s
   */
  TID2s: "TID2s",

  /**
   * 30s
   */
  TID30s: "TID30s",

  /**
   * 31s
   */
  TID31s: "TID31s",

  /**
   * 32s
   */
  TID32s: "TID32s",

  /**
   * 3s
   */
  TID3s: "TID3s",

  /**
   * 4s
   */
  TID4s: "TID4s",

  /**
   * 5s
   */
  TID5s: "TID5s",

  /**
   * 6s
   */
  TID6s: "TID6s",

  /**
   * 7s
   */
  TID7s: "TID7s",

  /**
   * 8s
   */
  TID8s: "TID8s",

  /**
   * 9s
   */
  TID9s: "TID9s",

  /**
   * As
   */
  TIDAs: "TIDAs",

  /**
   * Bs
   */
  TIDBs: "TIDBs",

  /**
   * Cs
   */
  TIDCs: "TIDCs",

  /**
   * Ds
   */
  TIDDs: "TIDDs",

  /**
   * Es
   */
  TIDEs: "TIDEs",

  /**
   * Fs
   */
  TIDFs: "TIDFs",

  /**
   * Gs
   */
  TIDGs: "TIDGs",

  /**
   * Hs
   */
  TIDHs: "TIDHs",

  /**
   * Is
   */
  TIDIs: "TIDIs",

  /**
   * Js
   */
  TIDJs: "TIDJs",

  /**
   * Ks
   */
  TIDKs: "TIDKs",

  /**
   * Ls
   */
  TIDLs: "TIDLs",

  /**
   * Ms
   */
  TIDMs: "TIDMs",

  /**
   * Ns
   */
  TIDNs: "TIDNs",

  /**
   * Os
   */
  TIDOs: "TIDOs",

  /**
   * Ps
   */
  TIDPs: "TIDPs",

  /**
   * Qs
   */
  TIDQs: "TIDQs",

  /**
   * Rs
   */
  TIDRs: "TIDRs",

  /**
   * Ss
   */
  TIDSs: "TIDSs",

  /**
   * Ts
   */
  TIDTs: "TIDTs",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupernumeraryToothCode =
  typeof SupernumeraryToothCode[keyof typeof SupernumeraryToothCode];
