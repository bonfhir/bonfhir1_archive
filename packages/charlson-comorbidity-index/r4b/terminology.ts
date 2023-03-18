import { build } from "@bonfhir/core/r4b";
import { ConceptMap, ConceptMapGroupElement } from "fhir/r4";

export const CharlsonComorbidityIndexCode = {
  age: "age",
  "myocardial-infarction": "myocardial-infarction",
  "congestive-heart-failure": "congestive-heart-failure",
  "peripheral-vascular-disease": "peripheral-vascular-disease",
  "cerebrovascular-accident/transient-ischemic-attack":
    "cerebrovascular-accident/transient-ischemic-attack",
  dementia: "dementia",
  "chronic-obstructive-pulmonary-disease":
    "chronic-obstructive-pulmonary-disease",
  "connective-tissue-disease": "connective-tissue-disease",
  "peptic-ulcer-disease": "peptic-ulcer-disease",
  "mild-liver-disease": "mild-liver-disease",
  "uncomplicated-diabetes": "uncomplicated-diabetes",
  hemiplegia: "hemiplegia",
  "chronic-kidney-disease": "chronic-kidney-disease",
  "diabetes-with-end-organ-damage": "diabetes-with-end-organ-damage",
  "localized-solid-tumor": "localized-solid-tumor",
  leukemia: "leukemia",
  lymphoma: "lymphoma",
  "moderate-to-severe-liver-disease": "moderate-to-severe-liver-disease",
  "metastatic-solid-tumor": "metastatic-solid-tumor",
  aids: "aids",
} as const;

export type CharlsonComorbidityIndexCode =
  (typeof CharlsonComorbidityIndexCode)[keyof typeof CharlsonComorbidityIndexCode];

export const CharlsonComorbidityIndexCodeSystemURI =
  "https://bonfhir.dev/packages/clinical/charlson-comorbidity-index";

/**
 * Build a template that can be used as a baseline for a ConceptMap.
 */
export function buildTemplateConceptMapForCCI(): ConceptMap {
  return build("ConceptMap", {
    name: "CharlsonComorbidityIndexCodes",
    status: "active",
    purpose:
      "This ConceptMap is used in the computation of the Charlson Comorbidity Index (CCI); it allows the mapping between CCI variables and Condition codes.",
    group: [
      {
        source: CharlsonComorbidityIndexCodeSystemURI,
        element: Object.keys(CharlsonComorbidityIndexCode).map(
          (code): ConceptMapGroupElement => ({
            code,
          })
        ),
      },
    ],
  });
}
