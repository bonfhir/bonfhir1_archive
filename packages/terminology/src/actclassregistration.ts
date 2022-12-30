/**
 * Represents the act of maintaining information about the registration of its associated registered subject. The subject can be either an Act or a Role, and includes subjects such as lab exam definitions, drug protocol definitions, prescriptions, persons, patients, practitioners, and equipment.

The registration may have a unique identifier - separate from the unique identification of the subject - as well as a core set of related participations and act relationships that characterize the registration event and aid in the disposition of the subject information by a receiving system.*Usage notes:* 
 * http://terminology.hl7.org/ValueSet/v3-ActClassRegistration
 */
export const ActClassRegistrationCode = {
  /**
   * registration
   */
  REG: "REG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassRegistrationCode =
  typeof ActClassRegistrationCode[keyof typeof ActClassRegistrationCode];
