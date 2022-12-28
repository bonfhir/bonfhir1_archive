/**
 * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
 * http://hl7.org/fhir/ValueSet/questionnaire-enable-behavior
 */
export const EnableWhenBehaviorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EnableWhenBehaviorCode =
  typeof EnableWhenBehaviorCode[keyof typeof EnableWhenBehaviorCode];
