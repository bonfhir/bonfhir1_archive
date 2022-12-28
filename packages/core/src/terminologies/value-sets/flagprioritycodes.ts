/**
 * This value set is provided as an exemplar. The value set is driven by IHE Table B.8-4: Abnormal Flags, Alert Priority.
 * http://hl7.org/fhir/ValueSet/flag-priority
 */
export const FlagPriorityCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FlagPriorityCodesCode =
  typeof FlagPriorityCodesCode[keyof typeof FlagPriorityCodesCode];
