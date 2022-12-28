export const ExampleDiagnosisOnAdmissionCodes = {
  resourceType: "CodeSystem",
  id: "ex-diagnosis-on-admission",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">y<a name="ex-diagnosis-on-admission-y"> </a></td><td>Yes</td><td>Diagnosis was present at time of inpatient admission.</td></tr><tr><td style="white-space:nowrap">n<a name="ex-diagnosis-on-admission-n"> </a></td><td>No</td><td>Diagnosis was not present at time of inpatient admission.</td></tr><tr><td style="white-space:nowrap">u<a name="ex-diagnosis-on-admission-u"> </a></td><td>Unknown</td><td>Documentation insufficient to determine if condition was present at the time of inpatient admission.</td></tr><tr><td style="white-space:nowrap">w<a name="ex-diagnosis-on-admission-w"> </a></td><td>Undetermined</td><td>Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1170",
    },
  ],
  version: "4.3.0",
  name: "ExampleDiagnosisOnAdmissionCodes",
  title: "Example Diagnosis on Admission Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes example Diagnosis on admission codes.",
  copyright:
    "These codes have been appropriated from the [UB04 code set](http://www.nubc.org/) owned and managed by the [AHA](http://www.aha.org/). Users require a [license from the AHA](http://www.nubc.org/licensing/index.dhtml) in order to use these codes. **Note: the codes have been withdrawn in a later version**",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "y",
      display: "Yes",
      definition: "Diagnosis was present at time of inpatient admission.",
    },
    {
      code: "n",
      display: "No",
      definition: "Diagnosis was not present at time of inpatient admission.",
    },
    {
      code: "u",
      display: "Unknown",
      definition:
        "Documentation insufficient to determine if condition was present at the time of inpatient admission.",
    },
    {
      code: "w",
      display: "Undetermined",
      definition:
        "Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.",
    },
  ],
};
