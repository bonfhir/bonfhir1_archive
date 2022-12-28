/**
 * **Definition:** Set of codes indicating the type of insurance policy or program that pays for the cost of benefits provided to covered parties.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageTypeCode
 */
export const ActCoverageTypeCodeCode = {
  /**
   * ActCoverageTypeCode
   */
  _ActCoverageTypeCode: "_ActCoverageTypeCode",

  /**
   * ActInsurancePolicyCode
   */
  _ActInsurancePolicyCode: "_ActInsurancePolicyCode",

  /**
   * extended healthcare
   */
  EHCPOL: "EHCPOL",

  /**
   * health spending account
   */
  HSAPOL: "HSAPOL",

  /**
   * automobile
   */
  AUTOPOL: "AUTOPOL",

  /**
   * collision coverage policy
   */
  COL: "COL",

  /**
   * uninsured motorist policy
   */
  UNINSMOT: "UNINSMOT",

  /**
   * public healthcare
   */
  PUBLICPOL: "PUBLICPOL",

  /**
   * dental program
   */
  DENTPRG: "DENTPRG",

  /**
   * public health program
   */
  DISEASEPRG: "DISEASEPRG",

  /**
   * women's cancer detection program
   */
  CANPRG: "CANPRG",

  /**
   * end renal program
   */
  ENDRENAL: "ENDRENAL",

  /**
   * HIV-AIDS program
   */
  HIVAIDS: "HIVAIDS",

  /**
   * mandatory health program
   */
  MANDPOL: "MANDPOL",

  /**
   * mental health program
   */
  MENTPRG: "MENTPRG",

  /**
   * safety net clinic program
   */
  SAFNET: "SAFNET",

  /**
   * substance use program
   */
  SUBPRG: "SUBPRG",

  /**
   * subsidized health program
   */
  SUBSIDIZ: "SUBSIDIZ",

  /**
   * subsidized managed care program
   */
  SUBSIDMC: "SUBSIDMC",

  /**
   * subsidized supplemental health program
   */
  SUBSUPP: "SUBSUPP",

  /**
   * worker's compensation
   */
  WCBPOL: "WCBPOL",

  /**
   * ActInsuranceTypeCode
   */
  _ActInsuranceTypeCode: "_ActInsuranceTypeCode",

  /**
   * ActHealthInsuranceTypeCode
   */
  _ActHealthInsuranceTypeCode: "_ActHealthInsuranceTypeCode",

  /**
   * dental care policy
   */
  DENTAL: "DENTAL",

  /**
   * disease specific policy
   */
  DISEASE: "DISEASE",

  /**
   * drug policy
   */
  DRUGPOL: "DRUGPOL",

  /**
   * health insurance plan policy
   */
  HIP: "HIP",

  /**
   * long term care policy
   */
  LTC: "LTC",

  /**
   * managed care policy
   */
  MCPOL: "MCPOL",

  /**
   * point of service policy
   */
  POS: "POS",

  /**
   * health maintenance organization policy
   */
  HMO: "HMO",

  /**
   * preferred provider organization policy
   */
  PPO: "PPO",

  /**
   * mental health policy
   */
  MENTPOL: "MENTPOL",

  /**
   * substance use policy
   */
  SUBPOL: "SUBPOL",

  /**
   * vision care policy
   */
  VISPOL: "VISPOL",

  /**
   * disability insurance policy
   */
  DIS: "DIS",

  /**
   * employee welfare benefit plan policy
   */
  EWB: "EWB",

  /**
   * flexible benefit plan policy
   */
  FLEXP: "FLEXP",

  /**
   * life insurance policy
   */
  LIFE: "LIFE",

  /**
   * annuity policy
   */
  ANNU: "ANNU",

  /**
   * term life insurance policy
   */
  TLIFE: "TLIFE",

  /**
   * universal life insurance policy
   */
  ULIFE: "ULIFE",

  /**
   * property and casualty insurance policy
   */
  PNC: "PNC",

  /**
   * reinsurance policy
   */
  REI: "REI",

  /**
   * surplus line insurance policy
   */
  SURPL: "SURPL",

  /**
   * umbrella liability insurance policy
   */
  UMBRL: "UMBRL",

  /**
   * ActProgramTypeCode
   */
  _ActProgramTypeCode: "_ActProgramTypeCode",

  /**
   * charity program
   */
  CHAR: "CHAR",

  /**
   * crime victim program
   */
  CRIME: "CRIME",

  /**
   * employee assistance program
   */
  EAP: "EAP",

  /**
   * government employee health program
   */
  GOVEMP: "GOVEMP",

  /**
   * high risk pool program
   */
  HIRISK: "HIRISK",

  /**
   * indigenous peoples health program
   */
  IND: "IND",

  /**
   * military health program
   */
  MILITARY: "MILITARY",

  /**
   * retiree health program
   */
  RETIRE: "RETIRE",

  /**
   * social service program
   */
  SOCIAL: "SOCIAL",

  /**
   * veteran health program
   */
  VET: "VET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageTypeCodeCode =
  typeof ActCoverageTypeCodeCode[keyof typeof ActCoverageTypeCodeCode];
