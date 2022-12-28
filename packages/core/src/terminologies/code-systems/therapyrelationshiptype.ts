export const TherapyRelationshipType = {
  resourceType: "CodeSystem",
  id: "therapy-relationship-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/therapy-relationship-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">contraindicated-only-with<a name="therapy-relationship-type-contraindicated-only-with"> </a></td><td>Only contraindicated if the other therapy is given</td><td>Only contraindicated if the other therapy is given</td></tr><tr><td style="white-space:nowrap">contraindicated-except-with<a name="therapy-relationship-type-contraindicated-except-with"> </a></td><td>Contraindicated unless the other therapy is given</td><td>Contraindicated unless the other therapy is given</td></tr><tr><td style="white-space:nowrap">indicated-only-with<a name="therapy-relationship-type-indicated-only-with"> </a></td><td>Indicated only when the other therapy is given (co-occurrent)</td><td>Indicated only when the other therapy is given (co-occurrent)</td></tr><tr><td style="white-space:nowrap">indicated-except-with<a name="therapy-relationship-type-indicated-except-with"> </a></td><td>Indicated except when the other therapy is given</td><td>Indicated except when the other therapy is given</td></tr><tr><td style="white-space:nowrap">indicated-only-before<a name="therapy-relationship-type-indicated-only-before"> </a></td><td>Indicated only if the other therapy is planned to be given afterwards (prep)</td><td>Indicated only if the other therapy is planned to be given afterwards (prep)</td></tr><tr><td style="white-space:nowrap">indicated-only-before<a name="therapy-relationship-type-indicated-only-before"> </a></td><td>Indicated only if the other therapy was given before (follow-up)</td><td>Indicated only if the other therapy was given before (follow-up)</td></tr><tr><td style="white-space:nowrap">replace-other-therapy<a name="therapy-relationship-type-replace-other-therapy"> </a></td><td>Indicated to replace the other therapy</td><td>Indicated to replace the other therapy</td></tr><tr><td style="white-space:nowrap">replace-other-therapy-contraindicated<a name="therapy-relationship-type-replace-other-therapy-contraindicated"> </a></td><td>Indicated to replace the other contraindicated therapy</td><td>Indicated to replace the other contraindicated therapy.</td></tr><tr><td style="white-space:nowrap">replace-other-therapy-not-tolerated<a name="therapy-relationship-type-replace-other-therapy-not-tolerated"> </a></td><td>Indicated to replace the other therapy not well tolerated by patient</td><td>Indicated to replace the other therapy not well tolerated by patient</td></tr><tr><td style="white-space:nowrap">replace-other-therapy-not-effective<a name="therapy-relationship-type-replace-other-therapy-not-effective"> </a></td><td>Indicated to replace the other therapy not effective on patient</td><td>Indicated to replace the other therapy not effective on patient</td></tr></table></div>',
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
  url: "http://hl7.org/fhir/therapy-relationship-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1560",
    },
  ],
  version: "4.3.0",
  name: "TherapyRelationshipType",
  title: "TherapyRelationshipType",
  status: "draft",
  experimental: false,
  date: "2021-08-15T16:55:11+11:00",
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
    "Classification of relationship between a therapy and a contraindication or an indication.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/therapy-relationship-type",
  content: "complete",
  concept: [
    {
      code: "contraindicated-only-with",
      display: "Only contraindicated if the other therapy is given",
      definition: "Only contraindicated if the other therapy is given",
    },
    {
      code: "contraindicated-except-with",
      display: "Contraindicated unless the other therapy is given",
      definition: "Contraindicated unless the other therapy is given",
    },
    {
      code: "indicated-only-with",
      display: "Indicated only when the other therapy is given (co-occurrent)",
      definition:
        "Indicated only when the other therapy is given (co-occurrent)",
    },
    {
      code: "indicated-except-with",
      display: "Indicated except when the other therapy is given",
      definition: "Indicated except when the other therapy is given",
    },
    {
      code: "indicated-only-before",
      display:
        "Indicated only if the other therapy is planned to be given afterwards (prep)",
      definition:
        "Indicated only if the other therapy is planned to be given afterwards (prep)",
    },
    {
      code: "indicated-only-before",
      display:
        "Indicated only if the other therapy was given before (follow-up)",
      definition:
        "Indicated only if the other therapy was given before (follow-up)",
    },
    {
      code: "replace-other-therapy",
      display: "Indicated to replace the other therapy",
      definition: "Indicated to replace the other therapy",
    },
    {
      code: "replace-other-therapy-contraindicated",
      display: "Indicated to replace the other contraindicated therapy",
      definition: "Indicated to replace the other contraindicated therapy.",
    },
    {
      code: "replace-other-therapy-not-tolerated",
      display:
        "Indicated to replace the other therapy not well tolerated by patient",
      definition:
        "Indicated to replace the other therapy not well tolerated by patient",
    },
    {
      code: "replace-other-therapy-not-effective",
      display:
        "Indicated to replace the other therapy not effective on patient",
      definition:
        "Indicated to replace the other therapy not effective on patient",
    },
  ],
};
