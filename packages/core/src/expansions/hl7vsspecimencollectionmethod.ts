/**
 * Concepts to document procedures or processes by which a specimen may be collected.  This is one of two code systems that are used instead of table 0070 (code system xxxx) which conflated specimen types and specimen collection methods.   Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0488
 */
export const Hl7VSSpecimenCollectionMethodCode = {
  /**
   * Aspiration, Fine Needle
   */
  FNA: "FNA",

  /**
   * Arterial puncture
   */
  PNA: "PNA",

  /**
   * Biopsy
   */
  BIO: "BIO",

  /**
   * Blood Culture, Aerobic Bottle
   */
  BCAE: "BCAE",

  /**
   * Blood Culture, Anaerobic Bottle
   */
  BCAN: "BCAN",

  /**
   * Blood Culture, Pediatric Bottle
   */
  BCPD: "BCPD",

  /**
   * Capillary Specimen
   */
  CAP: "CAP",

  /**
   * Catheterized
   */
  CATH: "CATH",

  /**
   * Environmental, Plate
   */
  EPLA: "EPLA",

  /**
   * Environmental, Swab
   */
  ESWA: "ESWA",

  /**
   * Line, Arterial
   */
  LNA: "LNA",

  /**
   * Line, CVP
   */
  CVP: "CVP",

  /**
   * Line, Venous
   */
  LNV: "LNV",

  /**
   * Martin-Lewis Agar
   */
  MARTL: "MARTL",

  /**
   * Mod. Martin-Lewis Agar
   */
  ML11: "ML11",

  /**
   * Pace, Gen-Probe
   */
  PACE: "PACE",

  /**
   * Pinworm Prep
   */
  PIN: "PIN",

  /**
   * Plate, Cough
   */
  KOFFP: "KOFFP",

  /**
   * Plate, Martin-Lewis
   */
  MLP: "MLP",

  /**
   * Plate, New York City
   */
  NYP: "NYP",

  /**
   * Plate, Thayer-Martin
   */
  TMP: "TMP",

  /**
   * Plates, Anaerobic
   */
  ANP: "ANP",

  /**
   * Plates, Blood Agar
   */
  BAP: "BAP",

  /**
   * Pump Prime
   */
  PRIME: "PRIME",

  /**
   * Pump Specimen
   */
  PUMP: "PUMP",

  /**
   * Quality Control For Micro
   */
  QC5: "QC5",

  /**
   * Scalp, Fetal Vein
   */
  SCLP: "SCLP",

  /**
   * Scrapings
   */
  SCRAPS: "SCRAPS",

  /**
   * Shaving
   */
  SHA: "SHA",

  /**
   * Swab
   */
  SWA: "SWA",

  /**
   * Swab, Dacron tipped
   */
  SWD: "SWD",

  /**
   * Swab, Wooden Shaft
   */
  WOOD: "WOOD",

  /**
   * Transport Media,
   */
  TMOT: "TMOT",

  /**
   * Transport Media, Anaerobic
   */
  TMAN: "TMAN",

  /**
   * Transport Media, Chalamydia
   */
  TMCH: "TMCH",

  /**
   * Transport Media, M4
   */
  TMM4: "TMM4",

  /**
   * Transport Media, Mycoplasma
   */
  TMMY: "TMMY",

  /**
   * Transport Media, PVA
   */
  TMPV: "TMPV",

  /**
   * Transport Media, Stool Culture
   */
  TMSC: "TMSC",

  /**
   * Transport Media, Ureaplasma
   */
  TMUP: "TMUP",

  /**
   * Transport Media, Viral
   */
  TMVI: "TMVI",

  /**
   * Venipuncture
   */
  VENIP: "VENIP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenCollectionMethodCode =
  typeof Hl7VSSpecimenCollectionMethodCode[keyof typeof Hl7VSSpecimenCollectionMethodCode];
