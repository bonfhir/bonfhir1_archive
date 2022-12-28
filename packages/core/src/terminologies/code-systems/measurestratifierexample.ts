export const MeasureStratifierExample = {
  resourceType: "CodeSystem",
  id: "measure-stratifier-example",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/measure-stratifier-example defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">age<a name="measure-stratifier-example-age"> </a></td><td>Age</td><td>Age Stratification.</td></tr><tr><td style="white-space:nowrap">gender<a name="measure-stratifier-example-gender"> </a></td><td>Gender</td><td>Gender Stratification.</td></tr><tr><td style="white-space:nowrap">region<a name="measure-stratifier-example-region"> </a></td><td>Region</td><td>Region Stratification.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cqi",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/measure-stratifier-example",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "MeasureStratifierExample",
  title: "MeasureStratifierExample",
  status: "draft",
  experimental: false,
  publisher: "Clinical Quality Information Workgroup",
  description: "Identifier subgroups in a population for measuring purposes.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/measure-stratifier-example",
  content: "complete",
  concept: [
    { code: "age", display: "Age", definition: "Age Stratification." },
    { code: "gender", display: "Gender", definition: "Gender Stratification." },
    { code: "region", display: "Region", definition: "Region Stratification." },
  ],
};
