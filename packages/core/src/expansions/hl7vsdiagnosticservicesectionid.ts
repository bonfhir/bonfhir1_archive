/**
 * Concepts which specify a section of a diagnostic service where the observation may be performed.
 * http://terminology.hl7.org/ValueSet/v2-0074
 */
export const Hl7VSDiagnosticServiceSectionIdCode = {
  /**
   * Audiology
   */
  AU: "AU",

  /**
   * Blood Gases
   */
  BG: "BG",

  /**
   * Blood Bank
   */
  BLB: "BLB",

  /**
   * Cytogenetics
   */
  CG: "CG",

  /**
   * Cardiac Ultrasound
   */
  CUS: "CUS",

  /**
   * Cardiac Catheterization
   */
  CTH: "CTH",

  /**
   * CAT Scan
   */
  CT: "CT",

  /**
   * Chemistry
   */
  CH: "CH",

  /**
   * Cytopathology
   */
  CP: "CP",

  /**
   * Electrocardiac (e.g., EKG,  EEC, Holter)
   */
  EC: "EC",

  /**
   * Electroneuro (EEG, EMG,EP,PSG)
   */
  EN: "EN",

  /**
   * Genetics
   */
  GE: "GE",

  /**
   * Hematology
   */
  HM: "HM",

  /**
   * Diagnostic Imaging
   */
  IMG: "IMG",

  /**
   * Bedside ICU Monitoring
   */
  ICU: "ICU",

  /**
   * Immunology
   */
  IMM: "IMM",

  /**
   * Laboratory
   */
  LAB: "LAB",

  /**
   * Microbiology
   */
  MB: "MB",

  /**
   * Mycobacteriology
   */
  MCB: "MCB",

  /**
   * Mycology
   */
  MYC: "MYC",

  /**
   * Nuclear Medicine Scan
   */
  NMS: "NMS",

  /**
   * Nuclear Magnetic Resonance
   */
  NMR: "NMR",

  /**
   * Nursing Service Measures
   */
  NRS: "NRS",

  /**
   * OB Ultrasound
   */
  OUS: "OUS",

  /**
   * Occupational Therapy
   */
  OT: "OT",

  /**
   * Other
   */
  OTH: "OTH",

  /**
   * Outside Lab
   */
  OSL: "OSL",

  /**
   * Parasitology
   */
  PAR: "PAR",

  /**
   * Pharmacy
   */
  PHR: "PHR",

  /**
   * Pathology (gross & histopath, not surgical)
   */
  PAT: "PAT",

  /**
   * Physical Therapy
   */
  PT: "PT",

  /**
   * Physician (Hx. Dx, admission note, etc.)
   */
  PHY: "PHY",

  /**
   * Pulmonary Function
   */
  PF: "PF",

  /**
   * Radiology
   */
  RAD: "RAD",

  /**
   * Radiograph
   */
  RX: "RX",

  /**
   * Radiology Ultrasound
   */
  RUS: "RUS",

  /**
   * Respiratory Care (therapy)
   */
  RC: "RC",

  /**
   * Radiation Therapy
   */
  RT: "RT",

  /**
   * Serology
   */
  SR: "SR",

  /**
   * Surgical Pathology
   */
  SP: "SP",

  /**
   * Toxicology
   */
  TX: "TX",

  /**
   * Vascular Ultrasound
   */
  VUS: "VUS",

  /**
   * Virology
   */
  VR: "VR",

  /**
   * Urinalysis
   */
  URN: "URN",

  /**
   * Cineradiograph
   */
  XRC: "XRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDiagnosticServiceSectionIdCode =
  typeof Hl7VSDiagnosticServiceSectionIdCode[keyof typeof Hl7VSDiagnosticServiceSectionIdCode];
