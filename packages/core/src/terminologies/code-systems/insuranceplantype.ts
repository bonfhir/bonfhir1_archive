export const InsurancePlanType = {
  resourceType: "CodeSystem",
  id: "insuranceplan-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/insuranceplan-type defines many codes, of which the following are a subset:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">medical<a name="insuranceplan-type-medical"> </a></td><td>Medical</td></tr><tr><td style="white-space:nowrap">dental<a name="insuranceplan-type-dental"> </a></td><td>Dental</td></tr><tr><td style="white-space:nowrap">mental<a name="insuranceplan-type-mental"> </a></td><td>Mental Health</td></tr><tr><td style="white-space:nowrap">subst-ab<a name="insuranceplan-type-subst-ab"> </a></td><td>Substance Abuse</td></tr><tr><td style="white-space:nowrap">vision<a name="insuranceplan-type-vision"> </a></td><td>Vision</td></tr><tr><td style="white-space:nowrap">Drug<a name="insuranceplan-type-Drug"> </a></td><td>Drug</td></tr><tr><td style="white-space:nowrap">short-term<a name="insuranceplan-type-short-term"> </a></td><td>Short Term</td></tr><tr><td style="white-space:nowrap">long-term<a name="insuranceplan-type-long-term"> </a></td><td>Long Term Care</td></tr><tr><td style="white-space:nowrap">hospice<a name="insuranceplan-type-hospice"> </a></td><td>Hospice</td></tr><tr><td style="white-space:nowrap">home<a name="insuranceplan-type-home"> </a></td><td>Home Health</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://hl7.org/fhir/insuranceplan-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1261",
    },
  ],
  version: "4.3.0",
  name: "InsurancePlanType",
  status: "draft",
  experimental: false,
  description:
    "This example value set defines a set of codes that can be used to indicate a type of product plan.",
  caseSensitive: true,
  content: "fragment",
  concept: [
    { code: "medical", display: "Medical" },
    { code: "dental", display: "Dental" },
    { code: "mental", display: "Mental Health" },
    { code: "subst-ab", display: "Substance Abuse" },
    { code: "vision", display: "Vision" },
    { code: "Drug", display: "Drug" },
    { code: "short-term", display: "Short Term" },
    { code: "long-term", display: "Long Term Care" },
    { code: "hospice", display: "Hospice" },
    { code: "home", display: "Home Health" },
  ],
};
