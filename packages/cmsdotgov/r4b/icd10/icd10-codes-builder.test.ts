import { CodeableConcept, Coding } from "fhir/r4";
import { resolve } from "node:path";
import { ICD10CodesBuilder } from "./icd10-codes-builder";

describe("icd10-codes-builder", () => {
  const builder = new ICD10CodesBuilder({
    sourceFilePath: resolve("./r4b/icd10/__fixtures__/icd10cm_codes_2023.txt"),
    version: "2023",
  });

  it("checks if the code exists", async () => {
    expect(await builder.isICD10Code("A033")).toBeTruthy();
    expect(await builder.isICD10Code("A")).toBeFalsy();
  });

  it("returns a coding from an existing code", async () => {
    const result = await builder.coding("A033");

    expect(result).toMatchObject(<Coding>{
      system: "http://hl7.org/fhir/sid/icd-10-cm",
      code: "A033",
      display: "Shigellosis due to Shigella sonnei",
      version: "2023",
    });
  });

  it("returns a coding from an unknown code", async () => {
    const result = await builder.coding("A123456789");

    expect(result).toMatchObject(<Coding>{
      system: "http://hl7.org/fhir/sid/icd-10-cm",
      code: "A123456789",
      display: undefined,
      version: undefined,
    });
  });

  it("returns a codeable concept from an existing code", async () => {
    const result = await builder.codeableConcept("A202");

    expect(result).toMatchObject(<CodeableConcept>{
      coding: [
        {
          system: "http://hl7.org/fhir/sid/icd-10-cm",
          code: "A202",
          display: "Pneumonic plague",
          version: "2023",
        },
      ],
      text: "Pneumonic plague",
    });
  });

  it("returns a codeable concept from an unknown code", async () => {
    const result = await builder.codeableConcept("A");

    expect(result).toMatchObject(<CodeableConcept>{
      coding: [
        {
          system: "http://hl7.org/fhir/sid/icd-10-cm",
          code: "A",
          version: undefined,
        },
      ],
    });
  });
});
