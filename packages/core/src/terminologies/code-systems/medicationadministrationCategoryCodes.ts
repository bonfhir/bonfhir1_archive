export const MedicationAdministrationCategoryCodes = {
  resourceType: "CodeSystem",
  id: "medication-admin-category",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medication-admin-category defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">inpatient<a name="medication-admin-category-inpatient"> </a></td><td>Inpatient</td><td>Includes administrations in an inpatient or acute care setting</td></tr><tr><td style="white-space:nowrap">outpatient<a name="medication-admin-category-outpatient"> </a></td><td>Outpatient</td><td>Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor\'s office)</td></tr><tr><td style="white-space:nowrap">community<a name="medication-admin-category-community"> </a></td><td>Community</td><td>Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medication-admin-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1111",
    },
  ],
  version: "4.3.0",
  name: "MedicationAdministration Category Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medication-admin-category",
  content: "complete",
  concept: [
    {
      code: "inpatient",
      display: "Inpatient",
      definition:
        "Includes administrations in an inpatient or acute care setting",
    },
    {
      code: "outpatient",
      display: "Outpatient",
      definition:
        "Includes administrations in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)",
    },
    {
      code: "community",
      display: "Community",
      definition:
        "Includes administrations by the patient in their home (this would include long term care or nursing homes, hospices, etc.)",
    },
  ],
};
