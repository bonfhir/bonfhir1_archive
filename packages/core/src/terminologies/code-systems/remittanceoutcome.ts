export const RemittanceOutcome = {
  resourceType: "CodeSystem",
  id: "remittance-outcome",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/remittance-outcome defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">queued<a name="remittance-outcome-queued"> </a></td><td>Queued</td><td>The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.</td></tr><tr><td style="white-space:nowrap">complete<a name="remittance-outcome-complete"> </a></td><td>Complete</td><td>The processing completed without errors.</td></tr><tr><td style="white-space:nowrap">error<a name="remittance-outcome-error"> </a></td><td>Error</td><td>The processing identified errors.</td></tr><tr><td style="white-space:nowrap">partial<a name="remittance-outcome-partial"> </a></td><td>Partial</td><td>No errors have been detected and some of the adjudication has been performed.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/remittance-outcome",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.14",
    },
  ],
  version: "4.3.0",
  name: "RemittanceOutcome",
  title: "RemittanceOutcome",
  status: "draft",
  experimental: true,
  date: "2022-05-28T12:47:40+10:00",
  description: "The outcome of the processing.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/remittance-outcome",
  content: "complete",
  concept: [
    {
      code: "queued",
      display: "Queued",
      definition:
        "The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.",
    },
    {
      code: "complete",
      display: "Complete",
      definition: "The processing completed without errors.",
    },
    {
      code: "error",
      display: "Error",
      definition: "The processing identified errors.",
    },
    {
      code: "partial",
      display: "Partial",
      definition:
        "No errors have been detected and some of the adjudication has been performed.",
    },
  ],
};
