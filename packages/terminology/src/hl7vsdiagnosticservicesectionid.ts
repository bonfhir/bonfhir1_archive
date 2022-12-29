/**
 * Concepts which specify a section of a diagnostic service where the observation may be performed.
 * http://terminology.hl7.org/ValueSet/v2-0074
 */
export const Hl7VSDiagnosticServiceSectionIdCode = {
  /**
   * Audiology
   */
  Audiology: "AU",

  /**
   * Blood Gases
   */
  BloodGases: "BG",

  /**
   * Blood Bank
   */
  BloodBank: "BLB",

  /**
   * Cytogenetics
   */
  Cytogenetics: "CG",

  /**
   * Cardiac Ultrasound
   */
  CardiacUltrasound: "CUS",

  /**
   * Cardiac Catheterization
   */
  CardiacCatheterization: "CTH",

  /**
   * CAT Scan
   */
  CATScan: "CT",

  /**
   * Chemistry
   */
  Chemistry: "CH",

  /**
   * Cytopathology
   */
  Cytopathology: "CP",

  /**
   * Electrocardiac (e.g., EKG,  EEC, Holter)
   */
  ElectrocardiacegEKGEECHolter: "EC",

  /**
   * Electroneuro (EEG, EMG,EP,PSG)
   */
  ElectroneuroEEGEMGEPPSG: "EN",

  /**
   * Genetics
   */
  Genetics: "GE",

  /**
   * Hematology
   */
  Hematology: "HM",

  /**
   * Diagnostic Imaging
   */
  DiagnosticImaging: "IMG",

  /**
   * Bedside ICU Monitoring
   */
  BedsideICUMonitoring: "ICU",

  /**
   * Immunology
   */
  Immunology: "IMM",

  /**
   * Laboratory
   */
  Laboratory: "LAB",

  /**
   * Microbiology
   */
  Microbiology: "MB",

  /**
   * Mycobacteriology
   */
  Mycobacteriology: "MCB",

  /**
   * Mycology
   */
  Mycology: "MYC",

  /**
   * Nuclear Medicine Scan
   */
  NuclearMedicineScan: "NMS",

  /**
   * Nuclear Magnetic Resonance
   */
  NuclearMagneticResonance: "NMR",

  /**
   * Nursing Service Measures
   */
  NursingServiceMeasures: "NRS",

  /**
   * OB Ultrasound
   */
  OBUltrasound: "OUS",

  /**
   * Occupational Therapy
   */
  OccupationalTherapy: "OT",

  /**
   * Other
   */
  Other: "OTH",

  /**
   * Outside Lab
   */
  OutsideLab: "OSL",

  /**
   * Parasitology
   */
  Parasitology: "PAR",

  /**
   * Pharmacy
   */
  Pharmacy: "PHR",

  /**
   * Pathology (gross & histopath, not surgical)
   */
  Pathologygrosshistopathnotsurgical: "PAT",

  /**
   * Physical Therapy
   */
  PhysicalTherapy: "PT",

  /**
   * Physician (Hx. Dx, admission note, etc.)
   */
  PhysicianHxDxadmissionnoteetc: "PHY",

  /**
   * Pulmonary Function
   */
  PulmonaryFunction: "PF",

  /**
   * Radiology
   */
  Radiology: "RAD",

  /**
   * Radiograph
   */
  Radiograph: "RX",

  /**
   * Radiology Ultrasound
   */
  RadiologyUltrasound: "RUS",

  /**
   * Respiratory Care (therapy)
   */
  RespiratoryCaretherapy: "RC",

  /**
   * Radiation Therapy
   */
  RadiationTherapy: "RT",

  /**
   * Serology
   */
  Serology: "SR",

  /**
   * Surgical Pathology
   */
  SurgicalPathology: "SP",

  /**
   * Toxicology
   */
  Toxicology: "TX",

  /**
   * Vascular Ultrasound
   */
  VascularUltrasound: "VUS",

  /**
   * Virology
   */
  Virology: "VR",

  /**
   * Urinalysis
   */
  Urinalysis: "URN",

  /**
   * Cineradiograph
   */
  Cineradiograph: "XRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDiagnosticServiceSectionIdCode =
  typeof Hl7VSDiagnosticServiceSectionIdCode[keyof typeof Hl7VSDiagnosticServiceSectionIdCode];
