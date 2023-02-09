import { DomainResource } from "fhir/r4";
import { build, buildCodeableConcept } from "./builders";
import { narrative } from "./narratives";
import { DomainResourceTypes, ResourceType } from "./types";

describe("narratives", () => {
  it.each([
    [narrative(build("Patient", {})), /.+/],
    [
      narrative(
        build("Patient", {
          name: [
            {
              given: ["John"],
              family: "Doe",
            },
          ],
          identifier: [
            {
              system: "http://hl7.org/fhir/sid/us-ssn",
              value: "000-00-0000",
              type: buildCodeableConcept({
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/v2-0203",
                    code: "SB",
                    display: "Social Beneficiary Identifier",
                  },
                ],
              }),
            },
          ],
        })
      ),
      /.+000.+Doe.+John.+/,
    ],
  ])("generate narrative", (narrative, contain) => {
    expect(narrative.div).toMatch(contain);
  });

  it.each(DomainResourceTypes)("generate narrative for %s", (resourceType) => {
    const resource = build(resourceType as ResourceType, {});
    expect((resource as DomainResource).text?.status).toEqual("generated");
    expect((resource as DomainResource).text?.div).toContain(
      "http://www.w3.org/1999/xhtml"
    );
  });
});
