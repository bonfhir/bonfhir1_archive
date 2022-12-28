/**
 * This codeset includes Example Coverage Financial Exceptions Code.
 * http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception
 */
export const ExampleCoverageFinancialExceptionsCodeCodeSystem = {
  resourceType: "CodeSystem",
  id: "coverage-financial-exception",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">retired<a name="coverage-financial-exception-retired"> </a></td><td>Retired</td><td>Retired persons have all copays and deductibles reduced.</td></tr><tr><td style="white-space:nowrap">foster<a name="coverage-financial-exception-foster"> </a></td><td>Foster child</td><td>Children in the foster care have all copays and deductibles waived.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1329",
    },
  ],
  version: "4.3.0",
  name: "ExampleCoverageFinancialExceptionsCode",
  title: "Example Coverage Financial Exceptions Code",
  status: "draft",
  experimental: false,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description:
    "This codeset includes Example Coverage Financial Exceptions Code.",
  copyright: "HL7 Inc.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "retired",
      display: "Retired",
      definition: "Retired persons have all copays and deductibles reduced.",
    },
    {
      code: "foster",
      display: "Foster child",
      definition:
        "Children in the foster care have all copays and deductibles waived.",
    },
  ],
};
