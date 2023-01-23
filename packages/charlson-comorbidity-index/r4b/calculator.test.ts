/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildCodeableConcept } from "@bonfhir/core/r4b";
import { fake } from "@bonfhir/test-support/r4b";
import { ConceptMap, Patient } from "fhir/r4";
import {
  CharlsonComorbidityIndexResultError,
  CharlsonComorbidityIndexResultSuccess,
  computeCharlsonComorbidityIndex,
} from "./calculator";
import icd10CodesConceptmap from "./__fixtures__/icd10-codes-conceptmap.fhir.json";

describe("charlson-comorbidity-calculator", () => {
  it("validate missing patient", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: undefined as any as Patient,
      conditions: [],
      cciConceptMap: undefined as any as ConceptMap,
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultError>{
      status: "error",
      errorCode: "missing-patient",
      errorMessage: expect.stringMatching(/.+/),
    });
  });

  it("validate missing conditions", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: fake("Patient"),
      conditions: [],
      cciConceptMap: undefined as any as ConceptMap,
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultError>{
      status: "error",
      errorCode: "missing-conditions",
      errorMessage: expect.stringMatching(/.+/),
    });
  });

  it("validate missing conceptmap", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: fake("Patient"),
      conditions: [fake("Condition")],
      cciConceptMap: undefined as any as ConceptMap,
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultError>{
      status: "error",
      errorCode: "missing-conceptmap",
      errorMessage: expect.stringMatching(/.+/),
    });
  });

  it("validate conform conceptmap", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: fake("Patient"),
      conditions: [fake("Condition")],
      cciConceptMap: fake("ConceptMap", { group: [{ element: [{}] }] }),
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultError>{
      status: "error",
      errorCode: "invalid-conceptmap",
      errorMessage: expect.stringMatching(/.+/),
    });
  });

  it("return for a young patient with no conditions", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: fake("Patient", { birthDate: "2000-01-12" }),
      conditions: [fake("Condition")],
      cciConceptMap: icd10CodesConceptmap as ConceptMap,
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultSuccess>{
      status: "success",
      score: 0,
      tenYearSurvivalRate: 0.98,
      basedOn: [] as unknown,
    });
  });

  const birthDate65Date = new Date();
  birthDate65Date.setFullYear(new Date().getFullYear() - 65);
  const birthDate65 = birthDate65Date.toDateString();

  it("return for a 65 years old patient with no conditions", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: fake("Patient", { birthDate: birthDate65 }),
      conditions: [fake("Condition")],
      cciConceptMap: icd10CodesConceptmap as ConceptMap,
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultSuccess>{
      status: "success",
      score: 2,
      tenYearSurvivalRate: 0.9,
      detailedScores: expect.objectContaining({
        age: 2,
      }),
      basedOn: [] as unknown,
    });
  });

  it("return for a 65 years old patient with Myocardial condition", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: fake("Patient", { birthDate: birthDate65 }),
      conditions: [
        fake("Condition", {
          code: buildCodeableConcept({ coding: [{ code: "I2111" }] }),
        }),
      ],
      cciConceptMap: icd10CodesConceptmap as ConceptMap,
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultSuccess>{
      status: "success",
      score: 3,
      tenYearSurvivalRate: 0.77,
      detailedScores: expect.objectContaining({
        age: 2,
        "myocardial-infarction": 1,
      }),
      basedOn: expect.arrayContaining([
        expect.objectContaining({
          type: "Condition",
        }),
      ]),
    });
  });

  it("return for a 65 years old patient with Myocardial, Leukemia & AIDS conditions", () => {
    const result = computeCharlsonComorbidityIndex({
      patient: fake("Patient", { birthDate: birthDate65 }),
      conditions: [
        fake("Condition"),
        fake("Condition", {
          code: buildCodeableConcept({ coding: [{ code: "I2111" }] }),
        }),
        fake("Condition", {
          code: buildCodeableConcept({ coding: [{ code: "C9101" }] }),
        }),
        fake("Condition", {
          code: buildCodeableConcept({ coding: [{ code: "A1809" }] }),
        }),
      ],
      cciConceptMap: icd10CodesConceptmap as ConceptMap,
    });

    expect(result).toMatchObject(<CharlsonComorbidityIndexResultSuccess>{
      status: "success",
      score: 11,
      tenYearSurvivalRate: 0,
      detailedScores: expect.objectContaining({
        age: 2,
        "myocardial-infarction": 1,
        leukemia: 2,
        aids: 6,
      }),
      basedOn: expect.arrayContaining([
        expect.objectContaining({
          type: "Condition",
        }),
      ]),
    });
  });
});
