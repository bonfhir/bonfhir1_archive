/**
 * The media type of the expression language.
 * http://hl7.org/fhir/ValueSet/expression-language
 */
export const ExpressionLanguageCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExpressionLanguageCode =
  typeof ExpressionLanguageCode[keyof typeof ExpressionLanguageCode];
