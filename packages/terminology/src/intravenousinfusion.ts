/**
 * Infusion, intravenous
 * http://terminology.hl7.org/ValueSet/v3-IntravenousInfusion
 */
export const IntravenousInfusionCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravenousInfusionCode =
  typeof IntravenousInfusionCode[keyof typeof IntravenousInfusionCode];
