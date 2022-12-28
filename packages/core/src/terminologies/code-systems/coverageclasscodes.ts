export const CoverageClassCodes = {
  resourceType: "CodeSystem",
  id: "coverage-class",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/coverage-class defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">group<a name="coverage-class-group"> </a></td><td>Group</td><td>An employee group</td></tr><tr><td style="white-space:nowrap">subgroup<a name="coverage-class-subgroup"> </a></td><td>SubGroup</td><td>A sub-group of an employee group</td></tr><tr><td style="white-space:nowrap">plan<a name="coverage-class-plan"> </a></td><td>Plan</td><td>A specific suite of benefits.</td></tr><tr><td style="white-space:nowrap">subplan<a name="coverage-class-subplan"> </a></td><td>SubPlan</td><td>A subset of a specific suite of benefits.</td></tr><tr><td style="white-space:nowrap">class<a name="coverage-class-class"> </a></td><td>Class</td><td>A class of benefits.</td></tr><tr><td style="white-space:nowrap">subclass<a name="coverage-class-subclass"> </a></td><td>SubClass</td><td>A subset of a class of benefits.</td></tr><tr><td style="white-space:nowrap">sequence<a name="coverage-class-sequence"> </a></td><td>Sequence</td><td>A sequence number associated with a short-term continuance of the coverage.</td></tr><tr><td style="white-space:nowrap">rxbin<a name="coverage-class-rxbin"> </a></td><td>RX BIN</td><td>Pharmacy benefit manager\'s Business Identification Number.</td></tr><tr><td style="white-space:nowrap">rxpcn<a name="coverage-class-rxpcn"> </a></td><td>RX PCN</td><td>A Pharmacy Benefit Manager specified Processor Control Number.</td></tr><tr><td style="white-space:nowrap">rxid<a name="coverage-class-rxid"> </a></td><td>RX Id</td><td>A Pharmacy Benefit Manager specified Member ID.</td></tr><tr><td style="white-space:nowrap">rxgroup<a name="coverage-class-rxgroup"> </a></td><td>RX Group</td><td>A Pharmacy Benefit Manager specified Group number.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/coverage-class",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1147",
    },
  ],
  version: "4.3.0",
  name: "CoverageClassCodes",
  title: "Coverage Class Codes",
  status: "draft",
  experimental: false,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description: "This value set includes Coverage Class codes.",
  copyright: "HL7 Inc.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "group", display: "Group", definition: "An employee group" },
    {
      code: "subgroup",
      display: "SubGroup",
      definition: "A sub-group of an employee group",
    },
    {
      code: "plan",
      display: "Plan",
      definition: "A specific suite of benefits.",
    },
    {
      code: "subplan",
      display: "SubPlan",
      definition: "A subset of a specific suite of benefits.",
    },
    { code: "class", display: "Class", definition: "A class of benefits." },
    {
      code: "subclass",
      display: "SubClass",
      definition: "A subset of a class of benefits.",
    },
    {
      code: "sequence",
      display: "Sequence",
      definition:
        "A sequence number associated with a short-term continuance of the coverage.",
    },
    {
      code: "rxbin",
      display: "RX BIN",
      definition: "Pharmacy benefit manager's Business Identification Number.",
    },
    {
      code: "rxpcn",
      display: "RX PCN",
      definition:
        "A Pharmacy Benefit Manager specified Processor Control Number.",
    },
    {
      code: "rxid",
      display: "RX Id",
      definition: "A Pharmacy Benefit Manager specified Member ID.",
    },
    {
      code: "rxgroup",
      display: "RX Group",
      definition: "A Pharmacy Benefit Manager specified Group number.",
    },
  ],
};
