/**
 * General category of medical service provided to the patient during their encounter.
 * http://terminology.hl7.org/ValueSet/v3-ActMedicalServiceCode
 */
export const ActMedicalServiceCodeCode = {
  /**
   * Alternative Level of Care
   */
  AlternativeLevelofCare: "ALC",

  /**
   * Cardiology
   */
  Cardiology: "CARD",

  /**
   * Chronic
   */
  Chronic: "CHR",

  /**
   * Dental
   */
  Dental: "DNTL",

  /**
   * Drug Rehab
   */
  DrugRehab: "DRGRHB",

  /**
   * General
   */
  General: "GENRL",

  /**
   * Medical
   */
  Medical: "MED",

  /**
   * Obstetrics
   */
  Obstetrics: "OBS",

  /**
   * Oncology
   */
  Oncology: "ONC",

  /**
   * Palliative
   */
  Palliative: "PALL",

  /**
   * Pediatrics
   */
  Pediatrics: "PED",

  /**
   * Pharmaceutical
   */
  Pharmaceutical: "PHAR",

  /**
   * Physical Rehab
   */
  PhysicalRehab: "PHYRHB",

  /**
   * Psychiatric
   */
  Psychiatric: "PSYCH",

  /**
   * Surgical
   */
  Surgical: "SURG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMedicalServiceCodeCode =
  typeof ActMedicalServiceCodeCode[keyof typeof ActMedicalServiceCodeCode];
