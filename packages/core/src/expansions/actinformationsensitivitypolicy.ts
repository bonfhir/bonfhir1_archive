/**
 * ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises. Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values.
 * http://terminology.hl7.org/ValueSet/v3-ActInformationSensitivityPolicy
 */
export const ActInformationSensitivityPolicyCode = {
  /**
   * ActInformationSensitivityPolicy
   */
  _ActInformationSensitivityPolicy: "_ActInformationSensitivityPolicy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInformationSensitivityPolicyCode =
  typeof ActInformationSensitivityPolicyCode[keyof typeof ActInformationSensitivityPolicyCode];
