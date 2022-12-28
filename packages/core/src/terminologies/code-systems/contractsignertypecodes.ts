export const ContractSignerTypeCodes = {
  resourceType: "CodeSystem",
  id: "contract-signer-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-signer-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">AMENDER<a name="contract-signer-type-AMENDER"> </a></td><td>Amender</td><td>A person who has corrected, edited, or amended pre-existing information.</td></tr><tr><td style="white-space:nowrap">AUTHN<a name="contract-signer-type-AUTHN"> </a></td><td>Authenticator</td><td>A person in the role of verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate information content. An example would be a resident physician who sees a patient and dictates a note, then later signs it. The resident\'s signature constitutes an authentication.</td></tr><tr><td style="white-space:nowrap">AUT<a name="contract-signer-type-AUT"> </a></td><td>Author</td><td>An entity that authored specific content. There can be multiple authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.</td></tr><tr><td style="white-space:nowrap">AFFL<a name="contract-signer-type-AFFL"> </a></td><td>Affiliate</td><td>An entity that has a business or professional relationship with another entity in accordance with an agreement.</td></tr><tr><td style="white-space:nowrap">AGNT<a name="contract-signer-type-AGNT"> </a></td><td>Agent</td><td>An entity that acts or is authorized to act on behalf of another entity in accordance with an agreement.</td></tr><tr><td style="white-space:nowrap">ASSIGNED<a name="contract-signer-type-ASSIGNED"> </a></td><td>Assigned Entity</td><td>An agent role in which the agent is an Entity acting in the employ of an organization. The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the \'Human Resources\' relationship between the employee and the organization.</td></tr><tr><td style="white-space:nowrap">CIT<a name="contract-signer-type-CIT"> </a></td><td>Citizen</td><td>The member of a jurisdiction afforded certain rights and encumbered with certain obligation in accordance with jurisdictional policy.</td></tr><tr><td style="white-space:nowrap">CLAIMANT<a name="contract-signer-type-CLAIMANT"> </a></td><td>Claimant</td><td>A party that makes a claim for coverage under a policy.</td></tr><tr><td style="white-space:nowrap">COAUTH<a name="contract-signer-type-COAUTH"> </a></td><td>Co-Author</td><td>The entity that co-authored content. There can be multiple co-authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.</td></tr><tr><td style="white-space:nowrap">CONSENTER<a name="contract-signer-type-CONSENTER"> </a></td><td>Consenter</td><td>A patient or patient representative who is the grantee in a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.</td></tr><tr><td style="white-space:nowrap">CONSWIT<a name="contract-signer-type-CONSWIT"> </a></td><td>Consent Witness</td><td>A person who has witnessed and attests to observing a patient being counseled about a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive.</td></tr><tr><td style="white-space:nowrap">CONT<a name="contract-signer-type-CONT"> </a></td><td>Contact</td><td>A person or an organization that provides or receives information regarding another entity. Examples; patient NOK and emergency contacts; guarantor contact; employer contact.</td></tr><tr><td style="white-space:nowrap">COPART<a name="contract-signer-type-COPART"> </a></td><td>Co-Participant</td><td>A person who participates in the generation of and attest to veracity of content but is not an author or co-author. For example, a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.</td></tr><tr><td style="white-space:nowrap">COVPTY<a name="contract-signer-type-COVPTY"> </a></td><td>Covered Party</td><td>An entity, which is the insured, that receives benefits such as healthcare services, reimbursement for out-of-pocket expenses, or compensation for losses through coverage under the terms of an insurance policy. The underwriter of that policy is the scoping entity. The covered party receives coverage because of some contractual or other relationship with the holder of that policy. Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder. Thus the notion of covered party is a role that is distinct from that of the policy holder.</td></tr><tr><td style="white-space:nowrap">DELEGATEE<a name="contract-signer-type-DELEGATEE"> </a></td><td>Delegatee</td><td>A party to whom some right or authority is delegated by a delegator.</td></tr><tr><td style="white-space:nowrap">delegator<a name="contract-signer-type-delegator"> </a></td><td>Delegator</td><td>A party that delegates a right or authority to another party.</td></tr><tr><td style="white-space:nowrap">DEPEND<a name="contract-signer-type-DEPEND"> </a></td><td>Dependent</td><td>A person covered under an insurance policy or program based on an association with a subscriber, which is recognized by the policy holder. The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child. The policy holder may be required by law to recognize certain associations or may have discretion about the associations. For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents. Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently-abled or deceased, a guardian ad lidem or estate executor may be appointed to assume the subscriber\'s legal standing in the relationship with the dependent.</td></tr><tr><td style="white-space:nowrap">DPOWATT<a name="contract-signer-type-DPOWATT"> </a></td><td>Durable Power of Attorney</td><td>A person who has been granted the authority to represent or act on another\'s behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.</td></tr><tr><td style="white-space:nowrap">EMGCON<a name="contract-signer-type-EMGCON"> </a></td><td>Emergency Contact</td><td>An entity to be contacted in the event of an emergency</td></tr><tr><td style="white-space:nowrap">EVTWIT<a name="contract-signer-type-EVTWIT"> </a></td><td>Event Witness</td><td>A person who attests to observing an occurrence.  For example, the witness has observed a procedure and is attesting to this fact.</td></tr><tr><td style="white-space:nowrap">EXCEST<a name="contract-signer-type-EXCEST"> </a></td><td>Executor of Estate</td><td>A person who has been granted the authority to act as an estate executor for a deceased person who was the responsible party.</td></tr><tr><td style="white-space:nowrap">GRANTEE<a name="contract-signer-type-GRANTEE"> </a></td><td>Grantee</td><td>A person who grants to another person the authority to represent or act on that person\'s behalf.  Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.</td></tr><tr><td style="white-space:nowrap">GRANTOR<a name="contract-signer-type-GRANTOR"> </a></td><td>Grantor</td><td>A person who has been granted the authority to represent or act on another\'s behalf. Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.</td></tr><tr><td style="white-space:nowrap">GUAR<a name="contract-signer-type-GUAR"> </a></td><td>Guarantor</td><td>A person or organization contractually recognized by the issuer as an entity that has assumed fiscal responsibility (e.g., by making or giving a promise, assurance, or pledge) for another entity\'s financial obligations by guaranteeing to pay for amounts owed to a particular account.  In a healthcare context, the account may be a patient\'s billing account for services rendered by a provider or a health plan premium account.</td></tr><tr><td style="white-space:nowrap">GUARD<a name="contract-signer-type-GUARD"> </a></td><td>Guardian</td><td>A person or organization legally empowered with responsibility for the care of a ward.</td></tr><tr><td style="white-space:nowrap">GUADLTM<a name="contract-signer-type-GUADLTM"> </a></td><td>Guardian ad lidem</td><td>A person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.</td></tr><tr><td style="white-space:nowrap">INF<a name="contract-signer-type-INF"> </a></td><td>Informant</td><td>An entity that is the source of reported information (e.g., a next of kin who answers questions about the patient\'s history). For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.</td></tr><tr><td style="white-space:nowrap">INTPRT<a name="contract-signer-type-INTPRT"> </a></td><td>Interpreter</td><td>A person who converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient\'s consent to treatment or permission to disclose information.</td></tr><tr><td style="white-space:nowrap">INSBJ<a name="contract-signer-type-INSBJ"> </a></td><td>Investigation Subject</td><td>An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.</td></tr><tr><td style="white-space:nowrap">HPOWATT<a name="contract-signer-type-HPOWATT"> </a></td><td>Healthcare Power of Attorney</td><td>A person who has been granted the authority to represent or act on another\'s behalf for healthcare related matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific healthcare legal rights belonging to the grantee such as signing a consent directive; (2) performing specific healthcare related legal duties on behalf of a grantee such as claims payment; and (3) making specific healthcare legal decisions concerning a grantee such as consenting to healthcare services.</td></tr><tr><td style="white-space:nowrap">HPROV<a name="contract-signer-type-HPROV"> </a></td><td>Healthcare Provider</td><td>An entity that is authorized to provide health care services by an authorizing organization or jurisdiction.</td></tr><tr><td style="white-space:nowrap">LEGAUTHN<a name="contract-signer-type-LEGAUTHN"> </a></td><td>Legal Authenticator</td><td>A person in the role of verifier who attests to the accuracy of information content, and who has privileges to certify the legal authenticity of that content with a signature that constitutes a legal authentication.  For example, a licensed physician who signs a consult authored by a resident physician who authenticated it.</td></tr><tr><td style="white-space:nowrap">NMDINS<a name="contract-signer-type-NMDINS"> </a></td><td>Named Insured</td><td>A party to an insurance policy under which the insurer agrees to indemnify for losses, provides benefits for, or renders services. A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subject that is the named insured under a comprehensive automobile, disability, or property and casualty policy.  The named insured and might or might not be the policy holder.</td></tr><tr><td style="white-space:nowrap">NOK<a name="contract-signer-type-NOK"> </a></td><td>Next of Kin</td><td>A person, who is a type of contact, designated to receive notifications on behalf of another person who is a relative.</td></tr><tr><td style="white-space:nowrap">NOTARY<a name="contract-signer-type-NOTARY"> </a></td><td>Notary</td><td>The party credentialed to legally attest to the contract binding by verifying the identity and capacity of the grantor and grantee, and witnessing their signing of the contract or agreement such as a real estate transaction, pre-nuptial agreement, or a will.</td></tr><tr><td style="white-space:nowrap">PAT<a name="contract-signer-type-PAT"> </a></td><td>Patient</td><td>A person, animal, or other living subject that is the actual or potential recipient of health care services.</td></tr><tr><td style="white-space:nowrap">POWATT<a name="contract-signer-type-POWATT"> </a></td><td>Power of Attorney</td><td>A person who has been granted the authority to represent or act on another\'s behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as signing a contract; (2) performing specific legal duties on behalf of a grantee such as making loan payments; and (3) making specific legal decisions concerning a grantee such as financial investment decisions.</td></tr><tr><td style="white-space:nowrap">PRIMAUTH<a name="contract-signer-type-PRIMAUTH"> </a></td><td>Primary Author</td><td>An entity that is the primary or sole author of information content.  In the healthcare context, there can be only one primary author of health information content in a record entry or document.</td></tr><tr><td style="white-space:nowrap">PRIRECIP<a name="contract-signer-type-PRIRECIP"> </a></td><td>Primary Responsible Party</td><td>An entity that may, should receive, or has received information or an object to which it was primarily addressed.</td></tr><tr><td style="white-space:nowrap">RECIP<a name="contract-signer-type-RECIP"> </a></td><td>Recipient</td><td>An entity that may, should receive, or has received information or an object, which might not have been primarily addressed to it. For example, the staff of a provider, a clearinghouse, or other intermediary.</td></tr><tr><td style="white-space:nowrap">RESPRSN<a name="contract-signer-type-RESPRSN"> </a></td><td>Responsible Party</td><td>An entity that has legal responsibility for another party.</td></tr><tr><td style="white-space:nowrap">REVIEWER<a name="contract-signer-type-REVIEWER"> </a></td><td>Reviewer</td><td>A person, device, or algorithm that has used approved criteria for filtered data for inclusion into the patient record.  Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.</td></tr><tr><td style="white-space:nowrap">TRANS<a name="contract-signer-type-TRANS"> </a></td><td>Transcriber</td><td>An entity entering the data into the originating system. This includes the transcriptionist for dictated text transcribed into electronic form.</td></tr><tr><td style="white-space:nowrap">SOURCE<a name="contract-signer-type-SOURCE"> </a></td><td>Source</td><td>An automated data source that generates a signature along with content. Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.</td></tr><tr><td style="white-space:nowrap">SPOWATT<a name="contract-signer-type-SPOWATT"> </a></td><td>Special Power of Attorney</td><td>A person who has been granted the authority to represent or act on another\'s behalf for a limited set of specific matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as drafting a will; (2) performing specific legal duties on behalf of a grantee such as making a reversible mortgage to pay for end of life expenses; and (3) making specific legal decisions concerning a grantee such as managing a trust.</td></tr><tr><td style="white-space:nowrap">VALID<a name="contract-signer-type-VALID"> </a></td><td>Validator</td><td>A person who validates a health information document for inclusion in the patient record. For example, a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient\'s medical record.</td></tr><tr><td style="white-space:nowrap">VERF<a name="contract-signer-type-VERF"> </a></td><td>Verifier</td><td>A person who asserts the correctness and appropriateness of an act or the recording of the act, and is accountable for the assertion that the act or the recording of the act complies with jurisdictional or organizational policy. For example, a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.</td></tr><tr><td style="white-space:nowrap">WIT<a name="contract-signer-type-WIT"> </a></td><td>Witness</td><td>A person witnessing the signature of another party. A witness is not knowledgeable about the content being signed, much less approves of anything stated in the content. For example, an advanced directive witness or a witness that a party to a contract signed that certain demographic or financial information is truthful.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-signer-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "ContractSignerTypeCodes",
  title: "Contract Signer Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Contract Signer Type codes.",
  copyright:
    "This is an example set based on ASTM Standard, E1762-95 (2013) HL7 RoleClass OID 2.16.840.1.113883.5.110, HL7 Role Code 2.16.840.1.113883.5.111, HL7 ParticipationType OID: 2.16.840.1.113883.5.90, HL7 ParticipationFunction codes at OID: 2.16.840.1.113883.5.88, and HL7 Security and Privacy Domain Analysis Model roles classes.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "AMENDER",
      display: "Amender",
      definition:
        "A person who has corrected, edited, or amended pre-existing information.",
    },
    {
      code: "AUTHN",
      display: "Authenticator",
      definition:
        "A person in the role of verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate information content. An example would be a resident physician who sees a patient and dictates a note, then later signs it. The resident's signature constitutes an authentication.",
    },
    {
      code: "AUT",
      display: "Author",
      definition:
        "An entity that authored specific content. There can be multiple authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.",
    },
    {
      code: "AFFL",
      display: "Affiliate",
      definition:
        "An entity that has a business or professional relationship with another entity in accordance with an agreement.",
    },
    {
      code: "AGNT",
      display: "Agent",
      definition:
        "An entity that acts or is authorized to act on behalf of another entity in accordance with an agreement.",
    },
    {
      code: "ASSIGNED",
      display: "Assigned Entity",
      definition:
        "An agent role in which the agent is an Entity acting in the employ of an organization. The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.",
    },
    {
      code: "CIT",
      display: "Citizen",
      definition:
        "The member of a jurisdiction afforded certain rights and encumbered with certain obligation in accordance with jurisdictional policy.",
    },
    {
      code: "CLAIMANT",
      display: "Claimant",
      definition: "A party that makes a claim for coverage under a policy.",
    },
    {
      code: "COAUTH",
      display: "Co-Author",
      definition:
        "The entity that co-authored content. There can be multiple co-authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.",
    },
    {
      code: "CONSENTER",
      display: "Consenter",
      definition:
        "A patient or patient representative who is the grantee in a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.",
    },
    {
      code: "CONSWIT",
      display: "Consent Witness",
      definition:
        "A person who has witnessed and attests to observing a patient being counseled about a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive.",
    },
    {
      code: "CONT",
      display: "Contact",
      definition:
        "A person or an organization that provides or receives information regarding another entity. Examples; patient NOK and emergency contacts; guarantor contact; employer contact.",
    },
    {
      code: "COPART",
      display: "Co-Participant",
      definition:
        "A person who participates in the generation of and attest to veracity of content but is not an author or co-author. For example, a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.",
    },
    {
      code: "COVPTY",
      display: "Covered Party",
      definition:
        "An entity, which is the insured, that receives benefits such as healthcare services, reimbursement for out-of-pocket expenses, or compensation for losses through coverage under the terms of an insurance policy. The underwriter of that policy is the scoping entity. The covered party receives coverage because of some contractual or other relationship with the holder of that policy. Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder. Thus the notion of covered party is a role that is distinct from that of the policy holder.",
    },
    {
      code: "DELEGATEE",
      display: "Delegatee",
      definition:
        "A party to whom some right or authority is delegated by a delegator.",
    },
    {
      code: "delegator",
      display: "Delegator",
      definition:
        "A party that delegates a right or authority to another party.",
    },
    {
      code: "DEPEND",
      display: "Dependent",
      definition:
        "A person covered under an insurance policy or program based on an association with a subscriber, which is recognized by the policy holder. The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child. The policy holder may be required by law to recognize certain associations or may have discretion about the associations. For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents. Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently-abled or deceased, a guardian ad lidem or estate executor may be appointed to assume the subscriber's legal standing in the relationship with the dependent.",
    },
    {
      code: "DPOWATT",
      display: "Durable Power of Attorney",
      definition:
        "A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.",
    },
    {
      code: "EMGCON",
      display: "Emergency Contact",
      definition: "An entity to be contacted in the event of an emergency",
    },
    {
      code: "EVTWIT",
      display: "Event Witness",
      definition:
        "A person who attests to observing an occurrence.  For example, the witness has observed a procedure and is attesting to this fact.",
    },
    {
      code: "EXCEST",
      display: "Executor of Estate",
      definition:
        "A person who has been granted the authority to act as an estate executor for a deceased person who was the responsible party.",
    },
    {
      code: "GRANTEE",
      display: "Grantee",
      definition:
        "A person who grants to another person the authority to represent or act on that person's behalf.  Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.",
    },
    {
      code: "GRANTOR",
      display: "Grantor",
      definition:
        "A person who has been granted the authority to represent or act on another's behalf. Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.",
    },
    {
      code: "GUAR",
      display: "Guarantor",
      definition:
        "A person or organization contractually recognized by the issuer as an entity that has assumed fiscal responsibility (e.g., by making or giving a promise, assurance, or pledge) for another entity's financial obligations by guaranteeing to pay for amounts owed to a particular account.  In a healthcare context, the account may be a patient's billing account for services rendered by a provider or a health plan premium account.",
    },
    {
      code: "GUARD",
      display: "Guardian",
      definition:
        "A person or organization legally empowered with responsibility for the care of a ward.",
    },
    {
      code: "GUADLTM",
      display: "Guardian ad lidem",
      definition:
        "A person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.",
    },
    {
      code: "INF",
      display: "Informant",
      definition:
        "An entity that is the source of reported information (e.g., a next of kin who answers questions about the patient's history). For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.",
    },
    {
      code: "INTPRT",
      display: "Interpreter",
      definition:
        "A person who converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information.",
    },
    {
      code: "INSBJ",
      display: "Investigation Subject",
      definition:
        "An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.",
    },
    {
      code: "HPOWATT",
      display: "Healthcare Power of Attorney",
      definition:
        "A person who has been granted the authority to represent or act on another's behalf for healthcare related matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific healthcare legal rights belonging to the grantee such as signing a consent directive; (2) performing specific healthcare related legal duties on behalf of a grantee such as claims payment; and (3) making specific healthcare legal decisions concerning a grantee such as consenting to healthcare services.",
    },
    {
      code: "HPROV",
      display: "Healthcare Provider",
      definition:
        "An entity that is authorized to provide health care services by an authorizing organization or jurisdiction.",
    },
    {
      code: "LEGAUTHN",
      display: "Legal Authenticator",
      definition:
        "A person in the role of verifier who attests to the accuracy of information content, and who has privileges to certify the legal authenticity of that content with a signature that constitutes a legal authentication.  For example, a licensed physician who signs a consult authored by a resident physician who authenticated it.",
    },
    {
      code: "NMDINS",
      display: "Named Insured",
      definition:
        "A party to an insurance policy under which the insurer agrees to indemnify for losses, provides benefits for, or renders services. A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subject that is the named insured under a comprehensive automobile, disability, or property and casualty policy.  The named insured and might or might not be the policy holder.",
    },
    {
      code: "NOK",
      display: "Next of Kin",
      definition:
        "A person, who is a type of contact, designated to receive notifications on behalf of another person who is a relative.",
    },
    {
      code: "NOTARY",
      display: "Notary",
      definition:
        "The party credentialed to legally attest to the contract binding by verifying the identity and capacity of the grantor and grantee, and witnessing their signing of the contract or agreement such as a real estate transaction, pre-nuptial agreement, or a will.",
    },
    {
      code: "PAT",
      display: "Patient",
      definition:
        "A person, animal, or other living subject that is the actual or potential recipient of health care services.",
    },
    {
      code: "POWATT",
      display: "Power of Attorney",
      definition:
        "A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as signing a contract; (2) performing specific legal duties on behalf of a grantee such as making loan payments; and (3) making specific legal decisions concerning a grantee such as financial investment decisions.",
    },
    {
      code: "PRIMAUTH",
      display: "Primary Author",
      definition:
        "An entity that is the primary or sole author of information content.  In the healthcare context, there can be only one primary author of health information content in a record entry or document.",
    },
    {
      code: "PRIRECIP",
      display: "Primary Responsible Party",
      definition:
        "An entity that may, should receive, or has received information or an object to which it was primarily addressed.",
    },
    {
      code: "RECIP",
      display: "Recipient",
      definition:
        "An entity that may, should receive, or has received information or an object, which might not have been primarily addressed to it. For example, the staff of a provider, a clearinghouse, or other intermediary.",
    },
    {
      code: "RESPRSN",
      display: "Responsible Party",
      definition: "An entity that has legal responsibility for another party.",
    },
    {
      code: "REVIEWER",
      display: "Reviewer",
      definition:
        "A person, device, or algorithm that has used approved criteria for filtered data for inclusion into the patient record.  Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.",
    },
    {
      code: "TRANS",
      display: "Transcriber",
      definition:
        "An entity entering the data into the originating system. This includes the transcriptionist for dictated text transcribed into electronic form.",
    },
    {
      code: "SOURCE",
      display: "Source",
      definition:
        "An automated data source that generates a signature along with content. Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.",
    },
    {
      code: "SPOWATT",
      display: "Special Power of Attorney",
      definition:
        "A person who has been granted the authority to represent or act on another's behalf for a limited set of specific matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as drafting a will; (2) performing specific legal duties on behalf of a grantee such as making a reversible mortgage to pay for end of life expenses; and (3) making specific legal decisions concerning a grantee such as managing a trust.",
    },
    {
      code: "VALID",
      display: "Validator",
      definition:
        "A person who validates a health information document for inclusion in the patient record. For example, a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.",
    },
    {
      code: "VERF",
      display: "Verifier",
      definition:
        "A person who asserts the correctness and appropriateness of an act or the recording of the act, and is accountable for the assertion that the act or the recording of the act complies with jurisdictional or organizational policy. For example, a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.",
    },
    {
      code: "WIT",
      display: "Witness",
      definition:
        "A person witnessing the signature of another party. A witness is not knowledgeable about the content being signed, much less approves of anything stated in the content. For example, an advanced directive witness or a witness that a party to a contract signed that certain demographic or financial information is truthful.",
    },
  ],
};
