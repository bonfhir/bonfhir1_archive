export const ConsentCategoryCodes = {
  resourceType: "CodeSystem",
  id: "consent-category",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/consentcategorycodes defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">acd<a name="consent-category-acd"> </a></td><td>Advance Directive</td><td>Any instructions, written or given verbally by a patient to a health care provider in anticipation of potential need for medical treatment. [2005 Honor My Wishes]</td></tr><tr><td style="white-space:nowrap">dnr<a name="consent-category-dnr"> </a></td><td>Do Not Resuscitate</td><td>A legal document, signed by both the patient and their provider, stating a desire not to have CPR initiated in case of a cardiac event. Note: This form was replaced in 2003 with the Physician Orders for Life-Sustaining Treatment [POLST].</td></tr><tr><td style="white-space:nowrap">emrgonly<a name="consent-category-emrgonly"> </a></td><td>Emergency Only</td><td>Opt-in to disclosure of health information for emergency only consent directive. Comment: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]</td></tr><tr><td style="white-space:nowrap">hcd<a name="consent-category-hcd"> </a></td><td>Health Care Directive</td><td>Patient\'s document telling patient\'s health care provider what the patient wants or does not want if the patient is diagnosed as being terminally ill and in a persistent vegetative state or in a permanently unconscious condition.[2005 Honor My Wishes]</td></tr><tr><td style="white-space:nowrap">npp<a name="consent-category-npp"> </a></td><td>Notice of Privacy Practices</td><td>Acknowledgement of custodian notice of privacy practices. Usage Notes: This type of consent directive acknowledges a custodian\'s notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]</td></tr><tr><td style="white-space:nowrap">polst<a name="consent-category-polst"> </a></td><td>POLST</td><td>The Physician Order for Life-Sustaining Treatment form records a person\'s health care wishes for end of life emergency treatment and translates them into an order by the physician. It must be reviewed and signed by both the patient and the physician, Advanced Registered Nurse Practitioner or Physician Assistant. [2005 Honor My Wishes] Comment: Opt-in Consent Directive with restrictions.</td></tr><tr><td style="white-space:nowrap">research<a name="consent-category-research"> </a></td><td>Research Information Access</td><td>Consent to have healthcare information in an electronic health record accessed for research purposes. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]</td></tr><tr><td style="white-space:nowrap">rsdid<a name="consent-category-rsdid"> </a></td><td>De-identified Information Access</td><td>Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)</td></tr><tr><td style="white-space:nowrap">rsreid<a name="consent-category-rsreid"> </a></td><td>Re-identifiable Information Access</td><td>Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cbcc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/consentcategorycodes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1226",
    },
  ],
  version: "4.3.0",
  name: "ConsentCategoryCodes",
  title: "Consent Category Codes",
  status: "draft",
  experimental: false,
  description: "FHIR Specific Example codes for Consent Category",
  caseSensitive: true,
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "acd",
      display: "Advance Directive",
      definition:
        "Any instructions, written or given verbally by a patient to a health care provider in anticipation of potential need for medical treatment. [2005 Honor My Wishes]",
    },
    {
      code: "dnr",
      display: "Do Not Resuscitate",
      definition:
        "A legal document, signed by both the patient and their provider, stating a desire not to have CPR initiated in case of a cardiac event. Note: This form was replaced in 2003 with the Physician Orders for Life-Sustaining Treatment [POLST].",
    },
    {
      code: "emrgonly",
      display: "Emergency Only",
      definition:
        "Opt-in to disclosure of health information for emergency only consent directive. Comment: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]",
    },
    {
      code: "hcd",
      display: "Health Care Directive",
      definition:
        "Patient's document telling patient's health care provider what the patient wants or does not want if the patient is diagnosed as being terminally ill and in a persistent vegetative state or in a permanently unconscious condition.[2005 Honor My Wishes]",
    },
    {
      code: "npp",
      display: "Notice of Privacy Practices",
      definition:
        "Acknowledgement of custodian notice of privacy practices. Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified. [ActConsentDirective (2.16.840.1.113883.1.11.20425)]",
    },
    {
      code: "polst",
      display: "POLST",
      definition:
        "The Physician Order for Life-Sustaining Treatment form records a person's health care wishes for end of life emergency treatment and translates them into an order by the physician. It must be reviewed and signed by both the patient and the physician, Advanced Registered Nurse Practitioner or Physician Assistant. [2005 Honor My Wishes] Comment: Opt-in Consent Directive with restrictions.",
    },
    {
      code: "research",
      display: "Research Information Access",
      definition:
        "Consent to have healthcare information in an electronic health record accessed for research purposes. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]",
    },
    {
      code: "rsdid",
      display: "De-identified Information Access",
      definition:
        "Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)",
    },
    {
      code: "rsreid",
      display: "Re-identifiable Information Access",
      definition:
        "Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent. [VALUE SET: ActConsentType (2.16.840.1.113883.1.11.19897)]",
    },
  ],
};
