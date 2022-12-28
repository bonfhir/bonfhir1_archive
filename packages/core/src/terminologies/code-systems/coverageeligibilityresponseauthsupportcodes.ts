/**
 * This value set includes CoverageEligibilityResponse Auth Support codes.
 * http://terminology.hl7.org/CodeSystem/coverageeligibilityresponse-ex-auth-support
 */
export const CoverageEligibilityResponseAuthSupportCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "coverageeligibilityresponse-ex-auth-support",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/coverageeligibilityresponse-ex-auth-support defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">laborder<a name="coverageeligibilityresponse-ex-auth-support-laborder"> </a></td><td>Lab Order</td><td>A request or authorization for laboratory diagnostic tests.</td></tr><tr><td style="white-space:nowrap">labreport<a name="coverageeligibilityresponse-ex-auth-support-labreport"> </a></td><td>Lab Report</td><td>A report on laboratory diagnostic test(s).</td></tr><tr><td style="white-space:nowrap">diagnosticimageorder<a name="coverageeligibilityresponse-ex-auth-support-diagnosticimageorder"> </a></td><td>Diagnostic Image Order</td><td>A request or authorization for diagnostic imaging.</td></tr><tr><td style="white-space:nowrap">diagnosticimagereport<a name="coverageeligibilityresponse-ex-auth-support-diagnosticimagereport"> </a></td><td>Diagnostic Image Report</td><td>A report on diagnostic image(s).</td></tr><tr><td style="white-space:nowrap">professionalreport<a name="coverageeligibilityresponse-ex-auth-support-professionalreport"> </a></td><td>Professional Report</td><td>A report from a licensed professional regarding the siutation, condition or proposed treatment.</td></tr><tr><td style="white-space:nowrap">accidentreport<a name="coverageeligibilityresponse-ex-auth-support-accidentreport"> </a></td><td>Accident Report</td><td>A formal accident report as would be filed with police or a simlar official body.</td></tr><tr><td style="white-space:nowrap">model<a name="coverageeligibilityresponse-ex-auth-support-model"> </a></td><td>Model</td><td>A physical model of the affected area.</td></tr><tr><td style="white-space:nowrap">picture<a name="coverageeligibilityresponse-ex-auth-support-picture"> </a></td><td>Picture</td><td>A photograph of the affected area.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/coverageeligibilityresponse-ex-auth-support",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1394",
    },
  ],
  version: "4.3.0",
  name: "CoverageEligibilityResponseAuthSupportCodes",
  title: "CoverageEligibilityResponse Auth Support Codes",
  status: "draft",
  experimental: false,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description:
    "This value set includes CoverageEligibilityResponse Auth Support codes.",
  copyright: "HL7 Inc.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "laborder",
      display: "Lab Order",
      definition: "A request or authorization for laboratory diagnostic tests.",
    },
    {
      code: "labreport",
      display: "Lab Report",
      definition: "A report on laboratory diagnostic test(s).",
    },
    {
      code: "diagnosticimageorder",
      display: "Diagnostic Image Order",
      definition: "A request or authorization for diagnostic imaging.",
    },
    {
      code: "diagnosticimagereport",
      display: "Diagnostic Image Report",
      definition: "A report on diagnostic image(s).",
    },
    {
      code: "professionalreport",
      display: "Professional Report",
      definition:
        "A report from a licensed professional regarding the siutation, condition or proposed treatment.",
    },
    {
      code: "accidentreport",
      display: "Accident Report",
      definition:
        "A formal accident report as would be filed with police or a simlar official body.",
    },
    {
      code: "model",
      display: "Model",
      definition: "A physical model of the affected area.",
    },
    {
      code: "picture",
      display: "Picture",
      definition: "A photograph of the affected area.",
    },
  ],
};
