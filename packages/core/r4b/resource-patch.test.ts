import { JSONPatchBody } from "./fhir-restful-client";
import { BaseResourcePatch, resourcePatch } from "./resource-patch";

describe("resource-patch", () => {
  it.each(<Array<[BaseResourcePatch, JSONPatchBody]>>[
    [resourcePatch("Patient"), []],
    [
      resourcePatch("Patient").add("/telecom/-", { value: "5145145145" }),
      [{ op: "add", path: "/telecom/-", value: { value: "5145145145" } }],
    ],
    [
      resourcePatch("Organization")
        .remove("/telecom/0")
        .replace("/alias/0", "InitRode"),
      [
        { op: "remove", path: "/telecom/0" },
        { op: "replace", path: "/alias/0", value: "InitRode" },
      ],
    ],
  ])("generates patch %p", (patchBuilder, expected) => {
    expect(patchBuilder.patch).toEqual(expected);
  });
});
