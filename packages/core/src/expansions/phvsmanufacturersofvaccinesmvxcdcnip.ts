/**
 * Value Set of codes that specify the organization that manufactures a vaccine. The values are maintained by the US Centers of Disease Control.  Note that the source of truth for these code values are maintained by the CDC, and the code system may be acce
 * http://terminology.hl7.org/ValueSet/v2-0227
 */
export const PHVSManufacturersOfVaccinesMVXCDCNIPCode = {
  /**
   * Abbott Laboratories
   */
  AB: "AB",

  /**
   * Adams Laboratories, Inc.
   */
  AD: "AD",

  /**
   * Alpha Therapeutic Corporation
   */
  ALP: "ALP",

  /**
   * Armour
   */
  AR: "AR",

  /**
   * Aventis Behring L.L.C.
   */
  AVB: "AVB",

  /**
   * Aviron
   */
  AVI: "AVI",

  /**
   * Baxter Healthcare Corporation
   */
  BA: "BA",

  /**
   * Baxter Healthcare Corporation
   */
  BAH: "BAH",

  /**
   * Bayer Corporation
   */
  BAY: "BAY",

  /**
   * Berna Products
   */
  BP: "BP",

  /**
   * Berna Products Corporation
   */
  BPC: "BPC",

  /**
   * Bioport Corporation
   */
  MIP: "MIP",

  /**
   * Cangene Corporation
   */
  CNJ: "CNJ",

  /**
   * Celltech Medeva Pharmaceuticals
   */
  CMP: "CMP",

  /**
   * Centeon L.L.C.
   */
  CEN: "CEN",

  /**
   * Chiron Corporation
   */
  CHI: "CHI",

  /**
   * Connaught
   */
  CON: "CON",

  /**
   * DynPort Vaccine Company, LLC
   */
  DVC: "DVC",

  /**
   * Evans Medical Limited
   */
  EVN: "EVN",

  /**
   * GeoVax Labs, Inc.
   */
  GEO: "GEO",

  /**
   * GlaxoSmithKline
   */
  SKB: "SKB",

  /**
   * Greer Laboratories, Inc.
   */
  GRE: "GRE",

  /**
   * Immuno International AG
   */
  IAG: "IAG",

  /**
   * Immuno-U.S., Inc.
   */
  IUS: "IUS",

  /**
   * Korea Green Cross Corporation
   */
  KGC: "KGC",

  /**
   * Lederle
   */
  LED: "LED",

  /**
   * Massachusetts Biologic Laboratories
   */
  MBL: "MBL",

  /**
   * Massachusetts Public Health Biologic Laboratories
   */
  MA: "MA",

  /**
   * MedImmune, Inc.
   */
  MED: "MED",

  /**
   * Merck & Co., Inc.
   */
  MSD: "MSD",

  /**
   * Merieux
   */
  IM: "IM",

  /**
   * Miles
   */
  MIL: "MIL",

  /**
   * NABI
   */
  NAB: "NAB",

  /**
   * New York Blood Center
   */
  NYB: "NYB",

  /**
   * North American Vaccine, Inc.
   */
  NAV: "NAV",

  /**
   * Novartis Pharmaceutical Corporation
   */
  NOV: "NOV",

  /**
   * Novavax, Inc.
   */
  NVX: "NVX",

  /**
   * Organon Teknika Corporation
   */
  OTC: "OTC",

  /**
   * Ortho-Clinical Diagnostics
   */
  ORT: "ORT",

  /**
   * Parkedale Pharmaceuticals
   */
  PD: "PD",

  /**
   * PowderJect Pharmaceuticals
   */
  PWJ: "PWJ",

  /**
   * Praxis Biologics
   */
  PRX: "PRX",

  /**
   * sanofi pasteur
   */
  PMC: "PMC",

  /**
   * The Research Foundation for Microbial Diseases of Osaka University
   */
  JPN: "JPN",

  /**
   * Sclavo, Inc.
   */
  SCL: "SCL",

  /**
   * Solvay Pharmaceuticals
   */
  SOL: "SOL",

  /**
   * Swiss Serum and Vaccine Inst.
   */
  SI: "SI",

  /**
   * Talecris Biotherapeutics
   */
  TAL: "TAL",

  /**
   * United States Army Medical Research and Material Command
   */
  USA: "USA",

  /**
   * VaxGen
   */
  VXG: "VXG",

  /**
   * Wyeth-Ayerst
   */
  WA: "WA",

  /**
   * Wyeth-Ayerst
   */
  WAL: "WAL",

  /**
   * ZLB Behring
   */
  ZLB: "ZLB",

  /**
   * Other manufacturer
   */
  OTH: "OTH",

  /**
   * Unknown manufacturer
   */
  UNK: "UNK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PHVSManufacturersOfVaccinesMVXCDCNIPCode =
  typeof PHVSManufacturersOfVaccinesMVXCDCNIPCode[keyof typeof PHVSManufacturersOfVaccinesMVXCDCNIPCode];
