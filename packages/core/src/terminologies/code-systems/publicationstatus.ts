/**
 * The lifecycle status of an artifact.
 * http://hl7.org/fhir/publication-status
 */
export const PublicationStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "publication-status",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/publication-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">draft<a name="publication-status-draft"> </a></td><td>Draft</td><td>This resource is still under development and is not yet considered to be ready for normal use.</td></tr><tr><td style="white-space:nowrap">active<a name="publication-status-active"> </a></td><td>Active</td><td>This resource is ready for normal use.</td></tr><tr><td style="white-space:nowrap">retired<a name="publication-status-retired"> </a></td><td>Retired</td><td>This resource has been withdrawn or superseded and should no longer be used.</td></tr><tr><td style="white-space:nowrap">unknown<a name="publication-status-unknown"> </a></td><td>Unknown</td><td>The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for &quot;other&quot; - one of the listed statuses is presumed to apply, it\'s just not known which one.</td></tr></table><p><b>Additional Language Displays</b></p><table class="codes"><tr><td><b>Code</b></td><td><b>Nederlands (Dutch, nl)</b></td><td><b>Русский (Russian, ru)</b></td></tr><tr><td>draft</td><td>ontwerp</td><td>черновик</td></tr><tr><td>active</td><td>actief</td><td>активный</td></tr><tr><td>retired</td><td>verouderd</td><td>удалён</td></tr><tr><td>unknown</td><td></td><td></td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
  ],
  url: "http://hl7.org/fhir/publication-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.4",
    },
  ],
  version: "4.3.0",
  name: "PublicationStatus",
  title: "PublicationStatus",
  status: "active",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description: "The lifecycle status of an artifact.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/publication-status",
  content: "complete",
  concept: [
    {
      code: "draft",
      display: "Draft",
      definition:
        "This resource is still under development and is not yet considered to be ready for normal use.",
      designation: [
        { language: "ru", value: "черновик" },
        { language: "nl", value: "ontwerp" },
      ],
    },
    {
      code: "active",
      display: "Active",
      definition: "This resource is ready for normal use.",
      designation: [
        { language: "ru", value: "активный" },
        { language: "nl", value: "actief" },
      ],
    },
    {
      code: "retired",
      display: "Retired",
      definition:
        "This resource has been withdrawn or superseded and should no longer be used.",
      designation: [
        { language: "ru", value: "удалён" },
        { language: "nl", value: "verouderd" },
      ],
    },
    {
      code: "unknown",
      display: "Unknown",
      definition:
        'The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it\'s just not known which one.',
    },
  ],
};
