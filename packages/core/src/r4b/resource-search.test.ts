import { resourceSearch } from "./resource-search";
import { DomainResourceTypes, ResourceType } from "./types";

describe("resource-search", () => {
  it.each([
    [resourceSearch("Patient").name("John Doe"), "name=John%20Doe"],
    [
      resourceSearch("Patient")
        ._include("Patient", "managingOrganization")
        ._revinclude("Provenance", "target")
        ._include("Provenance", "agent", { iterate: true }),
      "_include=Patient%3AmanagingOrganization&_revinclude=Provenance%3Atarget&_include:iterate=Provenance%3Aagent",
    ],
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
    [
      resourceSearch("Organization")._sort("name")._sort(["-type", "name"]),
      "_sort=-type,name",
    ],
    [
      resourceSearch("Organization")._total("estimate")._total("accurate"),
      "_total=accurate",
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
