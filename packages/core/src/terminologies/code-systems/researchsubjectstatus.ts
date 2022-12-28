/**
 * Indicates the progression of a study subject through a study.
 * http://hl7.org/fhir/research-subject-status
 */
export const ResearchSubjectStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "research-subject-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ResearchSubjectStatus</h2>\n      \n      <div>\n        \n        <p>Indicates the progression of a study subject through a study.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/research-subject-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">candidate\n            \n            <a name="research-subject-status-candidate"> </a>\n          \n          </td>\n          \n          <td>Candidate</td>\n          \n          <td>An identified person that can be considered for inclusion in a study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">eligible\n            \n            <a name="research-subject-status-eligible"> </a>\n          \n          </td>\n          \n          <td>Eligible</td>\n          \n          <td>A person that has met the eligibility criteria for inclusion in a study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">follow-up\n            \n            <a name="research-subject-status-follow-up"> </a>\n          \n          </td>\n          \n          <td>Follow-up</td>\n          \n          <td>A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ineligible\n            \n            <a name="research-subject-status-ineligible"> </a>\n          \n          </td>\n          \n          <td>Ineligible</td>\n          \n          <td>A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or\nis ineligible for the study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">not-registered\n            \n            <a name="research-subject-status-not-registered"> </a>\n          \n          </td>\n          \n          <td>Not Registered</td>\n          \n          <td>A person for whom registration was not completed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">off-study\n            \n            <a name="research-subject-status-off-study"> </a>\n          \n          </td>\n          \n          <td>Off-study</td>\n          \n          <td>A person that has ended their participation on a study either because their treatment/observation is complete or through not\nresponding, withdrawal, non-compliance and/or adverse event.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">on-study\n            \n            <a name="research-subject-status-on-study"> </a>\n          \n          </td>\n          \n          <td>On-study</td>\n          \n          <td>A person that is enrolled or registered on a study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">on-study-intervention\n            \n            <a name="research-subject-status-on-study-intervention"> </a>\n          \n          </td>\n          \n          <td>On-study-intervention</td>\n          \n          <td>The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">on-study-observation\n            \n            <a name="research-subject-status-on-study-observation"> </a>\n          \n          </td>\n          \n          <td>On-study-observation</td>\n          \n          <td>The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is &quot;short-term follow-up&quot;.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">pending-on-study\n            \n            <a name="research-subject-status-pending-on-study"> </a>\n          \n          </td>\n          \n          <td>Pending on-study</td>\n          \n          <td>A person is pre-registered for a study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">potential-candidate\n            \n            <a name="research-subject-status-potential-candidate"> </a>\n          \n          </td>\n          \n          <td>Potential Candidate</td>\n          \n          <td>A person that is potentially eligible for participation in the study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">screening\n            \n            <a name="research-subject-status-screening"> </a>\n          \n          </td>\n          \n          <td>Screening</td>\n          \n          <td>A person who is being evaluated for eligibility for a study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">withdrawn\n            \n            <a name="research-subject-status-withdrawn"> </a>\n          \n          </td>\n          \n          <td>Withdrawn</td>\n          \n          <td>The person has withdrawn their participation in the study before registration.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/research-subject-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.830",
    },
  ],
  version: "4.3.0",
  name: "ResearchSubjectStatus",
  title: "ResearchSubjectStatus",
  status: "draft",
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
  description: "Indicates the progression of a study subject through a study.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/research-subject-status",
  content: "complete",
  concept: [
    {
      code: "candidate",
      display: "Candidate",
      definition:
        "An identified person that can be considered for inclusion in a study.",
    },
    {
      code: "eligible",
      display: "Eligible",
      definition:
        "A person that has met the eligibility criteria for inclusion in a study.",
    },
    {
      code: "follow-up",
      display: "Follow-up",
      definition:
        "A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.",
    },
    {
      code: "ineligible",
      display: "Ineligible",
      definition:
        "A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or\nis ineligible for the study.",
    },
    {
      code: "not-registered",
      display: "Not Registered",
      definition: "A person for whom registration was not completed.",
    },
    {
      code: "off-study",
      display: "Off-study",
      definition:
        "A person that has ended their participation on a study either because their treatment/observation is complete or through not\nresponding, withdrawal, non-compliance and/or adverse event.",
    },
    {
      code: "on-study",
      display: "On-study",
      definition: "A person that is enrolled or registered on a study.",
    },
    {
      code: "on-study-intervention",
      display: "On-study-intervention",
      definition:
        "The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.",
    },
    {
      code: "on-study-observation",
      display: "On-study-observation",
      definition:
        'The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".',
    },
    {
      code: "pending-on-study",
      display: "Pending on-study",
      definition: "A person is pre-registered for a study.",
    },
    {
      code: "potential-candidate",
      display: "Potential Candidate",
      definition:
        "A person that is potentially eligible for participation in the study.",
    },
    {
      code: "screening",
      display: "Screening",
      definition:
        "A person who is being evaluated for eligibility for a study.",
    },
    {
      code: "withdrawn",
      display: "Withdrawn",
      definition:
        "The person has withdrawn their participation in the study before registration.",
    },
  ],
};
