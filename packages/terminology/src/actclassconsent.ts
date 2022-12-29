/**
 * The Consent class represents informed consents and all similar medico-legal transactions between the patient (or his legal guardian) and the provider. Examples are informed consent for surgical procedures, informed consent for clinical trials, advanced beneficiary notice, against medical advice decline from service, release of information agreement, etc.

The details of consents vary. Often an institution has a number of different consent forms for various purposes, including reminding the physician about the topics to mention. Such forms also include patient education material. In electronic medical record communication, consents thus are information-generating acts on their own and need to be managed similar to medical activities. Thus, Consent is modeled as a special class of Act.

The "signatures" to the consent document are represented electronically through Participation instances to the consent object. Typically an informed consent has Participation.typeCode of "performer", the healthcare provider informing the patient, and "consenter", the patient or legal guardian. Some consent may associate a witness or a notary public (e.g., living wills, advanced directives). In consents where a healthcare provider is not required (e.g. living will), the performer may be the patient himself or a notary public.

Some consent has a minimum required delay between the consent and the service, so as to allow the patient to rethink his decisions. This minimum delay can be expressed in the act definition by the ActRelationship.pauseQuantity attribute that delays the service until the pause time has elapsed after the consent has been completed.
 * http://terminology.hl7.org/ValueSet/v3-ActClassConsent
 */
export const ActClassConsentCode = {
  /**
   * consent
   */
  consent: "CONS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassConsentCode =
  typeof ActClassConsentCode[keyof typeof ActClassConsentCode];
