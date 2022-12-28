export const ResponseType = {
  resourceType: "CodeSystem",
  id: "response-code",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ResponseType</h2>\n      \n      <div>\n        \n        <p>The kind of response to a message.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/response-code defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ok\n            \n            <a name="response-code-ok"> </a>\n          \n          </td>\n          \n          <td>OK</td>\n          \n          <td>The message was accepted and processed without error.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">transient-error\n            \n            <a name="response-code-transient-error"> </a>\n          \n          </td>\n          \n          <td>Transient Error</td>\n          \n          <td>Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">fatal-error\n            \n            <a name="response-code-fatal-error"> </a>\n          \n          </td>\n          \n          <td>Fatal Error</td>\n          \n          <td>The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "inm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 4,
    },
  ],
  url: "http://hl7.org/fhir/response-code",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.381",
    },
  ],
  version: "4.3.0",
  name: "ResponseType",
  title: "ResponseType",
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
  description: "The kind of response to a message.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/response-code",
  content: "complete",
  concept: [
    {
      code: "ok",
      display: "OK",
      definition: "The message was accepted and processed without error.",
    },
    {
      code: "transient-error",
      display: "Transient Error",
      definition:
        "Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.",
    },
    {
      code: "fatal-error",
      display: "Fatal Error",
      definition:
        "The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.",
    },
  ],
};
