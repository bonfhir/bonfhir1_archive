/**
 * Ability of the primary source to push updates/alerts
 * http://hl7.org/fhir/ValueSet/verificationresult-can-push-updates
 */
export const canpushupdatesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type canpushupdatesCode =
  typeof canpushupdatesCode[keyof typeof canpushupdatesCode];
