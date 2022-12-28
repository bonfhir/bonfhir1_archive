export const SupplyType = {
  resourceType: "CodeSystem",
  id: "supplyrequest-kind",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/supply-kind defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">central<a name="supplyrequest-kind-central"> </a></td><td>Central Supply</td><td>Supply is stored and requested from central supply.</td></tr><tr><td style="white-space:nowrap">nonstock<a name="supplyrequest-kind-nonstock"> </a></td><td>Non-Stock</td><td>Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/supply-kind",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1192",
    },
  ],
  version: "4.3.0",
  name: "SupplyType",
  title: "Supply Type",
  status: "draft",
  experimental: false,
  description: "This value sets refers to a Category of supply.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "central",
      display: "Central Supply",
      definition: "Supply is stored and requested from central supply.",
    },
    {
      code: "nonstock",
      display: "Non-Stock",
      definition:
        "Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.",
    },
  ],
};
