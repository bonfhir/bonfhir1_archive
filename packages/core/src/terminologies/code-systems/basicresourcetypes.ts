/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 * http://terminology.hl7.org/CodeSystem/basic-resource-type
 */
export const BasicResourceTypesCodeSystem = {
  resourceType: "CodeSystem",
  id: "basic-resource-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/basic-resource-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">consent<a name="basic-resource-type-consent"> </a></td><td>Consent</td><td>An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.</td></tr><tr><td style="white-space:nowrap">referral<a name="basic-resource-type-referral"> </a></td><td>Referral</td><td>A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.</td></tr><tr><td style="white-space:nowrap">advevent<a name="basic-resource-type-advevent"> </a></td><td>Adverse Event</td><td>An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).</td></tr><tr><td style="white-space:nowrap">aptmtreq<a name="basic-resource-type-aptmtreq"> </a></td><td>Appointment Request</td><td>A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints</td></tr><tr><td style="white-space:nowrap">transfer<a name="basic-resource-type-transfer"> </a></td><td>Transfer</td><td>The transition of a patient or set of material from one location to another</td></tr><tr><td style="white-space:nowrap">diet<a name="basic-resource-type-diet"> </a></td><td>Diet</td><td>The specification of a set of food and/or other nutritional material to be delivered to a patient.</td></tr><tr><td style="white-space:nowrap">adminact<a name="basic-resource-type-adminact"> </a></td><td>Administrative Activity</td><td>An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.</td></tr><tr><td style="white-space:nowrap">exposure<a name="basic-resource-type-exposure"> </a></td><td>Exposure</td><td>Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.</td></tr><tr><td style="white-space:nowrap">investigation<a name="basic-resource-type-investigation"> </a></td><td>Investigation</td><td>A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event</td></tr><tr><td style="white-space:nowrap">account<a name="basic-resource-type-account"> </a></td><td>Account</td><td>A financial instrument used to track costs, charges or other amounts.</td></tr><tr><td style="white-space:nowrap">invoice<a name="basic-resource-type-invoice"> </a></td><td>Invoice</td><td>A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.</td></tr><tr><td style="white-space:nowrap">adjudicat<a name="basic-resource-type-adjudicat"> </a></td><td>Invoice Adjudication</td><td>The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.</td></tr><tr><td style="white-space:nowrap">predetreq<a name="basic-resource-type-predetreq"> </a></td><td>Pre-determination Request</td><td>A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services</td></tr><tr><td style="white-space:nowrap">predetermine<a name="basic-resource-type-predetermine"> </a></td><td>Predetermination</td><td>An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services</td></tr><tr><td style="white-space:nowrap">study<a name="basic-resource-type-study"> </a></td><td>Study</td><td>An investigation to determine information about a particular therapy or product</td></tr><tr><td style="white-space:nowrap">protocol<a name="basic-resource-type-protocol"> </a></td><td>Protocol</td><td>A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1072",
    },
  ],
  version: "4.3.0",
  name: "BasicResourceTypes",
  title: "Basic Resource Types",
  status: "draft",
  experimental: false,
  description:
    "This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "consent",
      display: "Consent",
      definition:
        "An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.",
    },
    {
      code: "referral",
      display: "Referral",
      definition:
        "A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.",
    },
    {
      code: "advevent",
      display: "Adverse Event",
      definition:
        "An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).",
    },
    {
      code: "aptmtreq",
      display: "Appointment Request",
      definition:
        "A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints",
    },
    {
      code: "transfer",
      display: "Transfer",
      definition:
        "The transition of a patient or set of material from one location to another",
    },
    {
      code: "diet",
      display: "Diet",
      definition:
        "The specification of a set of food and/or other nutritional material to be delivered to a patient.",
    },
    {
      code: "adminact",
      display: "Administrative Activity",
      definition:
        "An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.",
    },
    {
      code: "exposure",
      display: "Exposure",
      definition:
        "Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.",
    },
    {
      code: "investigation",
      display: "Investigation",
      definition:
        "A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event",
    },
    {
      code: "account",
      display: "Account",
      definition:
        "A financial instrument used to track costs, charges or other amounts.",
    },
    {
      code: "invoice",
      display: "Invoice",
      definition:
        "A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.",
    },
    {
      code: "adjudicat",
      display: "Invoice Adjudication",
      definition:
        "The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.",
    },
    {
      code: "predetreq",
      display: "Pre-determination Request",
      definition:
        "A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services",
    },
    {
      code: "predetermine",
      display: "Predetermination",
      definition:
        "An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services",
    },
    {
      code: "study",
      display: "Study",
      definition:
        "An investigation to determine information about a particular therapy or product",
    },
    {
      code: "protocol",
      display: "Protocol",
      definition:
        "A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.",
    },
  ],
};
