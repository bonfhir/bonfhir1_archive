/**
 * Concepts to document procedures or processes by which a specimen may be collected.  This is one of two code systems that are used instead of table 0070 (code system xxxx) which conflated specimen types and specimen collection methods.   Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0488
 */
export const Hl7VSSpecimenCollectionMethodCode = {
  /**
   * Aspiration, Fine Needle
   */
  AspirationFineNeedle: "FNA",

  /**
   * Arterial puncture
   */
  Arterialpuncture: "PNA",

  /**
   * Biopsy
   */
  Biopsy: "BIO",

  /**
   * Blood Culture, Aerobic Bottle
   */
  BloodCultureAerobicBottle: "BCAE",

  /**
   * Blood Culture, Anaerobic Bottle
   */
  BloodCultureAnaerobicBottle: "BCAN",

  /**
   * Blood Culture, Pediatric Bottle
   */
  BloodCulturePediatricBottle: "BCPD",

  /**
   * Capillary Specimen
   */
  CapillarySpecimen: "CAP",

  /**
   * Catheterized
   */
  Catheterized: "CATH",

  /**
   * Environmental, Plate
   */
  EnvironmentalPlate: "EPLA",

  /**
   * Environmental, Swab
   */
  EnvironmentalSwab: "ESWA",

  /**
   * Line, Arterial
   */
  LineArterial: "LNA",

  /**
   * Line, CVP
   */
  LineCVP: "CVP",

  /**
   * Line, Venous
   */
  LineVenous: "LNV",

  /**
   * Martin-Lewis Agar
   */
  MartinLewisAgar: "MARTL",

  /**
   * Mod. Martin-Lewis Agar
   */
  ModMartinLewisAgar: "ML11",

  /**
   * Pace, Gen-Probe
   */
  PaceGenProbe: "PACE",

  /**
   * Pinworm Prep
   */
  PinwormPrep: "PIN",

  /**
   * Plate, Cough
   */
  PlateCough: "KOFFP",

  /**
   * Plate, Martin-Lewis
   */
  PlateMartinLewis: "MLP",

  /**
   * Plate, New York City
   */
  PlateNewYorkCity: "NYP",

  /**
   * Plate, Thayer-Martin
   */
  PlateThayerMartin: "TMP",

  /**
   * Plates, Anaerobic
   */
  PlatesAnaerobic: "ANP",

  /**
   * Plates, Blood Agar
   */
  PlatesBloodAgar: "BAP",

  /**
   * Pump Prime
   */
  PumpPrime: "PRIME",

  /**
   * Pump Specimen
   */
  PumpSpecimen: "PUMP",

  /**
   * Quality Control For Micro
   */
  QualityControlForMicro: "QC5",

  /**
   * Scalp, Fetal Vein
   */
  ScalpFetalVein: "SCLP",

  /**
   * Scrapings
   */
  Scrapings: "SCRAPS",

  /**
   * Shaving
   */
  Shaving: "SHA",

  /**
   * Swab
   */
  Swab: "SWA",

  /**
   * Swab, Dacron tipped
   */
  SwabDacrontipped: "SWD",

  /**
   * Swab, Wooden Shaft
   */
  SwabWoodenShaft: "WOOD",

  /**
   * Transport Media,
   */
  TransportMedia: "TMOT",

  /**
   * Transport Media, Anaerobic
   */
  TransportMediaAnaerobic: "TMAN",

  /**
   * Transport Media, Chalamydia
   */
  TransportMediaChalamydia: "TMCH",

  /**
   * Transport Media, M4
   */
  TransportMediaM4: "TMM4",

  /**
   * Transport Media, Mycoplasma
   */
  TransportMediaMycoplasma: "TMMY",

  /**
   * Transport Media, PVA
   */
  TransportMediaPVA: "TMPV",

  /**
   * Transport Media, Stool Culture
   */
  TransportMediaStoolCulture: "TMSC",

  /**
   * Transport Media, Ureaplasma
   */
  TransportMediaUreaplasma: "TMUP",

  /**
   * Transport Media, Viral
   */
  TransportMediaViral: "TMVI",

  /**
   * Venipuncture
   */
  Venipuncture: "VENIP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenCollectionMethodCode =
  typeof Hl7VSSpecimenCollectionMethodCode[keyof typeof Hl7VSSpecimenCollectionMethodCode];
