/**
 * Codes providing the status of an observation.
 * http://hl7.org/fhir/observation-status
 */
export const ObservationStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "observation-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>ObservationStatus</h2>\n      \n      \n      <div>\n        \n        \n        <p>Codes providing the status of an observation.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>This code system http://hl7.org/fhir/observation-status defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">registered\n            \n            \n            <a name="observation-status-registered"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Registered</td>\n          \n          \n          <td>The existence of the observation is registered, but there is no result yet available.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">preliminary\n            \n            \n            <a name="observation-status-preliminary"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Preliminary</td>\n          \n          \n          <td>This is an initial or interim observation: data may be incomplete or unverified.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">final\n            \n            \n            <a name="observation-status-final"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Final</td>\n          \n          \n          <td>The observation is complete and there are no further actions needed. Additional information such &quot;released&quot;, &quot;signed&quot;, etc would be represented using [Provenance](provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">amended\n            \n            \n            <a name="observation-status-amended"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Amended</td>\n          \n          \n          <td>Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  corrected\n            \n            \n            <a name="observation-status-corrected"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Corrected</td>\n          \n          \n          <td>Subsequent to being Final, the observation has been modified to correct an error in the test result.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">cancelled\n            \n            \n            <a name="observation-status-cancelled"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Cancelled</td>\n          \n          \n          <td>The observation is unavailable because the measurement was not started or not completed (also sometimes called &quot;aborted&quot;).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            \n            <a name="observation-status-entered-in-error"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Entered in Error</td>\n          \n          \n          <td>The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be &quot;cancelled&quot; rather than &quot;entered-in-error&quot;.).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">unknown\n            \n            \n            <a name="observation-status-unknown"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Unknown</td>\n          \n          \n          <td>The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for &quot;other&quot; - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
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
  url: "http://hl7.org/fhir/observation-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.401",
    },
  ],
  version: "4.3.0",
  name: "ObservationStatus",
  title: "ObservationStatus",
  status: "active",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Codes providing the status of an observation.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/observation-status",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "registered",
      display: "Registered",
      definition:
        "The existence of the observation is registered, but there is no result yet available.",
    },
    {
      code: "preliminary",
      display: "Preliminary",
      definition:
        "This is an initial or interim observation: data may be incomplete or unverified.",
    },
    {
      code: "final",
      display: "Final",
      definition:
        'The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance](provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied.',
    },
    {
      code: "amended",
      display: "Amended",
      definition:
        "Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.",
      concept: [
        {
          code: "corrected",
          display: "Corrected",
          definition:
            "Subsequent to being Final, the observation has been modified to correct an error in the test result.",
        },
      ],
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition:
        'The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").',
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition:
        'The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).',
    },
    {
      code: "unknown",
      display: "Unknown",
      definition:
        'The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.',
    },
  ],
};
