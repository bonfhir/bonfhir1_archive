/**
 * The primary process by which the target is validated
 * http://terminology.hl7.org/ValueSet/verificationresult-validation-process
 */
export const Validation_processCode = {
  /**
   * edit check
   */
  "edit-check": "edit-check",

  /**
   * value set
   */
  valueset: "valueset",

  /**
   * primary source
   */
  primary: "primary",

  /**
   * multiple sources
   */
  multi: "multi",

  /**
   * standalone
   */
  standalone: "standalone",

  /**
   * in context
   */
  "in-context": "in-context",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Validation_processCode =
  typeof Validation_processCode[keyof typeof Validation_processCode];
