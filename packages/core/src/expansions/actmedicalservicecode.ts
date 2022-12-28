/**
 * General category of medical service provided to the patient during their encounter.
 * http://terminology.hl7.org/ValueSet/v3-ActMedicalServiceCode
 */
export const ActMedicalServiceCodeCode = {
  /**
   * Alternative Level of Care
   */
  ALC: "ALC",

  /**
   * Cardiology
   */
  CARD: "CARD",

  /**
   * Chronic
   */
  CHR: "CHR",

  /**
   * Dental
   */
  DNTL: "DNTL",

  /**
   * Drug Rehab
   */
  DRGRHB: "DRGRHB",

  /**
   * General
   */
  GENRL: "GENRL",

  /**
   * Medical
   */
  MED: "MED",

  /**
   * Obstetrics
   */
  OBS: "OBS",

  /**
   * Oncology
   */
  ONC: "ONC",

  /**
   * Palliative
   */
  PALL: "PALL",

  /**
   * Pediatrics
   */
  PED: "PED",

  /**
   * Pharmaceutical
   */
  PHAR: "PHAR",

  /**
   * Physical Rehab
   */
  PHYRHB: "PHYRHB",

  /**
   * Psychiatric
   */
  PSYCH: "PSYCH",

  /**
   * Surgical
   */
  SURG: "SURG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMedicalServiceCodeCode =
  typeof ActMedicalServiceCodeCode[keyof typeof ActMedicalServiceCodeCode];
