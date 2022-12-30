/**
 * Infusion, intravenous
 * http://terminology.hl7.org/ValueSet/v3-IntravenousInfusion
 */
export const IntravenousInfusionCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravenousInfusionCode =
  typeof IntravenousInfusionCode[keyof typeof IntravenousInfusionCode];
