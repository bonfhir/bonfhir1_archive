import { ResourceType } from "@bonfhir/core/r4b";
import { join } from "node:path";
import { syntheticGenerator } from "./synthetic";

describe("synthetic", () => {
  const synthetic = syntheticGenerator(
    join(__dirname, "__fixtures__", "synthea", "*.json")
  );

  it.each(<Array<ResourceType>>["Patient", "Organization", "Practitioner"])(
    "returns a random synthetic data with the proper resource type of %s.",
    async (resourceType) => {
      const resource = await synthetic(resourceType);
      expect(resource.resourceType).toBe(resourceType);
    }
  );

  it("refine search using fhirPath", async () => {
    const result = await synthetic("Patient", {
      fhirPath: "name.where(family='Ankunding277')",
    });
    expect(result.name?.[0]?.family).toEqual("Ankunding277");

    const result2 = await synthetic("Observation", {
      fhirPath:
        "code.coding.code='39156-5' and valueQuantity.value > 10 and valueQuantity.unit = 'kg/m2'",
    });
    expect(result2.valueQuantity?.value).toBeGreaterThan(10);
  });
});
