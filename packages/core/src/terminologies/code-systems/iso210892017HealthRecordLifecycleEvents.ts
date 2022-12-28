/**
 * Attached is vocabulary for the 27 record lifecycle events, as per ISO TS 21089-2017, Health Informatics - Trusted End-to-End Information Flows, Section 3, Terms and Definitions (2017, at ISO Central Secretariat, passed ballot and ready for publication).  This will also be included in the FHIR EHR Record Lifecycle Event Implementation Guide, balloted and (to be) published with FHIR STU-3.
 * http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle
 */
export const ISO210892017HealthRecordLifecycleEventsCodeSystem = {
  resourceType: "CodeSystem",
  id: "iso-21089-lifecycle",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">access<a name="iso-21089-lifecycle-access"> </a></td><td>Access/View Record Lifecycle Event</td><td>Occurs when an agent causes the system to obtain and open a record entry for inspection or review.</td></tr><tr><td style="white-space:nowrap">hold<a name="iso-21089-lifecycle-hold"> </a></td><td>Add Legal Hold Record Lifecycle Event</td><td>Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.</td></tr><tr><td style="white-space:nowrap">amend<a name="iso-21089-lifecycle-amend"> </a></td><td>Amend (Update) Record Lifecycle Event</td><td>Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).</td></tr><tr><td style="white-space:nowrap">archive<a name="iso-21089-lifecycle-archive"> </a></td><td>Archive Record Lifecycle Event</td><td>Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.</td></tr><tr><td style="white-space:nowrap">attest<a name="iso-21089-lifecycle-attest"> </a></td><td>Attest Record Lifecycle Event</td><td>Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.</td></tr><tr><td style="white-space:nowrap">decrypt<a name="iso-21089-lifecycle-decrypt"> </a></td><td>Decrypt Record Lifecycle Event</td><td>Occurs when an agent causes the system to decode record entry content from a cipher.</td></tr><tr><td style="white-space:nowrap">deidentify<a name="iso-21089-lifecycle-deidentify"> </a></td><td>De-Identify (Anononymize) Record Lifecycle Event</td><td>Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.</td></tr><tr><td style="white-space:nowrap">deprecate<a name="iso-21089-lifecycle-deprecate"> </a></td><td>Deprecate Record Lifecycle Event</td><td>Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.</td></tr><tr><td style="white-space:nowrap">destroy<a name="iso-21089-lifecycle-destroy"> </a></td><td>Destroy/Delete Record Lifecycle Event</td><td>Occurs when an agent causes the system to permanently erase record entry content from the system.</td></tr><tr><td style="white-space:nowrap">disclose<a name="iso-21089-lifecycle-disclose"> </a></td><td>Disclose Record Lifecycle Event</td><td>Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.</td></tr><tr><td style="white-space:nowrap">encrypt<a name="iso-21089-lifecycle-encrypt"> </a></td><td>Encrypt Record Lifecycle Event</td><td>Occurs when an agent causes the system to encode record entry content in a cipher.</td></tr><tr><td style="white-space:nowrap">extract<a name="iso-21089-lifecycle-extract"> </a></td><td>Extract Record Lifecycle Event</td><td>Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.</td></tr><tr><td style="white-space:nowrap">link<a name="iso-21089-lifecycle-link"> </a></td><td>Link Record Lifecycle Event</td><td>Occurs when an agent causes the system to connect related record entries.</td></tr><tr><td style="white-space:nowrap">merge<a name="iso-21089-lifecycle-merge"> </a></td><td>Merge Record Lifecycle Event</td><td>Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.</td></tr><tr><td style="white-space:nowrap">originate<a name="iso-21089-lifecycle-originate"> </a></td><td>Originate/Retain Record Lifecycle Event</td><td>Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.</td></tr><tr><td style="white-space:nowrap">pseudonymize<a name="iso-21089-lifecycle-pseudonymize"> </a></td><td>Pseudonymize Record Lifecycle Event</td><td>Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.</td></tr><tr><td style="white-space:nowrap">reactivate<a name="iso-21089-lifecycle-reactivate"> </a></td><td>Re-activate Record Lifecycle Event</td><td>Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.</td></tr><tr><td style="white-space:nowrap">receive<a name="iso-21089-lifecycle-receive"> </a></td><td>Receive/Retain Record Lifecycle Event</td><td>Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.</td></tr><tr><td style="white-space:nowrap">reidentify<a name="iso-21089-lifecycle-reidentify"> </a></td><td>Re-identify Record Lifecycle Event</td><td>Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.</td></tr><tr><td style="white-space:nowrap">unhold<a name="iso-21089-lifecycle-unhold"> </a></td><td>Remove Legal Hold Record Lifecycle Event</td><td>Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.</td></tr><tr><td style="white-space:nowrap">report<a name="iso-21089-lifecycle-report"> </a></td><td>Report (Output) Record Lifecycle Event</td><td>Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.</td></tr><tr><td style="white-space:nowrap">restore<a name="iso-21089-lifecycle-restore"> </a></td><td>Restore Record Lifecycle Event</td><td>Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.</td></tr><tr><td style="white-space:nowrap">transform<a name="iso-21089-lifecycle-transform"> </a></td><td>Transform/Translate Record Lifecycle Event</td><td>Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.</td></tr><tr><td style="white-space:nowrap">transmit<a name="iso-21089-lifecycle-transmit"> </a></td><td>Transmit Record Lifecycle Event</td><td>Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.</td></tr><tr><td style="white-space:nowrap">unlink<a name="iso-21089-lifecycle-unlink"> </a></td><td>Unlink Record Lifecycle Event</td><td>Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.</td></tr><tr><td style="white-space:nowrap">unmerge<a name="iso-21089-lifecycle-unmerge"> </a></td><td>Unmerge Record Lifecycle Event</td><td>Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.</td></tr><tr><td style="white-space:nowrap">verify<a name="iso-21089-lifecycle-verify"> </a></td><td>Verify Record Lifecycle Event</td><td>Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.</td></tr></table></div>',
  },
  url: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle",
  name: "ISO 21089-2017 Health Record Lifecycle Events",
  status: "active",
  experimental: false,
  description:
    "Attached is vocabulary for the 27 record lifecycle events, as per ISO TS 21089-2017, Health Informatics - Trusted End-to-End Information Flows, Section 3, Terms and Definitions (2017, at ISO Central Secretariat, passed ballot and ready for publication).  This will also be included in the FHIR EHR Record Lifecycle Event Implementation Guide, balloted and (to be) published with FHIR STU-3.",
  copyright:
    "These codes are excerpted from ISO Standard, TS 21089-2017 - Health Informatics - Trusted End-to-End Information Flows, Copyright by ISO International. Copies of this standard are available through the ISO Web Site at www.iso.org.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "access",
      display: "Access/View Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to obtain and open a record entry for inspection or review.",
    },
    {
      code: "hold",
      display: "Add Legal Hold Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.",
    },
    {
      code: "amend",
      display: "Amend (Update) Record Lifecycle Event",
      definition:
        "Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).",
    },
    {
      code: "archive",
      display: "Archive Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.",
    },
    {
      code: "attest",
      display: "Attest Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.",
    },
    {
      code: "decrypt",
      display: "Decrypt Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to decode record entry content from a cipher.",
    },
    {
      code: "deidentify",
      display: "De-Identify (Anononymize) Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.",
    },
    {
      code: "deprecate",
      display: "Deprecate Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.",
    },
    {
      code: "destroy",
      display: "Destroy/Delete Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to permanently erase record entry content from the system.",
    },
    {
      code: "disclose",
      display: "Disclose Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.",
    },
    {
      code: "encrypt",
      display: "Encrypt Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to encode record entry content in a cipher.",
    },
    {
      code: "extract",
      display: "Extract Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.",
    },
    {
      code: "link",
      display: "Link Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to connect related record entries.",
    },
    {
      code: "merge",
      display: "Merge Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.",
    },
    {
      code: "originate",
      display: "Originate/Retain Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.",
    },
    {
      code: "pseudonymize",
      display: "Pseudonymize Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.",
    },
    {
      code: "reactivate",
      display: "Re-activate Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.",
    },
    {
      code: "receive",
      display: "Receive/Retain Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.",
    },
    {
      code: "reidentify",
      display: "Re-identify Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.",
    },
    {
      code: "unhold",
      display: "Remove Legal Hold Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.",
    },
    {
      code: "report",
      display: "Report (Output) Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.",
    },
    {
      code: "restore",
      display: "Restore Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.",
    },
    {
      code: "transform",
      display: "Transform/Translate Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.",
    },
    {
      code: "transmit",
      display: "Transmit Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.",
    },
    {
      code: "unlink",
      display: "Unlink Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.",
    },
    {
      code: "unmerge",
      display: "Unmerge Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.",
    },
    {
      code: "verify",
      display: "Verify Record Lifecycle Event",
      definition:
        "Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.",
    },
  ],
};
