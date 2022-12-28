/**
 * Set of codes related to specimen additives
 * http://terminology.hl7.org/ValueSet/v3-SpecimenAdditiveEntity
 */
export const SpecimenAdditiveEntityCode = {
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
   * Bacterial Transport medium
   */
  BACTM: "BACTM",

  /**
   * Buffered 10% formalin
   */
  BF10: "BF10",

  /**
   * Boric Acid
   */
  BOR: "BOR",

  /**
   * Bouin's solution
   */
  BOUIN: "BOUIN",

  /**
   * Buffered skim milk
   */
  BSKM: "BSKM",

  /**
   * 3.2% Citrate
   */
  C32: "C32",

  /**
   * 3.8% Citrate
   */
  C38: "C38",

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
   * CTAD
   */
  CTAD: "CTAD",

  /**
   * Potassium/K EDTA 15%
   */
  EDTK15: "EDTK15",

  /**
   * Potassium/K EDTA 7.5%
   */
  EDTK75: "EDTK75",

  /**
   * Sodium/Na EDTA
   */
  EDTN: "EDTN",

  /**
   * Enteric bacteria transport medium
   */
  ENT: "ENT",

  /**
   * 10% Formalin
   */
  F10: "F10",

  /**
   * Thrombin NIH; soybean trypsin inhibitor
   */
  FDP: "FDP",

  /**
   * Sodium Fluoride, 10mg
   */
  FL10: "FL10",

  /**
   * Sodium Fluoride, 100mg
   */
  FL100: "FL100",

  /**
   * 6N HCL
   */
  HCL6: "HCL6",

  /**
   * Ammonium heparin
   */
  HEPA: "HEPA",

  /**
   * Lithium/Li Heparin
   */
  HEPL: "HEPL",

  /**
   * Sodium/Na Heparin
   */
  HEPN: "HEPN",

  /**
   * Nitric Acid
   */
  HNO3: "HNO3",

  /**
   * Jones Kendrick Medium
   */
  JKM: "JKM",

  /**
   * Karnovsky's fixative
   */
  KARN: "KARN",

  /**
   * Potassium Oxalate
   */
  KOX: "KOX",

  /**
   * Lithium iodoacetate
   */
  LIA: "LIA",

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
   * Sodium Fluoride
   */
  NAF: "NAF",

  /**
   * None
   */
  NONE: "NONE",

  /**
   * Page's Saline
   */
  PAGE: "PAGE",

  /**
   * Phenol
   */
  PHENOL: "PHENOL",

  /**
   * Polyvinylalcohol
   */
  PVA: "PVA",

  /**
   * Reagan Lowe Medium
   */
  RLM: "RLM",

  /**
   * Siliceous earth
   */
  SILICA: "SILICA",

  /**
   * Sodium polyanethol sulfonate 0.35% in 0.85% sodium chloride
   */
  SPS: "SPS",

  /**
   * Serum Separator Tube
   */
  SST: "SST",

  /**
   * Stuart transport medium
   */
  STUTM: "STUTM",

  /**
   * Thrombin
   */
  THROM: "THROM",

  /**
   * Thymol
   */
  THYMOL: "THYMOL",

  /**
   * Thyoglycolate broth
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

  /**
   * Buffered Citrate
   */
  WEST: "WEST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenAdditiveEntityCode =
  typeof SpecimenAdditiveEntityCode[keyof typeof SpecimenAdditiveEntityCode];
