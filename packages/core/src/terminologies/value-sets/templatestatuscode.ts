/**
 * The status indicates the level of maturity of the design and may be used to manage the    use of the design.
 * http://hl7.org/fhir/ValueSet/template-status-code
 */
export const TemplateStatusCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TemplateStatusCodeCode =
  typeof TemplateStatusCodeCode[keyof typeof TemplateStatusCodeCode];
