export const MedicationDispenseCategoryCodes = {
  resourceType: "CodeSystem",
  id: "medicationdispense-category",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medicationdispense-category defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">inpatient<a name="medicationdispense-category-inpatient"> </a></td><td>Inpatient</td><td>Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.</td></tr><tr><td style="white-space:nowrap">outpatient<a name="medicationdispense-category-outpatient"> </a></td><td>Outpatient</td><td>Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor\'s office).</td></tr><tr><td style="white-space:nowrap">community<a name="medicationdispense-category-community"> </a></td><td>Community</td><td>Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).</td></tr><tr><td style="white-space:nowrap">discharge<a name="medicationdispense-category-discharge"> </a></td><td>Discharge</td><td>Includes dispenses for medications created when the patient is being released from a facility.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medicationdispense-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1315",
    },
  ],
  version: "4.3.0",
  name: "Medication Dispense Category Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicationdispense-category",
  content: "complete",
  concept: [
    {
      code: "inpatient",
      display: "Inpatient",
      definition:
        "Includes dispenses for medications to be administered or consumed in an inpatient or acute care setting.",
    },
    {
      code: "outpatient",
      display: "Outpatient",
      definition:
        "Includes dispenses for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office).",
    },
    {
      code: "community",
      display: "Community",
      definition:
        "Includes dispenses for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).",
    },
    {
      code: "discharge",
      display: "Discharge",
      definition:
        "Includes dispenses for medications created when the patient is being released from a facility.",
    },
  ],
};
