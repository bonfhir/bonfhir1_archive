export const RestfulCapabilityMode = {
  resourceType: "CodeSystem",
  id: "restful-capability-mode",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>RestfulCapabilityMode</h2>\n      \n      <div>\n        \n        <p>The mode of a RESTful capability statement.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/restful-capability-mode defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">client\n            \n            <a name="restful-capability-mode-client"> </a>\n          \n          </td>\n          \n          <td>Client</td>\n          \n          <td>The application acts as a client for this resource.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">server\n            \n            <a name="restful-capability-mode-server"> </a>\n          \n          </td>\n          \n          <td>Server</td>\n          \n          <td>The application acts as a server for this resource.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/restful-capability-mode",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.177",
    },
  ],
  version: "4.3.0",
  name: "RestfulCapabilityMode",
  title: "RestfulCapabilityMode",
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
  description: "The mode of a RESTful capability statement.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/restful-capability-mode",
  content: "complete",
  concept: [
    {
      code: "client",
      display: "Client",
      definition: "The application acts as a client for this resource.",
    },
    {
      code: "server",
      display: "Server",
      definition: "The application acts as a server for this resource.",
    },
  ],
};
