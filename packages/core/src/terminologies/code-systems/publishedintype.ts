/**
 * The type of publication such as book, database, or journal.
 * http://terminology.hl7.org/CodeSystem/published-in-type
 */
export const PublishedInTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "published-in-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/published-in-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D020492\n            \n            <a name="published-in-type-D020492"> </a>\n          \n          </td>\n          \n          <td>Periodical</td>\n          \n          <td>Publication intended to be issued on an ongoing basis, generally more frequently than annually, containing separate articles, stories, or writings.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D019991\n            \n            <a name="published-in-type-D019991"> </a>\n          \n          </td>\n          \n          <td>Database</td>\n          \n          <td>A structured file of information or a set of logically related data stored and retrieved using computer-based means.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D001877\n            \n            <a name="published-in-type-D001877"> </a>\n          \n          </td>\n          \n          <td>Book</td>\n          \n          <td>Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D064886\n            \n            <a name="published-in-type-D064886"> </a>\n          \n          </td>\n          \n          <td>Dataset</td>\n          \n          <td>Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/published-in-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "PublishedInType",
  title: "PublishedInType",
  status: "draft",
  experimental: false,
  date: "2020-12-28T16:55:11+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The type of publication such as book, database, or journal.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/published-in-type",
  content: "complete",
  concept: [
    {
      code: "D020492",
      display: "Periodical",
      definition:
        "Publication intended to be issued on an ongoing basis, generally more frequently than annually, containing separate articles, stories, or writings.",
    },
    {
      code: "D019991",
      display: "Database",
      definition:
        "A structured file of information or a set of logically related data stored and retrieved using computer-based means.",
    },
    {
      code: "D001877",
      display: "Book",
      definition:
        "Non-periodical written or printed works consisting of sheets of pages fastened or bound together within covers.",
    },
    {
      code: "D064886",
      display: "Dataset",
      definition:
        "Works consisting of organized collections of data, which have been stored permanently in a formalized manner suitable for communication, interpretation, or processing.",
    },
  ],
};
