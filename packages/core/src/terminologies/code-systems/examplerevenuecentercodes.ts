/**
 * This value set includes sample Revenue Center codes.
 * http://terminology.hl7.org/CodeSystem/ex-revenue-center
 */
export const ExampleRevenueCenterCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "ex-revenue-center",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-revenue-center defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">0370<a name="ex-revenue-center-0370"> </a></td><td>Anaesthesia</td><td>Anaesthesia.</td></tr><tr><td style="white-space:nowrap">0420<a name="ex-revenue-center-0420"> </a></td><td>Physical Therapy</td><td>Physical Therapy.</td></tr><tr><td style="white-space:nowrap">0421<a name="ex-revenue-center-0421"> </a></td><td>Physical Therapy -</td><td>Physical Therapy - visit charge.</td></tr><tr><td style="white-space:nowrap">0440<a name="ex-revenue-center-0440"> </a></td><td>Speech-Language Pathology</td><td>Speech-Language Pathology.</td></tr><tr><td style="white-space:nowrap">0441<a name="ex-revenue-center-0441"> </a></td><td>Speech-Language Pathology - Visit</td><td>Speech-Language Pathology- visit charge</td></tr><tr><td style="white-space:nowrap">0450<a name="ex-revenue-center-0450"> </a></td><td>Emergency Room</td><td>Emergency Room</td></tr><tr><td style="white-space:nowrap">0451<a name="ex-revenue-center-0451"> </a></td><td>Emergency Room - EM/EMTALA</td><td>Emergency Room - EM/EMTALA</td></tr><tr><td style="white-space:nowrap">0452<a name="ex-revenue-center-0452"> </a></td><td>Emergency Room - beyond EMTALA</td><td>Emergency Room - beyond EMTALA</td></tr><tr><td style="white-space:nowrap">0010<a name="ex-revenue-center-0010"> </a></td><td>Vision Clinic</td><td>Vision Clinic</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1168",
    },
  ],
  version: "4.3.0",
  name: "ExampleRevenueCenterCodes",
  title: "Example Revenue Center Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Revenue Center codes.",
  copyright:
    "These codes have been appropriated from the [UB04 code set](http://www.nubc.org/) owned and managed by the [AHA](http://www.aha.org/). Users require a [license from the AHA](http://www.nubc.org/licensing/index.dhtml) in order to use these codes. **Note: the codes have been withdrawn in a later version**",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "0370", display: "Anaesthesia", definition: "Anaesthesia." },
    {
      code: "0420",
      display: "Physical Therapy",
      definition: "Physical Therapy.",
    },
    {
      code: "0421",
      display: "Physical Therapy -",
      definition: "Physical Therapy - visit charge.",
    },
    {
      code: "0440",
      display: "Speech-Language Pathology",
      definition: "Speech-Language Pathology.",
    },
    {
      code: "0441",
      display: "Speech-Language Pathology - Visit",
      definition: "Speech-Language Pathology- visit charge",
    },
    { code: "0450", display: "Emergency Room", definition: "Emergency Room" },
    {
      code: "0451",
      display: "Emergency Room - EM/EMTALA",
      definition: "Emergency Room - EM/EMTALA",
    },
    {
      code: "0452",
      display: "Emergency Room - beyond EMTALA",
      definition: "Emergency Room - beyond EMTALA",
    },
    { code: "0010", display: "Vision Clinic", definition: "Vision Clinic" },
  ],
};
