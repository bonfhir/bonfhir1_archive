/**
 * The manufacturer of a vaccine.
 * http://terminology.hl7.org/ValueSet/v3-VaccineManufacturer
 */
export const VaccineManufacturerCode = {
  /**
   * Abbott Laboratories (includes Ross Products Division)
   */
  AbbottLaboratoriesincludesRossProductsDivision: "AB",

  /**
   * Adams Laboratories
   */
  AdamsLaboratories: "AD",

  /**
   * Alpha Therapeutic Corporation
   */
  AlphaTherapeuticCorporation: "ALP",

  /**
   * Armour [Inactive - use CEN]
   */
  ArmourInactiveuseCEN: "AR",

  /**
   * Aviron
   */
  Aviron: "AVI",

  /**
   * Baxter Healthcare Corporation
   */
  BaxterHealthcareCorporation: "BA",

  /**
   * Bayer Corporation (includes Miles, Inc. and Cutter Laboratories)
   */
  BayerCorporationincludesMilesIncandCutterLaboratories: "BAY",

  /**
   * Berna Products [Inactive - use BPC]
   */
  BernaProductsInactiveuseBPC: "BP",

  /**
   * Berna Products Corporation (includes Swiss Serum and Vaccine Institute Berne)
   */
  BernaProductsCorporationincludesSwissSerumandVaccineInstituteBerne: "BPC",

  /**
   * Centeon L.L.C. (includes Armour Pharmaceutical Company)
   */
  CenteonLLCincludesArmourPharmaceuticalCompany: "CEN",

  /**
   * Chiron Corporation
   */
  ChironCorporation: "CHI",

  /**
   * Connaught [Inactive - use PMC]
   */
  ConnaughtInactiveusePMC: "CON",

  /**
   * Evans Medical Limited (an affiliate of Medeva Pharmaceuticals, Inc.)
   */
  EvansMedicalLimitedanaffiliateofMedevaPharmaceuticalsInc: "EVN",

  /**
   * Greer Laboratories, Inc.
   */
  GreerLaboratoriesInc: "GRE",

  /**
   * Immuno International AG
   */
  ImmunoInternationalAG: "IAG",

  /**
   * Merieux [Inactive - use PMC]
   */
  MerieuxInactiveusePMC: "IM",

  /**
   * Immuno-U.S., Inc.
   */
  ImmunoUSInc: "IUS",

  /**
   * The Research Foundation for Microbial Diseases of Osaka University (BIKEN)
   */
  TheResearchFoundationforMicrobialDiseasesofOsakaUniversityBIKEN: "JPN",

  /**
   * Korea Green Cross Corporation
   */
  KoreaGreenCrossCorporation: "KGC",

  /**
   * Lederle [Inactive - use WAL]
   */
  LederleInactiveuseWAL: "LED",

  /**
   * Massachusetts Public Health Biologic Laboratories
   */
  MassachusettsPublicHealthBiologicLaboratories: "MA",

  /**
   * MedImmune, Inc.
   */
  MedImmuneInc: "MED",

  /**
   * Miles [Inactive - use BAY]
   */
  MilesInactiveuseBAY: "MIL",

  /**
   * Bioport Corporation (formerly Michigan Biologic Products Institute)
   */
  BioportCorporationformerlyMichiganBiologicProductsInstitute: "MIP",

  /**
   * Merck and Co., Inc.
   */
  MerckandCoInc: "MSD",

  /**
   * NABI (formerly North American Biologicals, Inc.)
   */
  NABIformerlyNorthAmericanBiologicalsInc: "NAB",

  /**
   * North American Vaccine, Inc.
   */
  NorthAmericanVaccineInc: "NAV",

  /**
   * Novartis Pharmaceutical Corporation (includes Ciba-Geigy Limited and Sandoz Limited)
   */
  NovartisPharmaceuticalCorporationincludesCibaGeigyLimitedandSandozLimited:
    "NOV",

  /**
   * New York Blood Center
   */
  NewYorkBloodCenter: "NYB",

  /**
   * Ortho Diagnostic Systems, Inc.
   */
  OrthoDiagnosticSystemsInc: "ORT",

  /**
   * Organon Teknika Corporation
   */
  OrganonTeknikaCorporation: "OTC",

  /**
   * Parkedale Pharmaceuticals (formerly Parke-Davis)
   */
  ParkedalePharmaceuticalsformerlyParkeDavis: "PD",

  /**
   * Aventis Pasteur Inc. (formerly Pasteur Merieux Connaught; includes Connaught Laboratories and Pasteur Merieux)
   */
  AventisPasteurIncformerlyPasteurMerieuxConnaughtincludesConnaughtLaboratoriesandPasteurMerieux:
    "PMC",

  /**
   * Praxis Biologics [Inactive - use WAL]
   */
  PraxisBiologicsInactiveuseWAL: "PRX",

  /**
   * Sclavo, Inc.
   */
  SclavoInc: "SCL",

  /**
   * Swiss Serum and Vaccine Inst. [Inactive - use BPC]
   */
  SwissSerumandVaccineInstInactiveuseBPC: "SI",

  /**
   * SmithKline Beecham
   */
  SmithKlineBeecham: "SKB",

  /**
   * United States Army Medical Research and Materiel Command
   */
  UnitedStatesArmyMedicalResearchandMaterielCommand: "USA",

  /**
   * Wyeth-Ayerst [Inactive - use WAL]
   */
  WyethAyerstInactiveuseWAL: "WA",

  /**
   * Wyeth-Ayerst (includes Wyeth-Lederle Vaccines and Pediatrics, Wyeth Laboratories, Lederle Laboratories, and Praxis Biologics)
   */
  WyethAyerstincludesWyethLederleVaccinesandPediatricsWyethLaboratoriesLederleLaboratoriesandPraxisBiologics:
    "WAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaccineManufacturerCode =
  typeof VaccineManufacturerCode[keyof typeof VaccineManufacturerCode];
