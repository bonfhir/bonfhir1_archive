/**
 * Example use codes for the List resource - typical kinds of use.
 * http://terminology.hl7.org/CodeSystem/list-example-use-codes
 */
export const ExampleUseCodesForListCodeSystem = {
  resourceType: "CodeSystem",
  id: "list-example-codes",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/list-example-use-codes defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">alerts<a name="list-example-codes-alerts"> </a></td><td>Alerts</td><td>A list of alerts for the patient.</td></tr><tr><td style="white-space:nowrap">adverserxns<a name="list-example-codes-adverserxns"> </a></td><td>Adverse Reactions</td><td>A list of part adverse reactions.</td></tr><tr><td style="white-space:nowrap">allergies<a name="list-example-codes-allergies"> </a></td><td>Allergies</td><td>A list of Allergies for the patient.</td></tr><tr><td style="white-space:nowrap">medications<a name="list-example-codes-medications"> </a></td><td>Medication List</td><td>A list of medication statements for the patient.</td></tr><tr><td style="white-space:nowrap">problems<a name="list-example-codes-problems"> </a></td><td>Problem List</td><td>A list of problems that the patient is known of have (or have had in the past).</td></tr><tr><td style="white-space:nowrap">worklist<a name="list-example-codes-worklist"> </a></td><td>Worklist</td><td>A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list).</td></tr><tr><td style="white-space:nowrap">waiting<a name="list-example-codes-waiting"> </a></td><td>Waiting List</td><td>A list of items waiting for an event (perhaps a surgical patient waiting list).</td></tr><tr><td style="white-space:nowrap">protocols<a name="list-example-codes-protocols"> </a></td><td>Protocols</td><td>A set of protocols to be followed.</td></tr><tr><td style="white-space:nowrap">plans<a name="list-example-codes-plans"> </a></td><td>Care Plans</td><td>A set of care plans that apply in a particular context of care.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/list-example-use-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1105",
    },
  ],
  version: "4.3.0",
  name: "ExampleUseCodesForList",
  title: "Example Use Codes for List",
  status: "draft",
  experimental: false,
  description:
    "Example use codes for the List resource - typical kinds of use.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "alerts",
      display: "Alerts",
      definition: "A list of alerts for the patient.",
    },
    {
      code: "adverserxns",
      display: "Adverse Reactions",
      definition: "A list of part adverse reactions.",
    },
    {
      code: "allergies",
      display: "Allergies",
      definition: "A list of Allergies for the patient.",
    },
    {
      code: "medications",
      display: "Medication List",
      definition: "A list of medication statements for the patient.",
    },
    {
      code: "problems",
      display: "Problem List",
      definition:
        "A list of problems that the patient is known of have (or have had in the past).",
    },
    {
      code: "worklist",
      display: "Worklist",
      definition:
        "A list of items that constitute a set of work to be performed (typically this code would be specialized for more specific uses, such as a ward round list).",
    },
    {
      code: "waiting",
      display: "Waiting List",
      definition:
        "A list of items waiting for an event (perhaps a surgical patient waiting list).",
    },
    {
      code: "protocols",
      display: "Protocols",
      definition: "A set of protocols to be followed.",
    },
    {
      code: "plans",
      display: "Care Plans",
      definition:
        "A set of care plans that apply in a particular context of care.",
    },
  ],
};
