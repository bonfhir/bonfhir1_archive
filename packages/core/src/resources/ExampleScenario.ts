import { ExampleScenario } from "fhir/r4";

export const buildExampleScenario = (
  resource: Omit<ExampleScenario, "resourceType">
) => ({
  ...resource,
  resourceType: "ExampleScenario",
});
