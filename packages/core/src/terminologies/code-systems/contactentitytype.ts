export const ContactEntityType = {
  resourceType: "CodeSystem",
  id: "contactentity-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/contactentity-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">BILL<a name="contactentity-type-BILL"> </a></td><td>Billing</td><td>Contact details for information regarding to billing/general finance enquiries.</td></tr><tr><td style="white-space:nowrap">ADMIN<a name="contactentity-type-ADMIN"> </a></td><td>Administrative</td><td>Contact details for administrative enquiries.</td></tr><tr><td style="white-space:nowrap">HR<a name="contactentity-type-HR"> </a></td><td>Human Resource</td><td>Contact details for issues related to Human Resources, such as staff matters, OH&amp;S etc.</td></tr><tr><td style="white-space:nowrap">PAYOR<a name="contactentity-type-PAYOR"> </a></td><td>Payor</td><td>Contact details for dealing with issues related to insurance claims/adjudication/payment.</td></tr><tr><td style="white-space:nowrap">PATINF<a name="contactentity-type-PATINF"> </a></td><td>Patient</td><td>Generic information contact for patients.</td></tr><tr><td style="white-space:nowrap">PRESS<a name="contactentity-type-PRESS"> </a></td><td>Press</td><td>Dedicated contact point for matters relating to press enquiries.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/contactentity-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1129",
    },
  ],
  version: "4.3.0",
  name: "ContactEntityType",
  status: "draft",
  experimental: false,
  description:
    "This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "BILL",
      display: "Billing",
      definition:
        "Contact details for information regarding to billing/general finance enquiries.",
    },
    {
      code: "ADMIN",
      display: "Administrative",
      definition: "Contact details for administrative enquiries.",
    },
    {
      code: "HR",
      display: "Human Resource",
      definition:
        "Contact details for issues related to Human Resources, such as staff matters, OH&S etc.",
    },
    {
      code: "PAYOR",
      display: "Payor",
      definition:
        "Contact details for dealing with issues related to insurance claims/adjudication/payment.",
    },
    {
      code: "PATINF",
      display: "Patient",
      definition: "Generic information contact for patients.",
    },
    {
      code: "PRESS",
      display: "Press",
      definition:
        "Dedicated contact point for matters relating to press enquiries.",
    },
  ],
};
