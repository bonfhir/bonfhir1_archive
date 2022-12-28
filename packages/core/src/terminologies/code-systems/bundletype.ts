/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 * http://hl7.org/fhir/bundle-type
 */
export const BundleTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "bundle-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>BundleType</h2>\n      \n      <div>\n        \n        <p>Indicates the purpose of a bundle - how it is intended to be used.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/bundle-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">document\n            \n            <a name="bundle-type-document"> </a>\n          \n          </td>\n          \n          <td>Document</td>\n          \n          <td>The bundle is a document. The first resource is a Composition.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">message\n            \n            <a name="bundle-type-message"> </a>\n          \n          </td>\n          \n          <td>Message</td>\n          \n          <td>The bundle is a message. The first resource is a MessageHeader.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">transaction\n            \n            <a name="bundle-type-transaction"> </a>\n          \n          </td>\n          \n          <td>Transaction</td>\n          \n          <td>The bundle is a transaction - intended to be processed by a server as an atomic commit.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">transaction-response\n            \n            <a name="bundle-type-transaction-response"> </a>\n          \n          </td>\n          \n          <td>Transaction Response</td>\n          \n          <td>The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">batch\n            \n            <a name="bundle-type-batch"> </a>\n          \n          </td>\n          \n          <td>Batch</td>\n          \n          <td>The bundle is a set of actions - intended to be processed by a server as a group of independent actions.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">batch-response\n            \n            <a name="bundle-type-batch-response"> </a>\n          \n          </td>\n          \n          <td>Batch Response</td>\n          \n          <td>The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">history\n            \n            <a name="bundle-type-history"> </a>\n          \n          </td>\n          \n          <td>History List</td>\n          \n          <td>The bundle is a list of resources from a history interaction on a server.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">searchset\n            \n            <a name="bundle-type-searchset"> </a>\n          \n          </td>\n          \n          <td>Search Results</td>\n          \n          <td>The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">collection\n            \n            <a name="bundle-type-collection"> </a>\n          \n          </td>\n          \n          <td>Collection</td>\n          \n          <td>The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/bundle-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.621",
    },
  ],
  version: "4.3.0",
  name: "BundleType",
  title: "BundleType",
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
  description:
    "Indicates the purpose of a bundle - how it is intended to be used.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/bundle-type",
  content: "complete",
  concept: [
    {
      code: "document",
      display: "Document",
      definition:
        "The bundle is a document. The first resource is a Composition.",
    },
    {
      code: "message",
      display: "Message",
      definition:
        "The bundle is a message. The first resource is a MessageHeader.",
    },
    {
      code: "transaction",
      display: "Transaction",
      definition:
        "The bundle is a transaction - intended to be processed by a server as an atomic commit.",
    },
    {
      code: "transaction-response",
      display: "Transaction Response",
      definition:
        "The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.",
    },
    {
      code: "batch",
      display: "Batch",
      definition:
        "The bundle is a set of actions - intended to be processed by a server as a group of independent actions.",
    },
    {
      code: "batch-response",
      display: "Batch Response",
      definition:
        "The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.",
    },
    {
      code: "history",
      display: "History List",
      definition:
        "The bundle is a list of resources from a history interaction on a server.",
    },
    {
      code: "searchset",
      display: "Search Results",
      definition:
        "The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.",
    },
    {
      code: "collection",
      display: "Collection",
      definition:
        "The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.",
    },
  ],
};
