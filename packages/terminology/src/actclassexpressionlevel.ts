/**
 * **Description:**An expression level of genes/proteins or other expressed genomic entities.
 * http://terminology.hl7.org/ValueSet/v3-ActClassExpressionLevel
 */
export const ActClassExpressionLevelCode = {
  /**
   * expression level
   */
  expressionlevel: "EXP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassExpressionLevelCode =
  typeof ActClassExpressionLevelCode[keyof typeof ActClassExpressionLevelCode];
