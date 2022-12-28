/**
 * This code system supports describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid.
 * http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason
 */
export const ImmunizationEvaluationDoseStatusReasonCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "immunization-evaluation-dose-status-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">advstorage<a name="immunization-evaluation-dose-status-reason-advstorage"> </a></td><td>Adverse storage condition</td><td>The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.</td></tr><tr><td style="white-space:nowrap">coldchbrk<a name="immunization-evaluation-dose-status-reason-coldchbrk"> </a></td><td>Cold chain break</td><td>The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.</td></tr><tr><td style="white-space:nowrap">explot<a name="immunization-evaluation-dose-status-reason-explot"> </a></td><td>Expired lot</td><td>The product was administered after the expiration date associated with lot of vaccine.</td></tr><tr><td style="white-space:nowrap">outsidesched<a name="immunization-evaluation-dose-status-reason-outsidesched"> </a></td><td>Administered outside recommended schedule</td><td>The product was administered at a time inconsistent with the documented schedule.</td></tr><tr><td style="white-space:nowrap">prodrecall<a name="immunization-evaluation-dose-status-reason-prodrecall"> </a></td><td>Product recall</td><td>The product administered has been recalled by the manufacturer.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pher",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1103",
    },
  ],
  version: "4.3.0",
  name: "ImmunizationEvaluationDoseStatusReasonCodes",
  title: "Immunization Evaluation Dose Status Reason codes",
  status: "draft",
  experimental: false,
  description:
    "This code system supports describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "advstorage",
      display: "Adverse storage condition",
      definition:
        "The product was stored in a manner inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.",
    },
    {
      code: "coldchbrk",
      display: "Cold chain break",
      definition:
        "The product was stored at a temperature inconsistent with manufacturer guidelines potentially reducing the effectiveness of the product.",
    },
    {
      code: "explot",
      display: "Expired lot",
      definition:
        "The product was administered after the expiration date associated with lot of vaccine.",
    },
    {
      code: "outsidesched",
      display: "Administered outside recommended schedule",
      definition:
        "The product was administered at a time inconsistent with the documented schedule.",
    },
    {
      code: "prodrecall",
      display: "Product recall",
      definition:
        "The product administered has been recalled by the manufacturer.",
    },
  ],
};
