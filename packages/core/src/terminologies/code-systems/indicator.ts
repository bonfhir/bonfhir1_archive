/**
 * This value set captures the set of indicator codes defined by the CDS Hooks specification.
 * http://cds-hooks.hl7.org/CodeSystem/indicator
 */
export const IndicatorCodeSystem = {
  resourceType: "CodeSystem",
  id: "cdshooks-indicator",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://cds-hooks.hl7.org/CodeSystem/indicator defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">info<a name="cdshooks-indicator-info"> </a></td><td>The response is informational</td></tr><tr><td style="white-space:nowrap">warning<a name="cdshooks-indicator-warning"> </a></td><td>The response is a warning</td></tr><tr><td style="white-space:nowrap">critical<a name="cdshooks-indicator-critical"> </a></td><td>The response is critical and indicates the workflow should not be allowed to proceed</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
    },
  ],
  url: "http://cds-hooks.hl7.org/CodeSystem/indicator",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1066",
    },
  ],
  version: "4.3.0",
  name: "Indicator",
  status: "draft",
  experimental: false,
  publisher: "FHIR Project team",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description:
    "This value set captures the set of indicator codes defined by the CDS Hooks specification.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/cdshooks-indicator",
  content: "complete",
  concept: [
    { code: "info", display: "The response is informational" },
    { code: "warning", display: "The response is a warning" },
    {
      code: "critical",
      display:
        "The response is critical and indicates the workflow should not be allowed to proceed",
    },
  ],
};
