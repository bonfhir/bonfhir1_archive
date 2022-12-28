/**
 * This value set includes a smattering of Benefit Term codes.
 * http://terminology.hl7.org/CodeSystem/benefit-term
 */
export const BenefitTermCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "benefit-term",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/benefit-term defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">annual<a name="benefit-term-annual"> </a></td><td>Annual</td><td>Annual, renewing on the anniversary</td></tr><tr><td style="white-space:nowrap">day<a name="benefit-term-day"> </a></td><td>Day</td><td>Per day</td></tr><tr><td style="white-space:nowrap">lifetime<a name="benefit-term-lifetime"> </a></td><td>Lifetime</td><td>For the total term, lifetime, of the policy or coverage</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/benefit-term",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1179",
    },
  ],
  version: "4.3.0",
  name: "BenefitTermCodes",
  title: "Benefit Term Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a smattering of Benefit Term codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "annual",
      display: "Annual",
      definition: "Annual, renewing on the anniversary",
    },
    { code: "day", display: "Day", definition: "Per day" },
    {
      code: "lifetime",
      display: "Lifetime",
      definition: "For the total term, lifetime, of the policy or coverage",
    },
  ],
};
