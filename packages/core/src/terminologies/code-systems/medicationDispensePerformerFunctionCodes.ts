/**
 *
 * http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function
 */
export const MedicationDispensePerformerFunctionCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicationdispense-performer-function",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">dataenterer<a name="medicationdispense-performer-function-dataenterer"> </a></td><td>Data Enterer</td><td>Recorded the details of the request</td></tr><tr><td style="white-space:nowrap">packager<a name="medicationdispense-performer-function-packager"> </a></td><td>Packager</td><td>Prepared the medication.</td></tr><tr><td style="white-space:nowrap">checker<a name="medicationdispense-performer-function-checker"> </a></td><td>Checker</td><td>Performed initial quality assurance on the prepared medication</td></tr><tr><td style="white-space:nowrap">finalchecker<a name="medicationdispense-performer-function-finalchecker"> </a></td><td>Final Checker</td><td>Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1319",
    },
  ],
  version: "4.3.0",
  name: "Medication Dispense Performer Function Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet:
    "http://hl7.org/fhir/ValueSet/medicationdispense-performer-function",
  content: "complete",
  concept: [
    {
      code: "dataenterer",
      display: "Data Enterer",
      definition: "Recorded the details of the request",
    },
    {
      code: "packager",
      display: "Packager",
      definition: "Prepared the medication.",
    },
    {
      code: "checker",
      display: "Checker",
      definition:
        "Performed initial quality assurance on the prepared medication",
    },
    {
      code: "finalchecker",
      display: "Final Checker",
      definition:
        "Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.",
    },
  ],
};
