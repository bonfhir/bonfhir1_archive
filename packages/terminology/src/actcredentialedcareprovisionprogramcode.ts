/**
 * **Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
 * http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareProvisionProgramCode
 */
export const ActCredentialedCareProvisionProgramCodeCode = {
  /**
   * act credentialed care provision program
   */
  _ActCredentialedCareProvisionProgramCode:
    "_ActCredentialedCareProvisionProgramCode",

  /**
   * accredited assisted living care
   */
  AALC: "AALC",

  /**
   * accredited ambulatory care
   */
  AAMC: "AAMC",

  /**
   * accredited behavioral health care
   */
  ABHC: "ABHC",

  /**
   * accredited critical access hospital care
   */
  ACAC: "ACAC",

  /**
   * accredited hospital care
   */
  ACHC: "ACHC",

  /**
   * accredited home care
   */
  AHOC: "AHOC",

  /**
   * accredited long term care
   */
  ALTC: "ALTC",

  /**
   * accredited office-based surgery care
   */
  AOSC: "AOSC",

  /**
   * certified acute coronary syndrome care
   */
  CACS: "CACS",

  /**
   * certified acute myocardial infarction care
   */
  CAMI: "CAMI",

  /**
   * certified asthma care
   */
  CAST: "CAST",

  /**
   * certified bariatric surgery care
   */
  CBAR: "CBAR",

  /**
   * certified coronary artery disease care
   */
  CCAD: "CCAD",

  /**
   * certified cardiac care
   */
  CCAR: "CCAR",

  /**
   * certified depression care
   */
  CDEP: "CDEP",

  /**
   * certified digestive/gastrointestinal disorders care
   */
  CDGD: "CDGD",

  /**
   * certified diabetes care
   */
  CDIA: "CDIA",

  /**
   * certified epilepsy care
   */
  CEPI: "CEPI",

  /**
   * certified frail elderly care
   */
  CFEL: "CFEL",

  /**
   * certified heart failure care
   */
  CHFC: "CHFC",

  /**
   * certified high risk obstetrics care
   */
  CHRO: "CHRO",

  /**
   * certified hyperlipidemia care
   */
  CHYP: "CHYP",

  /**
   * certified migraine headache care
   */
  CMIH: "CMIH",

  /**
   * certified multiple sclerosis care
   */
  CMSC: "CMSC",

  /**
   * certified orthopedic joint replacement care
   */
  COJR: "COJR",

  /**
   * certified oncology care
   */
  CONC: "CONC",

  /**
   * certified chronic obstructive pulmonary disease care
   */
  COPD: "COPD",

  /**
   * certified organ transplant care
   */
  CORT: "CORT",

  /**
   * certified parkinsons disease care
   */
  CPAD: "CPAD",

  /**
   * certified pneumonia disease care
   */
  CPND: "CPND",

  /**
   * certified primary stroke center care
   */
  CPST: "CPST",

  /**
   * certified stroke disease management care
   */
  CSDM: "CSDM",

  /**
   * certified sickle cell care
   */
  CSIC: "CSIC",

  /**
   * certified sleep disorders care
   */
  CSLD: "CSLD",

  /**
   * certified spine treatment care
   */
  CSPT: "CSPT",

  /**
   * certified trauma/burn center care
   */
  CTBU: "CTBU",

  /**
   * certified vascular diseases care
   */
  CVDC: "CVDC",

  /**
   * certified wound management care
   */
  CWMA: "CWMA",

  /**
   * certified women's health care
   */
  CWOH: "CWOH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCredentialedCareProvisionProgramCodeCode =
  typeof ActCredentialedCareProvisionProgramCodeCode[keyof typeof ActCredentialedCareProvisionProgramCodeCode];
