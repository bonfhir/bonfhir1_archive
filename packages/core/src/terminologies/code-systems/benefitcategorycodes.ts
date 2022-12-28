/**
 * This value set includes a smattering of Benefit SubCategory codes.
 * http://terminology.hl7.org/CodeSystem/ex-benefitcategory
 */
export const BenefitCategoryCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "ex-benefitcategory",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-benefitcategory defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">1<a name="ex-benefitcategory-1"> </a></td><td>Medical Care</td><td>Medical Care.</td></tr><tr><td style="white-space:nowrap">2<a name="ex-benefitcategory-2"> </a></td><td>Surgical</td><td>Surgical.</td></tr><tr><td style="white-space:nowrap">3<a name="ex-benefitcategory-3"> </a></td><td>Consultation</td><td>Consultation.</td></tr><tr><td style="white-space:nowrap">4<a name="ex-benefitcategory-4"> </a></td><td>Diagnostic XRay</td><td>Diagnostic XRay.</td></tr><tr><td style="white-space:nowrap">5<a name="ex-benefitcategory-5"> </a></td><td>Diagnostic Lab</td><td>Diagnostic Lab.</td></tr><tr><td style="white-space:nowrap">14<a name="ex-benefitcategory-14"> </a></td><td>Renal Supplies</td><td>Renal Supplies excluding Dialysis.</td></tr><tr><td style="white-space:nowrap">23<a name="ex-benefitcategory-23"> </a></td><td>Diagnostic Dental</td><td>Diagnostic Dental.</td></tr><tr><td style="white-space:nowrap">24<a name="ex-benefitcategory-24"> </a></td><td>Periodontics</td><td>Periodontics.</td></tr><tr><td style="white-space:nowrap">25<a name="ex-benefitcategory-25"> </a></td><td>Restorative</td><td>Restorative.</td></tr><tr><td style="white-space:nowrap">26<a name="ex-benefitcategory-26"> </a></td><td>Endodontics</td><td>Endodontics.</td></tr><tr><td style="white-space:nowrap">27<a name="ex-benefitcategory-27"> </a></td><td>Maxillofacial Prosthetics</td><td>Maxillofacial Prosthetics.</td></tr><tr><td style="white-space:nowrap">28<a name="ex-benefitcategory-28"> </a></td><td>Adjunctive Dental Services</td><td>Adjunctive Dental Services.</td></tr><tr><td style="white-space:nowrap">30<a name="ex-benefitcategory-30"> </a></td><td>Health Benefit Plan Coverage</td><td>Health Benefit Plan Coverage.</td></tr><tr><td style="white-space:nowrap">35<a name="ex-benefitcategory-35"> </a></td><td>Dental Care</td><td>Dental Care.</td></tr><tr><td style="white-space:nowrap">36<a name="ex-benefitcategory-36"> </a></td><td>Dental Crowns</td><td>Dental Crowns.</td></tr><tr><td style="white-space:nowrap">37<a name="ex-benefitcategory-37"> </a></td><td>Dental Accident</td><td>Dental Accident.</td></tr><tr><td style="white-space:nowrap">49<a name="ex-benefitcategory-49"> </a></td><td>Hospital Room and Board</td><td>Hospital Room and Board.</td></tr><tr><td style="white-space:nowrap">55<a name="ex-benefitcategory-55"> </a></td><td>Major Medical</td><td>Major Medical.</td></tr><tr><td style="white-space:nowrap">56<a name="ex-benefitcategory-56"> </a></td><td>Medically Related Transportation</td><td>Medically Related Transportation.</td></tr><tr><td style="white-space:nowrap">61<a name="ex-benefitcategory-61"> </a></td><td>In-vitro Fertilization</td><td>In-vitro Fertilization.</td></tr><tr><td style="white-space:nowrap">62<a name="ex-benefitcategory-62"> </a></td><td>MRI Scan</td><td>MRI Scan.</td></tr><tr><td style="white-space:nowrap">63<a name="ex-benefitcategory-63"> </a></td><td>Donor Procedures</td><td>Donor Procedures such as organ harvest.</td></tr><tr><td style="white-space:nowrap">69<a name="ex-benefitcategory-69"> </a></td><td>Maternity</td><td>Maternity.</td></tr><tr><td style="white-space:nowrap">76<a name="ex-benefitcategory-76"> </a></td><td>Renal Dialysis</td><td>Renal dialysis.</td></tr><tr><td style="white-space:nowrap">F1<a name="ex-benefitcategory-F1"> </a></td><td>Medical Coverage</td><td>Medical Coverage.</td></tr><tr><td style="white-space:nowrap">F3<a name="ex-benefitcategory-F3"> </a></td><td>Dental Coverage</td><td>Dental Coverage.</td></tr><tr><td style="white-space:nowrap">F4<a name="ex-benefitcategory-F4"> </a></td><td>Hearing Coverage</td><td>Hearing Coverage.</td></tr><tr><td style="white-space:nowrap">F6<a name="ex-benefitcategory-F6"> </a></td><td>Vision Coverage</td><td>Vision Coverage.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1175",
    },
  ],
  version: "4.3.0",
  name: "BenefitCategoryCodes",
  title: "Benefit Category Codes",
  status: "draft",
  experimental: false,
  description:
    "This value set includes a smattering of Benefit SubCategory codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "1", display: "Medical Care", definition: "Medical Care." },
    { code: "2", display: "Surgical", definition: "Surgical." },
    { code: "3", display: "Consultation", definition: "Consultation." },
    { code: "4", display: "Diagnostic XRay", definition: "Diagnostic XRay." },
    { code: "5", display: "Diagnostic Lab", definition: "Diagnostic Lab." },
    {
      code: "14",
      display: "Renal Supplies",
      definition: "Renal Supplies excluding Dialysis.",
    },
    {
      code: "23",
      display: "Diagnostic Dental",
      definition: "Diagnostic Dental.",
    },
    { code: "24", display: "Periodontics", definition: "Periodontics." },
    { code: "25", display: "Restorative", definition: "Restorative." },
    { code: "26", display: "Endodontics", definition: "Endodontics." },
    {
      code: "27",
      display: "Maxillofacial Prosthetics",
      definition: "Maxillofacial Prosthetics.",
    },
    {
      code: "28",
      display: "Adjunctive Dental Services",
      definition: "Adjunctive Dental Services.",
    },
    {
      code: "30",
      display: "Health Benefit Plan Coverage",
      definition: "Health Benefit Plan Coverage.",
    },
    { code: "35", display: "Dental Care", definition: "Dental Care." },
    { code: "36", display: "Dental Crowns", definition: "Dental Crowns." },
    { code: "37", display: "Dental Accident", definition: "Dental Accident." },
    {
      code: "49",
      display: "Hospital Room and Board",
      definition: "Hospital Room and Board.",
    },
    { code: "55", display: "Major Medical", definition: "Major Medical." },
    {
      code: "56",
      display: "Medically Related Transportation",
      definition: "Medically Related Transportation.",
    },
    {
      code: "61",
      display: "In-vitro Fertilization",
      definition: "In-vitro Fertilization.",
    },
    { code: "62", display: "MRI Scan", definition: "MRI Scan." },
    {
      code: "63",
      display: "Donor Procedures",
      definition: "Donor Procedures such as organ harvest.",
    },
    { code: "69", display: "Maternity", definition: "Maternity." },
    { code: "76", display: "Renal Dialysis", definition: "Renal dialysis." },
    {
      code: "F1",
      display: "Medical Coverage",
      definition: "Medical Coverage.",
    },
    { code: "F3", display: "Dental Coverage", definition: "Dental Coverage." },
    {
      code: "F4",
      display: "Hearing Coverage",
      definition: "Hearing Coverage.",
    },
    { code: "F6", display: "Vision Coverage", definition: "Vision Coverage." },
  ],
};
