import { DomainResourceTypes, ResourceType } from "@bonfhir/core/r4b";
import { DomainResource } from "fhir/r4";
import { fake } from "./fakes";

describe("fakes", () => {
  it("throws an `Error` when attempting to generate an unrecognized resource type", () => {
    const unrecognizedResourceTypeName = `BonfhirSpringTestExampleStructThingy`;

    const generatingAnUnknownResourceType = () =>
      // @ts-expect-error as this explicitly tests using an invalid type
      fake(unrecognizedResourceTypeName);

    expect(generatingAnUnknownResourceType).toThrowError(Error);
  });

  it.each(DomainResourceTypes)("generate fakes for %s", (resourceType) => {
    const resource = fake(resourceType as ResourceType);
    expect((resource as DomainResource).text?.div).not.toBeFalsy();
  });
});
