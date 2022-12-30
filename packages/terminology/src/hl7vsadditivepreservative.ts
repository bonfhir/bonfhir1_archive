/**
 * Concepts specifying any additive introduced to the specimen before or at the time of collection.  These additives may be introduced in order to preserve, maintain or enhance the particular nature or component of the specimen.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0371
 */
export const Hl7VSAdditivePreservativeCode = {
  /**
   * 10% Formalin
   */
  F10: "F10",

  /**
   * 3.2%  Citrate
   */
  C32: "C32",

  /**
   * 3.8% Citrate
   */
  C38: "C38",

  /**
   * 6N HCL
   */
  HCL6: "HCL6",

  /**
   * ACD Solution A
   */
  ACDA: "ACDA",

  /**
   * ACD Solution B
   */
  ACDB: "ACDB",

  /**
   * Acetic Acid
   */
  ACET: "ACET",

  /**
   * Amies transport medium
   */
  AMIES: "AMIES",

  /**
   * Ammonium heparin
   */
  HEPA: "HEPA",

  /**
   * Bacterial Transport medium
   */
  BACTM: "BACTM",

  /**
   * Borate Boric Acid
   */
  BOR: "BOR",

  /**
   * Bouin's solution
   */
  BOUIN: "BOUIN",

  /**
   * Buffered 10% formalin
   */
  BF10: "BF10",

  /**
   * Buffered Citrate (Westergren Sedimentation Rate)
   */
  WEST: "WEST",

  /**
   * Buffered skim milk
   */
  BSKM: "BSKM",

  /**
   * Carson's Modified 10% formalin
   */
  CARS: "CARS",

  /**
   * Cary Blair Medium
   */
  CARY: "CARY",

  /**
   * Chlamydia transport medium
   */
  CHLTM: "CHLTM",

  /**
   * CTAD (this should be spelled out if not universally understood)
   */
  CTAD: "CTAD",

  /**
   * Enteric bacteria transport medium
   */
  ENT: "ENT",

  /**
   * Enteric plus
   */
  "ENT+": "ENT+",

  /**
   * Jones Kendrick Medium
   */
  JKM: "JKM",

  /**
   * Karnovsky's fixative
   */
  KARN: "KARN",

  /**
   * Lithium iodoacetate
   */
  LIA: "LIA",

  /**
   * Lithium/Li  Heparin
   */
  HEPL: "HEPL",

  /**
   * M4
   */
  M4: "M4",

  /**
   * M4-RT
   */
  M4RT: "M4RT",

  /**
   * M5
   */
  M5: "M5",

  /**
   * Michel's transport medium
   */
  MICHTM: "MICHTM",

  /**
   * MMD transport medium
   */
  MMDTM: "MMDTM",

  /**
   * Nitric Acid
   */
  HNO3: "HNO3",

  /**
   * None
   */
  NONE: "NONE",

  /**
   * Pages's Saline
   */
  PAGE: "PAGE",

  /**
   * Phenol
   */
  PHENOL: "PHENOL",

  /**
   * Potassium Oxalate
   */
  KOX: "KOX",

  /**
   * Potassium/K EDTA
   */
  EDTK: "EDTK",

  /**
   * Potassium/K EDTA 15%
   */
  EDTK15: "EDTK15",

  /**
   * Potassium/K EDTA 7.5%
   */
  EDTK75: "EDTK75",

  /**
   * PVA (polyvinylalcohol)
   */
  PVA: "PVA",

  /**
   * Reagan Lowe Medium
   */
  RLM: "RLM",

  /**
   * Serum Separator Tube (Polymer Gel)
   */
  SST: "SST",

  /**
   * Siliceous earth, 12 mg
   */
  SILICA: "SILICA",

  /**
   * Sodium Fluoride
   */
  NAF: "NAF",

  /**
   * Sodium Fluoride, 100mg
   */
  FL100: "FL100",

  /**
   * Sodium Fluoride, 10mg
   */
  FL10: "FL10",

  /**
   * Sodium polyanethol sulfonate 0.35% in 0.85% sodium chloride
   */
  NAPS: "NAPS",

  /**
   * Sodium/Na  Heparin
   */
  HEPN: "HEPN",

  /**
   * Sodium/Na EDTA
   */
  EDTN: "EDTN",

  /**
   * SPS(this should be spelled out if not universally understood)
   */
  SPS: "SPS",

  /**
   * Stuart transport medium
   */
  STUTM: "STUTM",

  /**
   * Thrombin
   */
  THROM: "THROM",

  /**
   * Thrombin NIH; soybean trypsin inhibitor (Fibrin Degradation Products)
   */
  FDP: "FDP",

  /**
   * Thymol
   */
  THYMOL: "THYMOL",

  /**
   * Thyoglycollate broth
   */
  THYO: "THYO",

  /**
   * Toluene
   */
  TOLU: "TOLU",

  /**
   * Ureaplasma transport medium
   */
  URETM: "URETM",

  /**
   * Viral Transport medium
   */
  VIRTM: "VIRTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdditivePreservativeCode =
  typeof Hl7VSAdditivePreservativeCode[keyof typeof Hl7VSAdditivePreservativeCode];
