/**
 * This value set includes a smattering of Benefit type codes.
 * http://terminology.hl7.org/CodeSystem/benefit-type
 */
export const BenefitTypeCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "benefit-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/benefit-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">benefit<a name="benefit-type-benefit"> </a></td><td>Benefit</td><td>Maximum benefit allowable.</td></tr><tr><td style="white-space:nowrap">deductible<a name="benefit-type-deductible"> </a></td><td>Deductible</td><td>Cost to be incurred before benefits are applied</td></tr><tr><td style="white-space:nowrap">visit<a name="benefit-type-visit"> </a></td><td>Visit</td><td>Service visit</td></tr><tr><td style="white-space:nowrap">room<a name="benefit-type-room"> </a></td><td>Room</td><td>Type of room</td></tr><tr><td style="white-space:nowrap">copay<a name="benefit-type-copay"> </a></td><td>Copayment per service</td><td>Copayment per service</td></tr><tr><td style="white-space:nowrap">copay-percent<a name="benefit-type-copay-percent"> </a></td><td>Copayment Percent per service</td><td>Copayment percentage per service</td></tr><tr><td style="white-space:nowrap">copay-maximum<a name="benefit-type-copay-maximum"> </a></td><td>Copayment maximum per service</td><td>Copayment maximum per service</td></tr><tr><td style="white-space:nowrap">vision-exam<a name="benefit-type-vision-exam"> </a></td><td>Vision Exam</td><td>Vision Exam</td></tr><tr><td style="white-space:nowrap">vision-glasses<a name="benefit-type-vision-glasses"> </a></td><td>Vision Glasses</td><td>Frames and lenses</td></tr><tr><td style="white-space:nowrap">vision-contacts<a name="benefit-type-vision-contacts"> </a></td><td>Vision Contacts Coverage</td><td>Contact Lenses</td></tr><tr><td style="white-space:nowrap">medical-primarycare<a name="benefit-type-medical-primarycare"> </a></td><td>Medical Primary Health Coverage</td><td>Medical Primary Health Coverage</td></tr><tr><td style="white-space:nowrap">pharmacy-dispense<a name="benefit-type-pharmacy-dispense"> </a></td><td>Pharmacy Dispense Coverage</td><td>Pharmacy Dispense Coverage</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/benefit-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1176",
    },
  ],
  version: "4.3.0",
  name: "BenefitTypeCodes",
  title: "Benefit Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a smattering of Benefit type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "benefit",
      display: "Benefit",
      definition: "Maximum benefit allowable.",
    },
    {
      code: "deductible",
      display: "Deductible",
      definition: "Cost to be incurred before benefits are applied",
    },
    { code: "visit", display: "Visit", definition: "Service visit" },
    { code: "room", display: "Room", definition: "Type of room" },
    {
      code: "copay",
      display: "Copayment per service",
      definition: "Copayment per service",
    },
    {
      code: "copay-percent",
      display: "Copayment Percent per service",
      definition: "Copayment percentage per service",
    },
    {
      code: "copay-maximum",
      display: "Copayment maximum per service",
      definition: "Copayment maximum per service",
    },
    { code: "vision-exam", display: "Vision Exam", definition: "Vision Exam" },
    {
      code: "vision-glasses",
      display: "Vision Glasses",
      definition: "Frames and lenses",
    },
    {
      code: "vision-contacts",
      display: "Vision Contacts Coverage",
      definition: "Contact Lenses",
    },
    {
      code: "medical-primarycare",
      display: "Medical Primary Health Coverage",
      definition: "Medical Primary Health Coverage",
    },
    {
      code: "pharmacy-dispense",
      display: "Pharmacy Dispense Coverage",
      definition: "Pharmacy Dispense Coverage",
    },
  ],
};
