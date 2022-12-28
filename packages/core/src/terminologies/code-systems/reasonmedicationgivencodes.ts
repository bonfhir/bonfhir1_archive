export const ReasonMedicationGivenCodes = {
  resourceType: "CodeSystem",
  id: "reason-medication-given-codes",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/reason-medication-given defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">a<a name="reason-medication-given-codes-a"> </a></td><td>None</td><td>No reason known.</td></tr><tr><td style="white-space:nowrap">b<a name="reason-medication-given-codes-b"> </a></td><td>Given as Ordered</td><td>The administration was following an ordered protocol.</td></tr><tr><td style="white-space:nowrap">c<a name="reason-medication-given-codes-c"> </a></td><td>Emergency</td><td>The administration was needed to treat an emergency.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/reason-medication-given",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1110",
    },
  ],
  version: "4.3.0",
  name: "ReasonMedicationGivenCodes",
  title: "Reason Medication Given Codes",
  status: "draft",
  experimental: false,
  description:
    "This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "a", display: "None", definition: "No reason known." },
    {
      code: "b",
      display: "Given as Ordered",
      definition: "The administration was following an ordered protocol.",
    },
    {
      code: "c",
      display: "Emergency",
      definition: "The administration was needed to treat an emergency.",
    },
  ],
};
