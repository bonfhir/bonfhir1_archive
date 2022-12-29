import { Questionnaire } from "fhir/r4";

export const buildQuestionnaire = (
  resource: Omit<Questionnaire, "resourceType">
) => ({
  ...resource,
  resourceType: "Questionnaire",
});
