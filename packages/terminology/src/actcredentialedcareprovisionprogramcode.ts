/**
 * **Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
 * http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareProvisionProgramCode
 */
export const ActCredentialedCareProvisionProgramCodeCode = {
  /**
   * act credentialed care provision program
   */
  actcredentialedcareprovisionprogram:
    "_ActCredentialedCareProvisionProgramCode",

  /**
   * accredited assisted living care
   */
  accreditedassistedlivingcare: "AALC",

  /**
   * accredited ambulatory care
   */
  accreditedambulatorycare: "AAMC",

  /**
   * accredited behavioral health care
   */
  accreditedbehavioralhealthcare: "ABHC",

  /**
   * accredited critical access hospital care
   */
  accreditedcriticalaccesshospitalcare: "ACAC",

  /**
   * accredited hospital care
   */
  accreditedhospitalcare: "ACHC",

  /**
   * accredited home care
   */
  accreditedhomecare: "AHOC",

  /**
   * accredited long term care
   */
  accreditedlongtermcare: "ALTC",

  /**
   * accredited office-based surgery care
   */
  accreditedofficebasedsurgerycare: "AOSC",

  /**
   * certified acute coronary syndrome care
   */
  certifiedacutecoronarysyndromecare: "CACS",

  /**
   * certified acute myocardial infarction care
   */
  certifiedacutemyocardialinfarctioncare: "CAMI",

  /**
   * certified asthma care
   */
  certifiedasthmacare: "CAST",

  /**
   * certified bariatric surgery care
   */
  certifiedbariatricsurgerycare: "CBAR",

  /**
   * certified coronary artery disease care
   */
  certifiedcoronaryarterydiseasecare: "CCAD",

  /**
   * certified cardiac care
   */
  certifiedcardiaccare: "CCAR",

  /**
   * certified depression care
   */
  certifieddepressioncare: "CDEP",

  /**
   * certified digestive/gastrointestinal disorders care
   */
  certifieddigestivegastrointestinaldisorderscare: "CDGD",

  /**
   * certified diabetes care
   */
  certifieddiabetescare: "CDIA",

  /**
   * certified epilepsy care
   */
  certifiedepilepsycare: "CEPI",

  /**
   * certified frail elderly care
   */
  certifiedfrailelderlycare: "CFEL",

  /**
   * certified heart failure care
   */
  certifiedheartfailurecare: "CHFC",

  /**
   * certified high risk obstetrics care
   */
  certifiedhighriskobstetricscare: "CHRO",

  /**
   * certified hyperlipidemia care
   */
  certifiedhyperlipidemiacare: "CHYP",

  /**
   * certified migraine headache care
   */
  certifiedmigraineheadachecare: "CMIH",

  /**
   * certified multiple sclerosis care
   */
  certifiedmultiplesclerosiscare: "CMSC",

  /**
   * certified orthopedic joint replacement care
   */
  certifiedorthopedicjointreplacementcare: "COJR",

  /**
   * certified oncology care
   */
  certifiedoncologycare: "CONC",

  /**
   * certified chronic obstructive pulmonary disease care
   */
  certifiedchronicobstructivepulmonarydiseasecare: "COPD",

  /**
   * certified organ transplant care
   */
  certifiedorgantransplantcare: "CORT",

  /**
   * certified parkinsons disease care
   */
  certifiedparkinsonsdiseasecare: "CPAD",

  /**
   * certified pneumonia disease care
   */
  certifiedpneumoniadiseasecare: "CPND",

  /**
   * certified primary stroke center care
   */
  certifiedprimarystrokecentercare: "CPST",

  /**
   * certified stroke disease management care
   */
  certifiedstrokediseasemanagementcare: "CSDM",

  /**
   * certified sickle cell care
   */
  certifiedsicklecellcare: "CSIC",

  /**
   * certified sleep disorders care
   */
  certifiedsleepdisorderscare: "CSLD",

  /**
   * certified spine treatment care
   */
  certifiedspinetreatmentcare: "CSPT",

  /**
   * certified trauma/burn center care
   */
  certifiedtraumaburncentercare: "CTBU",

  /**
   * certified vascular diseases care
   */
  certifiedvasculardiseasescare: "CVDC",

  /**
   * certified wound management care
   */
  certifiedwoundmanagementcare: "CWMA",

  /**
   * certified women's health care
   */
  certifiedwomenshealthcare: "CWOH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCredentialedCareProvisionProgramCodeCode =
  typeof ActCredentialedCareProvisionProgramCodeCode[keyof typeof ActCredentialedCareProvisionProgramCodeCode];
