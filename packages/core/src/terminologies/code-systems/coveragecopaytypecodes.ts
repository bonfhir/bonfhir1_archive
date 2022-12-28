/**
 * This codeset includes Coverage Copayment Type codes.
 * http://terminology.hl7.org/CodeSystem/coverage-copay-type
 */
export const CoverageCoPayTypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "coverage-copay-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/coverage-copay-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">gpvisit<a name="coverage-copay-type-gpvisit"> </a></td><td>GP Office Visit</td><td>An office visit for a general practitioner of a discipline.</td></tr><tr><td style="white-space:nowrap">spvisit<a name="coverage-copay-type-spvisit"> </a></td><td>Specialist Office Visit</td><td>An office visit for a specialist practitioner of a discipline</td></tr><tr><td style="white-space:nowrap">emergency<a name="coverage-copay-type-emergency"> </a></td><td>Emergency</td><td>An episode in an emergency department.</td></tr><tr><td style="white-space:nowrap">inpthosp<a name="coverage-copay-type-inpthosp"> </a></td><td>Inpatient Hospital</td><td>An episode of an Inpatient hospital stay.</td></tr><tr><td style="white-space:nowrap">televisit<a name="coverage-copay-type-televisit"> </a></td><td>Tele-visit</td><td>A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.</td></tr><tr><td style="white-space:nowrap">urgentcare<a name="coverage-copay-type-urgentcare"> </a></td><td>Urgent Care</td><td>A visit to an urgent care facility - typically a community care clinic.</td></tr><tr><td style="white-space:nowrap">copaypct<a name="coverage-copay-type-copaypct"> </a></td><td>Copay Percentage</td><td>A standard percentage applied to all classes or service or product not otherwise specified.</td></tr><tr><td style="white-space:nowrap">copay<a name="coverage-copay-type-copay"> </a></td><td>Copay Amount</td><td>A standard fixed currency amount applied to all classes or service or product not otherwise specified.</td></tr><tr><td style="white-space:nowrap">deductible<a name="coverage-copay-type-deductible"> </a></td><td>Deductible</td><td>The accumulated amount of patient payment before the coverage begins to pay for services.</td></tr><tr><td style="white-space:nowrap">maxoutofpocket<a name="coverage-copay-type-maxoutofpocket"> </a></td><td>Maximum out of pocket</td><td>The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1149",
    },
  ],
  version: "4.3.0",
  name: "CoverageCoPayTypeCodes",
  title: "Coverage CoPay Type Codes",
  status: "draft",
  experimental: false,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description: "This codeset includes Coverage Copayment Type codes.",
  copyright: "HL7 Inc.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "gpvisit",
      display: "GP Office Visit",
      definition: "An office visit for a general practitioner of a discipline.",
    },
    {
      code: "spvisit",
      display: "Specialist Office Visit",
      definition:
        "An office visit for a specialist practitioner of a discipline",
    },
    {
      code: "emergency",
      display: "Emergency",
      definition: "An episode in an emergency department.",
    },
    {
      code: "inpthosp",
      display: "Inpatient Hospital",
      definition: "An episode of an Inpatient hospital stay.",
    },
    {
      code: "televisit",
      display: "Tele-visit",
      definition:
        "A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.",
    },
    {
      code: "urgentcare",
      display: "Urgent Care",
      definition:
        "A visit to an urgent care facility - typically a community care clinic.",
    },
    {
      code: "copaypct",
      display: "Copay Percentage",
      definition:
        "A standard percentage applied to all classes or service or product not otherwise specified.",
    },
    {
      code: "copay",
      display: "Copay Amount",
      definition:
        "A standard fixed currency amount applied to all classes or service or product not otherwise specified.",
    },
    {
      code: "deductible",
      display: "Deductible",
      definition:
        "The accumulated amount of patient payment before the coverage begins to pay for services.",
    },
    {
      code: "maxoutofpocket",
      display: "Maximum out of pocket",
      definition:
        "The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.",
    },
  ],
};
