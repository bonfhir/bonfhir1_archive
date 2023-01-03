import { resourceSearch } from "./resource-search";
import { DomainResourceTypes, ResourceType } from "./types";

describe("resource-search", () => {
  it.each([
    [resourceSearch("Patient").name("John Doe"), "name=John%20Doe"],
    [
      resourceSearch("Organization").identifier("12345").active("true"),
      "identifier=12345&active=true",
    ],
    [
      resourceSearch("Account").status("active").type("patient")._tag({
        system: "source",
        value: "foo",
      }),
      "status=active&type=patient&_tag=source|foo",
    ],
  ])("%s", (searchBuilder, expected) => {
    expect(searchBuilder.href).toEqual(expected);
  });

  it.each(DomainResourceTypes)("search %s", (resourceType) => {
    expect(
      resourceSearch(resourceType as ResourceType)._id("12345")
    ).not.toBeFalsy();
  });
});
