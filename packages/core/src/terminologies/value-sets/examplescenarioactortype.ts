/**
 * The type of actor - system or human.
 * http://hl7.org/fhir/ValueSet/examplescenario-actor-type
 */
export const ExampleScenarioActorTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleScenarioActorTypeCode =
  typeof ExampleScenarioActorTypeCode[keyof typeof ExampleScenarioActorTypeCode];
