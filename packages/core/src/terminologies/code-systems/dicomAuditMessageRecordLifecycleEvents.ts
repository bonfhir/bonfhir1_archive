/**
 * Attached is vocabulary for the record lifecycle events, as per DICOM Audit Message,
 * http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle
 */
export const DICOMAuditMessageRecordLifecycleEventsCodeSystem = {
  resourceType: "CodeSystem",
  id: "dicom-audit-lifecycle",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">1<a name="dicom-audit-lifecycle-1"> </a></td><td>Origination / Creation</td></tr><tr><td style="white-space:nowrap">2<a name="dicom-audit-lifecycle-2"> </a></td><td>Import / Copy</td></tr><tr><td style="white-space:nowrap">3<a name="dicom-audit-lifecycle-3"> </a></td><td>Amendment</td></tr><tr><td style="white-space:nowrap">4<a name="dicom-audit-lifecycle-4"> </a></td><td>Verification</td></tr><tr><td style="white-space:nowrap">5<a name="dicom-audit-lifecycle-5"> </a></td><td>Translation</td></tr><tr><td style="white-space:nowrap">6<a name="dicom-audit-lifecycle-6"> </a></td><td>Access / Use</td></tr><tr><td style="white-space:nowrap">7<a name="dicom-audit-lifecycle-7"> </a></td><td>De-identification</td></tr><tr><td style="white-space:nowrap">8<a name="dicom-audit-lifecycle-8"> </a></td><td>Aggregation / summarization / derivation</td></tr><tr><td style="white-space:nowrap">9<a name="dicom-audit-lifecycle-9"> </a></td><td>Report</td></tr><tr><td style="white-space:nowrap">10<a name="dicom-audit-lifecycle-10"> </a></td><td>Export</td></tr><tr><td style="white-space:nowrap">11<a name="dicom-audit-lifecycle-11"> </a></td><td>Disclosure</td></tr><tr><td style="white-space:nowrap">12<a name="dicom-audit-lifecycle-12"> </a></td><td>Receipt of disclosure</td></tr><tr><td style="white-space:nowrap">13<a name="dicom-audit-lifecycle-13"> </a></td><td>Archiving</td></tr><tr><td style="white-space:nowrap">14<a name="dicom-audit-lifecycle-14"> </a></td><td>Logical deletion</td></tr><tr><td style="white-space:nowrap">15<a name="dicom-audit-lifecycle-15"> </a></td><td>Permanent erasure / Physical destruction</td></tr></table></div>',
  },
  url: "http://terminology.hl7.org/CodeSystem/dicom-audit-lifecycle",
  version: "20100826",
  name: "DICOM Audit Message Record Lifecycle Events",
  status: "active",
  experimental: false,
  description:
    "Attached is vocabulary for the record lifecycle events, as per DICOM Audit Message,",
  copyright:
    "These codes are excerpted from Digital Imaging and Communications in Medicine (DICOM) Standard, Part 16: Content Mapping Resource, Copyright © 2011 by the National Electrical Manufacturers Association.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "1", display: "Origination / Creation" },
    { code: "2", display: "Import / Copy" },
    { code: "3", display: "Amendment" },
    { code: "4", display: "Verification" },
    { code: "5", display: "Translation" },
    { code: "6", display: "Access / Use" },
    { code: "7", display: "De-identification" },
    { code: "8", display: "Aggregation / summarization / derivation" },
    { code: "9", display: "Report" },
    { code: "10", display: "Export" },
    { code: "11", display: "Disclosure" },
    { code: "12", display: "Receipt of disclosure" },
    { code: "13", display: "Archiving" },
    { code: "14", display: "Logical deletion" },
    { code: "15", display: "Permanent erasure / Physical destruction" },
  ],
};
