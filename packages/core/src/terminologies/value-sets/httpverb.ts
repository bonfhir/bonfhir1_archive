/**
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 * http://hl7.org/fhir/ValueSet/http-verb
 */
export const HTTPVerbCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HTTPVerbCode = typeof HTTPVerbCode[keyof typeof HTTPVerbCode];
