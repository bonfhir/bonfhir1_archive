/**
 * An Act where a container is registered either via an automated sensor, such as a barcode reader, or by manual receipt
 * http://terminology.hl7.org/ValueSet/v3-ActClassContainerRegistration
 */
export const ActClassContainerRegistrationCode = {
  /**
   * container registration
   */
  containerregistration: "CONTREG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassContainerRegistrationCode =
  typeof ActClassContainerRegistrationCode[keyof typeof ActClassContainerRegistrationCode];
