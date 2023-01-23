import { CodeableConcept, Coding } from "fhir/r4";
import { resolve } from "node:path";
import { HCPCSCodesBuilder } from "./hcpcs-codes-builder";

describe("hcpcs-codes-builder", () => {
  const builder = new HCPCSCodesBuilder({
    sourceFilePath: resolve(
      "./r4b/hcpcs/__fixtures__/HCPC2023_JAN_ANWEB_v3.csv"
    ),
    version: "2023-01",
  });

  it("checks if the code exists", async () => {
    expect(await builder.isHCPCSCode("G0157")).toBeTruthy();
    expect(await builder.isHCPCSCode("XXX")).toBeFalsy();
  });

  it("returns a coding from an existing code", async () => {
    const result = await builder.coding("G0157");

    expect(result).toMatchObject(<Coding>{
      system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",
      code: "G0157",
      display:
        "Services performed by a qualified physical therapist assistant in the home health or hospice setting, each 15 minutes",
      version: "2023-01",
    });
  });

  it("returns a coding from an unknown code", async () => {
    const result = await builder.coding("A123456789");

    expect(result).toMatchObject(<Coding>{
      system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",
      code: "A123456789",
      display: undefined,
      version: undefined,
    });
  });

  it("returns a codeable concept from an existing code", async () => {
    const result = await builder.codeableConcept("L3470");

    expect(result).toMatchObject(<CodeableConcept>{
      coding: [
        {
          system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",
          code: "L3470",
          display: "Heel, thomas extended to ball",
          version: "2023-01",
        },
      ],
      text: "Heel, thomas extended to ball",
    });
  });

  it("returns a codeable concept from an unknown code", async () => {
    const result = await builder.codeableConcept("A");

    expect(result).toMatchObject(<CodeableConcept>{
      coding: [
        {
          system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",
          code: "A",
          version: undefined,
        },
      ],
    });
  });
});
