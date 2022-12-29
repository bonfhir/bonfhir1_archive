/**
 * Value Set of codes that specify the organization that manufactures a vaccine. The values are maintained by the US Centers of Disease Control.  Note that the source of truth for these code values are maintained by the CDC, and the code system may be acce
 * http://terminology.hl7.org/ValueSet/v2-0227
 */
export const PHVSManufacturersOfVaccinesMVXCDCNIPCode = {
  /**
   * Abbott Laboratories
   */
  AbbottLaboratories: "AB",

  /**
   * Adams Laboratories, Inc.
   */
  AdamsLaboratoriesInc: "AD",

  /**
   * Alpha Therapeutic Corporation
   */
  AlphaTherapeuticCorporation: "ALP",

  /**
   * Armour
   */
  Armour: "AR",

  /**
   * Aventis Behring L.L.C.
   */
  AventisBehringLLC: "AVB",

  /**
   * Aviron
   */
  Aviron: "AVI",

  /**
   * Baxter Healthcare Corporation
   */
  BaxterHealthcareCorporation: "BA",

  /**
   * Baxter Healthcare Corporation
   */
  BaxterHealthcareCorporation: "BAH",

  /**
   * Bayer Corporation
   */
  BayerCorporation: "BAY",

  /**
   * Berna Products
   */
  BernaProducts: "BP",

  /**
   * Berna Products Corporation
   */
  BernaProductsCorporation: "BPC",

  /**
   * Bioport Corporation
   */
  BioportCorporation: "MIP",

  /**
   * Cangene Corporation
   */
  CangeneCorporation: "CNJ",

  /**
   * Celltech Medeva Pharmaceuticals
   */
  CelltechMedevaPharmaceuticals: "CMP",

  /**
   * Centeon L.L.C.
   */
  CenteonLLC: "CEN",

  /**
   * Chiron Corporation
   */
  ChironCorporation: "CHI",

  /**
   * Connaught
   */
  Connaught: "CON",

  /**
   * DynPort Vaccine Company, LLC
   */
  DynPortVaccineCompanyLLC: "DVC",

  /**
   * Evans Medical Limited
   */
  EvansMedicalLimited: "EVN",

  /**
   * GeoVax Labs, Inc.
   */
  GeoVaxLabsInc: "GEO",

  /**
   * GlaxoSmithKline
   */
  GlaxoSmithKline: "SKB",

  /**
   * Greer Laboratories, Inc.
   */
  GreerLaboratoriesInc: "GRE",

  /**
   * Immuno International AG
   */
  ImmunoInternationalAG: "IAG",

  /**
   * Immuno-U.S., Inc.
   */
  ImmunoUSInc: "IUS",

  /**
   * Korea Green Cross Corporation
   */
  KoreaGreenCrossCorporation: "KGC",

  /**
   * Lederle
   */
  Lederle: "LED",

  /**
   * Massachusetts Biologic Laboratories
   */
  MassachusettsBiologicLaboratories: "MBL",

  /**
   * Massachusetts Public Health Biologic Laboratories
   */
  MassachusettsPublicHealthBiologicLaboratories: "MA",

  /**
   * MedImmune, Inc.
   */
  MedImmuneInc: "MED",

  /**
   * Merck & Co., Inc.
   */
  MerckCoInc: "MSD",

  /**
   * Merieux
   */
  Merieux: "IM",

  /**
   * Miles
   */
  Miles: "MIL",

  /**
   * NABI
   */
  NABI: "NAB",

  /**
   * New York Blood Center
   */
  NewYorkBloodCenter: "NYB",

  /**
   * North American Vaccine, Inc.
   */
  NorthAmericanVaccineInc: "NAV",

  /**
   * Novartis Pharmaceutical Corporation
   */
  NovartisPharmaceuticalCorporation: "NOV",

  /**
   * Novavax, Inc.
   */
  NovavaxInc: "NVX",

  /**
   * Organon Teknika Corporation
   */
  OrganonTeknikaCorporation: "OTC",

  /**
   * Ortho-Clinical Diagnostics
   */
  OrthoClinicalDiagnostics: "ORT",

  /**
   * Parkedale Pharmaceuticals
   */
  ParkedalePharmaceuticals: "PD",

  /**
   * PowderJect Pharmaceuticals
   */
  PowderJectPharmaceuticals: "PWJ",

  /**
   * Praxis Biologics
   */
  PraxisBiologics: "PRX",

  /**
   * sanofi pasteur
   */
  sanofipasteur: "PMC",

  /**
   * The Research Foundation for Microbial Diseases of Osaka University
   */
  TheResearchFoundationforMicrobialDiseasesofOsakaUniversity: "JPN",

  /**
   * Sclavo, Inc.
   */
  SclavoInc: "SCL",

  /**
   * Solvay Pharmaceuticals
   */
  SolvayPharmaceuticals: "SOL",

  /**
   * Swiss Serum and Vaccine Inst.
   */
  SwissSerumandVaccineInst: "SI",

  /**
   * Talecris Biotherapeutics
   */
  TalecrisBiotherapeutics: "TAL",

  /**
   * United States Army Medical Research and Material Command
   */
  UnitedStatesArmyMedicalResearchandMaterialCommand: "USA",

  /**
   * VaxGen
   */
  VaxGen: "VXG",

  /**
   * Wyeth-Ayerst
   */
  WyethAyerst: "WA",

  /**
   * Wyeth-Ayerst
   */
  WyethAyerst: "WAL",

  /**
   * ZLB Behring
   */
  ZLBBehring: "ZLB",

  /**
   * Other manufacturer
   */
  Othermanufacturer: "OTH",

  /**
   * Unknown manufacturer
   */
  Unknownmanufacturer: "UNK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PHVSManufacturersOfVaccinesMVXCDCNIPCode =
  typeof PHVSManufacturersOfVaccinesMVXCDCNIPCode[keyof typeof PHVSManufacturersOfVaccinesMVXCDCNIPCode];
