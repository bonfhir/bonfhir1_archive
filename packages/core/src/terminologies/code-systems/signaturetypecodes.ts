export const SignatureTypeCodes = {
  resourceType: "CodeSystem",
  id: "signature-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system urn:iso-astm:E1762-95:2013 defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.1<a name="signature-type-1.462.46840.4610065.461.4612.461.461"> </a></td><td>Author\'s Signature</td><td>the signature of the primary or sole author of a health information document. There can be only one primary author of a health information document.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.2<a name="signature-type-1.462.46840.4610065.461.4612.461.462"> </a></td><td>Coauthor\'s Signature</td><td>the signature of a health information document coauthor. There can be multiple coauthors of a health information document.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.3<a name="signature-type-1.462.46840.4610065.461.4612.461.463"> </a></td><td>Co-participant\'s Signature</td><td>the signature of an individual who is a participant in the health information document but is not an author or coauthor. (Example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.)</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.4<a name="signature-type-1.462.46840.4610065.461.4612.461.464"> </a></td><td>Transcriptionist/Recorder Signature</td><td>the signature of an individual who has transcribed a dictated document or recorded written text into a digital machine readable format.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.5<a name="signature-type-1.462.46840.4610065.461.4612.461.465"> </a></td><td>Verification Signature</td><td>a signature verifying the information contained in a document. (Example a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.)</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.6<a name="signature-type-1.462.46840.4610065.461.4612.461.466"> </a></td><td>Validation Signature</td><td>a signature validating a health information document for inclusion in the patient record. (Example a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient\'s medical record.)</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.7<a name="signature-type-1.462.46840.4610065.461.4612.461.467"> </a></td><td>Consent Signature</td><td>the signature of an individual consenting to what is described in a health information document.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.8<a name="signature-type-1.462.46840.4610065.461.4612.461.468"> </a></td><td>Signature Witness Signature</td><td>the signature of a witness to any other signature.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.9<a name="signature-type-1.462.46840.4610065.461.4612.461.469"> </a></td><td>Event Witness Signature</td><td>the signature of a witness to an event. (Example the witness has observed a procedure and is attesting to this fact.)</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.10<a name="signature-type-1.462.46840.4610065.461.4612.461.4610"> </a></td><td>Identity Witness Signature</td><td>the signature of an individual who has witnessed another individual who is known to them signing a document. (Example the identity witness is a notary public.)</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.11<a name="signature-type-1.462.46840.4610065.461.4612.461.4611"> </a></td><td>Consent Witness Signature</td><td>the signature of an individual who has witnessed the health care provider counselling a patient.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.12<a name="signature-type-1.462.46840.4610065.461.4612.461.4612"> </a></td><td>Interpreter Signature</td><td>the signature of an individual who has translated health care information during an event or the obtaining of consent to a treatment.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.13<a name="signature-type-1.462.46840.4610065.461.4612.461.4613"> </a></td><td>Review Signature</td><td>the signature of a person, device, or algorithm that has reviewed or filtered data for inclusion into the patient record. ( Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.)</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.14<a name="signature-type-1.462.46840.4610065.461.4612.461.4614"> </a></td><td>Source Signature</td><td>the signature of an automated data source. (Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.)</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.15<a name="signature-type-1.462.46840.4610065.461.4612.461.4615"> </a></td><td>Addendum Signature</td><td>the signature on a new amended document of an individual who has corrected, edited, or amended an original health information document. An addendum signature can either be a signature type or a signature sub-type (see 8.1). Any document with an addendum signature shall have a companion document that is the original document with its original, unaltered content, and original signatures. The original document shall be referenced via an attribute in the new document, which contains, for example, the digest of the old document. Whether the original, unaltered, document is always displayed with the addended document is a local matter, but the original, unaltered, document must remain as part of the patient record and be retrievable on demand.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.16<a name="signature-type-1.462.46840.4610065.461.4612.461.4616"> </a></td><td>Modification Signature</td><td>the signature on an original document of an individual who has generated a new amended document. This (original) document shall reference the new document via an additional signature purpose. This is the inverse of an addendum signature and provides a pointer from the original to the amended document.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.17<a name="signature-type-1.462.46840.4610065.461.4612.461.4617"> </a></td><td>Administrative (Error/Edit) Signature</td><td>the signature of an individual who is certifying that the document is invalidated by an error(s), or is placed in the wrong chart. An administrative (error/edit) signature must include an addendum to the document and therefore shall have an addendum signature sub-type (see 8.1). This signature is reserved for the highest health information system administrative classification, since it is a statement that the entire document is invalidated by the error and that the document should no longer be used for patient care, although for legal reasons the document must remain part of the permanent patient record.</td></tr><tr><td style="white-space:nowrap">1.2.840.10065.1.12.1.18<a name="signature-type-1.462.46840.4610065.461.4612.461.4618"> </a></td><td>Timestamp Signature</td><td>the signature by an entity or device trusted to provide accurate timestamps. This timestamp might be provided, for example, in the signature time attribute.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "urn:iso-astm:E1762-95:2013",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.64",
    },
  ],
  version: "4.3.0",
  name: "SignatureTypeCodes",
  title: "Signature Type Codes",
  status: "draft",
  experimental: false,
  publisher: "ASTM",
  contact: [{ telecom: [{ system: "url", value: "http://www.astm.org/" }] }],
  description:
    "The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.",
  copyright:
    "These codes are excerpted from ASTM Standard, E1762-95(2013) - Standard Guide for Electronic Authentication of Health Care Information, Copyright by ASTM International, 100 Barr Harbor Drive, West Conshohocken, PA 19428. Copies of this standard are available through the ASTM Web Site at www.astm.org.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/signature-type",
  content: "complete",
  concept: [
    {
      code: "1.2.840.10065.1.12.1.1",
      display: "Author's Signature",
      definition:
        "the signature of the primary or sole author of a health information document. There can be only one primary author of a health information document.",
    },
    {
      code: "1.2.840.10065.1.12.1.2",
      display: "Coauthor's Signature",
      definition:
        "the signature of a health information document coauthor. There can be multiple coauthors of a health information document.",
    },
    {
      code: "1.2.840.10065.1.12.1.3",
      display: "Co-participant's Signature",
      definition:
        "the signature of an individual who is a participant in the health information document but is not an author or coauthor. (Example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.)",
    },
    {
      code: "1.2.840.10065.1.12.1.4",
      display: "Transcriptionist/Recorder Signature",
      definition:
        "the signature of an individual who has transcribed a dictated document or recorded written text into a digital machine readable format.",
    },
    {
      code: "1.2.840.10065.1.12.1.5",
      display: "Verification Signature",
      definition:
        "a signature verifying the information contained in a document. (Example a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.)",
    },
    {
      code: "1.2.840.10065.1.12.1.6",
      display: "Validation Signature",
      definition:
        "a signature validating a health information document for inclusion in the patient record. (Example a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.)",
    },
    {
      code: "1.2.840.10065.1.12.1.7",
      display: "Consent Signature",
      definition:
        "the signature of an individual consenting to what is described in a health information document.",
    },
    {
      code: "1.2.840.10065.1.12.1.8",
      display: "Signature Witness Signature",
      definition: "the signature of a witness to any other signature.",
    },
    {
      code: "1.2.840.10065.1.12.1.9",
      display: "Event Witness Signature",
      definition:
        "the signature of a witness to an event. (Example the witness has observed a procedure and is attesting to this fact.)",
    },
    {
      code: "1.2.840.10065.1.12.1.10",
      display: "Identity Witness Signature",
      definition:
        "the signature of an individual who has witnessed another individual who is known to them signing a document. (Example the identity witness is a notary public.)",
    },
    {
      code: "1.2.840.10065.1.12.1.11",
      display: "Consent Witness Signature",
      definition:
        "the signature of an individual who has witnessed the health care provider counselling a patient.",
    },
    {
      code: "1.2.840.10065.1.12.1.12",
      display: "Interpreter Signature",
      definition:
        "the signature of an individual who has translated health care information during an event or the obtaining of consent to a treatment.",
    },
    {
      code: "1.2.840.10065.1.12.1.13",
      display: "Review Signature",
      definition:
        "the signature of a person, device, or algorithm that has reviewed or filtered data for inclusion into the patient record. ( Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.)",
    },
    {
      code: "1.2.840.10065.1.12.1.14",
      display: "Source Signature",
      definition:
        "the signature of an automated data source. (Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.)",
    },
    {
      code: "1.2.840.10065.1.12.1.15",
      display: "Addendum Signature",
      definition:
        "the signature on a new amended document of an individual who has corrected, edited, or amended an original health information document. An addendum signature can either be a signature type or a signature sub-type (see 8.1). Any document with an addendum signature shall have a companion document that is the original document with its original, unaltered content, and original signatures. The original document shall be referenced via an attribute in the new document, which contains, for example, the digest of the old document. Whether the original, unaltered, document is always displayed with the addended document is a local matter, but the original, unaltered, document must remain as part of the patient record and be retrievable on demand.",
    },
    {
      code: "1.2.840.10065.1.12.1.16",
      display: "Modification Signature",
      definition:
        "the signature on an original document of an individual who has generated a new amended document. This (original) document shall reference the new document via an additional signature purpose. This is the inverse of an addendum signature and provides a pointer from the original to the amended document.",
    },
    {
      code: "1.2.840.10065.1.12.1.17",
      display: "Administrative (Error/Edit) Signature",
      definition:
        "the signature of an individual who is certifying that the document is invalidated by an error(s), or is placed in the wrong chart. An administrative (error/edit) signature must include an addendum to the document and therefore shall have an addendum signature sub-type (see 8.1). This signature is reserved for the highest health information system administrative classification, since it is a statement that the entire document is invalidated by the error and that the document should no longer be used for patient care, although for legal reasons the document must remain part of the permanent patient record.",
    },
    {
      code: "1.2.840.10065.1.12.1.18",
      display: "Timestamp Signature",
      definition:
        "the signature by an entity or device trusted to provide accurate timestamps. This timestamp might be provided, for example, in the signature time attribute.",
    },
  ],
};
