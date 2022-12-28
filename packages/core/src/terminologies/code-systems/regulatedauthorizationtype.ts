/**
 *
 * http://hl7.org/fhir/regulated-authorization-type
 */
export const RegulatedAuthorizationTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "regulated-authorization-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/regulated-authorization-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">MarketingAuth<a name="regulated-authorization-type-MarketingAuth"> </a></td><td>Marketing Authorization</td></tr><tr><td style="white-space:nowrap">Orphan<a name="regulated-authorization-type-Orphan"> </a></td><td>Orphan Drug Authorization</td></tr><tr><td style="white-space:nowrap">Pediatric<a name="regulated-authorization-type-Pediatric"> </a></td><td>Pediatric Use Drug Authorization</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "brr",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/regulated-authorization-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1639",
    },
  ],
  version: "4.3.0",
  name: "RegulatedAuthorizationType",
  title: "RegulatedAuthorizationType",
  status: "draft",
  experimental: false,
  date: "2021-01-05T10:01:24+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/regulated-authorization-type",
  content: "complete",
  concept: [
    { code: "MarketingAuth", display: "Marketing Authorization" },
    { code: "Orphan", display: "Orphan Drug Authorization" },
    { code: "Pediatric", display: "Pediatric Use Drug Authorization" },
  ],
};
