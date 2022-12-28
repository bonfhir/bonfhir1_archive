/**
 * Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.
 * urn:oid:1.2.36.1.2001.1001.101.104.16592
 */
export const PatientMedicineChangeTypesCodeSystem = {
  resourceType: "CodeSystem",
  id: "list-item-flag",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system urn:oid:1.2.36.1.2001.1001.101.104.16592 defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">01<a name="list-item-flag-01"> </a></td><td>Unchanged</td><td>No change has been made to the status of this medicine item.</td></tr><tr><td style="white-space:nowrap">02<a name="list-item-flag-02"> </a></td><td>Changed</td><td>The medicine item has changed. The change may be described in an extension (not defined yet)</td></tr><tr><td style="white-space:nowrap">03<a name="list-item-flag-03"> </a></td><td>Cancelled</td><td>The prescription for this medicine item was cancelled by an authorized health care provider. The patient may be advised to complete the course of the prescribed medicine. This advice is a clinical decision made based on assessment of the patient\'s clinical condition.</td></tr><tr><td style="white-space:nowrap">04<a name="list-item-flag-04"> </a></td><td>Prescribed</td><td>A new medicine item has been prescribed</td></tr><tr><td style="white-space:nowrap">05<a name="list-item-flag-05"> </a></td><td>Ceased</td><td>Administration of this medication item that the patient is currently taking is stopped or recommended to be stopped (i.e. instructed to be ceased by a health care provider). This cessation is anticipated to be permanent. The Change Description should describe the reason for cessation. Example uses: the medication in question is considered ineffective or has caused serious adverse effects. This value applies both to the cessation of a medication that is prescribed by another healthcare provider or patient self-administration of OTC medicines.</td></tr><tr><td style="white-space:nowrap">06<a name="list-item-flag-06"> </a></td><td>Suspended</td><td>Administration of this medication item that the patient is currently taking is on hold, or instructed or recommended by a health care provider to be temporarily stopped, or subject to clinical review (i.e. the stop may be temporary or permanent depending on the outcome of clinical review), or temporarily suspended as a pre-requisite to certain surgical or diagnostic procedures.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "urn:oid:1.2.36.1.2001.1001.101.104.16592",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.321",
    },
  ],
  version: "4.3.0",
  name: "PatientMedicineChangeTypes",
  title: "Patient Medicine Change Types",
  status: "draft",
  experimental: false,
  description:
    "Example Item Flags for the List Resource. In this case, these are the kind of flags that would be used on a medication list at the end of a consultation.",
  copyright:
    " Copyright © 2012-2013 National E-Health Transition Authority Ltd : This document contains information which is protected by copyright. All Rights Reserved. No part of this work may be reproduced or used in any form or by any means--graphic, electronic, or mechanical, including photocopying,  recording, taping, or information storage and retrieval systems--without the permission of NEHTA. All copies of this  document must include the copyright and other information contained on this page.  Revision 1  Telephone: 1300 901 001 or email: servicedesk@nehta.gov.au  Disclaimer: The National E-Health Transition Authority Ltd (NEHTA) makes the information and other material ('Information') in  this document available in good faith but without any representation or warranty as to its accuracy or completeness.  NEHTA cannot accept any responsibility for the consequences of any use of the Information. As the Information is of a  general nature only, it is up to any person using or relying on the Information to ensure that it is accurate, complete  and suitable for the circumstances of its use.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/list-item-flag",
  content: "complete",
  concept: [
    {
      code: "01",
      display: "Unchanged",
      definition:
        "No change has been made to the status of this medicine item.",
    },
    {
      code: "02",
      display: "Changed",
      definition:
        "The medicine item has changed. The change may be described in an extension (not defined yet)",
    },
    {
      code: "03",
      display: "Cancelled",
      definition:
        "The prescription for this medicine item was cancelled by an authorized health care provider. The patient may be advised to complete the course of the prescribed medicine. This advice is a clinical decision made based on assessment of the patient's clinical condition.",
    },
    {
      code: "04",
      display: "Prescribed",
      definition: "A new medicine item has been prescribed",
    },
    {
      code: "05",
      display: "Ceased",
      definition:
        "Administration of this medication item that the patient is currently taking is stopped or recommended to be stopped (i.e. instructed to be ceased by a health care provider). This cessation is anticipated to be permanent. The Change Description should describe the reason for cessation. Example uses: the medication in question is considered ineffective or has caused serious adverse effects. This value applies both to the cessation of a medication that is prescribed by another healthcare provider or patient self-administration of OTC medicines.",
    },
    {
      code: "06",
      display: "Suspended",
      definition:
        "Administration of this medication item that the patient is currently taking is on hold, or instructed or recommended by a health care provider to be temporarily stopped, or subject to clinical review (i.e. the stop may be temporary or permanent depending on the outcome of clinical review), or temporarily suspended as a pre-requisite to certain surgical or diagnostic procedures.",
    },
  ],
};
