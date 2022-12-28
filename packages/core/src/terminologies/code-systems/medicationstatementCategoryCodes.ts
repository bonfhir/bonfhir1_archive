/**
 *
 * http://terminology.hl7.org/CodeSystem/medication-statement-category
 */
export const MedicationStatementCategoryCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "medication-statement-category",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medication-statement-category defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">inpatient<a name="medication-statement-category-inpatient"> </a></td><td>Inpatient</td><td>Includes orders for medications to be administered or consumed in an inpatient or acute care setting</td></tr><tr><td style="white-space:nowrap">outpatient<a name="medication-statement-category-outpatient"> </a></td><td>Outpatient</td><td>Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor\'s office)</td></tr><tr><td style="white-space:nowrap">community<a name="medication-statement-category-community"> </a></td><td>Community</td><td>Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).</td></tr><tr><td style="white-space:nowrap">patientspecified<a name="medication-statement-category-patientspecified"> </a></td><td>Patient Specified</td><td>Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medication-statement-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1120",
    },
  ],
  version: "4.3.0",
  name: "MedicationStatement Category Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medication-statement-category",
  content: "complete",
  concept: [
    {
      code: "inpatient",
      display: "Inpatient",
      definition:
        "Includes orders for medications to be administered or consumed in an inpatient or acute care setting",
    },
    {
      code: "outpatient",
      display: "Outpatient",
      definition:
        "Includes orders for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)",
    },
    {
      code: "community",
      display: "Community",
      definition:
        "Includes orders for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.).",
    },
    {
      code: "patientspecified",
      display: "Patient Specified",
      definition:
        "Includes statements about medication use, including over the counter medication, provided by the patient, agent or another provider",
    },
  ],
};
