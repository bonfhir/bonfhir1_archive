/**
 * Information the US Government creates or possesses, or that an entity creates or possesses for or on behalf of the Government, that a law, regulation, or Government-wide policy requires or permits an agency to handle using safeguarding or dissemination controls.

Purpose: Supports the selection of the entire ControlledUnclassifiedInformation value set for e.g., rules engine policy set purposes.
 * http://terminology.hl7.org/ValueSet/v3-CUI
 */
export const CUICode = {
  /**
   * ControlledUnclassifiedInformation
   */
  ControlledUnclassifiedInformation: "ControlledUnclassifiedInformation",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CUICode = typeof CUICode[keyof typeof CUICode];
