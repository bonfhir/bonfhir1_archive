/**
 *
 * http://terminology.hl7.org/CodeSystem/medicationdispense-status-reason
 */
export const MedicationDispenseStatusReasonCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicationdispense-status-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medicationdispense-status-reason defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">frr01<a name="medicationdispense-status-reason-frr01"> </a></td><td>Order Stopped</td><td>The order has been stopped by the prescriber but this fact has not necessarily captured electronically. Example: A verbal stop, a fax, etc.</td></tr><tr><td style="white-space:nowrap">frr02<a name="medicationdispense-status-reason-frr02"> </a></td><td>Stale-dated Order</td><td>Order has not been fulfilled within a reasonable amount of time, and might not be current.</td></tr><tr><td style="white-space:nowrap">frr03<a name="medicationdispense-status-reason-frr03"> </a></td><td>Incomplete data</td><td>Data needed to safely act on the order which was expected to become available independent of the order is not yet available. Example: Lab results, diagnostic imaging, etc.</td></tr><tr><td style="white-space:nowrap">frr04<a name="medicationdispense-status-reason-frr04"> </a></td><td>Product unavailable</td><td>Product not available or manufactured. Cannot supply.</td></tr><tr><td style="white-space:nowrap">frr05<a name="medicationdispense-status-reason-frr05"> </a></td><td>Ethical/religious</td><td>The dispenser has ethical, religious or moral objections to fulfilling the order/dispensing the product.</td></tr><tr><td style="white-space:nowrap">frr06<a name="medicationdispense-status-reason-frr06"> </a></td><td>Unable to provide care</td><td>Fulfiller not able to provide appropriate care associated with fulfilling the order. Example: Therapy requires ongoing monitoring by fulfiller and fulfiller will be ending practice, leaving town, unable to schedule necessary time, etc.</td></tr><tr><td style="white-space:nowrap">altchoice<a name="medicationdispense-status-reason-altchoice"> </a></td><td>Try another treatment first</td><td>This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.</td></tr><tr><td style="white-space:nowrap">clarif<a name="medicationdispense-status-reason-clarif"> </a></td><td>Prescription/Request requires clarification</td><td>Clarification is required before the order can be acted upon.</td></tr><tr><td style="white-space:nowrap">drughigh<a name="medicationdispense-status-reason-drughigh"> </a></td><td>Drug level too high</td><td>The current level of the medication in the patient\'s system is too high. The medication is suspended to allow the level to subside to a safer level.</td></tr><tr><td style="white-space:nowrap">hospadm<a name="medicationdispense-status-reason-hospadm"> </a></td><td>Admission to hospital</td><td>The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.</td></tr><tr><td style="white-space:nowrap">labint<a name="medicationdispense-status-reason-labint"> </a></td><td>Lab interference issues</td><td>The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.</td></tr><tr><td style="white-space:nowrap">non-avail<a name="medicationdispense-status-reason-non-avail"> </a></td><td>Patient not available</td><td>Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.</td></tr><tr><td style="white-space:nowrap">preg<a name="medicationdispense-status-reason-preg"> </a></td><td>Patient is pregnant or breastfeeding</td><td>The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.</td></tr><tr><td style="white-space:nowrap">saig<a name="medicationdispense-status-reason-saig"> </a></td><td>Allergy</td><td>The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.</td></tr><tr><td style="white-space:nowrap">sddi<a name="medicationdispense-status-reason-sddi"> </a></td><td>Drug interacts with another drug</td><td>The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.</td></tr><tr><td style="white-space:nowrap">sdupther<a name="medicationdispense-status-reason-sdupther"> </a></td><td>Duplicate therapy</td><td>Another short-term co-occurring therapy fulfills the same purpose as this therapy. This therapy will be resumed when the co-occuring therapy is complete.</td></tr><tr><td style="white-space:nowrap">sintol<a name="medicationdispense-status-reason-sintol"> </a></td><td>Suspected intolerance</td><td>The patient is believed to have an intolerance to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.</td></tr><tr><td style="white-space:nowrap">surg<a name="medicationdispense-status-reason-surg"> </a></td><td>Patient scheduled for surgery</td><td>The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.</td></tr><tr><td style="white-space:nowrap">washout<a name="medicationdispense-status-reason-washout"> </a></td><td>Washout</td><td>The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.</td></tr><tr><td style="white-space:nowrap">outofstock<a name="medicationdispense-status-reason-outofstock"> </a></td><td>Drug not available - out of stock</td><td>Drug out of stock. Cannot supply.</td></tr><tr><td style="white-space:nowrap">offmarket<a name="medicationdispense-status-reason-offmarket"> </a></td><td>Drug not available - off market</td><td>Drug no longer marketed Cannot supply.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medicationdispense-status-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1317",
    },
  ],
  version: "4.3.0",
  name: "Medication Dispense Status Reason Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicationdispense-status-reason",
  content: "complete",
  concept: [
    {
      code: "frr01",
      display: "Order Stopped",
      definition:
        "The order has been stopped by the prescriber but this fact has not necessarily captured electronically. Example: A verbal stop, a fax, etc.",
    },
    {
      code: "frr02",
      display: "Stale-dated Order",
      definition:
        "Order has not been fulfilled within a reasonable amount of time, and might not be current.",
    },
    {
      code: "frr03",
      display: "Incomplete data",
      definition:
        "Data needed to safely act on the order which was expected to become available independent of the order is not yet available. Example: Lab results, diagnostic imaging, etc.",
    },
    {
      code: "frr04",
      display: "Product unavailable",
      definition: "Product not available or manufactured. Cannot supply.",
    },
    {
      code: "frr05",
      display: "Ethical/religious",
      definition:
        "The dispenser has ethical, religious or moral objections to fulfilling the order/dispensing the product.",
    },
    {
      code: "frr06",
      display: "Unable to provide care",
      definition:
        "Fulfiller not able to provide appropriate care associated with fulfilling the order. Example: Therapy requires ongoing monitoring by fulfiller and fulfiller will be ending practice, leaving town, unable to schedule necessary time, etc.",
    },
    {
      code: "altchoice",
      display: "Try another treatment first",
      definition:
        "This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.",
    },
    {
      code: "clarif",
      display: "Prescription/Request requires clarification",
      definition:
        "Clarification is required before the order can be acted upon.",
    },
    {
      code: "drughigh",
      display: "Drug level too high",
      definition:
        "The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.",
    },
    {
      code: "hospadm",
      display: "Admission to hospital",
      definition:
        "The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.",
    },
    {
      code: "labint",
      display: "Lab interference issues",
      definition:
        "The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.",
    },
    {
      code: "non-avail",
      display: "Patient not available",
      definition:
        "Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.",
    },
    {
      code: "preg",
      display: "Patient is pregnant or breastfeeding",
      definition:
        "The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.",
    },
    {
      code: "saig",
      display: "Allergy",
      definition:
        "The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.",
    },
    {
      code: "sddi",
      display: "Drug interacts with another drug",
      definition:
        "The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.",
    },
    {
      code: "sdupther",
      display: "Duplicate therapy",
      definition:
        "Another short-term co-occurring therapy fulfills the same purpose as this therapy. This therapy will be resumed when the co-occuring therapy is complete.",
    },
    {
      code: "sintol",
      display: "Suspected intolerance",
      definition:
        "The patient is believed to have an intolerance to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.",
    },
    {
      code: "surg",
      display: "Patient scheduled for surgery",
      definition:
        "The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.",
    },
    {
      code: "washout",
      display: "Washout",
      definition:
        "The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.",
    },
    {
      code: "outofstock",
      display: "Drug not available - out of stock",
      definition: "Drug out of stock. Cannot supply.",
    },
    {
      code: "offmarket",
      display: "Drug not available - off market",
      definition: "Drug no longer marketed Cannot supply.",
    },
  ],
};
