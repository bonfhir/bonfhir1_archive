import { DomainResourceTypes, ResourceType } from "@bonfhir/core/r4b/index.js";
import { DomainResource } from "fhir/r4";
import { fake } from "./fakes";

describe("fakes", () => {
  it.each(DomainResourceTypes)("generate fakes for %s", (resourceType) => {
    const resource = fake(resourceType as ResourceType);
    expect((resource as DomainResource).text?.div).not.toBeFalsy();
  });
});
