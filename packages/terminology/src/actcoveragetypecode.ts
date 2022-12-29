/**
 * **Definition:** Set of codes indicating the type of insurance policy or program that pays for the cost of benefits provided to covered parties.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageTypeCode
 */
export const ActCoverageTypeCodeCode = {
  /**
   * ActCoverageTypeCode
   */
  ActCoverageTypeCode: "_ActCoverageTypeCode",

  /**
   * ActInsurancePolicyCode
   */
  ActInsurancePolicyCode: "_ActInsurancePolicyCode",

  /**
   * extended healthcare
   */
  extendedhealthcare: "EHCPOL",

  /**
   * health spending account
   */
  healthspendingaccount: "HSAPOL",

  /**
   * automobile
   */
  automobile: "AUTOPOL",

  /**
   * collision coverage policy
   */
  collisioncoveragepolicy: "COL",

  /**
   * uninsured motorist policy
   */
  uninsuredmotoristpolicy: "UNINSMOT",

  /**
   * public healthcare
   */
  publichealthcare: "PUBLICPOL",

  /**
   * dental program
   */
  dentalprogram: "DENTPRG",

  /**
   * public health program
   */
  publichealthprogram: "DISEASEPRG",

  /**
   * women's cancer detection program
   */
  womenscancerdetectionprogram: "CANPRG",

  /**
   * end renal program
   */
  endrenalprogram: "ENDRENAL",

  /**
   * HIV-AIDS program
   */
  HIVAIDSprogram: "HIVAIDS",

  /**
   * mandatory health program
   */
  mandatoryhealthprogram: "MANDPOL",

  /**
   * mental health program
   */
  mentalhealthprogram: "MENTPRG",

  /**
   * safety net clinic program
   */
  safetynetclinicprogram: "SAFNET",

  /**
   * substance use program
   */
  substanceuseprogram: "SUBPRG",

  /**
   * subsidized health program
   */
  subsidizedhealthprogram: "SUBSIDIZ",

  /**
   * subsidized managed care program
   */
  subsidizedmanagedcareprogram: "SUBSIDMC",

  /**
   * subsidized supplemental health program
   */
  subsidizedsupplementalhealthprogram: "SUBSUPP",

  /**
   * worker's compensation
   */
  workerscompensation: "WCBPOL",

  /**
   * ActInsuranceTypeCode
   */
  ActInsuranceTypeCode: "_ActInsuranceTypeCode",

  /**
   * ActHealthInsuranceTypeCode
   */
  ActHealthInsuranceTypeCode: "_ActHealthInsuranceTypeCode",

  /**
   * dental care policy
   */
  dentalcarepolicy: "DENTAL",

  /**
   * disease specific policy
   */
  diseasespecificpolicy: "DISEASE",

  /**
   * drug policy
   */
  drugpolicy: "DRUGPOL",

  /**
   * health insurance plan policy
   */
  healthinsuranceplanpolicy: "HIP",

  /**
   * long term care policy
   */
  longtermcarepolicy: "LTC",

  /**
   * managed care policy
   */
  managedcarepolicy: "MCPOL",

  /**
   * point of service policy
   */
  pointofservicepolicy: "POS",

  /**
   * health maintenance organization policy
   */
  healthmaintenanceorganizationpolicy: "HMO",

  /**
   * preferred provider organization policy
   */
  preferredproviderorganizationpolicy: "PPO",

  /**
   * mental health policy
   */
  mentalhealthpolicy: "MENTPOL",

  /**
   * substance use policy
   */
  substanceusepolicy: "SUBPOL",

  /**
   * vision care policy
   */
  visioncarepolicy: "VISPOL",

  /**
   * disability insurance policy
   */
  disabilityinsurancepolicy: "DIS",

  /**
   * employee welfare benefit plan policy
   */
  employeewelfarebenefitplanpolicy: "EWB",

  /**
   * flexible benefit plan policy
   */
  flexiblebenefitplanpolicy: "FLEXP",

  /**
   * life insurance policy
   */
  lifeinsurancepolicy: "LIFE",

  /**
   * annuity policy
   */
  annuitypolicy: "ANNU",

  /**
   * term life insurance policy
   */
  termlifeinsurancepolicy: "TLIFE",

  /**
   * universal life insurance policy
   */
  universallifeinsurancepolicy: "ULIFE",

  /**
   * property and casualty insurance policy
   */
  propertyandcasualtyinsurancepolicy: "PNC",

  /**
   * reinsurance policy
   */
  reinsurancepolicy: "REI",

  /**
   * surplus line insurance policy
   */
  surpluslineinsurancepolicy: "SURPL",

  /**
   * umbrella liability insurance policy
   */
  umbrellaliabilityinsurancepolicy: "UMBRL",

  /**
   * ActProgramTypeCode
   */
  ActProgramTypeCode: "_ActProgramTypeCode",

  /**
   * charity program
   */
  charityprogram: "CHAR",

  /**
   * crime victim program
   */
  crimevictimprogram: "CRIME",

  /**
   * employee assistance program
   */
  employeeassistanceprogram: "EAP",

  /**
   * government employee health program
   */
  governmentemployeehealthprogram: "GOVEMP",

  /**
   * high risk pool program
   */
  highriskpoolprogram: "HIRISK",

  /**
   * indigenous peoples health program
   */
  indigenouspeopleshealthprogram: "IND",

  /**
   * military health program
   */
  militaryhealthprogram: "MILITARY",

  /**
   * retiree health program
   */
  retireehealthprogram: "RETIRE",

  /**
   * social service program
   */
  socialserviceprogram: "SOCIAL",

  /**
   * veteran health program
   */
  veteranhealthprogram: "VET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageTypeCodeCode =
  typeof ActCoverageTypeCodeCode[keyof typeof ActCoverageTypeCodeCode];
