/**
 * Infusion
 * http://terminology.hl7.org/ValueSet/v3-Infusion
 */
export const InfusionCode = {
  /**
   * Infusion, epidural
   */
  Infusionepidural: "EPI",

  /**
   * Infusion, intraarterial catheter
   */
  Infusionintraarterialcatheter: "IA",

  /**
   * Infusion, intracardiac
   */
  Infusionintracardiac: "IC",

  /**
   * Infusion, intracoronary
   */
  Infusionintracoronary: "ICOR",

  /**
   * Infusion, intraosseous, continuous
   */
  Infusionintraosseouscontinuous: "IOSSC",

  /**
   * Infusion, intrathecal
   */
  Infusionintrathecal: "IT",

  /**
   * Infusion, intravenous
   */
  Infusionintravenous: "IV",

  /**
   * Infusion, intravenous catheter
   */
  Infusionintravenouscatheter: "IVC",

  /**
   * Infusion, intravenous catheter, continuous
   */
  Infusionintravenouscathetercontinuous: "IVCC",

  /**
   * Infusion, intravenous catheter, intermittent
   */
  Infusionintravenouscatheterintermittent: "IVCI",

  /**
   * Infusion, intravenous catheter, pca pump
   */
  Infusionintravenouscatheterpcapump: "PCA",

  /**
   * Infusion, intravascular
   */
  Infusionintravascular: "IVASCINFUS",

  /**
   * Infusion, subcutaneous
   */
  Infusionsubcutaneous: "SQINFUS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InfusionCode = typeof InfusionCode[keyof typeof InfusionCode];
