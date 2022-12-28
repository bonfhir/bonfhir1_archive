/**
 * Example Region Value Measure Groups for the Measure Resource.
 * http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example
 */
export const MeasureReportStratifierValueExampleCodeSystem = {
  resourceType: "CodeSystem",
  id: "measurereport-stratifier-value-example",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">northwest<a name="measurereport-stratifier-value-example-northwest"> </a></td><td>Northwest</td><td>Northwest region stratification.</td></tr><tr><td style="white-space:nowrap">northeast<a name="measurereport-stratifier-value-example-northeast"> </a></td><td>Northeast</td><td>Northeast region stratification.</td></tr><tr><td style="white-space:nowrap">southwest<a name="measurereport-stratifier-value-example-southwest"> </a></td><td>Soutwest</td><td>Soutwest region stratification.</td></tr><tr><td style="white-space:nowrap">southeast<a name="measurereport-stratifier-value-example-southeast"> </a></td><td>Southeast</td><td>Southeast region stratification.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cqi",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/measurereport-stratifier-value-example",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "MeasureReportStratifierValueExample",
  title: "MeasureReportStratifierValueExample",
  status: "draft",
  experimental: false,
  publisher: "Clinical Quality Information Workgroup",
  description: "Example Region Value Measure Groups for the Measure Resource.",
  caseSensitive: true,
  valueSet:
    "http://hl7.org/fhir/ValueSet/measurereport-stratifier-value-example",
  content: "complete",
  concept: [
    {
      code: "northwest",
      display: "Northwest",
      definition: "Northwest region stratification.",
    },
    {
      code: "northeast",
      display: "Northeast",
      definition: "Northeast region stratification.",
    },
    {
      code: "southwest",
      display: "Soutwest",
      definition: "Soutwest region stratification.",
    },
    {
      code: "southeast",
      display: "Southeast",
      definition: "Southeast region stratification.",
    },
  ],
};
