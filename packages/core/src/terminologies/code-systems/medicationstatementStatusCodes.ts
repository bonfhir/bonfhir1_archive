export const MedicationStatementStatusCodes = {
  resourceType: "CodeSystem",
  id: "medication-statement-status",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/CodeSystem/medication-statement-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">active<a name="medication-statement-status-active"> </a></td><td>Active</td><td>The medication is still being taken.</td></tr><tr><td style="white-space:nowrap">completed<a name="medication-statement-status-completed"> </a></td><td>Completed</td><td>The medication is no longer being taken.</td></tr><tr><td style="white-space:nowrap">entered-in-error<a name="medication-statement-status-entered-in-error"> </a></td><td>Entered in Error</td><td>Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.</td></tr><tr><td style="white-space:nowrap">intended<a name="medication-statement-status-intended"> </a></td><td>Intended</td><td>The medication may be taken at some time in the future.</td></tr><tr><td style="white-space:nowrap">stopped<a name="medication-statement-status-stopped"> </a></td><td>Stopped</td><td>Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.</td></tr><tr><td style="white-space:nowrap">on-hold<a name="medication-statement-status-on-hold"> </a></td><td>On Hold</td><td>Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called \'suspended\'.</td></tr><tr><td style="white-space:nowrap">unknown<a name="medication-statement-status-unknown"> </a></td><td>Unknown</td><td>The state of the medication use is not currently known.</td></tr><tr><td style="white-space:nowrap">not-taken<a name="medication-statement-status-not-taken"> </a></td><td>Not Taken</td><td>The medication was not consumed by the patient</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1379",
    },
  ],
  version: "4.3.0",
  name: "MedicationStatement Status Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medication-statement-status",
  content: "complete",
  concept: [
    {
      code: "active",
      display: "Active",
      definition: "The medication is still being taken.",
    },
    {
      code: "completed",
      display: "Completed",
      definition: "The medication is no longer being taken.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition:
        "Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.",
    },
    {
      code: "intended",
      display: "Intended",
      definition: "The medication may be taken at some time in the future.",
    },
    {
      code: "stopped",
      display: "Stopped",
      definition:
        "Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.",
    },
    {
      code: "on-hold",
      display: "On Hold",
      definition:
        "Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.",
    },
    {
      code: "unknown",
      display: "Unknown",
      definition: "The state of the medication use is not currently known.",
    },
    {
      code: "not-taken",
      display: "Not Taken",
      definition: "The medication was not consumed by the patient",
    },
  ],
};
