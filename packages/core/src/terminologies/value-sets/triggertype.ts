/**
 * The type of trigger.
 * http://hl7.org/fhir/ValueSet/trigger-type
 */
export const TriggerTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TriggerTypeCode =
  typeof TriggerTypeCode[keyof typeof TriggerTypeCode];
