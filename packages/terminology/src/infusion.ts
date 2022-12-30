/**
 * Infusion
 * http://terminology.hl7.org/ValueSet/v3-Infusion
 */
export const InfusionCode = {
  /**
   * Infusion, epidural
   */
  EPI: "EPI",

  /**
   * Infusion, intraarterial catheter
   */
  IA: "IA",

  /**
   * Infusion, intracardiac
   */
  IC: "IC",

  /**
   * Infusion, intracoronary
   */
  ICOR: "ICOR",

  /**
   * Infusion, intraosseous, continuous
   */
  IOSSC: "IOSSC",

  /**
   * Infusion, intrathecal
   */
  IT: "IT",

  /**
   * Infusion, intravenous
   */
  IV: "IV",

  /**
   * Infusion, intravenous catheter
   */
  IVC: "IVC",

  /**
   * Infusion, intravenous catheter, continuous
   */
  IVCC: "IVCC",

  /**
   * Infusion, intravenous catheter, intermittent
   */
  IVCI: "IVCI",

  /**
   * Infusion, intravenous catheter, pca pump
   */
  PCA: "PCA",

  /**
   * Infusion, intravascular
   */
  IVASCINFUS: "IVASCINFUS",

  /**
   * Infusion, subcutaneous
   */
  SQINFUS: "SQINFUS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InfusionCode = typeof InfusionCode[keyof typeof InfusionCode];
