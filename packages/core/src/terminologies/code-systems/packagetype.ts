/**
 * A high level categorisation of a package.
 * http://hl7.org/fhir/package-type
 */
export const PackageTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "package-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/package-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">MedicinalProductPack<a name="package-type-MedicinalProductPack"> </a></td><td>Medicinal product pack</td></tr><tr><td style="white-space:nowrap">RawMaterialPackage<a name="package-type-RawMaterialPackage"> </a></td><td>Raw material package</td></tr><tr><td style="white-space:nowrap">Shipping-TransportContainer<a name="package-type-Shipping-TransportContainer"> </a></td><td>Shipping or transport container</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/package-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1671",
    },
  ],
  version: "4.3.0",
  name: "PackageType",
  title: "PackageType",
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
  description: "A high level categorisation of a package.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/package-type",
  content: "complete",
  concept: [
    { code: "MedicinalProductPack", display: "Medicinal product pack" },
    { code: "RawMaterialPackage", display: "Raw material package" },
    {
      code: "Shipping-TransportContainer",
      display: "Shipping or transport container",
    },
  ],
};
