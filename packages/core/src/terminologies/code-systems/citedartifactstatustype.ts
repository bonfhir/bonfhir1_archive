export const CitedArtifactStatusType = {
  resourceType: "CodeSystem",
  id: "cited-artifact-status-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/cited-artifact-status-type defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n\n        <tr>\n          \n          <td style="white-space:nowrap">created\n            \n            <a name="cited-artifact-status-type-created"> </a>\n          \n          </td>\n          \n          <td>Created</td>\n          \n          <td>The content was originally constructed or composed.</td>\n        \n        </tr>\n\t\t\n                <tr>\n\n          <td style="white-space:nowrap">submitted\n\n            <a name="cited-artifact-status-type-submitted"> </a>\n\n          </td>\n\n          <td>Submitted</td>\n\n          <td>The content was sent to the publisher for consideration of publication.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">withdrawn\n\n            <a name="cited-artifact-status-type-withdrawn"> </a>\n\n          </td>\n\n          <td>Withdrawn</td>\n\n          <td>The content that was not published has been removed from consideration for publishing by the submitter.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">pre-review\n\n            <a name="cited-artifact-status-type-pre-review"> </a>\n\n          </td>\n\n          <td>Pre review</td>\n\n          <td>The content is awaiting assignment and delivery to reviewer(s).</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">under-review\n\n            <a name="cited-artifact-status-type-under-review"> </a>\n\n          </td>\n\n          <td>Under review</td>\n\n          <td>he content is in a state of being reviewed.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">post-review-pre-published\n\n            <a name="cited-artifact-status-type-post-review-pre-published"> </a>\n\n          </td>\n\n          <td>Post review pre published</td>\n\n          <td>The content is in a state between the review(s) being completed and being published.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">rejected\n\n            <a name="cited-artifact-status-type-rejected"> </a>\n\n          </td>\n\n          <td>Rejected</td>\n\n          <td>The content that was not published has been removed from consideration for publishing by a publisher or editor.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">published-early-form\n\n            <a name="cited-artifact-status-type-published-early-form"> </a>\n\n          </td>\n\n          <td>Published early form</td>\n\n          <td>The content is published but future changes to the published version are expected.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">published-final-form\n\n            <a name="cited-artifact-status-type-published-final-form"> </a>\n\n          </td>\n\n          <td>Published final form</td>\n\n          <td>The content is published and further changes to the content are not expected.</td>\n\n        </tr>\n\n        <tr>\n          \n          <td style="white-space:nowrap">accepted\n            \n            <a name="cited-artifact-status-type-accepted"> </a>\n          \n          </td>\n          \n          <td>Accepted</td>\n          \n          <td>The content that was not published yet has been approved for publication by the publisher and/or editor.</td>\n        \n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">archived\n\n            <a name="cited-artifact-status-type-archived"> </a>\n\n          </td>\n\n          <td>Archived</td>\n\n          <td>The content is retired or considered no longer current but still available as part of the public record.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">retracted\n\n            <a name="cited-artifact-status-type-retracted"> </a>\n\n          </td>\n\n          <td>Retracted</td>\n\n          <td>The content that was published is removed from publication and should no longer be considered part of the public record.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">draft\n\n            <a name="cited-artifact-status-type-draft"> </a>\n\n          </td>\n\n          <td>Draft</td>\n\n          <td>The content is considered unfinished or incomplete and not representative of the current state desired by the content creator.</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">active\n\n            <a name="cited-artifact-status-type-active"> </a>\n\n          </td>\n\n          <td>Active</td>\n\n          <td>The content is considered complete for its current state by the content creator.</td>\n\n        </tr>\n\t\t\n        <tr>\n          \n          <td style="white-space:nowrap">approved\n            \n            <a name="cited-artifact-status-type-approved"> </a>\n          \n          </td>\n          \n          <td>Approved</td>\n          \n          <td>The content has been approved for a state transition, with the focus of approval described in the text associated with this coding.</td>\n        \n        </tr>      \n      \n      </table>\n    \n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/cited-artifact-status-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "CitedArtifactStatusType",
  title: "CitedArtifactStatusType",
  status: "draft",
  experimental: false,
  date: "2021-03-11T10:55:11.085+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Cited Artifact Status Type",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/cited-artifact-status-type",
  content: "complete",
  concept: [
    {
      code: "created",
      display: "Created",
      definition: "The content was originally constructed or composed.",
    },
    {
      code: "submitted",
      display: "Submitted",
      definition:
        "The content was sent to the publisher for consideration of publication.",
    },
    {
      code: "withdrawn",
      display: "Withdrawn",
      definition:
        "The content that was not published has been removed from consideration for publishing by the submitter.",
    },
    {
      code: "pre-review",
      display: "Pre review",
      definition:
        "The content is awaiting assignment and delivery to reviewer(s).",
    },
    {
      code: "under-review",
      display: "Under review",
      definition: "The content is in a state of being reviewed.",
    },
    {
      code: "post-review-pre-published",
      display: "Post review pre published",
      definition:
        "The content is in a state between the review(s) being completed and being published.",
    },
    {
      code: "rejected",
      display: "Rejected",
      definition:
        "The content that was not published has been removed from consideration for publishing by a publisher or editor.",
    },
    {
      code: "published-early-form",
      display: "Published early form",
      definition:
        "The content is published but future changes to the published version are expected.",
    },
    {
      code: "published-final-form",
      display: "Published final form",
      definition:
        "The content is published and further changes to the content are not expected.",
    },
    {
      code: "accepted",
      display: "Accepted",
      definition:
        "The content that was not published yet has been approved for publication by the publisher and/or editor.",
    },
    {
      code: "archived",
      display: "Archived",
      definition:
        "The content is retired or considered no longer current but still available as part of the public record.",
    },
    {
      code: "retracted",
      display: "Retracted",
      definition:
        "The content that was published is removed from publication and should no longer be considered part of the public record.",
    },
    {
      code: "draft",
      display: "Draft",
      definition:
        "The content is considered unfinished or incomplete and not representative of the current state desired by the content creator.",
    },
    {
      code: "active",
      display: "Active",
      definition:
        "The content is considered complete for its current state by the content creator.",
    },
    {
      code: "approved",
      display: "Approved",
      definition:
        "The content has been approved for a state transition, with the focus of approval described in the text associated with this coding.",
    },
  ],
};
