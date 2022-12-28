/**
 * The manufacturer of a vaccine.
 * http://terminology.hl7.org/ValueSet/v3-VaccineManufacturer
 */
export const VaccineManufacturerCode = {
  /**
   * Abbott Laboratories (includes Ross Products Division)
   */
  AB: "AB",

  /**
   * Adams Laboratories
   */
  AD: "AD",

  /**
   * Alpha Therapeutic Corporation
   */
  ALP: "ALP",

  /**
   * Armour [Inactive - use CEN]
   */
  AR: "AR",

  /**
   * Aviron
   */
  AVI: "AVI",

  /**
   * Baxter Healthcare Corporation
   */
  BA: "BA",

  /**
   * Bayer Corporation (includes Miles, Inc. and Cutter Laboratories)
   */
  BAY: "BAY",

  /**
   * Berna Products [Inactive - use BPC]
   */
  BP: "BP",

  /**
   * Berna Products Corporation (includes Swiss Serum and Vaccine Institute Berne)
   */
  BPC: "BPC",

  /**
   * Centeon L.L.C. (includes Armour Pharmaceutical Company)
   */
  CEN: "CEN",

  /**
   * Chiron Corporation
   */
  CHI: "CHI",

  /**
   * Connaught [Inactive - use PMC]
   */
  CON: "CON",

  /**
   * Evans Medical Limited (an affiliate of Medeva Pharmaceuticals, Inc.)
   */
  EVN: "EVN",

  /**
   * Greer Laboratories, Inc.
   */
  GRE: "GRE",

  /**
   * Immuno International AG
   */
  IAG: "IAG",

  /**
   * Merieux [Inactive - use PMC]
   */
  IM: "IM",

  /**
   * Immuno-U.S., Inc.
   */
  IUS: "IUS",

  /**
   * The Research Foundation for Microbial Diseases of Osaka University (BIKEN)
   */
  JPN: "JPN",

  /**
   * Korea Green Cross Corporation
   */
  KGC: "KGC",

  /**
   * Lederle [Inactive - use WAL]
   */
  LED: "LED",

  /**
   * Massachusetts Public Health Biologic Laboratories
   */
  MA: "MA",

  /**
   * MedImmune, Inc.
   */
  MED: "MED",

  /**
   * Miles [Inactive - use BAY]
   */
  MIL: "MIL",

  /**
   * Bioport Corporation (formerly Michigan Biologic Products Institute)
   */
  MIP: "MIP",

  /**
   * Merck and Co., Inc.
   */
  MSD: "MSD",

  /**
   * NABI (formerly North American Biologicals, Inc.)
   */
  NAB: "NAB",

  /**
   * North American Vaccine, Inc.
   */
  NAV: "NAV",

  /**
   * Novartis Pharmaceutical Corporation (includes Ciba-Geigy Limited and Sandoz Limited)
   */
  NOV: "NOV",

  /**
   * New York Blood Center
   */
  NYB: "NYB",

  /**
   * Ortho Diagnostic Systems, Inc.
   */
  ORT: "ORT",

  /**
   * Organon Teknika Corporation
   */
  OTC: "OTC",

  /**
   * Parkedale Pharmaceuticals (formerly Parke-Davis)
   */
  PD: "PD",

  /**
   * Aventis Pasteur Inc. (formerly Pasteur Merieux Connaught; includes Connaught Laboratories and Pasteur Merieux)
   */
  PMC: "PMC",

  /**
   * Praxis Biologics [Inactive - use WAL]
   */
  PRX: "PRX",

  /**
   * Sclavo, Inc.
   */
  SCL: "SCL",

  /**
   * Swiss Serum and Vaccine Inst. [Inactive - use BPC]
   */
  SI: "SI",

  /**
   * SmithKline Beecham
   */
  SKB: "SKB",

  /**
   * United States Army Medical Research and Materiel Command
   */
  USA: "USA",

  /**
   * Wyeth-Ayerst [Inactive - use WAL]
   */
  WA: "WA",

  /**
   * Wyeth-Ayerst (includes Wyeth-Lederle Vaccines and Pediatrics, Wyeth Laboratories, Lederle Laboratories, and Praxis Biologics)
   */
  WAL: "WAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaccineManufacturerCode =
  typeof VaccineManufacturerCode[keyof typeof VaccineManufacturerCode];
