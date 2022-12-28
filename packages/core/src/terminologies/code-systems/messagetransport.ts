/**
 * The protocol used for message transport.
 * http://terminology.hl7.org/CodeSystem/message-transport
 */
export const MessageTransportCodeSystem = {
  resourceType: "CodeSystem",
  id: "message-transport",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>MessageTransport</h2>\n      \n      <div>\n        \n        <p>The protocol used for message transport.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/message-transport defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">http\n            \n            <a name="message-transport-http"> </a>\n          \n          </td>\n          \n          <td>HTTP</td>\n          \n          <td>The application sends or receives messages using HTTP POST (may be over http: or https:).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ftp\n            \n            <a name="message-transport-ftp"> </a>\n          \n          </td>\n          \n          <td>FTP</td>\n          \n          <td>The application sends or receives messages using File Transfer Protocol.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mllp\n            \n            <a name="message-transport-mllp"> </a>\n          \n          </td>\n          \n          <td>MLLP</td>\n          \n          <td>The application sends or receives messages using HL7\'s Minimal Lower Level Protocol.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/message-transport",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1080",
    },
  ],
  version: "4.3.0",
  name: "MessageTransport",
  title: "MessageTransport",
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
  description: "The protocol used for message transport.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/message-transport",
  content: "complete",
  concept: [
    {
      code: "http",
      display: "HTTP",
      definition:
        "The application sends or receives messages using HTTP POST (may be over http: or https:).",
    },
    {
      code: "ftp",
      display: "FTP",
      definition:
        "The application sends or receives messages using File Transfer Protocol.",
    },
    {
      code: "mllp",
      display: "MLLP",
      definition:
        "The application sends or receives messages using HL7's Minimal Lower Level Protocol.",
    },
  ],
};
