/**
 * Code the reason for different URLs, eg abstract and full-text.
 * http://hl7.org/fhir/ValueSet/article-url-type
 */
export const ArticleUrlTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ArticleUrlTypeCode =
  typeof ArticleUrlTypeCode[keyof typeof ArticleUrlTypeCode];
