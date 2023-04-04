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

  it("throws an error when no synthetic resources are found matching the requested resourceType", async () => {
    // We request synthetic of a resource type we know probably doesn't exist
    // (we made it up) to more-or-less guarantee the function finds no matches,
    // triggering the error.
    const requestingAbsentResourceType = () =>
      // @ts-expect-error as we're deliberately requesting an non-existant resource
      synthetic("SomeExampleCustomResourceType");

    expect(requestingAbsentResourceType).rejects.toThrowError(
      /unable to find/i
    );
  });
});
