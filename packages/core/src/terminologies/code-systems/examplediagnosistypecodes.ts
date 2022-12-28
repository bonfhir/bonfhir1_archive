/**
 * This value set includes example Diagnosis Type codes.
 * http://terminology.hl7.org/CodeSystem/ex-diagnosistype
 */
export const ExampleDiagnosisTypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "ex-diagnosistype",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-diagnosistype defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">admitting<a name="ex-diagnosistype-admitting"> </a></td><td>Admitting Diagnosis</td><td>The diagnosis given as the reason why the patient was admitted to the hospital.</td></tr><tr><td style="white-space:nowrap">clinical<a name="ex-diagnosistype-clinical"> </a></td><td>Clinical Diagnosis</td><td>A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.</td></tr><tr><td style="white-space:nowrap">differential<a name="ex-diagnosistype-differential"> </a></td><td>Differential Diagnosis</td><td>One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.</td></tr><tr><td style="white-space:nowrap">discharge<a name="ex-diagnosistype-discharge"> </a></td><td>Discharge Diagnosis</td><td>The diagnosis given when the patient is discharged from the hospital.</td></tr><tr><td style="white-space:nowrap">laboratory<a name="ex-diagnosistype-laboratory"> </a></td><td>Laboratory Diagnosis</td><td>A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.</td></tr><tr><td style="white-space:nowrap">nursing<a name="ex-diagnosistype-nursing"> </a></td><td>Nursing Diagnosis</td><td>A diagnosis which identifies people\'s responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.</td></tr><tr><td style="white-space:nowrap">prenatal<a name="ex-diagnosistype-prenatal"> </a></td><td>Prenatal Diagnosis</td><td>A diagnosis determined prior to birth.</td></tr><tr><td style="white-space:nowrap">principal<a name="ex-diagnosistype-principal"> </a></td><td>Principal Diagnosis</td><td>The single medical diagnosis that is most relevant to the patient\'s chief complaint or need for treatment.</td></tr><tr><td style="white-space:nowrap">radiology<a name="ex-diagnosistype-radiology"> </a></td><td>Radiology Diagnosis</td><td>A diagnosis based primarily on the results from medical imaging studies.</td></tr><tr><td style="white-space:nowrap">remote<a name="ex-diagnosistype-remote"> </a></td><td>Remote Diagnosis</td><td>A diagnosis determined using telemedicine techniques.</td></tr><tr><td style="white-space:nowrap">retrospective<a name="ex-diagnosistype-retrospective"> </a></td><td>Retrospective Diagnosis</td><td>The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.</td></tr><tr><td style="white-space:nowrap">self<a name="ex-diagnosistype-self"> </a></td><td>Self Diagnosis</td><td>A diagnosis determined by the patient.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1167",
    },
  ],
  version: "4.3.0",
  name: "ExampleDiagnosisTypeCodes",
  title: "Example Diagnosis Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes example Diagnosis Type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "admitting",
      display: "Admitting Diagnosis",
      definition:
        "The diagnosis given as the reason why the patient was admitted to the hospital.",
    },
    {
      code: "clinical",
      display: "Clinical Diagnosis",
      definition:
        "A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.",
    },
    {
      code: "differential",
      display: "Differential Diagnosis",
      definition:
        "One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.",
    },
    {
      code: "discharge",
      display: "Discharge Diagnosis",
      definition:
        "The diagnosis given when the patient is discharged from the hospital.",
    },
    {
      code: "laboratory",
      display: "Laboratory Diagnosis",
      definition:
        "A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.",
    },
    {
      code: "nursing",
      display: "Nursing Diagnosis",
      definition:
        "A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.",
    },
    {
      code: "prenatal",
      display: "Prenatal Diagnosis",
      definition: "A diagnosis determined prior to birth.",
    },
    {
      code: "principal",
      display: "Principal Diagnosis",
      definition:
        "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.",
    },
    {
      code: "radiology",
      display: "Radiology Diagnosis",
      definition:
        "A diagnosis based primarily on the results from medical imaging studies.",
    },
    {
      code: "remote",
      display: "Remote Diagnosis",
      definition: "A diagnosis determined using telemedicine techniques.",
    },
    {
      code: "retrospective",
      display: "Retrospective Diagnosis",
      definition:
        "The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.",
    },
    {
      code: "self",
      display: "Self Diagnosis",
      definition: "A diagnosis determined by the patient.",
    },
  ],
};
