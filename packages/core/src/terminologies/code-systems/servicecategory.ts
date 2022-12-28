/**
 * This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 * http://terminology.hl7.org/CodeSystem/service-category
 */
export const ServiceCategoryCodeSystem = {
  resourceType: "CodeSystem",
  id: "service-category",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/service-category defines some example codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">1<a name="service-category-1"> </a></td><td>Adoption</td><td>Adoption</td></tr><tr><td style="white-space:nowrap">2<a name="service-category-2"> </a></td><td>Aged Care</td><td>Aged Care</td></tr><tr><td style="white-space:nowrap">34<a name="service-category-34"> </a></td><td>Allied Health</td><td>Allied Health</td></tr><tr><td style="white-space:nowrap">3<a name="service-category-3"> </a></td><td>Alternative/Complementary Therapies</td><td>Alternative &amp; Complementary Therapies</td></tr><tr><td style="white-space:nowrap">4<a name="service-category-4"> </a></td><td>Child Care /Kindergarten</td><td>Child Care and/or Kindergarten</td></tr><tr><td style="white-space:nowrap">5<a name="service-category-5"> </a></td><td>Child Development</td><td>Child Development</td></tr><tr><td style="white-space:nowrap">6<a name="service-category-6"> </a></td><td>Child Protection &amp; Family Services</td><td>Child Protection &amp; Family Services</td></tr><tr><td style="white-space:nowrap">7<a name="service-category-7"> </a></td><td>Community Health Care</td><td>Community Health Care</td></tr><tr><td style="white-space:nowrap">8<a name="service-category-8"> </a></td><td>Counselling</td><td>Counselling</td></tr><tr><td style="white-space:nowrap">36<a name="service-category-36"> </a></td><td>Crisis Line (GPAH use only)</td><td>Crisis Line (GPAH use only)</td></tr><tr><td style="white-space:nowrap">9<a name="service-category-9"> </a></td><td>Death Services</td><td>Death Services</td></tr><tr><td style="white-space:nowrap">10<a name="service-category-10"> </a></td><td>Dental</td><td>Dental</td></tr><tr><td style="white-space:nowrap">11<a name="service-category-11"> </a></td><td>Disability Support</td><td>Disability Support</td></tr><tr><td style="white-space:nowrap">12<a name="service-category-12"> </a></td><td>Drug/Alcohol</td><td>Drug/Alcohol</td></tr><tr><td style="white-space:nowrap">13<a name="service-category-13"> </a></td><td>Education &amp; Learning</td><td>Education &amp; Learning</td></tr><tr><td style="white-space:nowrap">14<a name="service-category-14"> </a></td><td>Emergency Department</td><td>Emergency Department</td></tr><tr><td style="white-space:nowrap">15<a name="service-category-15"> </a></td><td>Employment</td><td>Employment</td></tr><tr><td style="white-space:nowrap">16<a name="service-category-16"> </a></td><td>Financial &amp; Material Aid</td><td>Financial &amp; Material aid</td></tr><tr><td style="white-space:nowrap">17<a name="service-category-17"> </a></td><td>General Practice</td><td>General Practice/GP (doctor)</td></tr><tr><td style="white-space:nowrap">35<a name="service-category-35"> </a></td><td>Hospital</td><td>Hospital</td></tr><tr><td style="white-space:nowrap">18<a name="service-category-18"> </a></td><td>Housing/Homelessness</td><td>Housing/Homelessness</td></tr><tr><td style="white-space:nowrap">19<a name="service-category-19"> </a></td><td>Interpreting</td><td>Interpreting</td></tr><tr><td style="white-space:nowrap">20<a name="service-category-20"> </a></td><td>Justice</td><td>Justice</td></tr><tr><td style="white-space:nowrap">21<a name="service-category-21"> </a></td><td>Legal</td><td>Legal</td></tr><tr><td style="white-space:nowrap">22<a name="service-category-22"> </a></td><td>Mental Health</td><td>Mental Health</td></tr><tr><td style="white-space:nowrap">38<a name="service-category-38"> </a></td><td>NDIA</td><td>NDIA</td></tr><tr><td style="white-space:nowrap">23<a name="service-category-23"> </a></td><td>Physical Activity &amp; Recreation</td><td>Physical Activity &amp; Recreation</td></tr><tr><td style="white-space:nowrap">24<a name="service-category-24"> </a></td><td>Regulation</td><td>Regulation</td></tr><tr><td style="white-space:nowrap">25<a name="service-category-25"> </a></td><td>Respite/Carer Support</td><td>Respite/Carer Support</td></tr><tr><td style="white-space:nowrap">26<a name="service-category-26"> </a></td><td>Specialist Clinical Pathology</td><td>Specialist Clinical Pathology - requires referral</td></tr><tr><td style="white-space:nowrap">27<a name="service-category-27"> </a></td><td>Specialist Medical</td><td>Specialist Medical - requires referral</td></tr><tr><td style="white-space:nowrap">28<a name="service-category-28"> </a></td><td>Specialist Obstetrics &amp; Gynecology</td><td>Specialist Obstetrics &amp; Gynecology - requires referral</td></tr><tr><td style="white-space:nowrap">29<a name="service-category-29"> </a></td><td>Specialist Paediatric</td><td>Specialist Paediatric - requires referral</td></tr><tr><td style="white-space:nowrap">30<a name="service-category-30"> </a></td><td>Specialist Radiology/Imaging</td><td>Specialist Radiology/Imaging - requires referral</td></tr><tr><td style="white-space:nowrap">31<a name="service-category-31"> </a></td><td>Specialist Surgical</td><td>Specialist Surgical - requires referral</td></tr><tr><td style="white-space:nowrap">32<a name="service-category-32"> </a></td><td>Support Group/s</td><td>Support group/s</td></tr><tr><td style="white-space:nowrap">37<a name="service-category-37"> </a></td><td>Test Message (HSD admin)</td><td>Test Message (HSD admin use only)</td></tr><tr><td style="white-space:nowrap">33<a name="service-category-33"> </a></td><td>Transport</td><td>Transport</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/service-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1144",
    },
  ],
  version: "4.3.0",
  name: "ServiceCategory",
  status: "draft",
  experimental: true,
  description:
    "This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.",
  caseSensitive: true,
  content: "example",
  concept: [
    { code: "1", display: "Adoption", definition: "Adoption" },
    { code: "2", display: "Aged Care", definition: "Aged Care" },
    { code: "34", display: "Allied Health", definition: "Allied Health" },
    {
      code: "3",
      display: "Alternative/Complementary Therapies",
      definition: "Alternative & Complementary Therapies",
    },
    {
      code: "4",
      display: "Child Care /Kindergarten",
      definition: "Child Care and/or Kindergarten",
    },
    {
      code: "5",
      display: "Child Development",
      definition: "Child Development",
    },
    {
      code: "6",
      display: "Child Protection & Family Services",
      definition: "Child Protection & Family Services",
    },
    {
      code: "7",
      display: "Community Health Care",
      definition: "Community Health Care",
    },
    { code: "8", display: "Counselling", definition: "Counselling" },
    {
      code: "36",
      display: "Crisis Line (GPAH use only)",
      definition: "Crisis Line (GPAH use only)",
    },
    { code: "9", display: "Death Services", definition: "Death Services" },
    { code: "10", display: "Dental", definition: "Dental" },
    {
      code: "11",
      display: "Disability Support",
      definition: "Disability Support",
    },
    { code: "12", display: "Drug/Alcohol", definition: "Drug/Alcohol" },
    {
      code: "13",
      display: "Education & Learning",
      definition: "Education & Learning",
    },
    {
      code: "14",
      display: "Emergency Department",
      definition: "Emergency Department",
    },
    { code: "15", display: "Employment", definition: "Employment" },
    {
      code: "16",
      display: "Financial & Material Aid",
      definition: "Financial & Material aid",
    },
    {
      code: "17",
      display: "General Practice",
      definition: "General Practice/GP (doctor)",
    },
    { code: "35", display: "Hospital", definition: "Hospital" },
    {
      code: "18",
      display: "Housing/Homelessness",
      definition: "Housing/Homelessness",
    },
    { code: "19", display: "Interpreting", definition: "Interpreting" },
    { code: "20", display: "Justice", definition: "Justice" },
    { code: "21", display: "Legal", definition: "Legal" },
    { code: "22", display: "Mental Health", definition: "Mental Health" },
    { code: "38", display: "NDIA", definition: "NDIA" },
    {
      code: "23",
      display: "Physical Activity & Recreation",
      definition: "Physical Activity & Recreation",
    },
    { code: "24", display: "Regulation", definition: "Regulation" },
    {
      code: "25",
      display: "Respite/Carer Support",
      definition: "Respite/Carer Support",
    },
    {
      code: "26",
      display: "Specialist Clinical Pathology",
      definition: "Specialist Clinical Pathology - requires referral",
    },
    {
      code: "27",
      display: "Specialist Medical",
      definition: "Specialist Medical - requires referral",
    },
    {
      code: "28",
      display: "Specialist Obstetrics & Gynecology",
      definition: "Specialist Obstetrics & Gynecology - requires referral",
    },
    {
      code: "29",
      display: "Specialist Paediatric",
      definition: "Specialist Paediatric - requires referral",
    },
    {
      code: "30",
      display: "Specialist Radiology/Imaging",
      definition: "Specialist Radiology/Imaging - requires referral",
    },
    {
      code: "31",
      display: "Specialist Surgical",
      definition: "Specialist Surgical - requires referral",
    },
    { code: "32", display: "Support Group/s", definition: "Support group/s" },
    {
      code: "37",
      display: "Test Message (HSD admin)",
      definition: "Test Message (HSD admin use only)",
    },
    { code: "33", display: "Transport", definition: "Transport" },
  ],
};
