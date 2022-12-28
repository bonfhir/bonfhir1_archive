export const DiscriminatorType = {
  resourceType: "CodeSystem",
  id: "discriminator-type",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/discriminator-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">value<a name="discriminator-type-value"> </a></td><td>Value</td><td>The slices have different values in the nominated element.</td></tr><tr><td style="white-space:nowrap">exists<a name="discriminator-type-exists"> </a></td><td>Exists</td><td>The slices are differentiated by the presence or absence of the nominated element.</td></tr><tr><td style="white-space:nowrap">pattern<a name="discriminator-type-pattern"> </a></td><td>Pattern</td><td>The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].</td></tr><tr><td style="white-space:nowrap">type<a name="discriminator-type-type"> </a></td><td>Type</td><td>The slices are differentiated by type of the nominated element.</td></tr><tr><td style="white-space:nowrap">profile<a name="discriminator-type-profile"> </a></td><td>Profile</td><td>The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/discriminator-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.92",
    },
  ],
  version: "4.3.0",
  name: "DiscriminatorType",
  title: "DiscriminatorType",
  status: "active",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description:
    "How an element value is interpreted when discrimination is evaluated.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/discriminator-type",
  content: "complete",
  concept: [
    {
      code: "value",
      display: "Value",
      definition: "The slices have different values in the nominated element.",
    },
    {
      code: "exists",
      display: "Exists",
      definition:
        "The slices are differentiated by the presence or absence of the nominated element.",
    },
    {
      code: "pattern",
      display: "Pattern",
      definition:
        "The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].",
    },
    {
      code: "type",
      display: "Type",
      definition:
        "The slices are differentiated by type of the nominated element.",
    },
    {
      code: "profile",
      display: "Profile",
      definition:
        "The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.",
    },
  ],
};
