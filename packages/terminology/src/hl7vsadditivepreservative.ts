/**
 * Concepts specifying any additive introduced to the specimen before or at the time of collection.  These additives may be introduced in order to preserve, maintain or enhance the particular nature or component of the specimen.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0371
 */
export const Hl7VSAdditivePreservativeCode = {
  /**
   * 10% Formalin
   */
  TenFormalin: "F10",

  /**
   * 3.2%  Citrate
   */
  ThirtyTwoCitrate: "C32",

  /**
   * 3.8% Citrate
   */
  ThirtyEightCitrate: "C38",

  /**
   * 6N HCL
   */
  SixNHCL: "HCL6",

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
   * Ammonium heparin
   */
  Ammoniumheparin: "HEPA",

  /**
   * Bacterial Transport medium
   */
  BacterialTransportmedium: "BACTM",

  /**
   * Borate Boric Acid
   */
  BorateBoricAcid: "BOR",

  /**
   * Bouin's solution
   */
  Bouinssolution: "BOUIN",

  /**
   * Buffered 10% formalin
   */
  Buffered10formalin: "BF10",

  /**
   * Buffered Citrate (Westergren Sedimentation Rate)
   */
  BufferedCitrateWestergrenSedimentationRate: "WEST",

  /**
   * Buffered skim milk
   */
  Bufferedskimmilk: "BSKM",

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
   * CTAD (this should be spelled out if not universally understood)
   */
  CTADthisshouldbespelledoutifnotuniversallyunderstood: "CTAD",

  /**
   * Enteric bacteria transport medium
   */
  Entericbacteriatransportmedium: "ENT",

  /**
   * Enteric plus
   */
  Entericplus: "ENT+",

  /**
   * Jones Kendrick Medium
   */
  JonesKendrickMedium: "JKM",

  /**
   * Karnovsky's fixative
   */
  Karnovskysfixative: "KARN",

  /**
   * Lithium iodoacetate
   */
  Lithiumiodoacetate: "LIA",

  /**
   * Lithium/Li  Heparin
   */
  LithiumLiHeparin: "HEPL",

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
   * Nitric Acid
   */
  NitricAcid: "HNO3",

  /**
   * None
   */
  None: "NONE",

  /**
   * Pages's Saline
   */
  PagessSaline: "PAGE",

  /**
   * Phenol
   */
  Phenol: "PHENOL",

  /**
   * Potassium Oxalate
   */
  PotassiumOxalate: "KOX",

  /**
   * Potassium/K EDTA
   */
  PotassiumKEDTA: "EDTK",

  /**
   * Potassium/K EDTA 15%
   */
  PotassiumKEDTA15: "EDTK15",

  /**
   * Potassium/K EDTA 7.5%
   */
  PotassiumKEDTA75: "EDTK75",

  /**
   * PVA (polyvinylalcohol)
   */
  PVApolyvinylalcohol: "PVA",

  /**
   * Reagan Lowe Medium
   */
  ReaganLoweMedium: "RLM",

  /**
   * Serum Separator Tube (Polymer Gel)
   */
  SerumSeparatorTubePolymerGel: "SST",

  /**
   * Siliceous earth, 12 mg
   */
  Siliceousearth12mg: "SILICA",

  /**
   * Sodium Fluoride
   */
  SodiumFluoride: "NAF",

  /**
   * Sodium Fluoride, 100mg
   */
  SodiumFluoride100mg: "FL100",

  /**
   * Sodium Fluoride, 10mg
   */
  SodiumFluoride10mg: "FL10",

  /**
   * Sodium polyanethol sulfonate 0.35% in 0.85% sodium chloride
   */
  Sodiumpolyanetholsulfonate035in085sodiumchloride: "NAPS",

  /**
   * Sodium/Na  Heparin
   */
  SodiumNaHeparin: "HEPN",

  /**
   * Sodium/Na EDTA
   */
  SodiumNaEDTA: "EDTN",

  /**
   * SPS(this should be spelled out if not universally understood)
   */
  SPSthisshouldbespelledoutifnotuniversallyunderstood: "SPS",

  /**
   * Stuart transport medium
   */
  Stuarttransportmedium: "STUTM",

  /**
   * Thrombin
   */
  Thrombin: "THROM",

  /**
   * Thrombin NIH; soybean trypsin inhibitor (Fibrin Degradation Products)
   */
  ThrombinNIHsoybeantrypsininhibitorFibrinDegradationProducts: "FDP",

  /**
   * Thymol
   */
  Thymol: "THYMOL",

  /**
   * Thyoglycollate broth
   */
  Thyoglycollatebroth: "THYO",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdditivePreservativeCode =
  typeof Hl7VSAdditivePreservativeCode[keyof typeof Hl7VSAdditivePreservativeCode];
