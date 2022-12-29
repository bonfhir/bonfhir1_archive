/**
 * Set of codes related to specimen additives
 * http://terminology.hl7.org/ValueSet/v3-SpecimenAdditiveEntity
 */
export const SpecimenAdditiveEntityCode = {
  /**
   * ACD Solution A
   */
  ACDSolutionA: "ACDA",

  /**
   * ACD Solution B
   */
  ACDSolutionB: "ACDB",

  /**
   * Acetic Acid
   */
  AceticAcid: "ACET",

  /**
   * Amies transport medium
   */
  Amiestransportmedium: "AMIES",

  /**
   * Bacterial Transport medium
   */
  BacterialTransportmedium: "BACTM",

  /**
   * Buffered 10% formalin
   */
  Buffered10formalin: "BF10",

  /**
   * Boric Acid
   */
  BoricAcid: "BOR",

  /**
   * Bouin's solution
   */
  Bouinssolution: "BOUIN",

  /**
   * Buffered skim milk
   */
  Bufferedskimmilk: "BSKM",

  /**
   * 3.2% Citrate
   */
  ThirtyTwoCitrate: "C32",

  /**
   * 3.8% Citrate
   */
  ThirtyEightCitrate: "C38",

  /**
   * Carson's Modified 10% formalin
   */
  CarsonsModified10formalin: "CARS",

  /**
   * Cary Blair Medium
   */
  CaryBlairMedium: "CARY",

  /**
   * Chlamydia transport medium
   */
  Chlamydiatransportmedium: "CHLTM",

  /**
   * CTAD
   */
  CTAD: "CTAD",

  /**
   * Potassium/K EDTA 15%
   */
  PotassiumKEDTA15: "EDTK15",

  /**
   * Potassium/K EDTA 7.5%
   */
  PotassiumKEDTA75: "EDTK75",

  /**
   * Sodium/Na EDTA
   */
  SodiumNaEDTA: "EDTN",

  /**
   * Enteric bacteria transport medium
   */
  Entericbacteriatransportmedium: "ENT",

  /**
   * 10% Formalin
   */
  TenFormalin: "F10",

  /**
   * Thrombin NIH; soybean trypsin inhibitor
   */
  ThrombinNIHsoybeantrypsininhibitor: "FDP",

  /**
   * Sodium Fluoride, 10mg
   */
  SodiumFluoride10mg: "FL10",

  /**
   * Sodium Fluoride, 100mg
   */
  SodiumFluoride100mg: "FL100",

  /**
   * 6N HCL
   */
  SixNHCL: "HCL6",

  /**
   * Ammonium heparin
   */
  Ammoniumheparin: "HEPA",

  /**
   * Lithium/Li Heparin
   */
  LithiumLiHeparin: "HEPL",

  /**
   * Sodium/Na Heparin
   */
  SodiumNaHeparin: "HEPN",

  /**
   * Nitric Acid
   */
  NitricAcid: "HNO3",

  /**
   * Jones Kendrick Medium
   */
  JonesKendrickMedium: "JKM",

  /**
   * Karnovsky's fixative
   */
  Karnovskysfixative: "KARN",

  /**
   * Potassium Oxalate
   */
  PotassiumOxalate: "KOX",

  /**
   * Lithium iodoacetate
   */
  Lithiumiodoacetate: "LIA",

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
  Michelstransportmedium: "MICHTM",

  /**
   * MMD transport medium
   */
  MMDtransportmedium: "MMDTM",

  /**
   * Sodium Fluoride
   */
  SodiumFluoride: "NAF",

  /**
   * None
   */
  None: "NONE",

  /**
   * Page's Saline
   */
  PagesSaline: "PAGE",

  /**
   * Phenol
   */
  Phenol: "PHENOL",

  /**
   * Polyvinylalcohol
   */
  Polyvinylalcohol: "PVA",

  /**
   * Reagan Lowe Medium
   */
  ReaganLoweMedium: "RLM",

  /**
   * Siliceous earth
   */
  Siliceousearth: "SILICA",

  /**
   * Sodium polyanethol sulfonate 0.35% in 0.85% sodium chloride
   */
  Sodiumpolyanetholsulfonate035in085sodiumchloride: "SPS",

  /**
   * Serum Separator Tube
   */
  SerumSeparatorTube: "SST",

  /**
   * Stuart transport medium
   */
  Stuarttransportmedium: "STUTM",

  /**
   * Thrombin
   */
  Thrombin: "THROM",

  /**
   * Thymol
   */
  Thymol: "THYMOL",

  /**
   * Thyoglycolate broth
   */
  Thyoglycolatebroth: "THYO",

  /**
   * Toluene
   */
  Toluene: "TOLU",

  /**
   * Ureaplasma transport medium
   */
  Ureaplasmatransportmedium: "URETM",

  /**
   * Viral Transport medium
   */
  ViralTransportmedium: "VIRTM",

  /**
   * Buffered Citrate
   */
  BufferedCitrate: "WEST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenAdditiveEntityCode =
  typeof SpecimenAdditiveEntityCode[keyof typeof SpecimenAdditiveEntityCode];
