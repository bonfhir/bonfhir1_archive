/**
 * The relationship between two substance types.
 * http://hl7.org/fhir/substance-relationship-type
 */
export const SubstanceRelationshipTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "substance-relationship-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/substance-relationship-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">Salt<a name="substance-relationship-type-Salt"> </a></td><td>Salt to parent</td></tr><tr><td style="white-space:nowrap">ActiveMoiety<a name="substance-relationship-type-ActiveMoiety"> </a></td><td>Active moiety</td></tr><tr><td style="white-space:nowrap">StartingMaterial<a name="substance-relationship-type-StartingMaterial"> </a></td><td>Starting material for</td></tr><tr><td style="white-space:nowrap">Polymorph<a name="substance-relationship-type-Polymorph"> </a></td><td>Polymorph of</td></tr><tr><td style="white-space:nowrap">Impurity<a name="substance-relationship-type-Impurity"> </a></td><td>Impurity of</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/substance-relationship-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1603",
    },
  ],
  version: "4.3.0",
  name: "SubstanceRelationshipType",
  title: "SubstanceRelationshipType",
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
  description: "The relationship between two substance types.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/substance-relationship-type",
  content: "complete",
  concept: [
    { code: "Salt", display: "Salt to parent" },
    { code: "ActiveMoiety", display: "Active moiety" },
    { code: "StartingMaterial", display: "Starting material for" },
    { code: "Polymorph", display: "Polymorph of" },
    { code: "Impurity", display: "Impurity of" },
  ],
};
