export const LanguagePreferenceType = {
  resourceType: "CodeSystem",
  id: "language-preference-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/language-preference-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">verbal<a name="language-preference-type-verbal"> </a></td><td>verbal</td><td>The patient prefers to verbally communicate with the associated language.</td></tr><tr><td style="white-space:nowrap">written<a name="language-preference-type-written"> </a></td><td>written</td><td>The patient prefers to communicate in writing with the associated language.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/language-preference-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1023",
    },
  ],
  version: "4.3.0",
  name: "LanguagePreferenceType",
  status: "draft",
  experimental: true,
  description:
    "This code system defines a defines the set of codes for describing the type or mode of the patient's preferred language.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "verbal",
      display: "verbal",
      definition:
        "The patient prefers to verbally communicate with the associated language.",
    },
    {
      code: "written",
      display: "written",
      definition:
        "The patient prefers to communicate in writing with the associated language.",
    },
  ],
};
