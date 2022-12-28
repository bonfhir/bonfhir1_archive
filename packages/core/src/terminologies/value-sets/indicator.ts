/**
 * This value set captures the set of indicator codes defined by the CDS Hooks specification.
 * http://hl7.org/fhir/ValueSet/cdshooks-indicator
 */
export const IndicatorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IndicatorCode = typeof IndicatorCode[keyof typeof IndicatorCode];
