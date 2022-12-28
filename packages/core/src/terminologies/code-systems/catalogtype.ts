export const CatalogType = {
  resourceType: "CodeSystem",
  id: "catalogType",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/catalogType defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">medication<a name="catalogType-medication"> </a></td><td>Medication Catalog</td><td>Medication Catalog.</td></tr><tr><td style="white-space:nowrap">device<a name="catalogType-device"> </a></td><td>Device Catalog</td><td>Device Catalog.</td></tr><tr><td style="white-space:nowrap">protocol<a name="catalogType-protocol"> </a></td><td>Protocol List</td><td>Protocol List.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sd",
    },
  ],
  url: "http://hl7.org/fhir/catalogType",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.969",
    },
  ],
  version: "4.3.0",
  name: "CatalogType",
  experimental: false,
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "medication",
      display: "Medication Catalog",
      definition: "Medication Catalog.",
    },
    {
      code: "device",
      display: "Device Catalog",
      definition: "Device Catalog.",
    },
    {
      code: "protocol",
      display: "Protocol List",
      definition: "Protocol List.",
    },
  ],
};
