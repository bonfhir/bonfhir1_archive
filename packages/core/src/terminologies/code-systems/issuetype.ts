/**
 * A code that describes the type of issue.
 * http://hl7.org/fhir/issue-type
 */
export const IssueTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "issue-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>IssueType</h2>\n      \n      \n      <div>\n        \n        \n        <p>A code that describes the type of issue.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>This code system http://hl7.org/fhir/issue-type defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">invalid\n            \n            \n            <a name="issue-type-invalid"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Invalid Content</td>\n          \n          \n          <td>Content invalid against the specification or a profile.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  structure\n            \n            \n            <a name="issue-type-structure"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Structural Issue</td>\n          \n          \n          <td>A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  required\n            \n            \n            <a name="issue-type-required"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Required element missing</td>\n          \n          \n          <td>A required element is missing.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  value\n            \n            \n            <a name="issue-type-value"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Element value invalid</td>\n          \n          \n          <td>An element or header value is invalid.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  invariant\n            \n            \n            <a name="issue-type-invariant"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Validation rule failed</td>\n          \n          \n          <td>A content validation rule failed - e.g. a schematron rule.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">security\n            \n            \n            <a name="issue-type-security"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Security Problem</td>\n          \n          \n          <td>An authentication/authorization/permissions issue of some kind.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  login\n            \n            \n            <a name="issue-type-login"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Login Required</td>\n          \n          \n          <td>The client needs to initiate an authentication process.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  unknown\n            \n            \n            <a name="issue-type-unknown"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Unknown User</td>\n          \n          \n          <td>The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  expired\n            \n            \n            <a name="issue-type-expired"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Session Expired</td>\n          \n          \n          <td>User session expired; a login may be required.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  forbidden\n            \n            \n            <a name="issue-type-forbidden"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Forbidden</td>\n          \n          \n          <td>The user does not have the rights to perform this action.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  suppressed\n            \n            \n            <a name="issue-type-suppressed"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Information  Suppressed</td>\n          \n          \n          <td>Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">processing\n            \n            \n            <a name="issue-type-processing"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Processing Failure</td>\n          \n          \n          <td>Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  not-supported\n            \n            \n            <a name="issue-type-not-supported"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Content not supported</td>\n          \n          \n          <td>The interaction, operation, resource or profile is not supported.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  duplicate\n            \n            \n            <a name="issue-type-duplicate"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Duplicate</td>\n          \n          \n          <td>An attempt was made to create a duplicate record.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  multiple-matches\n            \n            \n            <a name="issue-type-multiple-matches"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Multiple Matches</td>\n          \n          \n          <td>Multiple matching records were found when the operation required only one match.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  not-found\n            \n            \n            <a name="issue-type-not-found"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Not Found</td>\n          \n          \n          <td>The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>3</td>\n          \n          \n          <td style="white-space:nowrap">    deleted\n            \n            \n            <a name="issue-type-deleted"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Deleted</td>\n          \n          \n          <td>The reference pointed to content (usually a resource) that has been deleted.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  too-long\n            \n            \n            <a name="issue-type-too-long"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Content Too Long</td>\n          \n          \n          <td>Provided content is too long (typically, this is a denial of service protection type of error).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  code-invalid\n            \n            \n            <a name="issue-type-code-invalid"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Invalid Code</td>\n          \n          \n          <td>The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  extension\n            \n            \n            <a name="issue-type-extension"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Unacceptable Extension</td>\n          \n          \n          <td>An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  too-costly\n            \n            \n            <a name="issue-type-too-costly"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Operation Too Costly</td>\n          \n          \n          <td>The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  business-rule\n            \n            \n            <a name="issue-type-business-rule"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Business Rule Violation</td>\n          \n          \n          <td>The content/operation failed to pass some business rule and so could not proceed.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  conflict\n            \n            \n            <a name="issue-type-conflict"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Edit Version Conflict</td>\n          \n          \n          <td>Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">transient\n            \n            \n            <a name="issue-type-transient"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Transient Issue</td>\n          \n          \n          <td>Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  lock-error\n            \n            \n            <a name="issue-type-lock-error"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Lock Error</td>\n          \n          \n          <td>A resource/record locking failure (usually in an underlying database).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  no-store\n            \n            \n            <a name="issue-type-no-store"> </a>\n          \n          \n          </td>\n          \n          \n          <td>No Store Available</td>\n          \n          \n          <td>The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  exception\n            \n            \n            <a name="issue-type-exception"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Exception</td>\n          \n          \n          <td>An unexpected internal error has occurred.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  timeout\n            \n            \n            <a name="issue-type-timeout"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Timeout</td>\n          \n          \n          <td>An internal timeout has occurred.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  incomplete\n            \n            \n            <a name="issue-type-incomplete"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Incomplete Results</td>\n          \n          \n          <td>Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  throttled\n            \n            \n            <a name="issue-type-throttled"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Throttled</td>\n          \n          \n          <td>The system is not prepared to handle this request due to load management.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">informational\n            \n            \n            <a name="issue-type-informational"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Informational Note</td>\n          \n          \n          <td>A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
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
  url: "http://hl7.org/fhir/issue-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.411",
    },
  ],
  version: "4.3.0",
  name: "IssueType",
  title: "IssueType",
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
  description: "A code that describes the type of issue.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/issue-type",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "invalid",
      display: "Invalid Content",
      definition: "Content invalid against the specification or a profile.",
      concept: [
        {
          code: "structure",
          display: "Structural Issue",
          definition:
            "A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.",
        },
        {
          code: "required",
          display: "Required element missing",
          definition: "A required element is missing.",
        },
        {
          code: "value",
          display: "Element value invalid",
          definition: "An element or header value is invalid.",
        },
        {
          code: "invariant",
          display: "Validation rule failed",
          definition:
            "A content validation rule failed - e.g. a schematron rule.",
        },
      ],
    },
    {
      code: "security",
      display: "Security Problem",
      definition:
        "An authentication/authorization/permissions issue of some kind.",
      concept: [
        {
          code: "login",
          display: "Login Required",
          definition: "The client needs to initiate an authentication process.",
        },
        {
          code: "unknown",
          display: "Unknown User",
          definition:
            "The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).",
        },
        {
          code: "expired",
          display: "Session Expired",
          definition: "User session expired; a login may be required.",
        },
        {
          code: "forbidden",
          display: "Forbidden",
          definition:
            "The user does not have the rights to perform this action.",
        },
        {
          code: "suppressed",
          display: "Information  Suppressed",
          definition:
            "Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.",
        },
      ],
    },
    {
      code: "processing",
      display: "Processing Failure",
      definition:
        "Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.",
      concept: [
        {
          code: "not-supported",
          display: "Content not supported",
          definition:
            "The interaction, operation, resource or profile is not supported.",
        },
        {
          code: "duplicate",
          display: "Duplicate",
          definition: "An attempt was made to create a duplicate record.",
        },
        {
          code: "multiple-matches",
          display: "Multiple Matches",
          definition:
            "Multiple matching records were found when the operation required only one match.",
        },
        {
          code: "not-found",
          display: "Not Found",
          definition:
            "The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.",
          concept: [
            {
              code: "deleted",
              display: "Deleted",
              definition:
                "The reference pointed to content (usually a resource) that has been deleted.",
            },
          ],
        },
        {
          code: "too-long",
          display: "Content Too Long",
          definition:
            "Provided content is too long (typically, this is a denial of service protection type of error).",
        },
        {
          code: "code-invalid",
          display: "Invalid Code",
          definition:
            "The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.",
        },
        {
          code: "extension",
          display: "Unacceptable Extension",
          definition:
            "An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.",
        },
        {
          code: "too-costly",
          display: "Operation Too Costly",
          definition:
            "The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.",
        },
        {
          code: "business-rule",
          display: "Business Rule Violation",
          definition:
            "The content/operation failed to pass some business rule and so could not proceed.",
        },
        {
          code: "conflict",
          display: "Edit Version Conflict",
          definition:
            "Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).",
        },
      ],
    },
    {
      code: "transient",
      display: "Transient Issue",
      definition:
        "Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.",
      concept: [
        {
          code: "lock-error",
          display: "Lock Error",
          definition:
            "A resource/record locking failure (usually in an underlying database).",
        },
        {
          code: "no-store",
          display: "No Store Available",
          definition:
            "The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.",
        },
        {
          code: "exception",
          display: "Exception",
          definition: "An unexpected internal error has occurred.",
        },
        {
          code: "timeout",
          display: "Timeout",
          definition: "An internal timeout has occurred.",
        },
        {
          code: "incomplete",
          display: "Incomplete Results",
          definition:
            "Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).",
        },
        {
          code: "throttled",
          display: "Throttled",
          definition:
            "The system is not prepared to handle this request due to load management.",
        },
      ],
    },
    {
      code: "informational",
      display: "Informational Note",
      definition:
        "A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).",
    },
  ],
};
