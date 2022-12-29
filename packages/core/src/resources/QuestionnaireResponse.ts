import { QuestionnaireResponse } from "fhir/r4";

export const buildQuestionnaireResponse = (
  resource: Omit<QuestionnaireResponse, "resourceType">
) => ({
  ...resource,
  resourceType: "QuestionnaireResponse",
});
