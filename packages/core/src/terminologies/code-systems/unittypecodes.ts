/**
 * This value set includes a smattering of Unit type codes.
 * http://terminology.hl7.org/CodeSystem/benefit-unit
 */
export const UnitTypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "benefit-unit",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/benefit-unit defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">individual<a name="benefit-unit-individual"> </a></td><td>Individual</td><td>A single individual</td></tr><tr><td style="white-space:nowrap">family<a name="benefit-unit-family"> </a></td><td>Family</td><td>A family, typically includes self, spouse(s) and children to a defined age</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/benefit-unit",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1178",
    },
  ],
  version: "4.3.0",
  name: "UnitTypeCodes",
  title: "Unit Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a smattering of Unit type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "individual",
      display: "Individual",
      definition: "A single individual",
    },
    {
      code: "family",
      display: "Family",
      definition:
        "A family, typically includes self, spouse(s) and children to a defined age",
    },
  ],
};
